import React, { FC } from 'react'
import RHTab from '../../components/RH-Tab'
import './Panel.scss'
import VirtualForm from './VirtualForm'
import Fanyi from './Fanyi'
import DiffStr from './DiffStr'

const TabPane: FC<any> = RHTab.TabPane

const Panel: React.FC = () => {
  return (
    <RHTab
      defaultActiveKey={localStorage.panel_active_key || '1'}
      fontSize={14}
      onChange={(val: string): void => {
        localStorage.setItem('panel_active_key', val)
      }}
    >
      <TabPane tab='Virtual Form' key='1' active='1'>
        <VirtualForm />
      </TabPane>

      <TabPane tab='Translate' key='2' active='2'>
        <Fanyi />
      </TabPane>

      <TabPane tab='String Comparison' key='3' active='3'>
        <DiffStr />
      </TabPane>

      <TabPane tab='Loading...' key='999' active='999'>
        待开发
      </TabPane>
    </RHTab>
  )
}

export default Panel
