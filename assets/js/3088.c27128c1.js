(window.webpackJsonp=window.webpackJsonp||[]).push([[3088],{3718:function(e,s,t){"use strict";t.r(s);var a=t(15),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"percentile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#percentile"}},[e._v("#")]),e._v(" PERCENTILE")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("h3",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),t("p",[t("code",[e._v("PERCENTILE(expr, DOUBLE p)")])]),e._v(" "),t("p",[e._v("计算精确的百分位数，适用于小数据量。先对指定列降序排列，然后取精确的第 p 位百分数。p的值介于0到1之间")]),e._v(" "),t("p",[e._v("参数说明\nexpr：必填。值为整数（最大为bigint） 类型的列。\np：必填。需要精确的百分位数。取值为 [0.0,1.0]。")]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("MySQL > select `table`, percentile(cost_time,0.99) from log_statis group by `table`;\n+---------------------+---------------------------+\n| table    |        percentile(`cost_time`, 0.99) |\n+----------+--------------------------------------+\n| test     |                                54.22 |\n+----------+--------------------------------------+\n\nMySQL > select percentile(NULL,0.3) from table1;\n+-----------------------+\n| percentile(NULL, 0.3) |\n+-----------------------+\n|                  NULL |\n+-----------------------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br")])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("p",[e._v("PERCENTILE")])])}),[],!1,null,null,null);s.default=n.exports}}]);