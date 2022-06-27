export const CONFIG_LIST = 'CONFIG_LIST'
export const URL_SESSION = 'URL_SESSION'
export const METHOD_SESSION = 'METHOD_SESSION'
export const FORM_LIST = 'FORM_LIST'
export const RESULT_SESSION = 'RESULT_SESSION'
export const HEADER_FORM_LIST = 'HEADER_FORM_LIST'
export const CONFIG_ID = 'CONFIG_ID'

export const Postman_Collection = {
  "info": {
    "_postman_id": "4eae2474-5e65-4847-81a4-e85ea2725091",
    "name": "微信小程序第三方平台提交审核发布流程",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    "_exporter_id": "10342777"
  },
  "item": [
    {
      "name": "提交审核",
      "item": [
        {
          "name": "获取小程序页面列表",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "https://api.weixin.qq.com/wxa/get_page?access_token={{access_token}}",
              "protocol": "https",
              "host": [
                "api",
                "weixin",
                "qq",
                "com"
              ],
              "path": [
                "wxa",
                "get_page"
              ],
              "query": [
                {
                  "key": "access_token",
                  "value": "{{access_token}}"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "获取审核时可填写的类目信息",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "https://api.weixin.qq.com/wxa/get_category?access_token={{access_token}}",
              "protocol": "https",
              "host": [
                "api",
                "weixin",
                "qq",
                "com"
              ],
              "path": [
                "wxa",
                "get_category"
              ],
              "query": [
                {
                  "key": "access_token",
                  "value": "{{access_token}}"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "配置小程序用户隐私保护指引",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"owner_setting\" :{\r\n       \"contact_email\" : \"peiyan.huang@axbsec.com\",\r\n       \"notice_method\" : \"通过弹窗提醒\"\r\n    },\r\n    \"setting_list\" : [\r\n       {\r\n          \"privacy_key\" : \"UserInfo\",\r\n          \"privacy_text\" : \"显示该二维码的拥有者信息\"\r\n       },\r\n       {\r\n          \"privacy_key\" : \"Location\",\r\n          \"privacy_text\" : \"统计串货信息\"\r\n       }\r\n    ],\r\n   \r\n    \"privacy_ver\":2\r\n }",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://api.weixin.qq.com/cgi-bin/component/setprivacysetting?access_token={{access_token}}",
              "protocol": "https",
              "host": [
                "api",
                "weixin",
                "qq",
                "com"
              ],
              "path": [
                "cgi-bin",
                "component",
                "setprivacysetting"
              ],
              "query": [
                {
                  "key": "access_token",
                  "value": "{{access_token}}"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "提交审核",
          "request": {
            "method": "POST",
            "header": [],
            "url": {
              "raw": "https://api.weixin.qq.com/wxa/submit_audit?access_token={{access_token}}&item_list= [\n\t{\n\t\n\t\t\"first_class\": \"工具\",\n\t\t\"second_class\": \"信息查询\",\n\t\t\"first_id\":287,\n\t\t\"second_id\":612,\n\t}\n ]&version_desc=测试小程序发布流程v0.01",
              "protocol": "https",
              "host": [
                "api",
                "weixin",
                "qq",
                "com"
              ],
              "path": [
                "wxa",
                "submit_audit"
              ],
              "query": [
                {
                  "key": "access_token",
                  "value": "{{access_token}}"
                },
                {
                  "key": "item_list",
                  "value": " [\n\t{\n\t\n\t\t\"first_class\": \"工具\",\n\t\t\"second_class\": \"信息查询\",\n\t\t\"first_id\":287,\n\t\t\"second_id\":612,\n\t}\n ]",
                  "description": "审核项列表（选填，至多填写 5 项）；类目是必填的，且要填写已经在小程序配置好的类目"
                },
                {
                  "key": "version_desc",
                  "value": "测试小程序发布流程v0.01",
                  "description": "非必填，小程序版本说明和功能解释（string）"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "查询提交审核次数",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "https://api.weixin.qq.com/wxa/queryquota?access_token={{access_token}}",
              "protocol": "https",
              "host": [
                "api",
                "weixin",
                "qq",
                "com"
              ],
              "path": [
                "wxa",
                "queryquota"
              ],
              "query": [
                {
                  "key": "access_token",
                  "value": "{{access_token}}"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "查询最新一次提交审核的状态",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "https://api.weixin.qq.com/wxa/get_latest_auditstatus?access_token={{access_token}}",
              "protocol": "https",
              "host": [
                "api",
                "weixin",
                "qq",
                "com"
              ],
              "path": [
                "wxa",
                "get_latest_auditstatus"
              ],
              "query": [
                {
                  "key": "access_token",
                  "value": "{{access_token}}"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "查询指定发布审核单的审核状态",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"auditid\":473429581\r\n}"
            },
            "url": {
              "raw": "https://api.weixin.qq.com/wxa/get_auditstatus?access_token={{access_token}}",
              "protocol": "https",
              "host": [
                "api",
                "weixin",
                "qq",
                "com"
              ],
              "path": [
                "wxa",
                "get_auditstatus"
              ],
              "query": [
                {
                  "key": "auditid",
                  "value": "473429581",
                  "disabled": true
                },
                {
                  "key": "access_token",
                  "value": "{{access_token}}"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "发布已通过审核的小程序",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{}"
            },
            "url": {
              "raw": "https://api.weixin.qq.com/wxa/release?access_token={{access_token}}",
              "protocol": "https",
              "host": [
                "api",
                "weixin",
                "qq",
                "com"
              ],
              "path": [
                "wxa",
                "release"
              ],
              "query": [
                {
                  "key": "access_token",
                  "value": "{{access_token}}"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "获取已上传的代码的页面列表",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "https://api.weixin.qq.com/wxa/get_page?access_token={{access_token}}",
              "protocol": "https",
              "host": [
                "api",
                "weixin",
                "qq",
                "com"
              ],
              "path": [
                "wxa",
                "get_page"
              ],
              "query": [
                {
                  "key": "access_token",
                  "value": "{{access_token}}"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "查询小程序版本信息",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://api.weixin.qq.com/wxa/getversioninfo?access_token={{access_token}}",
              "protocol": "https",
              "host": [
                "api",
                "weixin",
                "qq",
                "com"
              ],
              "path": [
                "wxa",
                "getversioninfo"
              ],
              "query": [
                {
                  "key": "access_token",
                  "value": "{{access_token}}"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "修改小程序服务状态",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"action\": \"close\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://api.weixin.qq.com/wxa/change_visitstatus?access_token={{access_token}}",
              "protocol": "https",
              "host": [
                "api",
                "weixin",
                "qq",
                "com"
              ],
              "path": [
                "wxa",
                "change_visitstatus"
              ],
              "query": [
                {
                  "key": "access_token",
                  "value": "{{access_token}}"
                }
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "获取AR登录SID",
      "event": [
        {
          "listen": "test",
          "script": {
            "exec": [
              "var jsonData = JSON.parse(responseBody);\r",
              "// var uaidExCode = pm.environment.get(\"uaidExCode\");\r",
              "postman.setEnvironmentVariable(\"sid\", jsonData.data.__SID);"
            ],
            "type": "text/javascript"
          }
        },
        {
          "listen": "prerequest",
          "script": {
            "exec": [
              ""
            ],
            "type": "text/javascript"
          }
        }
      ],
      "request": {
        "method": "POST",
        "header": [],
        "url": {
          "raw": "{{qa_apiSys}}/userLogin?companyCode=axbsec&loginName=superAdmin&pwd=123456",
          "host": [
            "{{qa_apiSys}}"
          ],
          "path": [
            "userLogin"
          ],
          "query": [
            {
              "key": "companyCode",
              "value": "axbsec"
            },
            {
              "key": "loginName",
              "value": "superAdmin"
            },
            {
              "key": "pwd",
              "value": "123456"
            }
          ]
        }
      },
      "response": []
    },
    {
      "name": "步骤一：获取access_token",
      "event": [
        {
          "listen": "test",
          "script": {
            "exec": [
              "var jsonData = JSON.parse(responseBody);\r",
              "// var uaidExCode = pm.environment.get(\"uaidExCode\");\r",
              "postman.setEnvironmentVariable(\"access_token\", jsonData.data.authToken);"
            ],
            "type": "text/javascript"
          }
        }
      ],
      "protocolProfileBehavior": {
        "disableBodyPruning": true
      },
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "__SID",
            "value": "31012b8d4f8b40c99c15c14f01d67f07",
            "type": "text"
          }
        ],
        "body": {
          "mode": "formdata",
          "formdata": [
            {
              "key": "authAppid",
              "value": "{{qa_third_appid}}",
              "type": "text"
            }
          ]
        },
        "url": {
          "raw": "{{qa_address}}wx/userAuth/getTokenAndThirdAppId?authAppid={{qa_miniprogram_appid}}&__SID={{sid}}",
          "host": [
            "{{qa_address}}wx"
          ],
          "path": [
            "userAuth",
            "getTokenAndThirdAppId"
          ],
          "query": [
            {
              "key": "authAppid",
              "value": "{{qa_miniprogram_appid}}"
            },
            {
              "key": "__SID",
              "value": "{{sid}}"
            }
          ]
        }
      },
      "response": []
    },
    {
      "name": "步骤二：上传代码",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n  \"template_id\": \"10\",\r\n  \"ext_json\":\"{\\\"extAppid\\\":\\\"wxdc4ba57ab0870df6\\\",\\\"ext\\\":{\\\"appid\\\":\\\"wxdc4ba57ab0870df6\\\",\\\"proxy\\\":{\\\"default\\\":\\\"https://www.axbinfosec.cn\\\"}}}\",\r\n  \"user_version\": \"v1.0.8\",\r\n  \"user_desc\": \"测试体验版提交审核模板\"\r\n}"
        },
        "url": {
          "raw": "https://api.weixin.qq.com/wxa/commit?access_token={{access_token}}",
          "protocol": "https",
          "host": [
            "api",
            "weixin",
            "qq",
            "com"
          ],
          "path": [
            "wxa",
            "commit"
          ],
          "query": [
            {
              "key": "access_token",
              "value": "{{access_token}}"
            },
            {
              "key": "template_id",
              "value": "10",
              "disabled": true
            },
            {
              "key": "ext_json",
              "value": "{\\\"extEnable\\\":true,\\\"extAppid\\\":\\\"wxdc4ba57ab0870df6\\\",\\\"ext\\\":{\\\"appid\\\":\\\"wx35e8a2206fe2e269\\\"}}",
              "disabled": true
            },
            {
              "key": "user_version",
              "value": "v0.0.1",
              "disabled": true
            },
            {
              "key": "user_desc",
              "value": "测试体验版",
              "disabled": true
            }
          ]
        }
      },
      "response": []
    },
    {
      "name": "步骤三：生成体验版二维码",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "https://api.weixin.qq.com/wxa/get_qrcode?access_token={{access_token}}",
          "protocol": "https",
          "host": [
            "api",
            "weixin",
            "qq",
            "com"
          ],
          "path": [
            "wxa",
            "get_qrcode"
          ],
          "query": [
            {
              "key": "access_token",
              "value": "{{access_token}}"
            }
          ]
        }
      },
      "response": []
    }
  ],
  "event": [
    {
      "listen": "prerequest",
      "script": {
        "type": "text/javascript",
        "exec": [
          ""
        ]
      }
    },
    {
      "listen": "test",
      "script": {
        "type": "text/javascript",
        "exec": [
          ""
        ]
      }
    }
  ],
  "variable": [
    {
      "key": "access_token",
      "value": "58_stGH0p9ooDCrMsS-xAwdwYtv2OxiV4CzB1j6IMUmnAm8_3_kgIy3QvW0LPqkXJHZ89Q-hHZqvWKZZzEYzW1_qxTKxGA7cnkNA-eFH6abn5Y15Y0nKFJcDz2iHht_0M3bMolnZDbPrpxolfOPZXGjAKDDBK",
      "type": "string"
    },
    {
      "key": "rp_api_address",
      "value": "http://172.16.30.77:8083/AR-wechat/ar/wechat",
      "type": "string"
    },
    {
      "key": "dev_apre1_address",
      "value": "https://arpe1.accessreal.com/apiWeChat/",
      "type": "string"
    },
    {
      "key": "qa_address",
      "value": "https://www.axbinfosec.cn/apiWeChat/",
      "type": "string"
    },
    {
      "key": "qa_third_appid",
      "value": "wx0357bc6140d9415f",
      "type": "string"
    },
    {
      "key": "dev_third_appid",
      "value": "wx3492d1e803b4936c",
      "type": "string"
    },
    {
      "key": "qa_apiSys",
      "value": "https://www.axbinfosec.cn/apiSys/",
      "type": "string"
    },
    {
      "key": "sid",
      "value": "ba9a4990269842879d60068d9b6f5470",
      "type": "string"
    },
    {
      "key": "qa_miniprogram_appid",
      "value": "wxdc4ba57ab0870df6",
      "type": "string"
    }
  ]
}
