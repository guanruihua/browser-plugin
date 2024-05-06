import React from 'react'
import { useHook } from './hook'
import './index.scss'

export const CountdownWork = () => {
  const h = useHook()

  return (
    <div className='countdown-work'>
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
        onChange={(e) => {
          h.setStatus(e.target.checked ? '1': '')
        }}
      />
    </div>
  )
}
