import React from 'react'
import { RHCard, RHButton } from '../../../components'
import { windowOpenUrl } from '../utils'
import LocalhostCom from './LocalhostCom'
import { SettingComType } from './type'
const RHCheck: any = RHButton.RHCheck

const SettingCom = (props: SettingComType) => {
  const {
    isSettingShow,
    localhost,
    setlocalhost,
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
      <div className='localhost'>
        <input
          value={localhost}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>): void => {
            if (e.key === 'Enter') {
              windowOpenUrl(`http://localhost:${localhost}`)
            }
          }}
          onChange={(e: any): void => {
            setlocalhost(e.target.value)
          }}
        />
      </div>

      {[3000, 3456, 8000, 8080].map((item: number) => (
        <LocalhostCom key={item + 'key'} port={item} />
      ))}

      {uses.map((item: any): any => {
        return (
          <RHCheck
            key={item.id}
            id={item.id}
            name={item.id}
            checked={item.use}
            onCheck={(beforeChecked: boolean): boolean => updateUses(item.id, !beforeChecked)}
          >
            {`${item.title} ( USE )`}
          </RHCheck>
        )
      })}

      {filters.map((item: any): any => {
        return (
          <RHCheck
            key={item.id}
            id={item.id}
            name={item.id}
            checked={item.use}
            onCheck={(beforeChecked: boolean): boolean => updateFilters(item.id, !beforeChecked)}
          >
            {`${item.title} ( FIL )`}
          </RHCheck>
        )
      })}
    </RHCard>
  )
}

export default SettingCom
