(window.webpackJsonp=window.webpackJsonp||[]).push([[711],{1336:function(a,s,e){"use strict";e.r(s);var t=e(15),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"upload-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upload-action"}},[a._v("#")]),a._v(" Upload Action")]),a._v(" "),e("p",[a._v("Upload Action 目前主要服务于FE的前端页面，用于用户导入一些测试性质的小文件。")]),a._v(" "),e("h2",{attrs:{id:"上传导入文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上传导入文件"}},[a._v("#")]),a._v(" 上传导入文件")]),a._v(" "),e("p",[a._v("用于将文件上传到FE节点，可在稍后用于导入该文件。目前仅支持上传最大100MB的文件。")]),a._v(" "),e("h3",{attrs:{id:"request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[a._v("#")]),a._v(" Request")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("POST /api/<namespace>/<db>/<tbl>/upload\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"path-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[a._v("#")]),a._v(" Path parameters")]),a._v(" "),e("ul",[e("li",[e("p",[e("code",[a._v("<namespace>")])]),a._v(" "),e("p",[a._v("命名空间，目前仅支持 "),e("code",[a._v("default_cluster")])])]),a._v(" "),e("li",[e("p",[e("code",[a._v("<db>")])]),a._v(" "),e("p",[a._v("指定的数据库")])]),a._v(" "),e("li",[e("p",[e("code",[a._v("<tbl>")])]),a._v(" "),e("p",[a._v("指定的表")])])]),a._v(" "),e("h3",{attrs:{id:"query-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[a._v("#")]),a._v(" Query parameters")]),a._v(" "),e("ul",[e("li",[e("p",[e("code",[a._v("column_separator")])]),a._v(" "),e("p",[a._v("可选项，指定文件的分隔符。默认为 "),e("code",[a._v("\\t")])])]),a._v(" "),e("li",[e("p",[e("code",[a._v("preview")])]),a._v(" "),e("p",[a._v("可选项，如果设置为 "),e("code",[a._v("true")]),a._v("，则返回结果中会显示最多10行根据 "),e("code",[a._v("column_separator")]),a._v(" 切分好的数据行。")])])]),a._v(" "),e("h3",{attrs:{id:"request-body"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[a._v("#")]),a._v(" Request body")]),a._v(" "),e("p",[a._v("要上传的文件内容，Content-type 为 "),e("code",[a._v("multipart/form-data")])]),a._v(" "),e("h3",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[a._v("#")]),a._v(" Response")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n        "id": 1,\n        "uuid": "b87824a4-f6fd-42c9-b9f1-c6d68c5964c2",\n        "originFileName": "data.txt",\n        "fileSize": 102400,\n        "absPath": "/path/to/file/data.txt"\n        "maxColNum" : 5\n\t},\n\t"count": 1\n}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br")])]),e("h2",{attrs:{id:"导入已上传的文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入已上传的文件"}},[a._v("#")]),a._v(" 导入已上传的文件")]),a._v(" "),e("h3",{attrs:{id:"request-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-2"}},[a._v("#")]),a._v(" Request")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("PUT /api/<namespace>/<db>/<tbl>/upload\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"path-parameters-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters-2"}},[a._v("#")]),a._v(" Path parameters")]),a._v(" "),e("ul",[e("li",[e("p",[e("code",[a._v("<namespace>")])]),a._v(" "),e("p",[a._v("命名空间，目前仅支持 "),e("code",[a._v("default_cluster")])])]),a._v(" "),e("li",[e("p",[e("code",[a._v("<db>")])]),a._v(" "),e("p",[a._v("指定的数据库")])]),a._v(" "),e("li",[e("p",[e("code",[a._v("<tbl>")])]),a._v(" "),e("p",[a._v("指定的表")])])]),a._v(" "),e("h3",{attrs:{id:"query-parameters-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters-2"}},[a._v("#")]),a._v(" Query parameters")]),a._v(" "),e("ul",[e("li",[e("p",[e("code",[a._v("file_id")])]),a._v(" "),e("p",[a._v("指定导入的文件id，文件id由上传导入文件的API返回。")])]),a._v(" "),e("li",[e("p",[e("code",[a._v("file_uuid")])]),a._v(" "),e("p",[a._v("指定导入的文件uuid，文件uuid由上传导入文件的API返回。")])])]),a._v(" "),e("h3",{attrs:{id:"header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[a._v("#")]),a._v(" Header")]),a._v(" "),e("p",[a._v("Header 中的可选项同 Stream Load 请求中 header 的可选项。")]),a._v(" "),e("h3",{attrs:{id:"request-body-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-body-2"}},[a._v("#")]),a._v(" Request body")]),a._v(" "),e("p",[a._v("要上传的文件内容，Content-type 为 "),e("code",[a._v("multipart/form-data")])]),a._v(" "),e("h3",{attrs:{id:"response-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[a._v("#")]),a._v(" Response")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"TxnId": 7009,\n\t\t"Label": "9dbdfb0a-120b-47a2-b078-4531498727cb",\n\t\t"Status": "Success",\n\t\t"Message": "OK",\n\t\t"NumberTotalRows": 3,\n\t\t"NumberLoadedRows": 3,\n\t\t"NumberFilteredRows": 0,\n\t\t"NumberUnselectedRows": 0,\n\t\t"LoadBytes": 12,\n\t\t"LoadTimeMs": 71,\n\t\t"BeginTxnTimeMs": 0,\n\t\t"StreamLoadPutTimeMs": 1,\n\t\t"ReadDataTimeMs": 0,\n\t\t"WriteDataTimeMs": 13,\n\t\t"CommitAndPublishTimeMs": 53\n\t},\n\t"count": 1\n}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br")])]),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" Example")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("PUT /api/default_cluster/db1/tbl1/upload?file_id=1&file_uuid=b87824a4-f6fd-42c9-b9f1-c6d68c5964c2\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);