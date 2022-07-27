import React, { useEffect, useState } from 'react';
/**
 * @title hook
 * @description 基础 hook 的二次封装 的通用hook
 */

export type tUseState<T = any> = [T, (value: T) => void]

export function useWatch<T = any>(val: T): tUseState<T> {
	const [value, setValue]: tUseState = React.useState<T>(val);
	React.useEffect((): void => {
		setValue(value)
	}, [val])
	return [value, setValue]
}

/**
 * 获取 localstorage
 */
export function getLocalStorage<T = any>(key: string, defaultValue: T, parse = false): T {
	if (localStorage.getItem(key) === null) {
		if (parse) {
			localStorage.setItem(key, JSON.stringify(defaultValue))
		} else if (typeof defaultValue === 'string')
			localStorage.setItem(key, defaultValue)
	}
	try {
<<<<<<< HEAD
		const result = localStorage.getItem(key)
		if (result === null) return defaultValue
		if (parse) return JSON.parse(result || JSON.stringify(defaultValue))
		return result as unknown as T
=======
		if (!localStorage.getItem(key)) return null
		return parse
			? JSON.parse((localStorage.getItem(key) || '{}') as string)
			: localStorage.getItem(key)
>>>>>>> 6140cfa4c498f8ff6412614570a06154cf18b10a
	} catch (error) {
		console.error('Get Error:', key)
		return defaultValue
	}
}

/**
 * 设置 localstorage
 */
export function setLocalStorage<T = any>(key: string, value: T, parse = false): boolean {
	try {
		if (parse) {
			localStorage.setItem(key, JSON.stringify(value))
			return true
		} else {
			if (typeof value === 'string') {
				localStorage.setItem(key, value)
				return true
			}
		}
		return false
	} catch {
		console.error('Set Error:', key)
		return false
	}
}

export function useLocalStorage<T = any>(key: string, defaultValue: T, parse = false): tUseState<T> {
	const loVal = getLocalStorage<T>(key, defaultValue, parse)
	useEffect(() => {
		if (getLocalStorage(key, parse) === null) {
			setLocalStorage(key, defaultValue, parse)
		}
	}, [])
	const [val, _setVal] = useState<T>(loVal)

	function setVal(newVal: T): void {
		setLocalStorage(key, newVal, parse)
		_setVal(newVal)
	}

	return [val, setVal]
}