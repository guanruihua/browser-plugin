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
              {item.children.map((iitem: any, index: number): any => {

                // 把document 的二级文件夹显示出来
                if (iitem.children && iitem.children.length > 0) {
                  if (item.title === 'Document' || item.title === "资讯&工具") {
                    return <div
                      className='webContent-card-item-group'>
                      <span className='webContent-card-item-group-title'>{iitem?.title || `Temp${index}`}</span>
                      {iitem?.children?.map((iiitem: any): any => {
                        return <div onClick={(): void => {
                          iiitem.url && windowOpenUrl(iiitem.url)
                        }}>
                          <RHImg url={iiitem.url} isFavicon alt='' />
                          {iiitem.title || ''}
                        </div>
                      })}</div>
                  }
                }

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
