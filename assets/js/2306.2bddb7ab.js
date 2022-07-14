(window.webpackJsonp=window.webpackJsonp||[]).push([[2306],{2933:function(t,s,e){"use strict";e.r(s);var a=e(15),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"query-profile-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-profile-action"}},[t._v("#")]),t._v(" Query Profile Action")]),t._v(" "),e("h2",{attrs:{id:"request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /rest/v1/query_profile/<query_id>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("p",[t._v("Query Profile Action 用于获取 Query 的 profile。")]),t._v(" "),e("h2",{attrs:{id:"path-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("<query_id>")])]),t._v(" "),e("p",[t._v("可选参数。当不指定时，返回最新的 query 列表。当指定时，返回指定 query 的 profile。")])])]),t._v(" "),e("h2",{attrs:{id:"query-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),e("p",[t._v("无")]),t._v(" "),e("h2",{attrs:{id:"request-body"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),e("p",[t._v("无")]),t._v(" "),e("h2",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("不指定 "),e("code",[t._v("<query_id>")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('GET /rest/v1/query_profile/\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"href_column": ["Query ID"],\n\t\t"column_names": ["Query ID", "User", "Default Db", "Sql Statement", "Query Type", "Start Time", "End Time", "Total", "Query State"],\n\t\t"rows": [{\n\t\t\t"User": "root",\n\t\t\t"__hrefPath": ["/query_profile/d73a8a0b004f4b2f-b4829306441913da"],\n\t\t\t"Query Type": "Query",\n\t\t\t"Total": "5ms",\n\t\t\t"Default Db": "default_cluster:db1",\n\t\t\t"Sql Statement": "select * from tbl1",\n\t\t\t"Query ID": "d73a8a0b004f4b2f-b4829306441913da",\n\t\t\t"Start Time": "2020-09-03 10:07:54",\n\t\t\t"Query State": "EOF",\n\t\t\t"End Time": "2020-09-03 10:07:54"\n\t\t}, {\n\t\t\t"User": "root",\n\t\t\t"__hrefPath": ["/query_profile/fd706dd066824c21-9d1a63af9f5cb50c"],\n\t\t\t"Query Type": "Query",\n\t\t\t"Total": "6ms",\n\t\t\t"Default Db": "default_cluster:db1",\n\t\t\t"Sql Statement": "select * from tbl1",\n\t\t\t"Query ID": "fd706dd066824c21-9d1a63af9f5cb50c",\n\t\t\t"Start Time": "2020-09-03 10:07:54",\n\t\t\t"Query State": "EOF",\n\t\t\t"End Time": "2020-09-03 10:07:54"\n\t\t}]\n\t},\n\t"count": 3\n}\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br")])]),e("p",[t._v("返回结果同 "),e("code",[t._v("System Action")]),t._v("，是一个表格的描述。")])]),t._v(" "),e("li",[e("p",[t._v("指定 "),e("code",[t._v("<query_id>")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('GET /rest/v1/query_profile/<query_id>\n\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": "Query:</br>&nbsp;&nbsp;&nbsp;&nbsp;Summary:</br>...",\n\t"count": 0\n}\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[e("code",[t._v("data")]),t._v(" 为 profile 的文本内容。")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);