import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import styles from './index.module.scss'
import './index.scss'

export interface Search {
  onSearch: (value: string) => void
}

export function Search(props: Search): any {
  const [value, setValue]: [string, (val: string) => void] = useState('')

  return (
    <div className='rh-input-search'>
      <input
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>): void => {
          if (e.key === 'Enter') {
            props.onSearch(value)
          }
        }}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => {
          setValue(e.target.value)
        }}
      />
      <button onClick={(): void => props.onSearch(value)}>Search</button>
    </div>
  )
}

export interface iInput {
  className?: string
  [key: string]: any
}

export const Input = (props: iInput): any => {
  const { className } = props
  return <input className={styles.input + (className ? ' ' + className : '')} {...props} />
}
