import React from 'react'
import { ItemType } from './type'
import { classNames } from 'harpe'
import { isNumber } from 'asura-eye'
import { windowOpenUrl } from '../utils'
import { ObjectType } from '0type'
import './index.scss'
import { Icon } from './icon'

export interface ChildProps {
  lv?: number
  list: ItemType[]
  state?: ObjectType<any>
  handleClick(record: ObjectType | any, flag?: 'open' | 'add' | 'minus'): void
  style?: React.CSSProperties
  [key: string]: any
}



export function Child(props: ChildProps) {
  const { list = [], state = {}, handleClick, style = {}, lv = 0 } = props

  return (
    <div className={'modules-layout-child'} style={style}>
      {list.map((item, i) => {
        const { label, url, depth = 0, children } = item

        return (
          <div
            className={classNames('webContent-card-item', {
              title: depth === 0,
              child: depth > 0,
              open: state[label]?.open !== '0'
            })}
            key={i}
          >
            <div className='label'>
              <span
                onClick={e => {
                  e.preventDefault()
                  if (children?.length) {
                    handleClick(item, 'open')
                    return
                  }
                  url && windowOpenUrl(url)
                }}
              >
                {label.replace('_icon', '')}
              </span>
              {children?.length ? (
                <span className='controls'>
                  <span
                    onClick={e => {
                      e.preventDefault()
                      handleClick(item, 'add')
                    }}
                  >
                    {Icon.Add}
                  </span>
                  <span
                    onClick={e => {
                      e.preventDefault()
                      handleClick(item, 'minus')
                    }}
                  >
                    {Icon.Minus}
                  </span>
                </span>
              ) : (
                <span></span>
              )}
            </div>
            {children?.length ? (
              <div className='child'>
                <Child
                  lv={lv + 1}
                  list={children}
                  state={state}
                  handleClick={handleClick}
                  style={
                    isNumber(state[label]?.columnCount) && state[label].columnCount > 1
                      ? {
                          columnCount: state[label]?.columnCount
                        }
                      : {}
                  }
                />
              </div>
            ) : undefined}
          </div>
        )
      })}
    </div>
  )
}
