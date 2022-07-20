import React, { ChangeEvent, useEffect, useState } from "react"
import QRCode from 'qrcode.react'
import './index.scss'

const Index = () => {

	const [qrCode, setQRCode] = useState<string>('')

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
		<div className="popup-qr-code-textarea-content">
			<textarea
				className="popup-qr-code-textarea"
				key="qr-code-textarea"
				placeholder="输入你要转为的字串"
				rows={6}
				maxLength={2000}
				onChange={(e: ChangeEvent<HTMLTextAreaElement>): void => {
					setQRCode(e.target.value)
				}}
			/>
		</div>
		<QRCode
			style={{ width: 250, height: 250 }}
			className="popup-qr-code-code"
			value={qrCode}  //value参数为生成二维码的链接
			size={200} //二维码的宽高尺寸
			fgColor="#000000"  //二维码的颜色
		/>
	</div>
}

export default Index