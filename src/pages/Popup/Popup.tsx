import React from 'react'
import { QRCodePage, Localhost, Tool } from './modules'
import { Tab } from 'aurad'
import './Popup.css'
import { Test } from './modules/test'

export default () => {
  return (
    <div className='App'>
      <Tab
        defaultValue={localStorage.getItem('popup-active') || '1'}
        onChange={(val: string) => {
          localStorage.setItem('popup-active', val)
        }}
        items={[
          {
            title: 'Href',
            key: 'href',
            children: <Localhost />
          },
          {
            title: 'QR Code',
            key: 'qrCode',
            children: <QRCodePage />
          },
          {
            title: 'TooL',
            key: 'tool',
            children: <Tool />
          },
          {
            title: 'test',
            key: 'test',
            children: <Test />
          }
        ]}
      />
    </div>
  )
}
