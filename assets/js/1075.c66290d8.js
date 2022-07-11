(window.webpackJsonp=window.webpackJsonp||[]).push([[1075],{1699:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"create-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-view"}},[s._v("#")]),s._v(" CREATE-VIEW")]),s._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),a("p",[s._v("CREATE VIEW")]),s._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),a("p",[s._v("该语句用于创建一个逻辑视图\n语法：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("db_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("view_name\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("column1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"col comment"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" column2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" query_stmt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("说明：")]),s._v(" "),a("ul",[a("li",[s._v("视图为逻辑视图，没有物理存储。所有在视图上的查询相当于在视图对应的子查询上进行。")]),s._v(" "),a("li",[s._v("query_stmt 为任意支持的 SQL")])]),s._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("在 example_db 上创建视图 example_view")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" example_db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("example_view "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("k1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" c1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" k1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" example_table\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" k1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20160112")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" k1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("k2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("k3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("创建一个包含 comment 的 view")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" example_db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("example_view\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    k1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    k2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"second key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    k3 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"third key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    v1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first value"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my first view"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" c1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" k1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" example_table\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" k1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20160112")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" k1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("k2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("k3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("CREATE, VIEW\n")])])]),a("h3",{attrs:{id:"best-practice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);t.default=e.exports}}]);