import React, { useState } from 'react'
import { useBookMarks, useNewTabSetting } from './hook'
import { RHHeader, RHInput } from '../../components'
import { windowSearch } from './utils'
import BookMarksCom from './modules/BookMarksCom'
import { SettingComType } from './modules/type'
import SettingCom from './modules/SettingCom'
import './Newtab.scss'

function Newtab() {
  const [bookMarks] = useBookMarks()
  const [filters, uses, { updateFilters, updateUses, params, useUrl }]: any = useNewTabSetting()
  // const [isSettingShow, updateSettingShow] = useState(false)

  // const settingComProps: SettingComType = {
  //   isSettingShow,
  //   filters,
  //   updateFilters,
  //   uses,
  //   updateUses
  // }

  return (
    <div className='newTab' key='newTab'>
      <div className='main-content'>
        {/* <RHHeader style={{ color: '#a5ccec' }} onClick={() => updateSettingShow(!isSettingShow)} /> */}
        {/* <SettingCom {...settingComProps} /> */}
        <div className='rh-input-search-content'>
          {/* <RHInput.Search onSearch={(value: string): void => windowSearch(value, useUrl, params)} /> */}
          <RHInput.Search onSearch={(value: string): void => windowSearch(value, useUrl, '')} />
        </div>
        <div className='webContent'>
          <div className='webContent-left'>
            <BookMarksCom bookMarks={bookMarks} noShow='TEMP' />
          </div>
          <div className='webContent-right'>
            <BookMarksCom bookMarks={bookMarks} onlyShow='TEMP' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newtab
