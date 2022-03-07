export interface SettingItemProps {
	label: string
	[K: string]: any
}

export type HolidayConfigItem = {
	time: string,
	enable: boolean
}

export interface HolidayConfig {
	[key: string]: HolidayConfigItem
}