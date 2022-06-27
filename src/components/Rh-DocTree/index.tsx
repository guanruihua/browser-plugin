import React, { useState } from "react"
import { data } from "./data"
import './index.scss'

const Blass = (name: string = ''): string => 'rh-doc-tree-20220627090738' + name

export function RHDocTree() {

	return <div className={Blass()}>
		{data.map((unit, index) => {
			const { info } = unit
			const title = info?.name || ('Unit ' + index)
			const [isOpenUnit, setIsOpenUnit] = useState<boolean>(false)

			return <div
				className={Blass('-unit')}
				onClick={() => {
					setIsOpenUnit(!isOpenUnit)
				}}
			>
				<div className={Blass(isOpenUnit ? '-right-arrow' : '-bottom-arrow')} />
				<div
					className={Blass('-unit-title')}
					title={title}
				>
					{title}
				</div>
			</div>
		})}
	</div>
}