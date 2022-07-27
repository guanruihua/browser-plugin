import { useState } from "react";
import { useLocalStorage } from '@/assets'

export const Blass = (name = ''): string => 'rh-popup-localhost-20220720083326' + name

export function usePorts() {
	const [port, setPort] = useState<string>('')
	const [baseUrl, setBaseUrl] = useLocalStorage<string>(Blass('lodb-baseUrl'), 'http://172.16.30.128:', false)
	const [ports, setPorts] = useLocalStorage<Array<string>>(Blass('lodb-ports'), [], true)

	const addPort = () => {
		if (ports.includes(port) || !port) return
		setPorts(ports.concat(port))
		setPort('')
	}

	const removePort = (index: number) => {
		setPorts(ports.filter((v, i) => i !== index))
	}

	const [err, setErr] = useState<string>()
	const open = (port: string) => {
		try {
			window.open(baseUrl + port)
		} catch (error) {
			setErr(JSON.stringify(error))
		}
	}

	return {
		open,
		port,
		setPort,
		ports,
		addPort,
		setBaseUrl,
		baseUrl,
		removePort,
		error: err
	}
}