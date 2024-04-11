import React, { useState } from 'react'
import { uid } from '../../assets/utils'
import { type tUseState, useWatch } from '../../assets/Hooks/hook'
import { useTheme } from '../../assets/Hooks/theme'
import { useBookMarks } from '../../assets/Hooks/useBookMarks'
import { useConfig } from '../../assets/config'

interface settingItem {
  id: string
  value: string
  title: string
  use: boolean
  [key: string]: any
}

const filtersDefault: settingItem[] = [
  {
    id: uid(),
    value: 'csdn',
    title: 'CSDN',
    use: true
  }
]

const usesDefault: settingItem[] = [
  {
    id: uid(),
    value: 'https://cn.bing.com/search?PC=U474&q=',
    title: 'BING',
    use: true
  },
  {
    id: uid(),
    value: 'https://www.baidu.com/s?wd=',
    title: 'BAIDU',
    use: false
  }
]

function useNewTabSetting() {
  const [Config, { setConfig, getConfig }]: any[] = useConfig()
  const [filters, setFilters]: any = useState([])
  const [uses, setUses]: any = useState([])
  const { newTabSetting } = Config

  const [params, updateParams] = useState('')
  const [useUrl, updateUseUrl] = useState('https://cn.bing.com/search?PC=U474&q=')

  const handleSetFilterAndUse: any = (toFilters: settingItem[], toUses: settingItem[]): void => {
    setFilters(JSON.parse(JSON.stringify(toFilters)))
    setUses(JSON.parse(JSON.stringify(toUses)))
    setConfig({
      [newTabSetting]: {
        filters: toFilters,
        uses: toUses
      }
    })
    let tempParams = ''
    toFilters.forEach((item: any): void => {
      if (item.use) {
        tempParams += ' -' + item.value
      }
    })

    updateParams(tempParams)

    toUses.every((item: any): boolean => {
      if (item.use) {
        updateUseUrl(item.value)
        return false
      }
      return true
    })
  }

  React.useEffect((): void => {
    handleSetFilterAndUse(filtersDefault, usesDefault)

    getConfig(newTabSetting, (value: any): void => {
      if (value === undefined) {
        handleSetFilterAndUse(filtersDefault, usesDefault)
      } else {
        const { filters: tfilters = filtersDefault, uses: tuses = usesDefault }: any = value
        handleSetFilterAndUse(tfilters, tuses)
      }
    })
  }, [])

  const updateFilters: any = (id: string, use: boolean): boolean => {
    let tempParams = ''
    const newFilters: settingItem[] = filters.map((item: settingItem): settingItem => {
      if (item.id === id) {
        item.use = use
      }
      if (item.use) {
        tempParams += ' -' + item.value
      }
      return item
    })
    updateParams(tempParams)
    handleSetFilterAndUse(newFilters, uses)
    return true
  }

  const updateUses: any = (id: string, use: boolean): boolean => {
    const newUses: settingItem[] = uses.map((item: settingItem): settingItem => {
      if (use === true) {
        if (item.id === id) {
          item.use = true
          updateUseUrl(item.value)
        } else {
          item.use = false
        }
        item.id = uid()
      }
      if (use === false && item.id === id) {
        item.use = false
      }

      return item
    })
    handleSetFilterAndUse(filters, newUses)
    return true
  }

  return [filters, uses, { updateFilters, updateUses, params, useUrl }]
}

export { useTheme, useWatch, tUseState, useBookMarks, useNewTabSetting }
