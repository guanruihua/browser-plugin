import React from 'react'
// import { Img } from '../../../components'
import { windowOpenUrl } from '../utils'
import { isEffectArray } from 'asura-eye'
import { classNames } from 'harpe'
import type { ItemType } from './type'
import { Child } from './child'
import { useLocalStorage, useSetState } from '0hook'
import { ObjectType } from '0type'

export interface bookMarksItemProps {
  bookMarks: any[]
  onlyShow?: string
  noShow?: string
  [key: string]: any
}
const reg =
  /\?|!|\s-?\s?npm|\s-?\s?掘金|\s-?\s?博客园|\s-?\s?CSDN|\s-?\s?博客|\s-?\s?知乎|\s-?\s?SegmentFault|思否|(【.+】)|(-$)|\(\d+条消息\)`/gi
function handleTitle(title: string): string {
  return title.replace(reg, '')
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

      const [title, ...config] = item.title.split('_') as string[]
      const itemConfig = [...config]
      if (itemConfig.includes('hidden')) return

      const temp: ItemType = {
        label: handleTitle(title),
        config: [...fatherConfig, ...config],
        url: item.url || '',
        urls: [],
        depth: depth + 1,
        children: []
      }

      if (['INDEX', 'WORKSPACE'].includes(title.toUpperCase())) {
        temp.config?.unshift(title.toUpperCase())
      }

      if ('WORKSPACE' === title.toUpperCase() && isEffectArray(item.children)) {
        item.children.forEach((iitem: any) => {
          iitem?.children?.forEach((j: any) => {
            if (j.url) temp.urls?.push(j.url)
          })
        })
      }

      temp.children = adapterBookMark(item.children, temp)
      newList.push(temp)
    })
    return newList
  }

  const [opens, _setOpens] = useSetState<ObjectType>({})
  const setOpens = (val: ObjectType)=>{
    localStorage.setItem('Newtab-opens', JSON.stringify({...opens, ...val}))
    _setOpens(val)
  }

  React.useEffect(() => {
    if (!bookMarks.length) return
    setList(adapterBookMark(bookMarks))
    try {
      const cacheOpens = localStorage.getItem('Newtab-opens') || '{}'
      _setOpens(JSON.parse(cacheOpens))
    } catch (error) {
      console.log('no newTab-opens cache')
    }
  }, [bookMarks.length])

  return <Child list={list} opens={opens} setOpens={setOpens} />
}

export default BookMarksCom
