(window.webpackJsonp=window.webpackJsonp||[]).push([[785],{1407:function(s,t,a){"use strict";a.r(t);var e=a(15),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"insert-into"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert-into"}},[s._v("#")]),s._v(" Insert Into")]),s._v(" "),a("p",[s._v("Insert Into 语句的使用方式和 MySQL 等数据库中 Insert Into 语句的使用方式类似。但在 Doris 中，所有的数据写入都是一个独立的导入作业。所以这里将 Insert Into 也作为一种导入方式介绍。")]),s._v(" "),a("p",[s._v("主要的 Insert Into 命令包含以下两种；")]),s._v(" "),a("ul",[a("li",[s._v("INSERT INTO tbl SELECT ...")]),s._v(" "),a("li",[s._v("INSERT INTO tbl (col1, col2, ...) VALUES (1, 2, ...), (1,3, ...);")])]),s._v(" "),a("p",[s._v("其中第二种命令仅用于 Demo，不要使用在测试或生产环境中。")]),s._v(" "),a("h2",{attrs:{id:"导入操作及返回结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入操作及返回结果"}},[s._v("#")]),s._v(" 导入操作及返回结果")]),s._v(" "),a("p",[s._v("Insert Into 命令需要通过 MySQL 协议提交，创建导入请求会同步返回导入结果。")]),s._v(" "),a("p",[s._v("以下是两个Insert Into的使用示例：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" tbl2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" LABEL label1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tbl3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" tbl1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qweasdzxcqweasdzxc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("注意：当需要使用 "),a("code",[s._v("CTE(Common Table Expressions)")]),s._v(" 作为 insert 操作中的查询部分时，必须指定 "),a("code",[s._v("WITH LABEL")]),s._v(" 和 column list 部分。示例：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" tbl1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" LABEL label1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" cte1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tbl1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cte2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tbl2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" k1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" cte1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" cte2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" cte1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("k1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" tbl1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("k1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" cte1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tbl1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cte2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tbl2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" k1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" cte1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" cte2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" cte1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("k1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])]),s._v(" "),a("p",[s._v("具体的参数说明，你可以参照 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT.html"}},[s._v("INSERT INTO")]),s._v(" 命令或者执行"),a("code",[s._v("HELP INSERT")]),s._v(" 来查看其帮助文档以便更好的使用这种导入方式。")],1),s._v(" "),a("p",[s._v("Insert Into 本身就是一个 SQL 命令，其"),a("strong",[s._v("返回结果")]),s._v("会根据执行结果的不同，分为以下几种：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("结果集为空")]),s._v(" "),a("p",[s._v("如果 insert 对应 select 语句的结果集为空，则返回如下：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" tbl1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" empty_tbl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.02")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("code",[s._v("Query OK")]),s._v(" 表示执行成功。"),a("code",[s._v("0 rows affected")]),s._v(" 表示没有数据被导入。")])]),s._v(" "),a("li",[a("p",[s._v("结果集不为空")]),s._v(" "),a("p",[s._v("在结果集不为空的情况下。返回结果分为如下几种情况：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Insert 执行成功并可见：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" tbl1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tbl2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.38")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'label'")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'insert_8510c568-9eda-4173-9e36-6adc7d35291c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'status'")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'visible'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'txnId'")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'4005'")]),s._v("}\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" tbl1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" label my_label1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tbl2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.38")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'label'")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my_label1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'status'")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'visible'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'txnId'")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'4005'")]),s._v("}\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" tbl1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tbl2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" affected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("warnings")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.31")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'label'")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'insert_f0747f0e-7a35-46e2-affa-13a235f4020d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'status'")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'visible'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'txnId'")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'4005'")]),s._v("}\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" tbl1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tbl2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" affected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("warnings")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.31")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'label'")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'insert_f0747f0e-7a35-46e2-affa-13a235f4020d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'status'")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'committed'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'txnId'")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'4005'")]),s._v("}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[a("code",[s._v("Query OK")]),s._v(" 表示执行成功。"),a("code",[s._v("4 rows affected")]),s._v(" 表示总共有4行数据被导入。"),a("code",[s._v("2 warnings")]),s._v(" 表示被过滤的行数。")]),s._v(" "),a("p",[s._v("同时会返回一个 json 串：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n{'label':'my_label1', 'status':'visible', 'txnId':'4005', 'err':'some other error'}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("code",[s._v("label")]),s._v(" 为用户指定的 label 或自动生成的 label。Label 是该 Insert Into 导入作业的标识。每个导入作业，都有一个在单 database 内部唯一的 Label。")]),s._v(" "),a("p",[a("code",[s._v("status")]),s._v(" 表示导入数据是否可见。如果可见，显示 "),a("code",[s._v("visible")]),s._v("，如果不可见，显示 "),a("code",[s._v("committed")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("txnId")]),s._v(" 为这个 insert 对应的导入事务的 id。")]),s._v(" "),a("p",[a("code",[s._v("err")]),s._v(" 字段会显示一些其他非预期错误。")]),s._v(" "),a("p",[s._v("当需要查看被过滤的行时，用户可以通过"),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-LOAD.html"}},[s._v("SHOW LOAD")]),s._v("语句")],1),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("load")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" label"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("返回结果中的 URL 可以用于查询错误的数据，具体见后面 "),a("strong",[s._v("查看错误行")]),s._v(" 小结。")]),s._v(" "),a("p",[a("strong",[s._v("数据不可见是一个临时状态，这批数据最终是一定可见的")])]),s._v(" "),a("p",[s._v("可以通过"),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-TRANSACTION.html"}},[s._v("SHOW TRANSACTION")]),s._v("语句查看这批数据的可见状态：")],1),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4005")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("返回结果中的 "),a("code",[s._v("TransactionStatus")]),s._v(" 列如果为 "),a("code",[s._v("visible")]),s._v("，则表述数据可见。")])]),s._v(" "),a("li",[a("p",[s._v("Insert 执行失败")]),s._v(" "),a("p",[s._v("执行失败表示没有任何数据被成功导入，并返回如下：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" tbl1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tbl2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" k1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nERROR "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1064")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HY000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v(" partitions have "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("no")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("load")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" url: http:"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//10.74.167.16:8042/api/_load_error_log?file=__shard_2/error_log_insert_stmt_ba8bb9e158e4879-ae8de8507c0bf8a2_ba8bb9e158e4879_ae8de8507c0bf8a2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("其中 "),a("code",[s._v("ERROR 1064 (HY000): all partitions have no load data")]),s._v(" 显示失败原因。后面的 url 可以用于查询错误的数据，具体见后面 "),a("strong",[s._v("查看错误行")]),s._v(" 小结。")])])])])]),s._v(" "),a("p",[a("strong",[s._v("综上，对于 insert 操作返回结果的正确处理逻辑应为：")])]),s._v(" "),a("ol",[a("li",[s._v("如果返回结果为 "),a("code",[s._v("ERROR 1064 (HY000)")]),s._v("，则表示导入失败。")]),s._v(" "),a("li",[s._v("如果返回结果为 "),a("code",[s._v("Query OK")]),s._v("，则表示执行成功。\n"),a("ol",[a("li",[s._v("如果 "),a("code",[s._v("rows affected")]),s._v(" 为 0，表示结果集为空，没有数据被导入。")]),s._v(" "),a("li",[s._v("如果 "),a("code",[s._v("rows affected")]),s._v(" 大于 0：\n"),a("ol",[a("li",[s._v("如果 "),a("code",[s._v("status")]),s._v(" 为 "),a("code",[s._v("committed")]),s._v("，表示数据还不可见。需要通过 "),a("code",[s._v("show transaction")]),s._v(" 语句查看状态直到 "),a("code",[s._v("visible")])]),s._v(" "),a("li",[s._v("如果 "),a("code",[s._v("status")]),s._v(" 为 "),a("code",[s._v("visible")]),s._v("，表示数据导入成功。")])])]),s._v(" "),a("li",[s._v("如果 "),a("code",[s._v("warnings")]),s._v(" 大于 0，表示有数据被过滤，可以通过 "),a("code",[s._v("show load")]),s._v(" 语句获取 url 查看被过滤的行。")])])])]),s._v(" "),a("h3",{attrs:{id:"show-last-insert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-last-insert"}},[s._v("#")]),s._v(" SHOW LAST INSERT")]),s._v(" "),a("p",[s._v("在上一小节中我们介绍了如何根据 insert 操作的返回结果进行后续处理。但一些语言的mysql类库中很难获取返回结果的中的 json 字符串。因此，Doris 还提供了 "),a("code",[s._v("SHOW LAST INSERT")]),s._v(" 命令来显式的获取最近一次 insert 操作的结果。")]),s._v(" "),a("p",[s._v("当执行完一个 insert 操作后，可以在同一 session 连接中执行 "),a("code",[s._v("SHOW LAST INSERT")]),s._v("。该命令会返回最近一次insert 操作的结果，如：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("last")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v("\\G\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n    TransactionId: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64067")]),s._v("\n            Label: insert_ba8f33aea9544866"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("ed77e2844d0cc9b\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Database")]),s._v(": default_cluster:db1\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Table")]),s._v(": t1\nTransactionStatus: VISIBLE\n       LoadedRows: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n     FilteredRows: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("该命令会返回 insert 以及对应事务的详细信息。因此，用户可以在每次执行完 insert 操作后，继续执行 "),a("code",[s._v("show last insert")]),s._v(" 命令来获取 insert 的结果。")]),s._v(" "),a("blockquote",[a("p",[s._v("注意：该命令只会返回在同一 session 连接中，最近一次 insert 操作的结果。如果连接断开或更换了新的连接，则将返回空集。")])]),s._v(" "),a("h2",{attrs:{id:"相关系统配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关系统配置"}},[s._v("#")]),s._v(" 相关系统配置")]),s._v(" "),a("h3",{attrs:{id:"fe-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fe-配置"}},[s._v("#")]),s._v(" FE 配置")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("timeout")]),s._v(" "),a("p",[s._v("导入任务的超时时间(以秒为单位)，导入任务在设定的 timeout 时间内未完成则会被系统取消，变成 CANCELLED。")]),s._v(" "),a("p",[s._v("目前 Insert Into 并不支持自定义导入的 timeout 时间，所有 Insert Into 导入的超时时间是统一的，默认的 timeout 时间为1小时。如果导入的源文件无法在规定时间内完成导入，则需要调整 FE 的参数"),a("code",[s._v("insert_load_default_timeout_second")]),s._v("。")]),s._v(" "),a("p",[s._v("同时 Insert Into 语句受到 Session 变量 "),a("code",[s._v("query_timeout")]),s._v(" 的限制。可以通过 "),a("code",[s._v("SET query_timeout = xxx;")]),s._v(" 来增加超时时间，单位是秒。")])])]),s._v(" "),a("h3",{attrs:{id:"session-变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session-变量"}},[s._v("#")]),s._v(" Session 变量")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("enable_insert_strict")]),s._v(" "),a("p",[s._v("Insert Into 导入本身不能控制导入可容忍的错误率。用户只能通过 "),a("code",[s._v("enable_insert_strict")]),s._v(" 这个 Session 参数用来控制。")]),s._v(" "),a("p",[s._v("当该参数设置为 false 时，表示至少有一条数据被正确导入，则返回成功。如果有失败数据，则还会返回一个 Label。")]),s._v(" "),a("p",[s._v("当该参数设置为 true 时，表示如果有一条数据错误，则导入失败。")]),s._v(" "),a("p",[s._v("默认为 false。可通过 "),a("code",[s._v("SET enable_insert_strict = true;")]),s._v(" 来设置。")])]),s._v(" "),a("li",[a("p",[s._v("query_timeout")]),s._v(" "),a("p",[s._v("Insert Into 本身也是一个 SQL 命令，因此 Insert Into 语句也受到 Session 变量 "),a("code",[s._v("query_timeout")]),s._v(" 的限制。可以通过 "),a("code",[s._v("SET query_timeout = xxx;")]),s._v(" 来增加超时时间，单位是秒。")])])]),s._v(" "),a("h2",{attrs:{id:"最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[s._v("#")]),s._v(" 最佳实践")]),s._v(" "),a("h3",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),a("ol",[a("li",[s._v("用户希望仅导入几条假数据，验证一下 Doris 系统的功能。此时适合使用 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT.html"}},[s._v("INSERT INTO VALUES")]),s._v(" 的语法，这里语法和MySql语法一样。")],1),s._v(" "),a("li",[s._v("用户希望将已经在 Doris 表中的数据进行 ETL 转换并导入到一个新的 Doris 表中，此时适合使用 INSERT INTO SELECT 语法。")]),s._v(" "),a("li",[s._v("用户可以创建一种外部表，如 MySQL 外部表映射一张 MySQL 系统中的表。或者创建 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD.html"}},[s._v("Broker")]),s._v(" 外部表来映射 HDFS 上的数据文件。然后通过 INSERT INTO SELECT 语法将外部表中的数据导入到 Doris 表中存储。")],1)]),s._v(" "),a("h3",{attrs:{id:"数据量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据量"}},[s._v("#")]),s._v(" 数据量")]),s._v(" "),a("p",[s._v("Insert Into 对数据量没有限制，大数据量导入也可以支持。但 Insert Into 有默认的超时时间，用户预估的导入数据量过大，就需要修改系统的 Insert Into 导入超时时间。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("导入数据量 = 36G 约≤ 3600s * 10M/s \n其中 10M/s 是最大导入限速，用户需要根据当前集群情况计算出平均的导入速度来替换公式中的 10M/s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"完整例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整例子"}},[s._v("#")]),s._v(" 完整例子")]),s._v(" "),a("p",[s._v("用户有一张表 store_sales 在数据库 sales 中，用户又创建了一张表叫 bj_store_sales 也在数据库 sales 中，用户希望将 store_sales 中销售记录在 bj 的数据导入到这张新建的表 bj_store_sales 中。导入的数据量约为：10G。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("store_sales "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("schema")]),s._v("：\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sale_timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" region"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nbj_store_sales "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("schema")]),s._v(":\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sale_timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("集群情况：用户当前集群的平均导入速度约为 5M/s")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Step1: 判断是否要修改 Insert Into 的默认超时时间")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("计算导入的大概时间\n10G / 5M/s = 2000s\n\n修改 FE 配置\ninsert_load_default_timeout_second = 2000\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Step2：创建导入任务")]),s._v(" "),a("p",[s._v("由于用户是希望将一张表中的数据做 ETL 并导入到目标表中，所以应该使用 Insert into query_stmt 方式导入。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" bj_store_sales "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" LABEL "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sale_timestamp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" store_sales "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" region "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bj"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("查看错误行")]),s._v(" "),a("p",[s._v("由于 Insert Into 无法控制错误率，只能通过 "),a("code",[s._v("enable_insert_strict")]),s._v(" 设置为完全容忍错误数据或完全忽略错误数据。因此如果 "),a("code",[s._v("enable_insert_strict")]),s._v(" 设为 true，则 Insert Into 可能会失败。而如果 "),a("code",[s._v("enable_insert_strict")]),s._v(" 设为 false，则可能出现仅导入了部分合格数据的情况。")]),s._v(" "),a("p",[s._v("当返回结果中提供了 url 字段时，可以通过以下命令查看错误行：")]),s._v(" "),a("p",[a("code",[s._v('SHOW LOAD WARNINGS ON "url";')])]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("p",[a("code",[s._v('SHOW LOAD WARNINGS ON "http://ip:port/api/_load_error_log?file=__shard_13/error_log_insert_stmt_d2cac0a0a16d482d-9041c949a4b71605_d2cac0a0a16d482d_9041c949a4b71605";')])]),s._v(" "),a("p",[s._v("错误的原因通常如：源数据列长度超过目的数据列长度、列类型不匹配、分区不匹配、列顺序不匹配等等。")])])]),s._v(" "),a("h2",{attrs:{id:"更多帮助"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多帮助"}},[s._v("#")]),s._v(" 更多帮助")]),s._v(" "),a("p",[s._v("关于 "),a("strong",[s._v("Insert Into")]),s._v(" 使用的更多详细语法，请参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT.html"}},[s._v("INSERT INTO")]),s._v(" 命令手册，也可以在 Mysql 客户端命令行下输入 "),a("code",[s._v("HELP INSERT")]),s._v(" 获取更多帮助信息。")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);