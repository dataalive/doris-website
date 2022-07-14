(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{1039:function(e,t,s){"use strict";s.r(t);var a=s(15),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"admin-check-tablet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#admin-check-tablet"}},[e._v("#")]),e._v(" ADMIN CHECK TABLET")]),e._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),s("p",[e._v("This statement is used to perform a specified check operation on a list of tablets.")]),e._v(" "),s("p",[e._v("Syntax:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('ADMIN CHECK TABLE (tablet_id1, tablet_id2, ...)\nPROPERTIES("type" = "...");\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Note:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v('You must specify the list of tablet ids and the "type" property in PROPERTIES.')])]),e._v(" "),s("li",[s("p",[e._v('Currently "type" only supports:')]),e._v(" "),s("ul",[s("li",[e._v('consistency: Check the consistency of the replicas of the tablet. This command is asynchronous. After sending, Doris will start to perform the consistency check job of the corresponding tablet. The final result will be reflected in the "InconsistentTabletNum" column in the result of `SHOW PROC" / statistic ";')])])])]),e._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Perform a replica consistency check on a specified set of tablets")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('ADMIN CHECK TABLET (10000, 10001)\nPROPERTIES("type" = "consistency");\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])])]),e._v(" "),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("ADMIN,CHECK,TABLET\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);