import React from 'react'
import { BaseCodeEdit } from '../assets/type'
import { Edit } from '../../../../components'
const RHCodeEdit: React.FC<any> = Edit.Code
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
