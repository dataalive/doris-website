(window.webpackJsonp=window.webpackJsonp||[]).push([[4474],{5101:function(s,a,t){"use strict";t.r(a);var r=t(15),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"show-load-profile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-load-profile"}},[s._v("#")]),s._v(" SHOW-LOAD-PROFILE")]),s._v(" "),t("h3",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),t("p",[s._v("SHOW LOAD PROFILE")]),s._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),t("p",[s._v("该语句是用来查看导入操作的Profile信息，该功能需要用户打开 Profile 设置，0.15 之前版本执行下面的设置：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" is_report_success"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("0.15 及之后的版本执行下面的设置：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" enable_profile"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("语法：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("load")]),s._v(" profile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("load")]),s._v(" profile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/[queryId]"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("这个命令会列出当前保存的所有导入 Profile。每行对应一个导入。其中 QueryId 列为导入作业的 ID。这个 ID 也可以通过 SHOW LOAD 语句查看拿到。我们可以选择我们想看的 Profile 对应的 QueryId，查看具体情况")]),s._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("列出所有的 Load Profile")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("load")]),s._v(" profile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------+------+-----------+------+-----------+---------------------+---------------------+-----------+------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" QueryId "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("User")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" DefaultDb "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQL")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" QueryType "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" StartTime           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" EndTime             "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" TotalTime "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" QueryState "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------+------+-----------+------+-----------+---------------------+---------------------+-----------+------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10441")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Load")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("54")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("m17s     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------+------+-----------+------+-----------+---------------------+---------------------+-----------+------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("查看有导入作业的子任务概况：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("load")]),s._v(" profile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/10441"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------+------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" TaskId                            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ActiveTime "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------+------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("980014623046410")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),s._v("e260f0c43031f1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("m14s      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------+------------+")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("查看指定子任务的 Instance 概况")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("load")]),s._v(" profile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/10441/980014623046410a-88e260f0c43031f1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------+------------------+------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Instances                         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Host             "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ActiveTime "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------+------------------+------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("980014623046410")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),s._v("e260f0c43031f2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.81")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".85")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".89")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9067")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("m7s       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("980014623046410")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),s._v("e260f0c43031f3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.81")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".85")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".89")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9067")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("m6s       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("980014623046410")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),s._v("e260f0c43031f4 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.81")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".85")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".89")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9067")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("m10s      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("980014623046410")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),s._v("e260f0c43031f5 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.81")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".85")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".89")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9067")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("m14s      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------+------------------+------------+")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("继续查看某一个具体的 Instance 上各个算子的详细 Profile")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("load")]),s._v(" profile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/10441/980014623046410a-88e260f0c43031f1/980014623046410a-88e260f0c43031f5"')]),s._v("\\G\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n\nInstance:\n\n      ┌"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------------┐")]),s._v("\n\n      │"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": OlapTableSink"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                      │\n\n      │"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Active: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("m17s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" non"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("child: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("70.91")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        │\n\n      │  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" Counters:                            │\n\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" CloseWaitTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("m53s             │\n\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" ConvertBatchTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("ns            │\n\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" MaxAddBatchExecTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("m46s       │\n\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" NonBlockingSendTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("m11s       │\n\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" NumberBatchAdded: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("782")]),s._v("            │\n\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" NumberNodeChannels: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("            │\n\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" OpenTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("743.822")]),s._v("us              │\n\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" RowsFiltered: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                  │\n\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" RowsRead: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.599729")]),s._v("M "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1599729")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    │\n\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" RowsReturned: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.599729")]),s._v("M "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1599729")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("│\n\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" SendDataTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("s761ms           │\n\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" TotalAddBatchExecTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("m46s     │\n\n      │      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" ValidateDataTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("s802ms        │\n\n      └"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------------┘")]),s._v("\n\n                           │\n\n┌"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------------------------┐")]),s._v("\n\n│"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(": BROKER_SCAN_NODE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                                │\n\n│"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Active: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v("s537ms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" non"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("child: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("29.06")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                 │\n\n│  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" Counters:                                        │\n\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" BytesDecompressed: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("                      │\n\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" BytesRead: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.77")]),s._v(" GB                           │\n\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" DecompressTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("ns                          │\n\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" FileReadTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("34")]),s._v("s263ms                       │\n\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" MaterializeTupleTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("45")]),s._v("s54ms             │\n\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" NumDiskAccess: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                             │\n\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" PeakMemoryUsage: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33.03")]),s._v(" MB                    │\n\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" RowsRead: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.599729")]),s._v("M "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1599729")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                │\n\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" RowsReturned: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.599729")]),s._v("M "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1599729")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("            │\n\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" RowsReturnedRate: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28.295")]),s._v("K sec               │\n\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" TotalRawReadTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("m20s                   │\n\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" TotalReadThroughput: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30.39858627319336")]),s._v(" MB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sec│\n\n│      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" WaitScannerTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v("s528ms                    │\n\n└"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------------------------------┘")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("SHOW, LOAD, PROFILE\n")])])]),t("h3",{attrs:{id:"best-practice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);a.default=e.exports}}]);