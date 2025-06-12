import React from 'react'
import { createRoot } from 'react-dom/client'
import './Panel.scss'
import { Tab } from 'aurad'
import 'aurad/dist/style.css'
import DiffStr from './DiffStr'
import { Transform } from './Transform'

const Panel = () => {
  return (
    <div style={{ padding: 10 }}>
      <button
        className='btn'
        style={{
          position: 'fixed',
          right: 24,
          top: 14,
          fontSize: 24,
          borderRadius: '50%',
          width: 42,
          height: 42,
          zoom: '.5',
        }}
        onClick={() => location.reload()}
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
          <g
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
          >
            <path d='M19.933 13.041a8 8 0 1 1-9.925-8.788c3.899-1 7.935 1.007 9.425 4.747' />
            <path d='M20 4v5h-5' />
          </g>
        </svg>
      </button>
      <Tab
        defaultValue={localStorage.panel_active_key || '3'}
        onChange={(val: string): void => {
          localStorage.setItem('panel_active_key', val)
        }}
        items={[
          {
            title: 'Diff',
            key: 'Diff',
            children: <DiffStr />,
          },
          {
            title: 'Transform',
            key: 'transform',
            children: <Transform />,
          },
        ]}
      />
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(window.document.querySelector('#app-container')!)
root.render(<Panel />)
