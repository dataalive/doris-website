(window.webpackJsonp=window.webpackJsonp||[]).push([[4144],{4771:function(s,e,t){"use strict";t.r(e);var a=t(15),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"collect-set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#collect-set"}},[s._v("#")]),s._v(" COLLECT_SET")]),s._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),t("h4",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),t("p",[t("code",[s._v("ARRAY<T> collect_set(expr)")])]),s._v(" "),t("p",[s._v("返回一个包含 expr 中所有去重后元素(不包括NULL)的数组，数组中元素顺序是不确定的。")]),s._v(" "),t("h3",{attrs:{id:"notice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[s._v("#")]),s._v(" notice")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("仅支持向量化引擎中使用\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> set enable_vectorized_engine=true;\nmysql> set enable_array_type = true;\n\nmysql> select k1,k2,k3 from collect_test order by k1;\n+------+------------+-------+\n| k1   | k2         | k3    |\n+------+------------+-------+\n|    1 | 2022-07-05 | hello |\n|    2 | 2022-07-04 | NULL  |\n|    2 | 2022-07-04 | hello |\n|    3 | NULL       | world |\n|    3 | NULL       | world |\n+------+------------+-------+\n\nmysql> select k1,collect_set(k2),collect_set(k3) from collect_test group by k1 order by k1;\n+------+-------------------+-------------------+\n| k1   | collect_set(`k2`) | collect_set(`k3`) |\n+------+-------------------+-------------------+\n|    1 | [2022-07-05]      | [hello]           |\n|    2 | [2022-07-04]      | [hello]           |\n|    3 | NULL              | [world]           |\n+------+-------------------+-------------------+\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),t("p",[s._v("COLLECT_SET,COLLECT_LIST,ARRAY")])])}),[],!1,null,null,null);e.default=n.exports}}]);