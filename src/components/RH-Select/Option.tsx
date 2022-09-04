import React from "react"
import styles from './index.module.scss'

export interface OptionProps {
	children?: any
	[key: string]: any
}

export function Option(props: OptionProps) {
	const { children, ...rest } = props
	return <div className={styles.option} {...rest}>
		{children}
	</div>
}