import React from 'react'
import { Button } from 'aurad'
import { useHook } from './hook'

export function Tool() {
  const { pin, pinAll, clone } = useHook()
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Button onClick={() => pin()}>Pin</Button>
      <Button onClick={() => pinAll()}>Pin All</Button>
      <Button onClick={() => clone()}>Clone</Button>
    </div>
  )
}
