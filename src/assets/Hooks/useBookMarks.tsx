import React from "react";

export type tUseBookMarkMarks = [any[], (callback: (val: any) => void) => void];

export function useBookMarks(): tUseBookMarkMarks {

	const [bookMarks, setBookMarks] = React.useState([]);

	const updateBookMarks = (): void => {
		chrome.bookmarks.getTree(function (browserBookmarks: any[]): void {
			const list = browserBookmarks[0].children[0].children || []
			setBookMarks(list.filter((item: any) => {
				if (item.title && /^\./.test(item.title)) {
					return false
				}
				return true
			}))
		})
	}

	React.useEffect((): void => {
		updateBookMarks()
	}, [])

	return [bookMarks, updateBookMarks]

}