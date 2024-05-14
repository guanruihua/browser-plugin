console.log('Plugin Loading,  This is the background page.')
// console.log('Put the background scripts here.');

// console.log(chrome.runtime)

// Background Script
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   console.log('Background Script', { message })
//   if (message.type === 'pageLocalStorageData') {
//     // 处理来自 Content Script 的消息
//     const pageData = message.data || {}
//     console.log('Received page data:', pageData)
//     chrome.storage.sync.set({
//       pageLocalStorageData: pageData
//     })
//   }
// })

// chrome.tabs.onActivated.addListener((tab: any) => {
//   chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     console.log('Background Script', { message })
//     if (message.type === 'pageLocalStorageData') {
//       // 处理来自 Content Script 的消息
//       const pageData = message.data || {}
//       console.log('Received page data:', pageData)
//       chrome.storage.sync.set({
//         pageLocalStorageData: pageData
//       })
//     }
//   })
//   // chrome.runtime.sendMessage({
//   //   type: 'pageLocalStorageData',
//   //   data: { [tab.id]: window.localStorage }
//   // })
// })

