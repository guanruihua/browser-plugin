import { parse } from 'abandonjs'
import dayjs from 'dayjs'

export const getTimeMsg = (time: number) => {
  const hour = Math.floor(time / 3600)
  const minute = Math.floor((time % 3600) / 60)
  const second = Math.floor(time % 60)
  const value = `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:${
    second < 10 ? '0' : ''
  }${second}`

  return value
}

type Config = {
  lastUpdate: string
  time: string
  status: string
}
const key = '__CountdownWork__Config__'

export const getNow = () => dayjs().format('YYYY-MM-DD')

export const getStatus = () => ([0, 6].includes(dayjs().day()) ? '' : '1')

const defaultConfig = () => ({
  lastUpdate: getNow(),
  time: '18:00',
  status: getStatus()
})

export const getConfig = (): Config => {
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

export const getCountdownWorkTime = (now = dayjs()) => {
  const value = now.set('hour', 18).set('minute', 0).set('second', 0).valueOf() - dayjs().valueOf()
  return Math.floor(value / 1000)
}

export const getNewCountdownWorkTime = (now = dayjs()) => {
  const value = now.set('second', 0).valueOf() - dayjs().valueOf()
  return Math.floor(value / 1000)
}