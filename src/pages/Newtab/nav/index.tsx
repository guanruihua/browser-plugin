import React from 'react'
import CountdownWork from '../CountdownWork'
import './index.scss'

export function Nav() {
  return (
    <div className='nav'>
      <div className='nav-layout'>
        <CountdownWork className='nav-item' />
      </div>
    </div>
  )
}
