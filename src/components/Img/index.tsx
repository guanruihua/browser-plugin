import React from 'react'
import defaultUrl from './default.png'
import axios from 'axios'
import GithubLogo from '@/assets/img/GitHub-Mark-32px.png'
import { ObjectType } from 'abandonjs'

axios.defaults.timeout = 30000 //设置超时时间为30s

const urlMap: ObjectType<string> = {
  'https://www.npmjs.com/favicon.ico': 'https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png',
  'github': GithubLogo
}

function ping(url: string): Promise<boolean> {
  return axios.get(url).then((res: { [key: string]: any }) => {
    try {
      return res && res.status && res.status === 200
    } catch (error) {
      return false
    }
  }).catch(() => {
    return false
  })
}

function handleMapUrl(__src__: string) {
  if (/github/.exec(__src__)) {
    return urlMap.github
  }
  if (urlMap[__src__]) {
    return urlMap[__src__]
  }
  return __src__
}

const Index = (props: any) => {
  const { url = defaultUrl, errorUrl, isFavicon = false, alt, ...config }: any = props
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
      const __src__: string = handleMapUrl(urlArr[0] + '//' + urlArr[2] + '/favicon.ico')
      React.useEffect(() => {
        ping(__src__).then((res: boolean) => {
          updateDefaultImage(!res)
        })
      }, [url])
      return (
        <>
          {showDefaultImage
            ? <img
              key={__src__}
              src={defaultUrl}
              alt={alt}
              {...config} />
            : <img
              key={__src__}
              src={__src__}
              onError={imgGetError}
              title={alt}
              alt={alt}
              {...config}
            />}
        </>
      )
    }
  }

  return <img
    src={defaultUrl}
    onError={(e: any) => imgGetError(e)}
    title={alt}
    alt={alt}
    {...config}
  />
}

export default Index
