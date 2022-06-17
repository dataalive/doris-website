(window.webpackJsonp=window.webpackJsonp||[]).push([[761],{1386:function(t,s,a){"use strict";a.r(s);var e=a(15),l=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用mysqldump数据导出表结构或者数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用mysqldump数据导出表结构或者数据"}},[t._v("#")]),t._v(" 使用mysqldump数据导出表结构或者数据")]),t._v(" "),a("p",[t._v("Doris 在0.15 之后的版本已经支持通过"),a("code",[t._v("mysqldump")]),t._v(" 工具导出数据或者表结构")]),t._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("h3",{attrs:{id:"导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出"}},[t._v("#")]),t._v(" 导出")]),t._v(" "),a("ol",[a("li",[t._v("导出 test 数据库中的 table1 表："),a("code",[t._v("mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test --tables table1")])]),t._v(" "),a("li",[t._v("导出 test 数据库中的 table1 表结构："),a("code",[t._v("mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test --tables table1 --no-data")])]),t._v(" "),a("li",[t._v("导出 test1, test2 数据库中所有表："),a("code",[t._v("mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test1 test2")])]),t._v(" "),a("li",[t._v("导出所有数据库和表 "),a("code",[t._v("mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --all-databases")]),t._v("\n更多的使用参数可以参考"),a("code",[t._v("mysqldump")]),t._v(" 的使用手册")])]),t._v(" "),a("h3",{attrs:{id:"导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入"}},[t._v("#")]),t._v(" 导入")]),t._v(" "),a("p",[a("code",[t._v("mysqldump")]),t._v(" 导出的结果可以重定向到文件中，之后可以通过 source 命令导入到Doris 中 "),a("code",[t._v("source filename.sql")])]),t._v(" "),a("h2",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),a("ol",[a("li",[t._v("由于Doris  中没有mysql 里的 tablespace 概念，因此在使用mysqldump 时要加上 "),a("code",[t._v("--no-tablespaces")]),t._v(" 参数")]),t._v(" "),a("li",[t._v("使用mysqldump 导出数据和表结构仅用于开发测试或者数据量很小的情况，请勿用于大数据量的生产环境")])])])}),[],!1,null,null,null);s.default=l.exports}}]);