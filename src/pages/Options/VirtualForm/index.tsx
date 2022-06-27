import { BreadCrumb, RHDocTree } from "@/components"
import React from "react"
import './vrForm.scss'

const Blass = 'vrForm'

export default function VirtualForm() {
	return <div className={Blass}>
		<div className={`${Blass}-left`}>
			<RHDocTree />
		</div>
		<div className={`${Blass}-right`}>
			<BreadCrumb />
			<div>
				main
			</div>
		</div>
	</div>
}