import React, { useState } from "react"
import { usePostman, setCollectionKey } from "../Hook"
import { InfoItem, Request2 } from "../type"
import './index.scss'

const Blass = (name = ''): string => 'rh-doc-tree-20220627090738' + name

function TreeChild(props: any) {
	const { list = [], id = '', indexes = '' } = props
	return <div
		className={Blass('-tree-child')}
		style={{ paddingLeft: 20 }}
	>
		{list.map((unit: InfoItem, index: number) => {
			const { name, request, item }: InfoItem = unit
			const { method, header = [], url }: Request2 = request || {} as Request2
			const [isOpenUnit, setIsOpenUnit] = useState<boolean>(false)

			return <div key={name}>
				{method && <span className={Blass(`-tree-child-method method-${method}`)}
				>{method}</span>}

				{item &&
					<span
						className={Blass('-tree-child-name')}
						onClick={(e) => {
							e.preventDefault()
							setIsOpenUnit(!isOpenUnit)
						}}
					>
						<span className={Blass((isOpenUnit ? '-bottom-arrow' : '-right-arrow') + ' name-arrow')} />
						<span style={{ paddingLeft: 22 }}>{name}</span>
					</span>}

				{!item && <span
					className={Blass('-tree-child-name')}
					onClick={() => {
						setCollectionKey(
							indexes === '' ? String(index) : `${indexes + '.' + index}`
						)
					}}
				>{name}</span>}

				{item && isOpenUnit && <TreeChild
					id={id}
					indexes={indexes === '' ? String(index) : `${indexes + '.' + index}`}
					list={item || []}
				/>}
			</div>
		})}
	</div>
}


export function RHDocTree() {
	const { collections } = usePostman()
	return <div className={Blass()}>
		{collections.map((unit, index) => {
			const { name = 'Unit ' + index, _postman_id = '' } = unit.info
			const [isOpenUnit, setIsOpenUnit] = useState<boolean>(true)

			return <div
				className={Blass('-unit')}
				key={name + index}
			>
				<div onClick={() => setIsOpenUnit(!isOpenUnit)}>
					<div className={Blass(isOpenUnit ? '-bottom-arrow' : '-right-arrow')} />
					<div
						className={Blass('-unit-title')}
						title={name}
					>
						{name}
					</div>
				</div>
				{isOpenUnit && <TreeChild
					id={_postman_id}
					indexes=''
					list={unit.item || []} />}
			</div>
		})}
	</div>
}