import React from "react"
import { Input } from '@/components'
import { Blass, usePorts } from './hook'
import './index.scss'

const Index = () => {
	const action = usePorts()

return <div className={Blass()}>
		<div className={Blass('-header')}>
			<Input
				type={'text'}
				defaultValue={action.baseUrl || ''}
				onChange={(e: any) => action.setBaseUrl(e.target.value)} />

			<Input
				type={'text'}
				value={action.port}
				onChange={(e: any) => action.setPort(e.target.value)} />
			<button onClick={() => action.addPort()} >ADD</button>

		</div>
		{action.ports.sort().map((i, index) => <div
			className={Blass('-port-item')}
			key={i + index}
			onClick={() => action.open(i)}
		>{i}<span onClick={() => action.removePort(index)}>D</span></div>)}
	</div>
}

export default Index