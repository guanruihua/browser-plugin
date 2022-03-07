import React from "react";
import { RHTextAreaProps } from './type'
import './index.scss'

export default function RHTextArea(props: RHTextAreaProps) {
	const { className }: RHTextAreaProps = props
	return <textarea className={`rh-textarea ${className}`} {...props} />
}