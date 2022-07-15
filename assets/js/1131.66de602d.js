(window.webpackJsonp=window.webpackJsonp||[]).push([[1131],{1759:function(a,t,s){"use strict";s.r(t);var e=s(15),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"admin-repair-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#admin-repair-table"}},[a._v("#")]),a._v(" ADMIN-REPAIR-TABLE")]),a._v(" "),s("h3",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[a._v("#")]),a._v(" Name")]),a._v(" "),s("p",[a._v("ADMIN REPAIR TABLE")]),a._v(" "),s("h3",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" Description")]),a._v(" "),s("p",[a._v("语句用于尝试优先修复指定的表或分区")]),a._v(" "),s("p",[a._v("语法：")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[a._v("ADMIN REPAIR "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PARTITION")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("说明：")]),a._v(" "),s("ol",[s("li",[a._v("该语句仅表示让系统尝试以高优先级修复指定表或分区的分片副本，并不保证能够修复成功。用户可以通过 ADMIN SHOW REPLICA STATUS 命令查看修复情况。")]),a._v(" "),s("li",[a._v("默认的 timeout 是 14400 秒(4小时)。超时意味着系统将不再以高优先级修复指定表或分区的分片副本。需要重新使用该命令设置")])]),a._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" Example")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("尝试修复指定表")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v(" ADMIN REPAIR TABLE tbl1;\n")])])])]),a._v(" "),s("li",[s("p",[a._v("尝试修复指定分区")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v(" ADMIN REPAIR TABLE tbl1 PARTITION (p1, p2);\n")])])])])]),a._v(" "),s("h3",{attrs:{id:"keywords"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[a._v("#")]),a._v(" Keywords")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("ADMIN, REPAIR, TABLE\n")])])]),s("h3",{attrs:{id:"best-practice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[a._v("#")]),a._v(" Best Practice")])])}),[],!1,null,null,null);t.default=r.exports}}]);