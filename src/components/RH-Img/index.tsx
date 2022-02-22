/*
 * File: index.js
 * Project: RH
 * Author: ruihuag
 * File Created: Monday, 19th July 2021 5:39:04 pm
 * Modified By: ruihuag
 * Last Modified: Monday, 19th July 2021 5:57:03 pm
 */
import React from 'react'
import defaultUrl from './default.png'

const Index = (props: any) => {
  const { url = defaultUrl, errorUrl, isFavicon = false, ...config }: any = props

  const imgGetError = (e: any): void => {
    if (errorUrl) {
      e.target.src = errorUrl
    } else {
      e.target.src = defaultUrl
    }
    e.target = null
  }

  if (isFavicon) {
    let urlArr: string[] = []
    if (url) urlArr = url.split('/')
    if (url && urlArr.length > 3) {
      return (
        <img
          src={urlArr[0] + '//' + urlArr[2] + '/favicon.ico'}
          onError={(e: any) => imgGetError(e)}
          {...config}
          alt=''
        />
      )
    }
  }

  return <img src={defaultUrl} onError={(e: any) => imgGetError(e)} {...config} alt='' />
}

export default Index
