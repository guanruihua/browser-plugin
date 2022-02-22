import React, { FormEvent } from 'react'
import { db } from '../utils'
import { id, deepClone } from '../utils'
import { HEADER_FORM_LIST, CONFIG_LIST } from '../config'

interface iParam {
  id: string
  key: string
  value: string
}

function Index(props: any) {
  const { formList, setFormList, setConfigList } = props
  const uid: string = id()
  const addFormListItem = () => {
    const list: any[] = deepClone(formList)
    list.push({
      id: id(),
      key: '',
      value: ''
    })
    setFormList(list)
  }

  const UpdateListKeyValue = (id: string, key: string, value: string): void => {
    let list: any[] = deepClone(formList)
    list = list.map((item: iParam): iParam => {
      if (item.id === id) {
        item.key = key
        item.value = value
      }
      return item
    })
    setFormList(list)
    db.set(HEADER_FORM_LIST, list)

    const tmp_config_list: any[] = JSON.parse(db.get(CONFIG_LIST)) || []
    tmp_config_list &&
      Array.isArray(tmp_config_list) &&
      tmp_config_list.length > 0 &&
      tmp_config_list.map((item: any): any => {
        if (item && item.id === id) {
          item.headers = JSON.stringify(list) || '[]'
        }
        return item
      })
    setConfigList(tmp_config_list)
  }

  return (
    <form
      className='vr-api-form-params'
      key={uid}
      onSubmit={(e: FormEvent) => {
        e.preventDefault()
      }}
    >
      <button onClick={() => addFormListItem()}>+</button>
      {formList &&
        formList.length > 0 &&
        formList.map((item: any, index: number): any => {
          const { id, key, value } = item
          return (
            <div className={`vr-form-row vr-form-row-item`} key={'vr-form-row' + index}>
              <div>
                <input
                  type='text'
                  name={`key${index}`}
                  id={`key${index}`}
                  placeholder='label'
                  defaultValue={key}
                  onBlur={(e: any) => {
                    UpdateListKeyValue(id, e.target.value, value)
                  }}
                />
              </div>
              <div>
                <input
                  type='text'
                  name={`value${index}`}
                  id={`value${index}`}
                  defaultValue={value}
                  onBlur={(e: any) => {
                    UpdateListKeyValue(id, key, e.target.value)
                  }}
                  placeholder='value'
                />
              </div>
            </div>
          )
        })}
    </form>
  )
}

export default Index
