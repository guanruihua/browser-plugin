import React from 'react'
import { Button } from 'aurad'
import { useHook } from './hook'



export function Test() {
  const { pin, pinAll } = useHook()
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <button id='toggleBlur' className='toggle-button'>
        Toggle Blur
      </button>

      <div className='slider-container'>
        <label>Blur Amount:</label>
        {/* <input type='range' id='blurAmount' min='0' max='20' value='5' /> */}
        <span id='blurValue'>5px</span>
      </div>

      <div className='shortcut-info'>
        Current: Ctrl+Shift+B
        <button id='changeShortcut'>Change shortcut</button>
      </div>
    </div>
  )
}
