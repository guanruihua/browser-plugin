/*
 * File: index.js
 * Project: RH
 * Author: ruihuag
 * File Created: Thursday, 22nd July 2021 9:52:54 am
 * Modified By: ruihuag
 * Last Modified: Monday, 26th July 2021 4:12:51 pm
 */
import React, { useState } from 'react';
import './index.scss';

const Index = () => {
	const [aStr, setAStr]: [string, any] = useState('');
	const [bStr, setBStr]: [string, any] = useState('');

	const handleCompare = (aStr: string, bStr: string) => {
		const pat = /[ |\t|\n]/
		const taStr: string = aStr.trim().replace(pat, '')
		const tbStr: string = bStr.trim().replace(pat, '')
		console.log({ taStr, tbStr })
		if (taStr === '' && tbStr === '') return 'compare';
		if (taStr === tbStr) return 'equal';
		if (taStr !== tbStr) return 'noEqual';
		return 'compare';
	}

	return <div className="rh-deffStr">
		<div>
			<textarea
				placeholder="A字串"
				value={aStr || ''}
				onChange={(e) => setAStr(e.target.value)}
			/>
			<textarea
				placeholder="B字串"
				value={bStr || ''}
				onChange={(e) => setBStr(e.target.value)} />
		</div>
		<button
			className={'btn ' + handleCompare(aStr, bStr)}
			onClick={() => handleCompare(aStr, bStr)}
		>{handleCompare(aStr, bStr).toUpperCase()}</button>
	</div>
}

export default Index;