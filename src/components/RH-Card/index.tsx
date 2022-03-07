import React from 'react'
import './index.scss'

interface iRHCard {
  title?: string
  children?: any
  titleChildren?: any
  className?: string
  [key: string]: any
}

function RHCard(props: iRHCard): any {

  const { title, titleChildren, children, className, ...rest }: iRHCard = props
  return (
    <div className={`rh-card ${className ? className : ''}`} {...rest}>
      <div className='rh-card-title'>
        {title || ''}
        {titleChildren && <div className='rh-card-title-right'>{titleChildren}</div>}
      </div>
      <div className='rh-card-content'>{children}</div>
    </div>
  )
}

export default RHCard
