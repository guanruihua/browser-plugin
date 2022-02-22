import React from 'react'
import './index.scss'
import PerPreview from './Per-preview'
import PerHTML from './Per-html'
import PerCSS from './Per-css'
import { useCodePreview, UseCodePreviewResult } from './hook'

function Code() {
  const { show, cssVal, htmlVal, handleCSS, handleHTML }: UseCodePreviewResult = useCodePreview()
  return (
    <div className='options-code'>
      <div className='options-code-edit'>
        <PerHTML show={htmlVal} onChange={handleHTML} />
        <PerCSS show={cssVal} onChange={handleCSS} />
      </div>
      <div className='options-code-preview'>
        <PerPreview show={show} />
      </div>
    </div>
  )
}

export default Code
