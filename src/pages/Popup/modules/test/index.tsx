import React from 'react'
import { Button } from 'aurad'
import { useHook } from './hook'

export function Test() {
  const { pin, pinAll } = useHook()
  return (
    <div style={{ display: 'flex', gap: 10 }}>
        ...
      {/* <Button onClick={() => pin()}>Pin</Button> */}
      {/* <Button onClick={() => pinAll()}>Pin All</Button> */}
    </div>
  )
}
