import React, { useState } from "react"
import { InfoItem, Request2 } from "../type"
import { data } from "./data"
import './index.scss'

const Blass = (name = ''): string => 'rh-doc-tree-20220627090738' + name

function TreeChild(props: any) {
	const { list = [] } = props
	return <div
		className={Blass('-tree-child')}
		style={{ paddingLeft: 20 }}
	>
		{list.map((unit: InfoItem) => {
			const { name, request, item }: InfoItem = unit
			const { method, header = [], url }: Request2 = request || {} as Request2
			const [isOpenUnit, setIsOpenUnit] = useState<boolean>(false)
			// const [isOpenUnit, setIsOpenUnit] = useState<boolean>(true)

			return <div key={name}>
				{method && <span className={Blass(`-tree-child-method method-${method}`)}
				>{method}</span>}
				{item
					? <span
						className={Blass('-tree-child-name')}
						onClick={(e) => {
							e.preventDefault()
							setIsOpenUnit(!isOpenUnit)
						}}
					>
						<span className={Blass((isOpenUnit ? '-bottom-arrow' : '-right-arrow') + ' name-arrow')} />
						<span style={{ paddingLeft: 22 }}>{name}</span>
					</span>
					: <span className={Blass('-tree-child-name')}
					>{name}</span>}
				{item && isOpenUnit && <TreeChild list={item || []} />}
			</div>
		})}
	</div>
}


export function RHDocTree() {

	return <div className={Blass()}>
		{data.map((unit, index) => {
			const { info } = unit
			const title = info?.name || ('Unit ' + index)
			// const [isOpenUnit, setIsOpenUnit] = useState<boolean>(false)
			const [isOpenUnit, setIsOpenUnit] = useState<boolean>(true)

			return <div
				className={Blass('-unit')}
				key={title + index}
			>
				<div onClick={() => {
					setIsOpenUnit(!isOpenUnit)
				}}>
					<div className={Blass(isOpenUnit ? '-bottom-arrow' : '-right-arrow')} />
					<div
						className={Blass('-unit-title')}
						title={title}
					>
						{title}
					</div>
				</div>
				{isOpenUnit && <TreeChild list={unit.item || []} />}
			</div>
		})}
	</div>
}