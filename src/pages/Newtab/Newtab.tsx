import React from 'react'
import { useBookMarks } from './hook'
import BookMarksCom from './modules/BookMarksCom'
import './Newtab.scss'
import { Nav } from './nav'

export default function () {
  const [bookMarks] = useBookMarks()
  // console.log({bookMarks})
  return (
    <div className='newTabBox'>
      <div className='newTab'>
        <BookMarksCom bookMarks={bookMarks} />
      </div>
      <div className='bg'></div>
      <Nav />
    </div>
  )
}
