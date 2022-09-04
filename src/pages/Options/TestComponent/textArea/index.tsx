import React from "react"
import { RHSelect, RHForm } from '@/components'

interface TestAreaProps {
	[key: string]: any
}

function TestArea(props: TestAreaProps) {
	// const formData: Record<string, number | string | undefined> = {}
	// const setFormValue = (name: string, value?: number | string) => {
	// 	formData[name] = value
	// }
	return <div>
		<RHForm>
			<RHForm.Item>
				<RHSelect
					// setFormValue={setFormValue}
					name='selectName'
					placeholder="pleace select"
				>
					<RHSelect.Option value={'aa'}> aa-msg </RHSelect.Option>
					<RHSelect.Option value={'bb'}> bb-msg </RHSelect.Option>
					<RHSelect.Option value={'cc'}> cc-msg </RHSelect.Option>
				</RHSelect>
			</RHForm.Item>
			<button type="submit">submit</button>
		</RHForm>
		{/* <form
			method="get"
			onSubmit={(e) => {
				e.preventDefault()
				console.log(formData)
				// console.log(e.target?.selectName)
				// console.log(e.target)
			}}>
			<RHSelect
				setFormValue={setFormValue}
				name='selectName'
				placeholder="pleace select"
			>
				<RHSelect.Option value={'aa'}> aa-msg </RHSelect.Option>
				<RHSelect.Option value={'bb'}> bb-msg </RHSelect.Option>
				<RHSelect.Option value={'cc'}> cc-msg </RHSelect.Option>
			</RHSelect>
			<button type="submit">submit</button>
		</form> */}
	</div>
}

export default TestArea