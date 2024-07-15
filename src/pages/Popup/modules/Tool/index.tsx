import React from 'react'
import { Button } from 'aurad'
import { useHook } from './hook'
import { isEffectArray } from 'asura-eye'
import { Grid } from 'aurad'

export function Tool() {
  const { tabs, pin, pinAll, clone, mute, muteAll } = useHook()
  return (
    <Grid columns={1}>
      <Button onClick={() => clone()}>复制</Button>
      <Grid columns={3}>
        <Button onClick={() => pin()}>固定</Button>
        <Button onClick={() => pinAll()}>固定全部</Button>
        <Button onClick={() => pinAll(false)}>取消固定全部</Button>
      </Grid>
      <Grid columns={2}>
        <Button onClick={() => mute()}>静音</Button>
        <Button onClick={() => muteAll()}>静音全部</Button>
      </Grid>
      {isEffectArray(tabs) &&
        tabs.map((item: any, i) => {
          const { title } = item
          return (
            <div key={i} style={{ color: '#fff', whiteSpace: 'wrap' }}>
              {title}
            </div>
          )
        })}
    </Grid>
  )
}
