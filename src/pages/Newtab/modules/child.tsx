import React from 'react'
import { ItemType } from './type'
import { classNames } from 'harpe'
import { isEffectArray } from 'asura-eye'
import { windowOpenUrl } from '../utils'
import { ObjectType } from '0type'

export interface ChildProps {
  list: ItemType[]
  opens?: ObjectType
  setOpens?(val: ObjectType): void
  [key: string]: any
}

export function Child(props: ChildProps) {
  const { list = [], opens = {}, setOpens } = props
  const rootStyle: React.CSSProperties = setOpens
    ? {
        display: 'block',
        width: '100%',
        columnCount: 4
      }
    : {}
  return (
    <div style={rootStyle}>
      {list.map((item, i) => {
        const { label, config = [], url, urls, depth = 0, children } = item
        const handleClick = () => {
          if (depth === 0) {
            setOpens && setOpens({ [label]: opens[label] ? false : true })
            return
          }
          if (config.includes('WORKSPACE') && isEffectArray(urls)) {
            urls.forEach((url, i) => {
              if (!url) return
              if (i + 1 == urls.length) {
                window.location.replace(url)
                // window.open(url, '_parent')
                return
              }
              window.open(url, '_blank')
            })
            return
          } else url && windowOpenUrl(url)
        }
        return (
          <div
            className={classNames('webContent-card-item', {
              title: depth === 0,
              child: depth > 0,
              open: opens[label]
            })}
            key={i}
            style={{
              marginLeft: depth * 10
            }}
          >
            {/* <Img
             isFavicon
             errorHidden
             url={url}
             alt={label}
             style={{
               width: 14,
               height: 14,
               marginRight: 6
             }}
           /> */}
            <div className='label' onClick={handleClick}>
              {label}
            </div>
            {children?.length ? (
              <div className='child'>
                <Child list={children} />
              </div>
            ) : undefined}
          </div>
        )
      })}
    </div>
  )
}
