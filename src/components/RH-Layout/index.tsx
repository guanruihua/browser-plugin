import React from 'react'
import './index.scss'

export interface LayoutProps {
  children?: any
  [key: string]: any
}

function RHLayout(props: LayoutProps) {
  const { children }: LayoutProps = props
  return <div>{children}</div>
}

export default RHLayout
