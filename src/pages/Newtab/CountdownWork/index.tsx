import React from 'react'
import { useCountdown } from './hook'
import './index.scss'
import { classNames, copyText } from 'harpe'
import { getTimeMsg, getCountdownWorkTime } from './util'

export default function CountdownCountdown(props: any) {
  const { className } = props

  const [time] = useCountdown(getCountdownWorkTime())

  if (time < 1) {
    return <div style={{ display: 'none' }} />
  }

  const timeMsg = getTimeMsg(time)
  return (
    <div
      className={classNames('countdownWork', className)}
      onClick={() => {
        copyText(timeMsg)
      }}
    >
      <div>{timeMsg}</div>
    </div>
  )
}
