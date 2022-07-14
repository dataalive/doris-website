(window.webpackJsonp=window.webpackJsonp||[]).push([[3120],{3750:function(t,a,s){"use strict";s.r(a);var n=s(15),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"orthogonal-bitmap-union-count"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#orthogonal-bitmap-union-count"}},[t._v("#")]),t._v(" orthogonal_bitmap_union_count")]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("p",[s("code",[t._v("BITMAP ORTHOGONAL_BITMAP_UNION_COUNT(bitmap_column, column_to_filter, filter_values)")]),t._v("\n求bitmap并集大小的函数, 参数类型是bitmap，是待求并集count的列")]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mysql> select orthogonal_bitmap_union_count(members) from tag_map where  tag_group in ( 1150000, 1150001, 390006);\n+------------------------------------------+\n| orthogonal_bitmap_union_count(`members`) |\n+------------------------------------------+\n|                                286957811 |\n+------------------------------------------+\n1 row in set (2.645 sec)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("ORTHOGONAL_BITMAP_UNION_COUNT,BITMAP")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);