import React from 'react'
import dayjs from 'dayjs'
import { type ObjectType, stringify, parse } from 'abandonjs'

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
const save = (newConfig: ObjectType) => {
  const config = getConfig()
  if (dayjs(config.lastUpdate).isBefore(dayjs())) {
    config.lastUpdate = getNow()
  }
  // console.log({ ...config, ...newConfig })
  localStorage.setItem(key, stringify({ ...config, ...newConfig }))
}

export const useHook = () => {
  const [time, _setTime] = React.useState<string>('')
  const [status, _setStatus] = React.useState<string>('1')
  const setTime = (val: string) => {
    _setTime(val)
    save({ time: val })
  }

  const setStatus = (val: string) => {
    _setStatus(val)
    save({ status: val })
  }

  const load = () => {
    const { time, status } = getConfig()
    _setTime(time)
    _setStatus(status)
  }
  React.useEffect(() => {
    load()
  }, [])

  return {
    time,
    setTime,
    status,
    setStatus
  }
}
