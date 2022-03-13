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
import axios from 'axios'
axios.defaults.timeout = 30000 //设置超时时间为30s

function ping(url: string): Promise<boolean> {
  return axios.get(url).then((res: { [key: string]: any }) => {
    try {
      return res && res.status && res.status === 200
    } catch (error) {
      return false
    }
  })
}

const Index = (props: any) => {
  const { url = defaultUrl, errorUrl, isFavicon = false, ...config }: any = props
  const [showDefaultImage, updateDefaultImage] = React.useState<boolean>(true)

  const imgGetError = (e: any): void => {
    if (errorUrl) {
      e.target.src = errorUrl
    } else {
      e.target.src = defaultUrl
    }
    e.target = null
    updateDefaultImage(true)
  }

  if (isFavicon) {
    let urlArr: string[] = []
    if (url) urlArr = url.split('/')
    if (url && urlArr.length > 3) {
      React.useEffect(() => {
        ping(urlArr[0] + '//' + urlArr[2] + '/favicon.ico').then((res: boolean) => {
          updateDefaultImage(!res)
        })
      }, [url])
      return (
        <>
          {showDefaultImage
            ? <img src={defaultUrl} alt='default' />
            : <img
              src={urlArr[0] + '//' + urlArr[2] + '/favicon.ico'}
              onError={imgGetError}
              {...config}
              alt=''
            />}
        </>
      )
    }
  }

  return <img
    src={defaultUrl}
    onError={(e: any) => imgGetError(e)}
    alt=''
    {...config}
  />
}

export default Index
