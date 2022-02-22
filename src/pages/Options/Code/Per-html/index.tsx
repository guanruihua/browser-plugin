import React from 'react'
import { BaseCodeEdit } from '../assets/type'
import { RHEdit } from '../../../../components'
const RHCodeEdit: React.FC<any> = RHEdit.Code
export type PerHTMLProps = BaseCodeEdit

function PerHTML(props: PerHTMLProps) {
  const { show, onChange }: PerHTMLProps = props

  return (
    <div className='options-code-edit-html'>
      <div className='title'>HTML</div>
      <RHCodeEdit onChange={onChange} onEnter={onChange} value={show} />
    </div>
  )
}

export default PerHTML
