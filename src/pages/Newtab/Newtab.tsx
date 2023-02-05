import React from 'react'
import { useBookMarks } from './hook'
import BookMarksCom from './modules/BookMarksCom'
import './Newtab.scss'

export default function () {
  const [bookMarks] = useBookMarks()
  return (
    <div className='newTab' key='newTab'>
      <BookMarksCom bookMarks={bookMarks} />
    </div >
  )
}