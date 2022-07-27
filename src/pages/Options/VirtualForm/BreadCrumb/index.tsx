import React, { useState } from 'react'
import styles from './index.module.scss'

const Blass = (name = ''): string => styles['breadCrumb' + name]

export interface BreadCrumb {
	list: {
		name: string
		target?: string
	}[]
}


export function BreadCrumb(props: BreadCrumb) {

	const { list } = props
	return <div className={Blass()}>
		{list.map((item, index) => {
			const { name } = item
			if (index + 1 === list.length) {
				const [_name, setName] = useState<string>(name)
				return <input
					key={name + index}
					className={Blass('-input')}
					value={_name}
					onChange={e => setName(e.target.value)} />
			}

			return <>
				<span className={Blass('-name')}>{name}</span>
				{index + 1 !== list.length && <span className={Blass('-slash')}>/</span>}
			</>
		})}
	</div>
}