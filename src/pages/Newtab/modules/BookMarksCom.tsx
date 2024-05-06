import React from 'react'
import { Img } from '../../../components'
import { windowOpenUrl } from '../utils'
import { isEffectArray } from 'asura-eye'
import { classNames } from 'harpe'

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

interface ItemType {
  label: string
  type: 'title' | 'default'
  url?: string
  urls?: string[]
  config?: string[]
}

const BookMarksCom = (props: bookMarksItemProps) => {
  const { bookMarks = [], onlyShow, noShow, ...rest }: bookMarksItemProps = props

  const [list, setList] = React.useState<ItemType[]>([])

  React.useEffect(() => {
    if (!bookMarks.length) return
    const newList: ItemType[] = []

    bookMarks.forEach((item: any): any => {
      if (noShow && noShow === item.title) return
      if (onlyShow && onlyShow !== item.title) return
      if (item.title === 'Index') {
        item.title = ''
      }

      const [title, ...config] = item.title.split('_') as string[]
      const itemConfig = [...config]
      if (itemConfig.includes('hidden')) return

      newList.push({
        label: title,
        type: 'title',
        config
      })
      if (title && 'WORKSPACE' === title.toUpperCase()) {
        config.push('WORKSPACE')
      }

      if (isEffectArray(item.children)) {
        item.children.forEach((iitem: any) => {
          const temp: ItemType = {
            label: iitem.title && handleTitle(iitem.title),
            type: 'default',
            url: iitem.url,
            urls: [],
            config
          }
          if (title && 'WORKSPACE' === title.toUpperCase() && isEffectArray(iitem.children)) {
            iitem.children.forEach((j: any) => {
              if (j.url) temp.urls?.push(j.url)
            })
          }

          newList.push(temp)
        })
      }
    })

    setList(newList)
  }, [bookMarks.length])

  return list.map((item, i) => {
    const { label, type, config = [], url, urls } = item
    const handleClick = () => {
      if (config.includes('WORKSPACE') && isEffectArray(urls)) {
        urls.forEach((url, i) => {
          if (!url) return
          if (i + 1 == urls.length) {
            window.location.replace(url)
            // window.open(url, '_parent')
            return
          }
          window.open(url, '_blank')
        })
        return
      } else url && windowOpenUrl(url)
    }

    if (config.includes('icon') && type !== 'title') {
      return (
        <div className={classNames('webContent-card-item', type)} key={i} onClick={handleClick}>
          <Img
            isFavicon
            errorHidden
            url={url}
            alt={label}
            style={{
              width: 14,
              height: 14,
              marginRight: 6
            }}
          />
          <span title={label}>{label}</span>
        </div>
      )
    }
    return (
      <React.Fragment>
        {type === 'title' && i !== 0 && <div style={{ flexBasis: '100%' }} />}
        <div className={classNames('webContent-card-item', type)} key={i} onClick={handleClick}>
          {label}
        </div>
      </React.Fragment>
    )
  })
}

export default BookMarksCom
