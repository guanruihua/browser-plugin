// console.log('Plugin Loading,  This is the background page.', chrome.commands)

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


// function applyBlur(amount: number | string) {
//   const style = document.createElement('style')
//   style.id = 'web-blur-style'
//   style.textContent = `
//     body {
//       filter: blur(${amount}px) !important;
//       transition: filter 0.3s ease;
//     }
//   `
//   document.head.appendChild(style)
// }

// // 移除模糊效果
// function removeBlur() {
//   const style = document.getElementById('web-blur-style')
//   if (style) {
//     style.remove()
//   }
// }

// console.log(chrome.commands?.onCommand?.addListener)
// chrome.commands?.onCommand?.addListener(command => {
//   console.log(`Command: ${command}`)
//   if (command === 'toggle-blur') {
//     const style = document.getElementById('web-blur-style')
//     if (style) {
//       removeBlur()
//     } else {
//       applyBlur(3)
//     }
//   }
// })
