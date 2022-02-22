/* eslint-disable */
import React from 'react';
// import defaultUrl from './default.png';
import { useWatch, tColumn, tDataSource, useColumn } from './hook'
import './index.scss'

interface iRHTableProps {
	columns: tColumn[];
	dataSource?: tDataSource[];
	rowSelection: {
		defaultSelectedRowKeys?: string[] | number[],
		selectedRowKeys?: string[] | number[],
		type?: 'checkbox' | 'radio', // 多选/单选
	}
	serialNumber?: boolean;
	[key: string]: any;
}


function Index(props: iRHTableProps) {
	// console.log({ props });
	const [dataSource, setDataSource] = useWatch(props.dataSource || [])
	const [columns, dataIndexs, setColumns] = useColumn(props.columns, props.serialNumber || false)


	return <div className='rh-table'>
		<div className='rh-table-content' >
			<table style={{ tableLayout: 'auto' }}>
				<thead>
					<tr>
						{columns.map((item: tColumn, index: number): any => {
							return <th
								key={`key${index}`}
							>
								{item.title}
							</th>
						})}
					</tr>
				</thead>

				<tbody>
					{
						dataSource.map((item: tDataSource, index: number): any => {
							return <tr
								key={`table-row-${index}`}
							>
								{columns.map((column: tColumn, colIndex: number): any => {
									const { title, dataIndex, key, render, ...cstyle } = column
									return <td
										key={`col-index${colIndex}`}
										style={cstyle}
									>
										{
											column.render
												? column.render(item, item[column.dataIndex])
												: item[column.dataIndex]
										}
									</td>
								})}
							</tr>
						})
					}
				</tbody>
			</table>

		</div>
	</div >
}

export default Index