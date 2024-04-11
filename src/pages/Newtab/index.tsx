import React from 'react'
import { render } from 'react-dom'
import Newtab from './Newtab'

render(<Newtab />, window.document.querySelector('#app-container'))

console.log(module)

if ((module as any).hot) {
  (module as any).hot.accept()
}
