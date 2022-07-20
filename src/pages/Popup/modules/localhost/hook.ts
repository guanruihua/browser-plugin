import { useState } from "react";


export const Blass = (name = ''): string => 'rh-popup-localhost-20220720083326' + name

export function usePorts() {
	const [port, setPort] = useState<string>('')
	const [baseUrl, _setBaseUrl] = useState<string>(
		localStorage.getItem(Blass('lodb-baseUrl')) || 'http://172.16.30.128'
	)
	const [ports, setPorts] = useState<Array<string>>(
		JSON.parse(localStorage.getItem(Blass('lodb-ports')) || '[]')
	)

	const setBaseUrl = (value: string) => {
		localStorage.setItem(Blass('lodb-baseUrl'), value)
		_setBaseUrl(value)
	}

	const addPort = () => {
		if (ports.includes(port)) return
		const _ports = ports.concat(port)
		setPorts(_ports)
		localStorage.setItem(Blass('lodb-ports'), JSON.stringify(_ports))
		setPort('')
	}

	const removePort = (index: number) => {
		const _ports = ports.filter((v, i) => i !== index)
		setPorts(_ports)
		localStorage.setItem(Blass('lodb-ports'), JSON.stringify(_ports))
	}

	const open = (port: string) => {
		console.log(baseUrl, port)
		window.open(baseUrl + port)
	}

	return {
		open,
		port,
		setPort,
		ports,
		addPort,
		setBaseUrl,
		baseUrl,
		removePort
	}
}