import React, { useState } from "react"
import './index.scss'

export interface Tab {
	tab: string
	key?: string
	active: string
	[key: string]: any
}

export function Tab(props: any) {
	return <div>{props.children}</div>
}

const Blass = (name = ''): string => 'rh-Tab-20220628063151' + name

export function Tabs(props: any) {


	return <div className={Blass()}>{
		(() => {
			const [nowActive, setNowActive] = useState<string>('')

			const headProps: { tab: string, active: string }[] = []
			const contentProps: any[] = []

			props.children.forEach((unit: any) => {
				const { key } = unit
				const { tab, active }: Tab = unit.props
				headProps.push({ tab, active })
				contentProps.push(<div
					key={key}
					className={nowActive === active ? 'active' : 'no-active'}
				>
					{unit}
				</div>)
			})

			if (nowActive === '') {
				// setNowActive(headProps[0].active)
				setNowActive(headProps[1].active)
			}

			return <div
				className={Blass('-unit')}
			>
				<div
					className={Blass('-unit-header')}
				>
					{headProps.map((item) => <span
						className={nowActive === item.active ? 'active' : 'no-active'}
						onClick={() => setNowActive(item.active)}
						key={item.tab}>
						{item.tab}
					</span>)}
				</div>
				<div className={Blass('-unit-content')}> {contentProps} </div>
			</div>
		})()
	}</div>
}