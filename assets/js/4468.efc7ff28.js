(window.webpackJsonp=window.webpackJsonp||[]).push([[4468],{5095:function(s,a,t){"use strict";t.r(a);var e=t(15),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"show-export"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-export"}},[s._v("#")]),s._v(" SHOW-EXPORT")]),s._v(" "),t("h3",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),t("p",[s._v("SHOW EXPORT")]),s._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),t("p",[s._v("该语句用于展示指定的导出任务的执行情况")]),s._v(" "),t("p",[s._v("语法：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" EXPORT\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" db_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ID "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" your_job_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("STATE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PENDING"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EXPORTING"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"FINISHED"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CANCELLED"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("LABEL "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" your_label"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("说明：\n1. 如果不指定 db_name，使用当前默认db\n2. 如果指定了 STATE，则匹配 EXPORT 状态\n3. 可以使用 ORDER BY 对任意列组合进行排序\n4. 如果指定了 LIMIT，则显示 limit 条匹配记录。否则全部显示")]),s._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("展示默认 db 的所有导出任务")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" EXPORT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("展示指定 db 的导出任务，按 StartTime 降序排序")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" EXPORT "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" example_db "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" StartTime "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v('展示指定 db 的导出任务，state 为 "exporting", 并按 StartTime 降序排序')]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" EXPORT "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" example_db "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" STATE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exporting"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" StartTime "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("展示指定db，指定job_id的导出任务")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" EXPORT "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" example_db "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" ID "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" job_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("展示指定db，指定label的导出任务")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" EXPORT "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" example_db "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" LABEL "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mylabel"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("SHOW, EXPORT\n")])])]),t("h3",{attrs:{id:"best-practice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);a.default=n.exports}}]);