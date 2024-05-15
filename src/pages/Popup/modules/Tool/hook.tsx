export const useHook = () => {
  const clone = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs: any[]) {
      const tab = tabs[0]
      chrome.tabs.create({ url: tab.url })
    })
  }
  const pinOne = (tab: any) => {
    chrome.tabs.update(tab.id, { pinned: !tab.pinned })
  }
  const pin = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      pinOne(tabs[0])
    })
  }
  const pinAll = () => {
    chrome.tabs.query({ currentWindow: true, pinned: false }, function (tabs) {
      if (tabs.length) {
        tabs.forEach(item => pinOne(item))
      } else {
        chrome.tabs.query({ currentWindow: true, pinned: true }, function (tabs) {
          tabs.forEach(item => pinOne(item))
        })
      }
    })
  }

  const muteOne = (tab: any) => {
    chrome.tabs.update(tab.id, { muted: !tab.mutedInfo.muted })
  }

  const mute = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      muteOne(tabs[0])
    })
  }

  const muteAll = () => {
    chrome.tabs.query({ currentWindow: true }, function (tabs: any[] = []) {
      tabs.forEach(item => muteOne(item))
    })
  }
  return {
    clone,
    pin,
    pinAll,
    mute,
    muteAll
  }
}
