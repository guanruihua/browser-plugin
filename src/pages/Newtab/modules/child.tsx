import React from 'react'
import { ItemType } from './type'
import { classNames } from 'harpe'
import { isNumber } from 'asura-eye'
import { windowOpenUrl } from '../utils'
import { ObjectType } from '0type'
import { Icon } from './icon'

export interface ChildProps {
  lv?: number
  list: ItemType[]
  state?: ObjectType<any>
  handleClick(record: ObjectType | any, flag: 'open' | 'add' | 'minus', vid: string): void
  style?: React.CSSProperties
  [key: string]: any
}

export function Child(props: ChildProps) {
  const { list = [], state = {}, handleClick, style = {}, lv = 0 } = props

  return (
    <div className={'modules-layout-child'} style={style}>
      {list.map((item, i) => {
        const { label, url, depth = 0, children } = item
        const vid = label + '__vid__' + lv
        return (
          <div
            className={classNames('webContent-card-item', {
              title: depth === 0,
              child: depth > 0,
              open: state[vid]?.open !== '0',
            })}
            key={i}
          >
            <div className='label'>
              <span
                style={{ lineHeight: '28px' }}
                onClick={e => {
                  e.preventDefault()
                  if (children?.length) {
                    handleClick(item, 'open', vid)
                    return
                  }
                  url && windowOpenUrl(url)
                }}
              >
                {label}
              </span>
              {children?.length ? (
                <span className='controls'>
                  <span
                    onClick={e => {
                      e.preventDefault()
                      handleClick(item, 'add', vid)
                    }}
                  >
                    {Icon.Add}
                  </span>
                  <span
                    onClick={e => {
                      e.preventDefault()
                      handleClick(item, 'minus', vid)
                    }}
                  >
                    {Icon.Minus}
                  </span>
                </span>
              ) : (
                <span className='controls'></span>
              )}
            </div>
            {children?.length && state[vid]?.open !== '0' ? (
              <div className='child'>
                <Child
                  lv={lv + 1}
                  list={children}
                  state={state}
                  handleClick={handleClick}
                  style={
                    isNumber(state[vid]?.columnCount) && state[vid].columnCount > 1
                      ? {
                          columnCount: state[vid]?.columnCount,
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
