(window.webpackJsonp=window.webpackJsonp||[]).push([[4079],{4709:function(s,a,t){"use strict";t.r(a);var n=t(15),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"外部存储数据导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外部存储数据导入"}},[s._v("#")]),s._v(" 外部存储数据导入")]),s._v(" "),t("p",[s._v("本文档主要介绍如何导入外部系统中存储的数据。例如（HDFS，AWS S3，百度云的BOS，阿里云的OSS和腾讯云的COS）")]),s._v(" "),t("h2",{attrs:{id:"hdfs-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hdfs-load"}},[s._v("#")]),s._v(" HDFS LOAD")]),s._v(" "),t("h3",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),t("p",[s._v("上传需要导入的文件到HDFS上，具体命令可参阅"),t("a",{attrs:{href:"https://hadoop.apache.org/docs/r3.3.2/hadoop-project-dist/hadoop-common/FileSystemShell.html#put",target:"_blank",rel:"noopener noreferrer"}},[s._v("HDFS上传命令"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"开始导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始导入"}},[s._v("#")]),s._v(" 开始导入")]),s._v(" "),t("p",[s._v("Hdfs load 创建导入语句，导入方式和"),t("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/broker-load-manual.html"}},[s._v("Broker Load")]),s._v(" 基本相同，只需要将 "),t("code",[s._v("WITH BROKER broker_name ()")]),s._v(" 语句替换成如下部分")],1),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("  LOAD LABEL db_name.label_name \n  (data_desc, ...)\n  WITH HDFS\n  [PROPERTIES (key1=value1, ... )]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ol",[t("li",[t("p",[s._v("创建一张表")]),s._v(" "),t("p",[s._v("通过 "),t("code",[s._v("CREATE TABLE")]),s._v(" 命令在"),t("code",[s._v("demo")]),s._v("创建一张表用于存储待导入的数据。具体的导入方式请查阅 "),t("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE.html"}},[s._v("CREATE TABLE")]),s._v(" 命令手册。示例如下：")],1),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),s._v(" load_hdfs_file_test\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    age "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TINYINT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unique")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTRIBUTED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("HASH")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" BUCKETS "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("导入数据执行以下命令导入HDFS文件：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" LABEL demo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("label_20220402\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATA")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INFILE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hdfs://host:port/tmp/test_hdfs.txt"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("load_hdfs_file_test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMNS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TERMINATED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\t"')]),s._v("            \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" HDFS "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fs.defaultFS"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hdfs://testFs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hdfs_user"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    PROPERTIES\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timeout"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1200"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_filter_ratio"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.1"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("关于参数介绍，请参阅"),t("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/broker-load-manual.html"}},[s._v("Broker Load")]),s._v("，HA集群的创建语法，通过"),t("code",[s._v("HELP BROKER LOAD")]),s._v("查看")],1)]),s._v(" "),t("li",[t("p",[s._v("查看导入状态")]),s._v(" "),t("p",[s._v("Broker load 是一个异步的导入方式，具体导入结果可以通过"),t("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-LOAD.html#show-load"}},[s._v("SHOW LOAD")]),s._v("命令查看")],1),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('mysql> show load order by createtime desc limit 1\\G;\n*************************** 1. row ***************************\n         JobId: 41326624\n         Label: broker_load_2022_04_15\n         State: FINISHED\n      Progress: ETL:100%; LOAD:100%\n          Type: BROKER\n       EtlInfo: unselected.rows=0; dpp.abnorm.ALL=0; dpp.norm.ALL=27\n      TaskInfo: cluster:N/A; timeout(s):1200; max_filter_ratio:0.1\n      ErrorMsg: NULL\n    CreateTime: 2022-04-01 18:59:06\n  EtlStartTime: 2022-04-01 18:59:11\n EtlFinishTime: 2022-04-01 18:59:11\n LoadStartTime: 2022-04-01 18:59:11\nLoadFinishTime: 2022-04-01 18:59:11\n           URL: NULL\n    JobDetails: {"Unfinished backends":{"5072bde59b74b65-8d2c0ee5b029adc0":[]},"ScannedRows":27,"TaskNumber":1,"All backends":{"5072bde59b74b65-8d2c0ee5b029adc0":[36728051]},"FileNumber":1,"FileSize":5540}\n1 row in set (0.01 sec)\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"s3-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#s3-load"}},[s._v("#")]),s._v(" S3 LOAD")]),s._v(" "),t("p",[s._v("从0.14 版本开始，Doris 支持通过S3协议直接从支持S3协议的在线存储系统导入数据。")]),s._v(" "),t("p",[s._v("下面主要介绍如何导入 AWS S3 中存储的数据。也支持导入其他支持S3协议的对象存储系统导入，如果百度云的BOS，阿里云的OSS和腾讯云的COS等、")]),s._v(" "),t("h3",{attrs:{id:"适用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[s._v("#")]),s._v(" 适用场景")]),s._v(" "),t("ul",[t("li",[s._v("源数据在 支持S3协议的存储系统中，如 S3,BOS 等。")]),s._v(" "),t("li",[s._v("数据量在 几十到百GB 级别。")])]),s._v(" "),t("h3",{attrs:{id:"准备工作-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作-2"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),t("ol",[t("li",[s._v("准本AK 和 SK\n首先需要找到或者重新生成 AWS "),t("code",[s._v("Access keys")]),s._v("，可以在AWS console 的 "),t("code",[s._v("My Security Credentials")]),s._v(" 找到生成方式， 如下图所示：\n"),t("a",{attrs:{href:"/images/aws_ak_sk.png"}},[s._v("AK_SK")]),s._v("\n选择 "),t("code",[s._v("Create New Access Key")]),s._v(" 注意保存生成 AK和SK.")]),s._v(" "),t("li",[s._v("准备 REGION 和 ENDPOINT\nREGION 可以在创建桶的时候选择也可以在桶列表中查看到。ENDPOINT 可以通过如下页面通过REGION查到 "),t("a",{attrs:{href:"https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_region",target:"_blank",rel:"noopener noreferrer"}},[s._v("AWS 文档"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("其他云存储系统可以相应的文档找到与S3兼容的相关信息")]),s._v(" "),t("h3",{attrs:{id:"开始导入-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始导入-2"}},[s._v("#")]),s._v(" 开始导入")]),s._v(" "),t("p",[s._v("导入方式和"),t("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/broker-load-manual.html"}},[s._v("Broker Load")]),s._v(" 基本相同，只需要将 "),t("code",[s._v("WITH BROKER broker_name ()")]),s._v(" 语句替换成如下部分")],1),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("完整示例如下")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('    LOAD LABEL example_db.exmpale_label_1\n    (\n        DATA INFILE("s3://your_bucket_name/your_file.txt")\n        INTO TABLE load_test\n        COLUMNS TERMINATED BY ","\n    )\n    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n    PROPERTIES\n    (\n        "timeout" = "3600"\n    );\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h3",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),t("p",[s._v("S3 SDK 默认使用 virtual-hosted style 方式。但某些对象存储系统可能没开启或没支持 virtual-hosted style 方式的访问，此时我们可以添加 "),t("code",[s._v("use_path_style")]),s._v(" 参数来强制使用 path style 方式：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('  WITH S3\n  (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION",\n        "use_path_style" = "true"\n  )\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);