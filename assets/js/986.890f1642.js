(window.webpackJsonp=window.webpackJsonp||[]).push([[986],{1613:function(t,a,e){"use strict";e.r(a);var s=e(15),i=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"admin-compact"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#admin-compact"}},[t._v("#")]),t._v(" ADMIN COMPACT")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("This statement is used to trigger compaction for all replicas of a specified partition\n\nGrammar:\n\nADMIN COMPACT TABLE table_name PARTITION partition_name WHERE TYPE='BASE/CUMULATIVE'\n\nExplain:\n\n1. This statement only means that the system attempts to submit a compaction task for each replica under the specified partition to compaction thread pool, and it is not guaranteed to be successful.\n2. This statement supports executing compaction task for a single partition of the table at a time.\n")])])]),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("1. Attempt to trigger cumulative compaction for all replicas under the specified partition\n\nADMIN COMPACT TABLE tbl PARTITION par01 WHERE TYPE='CUMULATIVE';\n\n2. Attempt to trigger base compaction for all replicas under the specified partition\n\nADMIN COMPACT TABLE tbl PARTITION par01 WHERE TYPE='BASE';\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("ADMIN,COMPACT\n")])])])])}),[],!1,null,null,null);a.default=i.exports}}]);