import React, { useEffect } from 'react'
import { db } from '../utils'
import { request } from '../../../../assets/utils'
import { FORM_LIST, RESULT_SESSION, URL_SESSION, METHOD_SESSION } from '../config'
import './index.scss'

function Index(props: any) {
  const { setResult, APIMETHOD, setMETHOD, URL, setURL } = props
  const uid = String(new Date().getTime())

  useEffect(() => {
    setMETHOD(db.get(METHOD_SESSION))
    setURL(db.get(URL_SESSION))
  }, [1])

  //  发送请求
  const handleSend = () => {
    const params: any = {}

    const list_tmp: string = db.get(FORM_LIST)
    const formList: any[] = JSON.parse(list_tmp) || []

    Array.isArray(formList) &&
      formList.length > 0 &&
      formList.forEach((item: any): void => {
        const { key, value } = item
        key && (params[key] = value)
      })
    request(URL, {
      method: APIMETHOD,
      data: params
    }).then((data: any): void => {
      localStorage.setItem(RESULT_SESSION, JSON.stringify(data))
      setResult(data)
    })
  }

  return (
    <div className='vr-config-control' key={uid}>
      <select
        name='config-method'
        value={APIMETHOD}
        onChange={(e: any): void => {
          setMETHOD(e.target.value)
          db.setStr(METHOD_SESSION, e.target.value)
        }}
      >
        <option value='GET'>GET</option>
        <option value='POST'>POST</option>
      </select>
      <input
        type='text'
        name='config-url'
        id='config-url'
        placeholder=''
        onBlur={(e: any): void => {
          setURL(e.target.value)
          db.setStr(URL_SESSION, e.target.value)
        }}
        defaultValue={URL}
      />
      <button
        onClick={(): void => {
          handleSend()
        }}
      >
        Send
      </button>
    </div>
  )
}

export default Index
