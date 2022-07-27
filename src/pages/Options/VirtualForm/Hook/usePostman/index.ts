import React from "react"
import type { Collections, CollectionUnit } from '../../type'
import { setLocalStorage, getLocalStorage } from '@/assets'
import { data } from '../data'
import { namespace, namespaceIndex } from './common'

/**
 * 获取 postman 配置
 */
export function getCollections(): Collections {
	return getLocalStorage<Collections>(namespace, data, true)
}

/**
 * 设置 postman 设置
 */
export function setCollections(collections: Collections = []): boolean {
	return setLocalStorage<Collections>(namespace, collections, true)
}

/**
 * 设置索引
 */
export function setCollectionKey(key: string): boolean {
	return setLocalStorage(namespaceIndex, key)
}

/**
 * 通过 ids 获取 postman 配置
 */
export function getCollectionByIds(...ids: string[]): CollectionUnit[] {
	return getCollections().filter((unit: CollectionUnit) =>
		ids.includes(unit?.info?._postman_id)
	)
}

export function usePostman() {

	const [collections, setCollections] = React.useState<Collections>(getCollections())

	return {
		collections,
		setCollections,
	}
}