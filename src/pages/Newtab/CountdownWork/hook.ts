import { useState, useEffect } from 'react'
import { getConfig, getCountdownWorkTime, getNow, getNewCountdownWorkTime } from './util'
import dayjs from 'dayjs'

export function useCountdown(initialTime: number) {
  const [time, setTime] = useState(initialTime)

  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (isRunning && time > 0) {
      const timerId = setTimeout(() => {
        setTime(time - 1)
      }, 1000)

      return () => {
        clearTimeout(timerId)
      }
    } else {
      setIsRunning(false)
    }
  }, [isRunning, time]) // 依赖于状态和时间

  function start() {
    setIsRunning(true)
  }

  function pause() {
    setIsRunning(false)
  }

  function reset() {
    setTime(initialTime)
    setIsRunning(false)
  }

  const config = getConfig()

  useEffect(() => {
    try {

      if (dayjs(config.lastUpdate).isBefore(dayjs(getNow()))) {
        setTime(getCountdownWorkTime())
      } else {
        if (config.status === '1') {
          setTime(getNewCountdownWorkTime(dayjs(getNow() + ' ' + config.time)))
        } else {
          setTime(-1)
        }
      }
    } catch (error) {
      console.error(error)
    }
    start()
  }, [])

  return [time, { start, pause, reset, setTime }] as any
}
