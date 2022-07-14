(window.webpackJsonp=window.webpackJsonp||[]).push([[2728],{3358:function(n,t,e){"use strict";e.r(t);var a=e(15),s=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"create-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-function"}},[n._v("#")]),n._v(" CREATE FUNCTION")]),n._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[n._v("#")]),n._v(" Description")]),n._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[n._v("#")]),n._v(" Syntax")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('CREATE [AGGREGATE] [ALIAS] FUNCTION function_name\n    (arg_type [, ...])\n    [RETURNS ret_type]\n    [INTERMEDIATE inter_type]\n    [WITH PARAMETER(param [,...]) AS origin_function]\n    [PROPERTIES ("key" = "value" [, ...]) ]\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br")])]),e("h3",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[n._v("#")]),n._v(" Parameters")]),n._v(" "),e("blockquote",[e("p",[e("code",[n._v("AGGREGATE")]),n._v(": 如果有此项，表示的是创建的函数是一个聚合函数。")]),n._v(" "),e("p",[e("code",[n._v("ALIAS")]),n._v("：如果有此项，表示的是创建的函数是一个别名函数。")]),n._v(" "),e("p",[n._v("如果没有上述两项，表示创建的函数是一个标量函数")]),n._v(" "),e("p",[e("code",[n._v("function_name")]),n._v(": 要创建函数的名字, 可以包含数据库的名字。比如："),e("code",[n._v("db1.my_func")]),n._v("。")]),n._v(" "),e("p",[e("code",[n._v("arg_type")]),n._v(": 函数的参数类型，与建表时定义的类型一致。变长参数时可以使用"),e("code",[n._v(", ...")]),n._v("来表示，如果是变长类型，那么变长部分参数的类型与最后一个非变长参数类型一致。\n"),e("strong",[n._v("注意")]),n._v("："),e("code",[n._v("ALIAS FUNCTION")]),n._v(" 不支持变长参数，且至少有一个参数。")]),n._v(" "),e("p",[e("code",[n._v("ret_type")]),n._v(": 对创建新的函数来说，是必填项。如果是给已有函数取别名则可不用填写该参数。")]),n._v(" "),e("p",[e("code",[n._v("inter_type")]),n._v(": 用于表示聚合函数中间阶段的数据类型。")]),n._v(" "),e("p",[e("code",[n._v("param")]),n._v("：用于表示别名函数的参数，至少包含一个。")]),n._v(" "),e("p",[e("code",[n._v("origin_function")]),n._v("：用于表示别名函数对应的原始函数。")]),n._v(" "),e("p",[e("code",[n._v("properties")]),n._v(": 用于设定聚合函数和标量函数相关属性，能够设置的属性包括")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('      "object_file": 自定义函数动态库的URL路径，当前只支持 HTTP/HTTPS 协议，此路径需要在函数整个生命周期内保持有效。此选项为必选项\n\n      "symbol": 标量函数的函数签名，用于从动态库里面找到函数入口。此选项对于标量函数是必选项\n\n      "init_fn": 聚合函数的初始化函数签名。对于聚合函数是必选项\n\n      "update_fn": 聚合函数的更新函数签名。对于聚合函数是必选项\n      \n      "merge_fn": 聚合函数的合并函数签名。对于聚合函数是必选项\n      \n      "serialize_fn": 聚合函数的序列化函数签名。对于聚合函数是可选项，如果没有指定，那么将会使用默认的序列化函数\n      \n      "finalize_fn": 聚合函数获取最后结果的函数签名。对于聚合函数是可选项，如果没有指定，将会使用默认的获取结果函数\n\n      "md5": 函数动态链接库的MD5值，用于校验下载的内容是否正确。此选项是可选项\n\n      "prepare_fn": 自定义函数的prepare函数的函数签名，用于从动态库里面找到prepare函数入口。此选项对于自定义函数是可选项\n\n      "close_fn": 自定义函数的close函数的函数签名，用于从动态库里面找到close函数入口。此选项对于自定义函数是可选项\n')])])])]),n._v(" "),e("p",[n._v("此语句创建一个自定义函数。执行此命令需要用户拥有 "),e("code",[n._v("ADMIN")]),n._v(" 权限。")]),n._v(" "),e("p",[n._v("如果 "),e("code",[n._v("function_name")]),n._v(" 中包含了数据库名字，那么这个自定义函数会创建在对应的数据库中，否则这个函数将会创建在当前会话所在的数据库。新函数的名字与参数不能够与当前命名空间中已存在的函数相同，否则会创建失败。但是只有名字相同，参数不同是能够创建成功的。")]),n._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[n._v("#")]),n._v(" example")]),n._v(" "),e("ol",[e("li",[e("p",[n._v("创建一个自定义标量函数")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('CREATE FUNCTION my_add(INT, INT) RETURNS INT PROPERTIES (\n\t"symbol" = \t"_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_",\n\t"object_file" = "http://host:port/libmyadd.so"\n);\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br")])])]),n._v(" "),e("li",[e("p",[n._v("创建一个有prepare/close函数的自定义标量函数")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('CREATE FUNCTION my_add(INT, INT) RETURNS INT PROPERTIES (\n\t"symbol" = \t"_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_",\n\t"prepare_fn" = "_ZN9doris_udf14AddUdf_prepareEPNS_15FunctionContextENS0_18FunctionStateScopeE",\n\t"close_fn" = "_ZN9doris_udf12AddUdf_closeEPNS_15FunctionContextENS0_18FunctionStateScopeE",\n\t"object_file" = "http://host:port/libmyadd.so"\n);\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br")])])]),n._v(" "),e("li",[e("p",[n._v("创建一个自定义聚合函数")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('CREATE AGGREGATE FUNCTION my_count (BIGINT) RETURNS BIGINT PROPERTIES (\n    "init_fn"="_ZN9doris_udf9CountInitEPNS_15FunctionContextEPNS_9BigIntValE",\n    "update_fn"="_ZN9doris_udf11CountUpdateEPNS_15FunctionContextERKNS_6IntValEPNS_9BigIntValE",\n    "merge_fn"="_ZN9doris_udf10CountMergeEPNS_15FunctionContextERKNS_9BigIntValEPS2_",\n    "finalize_fn"="_ZN9doris_udf13CountFinalizeEPNS_15FunctionContextERKNS_9BigIntValE",\n    "object_file"="http://host:port/libudasample.so"\n);\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br")])])]),n._v(" "),e("li",[e("p",[n._v("创建一个变长参数的标量函数")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('CREATE FUNCTION strconcat(varchar, ...) RETURNS varchar properties (\n    "symbol" = "_ZN9doris_udf6StrConcatUdfEPNS_15FunctionContextERKNS_6IntValES4_",\n    "object_file" = "http://host:port/libmyStrConcat.so"\n);\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br")])])]),n._v(" "),e("li",[e("p",[n._v("创建一个自定义别名函数")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("CREATE ALIAS FUNCTION id_masking(INT) WITH PARAMETER(id) \n    AS CONCAT(LEFT(id, 3), '****', RIGHT(id, 4));\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])])])]),n._v(" "),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[n._v("#")]),n._v(" keyword")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("CREATE,FUNCTION\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);