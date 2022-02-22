import React from 'react'

const __CSS__ID = '__temp__id__ruihuagruihuag'
// localStorage.setItem('__code__css', 'span{color:red;}')
// localStorage.setItem('__code__js', `console.log('test')`)
// localStorage.setItem('__code__html', `<span>html</span>`)

export interface UseCodePreviewResult {
  show: any
  cssVal: any
  jsVal: any
  htmlVal: any
  handleCSS: (val: any) => void
  handleHTML: (val: any) => void
  handleJS: (val: any) => void
  handlePreview: (val: any) => void
}

export function useCodePreview() {
  const defaultShow = (localStorage && localStorage.__code__html) || ''
  const defaultCSS = (localStorage && localStorage.__code__css) || ''
  const defaultJS = (localStorage && localStorage.__code__js) || ''
  const [show, updateShow]: [any, any] = React.useState(defaultShow)
  const [cssVal, updateCSSVal]: [string, any] = React.useState(defaultCSS)
  const [jsVal, updateJSVal]: [string, any] = React.useState(defaultJS)
  const [htmlVal, updateHTMLVal]: [string, any] = React.useState(defaultShow)

  const handlePreview = (): void => {
    const cssValtemp: string = cssVal
      .replace(/\n/g, '')
      .split(/{|}/)
      .reduce((total: any, item: string, index: number): string => {
        if (item === '') return total
        if (item.indexOf(':root') > -1) {
          return `${total} ${item}{`
        }
        if (index % 2 === 0) {
          return `${total} #${__CSS__ID} ${item}{`
        }
        return `${total} ${item}}`
      }, '')

    // console.log({ cssValtemp, htmlValtemp })
    updateShow(`<style>${cssValtemp}</style><div id="${__CSS__ID}">${htmlVal}</div>`)
  }
  const handleCSS = (val: any): void => {
    updateCSSVal(val)
    handlePreview()
    localStorage.setItem('__code__css', val)
    return val
  }
  React.useEffect(() => {
    handlePreview()
  })
  const handleJS = (val: any, flag?: string): void => {
    if (flag === 'Enter') {
      console.log({ val, flag })
    }
    updateJSVal(val)
    handlePreview()
    localStorage.setItem('__code__js', val)
    return val
  }
  const handleHTML = (val: any): void => {
    updateHTMLVal(val)
    handlePreview()
    localStorage.setItem('__code__html', val)
    return val
  }

  return { show, cssVal, jsVal, htmlVal, handleCSS, handleHTML, handleJS, handlePreview }
}
