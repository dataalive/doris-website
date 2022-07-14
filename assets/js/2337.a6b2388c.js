(window.webpackJsonp=window.webpackJsonp||[]).push([[2337],{2967:function(s,a,n){"use strict";n.r(a);var e=n(15),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"s3-load"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#s3-load"}},[s._v("#")]),s._v(" S3 Load")]),s._v(" "),n("p",[s._v("从0.14 版本开始，Doris 支持通过S3协议直接从支持S3协议的在线存储系统导入数据。")]),s._v(" "),n("p",[s._v("本文档主要介绍如何导入 AWS S3 中存储的数据。也支持导入其他支持S3协议的对象存储系统导入，如果百度云的BOS，阿里云的OSS和腾讯云的COS等、")]),s._v(" "),n("h2",{attrs:{id:"适用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[s._v("#")]),s._v(" 适用场景")]),s._v(" "),n("ul",[n("li",[s._v("源数据在 支持S3协议的存储系统中，如 S3,BOS 等。")]),s._v(" "),n("li",[s._v("数据量在 几十到百GB 级别。")])]),s._v(" "),n("h2",{attrs:{id:"准备工作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),n("ol",[n("li",[s._v("准本AK 和 SK\n首先需要找到或者重新生成 AWS "),n("code",[s._v("Access keys")]),s._v("，可以在AWS console 的 "),n("code",[s._v("My Security Credentials")]),s._v(" 找到生成方式， 如下图所示：\n"),n("a",{attrs:{href:"/images/aws_ak_sk.png"}},[s._v("AK_SK")]),s._v("\n选择 "),n("code",[s._v("Create New Access Key")]),s._v(" 注意保存生成 AK和SK.")]),s._v(" "),n("li",[s._v("准备 REGION 和 ENDPOINT\nREGION 可以在创建桶的时候选择也可以在桶列表中查看到。ENDPOINT 可以通过如下页面通过REGION查到 "),n("a",{attrs:{href:"https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_region",target:"_blank",rel:"noopener noreferrer"}},[s._v("AWS 文档"),n("OutboundLink")],1)])]),s._v(" "),n("p",[s._v("其他云存储系统可以相应的文档找到与S3兼容的相关信息")]),s._v(" "),n("h2",{attrs:{id:"开始导入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开始导入"}},[s._v("#")]),s._v(" 开始导入")]),s._v(" "),n("p",[s._v("导入方式和Broker Load 基本相同，只需要将 "),n("code",[s._v("WITH BROKER broker_name ()")]),s._v(" 语句替换成如下部分")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("完整示例如下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    LOAD LABEL example_db.exmpale_label_1\n    (\n        DATA INFILE("s3://your_bucket_name/your_file.txt")\n        INTO TABLE load_test\n        COLUMNS TERMINATED BY ","\n    )\n    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n    PROPERTIES\n    (\n        "timeout" = "3600"\n    );\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h2",{attrs:{id:"常见问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),n("p",[s._v("S3 SDK 默认使用 virtual-hosted style 方式。但某些对象存储系统可能没开启或没支持 virtual-hosted style 方式的访问，此时我们可以添加 "),n("code",[s._v("use_path_style")]),s._v(" 参数来强制使用 path style 方式：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('  WITH S3\n  (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION",\n        "use_path_style" = "true"\n  )\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);