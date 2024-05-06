export const Config = {
  // options
  optionsTabActive: 'Options-tab-active',
  newTabSetting: 'NEW-Tab-Setting',
  // header
  headerTitle: 'Ruihuag',
  optionsTestTabActive: 'Options-test-tab-active'
}

export function useConfig(): any[] {
  const setConfig: any = (valueObject: any): void => {
    chrome.storage.sync.set(valueObject)
  }

  const getConfig: any = (namespace: string, callback?: any): void => {
    chrome.storage.sync.get(namespace, (result: any): void => {
      callback && callback(result[namespace] as any)
    })
  }
  return [Config, { setConfig, getConfig }]
}
