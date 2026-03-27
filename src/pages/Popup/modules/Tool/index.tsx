import React from 'react'
import { Button } from 'aurad'
import { useHook } from './hook'
import { isEffectArray, isString } from 'asura-eye'
import { Grid } from 'aurad'

export function Tool() {
  const { activeTab, tabs, pin, pinAll, clone, mute, muteAll, ...handle } = useHook()
  return (
    <Grid columns={1}>
      <Button
        none={!(isString(activeTab.url) && activeTab.url.startsWith('https://github.com/'))}
        onClick={() => {
          if (!isString(activeTab.url)) return
          chrome.tabs.remove(activeTab?.id)
          window.open(activeTab.url.replace('https://github.com/', 'https://github.dev/'))
        }}
      >
        Open Github VSCode
      </Button>
      <Grid
        columns={2}
        none={!(isString(activeTab.url) && activeTab.url.startsWith('https://github.dev/'))}
      >
        <Button
          onClick={() => {
            if (!isString(activeTab.url)) return
            chrome.tabs.remove(activeTab?.id)
            window.open(activeTab.url.replace('https://github.dev/', 'https://github.com/'))
          }}
        >
          Back Github
        </Button>
        <Button
          onClick={() => {
            if (!isString(activeTab.url)) return
            window.open(activeTab.url.replace('https://github.dev/', 'https://github.com/'))
          }}
        >
          Open Github Repo
        </Button>
      </Grid>
      <Grid columns={2}>
        <Button onClick={() => handle.sameDomainReopen()}>同域名重新打开 </Button>
        <Button onClick={() => clone()}>复制</Button>
      </Grid>
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
