import React from 'react'
import { createRoot } from 'react-dom/client'
import './Panel.scss'
import { Tab } from 'aurad'
import 'aurad/dist/style.css'
import DiffStr from './DiffStr'
import { Countdown } from './Countdown'
import { Test } from './test'
import { Transform } from './Transform'
import { Gen } from './gen'

const Panel = () => {
  return (
    <div style={{ padding: 10 }}>
      <Tab
        defaultValue={localStorage.panel_active_key || '3'}
        onChange={(val: string): void => {
          localStorage.setItem('panel_active_key', val)
        }}
        items={[
          {
            title: 'Diff',
            key: 'Diff',
            children: <DiffStr />
          },
          {
            title: 'Gen',
            key: 'Gen',
            children: <Gen />
          },
          {
            title: 'CountDown Work',
            key: 'CountDown Work',
            children: <Countdown />
          },
          {
            title: 'Transform',
            key: 'transform',
            children: <Transform />
          },
          {
            title: 'Test',
            key: 'Test',
            children: <Test />
          }
        ]}
      />
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(window.document.querySelector('#app-container')!)
root.render(<Panel />)
