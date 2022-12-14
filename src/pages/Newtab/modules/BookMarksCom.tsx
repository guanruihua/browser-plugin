import React from 'react'
import { RHCard, RHImg } from '../../../components'
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
        if (item.title === 'Index') { item.title = '' }
        return (
          <RHCard
            key={item.id}
            title={item.title}
            className={item.title === '' ? 'Index' : undefined}
            {...rest}>
            {item.children && [].concat(item.children).map((iitem: any, index: number): any => {

              return (
                <div
                  key={iitem.id}
                  onClick={(): void => {
                    windowOpenUrl(iitem.url)
                  }}
                  className='webContent-card-item'
                  {...rest}
                >
                  {/* <RHImg url={iitem.url} /> */}
                  {item.title === '' ? (<RHImg isFavicon url={iitem.url} alt={item.title} />) : (iitem.title && handleTitleShow(iitem.title))}
                  {/* {iitem.title && handleTitleShow(iitem.title)} */}
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
