(window.webpackJsonp=window.webpackJsonp||[]).push([[3535],{4165:function(t,s,a){"use strict";a.r(s);var e=a(15),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"远程udf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程udf"}},[t._v("#")]),t._v(" 远程UDF")]),t._v(" "),a("p",[t._v("Remote UDF Service 支持通过 RPC 的方式访问用户提供的 UDF Service，以实现用户自定义函数的执行。相比于 Native 的 UDF 实现，Remote UDF Service 有如下优势和限制：")]),t._v(" "),a("ol",[a("li",[t._v("优势")])]),t._v(" "),a("ul",[a("li",[t._v("跨语言：可以用 Protobuf 支持的各类语言编写 UDF Service。")]),t._v(" "),a("li",[t._v("安全：UDF 执行失败或崩溃，仅会影响 UDF Service 自身，而不会导致 Doris 进程崩溃。")]),t._v(" "),a("li",[t._v("灵活：UDF Service 中可以调用任意其他服务或程序库类，以满足更多样的业务需求。")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("使用限制")])]),t._v(" "),a("ul",[a("li",[t._v("性能：相比于 Native UDF，UDF Service 会带来额外的网络开销，因此性能会远低于 Native UDF。同时，UDF Service 自身的实现也会影响函数的执行效率，用户需要自行处理高并发、线程安全等问题。")]),t._v(" "),a("li",[t._v("单行模式和批处理模式：Doris 原先的基于行存的查询执行框架会对每一行数据执行一次 UDF RPC 调用，因此执行效率非常差，而在新的向量化执行框架下，会对每一批数据（默认2048行）执行一次 UDF RPC 调用，因此性能有明显提升。实际测试中，基于向量化和批处理方式的 Remote UDF 性能和基于行存的 Native UDF 性能相当，可供参考。")])]),t._v(" "),a("h2",{attrs:{id:"编写-udf-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写-udf-函数"}},[t._v("#")]),t._v(" 编写 UDF 函数")]),t._v(" "),a("p",[t._v("本小节主要介绍如何开发一个 Remote RPC service。在 "),a("code",[t._v("samples/doris-demo/udf-demo/")]),t._v(" 下提供了 Java 版本的示例，可供参考。")]),t._v(" "),a("h3",{attrs:{id:"拷贝-proto-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拷贝-proto-文件"}},[t._v("#")]),t._v(" 拷贝 proto 文件")]),t._v(" "),a("p",[t._v("拷贝 gensrc/proto/function_service.proto 和 gensrc/proto/types.proto 到 Rpc 服务中")]),t._v(" "),a("ul",[a("li",[t._v("function_service.proto\n"),a("ul",[a("li",[t._v("PFunctionCallRequest\n"),a("ul",[a("li",[t._v("function_name：函数名称，对应创建函数时指定的symbol")]),t._v(" "),a("li",[t._v("args：方法传递的参数")]),t._v(" "),a("li",[t._v("context：查询上下文信息")])])]),t._v(" "),a("li",[t._v("PFunctionCallResponse\n"),a("ul",[a("li",[t._v("result：结果")]),t._v(" "),a("li",[t._v("status：状态，0代表正常")])])]),t._v(" "),a("li",[t._v("PCheckFunctionRequest\n"),a("ul",[a("li",[t._v("function：函数相关信息")]),t._v(" "),a("li",[t._v("match_type：匹配类型")])])]),t._v(" "),a("li",[t._v("PCheckFunctionResponse\n"),a("ul",[a("li",[t._v("status：状态，0代表正常")])])])])])]),t._v(" "),a("h3",{attrs:{id:"生成接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成接口"}},[t._v("#")]),t._v(" 生成接口")]),t._v(" "),a("p",[t._v("通过 protoc 生成代码，具体参数通过 protoc -h 查看")]),t._v(" "),a("h3",{attrs:{id:"实现接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现接口"}},[t._v("#")]),t._v(" 实现接口")]),t._v(" "),a("p",[t._v("共需要实现以下三个方法")]),t._v(" "),a("ul",[a("li",[t._v("fnCall：用于编写计算逻辑")]),t._v(" "),a("li",[t._v("checkFn：用于创建 UDF 时校验，校验函数名/参数/返回值等是否合法")]),t._v(" "),a("li",[t._v("handShake：用于接口探活")])]),t._v(" "),a("h2",{attrs:{id:"创建-udf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-udf"}},[t._v("#")]),t._v(" 创建 UDF")]),t._v(" "),a("p",[t._v("目前暂不支持 UDAF 和 UDTF")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" \nname "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURNS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" rettype\nPROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("说明：")]),t._v(" "),a("ol",[a("li",[t._v("PROPERTIES中"),a("code",[t._v("symbol")]),t._v("表示的是 rpc 调用传递的方法名，这个参数是必须设定的。")]),t._v(" "),a("li",[t._v("PROPERTIES中"),a("code",[t._v("object_file")]),t._v("表示的 rpc 服务地址，目前支持单个地址和 brpc 兼容格式的集群地址，集群连接方式 参考 "),a("a",{attrs:{href:"https://github.com/apache/incubator-brpc/blob/master/docs/cn/client.md#%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E9%9B%86%E7%BE%A4",target:"_blank",rel:"noopener noreferrer"}},[t._v("格式说明"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("li",[t._v("PROPERTIES中"),a("code",[t._v("type")]),t._v("表示的 UDF 调用类型，默认为 Native，使用 Rpc UDF时传 RPC。")]),t._v(" "),a("li",[t._v("name: 一个function是要归属于某个DB的，name的形式为"),a("code",[t._v("dbName")]),t._v("."),a("code",[t._v("funcName")]),t._v("。当"),a("code",[t._v("dbName")]),t._v("没有明确指定的时候，就是使用当前session所在的db作为"),a("code",[t._v("dbName")]),t._v("。")])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" rpc_add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RETURNS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v(" PROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SYMBOL"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add_int"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OBJECT_FILE"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:9090"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TYPE"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RPC"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"使用-udf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-udf"}},[t._v("#")]),t._v(" 使用 UDF")]),t._v(" "),a("p",[t._v("用户使用 UDF 必须拥有对应数据库的 "),a("code",[t._v("SELECT")]),t._v(" 权限。")]),t._v(" "),a("p",[t._v("UDF 的使用与普通的函数方式一致，唯一的区别在于，内置函数的作用域是全局的，而 UDF 的作用域是 DB内部。当链接 session 位于数据内部时，直接使用 UDF 名字会在当前DB内部查找对应的 UDF。否则用户需要显示的指定 UDF 的数据库名字，例如 "),a("code",[t._v("dbName")]),t._v("."),a("code",[t._v("funcName")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"删除-udf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除-udf"}},[t._v("#")]),t._v(" 删除 UDF")]),t._v(" "),a("p",[t._v("当你不再需要 UDF 函数时，你可以通过下述命令来删除一个 UDF 函数, 可以参考 "),a("code",[t._v("DROP FUNCTION")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("samples/doris-demo/")]),t._v(" 目录中提供和 cpp/java/python 语言的rpc server 实现示例。具体使用方法见每个目录下的"),a("code",[t._v("README.md")])])])}),[],!1,null,null,null);s.default=n.exports}}]);