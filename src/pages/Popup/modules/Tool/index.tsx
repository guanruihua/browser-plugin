import React from 'react'
import { Button } from 'aurad'
import { useHook } from './hook'
import { isEffectArray, isString } from 'asura-eye'
import { Grid } from 'aurad'
import './tool.css'
import { copyToClip } from '@/assets/utils'

export function Tool() {
  const { activeTab, tabs, pin, pinAll, clone, mute, muteAll, ...handle } = useHook()
  const { url, title } = activeTab
  const review = [
    ['Markdown', `[${title}](${url})`],
    ['Title', title],
    ['URL', url],
  ]
  const [tip, setTip] = React.useState({
    type: 'idle',
    message: 'Message',
  })
  const timer = React.useRef<NodeJS.Timeout | null>(null)
  React.useEffect(() => {
    return () => {
      timer.current && clearTimeout(timer.current)
    }
  }, [])

  return (
    <Grid columns={1} className='popup-tool'>
      {tip.type !== 'idle' && (
        <div className='tip' data-type={tip.type}>
          {tip.type === 'success' ? (
            <svg
              viewBox='64 64 896 896'
              focusable='false'
              data-icon='check-circle'
              width='1em'
              height='1em'
              fill='#52c41a'
            >
              <path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z'></path>
            </svg>
          ) : (
            <svg
              fill-rule='evenodd'
              viewBox='64 64 896 896'
              focusable='false'
              data-icon='close-circle'
              width='1em'
              height='1em'
              fill='#ff4d4f'
            >
              <path d='M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z'></path>
            </svg>
          )}
          {tip.message}
        </div>
      )}
      <div className='popup-tool-copy-url'>
        <div className='popup-tool-copy-url-review'>
          {review.map(row => {
            const [title, value] = row
            return (
              <React.Fragment key={title}>
                <div className='title'>{title}</div>
                <div
                  className='value'
                  onClick={() => {
                    copyToClip(value)
                    setTip({ type: 'success', message: 'Copy Success' })
                    timer.current && clearTimeout(timer.current)
                    timer.current = setTimeout(() => {
                      setTip({ type: 'idle', message: 'Message' })
                    }, 3000)
                  }}
                >
                  {value}
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </div>

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
      {/* {isEffectArray(tabs) &&
        tabs.map((item: any, i) => {
          const { title } = item
          return (
            <div key={i} style={{ color: '#fff', whiteSpace: 'wrap', textAlign: 'start' }}>
              {title}
            </div>
          )
        })} */}
    </Grid>
  )
}
