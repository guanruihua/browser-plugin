import React from 'react'
import { useBookMarks } from './hook'
import BookMarksCom from './modules/BookMarksCom'
import CountdownWork from './CountdownWork'
import { Img } from '../../components'
import { windowOpenUrl } from './utils'
import { isArray } from 'asura-eye'
import './Newtab.scss'

export default function () {
  const [bookMarks] = useBookMarks()
  const getBookMarks = () => {
    const indexBookMarks: any[] = []
    const restBookMarks: any[] = []
    bookMarks.forEach(item => {
      if (item.title === 'Index') {
        indexBookMarks.push(item)
      } else {
        restBookMarks.push(item)
      }
    })
    return [indexBookMarks, restBookMarks] as any[][]
  }
  const [indexBookMarks, restBookMarks] = getBookMarks()

  return (
    <div className='newTabBox'>
      <div className='newTab'>
        <BookMarksCom bookMarks={restBookMarks} />
      </div>
      <div className='bg'></div>
      <div className='nav'>
        {indexBookMarks.map((item: any) => (
          <React.Fragment>
            {isArray(item.children) &&
              item.children.reverse().map((iitem: any) => (
                <div
                  key={item.id + iitem.id}
                  onClick={(): void => {
                    windowOpenUrl(iitem.url)
                  }}
                  className='nav-item'
                >
                  <Img isFavicon url={iitem.url} alt={iitem.title} />
                </div>
              ))}
          </React.Fragment>
        ))}
        {/* <input className='search-input' /> */}
        <CountdownWork className='nav-item' />
      </div>
    </div>
  )
}
