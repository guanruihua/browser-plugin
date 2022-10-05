import React from 'react'
import { RHCard } from '../../../components'
import { windowOpenUrl } from '../utils'

type bookMarksItemProps = {
  bookMarks: any[]
  onlyShow?: string
  noShow?: string
  [key: string]: any
}

const reg = /(\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3010|\u3011|\u007e)|(菜鸟教程)|(掘金)|(知乎)|(\?|)|(博客园)|(_脚本之家)|(CSDN博客)|(csdn)|(简书)|([\u4e00-\u9fa5]*的博客)|(\([0-9]*条消息\))|(【近[0-9/.]*W字】)|(.*条消息)|(博客)/gi

const handleTitleShow = (title: string) => {
  if (typeof title === 'string') {
    return title.replace(reg, '').replace('-', '')
  }
  return false
}

const BookMarksCom = (props: bookMarksItemProps) => {
  const { bookMarks = [], onlyShow, noShow, ...rest }: bookMarksItemProps = props
  return (
    <React.Fragment>
      {bookMarks && bookMarks.map((item: any): any => {
        if (noShow && noShow === item.title) return
        if (onlyShow && onlyShow !== item.title) return
        return (
          <RHCard key={item.id} title={item.title} {...rest}>
            {item.children.map((iitem: any, index: number): any => {
              if (iitem.children && iitem.children.length > 0) {
                if (item.title === 'TEMP') return
                return <div
                  key={item.id + index}
                  className='webContent-card-item-group'
                >
                  <span className='webContent-card-item-group-title'>
                    {iitem?.title && handleTitleShow(iitem.title) || `Temp${index}`}
                  </span>
                  {iitem?.children?.map((iiitem: any): any => {
                    return <div
                      key={item.id + index + iiitem.id}
                      onClick={(): void => {
                        iiitem.url && windowOpenUrl(iiitem.url)
                      }}>
                      {iiitem.title && handleTitleShow(iiitem.title)}
                    </div>
                  })}</div>
              }

              return (
                <div
                  key={iitem.id}
                  onClick={(): void => {
                    windowOpenUrl(iitem.url)
                  }}
                  className='webContent-card-item'
                  {...rest}
                >
                  {iitem.title && handleTitleShow(iitem.title)}
                </div>
              )
            })}
          </RHCard>
        )
      })}
    </React.Fragment>
  )
}

export default BookMarksCom
