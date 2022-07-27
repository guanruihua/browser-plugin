import React, { useState } from 'react'
import { QRCodePage, Localhost } from './modules'
import { RHTab } from '../../components'
import './Popup.css'

const TabPane = RHTab.TabPane

const Popup = () => {
  const [active, setActive] = useState<string>(localStorage.getItem('active') || '1')
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
        <TabPane tab='Href' key='href' active='href'>
          <Localhost />
        </TabPane>
        <TabPane tab='QR Code' key='1' active='1'>
          <QRCodePage />
        </TabPane>
      </RHTab>
    </div>
  )
}

export default Popup
