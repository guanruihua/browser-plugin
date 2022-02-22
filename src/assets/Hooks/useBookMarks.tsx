import React from "react";

export type tUseBookMarkMarks = [any[], (callback: (val: any) => void) => void];

export function useBookMarks(): tUseBookMarkMarks {

	const [bookMarks, setBookMarks] = React.useState([]);

	const updateBookMarks: any = (callback: (val: any) => void): void => {
		chrome.bookmarks.getTree(function (browserBookmarks: any[]): void {
			// console.log("bookmarks:", browserBookmarks[0].children[0].children);
			setBookMarks(browserBookmarks[0].children[0].children)
			callback && callback(browserBookmarks[0].children[0].children)
		})
	}

	React.useEffect((): void => {
		updateBookMarks()
	}, [])

	return [bookMarks, updateBookMarks]

}