import React from 'react'
import { windowOpenUrl } from '../utils'
import { classNames } from 'harpe'
import { useSetState } from '0hook'
import './index.scss'

export interface BookMarksItemProps {
  bookMarks: any[]
  onlyShow?: string
  noShow?: string
  [key: string]: any
}

export default (props: BookMarksItemProps) => {
  const { bookMarks } = props
  const cacheFoldKey = 'Newtab-modules-conf-fold'
  const [state, setState] = useSetState<{
    fold: string[]
    col2: string[]
  }>(
    {
      fold: [],
      col2: [],
    },
    cacheFoldKey,
  )
  const { fold = [], col2 = [] } = state
  const setFold = (fold: string[]) => setState({ fold })
  const setCol2 = (col2: string[]) => setState({ col2 })


  const Child = (props: any) => {
    const { id, children = [], title } = props
    return (
      <div key={id} className='bookmark-item'>
        <div className='abg'></div>
        <div className='header'>
          <div className='left'></div>
          <div className='center'>
            <div
              className='title'
              onClick={() => {
                const newFold = [...fold]
                if (fold.includes(id)) {
                  setFold(newFold.filter(_ => _ !== id))
                  return
                }
                newFold.push(id)
                setFold(newFold)
              }}
            >
              {title}
            </div>
          </div>
          <div className='right'>
            <svg
              className={classNames({
                hidden: fold.includes(id),
              })}
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'
              onClick={() => {
                const newCol2 = [...col2]
                if (col2.includes(id)) {
                  setCol2(newCol2.filter(_ => _ !== id))
                  return
                }
                newCol2.push(id)
                setCol2(newCol2)
              }}
            >
              <path
                fill='none'
                stroke='currentColor'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 4v16m-5 0h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1z'
              />
            </svg>
            {/* <svg
              className={classNames({
                hidden: fold.includes(id)
              })}
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M3 3h6v2H6.462l4.843 4.843l-1.415 1.414L5 6.367V9H3zm0 18h6v-2H6.376l4.929-4.928l-1.415-1.414L5 17.548V15H3zm12 0h6v-6h-2v2.524l-4.867-4.866l-1.414 1.414L17.647 19H15zm6-18h-6v2h2.562l-4.843 4.843l1.414 1.414L19 6.39V9h2z'
              />
            </svg> */}
          </div>
        </div>
        <div
          className={classNames('child', {
            hidden: fold.includes(id),
            col2: col2.includes(id),
          })}
        >
          {children.map((child: any) => {
            const { id, title, url } = child
            return (
              <div
                key={id}
                className='value'
                onClick={() => {
                  url && windowOpenUrl(url)
                }}
              >
                {title}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className='bookmark-box'>
      {bookMarks.map(item => {
        const { id } = item
        return <Child key={id} {...item} />
      })}
    </div>
  )
}
