import React, { useState } from 'react'
import { QRCodePage, Localhost, CountdownWork } from './modules'
import './Popup.css'

export default () => {
  const [active, setActive] = useState<string>(localStorage.getItem('active') || '1')
  return (
    <div className='App'>
      <div
        style={{
          textAlign: 'left'
        }}
      >
        {[
          {
            label: 'Href',
            value: 'href'
          },
          {
            label: 'QR Code',
            value: 'qrCode'
          },
          {
            label: 'Countdown Work',
            value: 'CountdownWork'
          }
        ].map(item => {
          return (
            <div
              className={`header-item${active === item.value ? ' active' : ''}`}
              onClick={() => {
                setActive(item.value)
                localStorage.setItem('active', item.value)
              }}
            >
              {item.label}
            </div>
          )
        })}
      </div>
      <div className='content'>
        {active === 'href' ? (
          <Localhost />
        ) : active === 'qrCode' ? (
          <QRCodePage />
        ) : active === 'CountdownWork' ? (
          <CountdownWork />
        ) : (
          <Localhost />
        )}
      </div>
    </div>
  )
}
