import React, { ChangeEvent } from 'react'
import './index.scss'
import { iCheck } from './type'
import { useWatch } from '../../assets/Hooks/hook'

function CheckGroup(props: any) {
  const { children } = props
  return <div className='rh-button-check-group'>{children}</div>
}

function CheckGroupOption(props: any) {
  const { children } = props
  return <div className='rh-button-check-group-option'>{children}</div>
}

CheckGroup.Option = CheckGroupOption

function Check(props: iCheck) {
  const { name, id, checked, children, onCheck, ...rest }: iCheck = props
  const [isChecked, setChecked] = useWatch(checked || false)

  return (
    <div className='rh-button-check'>
      <input
        type='checkbox'
        name={name}
        id={id}
        checked={isChecked}
        {...rest}
        onChange={(event: ChangeEvent<HTMLInputElement>): void => {
          if (onCheck) onCheck(isChecked, event) && setChecked(!isChecked)
          else if (checked === undefined) setChecked(!isChecked)
        }}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}

const Button: any = (props: any) => {
  const { ...rest } = props
  return (
    <button className='rh-btn' {...rest}>
      <span>{props.children}</span>
    </button>
  )
}

Button.Check = Check
Button.CheckGroup = CheckGroup

export default Button
