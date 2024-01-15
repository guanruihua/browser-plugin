import React from 'react'
import { useLocalStorage } from '0hook'
import dayjs from 'dayjs'
import { isArray } from 'asura-eye'
import { type ObjectType } from 'abandonjs'
type Config = ObjectType[]
export const CountdownWork = () => {
  const [value, setValue] = useLocalStorage('CountdownWork')
  const [workStatus, _setWorkStatus] = React.useState<string>('1')
  const key = '__CountdownWork__Status__'
  const now = dayjs().format('YYYY-MM-DD')
  const getOldVal = (): Config => {
    const oldVal = localStorage.getItem(key) || ''
    try {
      const result = JSON.parse(oldVal) || []
      if (isArray<ObjectType>(result)) {
        return result
      } else {
        return []
      }
    } catch (error) {
      return []
    }
  }

  const setWorkStatus = (newStatus: '1' | '0' = '1') => {
    let val = getOldVal()
    let hasConfig = false
    if (val.length > 7) {
      val = []
    } else {
      for (let i = 0; i < val.length; i++) {
        const { value } = val[i]
        if (value === now) {
          hasConfig = true
          val[i].status = newStatus
        }
      }
    }
    if (!hasConfig) {
      val.push({ value: now, status: newStatus })
    }

    localStorage.setItem(key, JSON.stringify(val))
    _setWorkStatus(newStatus)
  }

  React.useEffect(() => {
    try {
      const config = JSON.parse(localStorage.getItem(key) || '[]')
      isArray(config) &&
        config.forEach(({ value, status }) => {
          if (value == now) {
            _setWorkStatus(status)
          }
        })
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <div
      style={{
        color: '#fff',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: 12,
        padding: '0 12px '
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>CountDown Work Time:</div>
      <input
        type='time'
        value={value as string}
        onChange={e => {
          setValue(e.target.value)
        }}
      />
      <div>Working</div>
      <input
        type='checkbox'
        value={workStatus}
        onChange={() => {
          setWorkStatus(workStatus === '1' ? '0' : '1')
        }}
      />
    </div>
  )
}
