(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{771:function(s,t,e){"use strict";e.r(t);var a=e(15),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"sql-block-rule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql-block-rule"}},[s._v("#")]),s._v(" SQL Block Rule")]),s._v(" "),e("p",[s._v("This function is only used to limit the query statement, and does not limit the execution of the explain statement.\nSupport SQL block rule by user level:")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("by regex way to deny specify SQL")])]),s._v(" "),e("li",[e("p",[s._v("by setting partition_num, tablet_num, cardinality, check whether a sql reaches one of the limitations")]),s._v(" "),e("ul",[e("li",[s._v("partition_num, tablet_num, cardinality could be set together, and once reach one of them, the sql will be blocked.")])])])]),s._v(" "),e("h2",{attrs:{id:"rule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule"}},[s._v("#")]),s._v(" Rule")]),s._v(" "),e("p",[s._v("SQL block rule CRUD")]),s._v(" "),e("ul",[e("li",[s._v("create SQL block rule,For more creation syntax see"),e("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE.html"}},[s._v("CREATE SQL BLOCK RULE")]),s._v(" "),e("ul",[e("li",[s._v('sql：Regex pattern，Special characters need to be translated, "NULL" by default')]),s._v(" "),e("li",[s._v('sqlHash: Sql hash value, Used to match exactly, We print it in fe.audit.log, This parameter is the only choice between sql and sql, "NULL" by default')]),s._v(" "),e("li",[s._v("partition_num: Max number of partitions will be scanned by a scan node, 0L by default")]),s._v(" "),e("li",[s._v("tablet_num: Max number of tablets will be scanned by a scan node, 0L by default")]),s._v(" "),e("li",[s._v("cardinality: An inaccurate number of scan rows of a scan node, 0L by default")]),s._v(" "),e("li",[s._v("global: Whether global(all users)is in effect, false by default")]),s._v(" "),e("li",[s._v("enable：Whether to enable block rule，true by default")])])],1)]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" SQL_BLOCK_RULE test_rule \nPROPERTIES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sql"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"select * from order_analysis"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"global"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"enable"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sqlHash"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("When we execute the sql that we defined in the rule just now, an exception error will be returned. An example is as follows:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("mysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" order_analysis"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nERROR "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1064")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HY000"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": errCode "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" detailMessage "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("match")]),s._v(" regex "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v(" block "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rule")]),s._v(": order_analysis_rule\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("create test_rule2, limits the maximum number of scanning partitions to 30 and the maximum scanning cardinality to 10 billion rows. As shown in the following example:")])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" SQL_BLOCK_RULE test_rule2 PROPERTIES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"partition_num"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"30"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cardinality"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10000000000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"global"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"enable"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("show configured SQL block rules, or show all rules if you do not specify a rule name,Please see the specific grammar "),e("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE.html"}},[s._v("SHOW SQL BLOCK RULE")])],1)]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" SQL_BLOCK_RULE "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" RULE_NAME"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("alter SQL block rule，Allows changes sql/sqlHash/global/enable/partition_num/tablet_num/cardinality anyone,Please see the specific grammar"),e("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE.html"}},[s._v("ALTER SQL BLOCK  RULE")]),s._v(" "),e("ul",[e("li",[s._v("sql and sqlHash cannot be set both. It means if sql or sqlHash is set in a rule, another property will never be allowed to be altered")]),s._v(" "),e("li",[s._v("sql/sqlHash and partition_num/tablet_num/cardinality cannot be set together. For example, partition_num is set in a rule, then sql or sqlHash will never be allowed to be altered.")])])],1)]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" SQL_BLOCK_RULE test_rule PROPERTIES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sql"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"select \\\\* from test_table"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"enable"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('ALTER SQL_BLOCK_RULE test_rule2 PROPERTIES("partition_num" = "10","tablet_num"="300","enable"="true")\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("drop SQL block rule，Support multiple rules, separated by "),e("code",[s._v(",")]),s._v(",Please see the specific grammar"),e("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-SQL-BLOCK-RULE.html"}},[s._v("DROP SQL BLOCK RULR")])],1)]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" SQL_BLOCK_RULE test_rule1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("test_rule2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"user-bind-rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user-bind-rules"}},[s._v("#")]),s._v(" User bind rules")]),s._v(" "),e("p",[s._v("If global=false is configured, the rules binding for the specified user needs to be configured, with multiple rules separated by ', '")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PROPERTY "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sql_block_rules'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test_rule1,test_rule2'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);