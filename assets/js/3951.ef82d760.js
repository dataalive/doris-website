(window.webpackJsonp=window.webpackJsonp||[]).push([[3951],{4581:function(a,s,t){"use strict";t.r(s);var e=t(15),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"验证-apache-发布版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证-apache-发布版本"}},[a._v("#")]),a._v(" 验证 Apache 发布版本")]),a._v(" "),t("p",[a._v("该验证步骤可用于发版投票时的验证，也可以用于对已发布版本的验证。")]),a._v(" "),t("p",[a._v("可以按照以下步骤进行验证：")]),a._v(" "),t("ol",[t("li",[a._v("[ ] 下载链接是否合法。")]),a._v(" "),t("li",[a._v("[ ] 校验值和 PGP 签名是否合法。")]),a._v(" "),t("li",[a._v("[ ] 是否包含 DISCLAIMER 或 DISCLAIMER-WIP 文件。")]),a._v(" "),t("li",[a._v("[ ] 代码是否和当前发布版本相匹配。")]),a._v(" "),t("li",[a._v("[ ] LICENSE 和 NOTICE 文件是否正确。")]),a._v(" "),t("li",[a._v("[ ] 所有文件都携带必要的协议说明。")]),a._v(" "),t("li",[a._v("[ ] 在源码包中不包含已经编译好的内容。")]),a._v(" "),t("li",[a._v("[ ] 编译是否能够顺利执行。")])]),a._v(" "),t("p",[a._v("这里我们以 Doris Core 版本的验证为例。其他组件注意修改对应名称。")]),a._v(" "),t("h2",{attrs:{id:"_1-下载源码包、签名文件、校验值文件和-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载源码包、签名文件、校验值文件和-keys"}},[a._v("#")]),a._v(" 1. 下载源码包、签名文件、校验值文件和 KEYS")]),a._v(" "),t("p",[a._v("下载所有相关文件, 以 a.b.c-incubating 为示例:")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://www.apache.org/dyn/mirrors/mirrors.cgi?action"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("download"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("filename")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/incubator/doris/a.b.c-incubating/apache-doris-a.b.c-incubating-src.tar.gz\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://www.apache.org/dist/incubator/doris/a.b.c-incubating/apache-doris-a.b.c-incubating-src.tar.gz.sha512\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://www.apache.org/dist/incubator/doris/a.b.c-incubating/apache-doris-a.b.c-incubating-src.tar.gz.asc\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://downloads.apache.org/incubator/doris/KEYS\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("blockquote",[t("p",[a._v("如果是投票验证，则需从邮件中提供的 svn 地址获取相关文件。")])]),a._v(" "),t("h2",{attrs:{id:"_2-检查签名和校验值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-检查签名和校验值"}},[a._v("#")]),a._v(" 2. 检查签名和校验值")]),a._v(" "),t("p",[a._v("推荐使用 GunPG，可以通过以下命令安装：")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("CentOS: yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" gnupg\nUbuntu: "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" gnupg\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("这里以 Doris 主代码 release 为例。其他 release 类似。")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("gpg --import KEYS\ngpg --verify apache-doris-a.b.c-incubating-src.tar.gz.asc apache-doris-a.b.c-incubating-src.tar.gz\nsha512sum --check apache-doris-a.b.c-incubating-src.tar.gz.sha512\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"_3-验证源码协议头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-验证源码协议头"}},[a._v("#")]),a._v(" 3. 验证源码协议头")]),a._v(" "),t("p",[a._v("这里我们使用 "),t("a",{attrs:{href:"https://github.com/apache/skywalking-eyes",target:"_blank",rel:"noopener noreferrer"}},[a._v("skywalking-eyes"),t("OutboundLink")],1),a._v(" 进行协议验证。")]),a._v(" "),t("p",[a._v("进入源码根目录并执行：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo docker run -it --rm -v $(pwd):/github/workspace apache/skywalking-eyes header check\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("运行结果如下：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("INFO GITHUB_TOKEN is not set, license-eye won't comment on the pull request\nINFO Loading configuraftion from file: .licenserc.yaml\nINFO Totally checked 5611 files, valid: 3926, invalid: 0, ignored: 1685, fixed: 0\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("如果 invalid 为 0，则表示验证通过。")]),a._v(" "),t("h2",{attrs:{id:"_4-验证编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-验证编译"}},[a._v("#")]),a._v(" 4. 验证编译")]),a._v(" "),t("p",[a._v("请参阅各组件的编译文档验证编译。")]),a._v(" "),t("ul",[t("li",[a._v("Doris 主代码编译，请参阅 "),t("RouterLink",{attrs:{to:"/zh-CN/install/source-install/compilation.html"}},[a._v("编译文档")])],1),a._v(" "),t("li",[a._v("Flink Doris Connector 编译，请参阅 "),t("RouterLink",{attrs:{to:"/zh-CN/ecosystem/flink-doris-connector.html"}},[a._v("编译文档")])],1),a._v(" "),t("li",[a._v("Spark Doris Connector 编译，请参阅 "),t("RouterLink",{attrs:{to:"/zh-CN/ecosystem/spark-doris-connector.html"}},[a._v("编译文档")])],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);