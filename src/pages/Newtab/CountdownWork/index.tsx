import React, { useEffect } from 'react'
import dayjs from 'dayjs'
import { useCountdown } from './hook'
import './index.scss'
import { classNames, copyText } from 'harpe'

export default function CountdownCountdown(props: any) {
  const { className } = props
  const now = dayjs()
  const getCountdownWorkTime = () => {
    const value = now.set('hour', 18).set('minute', 0).set('second', 0).valueOf() - now.valueOf()
    return Math.floor(value / 1000)
  }

  const [time, handle] = useCountdown(getCountdownWorkTime())

  const getTime = (time: number) => {
    const hour = Math.floor(time / 3600)
    const minute = Math.floor((time % 3600) / 60)
    const second = Math.floor(time % 60)
    let value = ''
    if (hour > 0) {
      value += hour + '时'
    }
    if (hour > 0 || minute > 0) {
      value += minute + '分'
    }
    if (hour > 0 || minute > 0 || second > 0) {
      value += second + '秒'
    }
    return value
  }
  const timeMsg = getTime(time)

  useEffect(() => {
    handle.start()
  }, [])

  if (time < 1) {
    return <div style={{ display: 'none' }} />
  }
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
