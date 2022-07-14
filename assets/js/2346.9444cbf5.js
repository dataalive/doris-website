(window.webpackJsonp=window.webpackJsonp||[]).push([[2346],{2975:function(e,_,v){"use strict";v.r(_);var a=v(15),t=Object(a.a)({},(function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"元数据运维"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#元数据运维"}},[e._v("#")]),e._v(" 元数据运维")]),e._v(" "),v("p",[e._v("本文档主要介绍在实际生产环境中，如何对 Doris 的元数据进行管理。包括 FE 节点建议的部署方式、一些常用的操作方法、以及常见错误的解决方法。")]),e._v(" "),v("p",[e._v("在阅读本文当前，请先阅读 "),v("RouterLink",{attrs:{to:"/zh-CN/0.15/internal/metadata-design.html"}},[e._v("Doris 元数据设计文档")]),e._v(" 了解 Doris 元数据的工作原理。")],1),e._v(" "),v("h2",{attrs:{id:"重要提示"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重要提示"}},[e._v("#")]),e._v(" 重要提示")]),e._v(" "),v("ul",[v("li",[e._v("当前元数据的设计是无法向后兼容的。即如果新版本有新增的元数据结构变动（可以查看 FE 代码中的 "),v("code",[e._v("FeMetaVersion.java")]),e._v(" 文件中是否有新增的 VERSION），那么在升级到新版本后，通常是无法再回滚到旧版本的。所以，在升级 FE 之前，请务必按照 "),v("RouterLink",{attrs:{to:"/zh-CN/0.15/installing/upgrade.html"}},[e._v("升级文档")]),e._v(" 中的操作，测试元数据兼容性。")],1)]),e._v(" "),v("h2",{attrs:{id:"元数据目录结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#元数据目录结构"}},[e._v("#")]),e._v(" 元数据目录结构")]),e._v(" "),v("p",[e._v("我们假设在 fe.conf 中指定的 "),v("code",[e._v("meta_dir")]),e._v(" 的路径为 "),v("code",[e._v("/path/to/palo-meta")]),e._v("。那么一个正常运行中的 Doris 集群，元数据的目录结构应该如下：")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("/path/to/palo-meta/\n            |-- bdb/\n            |   |-- 00000000.jdb\n            |   |-- je.config.csv\n            |   |-- je.info.0\n            |   |-- je.info.0.lck\n            |   |-- je.lck\n            |   `-- je.stat.csv\n            `-- image/\n                |-- ROLE\n                |-- VERSION\n                `-- image.xxxx\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br"),v("span",{staticClass:"line-number"},[e._v("5")]),v("br"),v("span",{staticClass:"line-number"},[e._v("6")]),v("br"),v("span",{staticClass:"line-number"},[e._v("7")]),v("br"),v("span",{staticClass:"line-number"},[e._v("8")]),v("br"),v("span",{staticClass:"line-number"},[e._v("9")]),v("br"),v("span",{staticClass:"line-number"},[e._v("10")]),v("br"),v("span",{staticClass:"line-number"},[e._v("11")]),v("br"),v("span",{staticClass:"line-number"},[e._v("12")]),v("br")])]),v("ol",[v("li",[v("p",[e._v("bdb 目录")]),e._v(" "),v("p",[e._v("我们将 "),v("a",{attrs:{href:"https://www.oracle.com/technetwork/database/berkeleydb/overview/index-093405.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("bdbje"),v("OutboundLink")],1),e._v(" 作为一个分布式的 kv 系统，存放元数据的 journal。这个 bdb 目录相当于 bdbje 的 “数据目录”。")]),e._v(" "),v("p",[e._v("其中 "),v("code",[e._v(".jdb")]),e._v(" 后缀的是 bdbje 的数据文件。这些数据文件会随着元数据 journal 的不断增多而越来越多。当 Doris 定期做完 image 后，旧的日志就会被删除。所以正常情况下，这些数据文件的总大小从几 MB 到几 GB 不等（取决于使用 Doris 的方式，如导入频率等）。当数据文件的总大小大于 10GB，则可能需要怀疑是否是因为 image 没有成功，或者分发 image 失败导致的历史 journal 一直无法删除。")]),e._v(" "),v("p",[v("code",[e._v("je.info.0")]),e._v(" 是 bdbje 的运行日志。这个日志中的时间是 UTC+0 时区的。我们可能在后面的某个版本中修复这个问题。通过这个日志，也可以查看一些 bdbje 的运行情况。")])]),e._v(" "),v("li",[v("p",[e._v("image 目录")]),e._v(" "),v("p",[e._v("image 目录用于存放 Doris 定期生成的元数据镜像文件。通常情况下，你会看到有一个 "),v("code",[e._v("image.xxxxx")]),e._v(" 的镜像文件。其中 "),v("code",[e._v("xxxxx")]),e._v(" 是一个数字。这个数字表示该镜像包含 "),v("code",[e._v("xxxxx")]),e._v(" 号之前的所有元数据 journal。而这个文件的生成时间（通过 "),v("code",[e._v("ls -al")]),e._v(" 查看即可）通常就是镜像的生成时间。")]),e._v(" "),v("p",[e._v("你也可能会看到一个 "),v("code",[e._v("image.ckpt")]),e._v(" 文件。这是一个正在生成的元数据镜像。通过 "),v("code",[e._v("du -sh")]),e._v(" 命令应该可以看到这个文件大小在不断变大，说明镜像内容正在写入这个文件。当镜像写完后，会自动重名为一个新的 "),v("code",[e._v("image.xxxxx")]),e._v(" 并替换旧的 image 文件。")]),e._v(" "),v("p",[e._v("只有角色为 Master 的 FE 才会主动定期生成 image 文件。每次生成完后，都会推送给其他非 Master 角色的 FE。当确认其他所有 FE 都收到这个 image 后，Master FE 会删除 bdbje 中旧的元数据 journal。所以，如果 image 生成失败，或者 image 推送给其他 FE 失败时，都会导致 bdbje 中的数据不断累积。")]),e._v(" "),v("p",[v("code",[e._v("ROLE")]),e._v(" 文件记录了 FE 的类型（FOLLOWER 或 OBSERVER），是一个文本文件。")]),e._v(" "),v("p",[v("code",[e._v("VERSION")]),e._v(" 文件记录了这个 Doris 集群的 cluster id，以及用于各个节点之间访问认证的 token，也是一个文本文件。")]),e._v(" "),v("p",[v("code",[e._v("ROLE")]),e._v(" 文件和 "),v("code",[e._v("VERSION")]),e._v(" 文件只可能同时存在，或同时不存在（如第一次启动时）。")])])]),e._v(" "),v("h2",{attrs:{id:"基本操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[e._v("#")]),e._v(" 基本操作")]),e._v(" "),v("h3",{attrs:{id:"启动单节点-fe"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#启动单节点-fe"}},[e._v("#")]),e._v(" 启动单节点 FE")]),e._v(" "),v("p",[e._v("单节点 FE 是最基本的一种部署方式。一个完整的 Doris 集群，至少需要一个 FE 节点。当只有一个 FE 节点时，这个节点的类型为 Follower，角色为 Master。")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("第一次启动")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("假设在 fe.conf 中指定的 "),v("code",[e._v("meta_dir")]),e._v(" 的路径为 "),v("code",[e._v("/path/to/palo-meta")]),e._v("。")])]),e._v(" "),v("li",[v("p",[e._v("确保 "),v("code",[e._v("/path/to/palo-meta")]),e._v(" 已存在，权限正确，且目录为空。")])]),e._v(" "),v("li",[v("p",[e._v("直接通过 "),v("code",[e._v("sh bin/start_fe.sh")]),e._v(" 即可启动。")])]),e._v(" "),v("li",[v("p",[e._v("启动后，你应该可以在 fe.log 中看到如下日志：")]),e._v(" "),v("ul",[v("li",[e._v("Palo FE starting...")]),e._v(" "),v("li",[e._v("image does not exist: /path/to/palo-meta/image/image.0")]),e._v(" "),v("li",[e._v("transfer from INIT to UNKNOWN")]),e._v(" "),v("li",[e._v("transfer from UNKNOWN to MASTER")]),e._v(" "),v("li",[e._v("the very first time to open bdb, dbname is 1")]),e._v(" "),v("li",[e._v("start fencing, epoch number is 1")]),e._v(" "),v("li",[e._v("finish replay in xxx msec")]),e._v(" "),v("li",[e._v("QE service start")]),e._v(" "),v("li",[e._v("thrift server started")])]),e._v(" "),v("p",[e._v("以上日志不一定严格按照这个顺序，但基本类似。")])]),e._v(" "),v("li",[v("p",[e._v("单节点 FE 的第一次启动通常不会遇到问题。如果你没有看到以上日志，一般来说是没有仔细按照文档步骤操作，请仔细阅读相关 wiki。")])])])]),e._v(" "),v("li",[v("p",[e._v("重启")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("直接使用 "),v("code",[e._v("sh bin/start_fe.sh")]),e._v(" 可以重新启动已经停止的 FE 节点。")])]),e._v(" "),v("li",[v("p",[e._v("重启后，你应该可以在 fe.log 中看到如下日志：")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("Palo FE starting...")])]),e._v(" "),v("li",[v("p",[e._v("finished to get cluster id: xxxx, role: FOLLOWER and node name: xxxx")])]),e._v(" "),v("li",[v("p",[e._v("如果重启前还没有 image 产生，则会看到：")]),e._v(" "),v("ul",[v("li",[e._v("image does not exist: /path/to/palo-meta/image/image.0")])])]),e._v(" "),v("li",[v("p",[e._v("如果重启前有 image 产生，则会看到：")]),e._v(" "),v("ul",[v("li",[e._v("start load image from /path/to/palo-meta/image/image.xxx. is ckpt: false")]),e._v(" "),v("li",[e._v("finished load image in xxx ms")])])]),e._v(" "),v("li",[v("p",[e._v("transfer from INIT to UNKNOWN")])]),e._v(" "),v("li",[v("p",[e._v("replayed journal id is xxxx, replay to journal id is yyyy")])]),e._v(" "),v("li",[v("p",[e._v("transfer from UNKNOWN to MASTER")])]),e._v(" "),v("li",[v("p",[e._v("finish replay in xxx msec")])]),e._v(" "),v("li",[v("p",[e._v("master finish replay journal, can write now.")])]),e._v(" "),v("li",[v("p",[e._v("begin to generate new image: image.xxxx")])]),e._v(" "),v("li",[v("p",[e._v("start save image to /path/to/palo-meta/image/image.ckpt. is ckpt: true")])]),e._v(" "),v("li",[v("p",[e._v("finished save image /path/to/palo-meta/image/image.ckpt in xxx ms. checksum is xxxx")])]),e._v(" "),v("li",[v("p",[e._v("push image.xxx to other nodes. totally xx nodes, push successed xx nodes")])]),e._v(" "),v("li",[v("p",[e._v("QE service start")])]),e._v(" "),v("li",[v("p",[e._v("thrift server started")])])]),e._v(" "),v("p",[e._v("以上日志不一定严格按照这个顺序，但基本类似。")])])])]),e._v(" "),v("li",[v("p",[e._v("常见问题")]),e._v(" "),v("p",[e._v("对于单节点 FE 的部署，启停通常不会遇到什么问题。如果有问题，请先参照相关 wiki，仔细核对你的操作步骤。")])])]),e._v(" "),v("h3",{attrs:{id:"添加-fe"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#添加-fe"}},[e._v("#")]),e._v(" 添加 FE")]),e._v(" "),v("p",[e._v("添加 FE 流程在 "),v("a",{attrs:{href:"https://github.com/apache/incubator-doris/wiki/Doris-Deploy-%26-Upgrade",target:"_blank",rel:"noopener noreferrer"}},[e._v("部署和升级文档"),v("OutboundLink")],1),e._v(" 有详细介绍，不再赘述。这里主要说明一些注意事项，以及常见问题。")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("注意事项")]),e._v(" "),v("ul",[v("li",[e._v("在添加新的 FE 之前，一定先确保当前的 Master FE 运行正常（连接是否正常，JVM 是否正常，image 生成是否正常，bdbje 数据目录是否过大等等）")]),e._v(" "),v("li",[e._v("第一次启动新的 FE，一定确保添加了 "),v("code",[e._v("-helper")]),e._v(" 参数指向 Master FE。再次启动时可不用添加 "),v("code",[e._v("-helper")]),e._v("。（如果指定了 "),v("code",[e._v("-helper")]),e._v("，FE 会直接询问 helper 节点自己的角色，如果没有指定，FE会尝试从 "),v("code",[e._v("palo-meta/image/")]),e._v(" 目录下的 "),v("code",[e._v("ROLE")]),e._v(" 和 "),v("code",[e._v("VERSION")]),e._v(" 文件中获取信息）。")]),e._v(" "),v("li",[e._v("第一次启动新的 FE，一定确保这个 FE 的 "),v("code",[e._v("meta_dir")]),e._v(" 已经创建、权限正确且为空。")]),e._v(" "),v("li",[e._v("启动新的 FE，和执行 "),v("code",[e._v("ALTER SYSTEM ADD FOLLOWER/OBSERVER")]),e._v(" 语句在元数据添加 FE，这两个操作的顺序没有先后要求。如果先启动了新的 FE，而没有执行语句，则新的 FE 日志中会一直滚动 "),v("code",[e._v("current node is not added to the group. please add it first.")]),e._v(" 字样。当执行语句后，则会进入正常流程。")]),e._v(" "),v("li",[e._v("请确保前一个 FE 添加成功后，再添加下一个 FE。")]),e._v(" "),v("li",[e._v("建议直接连接到 MASTER FE 执行 "),v("code",[e._v("ALTER SYSTEM ADD FOLLOWER/OBSERVER")]),e._v(" 语句。")])])]),e._v(" "),v("li",[v("p",[e._v("常见问题")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("this node is DETACHED")]),e._v(" "),v("p",[e._v("当第一次启动一个待添加的 FE 时，如果 Master FE 上的 palo-meta/bdb 中的数据很大，则可能在待添加的 FE 日志中看到 "),v("code",[e._v("this node is DETACHED.")]),e._v(" 字样。这时，bdbje 正在复制数据，你可以看到待添加的 FE 的 "),v("code",[e._v("bdb/")]),e._v(" 目录正在变大。这个过程通常会在数分钟不等（取决于 bdbje 中的数据量）。之后，fe.log 中可能会有一些 bdbje 相关的错误堆栈信息。如果最终日志中显示 "),v("code",[e._v("QE service start")]),e._v(" 和 "),v("code",[e._v("thrift server started")]),e._v("，则通常表示启动成功。可以通过 mysql-client 连接这个 FE 尝试操作。如果没有出现这些字样，则可能是 bdbje 复制日志超时等问题。这时，直接再次重启这个 FE，通常即可解决问题。")])]),e._v(" "),v("li",[v("p",[e._v("各种原因导致添加失败")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("如果添加的是 OBSERVER，因为 OBSERVER 类型的 FE 不参与元数据的多数写，理论上可以随意启停。因此，对于添加 OBSERVER 失败的情况。可以直接杀死 OBSERVER FE 的进程，清空 OBSERVER 的元数据目录后，重新进行一遍添加流程。")])]),e._v(" "),v("li",[v("p",[e._v("如果添加的是 FOLLOWER，因为 FOLLOWER 是参与元数据多数写的。所以有可能FOLLOWER 已经加入 bdbje 选举组内。如果这时只有两个 FOLLOWER 节点（包括 MASTER），那么停掉一个 FE，可能导致另一个 FE 也因无法进行多数写而退出。此时，我们应该先通过 "),v("code",[e._v("ALTER SYSTEM DROP FOLLOWER")]),e._v(" 命令，从元数据中删除新添加的 FOLLOWER 节点，然后再杀死 FOLLOWER 进程，清空元数据，重新进行一遍添加流程。")])])])])])])]),e._v(" "),v("h3",{attrs:{id:"删除-fe"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#删除-fe"}},[e._v("#")]),e._v(" 删除 FE")]),e._v(" "),v("p",[e._v("通过 "),v("code",[e._v("ALTER SYSTEM DROP FOLLOWER/OBSERVER")]),e._v(" 命令即可删除对应类型的 FE。以下有几点注意事项：")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("对于 OBSERVER 类型的 FE，直接 DROP 即可，无风险。")])]),e._v(" "),v("li",[v("p",[e._v("对于 FOLLOWER 类型的 FE。首先，应保证在有奇数个 FOLLOWER 的情况下（3个或以上），开始删除操作。")]),e._v(" "),v("ol",[v("li",[e._v("如果删除非 MASTER 角色的 FE，建议连接到 MASTER FE，执行 DROP 命令，再杀死进程即可。")]),e._v(" "),v("li",[e._v("如果要删除 MASTER FE，先确认有奇数个 FOLLOWER FE 并且运行正常。然后先杀死 MASTER FE 的进程。这时会有某一个 FE 被选举为 MASTER。在确认剩下的 FE 运行正常后，连接到新的 MASTER FE，执行 DROP 命令删除之前老的 MASTER FE 即可。")])])])]),e._v(" "),v("h2",{attrs:{id:"高级操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#高级操作"}},[e._v("#")]),e._v(" 高级操作")]),e._v(" "),v("h3",{attrs:{id:"故障恢复"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#故障恢复"}},[e._v("#")]),e._v(" 故障恢复")]),e._v(" "),v("p",[e._v("FE 有可能因为某些原因出现无法启动 bdbje、FE 之间无法同步等问题。现象包括无法进行元数据写操作、没有 MASTER 等等。这时，我们需要手动操作来恢复 FE。手动恢复 FE 的大致原理，是先通过当前 "),v("code",[e._v("meta_dir")]),e._v(" 中的元数据，启动一个新的 MASTER，然后再逐台添加其他 FE。请严格按照如下步骤操作：")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("首先，停止所有 FE 进程，同时停止一切业务访问。保证在元数据恢复期间，不会因为外部访问导致其他不可预期的问题。")])]),e._v(" "),v("li",[v("p",[e._v("确认哪个 FE 节点的元数据是最新：")]),e._v(" "),v("ul",[v("li",[e._v("首先，"),v("strong",[e._v("务必先备份所有 FE 的 "),v("code",[e._v("meta_dir")]),e._v(" 目录。")])]),e._v(" "),v("li",[e._v("通常情况下，Master FE 的元数据是最新的。可以查看 "),v("code",[e._v("meta_dir/image")]),e._v(" 目录下，image.xxxx 文件的后缀，数字越大，则表示元数据越新。")]),e._v(" "),v("li",[e._v("通常，通过比较所有 FOLLOWER FE 的 image 文件，找出最新的元数据即可。")]),e._v(" "),v("li",[e._v("之后，我们要使用这个拥有最新元数据的 FE 节点，进行恢复。")]),e._v(" "),v("li",[e._v("如果使用 OBSERVER 节点的元数据进行恢复会比较麻烦，建议尽量选择 FOLLOWER 节点。")])])]),e._v(" "),v("li",[v("p",[e._v("以下操作都在由第2步中选择出来的 FE 节点上进行。")]),e._v(" "),v("ol",[v("li",[e._v("如果该节点是一个 OBSERVER，先将 "),v("code",[e._v("meta_dir/image/ROLE")]),e._v(" 文件中的 "),v("code",[e._v("role=OBSERVER")]),e._v(" 改为 "),v("code",[e._v("role=FOLLOWER")]),e._v("。（从 OBSERVER 节点恢复会比较麻烦，先按这里的步骤操作，后面会有单独说明）")]),e._v(" "),v("li",[e._v("在 fe.conf 中添加配置："),v("code",[e._v("metadata_failure_recovery=true")]),e._v("。")]),e._v(" "),v("li",[e._v("执行 "),v("code",[e._v("sh bin/start_fe.sh")]),e._v(" 启动这个 FE。")]),e._v(" "),v("li",[e._v("如果正常，这个 FE 会以 MASTER 的角色启动，类似于前面 "),v("code",[e._v("启动单节点 FE")]),e._v(" 一节中的描述。在 fe.log 应该会看到 "),v("code",[e._v("transfer from XXXX to MASTER")]),e._v(" 等字样。")]),e._v(" "),v("li",[e._v("启动完成后，先连接到这个 FE，执行一些查询导入，检查是否能够正常访问。如果不正常，有可能是操作有误，建议仔细阅读以上步骤，用之前备份的元数据再试一次。如果还是不行，问题可能就比较严重了。")]),e._v(" "),v("li",[e._v("如果成功，通过 "),v("code",[e._v("show frontends;")]),e._v(" 命令，应该可以看到之前所添加的所有 FE，并且当前 FE 是 master。")]),e._v(" "),v("li",[e._v("将 fe.conf 中的 "),v("code",[e._v("metadata_failure_recovery=true")]),e._v(" 配置项删除，或者设置为 "),v("code",[e._v("false")]),e._v("，然后重启这个 FE（"),v("strong",[e._v("重要")]),e._v("）。")])]),e._v(" "),v("blockquote",[v("p",[e._v("如果你是从一个 OBSERVER 节点的元数据进行恢复的，那么完成如上步骤后，通过 "),v("code",[e._v("show frontends;")]),e._v(" 语句你会发现，当前这个 FE 的角色为 OBSERVER，但是 "),v("code",[e._v("IsMaster")]),e._v(" 显示为 "),v("code",[e._v("true")]),e._v("。这是因为，这里看到的 “OBSERVER” 是记录在 Doris 的元数据中的，而是否是 master，是记录在 bdbje 的元数据中的。因为我们是从一个 OBSERVER 节点恢复的，所以这里出现了不一致。请按如下步骤修复这个问题（这个问题我们会在之后的某个版本修复）：")])]),e._v(" "),v("blockquote",[v("ol",[v("li",[e._v("先把除了这个 “OBSERVER” 以外的所有 FE 节点 DROP 掉。")]),e._v(" "),v("li",[e._v("通过 "),v("code",[e._v("ADD FOLLOWER")]),e._v(" 命令，添加一个新的 FOLLOWER FE，假设在 hostA 上。")]),e._v(" "),v("li",[e._v("在 hostA 上启动一个全新的 FE，通过 "),v("code",[e._v("-helper")]),e._v(" 的方式加入集群。")]),e._v(" "),v("li",[e._v("启动成功后，通过 "),v("code",[e._v("show frontends;")]),e._v(" 语句，你应该能看到两个 FE，一个是之前的  OBSERVER，一个是新添加的 FOLLOWER，并且 OBSERVER 是 master。")]),e._v(" "),v("li",[e._v("确认这个新的 FOLLOWER 是可以正常工作之后，用这个新的 FOLLOWER 的元数据，重新执行一遍故障恢复操作。")]),e._v(" "),v("li",[e._v("以上这些步骤的目的，其实就是人为的制造出一个 FOLLOWER 节点的元数据，然后用这个元数据，重新开始故障恢复。这样就避免了从 OBSERVER 恢复元数据所遇到的不一致的问题。")])])]),e._v(" "),v("blockquote",[v("p",[v("code",[e._v("metadata_failure_recovery=true")]),e._v(' 的含义是，清空 "bdbje" 的元数据。这样 bdbje 就不会再联系之前的其他 FE 了，而作为一个独立的 FE 启动。这个参数只有在恢复启动时才需要设置为 true。恢复完成后，一定要设置为 false，否则一旦重启，bdbje 的元数据又会被清空，导致其他 FE 无法正常工作。')])])]),e._v(" "),v("li",[v("p",[e._v("第3步执行成功后，我们再通过 "),v("code",[e._v("ALTER SYSTEM DROP FOLLOWER/OBSERVER")]),e._v(" 命令，将之前的其他的 FE 从元数据删除后，按加入新 FE 的方式，重新把这些 FE 添加一遍。")])]),e._v(" "),v("li",[v("p",[e._v("如果以上操作正常，则恢复完毕。")])])]),e._v(" "),v("h3",{attrs:{id:"fe-类型变更"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fe-类型变更"}},[e._v("#")]),e._v(" FE 类型变更")]),e._v(" "),v("p",[e._v("如果你需要将当前已有的 FOLLOWER/OBSERVER 类型的 FE，变更为 OBSERVER/FOLLOWER 类型，请先按照前面所述的方式删除 FE，再添加对应类型的 FE 即可")]),e._v(" "),v("h3",{attrs:{id:"fe-迁移"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fe-迁移"}},[e._v("#")]),e._v(" FE 迁移")]),e._v(" "),v("p",[e._v("如果你需要将一个 FE 从当前节点迁移到另一个节点，分以下几种情况。")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("非 MASTER 节点的 FOLLOWER，或者 OBSERVER 迁移")]),e._v(" "),v("p",[e._v("直接添加新的 FOLLOWER/OBSERVER 成功后，删除旧的 FOLLOWER/OBSERVER 即可。")])]),e._v(" "),v("li",[v("p",[e._v("单节点 MASTER 迁移")]),e._v(" "),v("p",[e._v("当只有一个 FE 时，参考 "),v("code",[e._v("故障恢复")]),e._v(" 一节。将 FE 的 palo-meta 目录拷贝到新节点上，按照 "),v("code",[e._v("故障恢复")]),e._v(" 一节中，步骤3的方式启动新的 MASTER")])]),e._v(" "),v("li",[v("p",[e._v("一组 FOLLOWER 从一组节点迁移到另一组新的节点")]),e._v(" "),v("p",[e._v("在新的节点上部署 FE，通过添加 FOLLOWER 的方式先加入新节点。再逐台 DROP 掉旧节点即可。在逐台 DROP 的过程中，MASTER 会自动选择在新的 FOLLOWER 节点上。")])])]),e._v(" "),v("h3",{attrs:{id:"更换-fe-端口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更换-fe-端口"}},[e._v("#")]),e._v(" 更换 FE 端口")]),e._v(" "),v("p",[e._v("FE 目前有以下几个端口")]),e._v(" "),v("ul",[v("li",[e._v("edit_log_port：bdbje 的通信端口")]),e._v(" "),v("li",[e._v("http_port：http 端口，也用于推送 image")]),e._v(" "),v("li",[e._v("rpc_port：FE 的 thrift server port")]),e._v(" "),v("li",[e._v("query_port：Mysql 连接端口")])]),e._v(" "),v("ol",[v("li",[v("p",[e._v("edit_log_port")]),e._v(" "),v("p",[e._v("如果需要更换这个端口，则需要参照 "),v("code",[e._v("故障恢复")]),e._v(" 一节中的操作，进行恢复。因为该端口已经被持久化到 bdbje 自己的元数据中（同时也记录在 Doris 自己的元数据中），需要通过设置 "),v("code",[e._v("metadata_failure_recovery=true")]),e._v(" 来清空 bdbje 的元数据。")])]),e._v(" "),v("li",[v("p",[e._v("http_port")]),e._v(" "),v("p",[e._v("所有 FE 的 http_port 必须保持一致。所以如果要修改这个端口，则所有 FE 都需要修改并重启。修改这个端口，在多 FOLLOWER 部署的情况下会比较复杂（涉及到鸡生蛋蛋生鸡的问题...），所以不建议有这种操作。如果必须，直接按照 "),v("code",[e._v("故障恢复")]),e._v(" 一节中的操作吧。")])]),e._v(" "),v("li",[v("p",[e._v("rpc_port")]),e._v(" "),v("p",[e._v("修改配置后，直接重启 FE 即可。Master FE 会通过心跳将新的端口告知 BE。只有 Master FE 的这个端口会被使用。但仍然建议所有 FE 的端口保持一致。")])]),e._v(" "),v("li",[v("p",[e._v("query_port")]),e._v(" "),v("p",[e._v("修改配置后，直接重启 FE 即可。这个只影响到 mysql 的连接目标。")])])]),e._v(" "),v("h3",{attrs:{id:"从-fe-内存中恢复元数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#从-fe-内存中恢复元数据"}},[e._v("#")]),e._v(" 从 FE 内存中恢复元数据")]),e._v(" "),v("p",[e._v("在某些极端情况下，磁盘上 image 文件可能会损坏，但是内存中的元数据是完好的，此时我们可以先从内存中 dump 出元数据，再替换掉磁盘上的 image 文件，来恢复元数据，整个"),v("strong",[e._v("不停查询服务")]),e._v("的操作步骤如下：")]),e._v(" "),v("ol",[v("li",[e._v("集群停止所有 Load,Create,Alter 操作")]),e._v(" "),v("li",[e._v("执行以下命令，从 Master FE 内存中 dump 出元数据：(下面称为 image_mem)")])]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("curl -u $root_user:$password http://$master_hostname:8030/dump\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("ol",{attrs:{start:"3"}},[v("li",[e._v("用 image_mem 文件替换掉 OBSERVER FE 节点上"),v("code",[e._v("meta_dir/image")]),e._v("目录下的 image 文件，重启 OBSERVER FE 节点，\n验证 image_mem 文件的完整性和正确性（可以在 FE Web 页面查看 DB 和 Table 的元数据是否正常，查看fe.log 是否有异常，是否在正常 replayed journal）")]),e._v(" "),v("li",[e._v("依次用 image_mem 文件替换掉 FOLLOWER FE 节点上"),v("code",[e._v("meta_dir/image")]),e._v("目录下的 image 文件，重启 FOLLOWER FE 节点，\n确认元数据和查询服务都正常")]),e._v(" "),v("li",[e._v("用 image_mem 文件替换掉 Master FE 节点上"),v("code",[e._v("meta_dir/image")]),e._v("目录下的 image 文件，重启 Master FE 节点，\n确认 FE Master 切换正常， Master FE 节点可以通过 checkpoint 正常生成新的 image 文件")]),e._v(" "),v("li",[e._v("集群恢复所有 Load,Create,Alter 操作")])]),e._v(" "),v("p",[v("strong",[e._v("注意：如果 Image 文件很大，整个操作过程耗时可能会很长，所以在此期间，要确保 Master FE 不会通过 checkpoint 生成新的 image 文件。\n当观察到 Master FE 节点上 "),v("code",[e._v("meta_dir/image")]),e._v("目录下的 "),v("code",[e._v("image.ckpt")]),e._v(" 文件快和 "),v("code",[e._v("image.xxx")]),e._v(" 文件一样大时，可以直接删除掉"),v("code",[e._v("image.ckpt")]),e._v(" 文件。")])]),e._v(" "),v("h3",{attrs:{id:"查看-bdbje-中的数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查看-bdbje-中的数据"}},[e._v("#")]),e._v(" 查看 BDBJE 中的数据")]),e._v(" "),v("p",[e._v("FE 的元数据日志以 Key-Value 的方式存储在 BDBJE 中。某些异常情况下，可能因为元数据错误而无法启动 FE。在这种情况下，Doris 提供一种方式可以帮助用户查询 BDBJE 中存储的数据，以方便进行问题排查。")]),e._v(" "),v("p",[e._v("首先需在 fe.conf 中增加配置："),v("code",[e._v("enable_bdbje_debug_mode=true")]),e._v("，之后通过 "),v("code",[e._v("sh start_fe.sh --daemon")]),e._v(" 启动 FE。")]),e._v(" "),v("p",[e._v("此时，FE 将进入 debug 模式，仅会启动 http server 和 MySQL server，并打开 BDBJE 实例，但不会进行任何元数据的加载及后续其他启动流程。")]),e._v(" "),v("p",[e._v("这是，我们可以通过访问 FE 的 web 页面，或通过 MySQL 客户端连接到 Doris 后，通过 "),v("code",[e._v("show proc /bdbje;")]),e._v(" 来查看 BDBJE 中存储的数据。")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('mysql> show proc "/bdbje";\n+----------+---------------+---------+\n| DbNames  | JournalNumber | Comment |\n+----------+---------------+---------+\n| 110589   | 4273          |         |\n| epochDB  | 4             |         |\n| metricDB | 430694        |         |\n+----------+---------------+---------+\n')])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br"),v("span",{staticClass:"line-number"},[e._v("5")]),v("br"),v("span",{staticClass:"line-number"},[e._v("6")]),v("br"),v("span",{staticClass:"line-number"},[e._v("7")]),v("br"),v("span",{staticClass:"line-number"},[e._v("8")]),v("br")])]),v("p",[e._v("第一级目录会展示 BDBJE 中所有的 database 名称，以及每个 database 中的 entry 数量。")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('mysql> show proc "/bdbje/110589";\n+-----------+\n| JournalId |\n+-----------+\n| 1         |\n| 2         |\n\n...\n| 114858    |\n| 114859    |\n| 114860    |\n| 114861    |\n+-----------+\n4273 rows in set (0.06 sec)\n')])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br"),v("span",{staticClass:"line-number"},[e._v("5")]),v("br"),v("span",{staticClass:"line-number"},[e._v("6")]),v("br"),v("span",{staticClass:"line-number"},[e._v("7")]),v("br"),v("span",{staticClass:"line-number"},[e._v("8")]),v("br"),v("span",{staticClass:"line-number"},[e._v("9")]),v("br"),v("span",{staticClass:"line-number"},[e._v("10")]),v("br"),v("span",{staticClass:"line-number"},[e._v("11")]),v("br"),v("span",{staticClass:"line-number"},[e._v("12")]),v("br"),v("span",{staticClass:"line-number"},[e._v("13")]),v("br"),v("span",{staticClass:"line-number"},[e._v("14")]),v("br")])]),v("p",[e._v("进入第二级，则会罗列指定 database 下的所有 entry 的 key。")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('mysql> show proc "/bdbje/110589/114861";\n+-----------+--------------+---------------------------------------------+\n| JournalId | OpType       | Data                                        |\n+-----------+--------------+---------------------------------------------+\n| 114861    | OP_HEARTBEAT | org.apache.doris.persist.HbPackage@6583d5fb |\n+-----------+--------------+---------------------------------------------+\n1 row in set (0.05 sec)\n')])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br"),v("span",{staticClass:"line-number"},[e._v("5")]),v("br"),v("span",{staticClass:"line-number"},[e._v("6")]),v("br"),v("span",{staticClass:"line-number"},[e._v("7")]),v("br")])]),v("p",[e._v("第三级则可以展示指定 key 的 value 信息。")]),e._v(" "),v("h2",{attrs:{id:"最佳实践"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[e._v("#")]),e._v(" 最佳实践")]),e._v(" "),v("p",[e._v("FE 的部署推荐，在 "),v("RouterLink",{attrs:{to:"/zh-CN/0.15/installing/install-deploy.html"}},[e._v("安装与部署文档")]),e._v(" 中有介绍，这里再做一些补充。")],1),e._v(" "),v("ul",[v("li",[v("p",[v("strong",[e._v("如果你并不十分了解 FE 元数据的运行逻辑，或者没有足够 FE 元数据的运维经验，我们强烈建议在实际使用中，只部署一个 FOLLOWER 类型的 FE 作为 MASTER，其余 FE 都是 OBSERVER，这样可以减少很多复杂的运维问题！")]),e._v(" 不用过于担心 MASTER 单点故障导致无法进行元数据写操作。首先，如果你配置合理，FE 作为 java 进程很难挂掉。其次，如果 MASTER 磁盘损坏（概率非常低），我们也可以用 OBSERVER 上的元数据，通过 "),v("code",[e._v("故障恢复")]),e._v(" 的方式手动恢复。")])]),e._v(" "),v("li",[v("p",[e._v("FE 进程的 JVM 一定要保证足够的内存。我们"),v("strong",[e._v("强烈建议")]),e._v(" FE 的 JVM 内存至少在 10GB 以上，推荐 32GB 至 64GB。并且部署监控来监控 JVM 的内存使用情况。因为如果FE出现OOM，可能导致元数据写入失败，造成一些"),v("strong",[e._v("无法恢复")]),e._v("的故障！")])]),e._v(" "),v("li",[v("p",[e._v("FE 所在节点要有足够的磁盘空间，以防止元数据过大导致磁盘空间不足。同时 FE 日志也会占用十几G 的磁盘空间。")])])]),e._v(" "),v("h2",{attrs:{id:"其他常见问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他常见问题"}},[e._v("#")]),e._v(" 其他常见问题")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("fe.log 中一直滚动 "),v("code",[e._v("meta out of date. current time: xxx, synchronized time: xxx, has log: xxx, fe type: xxx")])]),e._v(" "),v("p",[e._v("这个通常是因为 FE 无法选举出 Master。比如配置了 3 个 FOLLOWER，但是只启动了一个 FOLLOWER，则这个 FOLLOWER 会出现这个问题。通常，只要把剩余的 FOLLOWER 启动起来就可以了。如果启动起来后，仍然没有解决问题，那么可能需要按照 "),v("code",[e._v("故障恢复")]),e._v(" 一节中的方式，手动进行恢复。")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("Clock delta: xxxx ms. between Feeder: xxxx and this Replica exceeds max permissible delta: xxxx ms.")])]),e._v(" "),v("p",[e._v("bdbje 要求各个节点之间的时钟误差不能超过一定阈值。如果超过，节点会异常退出。我们默认设置的阈值为 5000 ms，由 FE 的参数 "),v("code",[e._v("max_bdbje_clock_delta_ms")]),e._v(" 控制，可以酌情修改。但我们建议使用 ntp 等时钟同步方式保证 Doris 集群各主机的时钟同步。")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("image/")]),e._v(" 目录下的镜像文件很久没有更新")]),e._v(" "),v("p",[e._v("Master FE 会默认每 50000 条元数据 journal，生成一个镜像文件。在一个频繁使用的集群中，通常每隔半天到几天的时间，就会生成一个新的 image 文件。如果你发现 image 文件已经很久没有更新了（比如超过一个星期），则可以顺序的按照如下方法，查看具体原因：")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("在 Master FE 的 fe.log 中搜索 "),v("code",[e._v("memory is not enough to do checkpoint. Committed memroy xxxx Bytes, used memory xxxx Bytes.")]),e._v(" 字样。如果找到，则说明当前 FE 的 JVM 内存不足以用于生成镜像（通常我们需要预留一半的 FE 内存用于 image 的生成）。那么需要增加 JVM 的内存并重启 FE 后，再观察。每次 Master FE 重启后，都会直接生成一个新的 image。也可用这种重启方式，主动地生成新的 image。注意，如果是多 FOLLOWER 部署，那么当你重启当前 Master FE 后，另一个 FOLLOWER FE 会变成 MASTER，则后续的 image 生成会由新的 Master 负责。因此，你可能需要修改所有 FOLLOWER FE 的 JVM 内存配置。")])]),e._v(" "),v("li",[v("p",[e._v("在 Master FE 的 fe.log 中搜索 "),v("code",[e._v("begin to generate new image: image.xxxx")]),e._v("。如果找到，则说明开始生成 image 了。检查这个线程的后续日志，如果出现 "),v("code",[e._v("checkpoint finished save image.xxxx")]),e._v("，则说明 image 写入成功。如果出现 "),v("code",[e._v("Exception when generate new image file")]),e._v("，则生成失败，需要查看具体的错误信息。")])])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("bdb/")]),e._v(" 目录的大小非常大，达到几个G或更多")]),e._v(" "),v("p",[e._v("如果在排除无法生成新的 image 的错误后，bdb 目录在一段时间内依然很大。则可能是因为 Master FE 推送 image 不成功。可以在 Master FE 的 fe.log 中搜索 "),v("code",[e._v("push image.xxxx to other nodes. totally xx nodes, push successed yy nodes")]),e._v("。如果 yy 比 xx 小，则说明有的 FE 没有被推送成功。可以在 fe.log 中查看到具体的错误 "),v("code",[e._v("Exception when pushing image file. url = xxx")]),e._v("。")]),e._v(" "),v("p",[e._v("同时，你也可以在 FE 的配置文件中添加配置："),v("code",[e._v("edit_log_roll_num=xxxx")]),e._v("。该参数设定了每多少条元数据 journal，做一次 image。默认是 50000。可以适当改小这个数字，使得 image 更加频繁，从而加速删除旧的 journal。")])]),e._v(" "),v("li",[v("p",[e._v("FOLLOWER FE 接连挂掉")]),e._v(" "),v("p",[e._v("因为 Doris 的元数据采用多数写策略，即一条元数据 journal 必须至少写入多数个 FOLLOWER FE 后（比如 3 个 FOLLOWER，必须写成功 2 个），才算成功。而如果写入失败，FE 进程会主动退出。那么假设有 A、B、C 三个 FOLLOWER，C 先挂掉，然后 B 再挂掉，那么 A 也会跟着挂掉。所以如 "),v("code",[e._v("最佳实践")]),e._v(" 一节中所述，如果你没有丰富的元数据运维经验，不建议部署多 FOLLOWER。")])]),e._v(" "),v("li",[v("p",[e._v("fe.log 中出现 "),v("code",[e._v("get exception when try to close previously opened bdb database. ignore it")])]),e._v(" "),v("p",[e._v("如果后面有 "),v("code",[e._v("ignore it")]),e._v(" 字样，通常无需处理。如果你有兴趣，可以在 "),v("code",[e._v("BDBEnvironment.java")]),e._v(" 搜索这个错误，查看相关注释说明。")])]),e._v(" "),v("li",[v("p",[e._v("从 "),v("code",[e._v("show frontends;")]),e._v(" 看，某个 FE 的 "),v("code",[e._v("Join")]),e._v(" 列为 "),v("code",[e._v("true")]),e._v("，但是实际该 FE 不正常")]),e._v(" "),v("p",[e._v("通过 "),v("code",[e._v("show frontends;")]),e._v(" 查看到的 "),v("code",[e._v("Join")]),e._v(" 信息。该列如果为 "),v("code",[e._v("true")]),e._v("，仅表示这个 FE "),v("strong",[e._v("曾经加入过")]),e._v(" 集群。并不能表示当前仍然正常的存在于集群中。如果为 "),v("code",[e._v("false")]),e._v("，则表示这个 FE "),v("strong",[e._v("从未加入过")]),e._v(" 集群。")])]),e._v(" "),v("li",[v("p",[e._v("关于 FE 的配置 "),v("code",[e._v("master_sync_policy")]),e._v(", "),v("code",[e._v("replica_sync_policy")]),e._v(" 和 "),v("code",[e._v("txn_rollback_limit")])]),e._v(" "),v("p",[v("code",[e._v("master_sync_policy")]),e._v(" 用于指定当 Leader FE 写元数据日志时，是否调用 fsync(), "),v("code",[e._v("replica_sync_policy")]),e._v(" 用于指定当 FE HA 部署时，其他 Follower FE 在同步元数据时，是否调用 fsync()。在早期的 Doris 版本中，这两个参数默认是 "),v("code",[e._v("WRITE_NO_SYNC")]),e._v("，即都不调用 fsync()。在最新版本的 Doris 中，默认已修改为 "),v("code",[e._v("SYNC")]),e._v("，即都调用 fsync()。调用 fsync() 会显著降低元数据写盘的效率。在某些环境下，IOPS 可能降至几百，延迟增加到2-3ms（但对于 Doris 元数据操作依然够用）。因此我们建议以下配置：")]),e._v(" "),v("ol",[v("li",[e._v("对于单 Follower FE 部署，"),v("code",[e._v("master_sync_policy")]),e._v(" 设置为 "),v("code",[e._v("SYNC")]),e._v("，防止 FE 系统宕机导致元数据丢失。")]),e._v(" "),v("li",[e._v("对于多 Follower FE 部署，可以将 "),v("code",[e._v("master_sync_policy")]),e._v(" 和 "),v("code",[e._v("replica_sync_policy")]),e._v(" 设为 "),v("code",[e._v("WRITE_NO_SYNC")]),e._v("，因为我们认为多个系统同时宕机的概率非常低。")])]),e._v(" "),v("p",[e._v("如果在单 Follower FE 部署中，"),v("code",[e._v("master_sync_policy")]),e._v(" 设置为 "),v("code",[e._v("WRITE_NO_SYNC")]),e._v("，则可能出现 FE 系统宕机导致元数据丢失。这时如果有其他 Observer FE 尝试重启时，可能会报错：")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("Node xxx must rollback xx total commits(numPassedDurableCommits of which were durable) to the earliest point indicated by transaction xxxx in order to rejoin the replication group, but the transaction rollback limit of xxx prohibits this.\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("意思有部分已经持久化的事务需要回滚，但条数超过上限。这里我们的默认上限是 100，可以通过设置 "),v("code",[e._v("txn_rollback_limit")]),e._v(" 改变。该操作仅用于尝试正常启动 FE，但已丢失的元数据无法恢复。")])])])])}),[],!1,null,null,null);_.default=t.exports}}]);