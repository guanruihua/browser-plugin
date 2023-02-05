/* eslint-disable*/
import React, { useState } from "react"
import { Option, OptionProps } from './Option'
import styles from './index.module.scss'

export interface SelectProps {
	className?: string
	name?: string
	value?: string
	setFormValue?: (name: string, value?: number | string) => void
	placeholder?: string
	children?: any
	[key: string]: any
}

export type SelectOptionProps = OptionProps

function Select(props: SelectProps) {
	const {
		value, children, placeholder, name,
		onChange, setFormValue, className
	} = props

	const optionArray: { value: string, label: any }[] = [].concat(children)
		.map(({ props }: { props: { value: string, children: any } }) => ({ value: props.value, label: props.children }))

	const [_value, setValue] = useState<string | undefined>(value)

	const handleSelect = (index: number) => {
		const { value, label } = optionArray[index]
		onChange && onChange(label)
		setValue(label)
		name && setFormValue && setFormValue(name, value)
	}
	return <div className={(className ? className + ' ' : '') + styles.select}>
		<div>
			<input
				name={name}
				placeholder={placeholder}
				value={_value || ''}
				onChange={() => { }}
			/>
		</div>
		<div>
			{[].concat(children).map((item: any, index: number) => {
				const { type, props } = item
				const _props = { ...props }
				_props.key = index.toString()
				_props.onClick = () => handleSelect(index)
				return type(_props)
			})}
		</div>
	</div>
}

Select.Option = Option

export default Select