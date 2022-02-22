import React from 'react'
import { BaseCodeEdit } from '../assets/type'
export type PerPreviewProps = BaseCodeEdit

function PerPreview(props: PerPreviewProps) {
  return (
    <div className='options-code-preview-show' dangerouslySetInnerHTML={{ __html: props.show }} />
  )
}
export default PerPreview
