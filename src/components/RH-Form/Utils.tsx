// import React from "react"

export function isFunction(fn: any): boolean {
	return Object.prototype.toString.call(fn) === '[object Function]';
}


// 去除 除 type 和 props的任何职, 把 props改为 state
const filterTypeAndProps = (props: any) => {
	let list = props.children;
	if (!Array.isArray(list)) {
		if (typeof list === 'string') return list;
		else list = [list]
	}

	return list.map((item: any): any => {
		const { type = '' } = item;
		const { children, ...rest } = item.props;
		const dom: any = {
			type,
			state: rest,
		}
		if (children) {
			dom.state.children = filterTypeAndProps(item.props)
		}
		return dom;
	})

}

export const getDomList = (props: any): any[] => {
	return filterTypeAndProps(props);
}
// const i = 0;
const createDom = (config: any): any => {
	console.log(config)
	// const { type, state } = config;
	// state.key = String(i++)
	// // return <div key={String(i++)} >123</div>
	// if (isFunction(type)) {
	// 	return <config.type {...state} />
	// }

	// if (typeof type === 'string') {
	// 	return React.createElement(
	// 		type,
	// 		state,
	// 	)
	// }

	// return config

}

export const createDomByList = (config: any[]) => {
	console.log('config', config)
	return config.map((item: any): any => {
		return createDom(item)
	})

}