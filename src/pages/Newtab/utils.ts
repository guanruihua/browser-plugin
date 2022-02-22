export function windowSearch(
  inputValue: string,
  useUrl = 'https://cn.bing.com/search?PC=U474&q=',
  params: string
): void {
  window.open(useUrl + inputValue + params, '_parent')
  // console.log(useUrl + inputValue + params, '_parent')
}

export function windowOpenUrl(url: string): void {
  if (url !== '') {
    window.open(url, '_parent')
  }
}
