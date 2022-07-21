import React from 'react'
import { RHCard, RHButton } from '../../../components'
import { SettingComType } from './type'
const RHCheck: any = RHButton.RHCheck

const SettingCom = (props: SettingComType) => {
  const {
    isSettingShow,
    uses,
    updateUses,
    updateFilters,
    filters
  }: SettingComType = props
  return (
    <RHCard
      key={'setting'}
      title='SETTING'
      className={'search-setting'}
      style={{ display: isSettingShow ? 'flex' : 'none' }}
    >

      {uses.map((item: any) =>
        <RHCheck
          key={item.id}
          id={item.id}
          name={item.id}
          checked={item.use}
          onCheck={(beforeChecked: boolean): boolean => updateUses(item.id, !beforeChecked)}
        >
          {`${item.title} ( USE )`}
        </RHCheck>
      )}

      {filters.map((item: any) =>
        <RHCheck
          key={item.id}
          id={item.id}
          name={item.id}
          checked={item.use}
          onCheck={(beforeChecked: boolean): boolean => updateFilters(item.id, !beforeChecked)}
        >
          {`${item.title} ( FIL )`}
        </RHCheck>
      )}
    </RHCard>
  )
}

export default SettingCom
