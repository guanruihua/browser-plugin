import React from 'react'
import { Card, Img } from '../../../components'
import { windowOpenUrl } from '../utils'

interface bookMarksItemProps {
  bookMarks: any[]
  onlyShow?: string
  noShow?: string
  [key: string]: any
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
            {item.children && [].concat(item.children).map((iitem: any) =>
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
                : (iitem.title && (iitem.title))}
            </div>)
            )}
          </Card>
        )
      })}
    </React.Fragment>
  )
}

export default BookMarksCom
