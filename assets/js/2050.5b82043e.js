(window.webpackJsonp=window.webpackJsonp||[]).push([[2050],{2675:function(s,n,t){"use strict";t.r(n);var a=t(15),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"substring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#substring"}},[s._v("#")]),s._v(" substring")]),s._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),t("h4",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),t("p",[t("code",[s._v("VARCHAR substring(VARCHAR str, INT pos[, INT len])")])]),s._v(" "),t("p",[s._v("The forms without a "),t("code",[s._v("len")]),s._v(" argument return a substring from string "),t("code",[s._v("str")]),s._v(" starting at position "),t("code",[s._v("pos")]),s._v(".\nThe forms with a "),t("code",[s._v("len")]),s._v(" argument return a substring len characters long from string "),t("code",[s._v("str")]),s._v(", starting at position pos.\nIt is also possible to use a negative value for "),t("code",[s._v("pos")]),s._v(". In this case,\nthe beginning of the substring is "),t("code",[s._v("pos")]),s._v(" characters from the end of the string, rather than the beginning.\nA negative value may be used for "),t("code",[s._v("pos")]),s._v(" in any of the forms of this function.\nA value of 0 for "),t("code",[s._v("pos")]),s._v(" returns an empty string.")]),s._v(" "),t("p",[s._v("For all forms of SUBSTRING(),\nthe position of the first character in the string from which the substring is to be extracted is reckoned as 1.")]),s._v(" "),t("p",[s._v("If len is less than 1, the result is the empty string.")]),s._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> select substring('abc1', 2);\n+-----------------------------+\n| substring('abc1', 2)        |\n+-----------------------------+\n| bc1                         |\n+-----------------------------+\n\nmysql> select substring('abc1', -2);\n+-----------------------------+\n| substring('abc1', -2)       |\n+-----------------------------+\n| c1                          |\n+-----------------------------+\n\nmysql> select substring('abc1', 0);\n+----------------------+\n| substring('abc1', 0) |\n+----------------------+\n|                      |\n+----------------------+\n\nmysql> select substring('abc1', 5);\n+-----------------------------+\n| substring('abc1', 5)        |\n+-----------------------------+\n| NULL                        |\n+-----------------------------+\n\nmysql> select substring('abc1def', 2, 2);\n+-----------------------------+\n| substring('abc1def', 2, 2)  |\n+-----------------------------+\n| bc                          |\n+-----------------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br")])]),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),t("p",[s._v("SUBSTRING, STRING")])])}),[],!1,null,null,null);n.default=e.exports}}]);