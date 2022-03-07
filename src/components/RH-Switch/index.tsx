import React, { MouseEvent, useState } from "react"
import { iRHSwitch } from './type'
import './index.scss'

function RHSwitch(props: iRHSwitch): any {

	const {
		disabled = false,
		defaultChecked = undefined,
		checkedChildren = "ON",
		uncheckedChildren = "OFF",
		onChange,
		checked: initChecked,
		style = { width: 60, height: 23, fontSize: 14 },
		...tempProps
	}: iRHSwitch = props

	const [checked, setChecked] = useState(!!defaultChecked)

	React.useEffect((): void => {
		if (initChecked !== undefined)
			setChecked(initChecked)
	}, [initChecked])

	const switchClick: any = (e: MouseEvent<HTMLButtonElement>): void => {
		if (initChecked === undefined || (onChange && onChange(!!checked, e))) {
			setChecked(!checked)
		}
	}
	return (
		<span>
			<button
				className={`rh-switch rh-switch${checked ? '' : '-un'}-select`}
				style={{ ...style }}
				disabled={!!disabled}
				onClick={(e: MouseEvent<HTMLButtonElement>): void => switchClick(e)}
				{...tempProps}
			>
				<div className={`rh-switch-handle`} />
				<span className={`rh-switch-inner`}>
					{checked ? checkedChildren : uncheckedChildren}
				</span>
			</button >
		</span>
	)
}

export default RHSwitch