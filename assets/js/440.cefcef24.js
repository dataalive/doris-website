(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{1065:function(a,s,e){"use strict";e.r(s);var t=e(15),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"alter-table-rename"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alter-table-rename"}},[a._v("#")]),a._v(" ALTER-TABLE-RENAME")]),a._v(" "),e("h3",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[a._v("#")]),a._v(" Name")]),a._v(" "),e("p",[a._v("ALTER TABLE RENAME")]),a._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" Description")]),a._v(" "),e("p",[a._v("This statement is used to rename certain names of existing table properties. This operation is synchronous, and the return of the command indicates the completion of the execution.")]),a._v(" "),e("p",[a._v("grammar:")]),a._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("database")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("table")]),a._v(" alter_clause"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("The alter_clause of rename supports modification of the following names")]),a._v(" "),e("ol",[e("li",[a._v("Modify the table name")])]),a._v(" "),e("p",[a._v("grammar:")]),a._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RENAME")]),a._v(" new_table_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("Modify the rollup index name")])]),a._v(" "),e("p",[a._v("grammar:")]),a._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RENAME")]),a._v(" ROLLUP old_rollup_name new_rollup_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("Modify the partition name")])]),a._v(" "),e("p",[a._v("grammar:")]),a._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RENAME")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PARTITION")]),a._v(" old_partition_name new_partition_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" Example")]),a._v(" "),e("ol",[e("li",[a._v("Modify the table named table1 to table2")])]),a._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" table1 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RENAME")]),a._v(" table2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("Modify the rollup index named rollup1 in the table example_table to rollup2")])]),a._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" example_table "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RENAME")]),a._v(" ROLLUP rollup1 rollup2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("Modify the partition named p1 in the table example_table to p2")])]),a._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" example_table "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RENAME")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PARTITION")]),a._v(" p1 p2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[a._v("#")]),a._v(" Keywords")]),a._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ALTER, TABLE, RENAME\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"best-practice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[a._v("#")]),a._v(" Best Practice")])])}),[],!1,null,null,null);s.default=r.exports}}]);