import { useState } from "react";
import { useLocalStorage } from '@/assets'

export const Blass = (name = ''): string => 'rh-popup-localhost-20220720083326' + name

export function usePorts() {
	const [port, setPort] = useState<string>('')
	const [urlUnit, setUrlUnit] = useLocalStorage<string>(Blass('url-unit'), '', false)
	const [urls, setUrls] = useLocalStorage<string[]>(Blass('lodb-baseUrls'), ['http://172.16.30.128:'], true)
	const [urlIndex, setUrlIndex] = useLocalStorage<string>(Blass('lodb-baseUrl-index'), 'http://172.16.30.128:', false)

	const [baseUrl, setBaseUrl] = useLocalStorage<string>(Blass('lodb-baseUrl'), 'http://172.16.30.128:', false)

	const [ports, setPorts] = useLocalStorage<Array<string>>(Blass('lodb-ports'), [], true)

	const addUrl = () => {
		if (urlUnit) {
			if (urls.includes(urlUnit)) {
				setUrls(urls.filter(item => item !== urlUnit))
			} else {
				setUrls(urls.concat(urlUnit))
			}
		}
		setUrlUnit('')
	}

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
			// window.open(baseUrl + port)
			window.open(urlIndex + port)
		} catch (error) {
			setErr(JSON.stringify(error))
		}
	}

	return {
		open,
		urls, setUrls,
		urlUnit, setUrlUnit, addUrl,
		urlIndex, setUrlIndex,
		port, setPort,
		ports, addPort,
		baseUrl, setBaseUrl,
		removePort,
		error: err
	}
}