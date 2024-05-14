import React, { useState } from 'react'
import './index.scss'

export default () => {
  const [aStr, setAStr] = useState<string>('')
  const [bStr, setBStr] = useState<string>('')

  const handleCompare = (aStr: string, bStr: string) => {
    const pat = /[ |\t|\n]/
    const taStr: string = aStr.trim().replace(pat, '')
    const tbStr: string = bStr.trim().replace(pat, '')
    if (taStr === '' && tbStr === '') return 'compare'
    if (taStr === tbStr) return 'equal'
    if (taStr !== tbStr) return 'noEqual'
    return 'compare'
  }

  return (
    <div className='rh-deffStr'>
      <div className={handleCompare(aStr, bStr)}>
        <textarea placeholder='' value={aStr || ''} onChange={e => setAStr(e.target.value)} />
        <textarea placeholder='' value={bStr || ''} onChange={e => setBStr(e.target.value)} />
      </div>
    </div>
  )
}
