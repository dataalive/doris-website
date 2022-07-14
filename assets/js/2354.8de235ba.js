(window.webpackJsonp=window.webpackJsonp||[]).push([[2354],{2984:function(s,e,a){"use strict";a.r(e);var n=a(15),r=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"导出查询结果集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出查询结果集"}},[s._v("#")]),s._v(" 导出查询结果集")]),s._v(" "),a("p",[s._v("本文档介绍如何使用 "),a("code",[s._v("SELECT INTO OUTFILE")]),s._v(" 命令进行查询结果的导出操作。")]),s._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("p",[a("code",[s._v("SELECT INTO OUTFILE")]),s._v(" 语句可以将查询结果导出到文件中。目前支持通过 Broker 进程, 通过 S3 协议, 或直接通过 HDFS 协议，导出到远端存储，如 HDFS，S3，BOS，COS（腾讯云）上。语法如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('query_stmt\nINTO OUTFILE "file_path"\n[format_as]\n[properties]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[a("p",[a("code",[s._v("file_path")])]),s._v(" "),a("p",[a("code",[s._v("file_path")]),s._v(" 指向文件存储的路径以及文件前缀。如 "),a("code",[s._v("hdfs://path/to/my_file_")]),s._v("。")]),s._v(" "),a("p",[s._v("最终的文件名将由 "),a("code",[s._v("my_file_")]),s._v("，文件序号以及文件格式后缀组成。其中文件序号由0开始，数量为文件被分割的数量。如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("my_file_abcdefg_0.csv\nmy_file_abcdefg_1.csv\nmy_file_abcdegf_2.csv\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("[format_as]")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("FORMAT AS CSV\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("指定导出格式。默认为 CSV。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("[properties]")])]),s._v(" "),a("p",[s._v("指定相关属性。目前支持通过 Broker 进程, 或通过 S3 协议进行导出。")]),s._v(" "),a("ul",[a("li",[s._v("Broker 相关属性需加前缀 "),a("code",[s._v("broker.")]),s._v("。具体参阅"),a("RouterLink",{attrs:{to:"/zh-CN/0.15/administrator-guide/broker.html"}},[s._v("Broker 文档")]),s._v("。")],1),s._v(" "),a("li",[s._v("HDFS 相关属性需加前缀 "),a("code",[s._v("hdfs.")]),s._v("。")]),s._v(" "),a("li",[s._v("S3 协议则直接执行 S3 协议配置即可。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('("broker.prop_key" = "broker.prop_val", ...)\nor\n("hdfs.fs.defaultFS" = "xxx", "hdfs.hdfs_user" = "xxx")\nor \n("AWS_ENDPOINT" = "xxx", ...)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("其他属性：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('("key1" = "val1", "key2" = "val2", ...)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("目前支持以下属性：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("column_separator")]),s._v("：列分隔符，仅对 CSV 格式适用。默认为 "),a("code",[s._v("\\t")]),s._v("。")]),s._v(" "),a("li",[a("code",[s._v("line_delimiter")]),s._v("：行分隔符，仅对 CSV 格式适用。默认为 "),a("code",[s._v("\\n")]),s._v("。")]),s._v(" "),a("li",[a("code",[s._v("max_file_size")]),s._v("：单个文件的最大大小。默认为 1GB。取值范围在 5MB 到 2GB 之间。超过这个大小的文件将会被切分。")]),s._v(" "),a("li",[a("code",[s._v("schema")]),s._v("：PARQUET 文件schema信息。仅对 PARQUET 格式适用。导出文件格式为PARQUET时，必须指定"),a("code",[s._v("schema")]),s._v("。")])])])]),s._v(" "),a("h2",{attrs:{id:"并发导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发导出"}},[s._v("#")]),s._v(" 并发导出")]),s._v(" "),a("p",[s._v("默认情况下，查询结果集的导出是非并发的，也就是单点导出。如果用户希望查询结果集可以并发导出，需要满足以下条件：")]),s._v(" "),a("ol",[a("li",[s._v("session variable 'enable_parallel_outfile' 开启并发导出: "),a("code",[s._v("set enable_parallel_outfile = true;")])]),s._v(" "),a("li",[s._v("导出方式为 S3 , 或者 HDFS， 而不是使用 broker")]),s._v(" "),a("li",[s._v("查询可以满足并发导出的需求，比如顶层不包含 sort 等单点节点。（后面会举例说明，哪种属于不可并发导出结果集的查询）")])]),s._v(" "),a("p",[s._v("满足以上三个条件，就能触发并发导出查询结果集了。并发度 = "),a("code",[s._v("be_instacne_num * parallel_fragment_exec_instance_num")])]),s._v(" "),a("h3",{attrs:{id:"如何验证结果集被并发导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何验证结果集被并发导出"}},[s._v("#")]),s._v(" 如何验证结果集被并发导出")]),s._v(" "),a("p",[s._v("用户通过 session 变量设置开启并发导出后，如果想验证当前查询是否能进行并发导出，则可以通过下面这个方法。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('explain select xxx from xxx where xxx  into outfile "s3://xxx" format as csv properties ("AWS_ENDPOINT" = "xxx", ...);\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("对查询进行 explain 后，Doris 会返回该查询的规划，如果你发现 "),a("code",[s._v("RESULT FILE SINK")]),s._v(" 出现在 "),a("code",[s._v("PLAN FRAGMENT 1")]),s._v(" 中，就说明导出并发开启成功了。\n如果 "),a("code",[s._v("RESULT FILE SINK")]),s._v(" 出现在 "),a("code",[s._v("PLAN FRAGMENT 0")]),s._v(" 中，则说明当前查询不能进行并发导出 (当前查询不同时满足并发导出的三个条件)。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("并发导出的规划示例：\n+-----------------------------------------------------------------------------+\n| Explain String                                                              |\n+-----------------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                             |\n|  OUTPUT EXPRS:<slot 2> | <slot 3> | <slot 4> | <slot 5>                     |\n|   PARTITION: UNPARTITIONED                                                  |\n|                                                                             |\n|   RESULT SINK                                                               |\n|                                                                             |\n|   1:EXCHANGE                                                                |\n|                                                                             |\n| PLAN FRAGMENT 1                                                             |\n|  OUTPUT EXPRS:`k1` + `k2`                                                   |\n|   PARTITION: HASH_PARTITIONED: `default_cluster:test`.`multi_tablet`.`k1`   |\n|                                                                             |\n|   RESULT FILE SINK                                                          |\n|   FILE PATH: s3://ml-bd-repo/bpit_test/outfile_1951_                        |\n|   STORAGE TYPE: S3                                                          |\n|                                                                             |\n|   0:OlapScanNode                                                            |\n|      TABLE: multi_tablet                                                    |\n+-----------------------------------------------------------------------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("示例1")]),s._v(" "),a("p",[s._v("使用 broker 方式导出，将简单查询结果导出到文件 "),a("code",[s._v("hdfs:/path/to/result.txt")]),s._v("。指定导出格式为 CSV。使用 "),a("code",[s._v("my_broker")]),s._v(" 并设置 kerberos 认证信息。指定列分隔符为 "),a("code",[s._v(",")]),s._v("，行分隔符为 "),a("code",[s._v("\\n")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('SELECT * FROM tbl\nINTO OUTFILE "hdfs:/path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "100MB"\n);\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("最终生成文件如如果不大于 100MB，则为："),a("code",[s._v("result_0.csv")]),s._v("。")]),s._v(" "),a("p",[s._v("如果大于 100MB，则可能为 "),a("code",[s._v("result_0.csv, result_1.csv, ...")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("示例2")]),s._v(" "),a("p",[s._v("将简单查询结果导出到文件 "),a("code",[s._v("hdfs:/path/to/result.parquet")]),s._v("。指定导出格式为 PARQUET。使用 "),a("code",[s._v("my_broker")]),s._v(" 并设置 kerberos 认证信息。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('SELECT c1, c2, c3 FROM tbl\nINTO OUTFILE "hdfs:/path/to/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab",\n    "schema"="required,int32,c1;required,byte_array,c2;required,byte_array,c2"\n);\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("查询结果导出到parquet文件需要明确指定"),a("code",[s._v("schema")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("示例3")]),s._v(" "),a("p",[s._v("将 CTE 语句的查询结果导出到文件 "),a("code",[s._v("hdfs:/path/to/result.txt")]),s._v("。默认导出格式为 CSV。使用 "),a("code",[s._v("my_broker")]),s._v(" 并设置 hdfs 高可用信息。使用默认的行列分隔符。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('WITH\nx1 AS\n(SELECT k1, k2 FROM tbl1),\nx2 AS\n(SELECT k3 FROM tbl2)\nSELEC k1 FROM x1 UNION SELECT k3 FROM x2\nINTO OUTFILE "hdfs:/path/to/result_"\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.username"="user",\n    "broker.password"="passwd",\n    "broker.dfs.nameservices" = "my_ha",\n    "broker.dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "broker.dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("最终生成文件如如果不大于 1GB，则为："),a("code",[s._v("result_0.csv")]),s._v("。")]),s._v(" "),a("p",[s._v("如果大于 1GB，则可能为 "),a("code",[s._v("result_0.csv, result_1.csv, ...")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("示例4")]),s._v(" "),a("p",[s._v("将 UNION 语句的查询结果导出到文件 "),a("code",[s._v("bos://bucket/result.txt")]),s._v("。指定导出格式为 PARQUET。使用 "),a("code",[s._v("my_broker")]),s._v(" 并设置 hdfs 高可用信息。PARQUET 格式无需指定列分割符。\n导出完成后，生成一个标识文件。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('SELECT k1 FROM tbl1 UNION SELECT k2 FROM tbl1\nINTO OUTFILE "bos://bucket/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.bos_endpoint" = "http://bj.bcebos.com",\n    "broker.bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "broker.bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyyyyyyyy",\n    "schema"="required,int32,k1;required,byte_array,k2"\n);\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("示例5")]),s._v(" "),a("p",[s._v("将 select 语句的查询结果导出到文件 "),a("code",[s._v("cos://${bucket_name}/path/result.txt")]),s._v("。指定导出格式为 csv。\n导出完成后，生成一个标识文件。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('select k1,k2,v1 from tbl1 limit 100000\ninto outfile "s3a://my_bucket/export/my_file_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "hdfs_broker",\n    "broker.fs.s3a.access.key" = "xxx",\n    "broker.fs.s3a.secret.key" = "xxxx",\n    "broker.fs.s3a.endpoint" = "https://cos.xxxxxx.myqcloud.com/",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "1024MB",\n    "success_file_name" = "SUCCESS"\n)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("最终生成文件如如果不大于 1GB，则为："),a("code",[s._v("my_file_0.csv")]),s._v("。")]),s._v(" "),a("p",[s._v("如果大于 1GB，则可能为 "),a("code",[s._v("my_file_0.csv, result_1.csv, ...")]),s._v("。")]),s._v(" "),a("p",[s._v("在cos上验证")]),s._v(" "),a("ol",[a("li",[s._v("不存在的path会自动创建")]),s._v(" "),a("li",[s._v("access.key/secret.key/endpoint需要和cos的同学确认。尤其是endpoint的值，不需要填写bucket_name。")])])]),s._v(" "),a("li",[a("p",[s._v("示例6")]),s._v(" "),a("p",[s._v("使用 s3 协议导出到 bos，并且并发导出开启。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('set enable_parallel_outfile = true;\nselect k1 from tb1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n    "AWS_ENDPOINT" = "http://s3.bd.bcebos.com",\n    "AWS_ACCESS_KEY" = "xxxx",\n    "AWS_SECRET_KEY" = "xxx",\n    "AWS_REGION" = "bd"\n)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("最终生成的文件前缀为 "),a("code",[s._v("my_file_{fragment_instance_id}_")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("示例7")]),s._v(" "),a("p",[s._v("使用 s3 协议导出到 bos，并且并发导出 session 变量开启。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('set enable_parallel_outfile = true;\nselect k1 from tb1 order by k1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n    "AWS_ENDPOINT" = "http://s3.bd.bcebos.com",\n    "AWS_ACCESS_KEY" = "xxxx",\n    "AWS_SECRET_KEY" = "xxx",\n    "AWS_REGION" = "bd"\n)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[a("strong",[s._v("但由于查询语句带了一个顶层的排序节点，所以这个查询即使开启并发导出的 session 变量，也是无法并发导出的。")])])]),s._v(" "),a("li",[a("p",[s._v("示例7")]),s._v(" "),a("p",[s._v("使用 hdfs 方式导出，将简单查询结果导出到文件 "),a("code",[s._v("hdfs:/path/to/result.txt")]),s._v("。指定导出格式为 CSV。使用并设置 kerberos 认证信息。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('SELECT * FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "hdfs.fs.defaultFS" = "hdfs://namenode:port",\n    "hdfs.hadoop.security.authentication" = "kerberos",\n    "hdfs.kerberos_principal" = "doris@YOUR.COM",\n    "hdfs.kerberos_keytab" = "/home/doris/my.keytab"\n);\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"返回结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回结果"}},[s._v("#")]),s._v(" 返回结果")]),s._v(" "),a("p",[s._v("导出命令为同步命令。命令返回，即表示操作结束。同时会返回一行结果来展示导出的执行结果。")]),s._v(" "),a("p",[s._v("如果正常导出并返回，则结果如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('mysql> select * from tbl1 limit 10 into outfile "file:///home/work/path/result_";\n+------------+-----------+----------+--------------------------------------------------------------------+\n| FileNumber | TotalRows | FileSize | URL                                                                |\n+------------+-----------+----------+--------------------------------------------------------------------+\n|          1 |         2 |        8 | file:///192.168.1.10/home/work/path/result_{fragment_instance_id}_ |\n+------------+-----------+----------+--------------------------------------------------------------------+\n1 row in set (0.05 sec)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("FileNumber：最终生成的文件个数。")]),s._v(" "),a("li",[s._v("TotalRows：结果集行数。")]),s._v(" "),a("li",[s._v("FileSize：导出文件总大小。单位字节。")]),s._v(" "),a("li",[s._v("URL：如果是导出到本地磁盘，则这里显示具体导出到哪个 Compute Node。")])]),s._v(" "),a("p",[s._v("如果进行了并发导出，则会返回多行数据。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+------------+-----------+----------+--------------------------------------------------------------------+\n| FileNumber | TotalRows | FileSize | URL                                                                |\n+------------+-----------+----------+--------------------------------------------------------------------+\n|          1 |         3 |        7 | file:///192.168.1.10/home/work/path/result_{fragment_instance_id}_ |\n|          1 |         2 |        4 | file:///192.168.1.11/home/work/path/result_{fragment_instance_id}_ |\n+------------+-----------+----------+--------------------------------------------------------------------+\n2 rows in set (2.218 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("如果执行错误，则会返回错误信息，如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT * FROM tbl INTO OUTFILE ...\nERROR 1064 (HY000): errCode = 2, detailMessage = Open broker writer failed ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("ul",[a("li",[s._v("如果不开启并发导出，查询结果是由单个 BE 节点，单线程导出的。因此导出时间和导出结果集大小正相关。开启并发导出可以降低导出的时间。")]),s._v(" "),a("li",[s._v("导出命令不会检查文件及文件路径是否存在。是否会自动创建路径、或是否会覆盖已存在文件，完全由远端存储系统的语义决定。")]),s._v(" "),a("li",[s._v("如果在导出过程中出现错误，可能会有导出文件残留在远端存储系统上。Doris 不会清理这些文件。需要用户手动清理。")]),s._v(" "),a("li",[s._v("导出命令的超时时间同查询的超时时间。可以通过 "),a("code",[s._v("SET query_timeout=xxx")]),s._v(" 进行设置。")]),s._v(" "),a("li",[s._v("对于结果集为空的查询，依然会产生一个大小为0的文件。")]),s._v(" "),a("li",[s._v("文件切分会保证一行数据完整的存储在单一文件中。因此文件的大小并不严格等于 "),a("code",[s._v("max_file_size")]),s._v("。")]),s._v(" "),a("li",[s._v("对于部分输出为非可见字符的函数，如 BITMAP、HLL 类型，输出为 "),a("code",[s._v("\\N")]),s._v("，即 NULL。")]),s._v(" "),a("li",[s._v("目前部分地理信息函数，如 "),a("code",[s._v("ST_Point")]),s._v(" 的输出类型为 VARCHAR，但实际输出值为经过编码的二进制字符。当前这些函数会输出乱码。对于地理函数，请使用 "),a("code",[s._v("ST_AsText")]),s._v(" 进行输出。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);