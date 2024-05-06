import React, { useEffect } from 'react'
import dayjs from 'dayjs'
import { useCountdown } from './hook'
import './index.scss'
import { classNames, copyText } from 'harpe'
import { parse } from 'abandonjs'

type Config = {
  lastUpdate: string
  time: string
  status: string
}

const key = '__CountdownWork__Config__'

const getNow = () => dayjs().format('YYYY-MM-DD')
const getStatus = ()=> [0,6].includes(dayjs().day()) ? '': '1'

const defaultConfig = () => ({
  lastUpdate: getNow(),
  time: '18:00',
  status: getStatus()
})

const getConfig = (): Config => {
  try {
    const valStr = localStorage.getItem(key) || ''
    if (valStr) {
      return parse(valStr) || defaultConfig()
    }
    return defaultConfig()
  } catch (error) {
    return defaultConfig()
  }
}

const getCountdownWorkTime = (now = dayjs()) => {
  const value = now.set('hour', 18).set('minute', 0).set('second', 0).valueOf() - dayjs().valueOf()
  return Math.floor(value / 1000)
}

const getNewCountdownWorkTime = (now = dayjs()) => {
  const value = now.set('second', 0).valueOf() - dayjs().valueOf()
  return Math.floor(value / 1000)
}
export default function CountdownCountdown(props: any) {
  const { className } = props

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
    try {
      const config = getConfig()
      if (dayjs(config.lastUpdate).isBefore(dayjs(getNow()))) {
        handle.setTime(getCountdownWorkTime())
      } else {
        if (config.status === '1') {
          handle.setTime(getNewCountdownWorkTime(dayjs(getNow() + ' ' + config.time)))
        } else {
          handle.setTime(-1)
        }
      }
    } catch (error) {
      console.error(error)
    }
    handle.start()
  }, [])

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
