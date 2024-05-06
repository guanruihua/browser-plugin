import React, { useEffect, useState } from 'react'
import { LayoutResult, useLayout } from './hook'
import './index.scss'

export interface TabPaneProps {
  tab: string
  active: string
  [key: string]: any
}

function TabPane(props: TabPaneProps) {
  const { tab, active, ...rest }: TabPaneProps = props //eslint-disable-line
  return <div {...rest}>{props.children}</div>
}

export interface TabProps {
  position?: 'left' | 'right' | 'bottom' | 'top' | undefined // default top, header 的位置
  headStyle?: { [key: string]: any }
  titleSize?: number // default 34 标题的尺寸
  showPadding?: number // default 6 内容的padding
  defaultActiveKey?: string
  top?: number
  right?: number
  bottom?: number
  left?: number
  onChange?: (val: any) => void
  width?: number | string
  height?: number | string
  fontSize?: number | string
  className?: string
  noPosition?: boolean
  style?: any
  children?: any
  [key: string]: any
}

function Index(props: TabProps) {
  const {
    headStyle = {},
    defaultActiveKey = '',
    onChange,
    titleSize = 34,
    showPadding = 6,
    width = '100%',
    className = '',
    height = 'auto',
    fontSize = 14,
    style,
    noPosition = false,
    position = 'top',
    top = 0,
    right = 0,
    bottom = 0,
    left = 0,
    children
  }: TabProps = props

  const [selectActive, setSelectActive] = useState(defaultActiveKey)
  const { headerLayoutStyle, paneLayoutStyle }: LayoutResult = useLayout(
    position,
    noPosition,
    titleSize,
    showPadding,
    top,
    right,
    bottom,
    left
  )
  useEffect(() => {
    setSelectActive(defaultActiveKey)
  }, [defaultActiveKey])

  const handleTitleSelect = (val: any): void => {
    setSelectActive(val)
    onChange && onChange(val)
  }

  return (
    <div
      className={`rh-tab-content ${className}`}
      style={{ width, height, ...style }}>
      <div className='rh-tab-header' style={{ ...headerLayoutStyle, ...headStyle }}>
        {children &&
          [].concat(children).map((item: any) => {
            const { tab, active = undefined } = item.props
            if (active !== undefined)
              return (
                <div
                  key={active}
                  style={{ fontSize }}
                  className={`rh-tab-title ${selectActive === active
                    ? `rh-tab-title-${position}-select`
                    : 'rh-tab-title-noselect'
                    }`}
                  onClick={(): void => handleTitleSelect(active)}
                >
                  {tab}
                </div>
              )
          })}
      </div>
      <div className='rh-tab-content-show' style={{ ...paneLayoutStyle }}>
        {[].concat(children).map((item: any) => {
          const { active = undefined, style = {}, ...rest } = item.props

          if (active !== undefined && selectActive === active)
            return (
              <div
                {...rest}
                style={{
                  ...style,
                  display:
                    position === 'left' || position === 'right'
                      ? 'inline-block'
                      : 'block'
                }}
                className={`rh-tab-pane ${selectActive === active ? `rh-tab-pane-select` : 'rh-tab-pane-noselect'
                  }`}
                key={active + 'pane'}
              >
                {item.props.children}
              </div>
            )
        })}
      </div>
    </div>
  )
}

Index.TabPane = TabPane

export default Index
