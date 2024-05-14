import React from 'react'
import Popup from './Popup'
import './index.css'
import 'aurad/dist/style.css'
import { createRoot } from 'react-dom/client'

const container = window.document.querySelector('#app-container')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)
root.render(<Popup />)
// render(<Popup />, window.document.querySelector('#app-container'));
