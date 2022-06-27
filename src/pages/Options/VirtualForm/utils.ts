
interface iDb {
	get: any;
	set: any;
	setStr: any;
	remove?: any;
}

const db: iDb = {
	get: (key: string): any => {
		return localStorage.getItem(key);
	},
	set: (key: string, value: any): void => {
		if (typeof value === 'string')
			localStorage.setItem(key, value);
		else localStorage.setItem(key, JSON.stringify(value));
	},
	setStr: (key: string, value: string): void => {
		localStorage.setItem(key, value);
	},
	remove: (key: string): void => {
		localStorage.removeItem(key)
	}
}


function id(): string {
	return new Date().getTime().toString()
}

function deepClone(params: any): any {
	return JSON.parse(JSON.stringify(params))
}

export {
	db,
	id,
	deepClone
}