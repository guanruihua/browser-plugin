import React from "react"
import './index.scss'

const Blass = (name = ''): string => 'rh-send-input-20220627090738' + name

export function SendInput() {
	return <div className={Blass()}>
		<select name="methods" className={Blass('-select')}>
			<option value="GET">GET</option>
			<option value="POST">POST</option>
		</select>
		<input className={Blass('-input')} />
		<div className={Blass('-send')}>
			Send
		</div>
	</div>
}