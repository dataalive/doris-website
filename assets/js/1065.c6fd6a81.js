(window.webpackJsonp=window.webpackJsonp||[]).push([[1065],{1687:function(s,a,t){"use strict";t.r(a);var e=t(15),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"create-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-file"}},[s._v("#")]),s._v(" CREATE-FILE")]),s._v(" "),t("h3",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),t("p",[s._v("CREATE FILE")]),s._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),t("p",[s._v("该语句用于创建并上传一个文件到 Doris 集群。\n该功能通常用于管理一些其他命令中需要使用到的文件，如证书、公钥私钥等等。")]),s._v(" "),t("p",[s._v("该命令只用 "),t("code",[s._v("admin")]),s._v(" 权限用户可以执行。\n某个文件都归属与某一个的 database。对 database 拥有访问权限的用户都可以使用该文件。")]),s._v(" "),t("p",[s._v("单个文件大小限制为 1MB。\n一个 Doris 集群最多上传 100 个文件。")]),s._v(" "),t("p",[s._v("语法：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FILE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file_name"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("properties"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("说明：")]),s._v(" "),t("ul",[t("li",[s._v("file_name:  自定义文件名。")]),s._v(" "),t("li",[s._v("database: 文件归属于某一个 db，如果没有指定，则使用当前 session 的 db。")]),s._v(" "),t("li",[s._v("properties 支持以下参数:\n"),t("ul",[t("li",[s._v("url：必须。指定一个文件的下载路径。当前仅支持无认证的 http 下载路径。命令执行成功后，文件将被保存在 doris 中，该 url 将不再需要。")]),s._v(" "),t("li",[s._v("catalog：必须。对文件的分类名，可以自定义。但在某些命令中，会查找指定 catalog 中的文件。比如例行导入中的，数据源为 kafka 时，会查找 catalog 名为 kafka 下的文件。")]),s._v(" "),t("li",[s._v("md5: 可选。文件的 md5。如果指定，会在下载文件后进行校验。")])])])]),s._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("创建文件 ca.pem ，分类为 kafka")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FILE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ca.pem"')]),s._v("\nPROPERTIES\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://test.bj.bcebos.com/kafka-key/ca.pem"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalog"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("创建文件 client.key，分类为 my_catalog")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FILE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client.key"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" my_database\nPROPERTIES\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://test.bj.bcebos.com/kafka-key/client.key"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalog"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my_catalog"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"md5"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b5bb901bf10f99205b39a46ac3557dd9"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("CREATE, FILE\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"best-practice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("该命令只有 amdin 权限用户可以执行。某个文件都归属与某一个的 database。对 database 拥有访问权限的用户都可以使用该文件。")])]),s._v(" "),t("li",[t("p",[s._v("文件大小和数量限制。")]),s._v(" "),t("p",[s._v("这个功能主要用于管理一些证书等小文件。因此单个文件大小限制为 1MB。一个 Doris 集群最多上传 100 个文件。")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);