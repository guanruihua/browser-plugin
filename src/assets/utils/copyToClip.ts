
/**
 * 复制单行内容到粘贴板
 * content : 需要复制的内容
 * message : 复制完后的提示，不传则默认提示"复制成功"
 */
export function copyToClip(content: string): void {
	const aux: HTMLInputElement = document.createElement("input");
	document.body.appendChild(aux);
	aux.setAttribute("value", content);
	aux.focus();
	aux.select();
	document.execCommand("copy");
	aux.blur();
	document.body.removeChild(aux);
}

/**
 * 复制多行内容到粘贴板
 * contentArray: 需要复制的内容（传一个字符串数组）
 * message : 复制完后的提示，不传则默认提示"复制成功"
 */
export function copyArrayToClip(contentArray: any[]): void {
	let contents = "";
	for (let i = 0; i < contentArray.length; i++) {
		contents += contentArray[i] + "\n";
	}
	const textarea: HTMLTextAreaElement = document.createElement('textarea');
	textarea.value = contents;
	document.body.appendChild(textarea);
	textarea.select();
	if (document.execCommand('copy')) {
		document.execCommand('copy');
	}
	document.body.removeChild(textarea);
}