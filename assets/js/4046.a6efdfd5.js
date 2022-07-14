(window.webpackJsonp=window.webpackJsonp||[]).push([[4046],{4676:function(s,t,a){"use strict";a.r(t);var e=a(15),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"多租户和资源划分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多租户和资源划分"}},[s._v("#")]),s._v(" 多租户和资源划分")]),s._v(" "),a("p",[s._v("Doris 的多租户和资源隔离方案，主要目的是为了多用户在同一 Doris 集群内进行数据操作时，减少相互之间的干扰，能够将集群资源更合理的分配给各用户。")]),s._v(" "),a("p",[s._v("该方案主要分为两部分，一是集群内节点级别的资源组划分，二是针对单个查询的资源限制。")]),s._v(" "),a("h2",{attrs:{id:"doris-中的节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-中的节点"}},[s._v("#")]),s._v(" Doris 中的节点")]),s._v(" "),a("p",[s._v("首先先简单介绍一下 Doris 的节点组成。一个 Doris 集群中有两类节点：Frontend(FE) 和 Backend(BE)。")]),s._v(" "),a("p",[s._v("FE 主要负责元数据管理、集群管理、用户请求的接入和查询计划的解析等工作。")]),s._v(" "),a("p",[s._v("BE 主要负责数据存储、查询计划的执行等工作。")]),s._v(" "),a("p",[s._v("FE 不参与用户数据的处理计算等工作，因此是一个资源消耗较低的节点。而 BE 负责所有的数据计算、任务处理，属于资源消耗型的节点。因此，本文所介绍的资源划分及资源限制方案，都是针对 BE 节点的。FE 节点因为资源消耗相对较低，并且还可以横向扩展，因此通常无需做资源上的隔离和限制，FE 节点由所有用户共享即可。")]),s._v(" "),a("h2",{attrs:{id:"节点资源划分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节点资源划分"}},[s._v("#")]),s._v(" 节点资源划分")]),s._v(" "),a("p",[s._v("节点资源划分，是指将一个 Doris 集群内的 BE 节点设置标签（Tag），标签相同的 BE 节点组成一个资源组（Resource Group）。资源组可以看作是数据存储和计算的一个管理单元。下面我们通过一个具体示例，来介绍资源组的使用方式。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("为 BE 节点设置标签")]),s._v(" "),a("p",[s._v("假设当前 Doris 集群有 6 个 BE 节点。分别为 host[1-6]。在初始情况下，所有节点都属于一个默认资源组（Default）。")]),s._v(" "),a("p",[s._v("我们可以使用以下命令将这6个节点划分成3个资源组：group_a、group_b、group_c：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" system "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" backend "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host1:9050"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tag.location"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"group_a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" system "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" backend "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host2:9050"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tag.location"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"group_a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" system "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" backend "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host3:9050"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tag.location"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"group_b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" system "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" backend "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host4:9050"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tag.location"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"group_b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" system "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" backend "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host5:9050"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tag.location"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"group_c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" system "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" backend "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host6:9050"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tag.location"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"group_c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("这里我们将 "),a("code",[s._v("host[1-2]")]),s._v(" 组成资源组 "),a("code",[s._v("group_a")]),s._v("，"),a("code",[s._v("host[3-4]")]),s._v(" 组成资源组 "),a("code",[s._v("group_b")]),s._v("，"),a("code",[s._v("host[5-6]")]),s._v(" 组成资源组 "),a("code",[s._v("group_c")]),s._v("。")]),s._v(" "),a("blockquote",[a("p",[s._v("注：一个 BE 只支持设置一个 Tag。")])])]),s._v(" "),a("li",[a("p",[s._v("按照资源组分配数据分布")]),s._v(" "),a("p",[s._v("资源组划分好后。我们可以将用户数据的不同副本分布在不同资源组内。假设一张用户表 UserTable。我们希望在3个资源组内各存放一个副本，则可以通过如下建表语句实现：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" UserTable\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("k1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("distributed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("hash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("k1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" buckets "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nproperties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"replication_allocation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tag.location.group_a:1, tag.location.group_b:1, tag.location.group_c:1"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("这样一来，表 UserTable 中的数据，将会以3副本的形式，分别存储在资源组 group_a、group_b、group_c所在的节点中。")]),s._v(" "),a("p",[s._v("下图展示了当前的节点划分和数据分布：")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" ┌────────────────────────────────────────────────────┐\n │                                                    │\n │         ┌──────────────────┐  ┌──────────────────┐ │\n │         │ host1            │  │ host2            │ │\n │         │  ┌─────────────┐ │  │                  │ │\n │ group_a │  │   replica1  │ │  │                  │ │\n │         │  └─────────────┘ │  │                  │ │\n │         │                  │  │                  │ │\n │         └──────────────────┘  └──────────────────┘ │\n │                                                    │\n ├────────────────────────────────────────────────────┤\n ├────────────────────────────────────────────────────┤\n │                                                    │\n │         ┌──────────────────┐  ┌──────────────────┐ │\n │         │ host3            │  │ host4            │ │\n │         │                  │  │  ┌─────────────┐ │ │\n │ group_b │                  │  │  │   replica2  │ │ │\n │         │                  │  │  └─────────────┘ │ │\n │         │                  │  │                  │ │\n │         └──────────────────┘  └──────────────────┘ │\n │                                                    │\n ├────────────────────────────────────────────────────┤\n ├────────────────────────────────────────────────────┤\n │                                                    │\n │         ┌──────────────────┐  ┌──────────────────┐ │\n │         │ host5            │  │ host6            │ │\n │         │                  │  │  ┌─────────────┐ │ │\n │ group_c │                  │  │  │   replica3  │ │ │\n │         │                  │  │  └─────────────┘ │ │\n │         │                  │  │                  │ │\n │         └──────────────────┘  └──────────────────┘ │\n │                                                    │\n └────────────────────────────────────────────────────┘\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("使用不同资源组进行数据查询")]),s._v(" "),a("p",[s._v("在前两步执行完成后，我们就可以通过设置用户的资源使用权限，来限制某一用户的查询，只能使用指定资源组中的节点来执行。")]),s._v(" "),a("p",[s._v("比如我们可以通过以下语句，限制 user1 只能使用 "),a("code",[s._v("group_a")]),s._v(" 资源组中的节点进行数据查询，user2 只能使用 "),a("code",[s._v("group_b")]),s._v(" 资源组，而 user3 可以同时使用 3 个资源组：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" property "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'resource_tags.location'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'group_a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" property "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user2'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'resource_tags.location'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'group_b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" property "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user3'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'resource_tags.location'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'group_a, group_b, group_c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("设置完成后，user1 在发起对 UserTable 表的查询时，只会访问 "),a("code",[s._v("group_a")]),s._v(" 资源组内节点上的数据副本，并且查询仅会使用 "),a("code",[s._v("group_a")]),s._v(" 资源组内的节点计算资源。而 user3 的查询可以使用任意资源组内的副本和计算资源。")]),s._v(" "),a("p",[s._v("这样，我们通过对节点的划分，以及对用户的资源使用限制，实现了不同用户查询上的物理资源隔离。更进一步，我们可以给不同的业务部门创建不同的用户，并限制每个用户使用不同的资源组。以避免不同业务部分之间使用资源干扰。比如集群内有一张业务表需要共享给所有9个业务部门使用，但是希望能够尽量避免不同部门之间的资源抢占。则我们可以为这张表创建3个副本，分别存储在3个资源组中。接下来，我们为9个业务部门创建9个用户，每3个用户限制使用一个资源组。这样，资源的竞争程度就由9降低到了3。")]),s._v(" "),a("p",[s._v("另一方面，针对在线和离线任务的隔离。我们可以利用资源组的方式实现。比如我们可以将节点划分为 Online 和 Offline 两个资源组。表数据依然以3副本的方式存储，其中 2 个副本存放在 Online 资源组，1 个副本存放在 Offline 资源组。Online 资源组主要用于高并发低延迟的在线数据服务，而一些大查询或离线ETL操作，则可以使用 Offline 资源组中的节点执行。从而实现在统一集群内同时提供在线和离线服务的能力。")])]),s._v(" "),a("li",[a("p",[s._v("导入作业的资源组分配")]),s._v(" "),a("p",[s._v("导入作业（包括insert、broker load、routine load、stream load等）的资源使用可以分为两部分：")]),s._v(" "),a("ol",[a("li",[s._v("计算资源：负责读取数据源、数据转换和分发。")]),s._v(" "),a("li",[s._v("写入资源：负责数据编码、压缩并写入磁盘。")])]),s._v(" "),a("p",[s._v("其中写入资源必须是数据副本所在的节点，而计算资源理论上可以选择任意节点完成。所以对于导入作业的资源组的分配分成两个步骤：")]),s._v(" "),a("ol",[a("li",[s._v("使用用户级别的 resource tag 来限定计算资源所能使用的资源组。")]),s._v(" "),a("li",[s._v("使用副本的 resource tag 来限定写入资源所能使用的资源组。")])]),s._v(" "),a("p",[s._v("所以如果希望导入操作所使用的全部资源都限定在数据所在的资源组的话，只需将用户级别的 resource tag 设置为和副本的 resource tag 相同即可。")])])]),s._v(" "),a("h2",{attrs:{id:"单查询资源限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单查询资源限制"}},[s._v("#")]),s._v(" 单查询资源限制")]),s._v(" "),a("p",[s._v("前面提到的资源组方法是节点级别的资源隔离和限制。而在资源组内，依然可能发生资源抢占问题。比如前文提到的将3个业务部门安排在同一资源组内。虽然降低了资源竞争程度，但是这3个部门的查询依然有可能相互影响。")]),s._v(" "),a("p",[s._v("因此，除了资源组方案外，Doris 还提供了对单查询的资源限制功能。")]),s._v(" "),a("p",[s._v("目前 Doris 对单查询的资源限制主要分为 CPU 和 内存限制两方面。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("内存限制")]),s._v(" "),a("p",[s._v("Doris 可以限制一个查询被允许使用的最大内存开销。以保证集群的内存资源不会被某一个查询全部占用。我们可以通过以下方式设置内存限制：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置会话变量 exec_mem_limit。则之后该会话内（连接内）的所有查询都使用这个内存限制。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" exec_mem_limit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("G"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置全局变量 exec_mem_limit。则之后所有新会话（新连接）的所有查询都使用这个内存限制。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" exec_mem_limit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("G"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 SQL 中设置变量 exec_mem_limit。则该变量仅影响这个 SQL。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*+ SET_VAR(exec_mem_limit=1G) */")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tbl "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("因为 Doris 的查询引擎是基于全内存的 MPP 查询框架。因此当一个查询的内存使用超过限制后，查询会被终止。因此，当一个查询无法在合理的内存限制下运行时，我们就需要通过一些 SQL 优化手段，或者集群扩容的方式来解决了。")])]),s._v(" "),a("li",[a("p",[s._v("CPU 限制")]),s._v(" "),a("p",[s._v("用户可以通过以下方式限制查询的 CPU 资源：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置会话变量 cpu_resource_limit。则之后该会话内（连接内）的所有查询都使用这个CPU限制。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" cpu_resource_limit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置用户的属性 cpu_resource_limit，则所有该用户的查询情况都使用这个CPU限制。该属性的优先级高于会话变量 cpu_resource_limit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" property "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cpu_resource_limit'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("code",[s._v("cpu_resource_limit")]),s._v(" 的取值是一个相对值，取值越大则能够使用的 CPU 资源越多。但一个查询能使用的CPU上限也取决于表的分区分桶数。原则上，一个查询的最大 CPU 使用量和查询涉及到的 tablet 数量正相关。极端情况下，假设一个查询仅涉及到一个 tablet，则即使 "),a("code",[s._v("cpu_resource_limit")]),s._v(" 设置一个较大值，也仅能使用 1 个 CPU 资源。")])])]),s._v(" "),a("p",[s._v("通过内存和CPU的资源限制。我们可以在一个资源组内，将用户的查询进行更细粒度的资源划分。比如我们可以让部分时效性要求不高，但是计算量很大的离线任务使用更少的CPU资源和更多的内存资源。而部分延迟敏感的在线任务，使用更多的CPU资源以及合理的内存资源。")]),s._v(" "),a("h2",{attrs:{id:"最佳实践和向前兼容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践和向前兼容"}},[s._v("#")]),s._v(" 最佳实践和向前兼容")]),s._v(" "),a("p",[s._v("Tag 划分和 CPU 限制是 0.15 版本中的新功能。为了保证可以从老版本平滑升级，Doris 做了如下的向前兼容：")]),s._v(" "),a("ol",[a("li",[s._v("每个 BE 节点会有一个默认的 Tag："),a("code",[s._v('"tag.location": "default"')]),s._v("。")]),s._v(" "),a("li",[s._v("通过 "),a("code",[s._v("alter system add backend")]),s._v(" 语句新增的 BE 节点也会默认设置 Tag："),a("code",[s._v('"tag.location": "default"')]),s._v("。")]),s._v(" "),a("li",[s._v("所有表的副本分布默认修改为："),a("code",[s._v('"tag.location.default:xx')]),s._v("。其中 xx 为原副本数量。")]),s._v(" "),a("li",[s._v("用户依然可以通过 "),a("code",[s._v('"replication_num" = "xx"')]),s._v(" 在建表语句中指定副本数，这种属性将会自动转换成："),a("code",[s._v('"tag.location.default:xx')]),s._v("。从而保证无需修改原建表语句。")]),s._v(" "),a("li",[s._v("默认情况下，单查询的内存限制为单节点2GB，CPU资源无限制，和原有行为保持一致。且用户的 "),a("code",[s._v("resource_tags.location")]),s._v(" 属性为空，即默认情况下，用户可以访问任意 Tag 的 BE，和原有行为保持一致。")])]),s._v(" "),a("p",[s._v("这里我们给出一个从原集群升级到 0.15 版本后，开始使用资源划分功能的步骤示例：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("关闭数据修复与均衡逻辑")]),s._v(" "),a("p",[s._v("因为升级后，BE的默认Tag为 "),a("code",[s._v('"tag.location": "default"')]),s._v("，而表的默认副本分布为："),a("code",[s._v('"tag.location.default:xx')]),s._v("。所以如果直接修改 BE 的 Tag，系统会自动检测到副本分布的变化，从而开始数据重分布。这可能会占用部分系统资源。所以我们可以在修改 Tag 前，先关闭数据修复与均衡逻辑，以保证我们在规划资源时，不会有副本重分布的操作。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("ADMIN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" FRONTEND CONFIG "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"disable_balance"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nADMIN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" FRONTEND CONFIG "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"disable_tablet_scheduler"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("设置 Tag 和表副本分布")]),s._v(" "),a("p",[s._v("接下来可以通过 "),a("code",[s._v("alter system modify backend")]),s._v(" 语句进行 BE 的 Tag 设置。以及通过 "),a("code",[s._v("alter table")]),s._v(" 语句修改表的副本分布策略。示例如下：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" system "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" backend "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host1:9050, 1212:9050"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tag.location"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"group_a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" my_table "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("partition")]),s._v(" p1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"replication_allocation"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tag.location.group_a:2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("开启数据修复与均衡逻辑")]),s._v(" "),a("p",[s._v("在 Tag 和副本分布都设置完毕后，我们可以开启数据修复与均衡逻辑来触发数据的重分布了。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("ADMIN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" FRONTEND CONFIG "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"disable_balance"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nADMIN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" FRONTEND CONFIG "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"disable_tablet_scheduler"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("该过程根据涉及到的数据量会持续一段时间。并且会导致部分 colocation table 无法进行 colocation 规划（因为副本在迁移中）。可以通过 "),a("code",[s._v('show proc "/cluster_balance/"')]),s._v(" 来查看进度。也可以通过 "),a("code",[s._v('show proc "/statistic"')]),s._v(" 中 "),a("code",[s._v("UnhealthyTabletNum")]),s._v(" 的数量来判断进度。当 "),a("code",[s._v("UnhealthyTabletNum")]),s._v(" 降为 0 时，则代表数据重分布完毕。")])]),s._v(" "),a("li",[a("p",[s._v("设置用户的资源标签权限。")]),s._v(" "),a("p",[s._v("等数据重分布完毕后。我们就可以开始设置用户的资源标签权限了。因为默认情况下，用户的 "),a("code",[s._v("resource_tags.location")]),s._v(" 属性为空，即可以访问任意 Tag 的 BE。所以在前面步骤中，不会影响到已有用户的正常查询。当 "),a("code",[s._v("resource_tags.location")]),s._v(" 属性非空时，用户将被限制访问指定 Tag 的 BE。")])])]),s._v(" "),a("p",[s._v("通过以上4步，我们可以较为平滑的在原有集群升级后，使用资源划分功能。")])])}),[],!1,null,null,null);t.default=n.exports}}]);