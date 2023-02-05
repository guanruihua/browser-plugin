import React from "react"
import { Button, Edit } from "@/components"
import ReactJson from 'react-json-view'
import Fake from 'fakingjs'
import './index.scss'

const _key = '_options_mock_param'

function handleMockScript(temp: string, updateResult: any) {
	try {
		const result = Fake(JSON.parse(temp.replace(/\n/gi, '')))
		if (result) {
			updateResult({
				script: temp,
				value: result
			})
		}
		localStorage.setItem(_key, temp)
	} catch (error) {
		updateResult({
			script: temp,
			msg: '生成失败',
			tip: '多余逗号都要要去掉, 不可以使用功单引号',
			error: JSON.stringify(error)
		})
	}
}

export default function FakingDataPage() {
	const [param, updateParam] = React.useState(localStorage.getItem(_key) || '')
	const [result, updateResult] = React.useState({})

	React.useEffect(() => {
		handleMockScript(param, updateResult)
	}, [param])

	return <div className="options-mock">
		<div className="control-btns">
			<Button onClick={() => {
				handleMockScript(param, updateResult)
			}}>生成</Button>
		</div>
		<Edit.Code
			value={param}
			onChange={(value: string) => {
				updateParam(value)
			}} />
		<ReactJson src={result} style={{ position: 'absolute' }} />
	</div>
}