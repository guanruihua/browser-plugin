import React, { FC, useEffect, useState } from 'react'
import { RHTab } from '../../components'
import { useConfig } from '../../assets/config'
import SettingPage from './Setting'
import TestComponent from './TestComponent'
import CodePage from './Code'
import './Options.scss'
import MockPage from './Mock'
import VirtualForm from './VirtualForm/index'

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

      <TabPane tab='Postman' key='v1' active='v1'>
        <VirtualForm />
      </TabPane>
      <TabPane tab='Setting' key='1' active='1'>
        <SettingPage />
      </TabPane>
      <TabPane tab='Mock' key='3' active='3'>
        <MockPage />
      </TabPane>
      <TabPane tab='Code' key='2' active='2'>
        <CodePage />
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