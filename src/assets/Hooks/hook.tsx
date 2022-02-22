import React from 'react';


/**
 * @title hook
 * @description 基础 hook 的二次封装 的通用hook
 */

export type tUseState = [any, (value: any) => void]

export function useWatch(val: any): tUseState {
	const [value, setValue]: tUseState = React.useState(val);
	React.useEffect((): void => {
		setValue(value)
	}, [val])
	return [value, setValue]
}


// export function 