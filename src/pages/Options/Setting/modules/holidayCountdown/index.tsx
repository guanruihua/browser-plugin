import React, { ChangeEvent, useState, useEffect } from "react";
import { RHSwitch, RHCard, RHTextArea } from '@/components'
import { useHolidaysHandler } from './hook'
import { HolidayConfigItem, SettingItemProps } from './type'

function SettingDayItem({ label, holidayConfigs = {}, setHolidayConfigItem, ...rest }: SettingItemProps) {

	const [itemConfig, setItemConfig] = useState<HolidayConfigItem>({
		time: '2022-06-14',
		enable: true
	})



	useEffect(() => {
		if (holidayConfigs[label]) {
			// console.log({ holidayConfigs: holidayConfigs[label] })
			setItemConfig(holidayConfigs[label])
		}
	}, [holidayConfigs[label]])

	return <div className="options-setting-holiday-setting-item">
		<RHSwitch
			checked={itemConfig.enable === undefined ? true : itemConfig.enable}
			style={{ width: 45, height: 18, fontSize: 12 }}
			onChange={(checked: boolean): boolean => {
				setHolidayConfigItem(label, { enable: !checked })
				return true
			}}
		/>
		<span>{label}</span>
		<input type='date'
			value={itemConfig.time || undefined}
			onChange={(e: ChangeEvent<HTMLInputElement>) => {
				setHolidayConfigItem(label, { time: e.target.value })
			}}
			{...rest} />
	</div>
}

export default function HolidayCountdownSetting() {
	const {
		holidays,
		setHolidays,
		holidayConfigs,
		setHolidayConfigItem,
		showHolidays = [],
	} = useHolidaysHandler()

	return <div className="options-setting-holiday-setting">
		<RHTextArea value={holidays} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
			const _value = e.target.value
			if (_value !== holidays) {
				setHolidays(e.target.value)
			}
		}} />
		<RHCard title="Holiday Countdown">
			{
				showHolidays.map((name: string) => {
					return <SettingDayItem
						holidayConfigs={holidayConfigs}
						setHolidayConfigItem={setHolidayConfigItem}
						key={name}
						label={name} />
				})
			}
		</RHCard>
	</div>
}




