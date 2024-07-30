import React from 'react'
// import { ObjectType } from '0type'
// import { isArray } from 'asura-eye'
// import { windowOpenUrl } from '../utils'
// import { Img } from '@/components'
import CountdownWork from '../CountdownWork'
import './index.scss'

export interface NavProps {
  [key: string]: any
}

export function Nav(props: NavProps) {
  return (
    <div className='nav'>
      <div className='nav-layout'>
        {/* <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
          <path
            fill='currentColor'
            d='m7 18.4l-2.4 2.4q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L5.6 17H4q-.425 0-.713-.287T3 16t.288-.712T4 15h4q.425 0 .713.288T9 16v4q0 .425-.288.713T8 21t-.712-.288T7 20zm10 0V20q0 .425-.288.713T16 21t-.712-.288T15 20v-4q0-.425.288-.712T16 15h4q.425 0 .713.288T21 16t-.288.713T20 17h-1.6l2.4 2.4q.275.275.275.7t-.275.7t-.7.275t-.7-.275zM5.6 7L3.2 4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275L7 5.6V4q0-.425.288-.713T8 3t.713.288T9 4v4q0 .425-.288.713T8 9H4q-.425 0-.712-.288T3 8t.288-.712T4 7zm12.8 0H20q.425 0 .713.288T21 8t-.288.713T20 9h-4q-.425 0-.712-.288T15 8V4q0-.425.288-.712T16 3t.713.288T17 4v1.6l2.4-2.4q.275-.275.7-.275t.7.275t.275.7t-.275.7z'
          />
        </svg>
        <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
          <path
            fill='currentColor'
            d='M6.4 19H8q.425 0 .713.288T9 20t-.288.713T8 21H4q-.425 0-.712-.288T3 20v-4q0-.425.288-.712T4 15t.713.288T5 16v1.6l2.4-2.4q.275-.275.7-.275t.7.275t.275.7t-.275.7zm11.2 0l-2.4-2.4q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.4 2.4V16q0-.425.288-.712T20 15t.713.288T21 16v4q0 .425-.288.713T20 21h-4q-.425 0-.712-.288T15 20t.288-.712T16 19zM5 6.4V8q0 .425-.288.713T4 9t-.712-.288T3 8V4q0-.425.288-.712T4 3h4q.425 0 .713.288T9 4t-.288.713T8 5H6.4l2.4 2.4q.275.275.275.7t-.275.7t-.7.275t-.7-.275zm14 0l-2.4 2.4q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L17.6 5H16q-.425 0-.712-.287T15 4t.288-.712T16 3h4q.425 0 .713.288T21 4v4q0 .425-.288.713T20 9t-.712-.288T19 8z'
          />
        </svg> */}

        <CountdownWork className='nav-item' />
      </div>
    </div>
  )
}
