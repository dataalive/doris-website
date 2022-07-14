(window.webpackJsonp=window.webpackJsonp||[]).push([[1162],{1789:function(t,e,s){"use strict";s.r(e);var a=s(15),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"query-profile-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-profile-action"}},[t._v("#")]),t._v(" Query Profile Action")]),t._v(" "),s("h2",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /rest/v1/query_profile/<query_id>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("The Query Profile Action is used to obtain the Query profile.")]),t._v(" "),s("h2",{attrs:{id:"path-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("<query_id>")])]),t._v(" "),s("p",[t._v("Optional parameters. When not specified, the latest query list is returned. When specified, return the profile of the specified query.")])])]),t._v(" "),s("h2",{attrs:{id:"query-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),s("p",[t._v("无")]),t._v(" "),s("h2",{attrs:{id:"request-body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),s("p",[t._v("无")]),t._v(" "),s("h2",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Not specify "),s("code",[t._v("<query_id>")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('GET /rest/v1/query_profile/\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"href_column": ["Query ID"],\n\t\t"column_names": ["Query ID", "User", "Default Db", "Sql Statement", "Query Type", "Start Time", "End Time", "Total", "Query State"],\n\t\t"rows": [{\n\t\t\t"User": "root",\n\t\t\t"__hrefPath": ["/query_profile/d73a8a0b004f4b2f-b4829306441913da"],\n\t\t\t"Query Type": "Query",\n\t\t\t"Total": "5ms",\n\t\t\t"Default Db": "default_cluster:db1",\n\t\t\t"Sql Statement": "select * from tbl1",\n\t\t\t"Query ID": "d73a8a0b004f4b2f-b4829306441913da",\n\t\t\t"Start Time": "2020-09-03 10:07:54",\n\t\t\t"Query State": "EOF",\n\t\t\t"End Time": "2020-09-03 10:07:54"\n\t\t}, {\n\t\t\t"User": "root",\n\t\t\t"__hrefPath": ["/query_profile/fd706dd066824c21-9d1a63af9f5cb50c"],\n\t\t\t"Query Type": "Query",\n\t\t\t"Total": "6ms",\n\t\t\t"Default Db": "default_cluster:db1",\n\t\t\t"Sql Statement": "select * from tbl1",\n\t\t\t"Query ID": "fd706dd066824c21-9d1a63af9f5cb50c",\n\t\t\t"Start Time": "2020-09-03 10:07:54",\n\t\t\t"Query State": "EOF",\n\t\t\t"End Time": "2020-09-03 10:07:54"\n\t\t}]\n\t},\n\t"count": 3\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br")])]),s("p",[t._v("The returned result is the same as "),s("code",[t._v("System Action")]),t._v(", which is a table description.")])]),t._v(" "),s("li",[s("p",[t._v("Specify "),s("code",[t._v("<query_id>")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('GET /rest/v1/query_profile/<query_id>\n\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": "Query:</br>&nbsp;&nbsp;&nbsp;&nbsp;Summary:</br>...",\n\t"count": 0\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[s("code",[t._v("data")]),t._v(" is the text content of the profile.")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);