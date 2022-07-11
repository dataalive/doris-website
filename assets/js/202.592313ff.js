(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{824:function(e,a,t){"use strict";t.r(a);var s=t(15),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"bitmap-index"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-index"}},[e._v("#")]),e._v(" Bitmap Index")]),e._v(" "),t("p",[e._v("Users can speed up queries by creating a bitmap index\nThis document focuses on how to create an index job, as well as some considerations and frequently asked questions when creating an index.")]),e._v(" "),t("h2",{attrs:{id:"glossary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),t("ul",[t("li",[e._v("bitmap index: a fast data structure that speeds up queries")])]),e._v(" "),t("h2",{attrs:{id:"basic-principles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-principles"}},[e._v("#")]),e._v(" Basic Principles")]),e._v(" "),t("p",[e._v("Creating and dropping index is essentially a schema change job. For details, please refer to\n"),t("RouterLink",{attrs:{to:"/docs/advanced/alter-table/schema-change.html"}},[e._v("Schema Change")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),t("h3",{attrs:{id:"create-index"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-index"}},[e._v("#")]),e._v(" Create index")]),e._v(" "),t("p",[e._v("Create a bitmap index for siteid on table1")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INDEX")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("IF")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("NOT")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("EXISTS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" index_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" table1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("siteid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("USING")]),e._v(" BITMAP "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("COMMENT")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'balabala'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"view-index"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-index"}},[e._v("#")]),e._v(" View index")]),e._v(" "),t("p",[e._v("Display the lower index of the specified table_name")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SHOW")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INDEX")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" example_db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("table_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"delete-index"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-index"}},[e._v("#")]),e._v(" Delete index")]),e._v(" "),t("p",[e._v("Delete the lower index of the specified table_name")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("DROP")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INDEX")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("IF")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("EXISTS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" index_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("db_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("table_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"notice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[e._v("#")]),e._v(" Notice")]),e._v(" "),t("ul",[t("li",[e._v("Currently only index of bitmap type is supported.")]),e._v(" "),t("li",[e._v("The bitmap index is only created on a single column.")]),e._v(" "),t("li",[e._v("Bitmap indexes can be applied to all columns of the "),t("code",[e._v("Duplicate")]),e._v(" , "),t("code",[e._v("Uniq")]),e._v("  data model and key columns of the "),t("code",[e._v("Aggregate")]),e._v("  models.")]),e._v(" "),t("li",[e._v("The data types supported by bitmap indexes are as follows:\n"),t("ul",[t("li",[t("code",[e._v("TINYINT")])]),e._v(" "),t("li",[t("code",[e._v("SMALLINT")])]),e._v(" "),t("li",[t("code",[e._v("INT")])]),e._v(" "),t("li",[t("code",[e._v("UNSIGNEDINT")])]),e._v(" "),t("li",[t("code",[e._v("BIGINT")])]),e._v(" "),t("li",[t("code",[e._v("CHAR")])]),e._v(" "),t("li",[t("code",[e._v("VARCHAR")])]),e._v(" "),t("li",[t("code",[e._v("DATE")])]),e._v(" "),t("li",[t("code",[e._v("DATETIME")])]),e._v(" "),t("li",[t("code",[e._v("LARGEINT")])]),e._v(" "),t("li",[t("code",[e._v("DECIMAL")])]),e._v(" "),t("li",[t("code",[e._v("BOOL")])])])]),e._v(" "),t("li",[e._v("The bitmap index takes effect only in segmentV2. The table's storage format will be converted to V2 automatically when creating index.")])]),e._v(" "),t("h3",{attrs:{id:"more-help"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#more-help"}},[e._v("#")]),e._v(" More Help")]),e._v(" "),t("p",[e._v("For more detailed syntax and best practices for using bitmap indexes, please refer to the  "),t("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-INDEX.html"}},[e._v("CREARE INDEX")]),e._v(" / "),t("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-INDEX.html"}},[e._v("SHOW INDEX")]),e._v(" / "),t("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-INDEX.html"}},[e._v("DROP INDEX")]),e._v("  command manual. You can also enter HELP CREATE INDEX / HELP SHOW INDEX / HELP DROP INDEX on the MySql client command line.")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);