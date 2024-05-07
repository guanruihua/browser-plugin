import React from 'react'
// import { render } from 'react-dom'
import Newtab from './Newtab'
import { createRoot } from 'react-dom/client'

const container = window.document.querySelector('#app-container')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)
root.render(<Newtab />)

// render(<Newtab />, window.document.querySelector('#app-container'))

// if ((module as any).hot) {
//   ;(module as any).hot.accept()
// }
