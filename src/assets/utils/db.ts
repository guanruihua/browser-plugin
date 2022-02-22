// chrome.storage.sync.get
interface iDb {
  get: any
  set: any
  remove?: any
}

export const db: iDb = {
  get: (key: string) => {
    let result: any = null
    chrome.storage.sync.get(key, (res: any): void => {
      result = res
    })
    return result
  },
  set: (key: string, value: string) => {
    chrome.storage.sync.set({ [key]: value })
  },
  remove: (key: string | string[]) => {
    chrome.storage.sync.remove(key)
  }
}

class DB {}

export default DB
