(window.webpackJsonp=window.webpackJsonp||[]).push([[1123],{1748:function(t,a,s){"use strict";s.r(a);var e=s(15),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"admin-check-tablet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#admin-check-tablet"}},[t._v("#")]),t._v(" ADMIN-CHECK-TABLET")]),t._v(" "),s("h3",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),s("p",[t._v("ADMIN CHECK TABLET")]),t._v(" "),s("h3",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("该语句用于对一组 tablet 执行指定的检查操作")]),t._v(" "),s("p",[t._v("语法：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("ADMIN "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHECK")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tablet_id1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tablet_id2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nPROPERTIES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("说明：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("必须指定 tablet id 列表以及 PROPERTIES 中的 type 属性。")])]),t._v(" "),s("li",[s("p",[t._v("目前 type 仅支持：")]),t._v(" "),s("ul",[s("li",[t._v("consistency: 对tablet的副本数据一致性进行检查。该命令为异步命令，发送后，Doris 会开始执行对应 tablet 的一致性检查作业。最终的结果，将体现在 "),s("code",[t._v('SHOW PROC "/statistic";')]),t._v(" 结果中的 InconsistentTabletNum 列。")])])])]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("对指定的一组 tablet 进行副本数据一致性检查")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('ADMIN CHECK TABLET (10000, 10001)\nPROPERTIES("type" = "consistency");\n\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])]),t._v(" "),s("h3",{attrs:{id:"keywords"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[t._v("#")]),t._v(" Keywords")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("ADMIN, CHECK, TABLET\n")])])]),s("h3",{attrs:{id:"best-practice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[t._v("#")]),t._v(" Best Practice")])])}),[],!1,null,null,null);a.default=n.exports}}]);