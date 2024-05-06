import React from 'react'
import { default as defaultUrl } from './default.png'
import { ping, handleMapUrl } from './util'

export default (props: any) => {
  const { url = defaultUrl, errorUrl, isFavicon = false, errorHidden = false, alt, ...config }: any = props
  const [showDefaultImage, updateDefaultImage] = React.useState<boolean>(true)
  
  try {
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
        if (errorHidden && showDefaultImage) {
          return <></>
        }
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
  } catch (error) {
    return <></>
  }
}
