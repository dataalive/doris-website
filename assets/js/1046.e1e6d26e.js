(window.webpackJsonp=window.webpackJsonp||[]).push([[1046],{1671:function(t,s,a){"use strict";a.r(s);var e=a(15),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"alter-table-replace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alter-table-replace"}},[t._v("#")]),t._v(" ALTER-TABLE-REPLACE")]),t._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),a("p",[t._v("ALTER TABLE REPLACE")]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("对两个表进行原子的替换操作。 该操作仅适用于 OLAP 表。")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("tbl1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" tbl2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PROPERTIES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'swap'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("将表 tbl1 替换为表 tbl2。")]),t._v(" "),a("p",[t._v("如果 "),a("code",[t._v("swap")]),t._v(" 参数为 "),a("code",[t._v("true")]),t._v("，则替换后，名称为 "),a("code",[t._v("tbl1")]),t._v(" 表中的数据为原 "),a("code",[t._v("tbl2")]),t._v(" 表中的数据。而名称为 "),a("code",[t._v("tbl2")]),t._v(" 表中的数据为原 "),a("code",[t._v("tbl1")]),t._v(" 表中的数据。即两张表数据发生了互换。")]),t._v(" "),a("p",[t._v("如果 "),a("code",[t._v("swap")]),t._v(" 参数为 "),a("code",[t._v("false")]),t._v("，则替换后，名称为 "),a("code",[t._v("tbl1")]),t._v(" 表中的数据为原 "),a("code",[t._v("tbl2")]),t._v(" 表中的数据。而名称为 "),a("code",[t._v("tbl2")]),t._v(" 表被删除。")]),t._v(" "),a("h4",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("p",[t._v("替换表功能，实际上是将以下操作集合变成一个原子操作。")]),t._v(" "),a("p",[t._v("假设要将表 A 替换为表 B，且 "),a("code",[t._v("swap")]),t._v(" 为 "),a("code",[t._v("true")]),t._v("，则操作如下：")]),t._v(" "),a("ol",[a("li",[t._v("将表 B 重名为表 A。")]),t._v(" "),a("li",[t._v("将表 A 重名为表 B。")])]),t._v(" "),a("p",[t._v("如果 "),a("code",[t._v("swap")]),t._v(" 为 "),a("code",[t._v("false")]),t._v("，则操作如下：")]),t._v(" "),a("ol",[a("li",[t._v("删除表 A。")]),t._v(" "),a("li",[t._v("将表 B 重名为表 A。")])]),t._v(" "),a("h4",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("swap")]),t._v(" 参数默认为 "),a("code",[t._v("true")]),t._v("。即替换表操作相当于将两张表数据进行交换。")]),t._v(" "),a("li",[t._v("如果设置 "),a("code",[t._v("swap")]),t._v(" 参数为 "),a("code",[t._v("false")]),t._v("，则被替换的表（表A）将被删除，且无法恢复。")]),t._v(" "),a("li",[t._v("替换操作仅能发生在两张 OLAP 表之间，且不会检查两张表的表结构是否一致。")]),t._v(" "),a("li",[t._v("替换操作不会改变原有的权限设置。因为权限检查以表名称为准。")])]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("ol",[a("li",[t._v("将 "),a("code",[t._v("tbl1")]),t._v(" 与 "),a("code",[t._v("tbl2")]),t._v(" 进行交换，不删除 "),a("code",[t._v("tbl1")]),t._v(" 表")])]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" tbl1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" tbl2\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PROPERTIES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'swap'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[t._v("#")]),t._v(" Keywords")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ALTER, TABLE, REPLACE, ALTER TABLE\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"best-practice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[t._v("#")]),t._v(" Best Practice")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("原子的覆盖写操作")]),t._v(" "),a("p",[t._v("某些情况下，用户希望能够重写某张表的数据，但如果采用先删除再导入的方式进行，在中间会有一段时间无法查看数据。这时，用户可以先使用 "),a("code",[t._v("CREATE TABLE LIKE")]),t._v(" 语句创建一个相同结构的新表，将新的数据导入到新表后，通过替换操作，原子的替换旧表，以达到目的。分区级别的原子覆盖写操作，请参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/partition/table-tmp-partition.html"}},[t._v("临时分区文档")]),t._v("。")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);