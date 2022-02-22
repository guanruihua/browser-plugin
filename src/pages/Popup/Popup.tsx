import React, { useState } from 'react'
import { QRCodePage, HolidayCountdown } from './modules'
import { RHTab } from '../../components'
import './Popup.css'

const TabPane = RHTab.TabPane

const Popup = () => {
  const [active, setActive] = useState(localStorage.getItem('active') || '1')
  return (
    <div className='App'>
      <RHTab
        fontSize={14}
        defaultActiveKey={active}
        onChange={(val: string): void => {
          setActive(val)
          localStorage.setItem('active', val)
        }}
        key={'popup_key'}
        style={{ border: 'none' }}
      >
        <TabPane tab='QR Code' key='1' active='1'>
          <QRCodePage />
        </TabPane>
        <TabPane tab='Holiday Countdown' key='HolidayCountdown' active='HolidayCountdown'>
          <HolidayCountdown />
        </TabPane>
      </RHTab>
    </div>
  )
}

export default Popup
