# RH 浏览器插件

## 首页

> 1. 制作与edge 首页类似的布局
> 2. 利用 localstorage 保存标签页信息
> 3. 通过弹框添加 标签页
>    1. 修改成分组的

```js
   // "background",
    // "webRequest",
    // "activeTab",
    // "bookmarks",
    // "popup",
      "run_at": "document_start",
  "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'",


{
  "manifest_version": 3,
  "name": "Chrome Extension with React & Webpack",
  "options_page": "options.html",
  "popup_page": "popup.html",
  "background": { "service_worker": "background.bundle.js" },
  "action": {
    "default_popup": "popup.html",
    "default_icon": "icon-34.png"
  },
  "chrome_url_overrides": {
    "newtab": "newtab.html"
  },
  "icons": {
    "128": "icon-128.png"
  },
  "content_scripts": [
    {
      "matches": ["http://*/*", "https://*/*", "<all_urls>"],
      "js": ["contentScript.bundle.js"],
      "css": ["content.styles.css"]
    }
  ],
  "devtools_page": "devtools.html",
  "web_accessible_resources": [
    {
      "resources": ["content.styles.css", "icon-128.png", "icon-34.png"],
      "matches": []
    }
  ],
  "permissions": [
    "storage",
    "<all_urls>",
    "tabs",
    "activeTab"
  ]
}
```
