import React, { ChangeEvent} from 'react'
import './index.scss'
import { iRHCheck } from './type'
import { useWatch } from '../../assets/Hooks/hook'

function RHCheckGroup(props: any) {
  const { children } = props
  return <div className='rh-button-check-group'>{children}</div>
}

function RHCheckGroupOption(props: any) {
  const { children } = props
  return <div className='rh-button-check-group-option'>{children}</div>
}

RHCheckGroup.Option = RHCheckGroupOption

function RHCheck(props: iRHCheck) {
  const { name, id, checked, children, onCheck, ...rest }: iRHCheck = props
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

const RHButton: any = (props: any) => {
  const { ...rest } = props
  return (
    <button className='rh-btn' {...rest}>
      <span>{props.children}</span>
    </button>
  )
}

RHButton.RHCheck = RHCheck
RHButton.RHCheckGroup = RHCheckGroup

export default RHButton
