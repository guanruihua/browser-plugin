/* eslint-disable*/
import React, { ChangeEvent, useEffect } from "react"
import QRCode from 'qrcode.react'
import { useLocalStorage } from '@/assets'
import './index.scss'

const Index = () => {
	const [qrCode, setQRCode] = useLocalStorage<string>('qrcode-lodb-baseUrl', '', false)

	useEffect((): void => {
		if (qrCode === '') {
			setQRCode(location.href)
			chrome.tabs.query(
				{ active: true, currentWindow: true },
				function (tabs: any[]): void {
					const [tab]: any[] = tabs
					setQRCode(tab?.url)
				});
		}
	}, [qrCode])

	return <div className="popup-qr-code">
		<QRCode
			style={{ width: 250, height: 250 }}
			className="popup-qr-code-code"
			value={qrCode}  //value参数为生成二维码的链接
			size={200} //二维码的宽高尺寸
			fgColor="#000000"  //二维码的颜色
		/>
		<div className="popup-qr-code-textarea-content">
			<textarea
				className="popup-qr-code-textarea"
				key="qr-code-textarea"
				placeholder="Enter the string you want to convert to..."
				rows={6}
				maxLength={20000}
				onChange={(e: ChangeEvent<HTMLTextAreaElement>): void => {
					setQRCode(e.target.value)
				}}
			/>
		</div>
	</div>
}

export default Index