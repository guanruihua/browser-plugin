import React from 'react'
import './index.scss'
const Blass = (name = ''): string => 'rh-BreadCrumb-20220628031638' + name

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

			return <span key={name + index}>
				<span className={Blass('-name')}>{name}</span>
				{index + 1 !== list.length && <span className={Blass('-slash')}>/</span>}
			</span>
		})}
	</div>
}