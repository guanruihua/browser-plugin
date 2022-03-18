import React from "react"
import { RHButton, RHEdit } from "@/components"
import ReactJson from 'react-json-view'
import rMock from 'rh-mock'
import './index.scss'

const _key = '_options_mock_param'

function handleMockScript(iscript: string, updateResult: any) {
	// console.log(localStorage.getItem(_key))
	// console.log(rMock.mock({ "name|3-5": "@name" }))
	try {
		console.log({ iscript })
		const result = rMock.mock(JSON.parse(iscript.replace(/\n/gi, '')))
		if (result) {
			updateResult({
				script: iscript,
				value: result
			})
		}
		localStorage.setItem(_key, iscript)
	} catch (error) {
		updateResult({
			script: iscript,
			msg: '生成失败',
			tip: '多余都要要去掉, 不可以使用功单引号',
			error: JSON.stringify(error)
		})
	}

}


function MockPage() {
	const [param, updateParam] = React.useState(localStorage.getItem(_key) || '')
	const [result, updateResult] = React.useState({})

	React.useEffect(() => {
		handleMockScript(param, updateResult)
	}, [param])

	return <div className="options-mock">
		<RHButton onClick={() => {
			handleMockScript(param, updateResult)
		}}>生成</RHButton>
		{/* <div>不可以使用单引号</div> */}
		<RHEdit.Code
			value={param}
			onChange={(value: string) => {
				// localStorage.setItem(_key, value)
				updateParam(value)
			}} />
		<ReactJson src={result} style={{ position: 'absolute' }} />
		{/* <ReactJson src={rMock.mock(param)} /> */}
	</div>
}

export default MockPage