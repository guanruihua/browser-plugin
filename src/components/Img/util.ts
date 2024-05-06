import axios from 'axios'
import { default as GithubLogo } from '@/assets/img/GitHub-Mark-32px.png'
import { ObjectType } from '0type'

axios.defaults.timeout = 30000 //设置超时时间为30s

export const urlMap: ObjectType<string> = {
  'https://www.npmjs.com/favicon.ico':
    'https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png',
  github: GithubLogo
}

export function ping(url: string): Promise<boolean> {
  return axios
    .get(url)
    .then((res: { [key: string]: any }) => {
      return res && res.status && res.status === 200
    })
    .catch(() => false)
}

export function handleMapUrl(__src__: string) {
  if (/github/.exec(__src__)) return urlMap.github
  if (urlMap[__src__]) return urlMap[__src__]
  return __src__
}
