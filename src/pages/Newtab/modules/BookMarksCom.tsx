import React from 'react'
import { Card, Img } from '../../../components'
import { windowOpenUrl } from '../utils'

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
  const { bookMarks = [], onlyShow, noShow, ...rest }: bookMarksItemProps = props
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
            <Card
              key={item.id}
              title={title}
              className={title === '' ? 'Index' : undefined}
              {...rest}
            >
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
            </Card>
          )
        })}
    </React.Fragment>
  )
}

export default BookMarksCom
