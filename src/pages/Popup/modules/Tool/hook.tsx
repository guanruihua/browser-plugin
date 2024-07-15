import { ObjectType } from '0type'
import React from 'react'

export const useHook = () => {
  const [tabs, setTabs] = React.useState<ObjectType[]>([])

  React.useEffect(() => {
    chrome.tabs.query({ currentWindow: true }, function (tabs) {
      setTabs(tabs as unknown as ObjectType[])
    })
  }, [])

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
    tabs,
    clone,
    pin,
    pinAll,
    mute,
    muteAll
  }
}
