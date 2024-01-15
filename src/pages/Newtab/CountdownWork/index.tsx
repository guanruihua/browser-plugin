import React, { useEffect } from 'react'
import dayjs from 'dayjs'
import { useCountdown } from './hook'
import './index.scss'
import { classNames, copyText } from 'harpe'
import { isArray } from 'asura-eye'

export default function CountdownCountdown(props: any) {
  const { className } = props

  const getCountdownWorkTime = () => {
    const now = dayjs()
    const value = now.set('hour', 18).set('minute', 0).set('second', 0).valueOf() - now.valueOf()
    return Math.floor(value / 1000)
  }

  const [time, handle] = useCountdown(getCountdownWorkTime())

  const getTime = (time: number) => {
    const hour = Math.floor(time / 3600)
    const minute = Math.floor((time % 3600) / 60)
    const second = Math.floor(time % 60)
    const value = `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:${
      second < 10 ? '0' : ''
    }${second}`

    return value
  }

  useEffect(() => {
    const key = '__CountdownWork__Status__'
    const now = dayjs().format('YYYY-MM-DD')
    try {
      const config = JSON.parse(localStorage.getItem(key) || '[]')
      // console.log(config[0])
      isArray(config) &&
        config.forEach(({ value, status }) => {
          if (value == now && status === '') {
            handle.setTime(-1)
          }else{
            handle.setTime(getCountdownWorkTime())
          }
        })
    } catch (error) {
      console.error(error)
    }
    handle.start()
  }, [new Date().getDay()])

  if (time < 1) {
    return <div style={{ display: 'none' }} />
  }

  const timeMsg = getTime(time)
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
