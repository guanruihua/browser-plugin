import React, { MouseEvent, ReactNode } from "react";

export interface iRHSwitch {
	disabled?: boolean;
	defaultChecked?: boolean | undefined;
	checked?: boolean | undefined;
	checkedChildren?: any;
	uncheckedChildren?: any;
	// 只有 return true, 才可以修改状态
	onChange?: (checked: boolean, event?: MouseEvent<HTMLButtonElement>) => boolean;
	style?: {
		width?: number,
		height?: number,
		fontSize: number,
		[key: string]: any
	}
	[key: string]: any
}