import React, { useEffect, useState } from "react"
import ReactJson from 'react-json-view'
import { RESULT_SESSION } from "../config"
import './index.scss'

function Index(props: any) {
	const { result } = props
	const uid: string = new Date().getTime().toString()
	const [res, setRes] = useState({})
	useEffect(() => {
		const str: any = localStorage.getItem(RESULT_SESSION) || '{}'
		setRes(result || JSON.parse(str) || {})
	}, [localStorage, result])

	return <div className="vr-form-result" key={uid}>
		<ReactJson src={res} key={uid + 'json'} />
	</div>
}

export default Index;