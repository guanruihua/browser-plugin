import { ObjectType } from '0type'
import React from 'react'

const css = `body {
  filter: invert(1) hue-rotate(180deg) brightness(1.3);
}`
export const useHook = () => {
  const [tabs, setTabs] = React.useState<ObjectType[]>([])
  const [activeTab, setActiveTab] = React.useState<ObjectType>({})

  React.useEffect(() => {
    // chrome.tabs.query({ currentWindow: true }, function (tabs) {
    //   setTabs(tabs as unknown as ObjectType[])
    // })
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setActiveTab(tabs[0])
    })
  }, [])

  const night = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
      const tab = tabs[0]

      if (tab.id) {
        // 注入到页面
        await chrome.scripting.insertCSS({
          target: { tabId: tab.id },
          css,
        })

        // （可选）关闭 popup
        window.close()
      }
    })
  }

  const cancelNight = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
      const tab = tabs[0]

      if (tab.id) {
        // 注入到页面
        await chrome.scripting.removeCSS({
          target: { tabId: tab.id },
          css,
        })

        // （可选）关闭 popup
        window.close()
      }
    })
  }

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
  const pinAll = (flag = true) => {
    chrome.tabs.query({ currentWindow: true }, function (tabs) {
      if (flag) {
        tabs.filter(_ => !_.pinned).forEach(pinOne)
        return
      }

      tabs
        .reverse()
        .filter(_ => _.pinned)
        .forEach(pinOne)

      return
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
    activeTab,
    tabs,
    clone,
    pin,
    pinAll,
    mute,
    muteAll,
    night,
    cancelNight,
    sameDomainReopen() {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs: any[]) {
        const tab = tabs[0]
        chrome.tabs.remove(tab.id)
        chrome.tabs.create({ url: new URL(tab.url).host })
      })
    },
  }
}
