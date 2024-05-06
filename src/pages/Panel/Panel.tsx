import React, { FC } from 'react'
import RHTab from '../../components/Tab'
import './Panel.scss'
import DiffStr from './DiffStr'

const TabPane: FC<any> = RHTab.TabPane

const Panel: React.FC = () => {
  return (
    <RHTab
      defaultActiveKey={localStorage.panel_active_key || '2'}
      fontSize={14}
      onChange={(val: string): void => {
        localStorage.setItem('panel_active_key', val)
      }}
    >
      <TabPane tab='String Comparison' key='3' active='3'>
        <DiffStr />
      </TabPane>

    </RHTab>
  )
}

export default Panel
