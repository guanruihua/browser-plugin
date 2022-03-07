import React from 'react'
import { RHTab } from '@/components'
import { settingDictionary } from './dictionary'
import './index.scss'
import HolidayCountdownSetting from './modules/holidayCountdown'

const activeKey = settingDictionary.activeKey

function Index() {

  const [active, setActive] = React.useState(localStorage.getItem(activeKey) || '1')

  return (
    <RHTab
      defaultActiveKey={active || '1'}
      fontSize={14}
      width={'100%'}
      position='left'
      titleSize={180}
      top={34}
      className='options-setting'
      onChange={(val: string): void => {
        setActive(val)
      }}
    >
      <RHTab.TabPane tab='Holiday Countdown' key='1' active='1'>
        <HolidayCountdownSetting />
      </RHTab.TabPane>
    </RHTab>
  )
}

export default Index
