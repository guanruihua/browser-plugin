import React from 'react'
import { useLocalStorage } from '0hook'
export const CountdownWork = () => {
  const [value, setValue] = useLocalStorage('CountdownWork')
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
    </div>
  )
}
