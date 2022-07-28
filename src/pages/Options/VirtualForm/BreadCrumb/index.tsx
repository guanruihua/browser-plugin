import React, { useEffect, useState } from 'react'
import { getCollectionKey, usePostman } from '../Hook'
import styles from './index.module.scss'

const Blass = (name = ''): string => styles['breadCrumb' + name]



export function BreadCrumb() {

	const [list, setList] = useState<string[]>([])
	const { collections } = usePostman()

	let target = {}
	useEffect(() => {
		const _list = getCollectionKey().split('.')
		const _flag = new Array(_list.length).fill(-1)

		for (let j = 0; j < _list.length; j++)
			for (let i = 0; i < collections.length; i++) {
				if (j === 0 && _list[0] === collections[i].info._postman_id) {
					target = collections[i]
					return
				}
			}

		console.log(target)
	}, [])

	return <div className={Blass()}>
		{list.map((name, index) => {






			if (index + 1 === list.length) {
				const [_name, setName] = useState<string>(name)
				return <input
					key={'BreadCrumb' + name + index}
					className={Blass('-input')}
					value={_name}
					onChange={e => setName(e.target.value)} />
			}

			return <React.Fragment key={'BreadCrumbs' + index + name} >
				<span
					key={'BreadCrumb' + index + name}
					className={Blass('-name')}>
					{name}
				</span>
				{index + 1 !== list.length && <span
					key={'BreadCrumb' + index + name + 2}
					className={Blass('-slash')}>
					/
				</span>}
			</React.Fragment>
		})}
	</div>
}