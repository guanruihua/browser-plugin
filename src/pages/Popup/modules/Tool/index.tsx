import React from 'react'
import { Button } from 'aurad'
import { useHook } from './hook'

export function Tool() {
  const { pin, pinAll, clone, mute, muteAll } = useHook()
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      <Button onClick={() => pin()}>固定(Pin)</Button>
      <Button onClick={() => pinAll()}>固定全部(Pin All)</Button>
      <Button onClick={() => clone()}>复制(Clone)</Button>
      <Button onClick={() => mute()}>静音(Mute)</Button>
      <Button onClick={() => muteAll()}>静音全部(Muted All)</Button>
    </div>
  )
}
