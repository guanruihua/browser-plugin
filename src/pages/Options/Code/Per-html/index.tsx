import React from 'react'
import { BaseCodeEdit } from '../assets/type'
import { Edit } from '../../../../components'
const RHCodeEdit: React.FC<any> = Edit.Code
export type PerHTMLProps = BaseCodeEdit

function PerHTML(props: PerHTMLProps) {
  const { show, onChange }: PerHTMLProps = props

  return (
    <div className='options-code-edit-html'>
      <RHCodeEdit onChange={onChange} onEnter={onChange} value={show} />
    </div>
  )
}

export default PerHTML
