import React from 'react'
import { isEffectArray, isNumber, isString } from 'asura-eye'
import type { ItemType } from './type'
import { Child } from './child'
import { useSetState } from '0hook'
import { ObjectType } from '0type'
import { getStat } from './util'
import { deepClone } from 'abandonjs'

export interface bookMarksItemProps {
  bookMarks: any[]
  onlyShow?: string
  noShow?: string
  [key: string]: any
}

const BookMarksCom = (props: bookMarksItemProps) => {
  const { bookMarks = [], onlyShow, noShow }: bookMarksItemProps = props

  const [list, setList] = React.useState<ItemType[]>([])

  const adapterBookMark = (list: any[], props?: ItemType): ItemType[] => {
    if (!isEffectArray(list)) return []
    const newList: ItemType[] = []
    const { depth = -1, config: fatherConfig = [] } = props || {}
    list.forEach((item: any): any => {
      if (noShow && noShow === item.title) return
      if (onlyShow && onlyShow !== item.title) return

      const getTitle = () => {
        if (item.children) {
          item.title.split('_') as string[]
        }
        return [item.title]
      }
      const [title, ...config] = getTitle()
      const itemConfig = [...config]
      if (itemConfig.includes('hidden')) return

      const temp: ItemType = {
        label: title,
        config: [...fatherConfig, ...config].map(_ => _.toUpperCase()),
        url: item.url || '',
        urls: [],
        depth: depth + 1,
        children: []
      }

      temp.children = adapterBookMark(item.children, temp)
      newList.push(temp)
    })
    return newList
  }

  const [state, _setState] = useSetState<
    ObjectType<{
      open: '0' | '1'
      columnCount: number
    }>
  >({})

  const cacheKey = 'Newtab-modules-conf'

  const setState = (val: ObjectType) => {
    localStorage.setItem(cacheKey, JSON.stringify({ ...state, ...val }))
    _setState(val as any)
  }

  const handleClick = (record: ObjectType | any, flag: 'open' | 'add' | 'minus', vid: string) => {
    const { label } = record
    if (!isString(label)) return

    const conf = state[label] || { open: '0', columnCount: 1 }
    if (flag === 'open') {
      conf.open = conf.open === '1' ? '0' : '1'
    }
    if (flag === 'add') {
      conf.columnCount =
        isNumber(conf.columnCount) && conf.columnCount >= 0
          ? Math.min(4, Math.max(2, conf.columnCount + 1))
          : 1
    }
    if (flag === 'minus') {
      conf.columnCount =
        isNumber(conf.columnCount) && conf.columnCount >= 0 ? Math.max(1, conf.columnCount - 1) : 1
    }

    setState({
      [vid]: conf
    })
  }

  React.useEffect(() => {
    if (!bookMarks.length) return
    setList(adapterBookMark(bookMarks))
    try {
      const cache = localStorage.getItem(cacheKey) || '{}'
      _setState(JSON.parse(cache))
    } catch (error) {
      console.log('no newTab cache')
    }
  }, [bookMarks.length])

  const stat = getStat(deepClone(list))

  return (
    <div className='modules-layout'>
      {stat.map((item, i) => (
        <Child key={i} list={item.list} state={state} handleClick={handleClick} />
      ))}
    </div>
  )
}

export default BookMarksCom
