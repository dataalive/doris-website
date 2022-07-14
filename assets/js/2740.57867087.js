(window.webpackJsonp=window.webpackJsonp||[]).push([[2740],{3370:function(t,a,e){"use strict";e.r(a);var l=e(15),s=Object(l.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"multi-load"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multi-load"}},[t._v("#")]),t._v(" MULTI LOAD")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("Syntax:\n    curl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_start?label=xxx\n    curl --location-trusted -u user:passwd -T data.file http://host:port/api/{db}/{table1}/_load?label=xxx\\&sub_label=yyy\n    curl --location-trusted -u user:passwd -T data.file http://host:port/api/{db}/{table2}/_load?label=xxx\\&sub_label=zzz\n    curl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_commit?label=xxx\n    curl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_desc?label=xxx\n\n'MULTI LOAD'在'MINI LOAD'的基础上，可以支持用户同时向多个表进行导入，具体的命令如上面所示\n'/api/{db}/_multi_start'    开始一个多表导入任务\n'/api/{db}/{table}/_load'   向一个导入任务添加一个要导入的表，与'MINI LOAD'的主要区别是，需要传入'sub_label'参数\n'/api/{db}/_multi_commit'   提交整个多表导入任务，后台开始进行处理\n'/api/{db}/_multi_abort'    放弃一个多表导入任务\n'/api/{db}/_multi_desc'     可以展示某个多表导入任务已经提交的作业数\n\nHTTP协议相关说明\n    权限认证            当前 Doris 使用http的Basic方式权限认证。所以在导入的时候需要指定用户名密码\n                        这种方式是明文传递密码的，鉴于我们当前都是内网环境。。。\n\n    Expect              Doris 需要发送过来的http请求，需要有'Expect'头部信息，内容为'100-continue'\n                        为什么呢？因为我们需要将请求进行redirect，那么必须在传输数据内容之前，\n                        这样可以避免造成数据的多次传输，从而提高效率。\n\n    Content-Length      Doris 需要在发送请求是带有'Content-Length'这个头部信息。如果发送的内容比\n                        'Content-Length'要少，那么Palo认为传输出现问题，则提交此次任务失败。\n                        NOTE: 如果，发送的数据比'Content-Length'要多，那么 Doris 只读取'Content-Length'\n                        长度的内容，并进行导入\n\n参数说明：\n    user:               用户如果是在default_cluster中的，user即为user_name。否则为user_name@cluster_name。\n\n    label:              用于指定这一批次导入的label号，用于后期进行作业状态查询等。\n                        这个参数是必须传入的。\n\n    sub_label:          用于指定一个多表导入任务内部的子版本号。对于多表导入的load， 这个参数是必须传入的。\n\n    columns:            用于描述导入文件中对应的列名字。\n                        如果不传入，那么认为文件中的列顺序与建表的顺序一致，\n                        指定的方式为逗号分隔，例如：columns=k1,k2,k3,k4\n\n    column_separator:   用于指定列与列之间的分隔符，默认的为'\\t'\n                        NOTE: 需要进行url编码，譬如需要指定'\\t'为分隔符，\n                        那么应该传入'column_separator=%09'\n\n    max_filter_ratio:   用于指定允许过滤不规范数据的最大比例，默认是0，不允许过滤\n                        自定义指定应该如下：'max_filter_ratio=0.2'，含义是允许20%的错误率\n                        在'_multi_start'时传入有效果\n\nNOTE: \n    1. 此种导入方式当前是在一台机器上完成导入工作，因而不宜进行数据量较大的导入工作。\n    建议导入数据量不要超过1GB\n\n    2. 当前无法使用`curl -T \"{file1, file2}\"`这样的方式提交多个文件，因为curl是将其拆成多个\n    请求发送的，多个请求不能共用一个label号，所以无法使用\n\n    3. 支持类似streaming的方式使用curl来向 Doris 中导入数据，但是，只有等这个streaming结束后 Doris\n    才会发生真实的导入行为，这中方式数据量也不能过大。\n")])])]),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("1. 将本地文件'testData1'中的数据导入到数据库'testDb'中'testTbl1'的表，并且\n把'testData2'的数据导入到'testDb'中的表'testTbl2'(用户是defalut_cluster中的)\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\n    curl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123\\&sub_label=1\n    curl --location-trusted -u root -T testData2 http://host:port/api/testDb/testTbl2/_load?label=123\\&sub_label=2\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_commit?label=123\n\n2. 多表导入中途放弃(用户是defalut_cluster中的)\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\n    curl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123\\&sub_label=1\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_abort?label=123\n\n3. 多表导入查看已经提交多少内容(用户是defalut_cluster中的)\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\n    curl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123\\&sub_label=1\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_desc?label=123\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("MULTI, MINI, LOAD\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);