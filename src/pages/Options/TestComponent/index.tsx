import React, { useState, useEffect } from 'react'
import { RHTab } from '@/components'
import TestChart from './TestChart'
import TextArea from './textArea'
import { useConfig } from '@/assets/config'
import './index.scss'
const [Config, { setConfig, getConfig }] = useConfig()

function TestComponent(): any {
  const [active, setActive] = useState('1')

  useEffect(() => {
    getConfig(Config.optionsTestTabActive, (val: string): void => {
      setActive(val)
    })
  }, [])
  return (
    <RHTab
      defaultActiveKey={active || '1'}
      fontSize={14}
      width={'100%'}
      position='left'
      titleSize={120}
      className='test-component-tab'
      onChange={(val: string): void => {
        setConfig({ [Config.optionsTestTabActive]: val })
        setActive(val)
      }}
    >
      <RHTab.TabPane tab='textArea' key='1' active='1'>
        <TextArea />
      </RHTab.TabPane>
      <RHTab.TabPane tab='Chart' key='chart' active='chart'>
        <TestChart />
      </RHTab.TabPane>
      <RHTab.TabPane tab='Test Component' key='998' active='998'>
        ccc
      </RHTab.TabPane>
    </RHTab>
  )
}

export default TestComponent
