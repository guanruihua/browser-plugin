/* eslint-disable*/
import React, { FC } from "react";
import styles from './index.module.scss'
import { FormContext } from './index'

type tRule = { [key: string]: any, message: string; }

export interface Item {
	name?: string;
	label?: string;
	rules?: tRule[];
	children: any;
}

export const Item: FC<Item> = (props: Item) => {
	const { label, name, children } = props;
	return <FormContext.Consumer>
		{({ setFormValue }) => {
			return <div className={styles.item}>
				<label htmlFor={name}> {label}</label>
				{[].concat(children).map(unit => {
					return React.cloneElement(unit, { setFormValue, key: new Date().getTime().toString() })
				})}
			</div>
		}}
	</FormContext.Consumer>
}