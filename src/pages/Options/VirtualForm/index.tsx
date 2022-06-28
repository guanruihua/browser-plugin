import { BreadCrumb } from './BreadCrumb'
import { RHDocTree } from './Rh-DocTree'
import React from "react"
import './vrForm.scss'
import { SendInput } from './SendInput'
import { Tab, Tabs } from './Tabs'
import { RHParams } from './RHParams'

const Blass = 'vrForm'

export default function VirtualForm() {
	return <div className={Blass}>
		<div className={`${Blass}-left`}>
			<RHDocTree />
		</div>
		<div className={`${Blass}-right`}>
			<BreadCrumb list={[
				{ name: '11' },
				{ name: '22' },
				{ name: '33' },
				{ name: '44' },
			]} />
			<SendInput />
			<Tabs>
				<Tab tab='Params' key='Params' active='Params'>
					<RHParams />
				</Tab>
				<Tab tab='Body' key='Body' active='Body'>
					Body content
				</Tab>
				<Tab tab='Headers' key='Headers' active='Headers'>
					Headers content
				</Tab>
			</Tabs>
		</div>
	</div>
}