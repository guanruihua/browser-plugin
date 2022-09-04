import React from "react"
import { RHSelect, RHInput } from '@/components'
import { Blass, usePorts } from './hook'
import styles from './index.module.scss'
import './index.scss'

const Index = () => {
	const action = usePorts()

	return <div className={Blass()}>
		<div className={Blass('-header')}>
			<RHInput
				type={'text'}
				value={action.urlUnit}
				onChange={(e: any) => action.setUrlUnit(e.target.value)} />

			<button
				onClick={() => action.addUrl()}
				style={{
					background: action.urls.includes(action.urlUnit) ? 'Red' : 'rgb(0, 102, 255)',
					borderColor: action.urls.includes(action.urlUnit) ? 'Red' : 'rgb(0, 102, 255)'
				}}
			>
				{action.urls.includes(action.urlUnit) ? 'REMOVE' : 'ADD'}
			</button>

			<RHInput
				type={'text'}
				value={action.port}
				onChange={(e: any) => action.setPort(e.target.value)} />
			<button onClick={() => action.addPort()} >ADD</button>

			<RHSelect
				placeholder="url"
				value={action.urlIndex}
				onChange={(value: string) => action.setUrlIndex(value)}
			>
				{action.urls.map((item: string, index: number) => {
					return <RHSelect.Option
						key={item + index}
						value={item}>
						{item}
					</RHSelect.Option>
				})}
			</RHSelect>
		</div>
		{action.ports.map((i, index) => <div
			className={Blass('-port-item')}
			key={i + index}
			onClick={() => action.open(i)}
		>{i}<span onClick={() => action.removePort(index)}>D</span></div>)}
	</div>
}

export default Index