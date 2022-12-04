import React from 'react'
import { BaseCodeEdit } from '../assets/type'
import { RHEdit } from '../../../../components'
const RHCodeEdit: React.FC<any> = RHEdit.Code
export type PerCSSProps = BaseCodeEdit

function PerCSS(props: PerCSSProps) {
  const { show, onChange }: PerCSSProps = props

  return (
    <div className='options-code-edit-css'>
      <RHCodeEdit onChange={onChange} onEnter={onChange} value={show} />
    </div>
  )
}

export default PerCSS
