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

      const [title, ...config] = item.title.split('_')
      const itemConfig = [...config]
      if (itemConfig.includes('hidden')) return

      newList.push({
        label: title,
        type: 'title',
        config
      })

      if (isEffectArray(item.children)) {
        item.children.forEach((iitem: any) => {
          newList.push({
            label: iitem.title && handleTitle(iitem.title),
            type: 'default',
            url: iitem.url,
            config
          })
        })
      }
    })

    setList(newList)
  }, [bookMarks.length])

  return list.map((item, i) => {
    const { label, type, config = [], url } = item
    if (config.includes('icon') && type !== 'title') {
      return (
        <div
          className={classNames('webContent-card-item', type)}
          key={i}
          onClick={(): void => {
            url && windowOpenUrl(url)
          }}
        >
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
      <div
        className={classNames('webContent-card-item', type)}
        key={i}
        onClick={(): void => {
          url && windowOpenUrl(url)
        }}
      >
        {label}
      </div>
    )
  })

  return (
    <React.Fragment>
      {bookMarks &&
        bookMarks.map((item: any): any => {
          if (noShow && noShow === item.title) return
          if (onlyShow && onlyShow !== item.title) return
          if (item.title === 'Index') {
            item.title = ''
          }

          const [title, ...config] = item.title.split('_')
          const itemConfig = [...config]
          if (itemConfig.includes('hidden')) return <div style={{ display: 'none' }}></div>
          return (
            <div className='webContent-card-item-box' key={item.title}>
              <div className='webContent-card-item title'>{title}</div>
              {item.children &&
                []
                  .concat(item.children)
                  .sort((a: any, b: any) => a.title.length - b.title.length)
                  .map((iitem: any) => (
                    <div
                      key={iitem.id}
                      onClick={(): void => {
                        windowOpenUrl(iitem.url)
                      }}
                      className='webContent-card-item'
                      {...rest}
                    >
                      {itemConfig.includes('icon') && (
                        <Img
                          isFavicon
                          errorHidden
                          url={iitem.url}
                          alt={iitem.title}
                          style={{
                            width: 14,
                            height: 14,
                            marginRight: 6
                          }}
                        />
                      )}
                      <span title={iitem.title && handleTitle(iitem.title)}>
                        {iitem.title && handleTitle(iitem.title)}
                      </span>
                    </div>
                  ))}
            </div>
          )
        })}
    </React.Fragment>
  )
}

export default BookMarksCom
