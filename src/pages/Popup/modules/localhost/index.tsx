import React from "react"
import { Blass, usePorts } from './hook'
import styles from './index.module.scss'
import './index.scss'

console.log(styles)

const Index = () => {
	const action = usePorts()

	return <div className={Blass()}>
		<div className={Blass('-header')}>
			<input
				type={'text'}
				value={action.baseUrl}
				onChange={(e) => action.setBaseUrl(e.target.value)} />
			<input
				type={'text'}
				value={action.port}
				onChange={(e) => action.setPort(e.target.value)} />
			<button onClick={() => action.addPort()} >ADD</button>
		</div>
		{action.ports.map((i, index) => <div
			className={Blass('-port-item')}
			key={i + index}
			onClick={() => action.open(i)}
		>{i}<span onClick={() => action.removePort(index)}>D</span></div>)}
	</div>
}

export default Index