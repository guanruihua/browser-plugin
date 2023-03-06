import React from 'react'
import { Card, Img } from '../../../components'
import { windowOpenUrl } from '../utils'

export interface bookMarksItemProps {
  bookMarks: any[]
  onlyShow?: string
  noShow?: string
  [key: string]: any
}

function handleTitle(title: string): string {
  return title
    .replaceAll(' ', '')
    .replace(/(\?)|(!)/,'')
    .replace(/(-掘金)|(-博客园)|(CSDN)|(博客)|(-SegmentFault思否)|(【.+】)|(-$)/gi, '')
    .replace(/\(\d+条消息\)/gi, '')

}

const BookMarksCom = (props: bookMarksItemProps) => {
  const { bookMarks = [], onlyShow, noShow, ...rest }: bookMarksItemProps = props
  return (
    <React.Fragment>
      {bookMarks && bookMarks.map((item: any): any => {
        if (noShow && noShow === item.title) return
        if (onlyShow && onlyShow !== item.title) return
        if (item.title === 'Index') { item.title = '' }
        return (
          <Card
            key={item.id}
            title={item.title}
            className={item.title === '' ? 'Index' : undefined}
            {...rest}>
            {item.children && [].concat(item.children).reverse().map((iitem: any) =>
            (<div
              key={iitem.id}
              onClick={(): void => {
                windowOpenUrl(iitem.url)
              }}
              className='webContent-card-item'
              {...rest}
            >
              {item.title === ''
                ? (<Img
                  isFavicon
                  url={iitem.url}
                  alt={item.title}
                />)
                : (iitem.title && handleTitle(iitem.title))}
            </div>)
            )}
          </Card>
        )
      })}
    </React.Fragment>
  )
}

export default BookMarksCom
