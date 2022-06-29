import React, { useState } from "react";
import './index.scss'

const Blass = (name = ''): string => 'rh-header-20220628082657' + name

export interface ParamUnit {
	key?: string
	value?: string | number
	use?: boolean
}

const tmplist: ParamUnit[] = [
	{ key: 'a', value: '123', use: true },
	{ key: 'b', value: '123', use: true },
	{ key: 'c', value: '123', use: false },
]


export function RHHeader() {
	const len = tmplist.length || 0

	if (tmplist[len - 1].key || tmplist[len - 1].value) {
		tmplist.push({ use: false })
	}
	const [list, setList] = useState<ParamUnit[]>(tmplist)

	return <div className={Blass()} key={Blass()}>

		<div className={Blass('-title')}>Query Params</div>
		<div className={Blass('-params')}>
			<div className={Blass('-params-row')}>
				<span></span>
				<span>KEY</span>
				<span>VALUE</span>
			</div>
			{list.map((item, index) => {

				const [use, setUse] = useState<boolean>(item.use ?? true)
				const [key, setKey] = useState<string>(item?.key || '')
				const [value, setValue] = useState<string | number>(item?.value || '')

				return <div className={Blass('-params-row')} key={index}>
					<span><input type="checkbox" checked={use} onChange={() => setUse(!use)} /></span>
					<span>
						<input
							value={key.toString()}
							type="text"
							placeholder="Key"
							onChange={(e) => {
								setKey(e.target.value)
							}} />
					</span>
					<span>
						<input
							value={value.toString()}
							type="text"
							placeholder="Value"
							onChange={(e) => {
								setValue(e.target.value)
							}} />
					</span>
				</div>
			})}
		</div>
	</div>
}