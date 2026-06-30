import { ObjectType } from '0type'
import React from 'react'

export const useHook = () => {
  const [activeTab, setActiveTab] = React.useState<ObjectType>({})

  React.useEffect(() => {
    // chrome.tabs.query({ currentWindow: true }, function (tabs) {
    //   setTabs(tabs as unknown as ObjectType[])
    // })
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setActiveTab(tabs[0])
    })
  }, [])

  return {
    activeTab,
  }
}
