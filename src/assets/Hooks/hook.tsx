import React, { useEffect, useState } from 'react';


/**
 * @title hook
 * @description 基础 hook 的二次封装 的通用hook
 */

export type tUseState = [any, (value: any) => void]

export function useWatch(val: any): tUseState {
	const [value, setValue]: tUseState = React.useState(val);
	React.useEffect((): void => {
		setValue(value)
	}, [val])
	return [value, setValue]
}

export function getLocalStorage(key: string, parse = false) {
	try {
		return parse
			? JSON.parse((localStorage.getItem(key) || '{}') as string)
			: localStorage.getItem(key)
	} catch (error) {
		return null
	}
}

export function setLocalStorage(key: string, parse = false, value: any) {
	localStorage.setItem(key, parse ? JSON.stringify(value) : value as string)
}

export function useLocalStorage<T>(key: string, parse = false, defaultValue?: T): [T, (val: T) => void] {
	const loVal = getLocalStorage(key, parse) || defaultValue
	useEffect(() => {
		if (getLocalStorage(key, parse) === null) {
			setLocalStorage(key, parse, defaultValue)
		}
	}, [])
	const [val, _setVal] = useState<T>(loVal)

	function setVal(newVal: T): void {
		setLocalStorage(key, parse, newVal)
		_setVal(newVal)
	}

	return [val, setVal]
}

export function getSessionStorage(key: string, parse = false) {
	try {
		return parse
			? JSON.parse((sessionStorage.getItem(key) || '{}') as string)
			: sessionStorage.getItem(key)
	} catch (error) {
		return null
	}
}

export function setSessionStorage(key: string, parse = false, value: any) {
	sessionStorage.setItem(key, parse ? JSON.stringify(value) : value as string)
}

export function useSessionStorage<T>(key: string, parse = false, defaultValue?: T): [T, (val: T) => void] {
	let loVal = getSessionStorage(key, parse) || defaultValue

	if (defaultValue !== loVal) {
		setSessionStorage(key, parse, defaultValue)
	}
	const [val, _setVal] = useState<T>(loVal)

	function setVal(newVal: T) {
		setSessionStorage(key, parse, newVal)
		_setVal(newVal)
	}

	return [val, setVal]
}