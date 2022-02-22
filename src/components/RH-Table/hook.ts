import React from 'react';


export type tColumn = {
	title: string,
	dataIndex: string,
	render?: (record: any, text: any) => any,
	[key: string]: any,
};

export type tDataSource = { [key: string]: any };

export type tHook = [any, (val: any) => void]

export function useWatch(value: any): any[] {
	const [state, setState] = React.useState(value);

	React.useEffect(() => {
		setState(value);
	}, [value])

	return [state, setState];
}


export function useTableDataSource(dataSource: any): any[] {

	const [state, setState] = React.useState(dataSource)
	React.useEffect(() => {
		setState(dataSource)
	}, [dataSource])

	return [state, setState]
}

export function useColumn(columns: any, serialNumber: boolean): any[] {

	const [state, setState] = React.useState(columns)
	const [_serialNumber, setSerialNumber] = React.useState(serialNumber)

	React.useEffect(() => {
		if (serialNumber) columns.unshift({
			title: "序号",
			key: 'serialNumber',
			maxWidth: 50
		})
		setState(columns)
		setSerialNumber(serialNumber)
	}, [columns, serialNumber])

	return [state, _serialNumber, setState]
}