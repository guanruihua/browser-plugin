import React from 'react'
import DelSvg from '../../../../assets/img/del.svg'
import { db, id } from '../utils'
import {
  CONFIG_LIST,
  FORM_LIST,
  HEADER_FORM_LIST,
  METHOD_SESSION,
  RESULT_SESSION,
  URL_SESSION,
  CONFIG_ID
} from '../config'
import './index.scss'

function Index(props: any) {
  const { configList, setConfigList, resetConfig, setItemConfigByVal } = props

  const delConfigListItem = (id: string | number) => {
    const list: any[] = configList.filter((item: any): any => {
      if (item.id === id) return false
      return true
    })
    setConfigList(list)
    db.set(CONFIG_LIST, JSON.stringify(list))
  }

  const addApiConfig = (): void => {
    // handleSave()
    resetConfig()
  }

  // 保存当前接口的配置
  const handleSave = (): void => {
    const t_id: string = db.get(CONFIG_ID) || id()
    const method: string = db.get(METHOD_SESSION) || 'get'
    const url: string = db.get(URL_SESSION) || ''
    const result: string = db.get(RESULT_SESSION) || '{}'
    const formList: string = db.get(FORM_LIST) || '[]'
    const headers: string = db.get(HEADER_FORM_LIST) || '[]'
    let havFlag = true

    const configList_temp: any[] =
      (Array.isArray(configList) &&
        configList.length > 0 &&
        configList.map((item: any): any => {
          if (item && item.id === t_id) {
            havFlag = false
            return {
              id: item.id,
              formList,
              headers,
              result,
              URL: url,
              APIMETHOD: method
            }
          }
          !item.id && (item.id = id())

          return item
        })) ||
      []

    if (havFlag) {
      const t_id: string = id()
      db.setStr(CONFIG_ID, t_id)
      configList_temp.push({
        id: t_id,
        headers,
        formList,
        URL: url,
        APIMETHOD: method,
        result
      })
    }
    setConfigList(configList_temp)
    db.set(CONFIG_LIST, JSON.stringify(configList_temp))

    const tmp_configList: any[] = JSON.parse(JSON.stringify(configList)) || []

    chrome.storage.sync.set({ configList: tmp_configList })

    // resetConfig()
  }

  return (
    <div className='vr-config-api-list'>
      <div className='vr-config-api-list-add'>
        <button onClick={(): void => addApiConfig()}>+</button>
      </div>
      {configList &&
        Array.isArray(configList) &&
        configList.length > 0 &&
        configList.map((item: any): any => {
          return (
            <div
              key={item.id}
              className='vr-config-api-list-item'
              onClick={(): void => {
                setItemConfigByVal(item)
              }}
            >
              {`${item.APIMETHOD}-${item.URL}`}
              <img
                src={DelSvg}
                onClick={(): void => {
                  delConfigListItem(item.id)
                }}
              />
            </div>
          )
        })}
      <button
        className='save-api'
        onClick={(): void => {
          handleSave()
        }}
      >
        SAVE
      </button>
    </div>
  )
}

export default Index
