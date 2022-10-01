import React from 'react'
import { useState } from 'react'
import { useBookMarks } from './hook'
import BookMarksCom from './modules/BookMarksCom'
import './Newtab.scss'

const _grid_tc = '3fr 2fr'

function Newtab() {
  const [grid_tc, setGrid_tc] = useState<string>(_grid_tc)
  const [bookMarks] = useBookMarks()

  return (
    <div className='newTab' key='newTab' style={{ gridTemplateColumns: grid_tc }}>
      <div className='webContent-left'
        onMouseEnter={() => { setGrid_tc('4fr 1fr') }}
        onMouseLeave={() => { setGrid_tc(_grid_tc) }}
      >
        <BookMarksCom bookMarks={bookMarks} noShow='TEMP'
        />
      </div>
      <div className='webContent-right'
        onMouseEnter={() => { setGrid_tc('1fr 4fr') }}
        onMouseLeave={() => { setGrid_tc(_grid_tc) }}
      >
        <BookMarksCom bookMarks={bookMarks} onlyShow='TEMP'
        />
      </div>
    </div >
  )
}

export default Newtab
