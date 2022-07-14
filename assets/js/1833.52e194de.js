(window.webpackJsonp=window.webpackJsonp||[]).push([[1833],{2461:function(e,t,s){"use strict";s.r(t);var a=s(15),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"insert-into"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#insert-into"}},[e._v("#")]),e._v(" Insert Into")]),e._v(" "),s("p",[e._v("The use of Insert Into statements is similar to that of Insert Into statements in databases such as MySQL. But in Doris, all data writing is a separate import job. So Insert Into is also introduced here as an import method.")]),e._v(" "),s("p",[e._v("The main Insert Into command contains the following two kinds;")]),e._v(" "),s("ul",[s("li",[e._v("INSERT INTO tbl SELECT ...")]),e._v(" "),s("li",[e._v("INSERT INTO tbl (col1, col2, ...) VALUES (1, 2, ...), (1,3, ...);")])]),e._v(" "),s("p",[e._v("The second command is for Demo only, not in a test or production environment.")]),e._v(" "),s("h2",{attrs:{id:"import-operations-and-load-results"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-operations-and-load-results"}},[e._v("#")]),e._v(" Import operations and load results")]),e._v(" "),s("p",[e._v("The Insert Into command needs to be submitted through MySQL protocol. Creating an import request returns the import result synchronously.")]),e._v(" "),s("p",[e._v("The following are examples of the use of two Insert Intos:")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INSERT")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INTO")]),e._v(" tbl2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WITH")]),e._v(" LABEL label1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" tbl3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INSERT")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INTO")]),e._v(" tbl1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("VALUES")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"qweasdzxcqweasdzxc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("blockquote",[s("p",[e._v("Note: When you need to use "),s("code",[e._v("CTE(Common Table Expressions)")]),e._v(" as the query part in an insert operation, you must specify the "),s("code",[e._v("WITH LABEL")]),e._v(" and column list parts. Example:")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INSERT")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INTO")]),e._v(" tbl1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WITH")]),e._v(" LABEL label1\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WITH")]),e._v(" cte1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" tbl1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" cte2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" tbl2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" k1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" cte1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("JOIN")]),e._v(" cte2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" cte1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("k1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INSERT")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INTO")]),e._v(" tbl1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("k1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WITH")]),e._v(" cte1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" tbl1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" cte2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" tbl2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" k1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" cte1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("JOIN")]),e._v(" cte2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" cte1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("k1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])])]),e._v(" "),s("p",[e._v("For specific parameter description, you can refer to "),s("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT.html"}},[e._v("INSERT INTO")]),e._v(" command or execute "),s("code",[e._v("HELP INSERT")]),e._v(" to see its help documentation for better use of this import method.")],1),e._v(" "),s("p",[e._v("Insert Into itself is a SQL command, and the return result is divided into the following types according to the different execution results:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Result set is empty")]),e._v(" "),s("p",[e._v("If the result set of the insert corresponding SELECT statement is empty, it is returned as follows:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mysql> insert into tbl1 select * from empty_tbl;\nQuery OK, 0 rows affected (0.02 sec)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[s("code",[e._v("Query OK")]),e._v(" indicates successful execution. "),s("code",[e._v("0 rows affected")]),e._v(" means that no data was loaded.")])]),e._v(" "),s("li",[s("p",[e._v("The result set is not empty")]),e._v(" "),s("p",[e._v("In the case where the result set is not empty. The returned results are divided into the following situations:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Insert is successful and data is visible:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mysql> insert into tbl1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label': 'insert_8510c568-9eda-4173-9e36-6adc7d35291c', 'status': 'visible', 'txnId': '4005'}\n\nmysql> insert into tbl1 with label my_label1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label': 'my_label1', 'status': 'visible', 'txnId': '4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label': 'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status': 'visible', 'txnId': '4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label': 'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status': 'committed', 'txnId': '4005'}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br")])]),s("p",[s("code",[e._v("Query OK")]),e._v(" indicates successful execution. "),s("code",[e._v("4 rows affected")]),e._v(" means that a total of 4 rows of data were imported. "),s("code",[e._v("2 warnings")]),e._v(" indicates the number of lines to be filtered.")]),e._v(" "),s("p",[e._v("Also returns a json string:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("{'label': 'my_label1', 'status': 'visible', 'txnId': '4005'}\n{'label': 'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status': 'committed', 'txnId': '4005'}\n{'label': 'my_label1', 'status': 'visible', 'txnId': '4005', 'err': 'some other error'}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[s("code",[e._v("label")]),e._v(" is a user-specified label or an automatically generated label. Label is the ID of this Insert Into load job. Each load job has a label that is unique within a single database.")]),e._v(" "),s("p",[s("code",[e._v("status")]),e._v(" indicates whether the loaded data is visible. If visible, show "),s("code",[e._v("visible")]),e._v(", if not, show"),s("code",[e._v("committed")]),e._v(".")]),e._v(" "),s("p",[s("code",[e._v("txnId")]),e._v(" is the id of the load transaction corresponding to this insert.")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("err")]),e._v(" field displays some other unexpected errors.")]),e._v(" "),s("p",[e._v("When user need to view the filtered rows, the user can use the following statement")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('show load where label = "xxx";\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("The URL in the returned result can be used to query the wrong data. For details, see the following "),s("strong",[e._v("View Error Lines")]),e._v(" Summary.    "),s("strong",[e._v('"Data is not visible" is a temporary status, this batch of data must be visible eventually')])]),e._v(" "),s("p",[e._v("You can view the visible status of this batch of data with the following statement:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("show transaction where id = 4005;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("If the "),s("code",[e._v("TransactionStatus")]),e._v(" column in the returned result is "),s("code",[e._v("visible")]),e._v(", the data is visible.")])]),e._v(" "),s("li",[s("p",[e._v("Insert fails")]),e._v(" "),s("p",[e._v("Execution failure indicates that no data was successfully loaded, and returns as follows:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('mysql> insert into tbl1 select * from tbl2 where k1 = "a";\nERROR 1064 (HY000): all partitions have no load data. Url: http://10.74.167.16:8042/api/_load_error_log?file=__shard_2/error_log_insert_stmt_ba8bb9e158e4879-ae8de8507c0bf8a2_ba8bb9e158e4879_ae8de850e8de850\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Where "),s("code",[e._v("ERROR 1064 (HY000): all partitions have no load data")]),e._v(" shows the reason for the failure. The latter url can be used to query the wrong data. For details, see the following "),s("strong",[e._v("View Error Lines")]),e._v(" Summary.")])])])])]),e._v(" "),s("p",[s("strong",[e._v("In summary, the correct processing logic for the results returned by the insert operation should be:")])]),e._v(" "),s("ol",[s("li",[e._v("If the returned result is "),s("code",[e._v("ERROR 1064 (HY000)")]),e._v(", it means that the import failed.")]),e._v(" "),s("li",[e._v("If the returned result is "),s("code",[e._v("Query OK")]),e._v(", it means the execution was successful.\n"),s("ol",[s("li",[e._v("If "),s("code",[e._v("rows affected")]),e._v(" is 0, the result set is empty and no data is loaded.")]),e._v(" "),s("li",[e._v("If"),s("code",[e._v("rows affected")]),e._v(" is greater than 0:\n"),s("ol",[s("li",[e._v("If "),s("code",[e._v("status")]),e._v(" is"),s("code",[e._v("committed")]),e._v(", the data is not yet visible. You need to check the status through the "),s("code",[e._v("show transaction")]),e._v(" statement until "),s("code",[e._v("visible")]),e._v(".")]),e._v(" "),s("li",[e._v("If "),s("code",[e._v("status")]),e._v(" is"),s("code",[e._v("visible")]),e._v(", the data is loaded successfully.")])])]),e._v(" "),s("li",[e._v("If "),s("code",[e._v("warnings")]),e._v(" is greater than 0, it means that some data is filtered. You can get the url through the "),s("code",[e._v("show load")]),e._v(" statement to see the filtered rows.")])])])]),e._v(" "),s("p",[e._v("In the previous section, we described how to follow up on the results of insert operations. However, it is difficult to get the json string of the returned result in some mysql libraries. Therefore, Doris also provides the "),s("code",[e._v("SHOW LAST INSERT")]),e._v(" command to explicitly retrieve the results of the last insert operation.")]),e._v(" "),s("p",[e._v("After executing an insert operation, you can execute "),s("code",[e._v("SHOW LAST INSERT")]),e._v(" on the same session connection. This command returns the result of the most recent insert operation, e.g.")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[e._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("show")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("last")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("insert")]),e._v("\\G\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("row")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n    TransactionId: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("64067")]),e._v("\n            Label: insert_ba8f33aea9544866"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v("ed77e2844d0cc9b\n         "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Database")]),e._v(": default_cluster:db1\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Table")]),e._v(": t1\nTransactionStatus: VISIBLE\n       LoadedRows: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n     FilteredRows: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("This command returns the insert results and the details of the corresponding transaction. Therefore, you can continue to execute the "),s("code",[e._v("show last insert")]),e._v(" command after each insert operation to get the insert results.")]),e._v(" "),s("blockquote",[s("p",[e._v("Note: This command will only return the results of the last insert operation within the same session connection. If the connection is broken or replaced with a new one, the empty set will be returned.")])]),e._v(" "),s("h2",{attrs:{id:"relevant-system-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#relevant-system-configuration"}},[e._v("#")]),e._v(" Relevant System Configuration")]),e._v(" "),s("h3",{attrs:{id:"fe-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fe-configuration"}},[e._v("#")]),e._v(" FE configuration")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("time out")]),e._v(" "),s("p",[e._v("The timeout time of the import task (in seconds) will be cancelled by the system if the import task is not completed within the set timeout time, and will become CANCELLED.")]),e._v(" "),s("p",[e._v("At present, Insert Into does not support custom import timeout time. All Insert Into imports have a uniform timeout time. The default timeout time is 1 hour. If the imported source file cannot complete the import within the specified time, the parameter "),s("code",[e._v("insert_load_default_timeout_second")]),e._v(" of FE needs to be adjusted.")]),e._v(" "),s("p",[e._v("At the same time, the Insert Into statement receives the restriction of the Session variable "),s("code",[e._v("query_timeout")]),e._v(". You can increase the timeout time by "),s("code",[e._v("SET query_timeout = xxx;")]),e._v(" in seconds.")])])]),e._v(" "),s("h3",{attrs:{id:"session-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session-variables"}},[e._v("#")]),e._v(" Session Variables")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("enable_insert_strict")]),e._v(" "),s("p",[e._v("The Insert Into import itself cannot control the tolerable error rate of the import. Users can only use the Session parameter "),s("code",[e._v("enable_insert_strict")]),e._v(". When this parameter is set to false, it indicates that at least one data has been imported correctly, and then it returns successfully. When this parameter is set to true, the import fails if there is a data error. The default is false. It can be set by "),s("code",[e._v("SET enable_insert_strict = true;")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("query u timeout")]),e._v(" "),s("p",[e._v("Insert Into itself is also an SQL command, so the Insert Into statement is also restricted by the Session variable "),s("code",[e._v("query_timeout")]),e._v(". You can increase the timeout time by "),s("code",[e._v("SET query_timeout = xxx;")]),e._v(" in seconds.")])])]),e._v(" "),s("h2",{attrs:{id:"best-practices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),s("h3",{attrs:{id:"application-scenarios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application-scenarios"}},[e._v("#")]),e._v(" Application scenarios")]),e._v(" "),s("ol",[s("li",[e._v("Users want to import only a few false data to verify the functionality of Doris system. The grammar of INSERT INTO VALUES is suitable at this time.")]),e._v(" "),s("li",[e._v("Users want to convert the data already in the Doris table into ETL and import it into a new Doris table, which is suitable for using INSERT INTO SELECT grammar.")]),e._v(" "),s("li",[e._v("Users can create an external table, such as MySQL external table mapping a table in MySQL system. Or create Broker external tables to map data files on HDFS. Then the data from the external table is imported into the Doris table for storage through the INSERT INTO SELECT grammar.")])]),e._v(" "),s("h3",{attrs:{id:"data-volume"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-volume"}},[e._v("#")]),e._v(" Data volume")]),e._v(" "),s("p",[e._v("Insert Into has no limitation on the amount of data, and large data imports can also be supported. However, Insert Into has a default timeout time, and the amount of imported data estimated by users is too large, so it is necessary to modify the system's Insert Into import timeout time.")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Import data volume = 36G or less than 3600s*10M/s\nAmong them, 10M/s is the maximum import speed limit. Users need to calculate the average import speed according to the current cluster situation to replace 10M/s in the formula.\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"complete-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#complete-examples"}},[e._v("#")]),e._v(" Complete examples")]),e._v(" "),s("p",[e._v("Users have a table store sales in the database sales. Users create a table called bj store sales in the database sales. Users want to import the data recorded in the store sales into the new table bj store sales. The amount of data imported is about 10G.")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("large sales scheme\n(id, total, user_id, sale_timestamp, region)\n\nOrder large sales schedule:\n(id, total, user_id, sale_timestamp)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("Cluster situation: The average import speed of current user cluster is about 5M/s")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Step1: Determine whether you want to modify the default timeout of Insert Into")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Calculate the approximate time of import\n10G / 5M /s = 2000s\n\nModify FE configuration\ninsert_load_default_timeout_second = 2000\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("Step2: Create Import Tasks")]),e._v(" "),s("p",[e._v("Since users want to ETL data from a table and import it into the target table, they should use the Insert in query\\stmt mode to import it.")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('INSERT INTO bj_store_sales SELECT id, total, user_id, sale_timestamp FROM store_sales where region = "bj";\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])]),e._v(" "),s("h2",{attrs:{id:"common-questions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#common-questions"}},[e._v("#")]),e._v(" Common Questions")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("View the wrong line")]),e._v(" "),s("p",[e._v("Because Insert Into can't control the error rate, it can only tolerate or ignore the error data completely by "),s("code",[e._v("enable_insert_strict")]),e._v(". So if "),s("code",[e._v("enable_insert_strict")]),e._v(" is set to true, Insert Into may fail. If "),s("code",[e._v("enable_insert_strict")]),e._v(" is set to false, then only some qualified data may be imported. However, in either case, Doris is currently unable to provide the ability to view substandard data rows. Therefore, the user cannot view the specific import error through the Insert Into statement.")]),e._v(" "),s("p",[e._v("The causes of errors are usually: source data column length exceeds destination data column length, column type mismatch, partition mismatch, column order mismatch, etc. When it's still impossible to check for problems. At present, it is only recommended that the SELECT command in the Insert Into statement be run to export the data to a file, and then import the file through Stream load to see the specific errors.")])])]),e._v(" "),s("h2",{attrs:{id:"more-help"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#more-help"}},[e._v("#")]),e._v(" more help")]),e._v(" "),s("p",[e._v("For more detailed syntax and best practices used by insert into, see "),s("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT.html"}},[e._v("insert")]),e._v(" command manual, you can also enter "),s("code",[e._v("HELP INSERT")]),e._v(" in the MySql client command line for more help information.")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);