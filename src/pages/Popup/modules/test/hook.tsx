export const useHook = () => {
  const pinOne = (tab: any) => {
    chrome.tabs.update(tab.id, { pinned: !tab.pinned })
  }
  const clone = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs: any[]) {
      const tab = tabs[0]
      chrome.tabs.update(tab.id, { pinned: !tab.pinned })
    })
  }
  const pin = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      pinOne(tabs[0])
    })
  }
  const pinAll = () => {
    chrome.tabs.query({ currentWindow: true }, function (tabs) {
      tabs.forEach(item => pinOne(item))
    })
  }

  return {
    clone,
    pin,
    pinAll
  }
}
