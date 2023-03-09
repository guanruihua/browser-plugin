import React, { FC, useEffect, useState } from 'react'
import { RHTab } from '@/components'
import { useConfig } from '@/assets/config'
import TestComponent from './TestComponent'
import CodePage from './Code'
import './Options.scss'
import FakingDataPage from './FakingData'
import TranslateCMM from './translate'

const TabPane: FC<any> = RHTab.TabPane
const [Config, { setConfig, getConfig }] = useConfig()

const Options: React.FC = () => {
  const [active, setActive] = useState<string>('999')

  useEffect(() => {
    getConfig(Config.optionsTabActive, (val: string): void => {
      setActive(val)
    })
  }, [])

  return (
    <RHTab
      defaultActiveKey={active}
      fontSize={14}
      width={'100%'}
      className='OptionsContainer'
      key={'rh-options-options'}
      onChange={(val: string): void => {
        setConfig({ [Config.optionsTabActive]: val })
        setActive(val)
      }}
    >
      <TabPane tab='Fake Data' key='3' active='3'>
        <FakingDataPage />
      </TabPane>
      <TabPane tab='Code' key='2' active='2'>
        <CodePage />
      </TabPane>
      <TabPane tab="translate" key='13' active='13'>
        <TranslateCMM />
      </TabPane>
      <TabPane tab='Test Component' key='998' active='998'>
        <TestComponent />
      </TabPane>
      <TabPane tab='loading...' key='999' active='999'>
        待开发
      </TabPane>
    </RHTab>
  )
}

export default Options