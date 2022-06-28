import { Collections, CollectionUnit } from '../type';
import React from "react"

export function getCollections(): Collections {
	let result = []
	try {
		result = JSON.parse(localStorage.getItem('__postman_collections') || '{}') || []
	} catch {
		console.error('__postman_collections', 'Get Error')
	}

	return result
}

export function setCollections(collections: Collections): boolean {
	try {
		localStorage.sestItem('__postman_collections', JSON.stringify(collections))
		return true
	} catch {
		console.error('__postman_collections', 'Set Error')
		return false
	}
}

export function getCollectionByIds(...ids: string[]): CollectionUnit[] {
	return getCollections().filter((unit: CollectionUnit) => {
		if (ids.includes(unit?.info?._postman_id)) {
			return true
		}
		return false
	})
}

export function usePostman() {

	const [collections, setCollections] = React.useState<Collections>(getCollections)

	return {
		collections,
		setCollections,

	}
}