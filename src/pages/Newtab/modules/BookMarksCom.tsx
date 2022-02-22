import React from 'react'
import { RHCard, RHImg } from '../../../components'
import { windowOpenUrl } from '../utils'

type bookMarksItemProps = {
  bookMarks: any[]
  onlyShow?: string
  noShow?: string
}

const BookMarksCom = (props: bookMarksItemProps): any => {
  const { bookMarks = [], onlyShow, noShow }: bookMarksItemProps = props
  if (bookMarks && bookMarks.length > 0)
    return (
      <React.Fragment>
        {bookMarks.map((item: any): any => {
          if (noShow && noShow === item.title) return
          if (onlyShow && onlyShow !== item.title) return
          return (
            <RHCard key={item.id} title={item.title}>
              {item.children.map((iitem: any): any => {
                if (iitem.children && iitem.children.length > 0) return
                return (
                  <div
                    onClick={(): void => {
                      windowOpenUrl(iitem.url)
                    }}
                    className='webContent-card-item'
                    key={iitem.id}
                  >
                    <RHImg url={iitem.url} isFavicon alt='' />
                    {iitem.title}
                  </div>
                )
              })}
            </RHCard>
          )
        })}
      </React.Fragment>
    )
  return <div />
}

export default BookMarksCom
