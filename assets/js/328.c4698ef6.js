(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{950:function(s,e,n){"use strict";n.r(e);var a=n(15),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"time-round"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#time-round"}},[s._v("#")]),s._v(" time_round")]),s._v(" "),n("h3",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),n("h4",{attrs:{id:"syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),n("p",[n("code",[s._v("DATETIME TIME_ROUND(DATETIME expr)")])]),s._v(" "),n("p",[n("code",[s._v("DATETIME TIME_ROUND(DATETIME expr, INT period)")])]),s._v(" "),n("p",[n("code",[s._v("DATETIME TIME_ROUND(DATETIME expr, DATETIME origin)")])]),s._v(" "),n("p",[n("code",[s._v("DATETIME TIME_ROUND(DATETIME expr, INT period, DATETIME origin)")])]),s._v(" "),n("p",[s._v("The function name "),n("code",[s._v("TIME_ROUND")]),s._v(" consists of two parts, Each part consists of the following optional values.")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("TIME")]),s._v(": "),n("code",[s._v("SECOND")]),s._v(", "),n("code",[s._v("MINUTE")]),s._v(", "),n("code",[s._v("HOUR")]),s._v(", "),n("code",[s._v("DAY")]),s._v(", "),n("code",[s._v("WEEK")]),s._v(", "),n("code",[s._v("MONTH")]),s._v(", "),n("code",[s._v("YEAR")])]),s._v(" "),n("li",[n("code",[s._v("ROUND")]),s._v(": "),n("code",[s._v("FLOOR")]),s._v(", "),n("code",[s._v("CEIL")])])]),s._v(" "),n("p",[s._v("Returns the upper/lower bound of "),n("code",[s._v("expr")]),s._v(".")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("period")]),s._v(" specifies how many "),n("code",[s._v("TIME")]),s._v(" units, the default is "),n("code",[s._v("1")]),s._v(".")]),s._v(" "),n("li",[n("code",[s._v("origin")]),s._v(" specifies the start time of the period, the default is "),n("code",[s._v("1970-01-01T00:00:00")]),s._v(", the start time of "),n("code",[s._v("WEEK")]),s._v(" is Sunday, which is "),n("code",[s._v("1970-01-04T00:00:00")]),s._v(". Could be larger than "),n("code",[s._v("expr")]),s._v(".")]),s._v(" "),n("li",[s._v("Please try to choose common "),n("code",[s._v("period")]),s._v(", such as 3 "),n("code",[s._v("MONTH")]),s._v(", 90 "),n("code",[s._v("MINUTE")]),s._v(". If you set a uncommon "),n("code",[s._v("period")]),s._v(", please also specify "),n("code",[s._v("origin")]),s._v(".")])]),s._v(" "),n("h3",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\nMySQL> SELECT YEAR_FLOOR('20200202000000');\n+------------------------------+\n| year_floor('20200202000000') |\n+------------------------------+\n| 2020-01-01 00:00:00          |\n+------------------------------+\n\n\nMySQL> SELECT MONTH_CEIL(CAST('2020-02-02 13:09:20' AS DATETIME), 3); --quarter\n+--------------------------------------------------------+\n| month_ceil(CAST('2020-02-02 13:09:20' AS DATETIME), 3) |\n+--------------------------------------------------------+\n| 2020-04-01 00:00:00                                    |\n+--------------------------------------------------------+\n\n\nMySQL> SELECT WEEK_CEIL('2020-02-02 13:09:20', '2020-01-06'); --monday\n+---------------------------------------------------------+\n| week_ceil('2020-02-02 13:09:20', '2020-01-06 00:00:00') |\n+---------------------------------------------------------+\n| 2020-02-03 00:00:00                                     |\n+---------------------------------------------------------+\n\n\nMySQL> SELECT MONTH_CEIL(CAST('2020-02-02 13:09:20' AS DATETIME), 3, CAST('1970-01-09 00:00:00' AS DATETIME)); --next rent day\n+-------------------------------------------------------------------------------------------------+\n| month_ceil(CAST('2020-02-02 13:09:20' AS DATETIME), 3, CAST('1970-01-09 00:00:00' AS DATETIME)) |\n+-------------------------------------------------------------------------------------------------+\n| 2020-04-09 00:00:00                                                                             |\n+-------------------------------------------------------------------------------------------------+\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("h3",{attrs:{id:"keywords"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),n("p",[s._v("TIME_ROUND")])])}),[],!1,null,null,null);e.default=t.exports}}]);