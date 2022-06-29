import React, { FormEvent, useState } from "react"
import './index.scss'

const Blass = (name = ''): string => 'rh-body-20220629032225' + name

// #0451a5

export function formatStyle(str: string) {
	const rows = str.split(/(.{78})|\n/).filter(i => i !== '')
	const len = rows.length
	return rows.map((item: string, index: number) => {
		if (index === 0 || index + 1 === len) {
			return <div
				key={index}
				style={{ color: '#000' }}>
				{item}
			</div>
		}
		if (/(.*):(.*)/.test(item)) {
			return item.split(':').map((unit, index2) => {
				if (index2 === 0) {
					return <span key={index + '-' + index2}><span style={{ color: '#a31515' }}>{unit}</span> :</span>
				}
				if (index2 === 1) {
					return <span key={index + '-' + index2} style={{ color: '#0451a5' }}>{unit}</span>
				}
				return unit
			})
		}
		return <div key={index}>{item}</div>
	})

}

export interface ButtonRaw {
	name: string
	value: string | number
	label: string
	checked?: boolean
}

export function ButtonRaw(props: ButtonRaw) {

	const { value, label, name, checked = false } = props
	const id: string = label + '_' + new Date().getTime().toString()

	return (
		<label htmlFor={id} key={id}>
			<input
				defaultChecked={checked}
				name={name}
				type="radio"
				value={value}
				id={id} />
			<span>{label}</span>
		</label>
	)
}

export interface ParamUnit {
	key?: string
	value?: string | number
	use?: boolean
}

export function RHBody() {
	const [selectFlag, setSelectFlag] = useState<string>('JSON')

	const [value, setValue] = useState<string>(
		`{ 
  'a': 'b' 
}`
	)

	return <div className={Blass()}>

		<div className={Blass('-header')}>
			<fieldset
				id="body-type"
				onChange={(e: FormEvent<HTMLFieldSetElement>) => {
					console.log((e?.target as HTMLInputElement)?.defaultValue)
					setSelectFlag((e?.target as HTMLInputElement)?.defaultValue)
				}}>
				{[
					{ name: 'body-type', label: 'none', value: 'none', checked: false },
					{ name: 'body-type', label: 'JSON', value: 'JSON', checked: true },
				].map((item) => <ButtonRaw key={item.label} {...item} />)}
			</fieldset>
		</div>
		<div className={Blass('-content')}>
			{{
				'none': 'This request does not have a body',
				'JSON': <div>
					<pre>{formatStyle(value)}</pre>
					<textarea defaultValue={value} onChange={(e) => {
						setValue(e.target.value)
					}} />
				</div>
				,

			}[selectFlag]}
		</div>
	</div>
}