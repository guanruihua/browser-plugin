// import { printLine } from './modules/print';

console.log('Content script works!')
// console.log('Must reload extension for modifications to take effect.');

// printLine("Using the 'printLine' function from the Print Module");

// 向插件发送消息
// chrome.runtime.sendMessage({ type: 'pageLocalStorageData', data: window.localStorage })
// chrome.tabs.onActivated.addListener((tab: any) => {
//   chrome.runtime.sendMessage({
//     type: 'pageLocalStorageData',
//     data: { [tab.id]: window.localStorage }
//   })
// })

// Content Script

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.type === "getUpdatedPageData") {
//         // 在这里重新获取页面数据
//         const updatedPageData = window.localStorage;
//         // 将更新后的数据发送给 Background Script
//         chrome.runtime.sendMessage({ type: 'updatedPageData', data: updatedPageData });
//     }
// });
