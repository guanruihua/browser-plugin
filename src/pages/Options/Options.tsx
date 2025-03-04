import React from 'react'
import './Options.scss'
// import TranslateCMM from './translate'
import { Countdown } from './Countdown'

const Options: React.FC = () => {
  return (
    <div style={{ background: '#000', width: '100vw', height: '100vh', padding: 24 }}>
      <Countdown />
    </div>
    // <TranslateCMM />
  )
}

export default Options
