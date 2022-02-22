import React from 'react'
import { windowOpenUrl } from '../utils'

const LocalhostCom = (props: any) => {
  const { port = 8080 } = props
  return (
    <div className='localhost' onClick={(): void => windowOpenUrl(`http://localhost:${port}`)}>
      {port}
    </div>
  )
}

export default LocalhostCom
