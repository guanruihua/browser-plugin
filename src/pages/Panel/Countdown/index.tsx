import React from 'react'
import { useHook } from './hook'
import './index.scss'

// interface TimeProps {
//   type?: 'hour-minute' | 'hour-minute-second'
// }
// const Time = (props: TimeProps) => {
//   const { type } = props
//   return (
//     <div className='au-time au-time-hour-mite'>
//       <input type='text' />
//       <div className='au-time-options'>
//         {new Array(60).fill(0).map((_, i) => {
//           return (
//             <div key={i} className=''>
//               {i}
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

export const Countdown = () => {
  const h = useHook()

  return (
    <div className='panel-countdown'>
      {/* <Time />
      <Time /> */}
      <div>CountDown Work Time:</div>
      <input
        type='time'
        value={h.time as string}
        onChange={e => {
          h.setTime(e.target.value)
        }}
      />
      <div>Working:</div>
      <input
        type='checkbox'
        checked={!!h.status}
        onChange={e => {
          h.setStatus(e.target.checked ? '1' : '')
        }}
      />
      <button onClick={() => location.reload()}>reload</button>
    </div>
  )
}
