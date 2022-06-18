(window.webpackJsonp=window.webpackJsonp||[]).push([[787],{1411:function(s,a,t){"use strict";t.r(a);var e=t(15),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"批量删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#批量删除"}},[s._v("#")]),s._v(" 批量删除")]),s._v(" "),t("p",[s._v("目前Doris 支持 "),t("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/broker-load-manual.html"}},[s._v("Broker Load")]),s._v("，"),t("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/routine-load-manual.html"}},[s._v("Routine Load")]),s._v("， "),t("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/stream-load-manual.html"}},[s._v("Stream Load")]),s._v(" 等多种导入方式，对于数据的删除目前只能通过delete语句进行删除，使用delete 语句的方式删除时，每执行一次delete 都会生成一个新的数据版本，如果频繁删除会严重影响查询性能，并且在使用delete方式删除时，是通过生成一个空的rowset来记录删除条件实现，每次读取都要对删除条件进行过滤，同样在条件较多时会对性能造成影响。对比其他的系统，greenplum 的实现方式更像是传统数据库产品，snowflake 通过merge 语法实现。")],1),s._v(" "),t("p",[s._v("对于类似于cdc数据导入的场景，数据中insert和delete一般是穿插出现的，面对这种场景我们目前的导入方式也无法满足，即使我们能够分离出insert和delete虽然可以解决导入的问题，但是仍然解决不了删除的问题。使用批量删除功能可以解决这些个别场景的需求。数据导入有三种合并方式：")]),s._v(" "),t("ol",[t("li",[s._v("APPEND: 数据全部追加到现有数据中；")]),s._v(" "),t("li",[s._v("DELETE: 删除所有与导入数据key 列值相同的行；")]),s._v(" "),t("li",[s._v("MERGE: 根据 DELETE ON 的决定 APPEND 还是 DELETE。")])]),s._v(" "),t("h2",{attrs:{id:"基本原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本原理"}},[s._v("#")]),s._v(" 基本原理")]),s._v(" "),t("p",[s._v("通过增加一个隐藏列"),t("code",[s._v("__DORIS_DELETE_SIGN__")]),s._v("实现，因为我们只是在unique 模型上做批量删除，因此只需要增加一个类型为bool 聚合函数为replace 的隐藏列即可。在be 各种聚合写入流程都和正常列一样，读取方案有两个：")]),s._v(" "),t("p",[s._v("在fe遇到 * 等扩展时去掉"),t("code",[s._v("__DORIS_DELETE_SIGN__")]),s._v("，并且默认加上 "),t("code",[s._v("__DORIS_DELETE_SIGN__ != true")]),s._v(" 的条件， be 读取时都会加上一列进行判断，通过条件确定是否删除。")]),s._v(" "),t("h3",{attrs:{id:"导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入"}},[s._v("#")]),s._v(" 导入")]),s._v(" "),t("p",[s._v("导入时在fe 解析时将隐藏列的值设置成 "),t("code",[s._v("DELETE ON")]),s._v(" 表达式的值，其他的聚合行为和replace的聚合列相同。")]),s._v(" "),t("h3",{attrs:{id:"读取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读取"}},[s._v("#")]),s._v(" 读取")]),s._v(" "),t("p",[s._v("读取时在所有存在隐藏列的olapScanNode上增加"),t("code",[s._v("__DORIS_DELETE_SIGN__ != true")]),s._v(" 的条件，be 不感知这一过程，正常执行。")]),s._v(" "),t("h3",{attrs:{id:"cumulative-compaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cumulative-compaction"}},[s._v("#")]),s._v(" Cumulative Compaction")]),s._v(" "),t("p",[s._v("Cumulative Compaction 时将隐藏列看作正常的列处理，Compaction逻辑没有变化。")]),s._v(" "),t("h3",{attrs:{id:"base-compaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base-compaction"}},[s._v("#")]),s._v(" Base Compaction")]),s._v(" "),t("p",[s._v("Base Compaction 时要将标记为删除的行的删掉，以减少数据占用的空间。")]),s._v(" "),t("h2",{attrs:{id:"启用批量删除支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启用批量删除支持"}},[s._v("#")]),s._v(" 启用批量删除支持")]),s._v(" "),t("p",[s._v("启用批量删除支持有一下两种形式：")]),s._v(" "),t("ol",[t("li",[s._v("通过在fe 配置文件中增加"),t("code",[s._v("enable_batch_delete_by_default=true")]),s._v(" 重启fe 后新建表的都支持批量删除，此选项默认为false；")]),s._v(" "),t("li",[s._v("对于没有更改上述fe 配置或对于以存在的不支持批量删除功能的表，可以使用如下语句： "),t("code",[s._v('ALTER TABLE tablename ENABLE FEATURE "BATCH_DELETE"')]),s._v(" 来启用批量删除。本操作本质上是一个schema change 操作，操作立即返回，可以通过"),t("code",[s._v("show alter table column")]),s._v(" 来确认操作是否完成。")])]),s._v(" "),t("p",[s._v("那么如何确定一个表是否支持批量删除，可以通过 设置一个session variable 来显示隐藏列 "),t("code",[s._v("SET show_hidden_columns=true")]),s._v(" ，之后使用"),t("code",[s._v("desc tablename")]),s._v("，如果输出中有"),t("code",[s._v("__DORIS_DELETE_SIGN__")]),s._v(" 列则支持，如果没有则不支持。")]),s._v(" "),t("h2",{attrs:{id:"语法说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法说明"}},[s._v("#")]),s._v(" 语法说明")]),s._v(" "),t("p",[s._v("导入的语法设计方面主要是增加一个指定删除标记列的字段的colum映射，并且需要在导入的数据中增加一列，各种导入方式设置的语法如下")]),s._v(" "),t("h3",{attrs:{id:"stream-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stream-load"}},[s._v("#")]),s._v(" Stream Load")]),s._v(" "),t("p",[t("code",[s._v("Stream Load")]),s._v(" 的写法在header 中的 columns 字段增加一个设置删除标记列的字段， 示例 "),t("code",[s._v('-H "columns: k1, k2, label_c3" -H "merge_type: [MERGE|APPEND|DELETE]" -H "delete: label_c3=1"')]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"broker-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#broker-load"}},[s._v("#")]),s._v(" Broker Load")]),s._v(" "),t("p",[t("code",[s._v("Broker Load")]),s._v(" 的写法在 "),t("code",[s._v("PROPERTIES")]),s._v(" 处设置删除标记列的字段，语法如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" LABEL db1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("label1\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MERGE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("APPEND"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATA")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INFILE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hdfs://abc.com:8888/user/palo/test/ml/file1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tbl1\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMNS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TERMINATED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tmp_c1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("tmp_c2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" label_c3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tmp_c2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tmp_c1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" label_c3"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" BROKER "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'broker'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pass"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nPROPERTIES\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timeout"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3600"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("h3",{attrs:{id:"routine-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#routine-load"}},[s._v("#")]),s._v(" Routine Load")]),s._v(" "),t("p",[t("code",[s._v("Routine Load")]),s._v("的写法在  "),t("code",[s._v("columns")]),s._v("字段增加映射，映射方式同上，语法如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROUTINE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" example_db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" example_tbl \n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MERGE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("APPEND"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMNS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("k1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" v1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" v2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" label"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" k1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" k2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%doris%"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" label"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n PROPERTIES\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"desired_concurrent_number"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_batch_interval"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"20"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_batch_rows"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"300000"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_batch_size"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"209715200"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"strict_mode"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" KAFKA\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka_broker_list"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"broker1:9092,broker2:9092,broker3:9092"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka_topic"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my_topic"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka_partitions"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0,1,2,3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka_offsets"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"101,0,0,200"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h2",{attrs:{id:"注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),t("ol",[t("li",[s._v("由于除"),t("code",[s._v("Stream Load")]),s._v(" 外的导入操作在doris 内部有可能乱序执行，因此在使用"),t("code",[s._v("MERGE")]),s._v(" 方式导入时如果不是"),t("code",[s._v("Stream Load")]),s._v("，需要与 load sequence 一起使用，具体的 语法可以参照"),t("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/update-delete/sequence-column-manual.html"}},[t("code",[s._v("sequence")])]),s._v("列 相关的文档；")],1),s._v(" "),t("li",[t("code",[s._v("DELETE ON")]),s._v(" 条件只能与 MERGE 一起使用。")])]),s._v(" "),t("h2",{attrs:{id:"使用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),t("h3",{attrs:{id:"查看是否启用批量删除支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看是否启用批量删除支持"}},[s._v("#")]),s._v(" 查看是否启用批量删除支持")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" show_hidden_columns"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" affected "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v(" test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------+--------------+------+-------+---------+---------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Field                 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Type")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("Null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Key")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Extra   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------+--------------+------+-------+---------+---------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" name                  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("No")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" gender                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLACE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" age                   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLACE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" __DORIS_DELETE_SIGN__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TINYINT")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("No")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLACE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------+--------------+------+-------+---------+---------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"stream-load使用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stream-load使用示例"}},[s._v("#")]),s._v(" Stream Load使用示例")]),s._v(" "),t("ol",[t("li",[s._v("正常导入数据：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --location-trusted -u root: -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"column_separator:,"')]),s._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"columns: siteid, citycode, username, pv"')]),s._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"merge_type: APPEND"')]),s._v("  -T ~/table1_data http://127.0.0.1:8130/api/test/table1/_stream_load\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("其中的APPEND 条件可以省略，与下面的语句效果相同：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --location-trusted -u root: -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"column_separator:,"')]),s._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"columns: siteid, citycode, username, pv"')]),s._v(" -T ~/table1_data http://127.0.0.1:8130/api/test/table1/_stream_load\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("将与导入数据key 相同的数据全部删除")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --location-trusted -u root: -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"column_separator:,"')]),s._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"columns: siteid, citycode, username, pv"')]),s._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"merge_type: DELETE"')]),s._v("  -T ~/table1_data http://127.0.0.1:8130/api/test/table1/_stream_load\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("假设导入表中原有数据为:")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      3 |        2 | tom      |    2 |\n|      4 |        3 | bush     |    3 |\n|      5 |        3 | helen    |    3 |\n+--------+----------+----------+------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("导入数据为：")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("3,2,tom,0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("导入后数据变成:")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      4 |        3 | bush     |    3 |\n|      5 |        3 | helen    |    3 |\n+--------+----------+----------+------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("将导入数据中与"),t("code",[s._v("site_id=1")]),s._v(" 的行的key列相同的行")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --location-trusted -u root: -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"column_separator:,"')]),s._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"columns: siteid, citycode, username, pv"')]),s._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"merge_type: MERGE"')]),s._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"delete: siteid=1"')]),s._v("  -T ~/table1_data http://127.0.0.1:8130/api/test/table1/_stream_load\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("假设导入前数据为：")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      4 |        3 | bush     |    3 |\n|      5 |        3 | helen    |    3 |\n|      1 |        1 | jim      |    2 |\n+--------+----------+----------+------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("导入数据为：")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("2,1,grace,2\n3,2,tom,2\n1,1,jim,2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("导入后为：")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      4 |        3 | bush     |    3 |\n|      2 |        1 | grace    |    2 |\n|      3 |        2 | tom      |    2 |\n|      5 |        3 | helen    |    3 |\n+--------+----------+----------+------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);