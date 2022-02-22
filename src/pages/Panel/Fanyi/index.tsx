import React, { useState, useRef, useEffect } from 'react'
import { request, copyToClip } from '../../../assets/utils'
import copySvg from '../../../assets/img/copy.svg'
import './index.scss'

function Index() {
  const [en, setEn] = useState('')
  const [zh, setZh] = useState('')

  const [varName, setVarName] = useState('')
  const [varMiniName, setVarMiniName] = useState('')

  const taZhRef: any = useRef('')
  const taEnRef: any = useRef('')

  useEffect(() => {
    setEn(localStorage.getItem('Translated_EN') || '')
    setZh(localStorage.getItem('Translated_ZH') || '')
  }, [1])

  const handleZhToEn = () => {
    request(`http://fanyi.youdao.com/translate?&doctype=json&type=ZH_CN2EN&i=${zh}`).then(
      (res: any): void => {
        if (typeof res === 'string') return
        const { tgt = '' } = res.translateResult[0][0]
        setEn(tgt)
        taEnRef.current.value = tgt || ''
        localStorage.setItem('Translated_EN', tgt)
      }
    )
  }

  const handleEnToZh = () => {
    request(`http://fanyi.youdao.com/translate?&doctype=json&type=EN2ZH_CN&i=${en}`).then(
      (res: any): void => {
        if (typeof res === 'string') return
        const { tgt = '' } = res.translateResult[0][0]
        setZh(tgt)
        taZhRef.current.value = tgt || ''
        localStorage.setItem('Translated_ZH', tgt)
      }
    )
  }

  useEffect(() => {
    setVarName(
      en
        .split(' ')
        .map((str: string, index: number): string => {
          if (index === 0) return str.slice(0, 1).toLowerCase() + str.slice(1).toLowerCase()
          return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
        })
        .filter((i: any, index: number): boolean => index < 5)
        .join('')
    )
    setVarMiniName(
      en
        .split(' ')
        .map((str: string, index: number): string => {
          if (index === 0) return str.slice(0, 1).toLowerCase() + str.slice(1, 3).toLowerCase()
          return str.slice(0, 1).toUpperCase() + str.slice(1, 3).toLowerCase()
        })
        .filter((i: any, index: number): boolean => index < 5)
        .join('')
    )
  }, [en])

  return (
    <div className='panel-fanyi-content'>
      <textarea
        ref={taZhRef}
        defaultValue={zh}
        placeholder='中文'
        maxLength={6000}
        onChange={(e: any): void => {
          const val: string = e.target.value
          setZh(val || '')
          localStorage.setItem('Translated_ZH', val)
          handleZhToEn()
        }}
        onBlur={(e: any): void => {
          const val: string = e.target.value
          setZh(val || '')
          localStorage.setItem('Translated_ZH', val)
          handleZhToEn()
        }}
      />
      <textarea
        ref={taEnRef}
        defaultValue={en}
        placeholder='English'
        maxLength={6000}
        onChange={(e: any): void => {
          const val: string = e.target.value
          setEn(val || '')
          localStorage.setItem('Translated_EN', val)
          handleEnToZh()
        }}
        onBlur={(e: any): void => {
          const val: string = e.target.value
          setEn(val || '')
          localStorage.setItem('Translated_EN', val)
          handleEnToZh()
        }}
      />
      <div className='panel-fanyi-content-translate'>
        <button
          onClick={() => {
            handleZhToEn()
          }}
        >
          <span>Translated into English</span>
        </button>
        <button
          onClick={() => {
            copyToClip(zh)
          }}
        >
          <img src={copySvg} alt='copy' />
        </button>
      </div>
      <div className='panel-fanyi-content-translate'>
        <button
          onClick={() => {
            handleEnToZh()
          }}
        >
          <span>Translated into Chinese</span>
        </button>
        <button
          onClick={() => {
            copyToClip(en)
          }}
        >
          <img src={copySvg} alt='copy' />
        </button>
      </div>

      <div className='panel-fanyi-content-var'>
        <span>{varName}</span>
        <button
          onClick={(): void => {
            copyToClip(varName)
          }}
        >
          <img src={copySvg} alt='copy' />
        </button>
      </div>

      <div className='panel-fanyi-content-var'>
        <span>{varMiniName}</span>
        <button
          onClick={(): void => {
            copyToClip(varMiniName)
          }}
        >
          <img src={copySvg} alt='copy' />
        </button>
      </div>
    </div>
  )
}

export default Index
