(window.webpackJsonp=window.webpackJsonp||[]).push([[3482],{4112:function(s,t,a){"use strict";a.r(t);var e=a(15),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"导出查询结果集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出查询结果集"}},[s._v("#")]),s._v(" 导出查询结果集")]),s._v(" "),a("p",[s._v("本文档介绍如何使用 "),a("RouterLink",{attrs:{to:"/zh-CN/1.1/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE.html"}},[s._v("SELECT INTO OUTFILE")]),s._v(" 命令进行查询结果的导出操作。")],1),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("h3",{attrs:{id:"导出到hdfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出到hdfs"}},[s._v("#")]),s._v(" 导出到HDFS")]),s._v(" "),a("p",[s._v("将简单查询结果导出到文件 "),a("code",[s._v("hdfs://path/to/result.txt")]),s._v("，指定导出格式为 CSV。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tbl\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OUTFILE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hdfs://path/to/result_"')]),s._v("\nFORMAT "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" CSV\nPROPERTIES\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"broker.name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my_broker"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"column_separator"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"line_delimiter"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\n"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"导出到本地文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出到本地文件"}},[s._v("#")]),s._v(" 导出到本地文件")]),s._v(" "),a("p",[s._v("导出到本地文件时需要先在fe.conf中配置"),a("code",[s._v("enable_outfile_to_local=true")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tbl1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OUTFILE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file:///home/work/path/result_"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("更多用法可查看"),a("RouterLink",{attrs:{to:"/zh-CN/1.1/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE.html"}},[s._v("OUTFILE文档")]),s._v("。")],1),s._v(" "),a("h2",{attrs:{id:"并发导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发导出"}},[s._v("#")]),s._v(" 并发导出")]),s._v(" "),a("p",[s._v("默认情况下，查询结果集的导出是非并发的，也就是单点导出。如果用户希望查询结果集可以并发导出，需要满足以下条件：")]),s._v(" "),a("ol",[a("li",[s._v("session variable 'enable_parallel_outfile' 开启并发导出: "),a("code",[s._v("set enable_parallel_outfile = true;")])]),s._v(" "),a("li",[s._v("导出方式为 S3 , 或者 HDFS， 而不是使用 broker")]),s._v(" "),a("li",[s._v("查询可以满足并发导出的需求，比如顶层不包含 sort 等单点节点。（后面会举例说明，哪种属于不可并发导出结果集的查询）")])]),s._v(" "),a("p",[s._v("满足以上三个条件，就能触发并发导出查询结果集了。并发度 = "),a("code",[s._v("be_instacne_num * parallel_fragment_exec_instance_num")])]),s._v(" "),a("h3",{attrs:{id:"如何验证结果集被并发导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何验证结果集被并发导出"}},[s._v("#")]),s._v(" 如何验证结果集被并发导出")]),s._v(" "),a("p",[s._v("用户通过 session 变量设置开启并发导出后，如果想验证当前查询是否能进行并发导出，则可以通过下面这个方法。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("explain")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" xxx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" xxx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" xxx  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("outfile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s3://xxx"')]),s._v(" format "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" csv properties "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AWS_ENDPOINT"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("对查询进行 explain 后，Doris 会返回该查询的规划，如果你发现 "),a("code",[s._v("RESULT FILE SINK")]),s._v(" 出现在 "),a("code",[s._v("PLAN FRAGMENT 1")]),s._v(" 中，就说明导出并发开启成功了。\n如果 "),a("code",[s._v("RESULT FILE SINK")]),s._v(" 出现在 "),a("code",[s._v("PLAN FRAGMENT 0")]),s._v(" 中，则说明当前查询不能进行并发导出 (当前查询不同时满足并发导出的三个条件)。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("并发导出的规划示例：\n+-----------------------------------------------------------------------------+\n| Explain String                                                              |\n+-----------------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                             |\n|  OUTPUT EXPRS:<slot 2> | <slot 3> | <slot 4> | <slot 5>                     |\n|   PARTITION: UNPARTITIONED                                                  |\n|                                                                             |\n|   RESULT SINK                                                               |\n|                                                                             |\n|   1:EXCHANGE                                                                |\n|                                                                             |\n| PLAN FRAGMENT 1                                                             |\n|  OUTPUT EXPRS:`k1` + `k2`                                                   |\n|   PARTITION: HASH_PARTITIONED: `default_cluster:test`.`multi_tablet`.`k1`   |\n|                                                                             |\n|   RESULT FILE SINK                                                          |\n|   FILE PATH: s3://ml-bd-repo/bpit_test/outfile_1951_                        |\n|   STORAGE TYPE: S3                                                          |\n|                                                                             |\n|   0:OlapScanNode                                                            |\n|      TABLE: multi_tablet                                                    |\n+-----------------------------------------------------------------------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h2",{attrs:{id:"返回结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回结果"}},[s._v("#")]),s._v(" 返回结果")]),s._v(" "),a("p",[s._v("导出命令为同步命令。命令返回，即表示操作结束。同时会返回一行结果来展示导出的执行结果。")]),s._v(" "),a("p",[s._v("如果正常导出并返回，则结果如下：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tbl1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("outfile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file:///home/work/path/result_"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------------+-----------+----------+--------------------------------------------------------------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" FileNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" TotalRows "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" FileSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" URL                                                                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------------+-----------+----------+--------------------------------------------------------------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("file")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("///192.168.1.10/home/work/path/result_{fragment_instance_id}_ |")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------------+-----------+----------+--------------------------------------------------------------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.05")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("FileNumber：最终生成的文件个数。")]),s._v(" "),a("li",[s._v("TotalRows：结果集行数。")]),s._v(" "),a("li",[s._v("FileSize：导出文件总大小。单位字节。")]),s._v(" "),a("li",[s._v("URL：如果是导出到本地磁盘，则这里显示具体导出到哪个 Compute Node。")])]),s._v(" "),a("p",[s._v("如果进行了并发导出，则会返回多行数据。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------------+-----------+----------+--------------------------------------------------------------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" FileNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" TotalRows "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" FileSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" URL                                                                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------------+-----------+----------+--------------------------------------------------------------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("file")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("///192.168.1.10/home/work/path/result_{fragment_instance_id}_ |")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("file")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("///192.168.1.11/home/work/path/result_{fragment_instance_id}_ |")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------------+-----------+----------+--------------------------------------------------------------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.218")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("如果执行错误，则会返回错误信息，如：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tbl "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OUTFILE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nERROR "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1064")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HY000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": errCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" detailMessage "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Open")]),s._v(" broker writer failed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("ul",[a("li",[s._v("如果不开启并发导出，查询结果是由单个 BE 节点，单线程导出的。因此导出时间和导出结果集大小正相关。开启并发导出可以降低导出的时间。")]),s._v(" "),a("li",[s._v("导出命令不会检查文件及文件路径是否存在。是否会自动创建路径、或是否会覆盖已存在文件，完全由远端存储系统的语义决定。")]),s._v(" "),a("li",[s._v("如果在导出过程中出现错误，可能会有导出文件残留在远端存储系统上。Doris 不会清理这些文件。需要用户手动清理。")]),s._v(" "),a("li",[s._v("导出命令的超时时间同查询的超时时间。可以通过 "),a("code",[s._v("SET query_timeout=xxx")]),s._v(" 进行设置。")]),s._v(" "),a("li",[s._v("对于结果集为空的查询，依然会产生一个大小为0的文件。")]),s._v(" "),a("li",[s._v("文件切分会保证一行数据完整的存储在单一文件中。因此文件的大小并不严格等于 "),a("code",[s._v("max_file_size")]),s._v("。")]),s._v(" "),a("li",[s._v("对于部分输出为非可见字符的函数，如 BITMAP、HLL 类型，输出为 "),a("code",[s._v("\\N")]),s._v("，即 NULL。")]),s._v(" "),a("li",[s._v("目前部分地理信息函数，如 "),a("code",[s._v("ST_Point")]),s._v(" 的输出类型为 VARCHAR，但实际输出值为经过编码的二进制字符。当前这些函数会输出乱码。对于地理函数，请使用 "),a("code",[s._v("ST_AsText")]),s._v(" 进行输出。")])]),s._v(" "),a("h2",{attrs:{id:"更多帮助"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多帮助"}},[s._v("#")]),s._v(" 更多帮助")]),s._v(" "),a("p",[s._v("关于 OUTFILE 使用的更多详细语法及最佳实践，请参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/1.1/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE.html"}},[s._v("OUTFILE")]),s._v(" 命令手册，你也可以在 MySql 客户端命令行下输入 "),a("code",[s._v("HELP OUTFILE")]),s._v(" 获取更多帮助信息。")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);