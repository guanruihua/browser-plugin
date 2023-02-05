import { ChangeEvent } from 'react'

export interface iCheck {
  name: string
  id: string
  checked?: boolean
  children?: any
  onCheck?: (isBeforeCheck?: boolean, event?: ChangeEvent<HTMLInputElement>) => boolean
  [key: string]: any
}
