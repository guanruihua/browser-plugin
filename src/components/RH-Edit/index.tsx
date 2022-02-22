import React from 'react'
import './index.scss'

export interface RHEditCodeProps {
  value?: string
  onChange?: any // 有 onChange 按照onChange返回值更新
  onEnter?: any
  [key: string]: any
}
/**
 *
 * @param updateValue
 * @param callfunction 方法处理 value 作为返回值做为 updateValue 参数
 * @param value
 */
function useHandleChange(updateValue: any, callfunction: any, value: any, flag?: string): void {
  if (callfunction) {
    updateValue(callfunction(value, flag))
  } else {
    updateValue(value)
  }
}

function RHCodeEdit(props: RHEditCodeProps) {
  const { value = '', onChange, onEnter, ...rest }: RHEditCodeProps = props
  const [val, updateVal] = React.useState(value)

  const handleChange = (tValue: string) => {
    useHandleChange(updateVal, onChange, tValue, 'Change')
  }

  const handleKeyDown = (tValue: string) => {
    useHandleChange(updateVal, onEnter, tValue, 'Enter')
  }

  return (
    <textarea
      className='rh-edit-code'
      title='rh-edit-code'
      placeholder=''
      value={val}
      onKeyDown={(e: any): void => {
        if (e.key === 'Enter') {
          handleKeyDown(e.target.value)
        }
      }}
      onChange={(e: any) => {
        handleChange(e.target.value)
      }}
      {...rest}
    />
  )
}

export interface RHEditProps {
  children?: any
  [key: string]: any
}

function RHEdit(props: RHEditProps) {
  const { ...rest }: RHEditProps = props
  return <textarea className='rh-edit' {...rest} />
}

RHEdit.Code = RHCodeEdit

export default RHEdit
