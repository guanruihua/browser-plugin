/*
 * @Author: ruihuag
 * @Date: 2022-06-27 15:27:54
 * @LastEditTime: 2022-06-27 16:22:45
 * @LastEditors: ruihuag
 * @Description: 修改成支持 Postman 导出的数据结构
 * @FilePath: \notepostc:\RUIHUA\project\edge-plugin\src\pages\Options\VirtualForm\index2.tsx
 */
import React, { FC, useEffect, useState } from 'react'
import ApiConfigList from './ApiConfigList'
import ApiConfig from './ApiConfig'
import ParamsPage from './Params'
import HeaderParams from './HeaderParams'
import ResultPage from './Result'
import { db, id } from './utils'
import { RHTab } from '../../../components'
import {
  CONFIG_LIST,
  URL_SESSION,
  METHOD_SESSION,
  FORM_LIST,
  RESULT_SESSION,
  HEADER_FORM_LIST,
  CONFIG_ID
} from './config'
import './index.scss'

const defaultURL = 'http://localhost:3000'

const VirtualForm: FC<any> = () => {
  const uid: string = id()
  const [result, setResult] = useState({})
  const [APIMETHOD, setMETHOD] = useState('')
  const [URL, setURL] = useState(defaultURL)
  const [formList, setFormList]: [any[], any] = useState([{}])
  const [configList, setConfigList]: [any[], any] = useState([])
  const [headerList, setHeaderList]: [any[], any] = useState([])

  useEffect(() => {
    const list_tmp: string = db.get(FORM_LIST)
    // let header_list_tmp: string = db.get(HEADER_FORM_LIST)
    let tmp_config_list: any[] = JSON.parse(db.get(CONFIG_LIST)) || []

    try {
      const list: any[] = JSON.parse(list_tmp) || [{}]
      // let header_list: any[] = JSON.parse(header_list_tmp) || [{}]
      setFormList(list)
      setHeaderList(headerList)
      if (typeof tmp_config_list === 'string') {
        tmp_config_list = []
        db.set(CONFIG_LIST, [])
      }
      setConfigList(tmp_config_list)
    } catch (error) {
      console.error(error)
    }
  }, [1])

  /* method start */
  const resetConfig = (): void => {
    db.setStr(CONFIG_ID, id())
    db.setStr(METHOD_SESSION, 'get')
    setMETHOD('get')
    db.setStr(URL_SESSION, defaultURL)
    setURL(defaultURL)
    db.set(FORM_LIST, [{}])
    setFormList([{}])
    db.set(HEADER_FORM_LIST, [])
    setHeaderList([])
    db.set(RESULT_SESSION, {})
    setResult({})
  }

  // 设置当前接口数据到界面显示
  const setItemConfigByVal = (item?: any): void => {
    // console.log({ item });
    db.setStr(CONFIG_ID, item.id || id())
    db.setStr(METHOD_SESSION, item.APIMETHOD || 'get')
    db.setStr(URL_SESSION, item.URL || defaultURL)
    db.set(FORM_LIST, item.formList || [{}])
    db.set(HEADER_FORM_LIST, item.headers || [])
    db.setStr(RESULT_SESSION, item.result || '{}')
    setMETHOD(item.APIMETHOD || 'get')
    setURL(item.URL || defaultURL)
    try {
      setResult(JSON.parse(item.result) || {})
      setHeaderList(JSON.parse(item.headers) || [])
      setFormList(JSON.parse(item.formList) || [{}])
    } catch (error) {
      console.error(error)
    }
  }

  /* method end */

  /* props start */

  const apiConfigList: any = {
    configList,
    setConfigList,
    resetConfig,
    setItemConfigByVal
  }

  const apiConfig: any = {
    setResult,
    APIMETHOD,
    setMETHOD,
    URL,
    setURL
  }

  const paramsProps: any = {
    formList,
    setFormList,
    setConfigList
  }

  const headerParamsProps: any = {
    formList: headerList,
    setFormList: setHeaderList,
    setConfigList
  }

  /* props end */
  const [selectkey, setSelectKey] = useState('params')
  return (
    <div className='vr-content' key={uid}>
      <ApiConfigList {...apiConfigList} />
      <div>
        <ApiConfig {...apiConfig} />
        <RHTab
          defaultActiveKey={selectkey}
          width={'100%'}
          noPosition
          height='auto'
          onChange={(val: string): void => {
            setSelectKey(val)
          }}
        >
          <RHTab.TabPane tab='Params' active='params'>
            <ParamsPage {...paramsProps} />
          </RHTab.TabPane>
          <RHTab.TabPane tab='Headers' active='headers'>
            <HeaderParams {...headerParamsProps} />
          </RHTab.TabPane>
        </RHTab>
        <ResultPage result={result} />
      </div>
    </div>
  )
}

export default VirtualForm
