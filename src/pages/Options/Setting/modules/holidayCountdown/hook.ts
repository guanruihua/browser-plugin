import { useState, useEffect } from "react";
import { settingDictionary } from "../../dictionary"
import { HolidayConfig, HolidayConfigItem } from './type'

export function useHolidaysHandler() {

	const _holidaysCountdownKey = localStorage.getItem(settingDictionary.holidaysCountdownKey) || '元旦,中秋,国庆,清明,春节'
	const [holidays, setHolidays] = useState<string>(_holidaysCountdownKey)

	const _holidaysCountdownConfig = localStorage.getItem(settingDictionary.holidaysCountdownConfigKey) || "{}"
	const [holidayConfigs, setHolidayConfigs] = useState<HolidayConfig>(JSON.parse(_holidaysCountdownConfig) || {})

	const [showHolidays, setShowHolidays] = useState<string[] | []>([])

	const setHolidayConfigItem = (key: string, { time, enable }: HolidayConfigItem) => {
		let needToUpdate = false
		const _temp_holidayConfigs_item: HolidayConfigItem = holidayConfigs[key] || {
			time: '2020-06-14',
			enable: true
		}
		if (time !== undefined) {
			_temp_holidayConfigs_item.time = time
			needToUpdate = true
			// console.log('item', key, time, enable, needToUpdate);

		}
		if (enable !== undefined) {
			_temp_holidayConfigs_item.enable = enable
			needToUpdate = true
			// console.log('item', key, time, enable, needToUpdate);

		}

		if (needToUpdate) {
			// console.log('item', key, time, enable, needToUpdate);

			const result: HolidayConfig = { ...holidayConfigs, [key]: _temp_holidayConfigs_item }
			setHolidayConfigs(result)
			localStorage.setItem(settingDictionary.holidaysCountdownConfigKey, JSON.stringify(result))
		}

	}



	useEffect(() => {
		setShowHolidays(holidays.split(/,/) || [])
	}, [holidays])


	return { holidayConfigs, setHolidayConfigs, setHolidayConfigItem, holidays, showHolidays, setHolidays }
}