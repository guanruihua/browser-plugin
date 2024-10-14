import React from 'react'
import './index.scss'
import { useSetState } from '0hook'

const transformTo = (val: string) => {
  return val
    .replace(/:\s*'[^']*',?/gi, ': string')
    .replace(/:\s*"[^']*",?/gi, ': string')
    .replace(/:\s*(true|false),?/gi, ': boolean')
    .replace(/:\s*\d+,?/gi, ': number')
    .replace(/(\w.*?):\s*t\([^)]*\),?/gi, '$1: string')
    .replace(/{\s*},?/gi, '{ [key: string]: any }')
    .replace(
      /},/gi,
      ` [key: string]: any
  }`
    )
}

const t = ''
// const t = `{
//   a: 123,
//   b: '123',
//   b2: "fjasdkfj",
//   c: { },
//   search: t('global.searchBtn'),
//   d: {
//     e: 123,
//     f: 567,
//   },
//   g: true,
// }`

export function Transform() {
  const [state, setState] = useSetState({
    form: t,
    to: transformTo(t)
  })

  return (
    <div className='panel-transform'>
      <textarea
        tabIndex={-1}
        className='form'
        placeholder='form'
        value={state.form}
        onKeyDown={e => {
          if (e.keyCode === 9) {
            e.preventDefault()
          }
        }}
        onChange={e => {
          const value = e?.target?.value || ''
          setState({ form: value, to: transformTo(value) })
        }}
      ></textarea>
      <textarea tabIndex={-1} className='to' placeholder='to' value={state.to} disabled></textarea>
    </div>
  )
}
