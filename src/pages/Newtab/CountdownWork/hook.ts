import { useState, useEffect } from 'react'

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

  return [time, { start, pause, reset, setTime }] as any
}
