(window.webpackJsonp=window.webpackJsonp||[]).push([[1108],{1734:function(s,a,e){"use strict";e.r(a);var t=e(15),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"admin-show-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#admin-show-config"}},[s._v("#")]),s._v(" ADMIN-SHOW-CONFIG")]),s._v(" "),e("h3",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),e("p",[s._v("ADMIN SHOW CONFIG")]),s._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),e("p",[s._v("该语句用于展示当前集群的配置（当前仅支持展示 FE 的配置项）")]),s._v(" "),e("p",[s._v("语法：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v(" ADMIN "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" FRONTEND CONFIG "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pattern"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("结果中的各列含义如下：")]),s._v(" "),e("ol",[e("li",[s._v("Key：        配置项名称")]),s._v(" "),e("li",[s._v("Value：      配置项值")]),s._v(" "),e("li",[s._v("Type：       配置项类型")]),s._v(" "),e("li",[s._v("IsMutable：  是否可以通过 ADMIN SET CONFIG 命令设置")]),s._v(" "),e("li",[s._v("MasterOnly： 是否仅适用于 Master FE")]),s._v(" "),e("li",[s._v("Comment：    配置项说明")])]),s._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("查看当前FE节点的配置")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("```sql\nADMIN SHOW FRONTEND CONFIG;\n```\n")])])])]),s._v(" "),e("li",[e("p",[s._v("使用like谓词搜索当前Fe节点的配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> ADMIN SHOW FRONTEND CONFIG LIKE '%check_java_version%';\n+--------------------+-------+---------+-----------+------------+---------+\n| Key                | Value | Type    | IsMutable | MasterOnly | Comment |\n+--------------------+-------+---------+-----------+------------+---------+\n| check_java_version | true  | boolean | false     | false      |         |\n+--------------------+-------+---------+-----------+------------+---------+\n1 row in set (0.01 sec)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])])]),s._v(" "),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("ADMIN, SHOW, CONFIG\n")])])]),e("h3",{attrs:{id:"best-practice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);a.default=n.exports}}]);