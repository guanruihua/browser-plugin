
export type Collections = CollectionUnit[]
export interface CollectionUnit {
	info: Info
	item: InfoItem[]
	event: Event2[]
	variable: Variable[]
}

export interface Info {
	_postman_id: string
	name: string
	schema: string
	_exporter_id: string
}

export interface InfoItem {
	name: string
	item?: Item2[]
	event?: Event[]
	request?: Request2
	response?: any[]
	protocolProfileBehavior?: ProtocolProfileBehavior
}

export interface Item2 {
	name: string
	request: Request
	response: any[]
}

export interface Request {
	method: string
	header: any[]
	url: Url
	body?: Body
}

export interface Url {
	raw: string
	protocol: string
	host: string[]
	path: string[]
	query: Query[]
}

export interface Query {
	key: string
	value: string
	description?: string
	disabled?: boolean
}

export interface Body {
	mode: string
	raw: string
	options?: Options
}

export interface Options {
	raw: Raw
}

export interface Raw {
	language: string
}

export type ValueLike = string | number

export type VariableUnit = {
	key: string,
	value: ValueLike,
	type: `${ValueLike}`
}

export type Variables = VariableUnit[]


export interface Event {
	listen: string
	script: Script
}

export interface Script {
	exec: string[]
	type: string
}

export interface Request2 {
	method: string
	header: Header[]
	url: Url2
	body?: Body2
}

export interface Header {
	key: string
	value: string
	type: string
}

export interface Url2 {
	raw: string
	protocol?: string
	host: string[]
	path: string[]
	query: Query2[]
}

export interface Query2 {
	key: string
	value: string
	disabled?: boolean
}

export interface Body2 {
	mode: string
	raw?: string
	formdata?: Formdaum[]
}

export interface Formdaum {
	key: string
	value: string
	type: string
}

export interface ProtocolProfileBehavior {
	disableBodyPruning: boolean
}

export interface Event2 {
	listen: string
	script: Script2
}

export interface Script2 {
	type: string
	exec: string[]
}

export interface Variable {
	key: string
	value: string
	type: string
}
