import React, { FC, FormEvent, useState } from "react";
import { getDomList, createDomByList } from './Utils'
import styles from './index.module.scss'
import { Item } from './Item'

export * from './Item'

interface Form {
	onSubmit?: (values: Record<string, any>) => void;
	onReset?: (values?: Record<string, any>) => void;
	defaultValues?: Record<string, any>;
	children: any;
}

export const FormContext = React.createContext({
	setFormValue: (name: string, value?: number | string) => { }
})

const RHForm = (props: Form) => {

	const formData: Record<string, number | string | undefined> = {}
	const setFormValue = (name: string, value?: number | string) => {
		formData[name] = value
	}

	const { onSubmit, onReset, defaultValues = {}, children } = props;

	const handleSubmit = (e: FormEvent): void => {
		e.preventDefault();
		onSubmit && onSubmit(formData);
	}

	const handleReset = (e: FormEvent): void => {
		e.preventDefault();
		onReset && onReset();
	}

	return <FormContext.Provider value={{ setFormValue }}>
		<form
			className={styles.form}
			onSubmit={(e: FormEvent): void => handleSubmit(e)}
			onReset={(e: FormEvent): void => handleReset(e)}
		>
			{children}
			{/* {createDomByList(newChildren)} */}
		</form>
	</FormContext.Provider>

}

RHForm.Item = Item;

export default RHForm