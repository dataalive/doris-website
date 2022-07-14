(window.webpackJsonp=window.webpackJsonp||[]).push([[4107],{4734:function(a,t,s){"use strict";s.r(t);var e=s(15),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"bitmap-索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-索引"}},[a._v("#")]),a._v(" Bitmap 索引")]),a._v(" "),s("p",[a._v("用户可以通过创建bitmap index 加速查询 本文档主要介绍如何创建 index 作业，以及创建 index 的一些注意事项和常见问题。")]),a._v(" "),s("h2",{attrs:{id:"名词解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[a._v("#")]),a._v(" 名词解释")]),a._v(" "),s("ul",[s("li",[a._v("bitmap index：位图索引，是一种快速数据结构，能够加快查询速度")])]),a._v(" "),s("h2",{attrs:{id:"原理介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理介绍"}},[a._v("#")]),a._v(" 原理介绍")]),a._v(" "),s("p",[a._v("创建和删除本质上是一个 schema change 的作业，具体细节可以参照 "),s("RouterLink",{attrs:{to:"/zh-CN/docs/advanced/alter-table/schema-change.html"}},[a._v("Schema Change")]),a._v("。")],1),a._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("h3",{attrs:{id:"创建索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建索引"}},[a._v("#")]),a._v(" 创建索引")]),a._v(" "),s("p",[a._v("在table1 上为siteid 创建bitmap 索引")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INDEX")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("IF")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("NOT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXISTS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" index_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" table1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("siteid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("USING")]),a._v(" BITMAP "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COMMENT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'balabala'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"查看索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看索引"}},[a._v("#")]),a._v(" 查看索引")]),a._v(" "),s("p",[a._v("展示指定 table_name 的下索引")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INDEX")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" example_db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"删除索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除索引"}},[a._v("#")]),a._v(" 删除索引")]),a._v(" "),s("p",[a._v("删除指定 table_name 的下索引")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DROP")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INDEX")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("IF")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXISTS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" index_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("db_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[a._v("#")]),a._v(" 注意事项")]),a._v(" "),s("ul",[s("li",[a._v("目前索引仅支持 bitmap 类型的索引。")]),a._v(" "),s("li",[a._v("bitmap 索引仅在单列上创建。")]),a._v(" "),s("li",[a._v("bitmap 索引能够应用在 "),s("code",[a._v("Duplicate")]),a._v("、"),s("code",[a._v("Uniq")]),a._v("  数据模型的所有列和 "),s("code",[a._v("Aggregate")]),a._v("模型的key列上。")]),a._v(" "),s("li",[a._v("bitmap 索引支持的数据类型如下:\n"),s("ul",[s("li",[s("code",[a._v("TINYINT")])]),a._v(" "),s("li",[s("code",[a._v("SMALLINT")])]),a._v(" "),s("li",[s("code",[a._v("INT")])]),a._v(" "),s("li",[s("code",[a._v("UNSIGNEDINT")])]),a._v(" "),s("li",[s("code",[a._v("BIGINT")])]),a._v(" "),s("li",[s("code",[a._v("CHAR")])]),a._v(" "),s("li",[s("code",[a._v("VARCHAR")])]),a._v(" "),s("li",[s("code",[a._v("DATE")])]),a._v(" "),s("li",[s("code",[a._v("DATETIME")])]),a._v(" "),s("li",[s("code",[a._v("LARGEINT")])]),a._v(" "),s("li",[s("code",[a._v("DECIMAL")])]),a._v(" "),s("li",[s("code",[a._v("BOOL")])])])]),a._v(" "),s("li",[a._v("bitmap索引仅在 Segment V2 下生效。当创建 index 时，表的存储格式将默认转换为 V2 格式。")])]),a._v(" "),s("h2",{attrs:{id:"更多帮助"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多帮助"}},[a._v("#")]),a._v(" 更多帮助")]),a._v(" "),s("p",[a._v("关于 bitmap索引 使用的更多详细语法及最佳实践，请参阅 "),s("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-INDEX.html"}},[a._v("CREARE INDEX")]),a._v(" / "),s("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-INDEX.html"}},[a._v("SHOW INDEX")]),a._v(" / "),s("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-INDEX.html"}},[a._v("DROP INDEX")]),a._v(" 命令手册，你也可以在 MySql 客户端命令行下输入 "),s("code",[a._v("HELP CREATE INDEX")]),a._v(" /  "),s("code",[a._v("HELP SHOW INDEX")]),a._v(" / "),s("code",[a._v("HELP DROP INDEX")]),a._v("。")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);