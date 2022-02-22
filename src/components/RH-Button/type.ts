import React, { ChangeEvent, FC } from 'react'

export interface iRHCheck {
  name: string
  id: string
  checked?: boolean
  children?: any
  onCheck?: (isBeforeCheck?: boolean, event?: ChangeEvent<HTMLInputElement>) => boolean
  [key: string]: any
}
