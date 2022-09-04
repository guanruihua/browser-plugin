import React, { ChangeEvent, KeyboardEvent, FC, useState } from "react";
import styles from './index.module.scss'
import './index.scss'

const Password: FC<any> = () => {
	return <div>Under development ...  pwd</div>
}

const TextArea: FC<any> = () => {
	return <div>Under development ...  textArea</div>
}

export interface Search {
	onSearch: (value: string) => void;
}

function Search(props: Search): any {
	const [value, setValue]: [string, (val: string) => void] = useState('')

	return <div className="rh-input-search">
		<input
			onKeyDown={(e: KeyboardEvent<HTMLInputElement>): void => {
				if (e.key === 'Enter') {
					props.onSearch(value)
				}
			}}
			onChange={(e: ChangeEvent<HTMLInputElement>): void => {
				setValue(e.target.value)
			}}
		/>
		<button onClick={(): void => props.onSearch(value)}>Search</button>
	</div>
}

interface iRHInput {
	classname?: string
	[key: string]: any;
}


const RHInput: any = (props: iRHInput): any => {
	const { classname } = props
	return <input
		className={styles.input + (classname ? ' ' + classname : '')}
		{...props} />
}

RHInput.Password = Password;
RHInput.TextArea = TextArea;
RHInput.Search = Search;

export default RHInput;