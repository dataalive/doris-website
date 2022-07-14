(window.webpackJsonp=window.webpackJsonp||[]).push([[2371],{3001:function(t,a,n){"use strict";n.r(a);var e=n(15),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"审计日志插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#审计日志插件"}},[t._v("#")]),t._v(" 审计日志插件")]),t._v(" "),n("p",[t._v("Doris 的审计日志插件是在 FE 的插件框架基础上开发的。是一个可选插件。用户可以在运行时安装或卸载这个插件。")]),t._v(" "),n("p",[t._v("该插件可以将 FE 的审计日志定期的导入到指定 Doris 集群中，以方便用户通过 SQL 对审计日志进行查看和分析。")]),t._v(" "),n("h2",{attrs:{id:"编译、配置和部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编译、配置和部署"}},[t._v("#")]),t._v(" 编译、配置和部署")]),t._v(" "),n("h3",{attrs:{id:"fe-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fe-配置"}},[t._v("#")]),t._v(" FE 配置")]),t._v(" "),n("p",[t._v("FE的插件框架当前是实验性功能，Doris中默认关闭，在FE的配置文件中，增加"),n("code",[t._v("plugin_enable = true")]),t._v("启用plugin框架")]),t._v(" "),n("h3",{attrs:{id:"auditloader-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#auditloader-配置"}},[t._v("#")]),t._v(" AuditLoader 配置")]),t._v(" "),n("p",[t._v("auditloader plugin的配置位于"),n("code",[t._v("${DORIS}/fe_plugins/auditloader/src/main/assembly/")]),t._v(".")]),t._v(" "),n("p",[t._v("打开 "),n("code",[t._v("plugin.conf")]),t._v(" 进行配置。配置项说明参见注释。")]),t._v(" "),n("h3",{attrs:{id:"编译"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[t._v("#")]),t._v(" 编译")]),t._v(" "),n("p",[t._v("在 Doris 代码目录下执行 "),n("code",[t._v("sh build_plugin.sh")]),t._v(" 后，会在 "),n("code",[t._v("fe_plugins/output")]),t._v(" 目录下得到 "),n("code",[t._v("auditloader.zip")]),t._v(" 文件。")]),t._v(" "),n("h3",{attrs:{id:"部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),n("p",[t._v("您可以将这个文件放置在一个 http 服务器上，或者拷贝"),n("code",[t._v("auditloader.zip")]),t._v("(或者解压"),n("code",[t._v("auditloader.zip")]),t._v(")到所有 FE 的指定目录下。这里我们使用后者。")]),t._v(" "),n("h3",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),n("p",[t._v("部署完成后，安装插件前，需要创建之前在 "),n("code",[t._v("plugin.conf")]),t._v(" 中指定的审计数据库和表。其中建表语句如下：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('create table doris_audit_tbl__\n(\n    query_id varchar(48) comment "Unique query id",\n    time datetime not null comment "Query start time",\n    client_ip varchar(32) comment "Client IP",\n    user varchar(64) comment "User name",\n    db varchar(96) comment "Database of this query",\n    state varchar(8) comment "Query result state. EOF, ERR, OK",\n    query_time bigint comment "Query execution time in millisecond",\n    scan_bytes bigint comment "Total scan bytes of this query",\n    scan_rows bigint comment "Total scan rows of this query",\n    return_rows bigint comment "Returned rows of this query",\n    stmt_id int comment "An incremental id of statement",\n    is_query tinyint comment "Is this statemt a query. 1 or 0",\n    frontend_ip varchar(32) comment "Frontend ip of executing this statement",\n    stmt varchar(5000) comment "The original statement, trimed if longer than 5000 bytes"\n) engine=OLAP\nduplicate key(query_id, time, client_ip)\npartition by range(time) ()\ndistributed by hash(query_id) buckets 1\nproperties(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "1",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br")])]),n("p",[t._v("其中 "),n("code",[t._v("dynamic_partition")]),t._v(" 属性根据自己的需要，选择审计日志安保留的天数。")]),t._v(" "),n("p",[t._v("之后，连接到 Doris 后使用 "),n("code",[t._v("INSTALL PLUGIN")]),t._v(" 命令完成安装。安装成功后，可以通过 "),n("code",[t._v("SHOW PLUGINS")]),t._v(" 看到已经安装的插件，并且状态为 "),n("code",[t._v("INSTALLED")]),t._v("。")]),t._v(" "),n("p",[t._v("完成后，插件会不断的以指定的时间间隔将审计日志插入到这个表中。")])])}),[],!1,null,null,null);a.default=s.exports}}]);