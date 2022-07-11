(window.webpackJsonp=window.webpackJsonp||[]).push([[937],{1560:function(s,a,e){"use strict";e.r(a);var t=e(15),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"weekday"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#weekday"}},[s._v("#")]),s._v(" weekday")]),s._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),e("h4",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),e("p",[e("code",[s._v("INT WEEKDAY (DATETIME date)")])]),s._v(" "),e("p",[s._v("WEEKDAY函数返回日期的工作日索引值，即星期一为0，星期二为1，星期日为6")]),s._v(" "),e("p",[s._v("参数为Date或者Datetime类型或者可以cast为Date或者Datetime类型的数字")]),s._v(" "),e("p",[s._v("注意WEEKDAY和DAYOFWEEK的区别：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("          +-----+-----+-----+-----+-----+-----+-----+\n          | Sun | Mon | Tues| Wed | Thur| Fri | Sat |\n          +-----+-----+-----+-----+-----+-----+-----+\n  weekday |  6  |  0  |  1  |  2  |  3  |  4  |  5  |\n          +-----+-----+-----+-----+-----+-----+-----+\ndayofweek |  1  |  2  |  3  |  4  |  5  |  6  |  7  |\n          +-----+-----+-----+-----+-----+-----+-----+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> select weekday('2019-06-25');\n+--------------------------------+\n| weekday('2019-06-25 00:00:00') |\n+--------------------------------+\n|                              1 |\n+--------------------------------+\n\nmysql> select weekday(cast(20190625 as date)); \n+---------------------------------+\n| weekday(CAST(20190625 AS DATE)) |\n+---------------------------------+\n|                               1 |\n+---------------------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),e("p",[s._v("WEEKDAY")])])}),[],!1,null,null,null);a.default=n.exports}}]);