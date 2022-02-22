import React, { FC, FormEvent, useState } from "react";
import { getDomList, createDomByList } from './Utils'
type tRule = { [key: string]: any, message: string; }


interface iItem {
	name?: string;
	label?: string;
	rules?: tRule[];
	children: any;
}

const Item: FC<iItem> = (props: iItem) => {
	const { label, name, children } = props;
	return <div className="rh-form-item">
		<label htmlFor={name}> {label}</label>
		{children}
	</div>
}

type tAnyObj = { [key: string]: any }

interface iForm {
	onSubmit?: (values: tAnyObj) => void;
	onReset?: (values?: tAnyObj) => void;
	defaultValues?: tAnyObj;
	children: any;
}

const RHForm = (props: iForm) => {
	const { onSubmit, onReset, defaultValues = {}, children } = props;
	// const [values, setValues] = useState(defaultValues)
	const [values] = useState(defaultValues)

	// console.log(getDomList(props));

	const newChildren: any[] = getDomList(props)

	// console.log(createDomByList(newChildren))

	const handleSubmit = (e: FormEvent): void => {
		e.preventDefault();
		onSubmit && onSubmit(values);
	}

	const handleReset = (e: FormEvent): void => {
		e.preventDefault();
		onReset && onReset();
	}

	return <form
		onSubmit={(e: FormEvent): any => handleSubmit(e)}
		onReset={(e: FormEvent): any => handleReset(e)}
	>
		{children}
		{createDomByList(newChildren)}
	</form>
}

RHForm.Item = Item;

export default RHForm