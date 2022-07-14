(window.webpackJsonp=window.webpackJsonp||[]).push([[2335],{2962:function(_,v,a){"use strict";a.r(v);var e=a(15),t=Object(e.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"导入总览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入总览"}},[_._v("#")]),_._v(" 导入总览")]),_._v(" "),a("p",[_._v("导入（Load）功能就是将用户的原始数据导入到 Doris 中。导入成功后，用户即可通过 Mysql 客户端查询数据。")]),_._v(" "),a("p",[_._v("Doris 支持多种导入方式。建议先完整阅读本文档，再根据所选择的导入方式，查看各自导入方式的详细文档。")]),_._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[_._v("#")]),_._v(" 基本概念")]),_._v(" "),a("ol",[a("li",[_._v("Frontend（FE）：Doris 系统的元数据和调度节点。在导入流程中主要负责导入规划生成和导入任务的调度工作。")]),_._v(" "),a("li",[_._v("Backend（BE）：Doris 系统的计算和存储节点。在导入流程中主要负责数据的 ETL 和存储。")]),_._v(" "),a("li",[_._v("Broker：Broker 为一个独立的无状态进程。封装了文件系统接口，提供 Doris 读取远端存储系统中文件的能力。")]),_._v(" "),a("li",[_._v("导入作业（Load job）：导入作业读取用户提交的源数据，转换或清洗后，将数据导入到 Doris 系统中。导入完成后，数据即可被用户查询到。")]),_._v(" "),a("li",[_._v("Label：所有导入作业都有一个 Label。Label 在一个数据库内唯一，可由用户指定或系统自动生成，用于标识一个导入作业。相同的 Label 仅可用于一个成功的导入作业。")]),_._v(" "),a("li",[_._v("MySQL 协议/HTTP 协议：Doris 提供两种访问协议接口。 MySQL 协议和 HTTP 协议。部分导入方式使用 MySQL 协议接口提交作业，部分导入方式使用 HTTP 协议接口提交作业。")])]),_._v(" "),a("h2",{attrs:{id:"导入方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入方式"}},[_._v("#")]),_._v(" 导入方式")]),_._v(" "),a("p",[_._v("为适配不同的数据导入需求，Doris 系统提供了6种不同的导入方式。每种导入方式支持不同的数据源，存在不同的使用方式（异步，同步）。")]),_._v(" "),a("p",[_._v("所有导入方式都支持 csv 数据格式。其中 Broker load 还支持 parquet 和 orc 数据格式。")]),_._v(" "),a("p",[_._v("每个导入方式的说明请参阅单个导入方式的操作手册。")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("Broker load")]),_._v(" "),a("p",[_._v("通过 Broker 进程访问并读取外部数据源（如 HDFS）导入到 Doris。用户通过 Mysql 协议提交导入作业后，异步执行。通过 "),a("code",[_._v("SHOW LOAD")]),_._v(" 命令查看导入结果。")])]),_._v(" "),a("li",[a("p",[_._v("Stream load")]),_._v(" "),a("p",[_._v("用户通过 HTTP 协议提交请求并携带原始数据创建导入。主要用于快速将本地文件或数据流中的数据导入到 Doris。导入命令同步返回导入结果。")])]),_._v(" "),a("li",[a("p",[_._v("Insert")]),_._v(" "),a("p",[_._v("类似 MySQL 中的 Insert 语句，Doris 提供 "),a("code",[_._v("INSERT INTO tbl SELECT ...;")]),_._v(" 的方式从 Doris 的表中读取数据并导入到另一张表。或者通过 "),a("code",[_._v("INSERT INTO tbl VALUES(...);")]),_._v(" 插入单条数据。")])]),_._v(" "),a("li",[a("p",[_._v("Multi load")]),_._v(" "),a("p",[_._v("用户通过 HTTP 协议提交多个导入作业。Multi Load 可以保证多个导入作业的原子生效。")])]),_._v(" "),a("li",[a("p",[_._v("Routine load")]),_._v(" "),a("p",[_._v("用户通过 MySQL 协议提交例行导入作业，生成一个常驻线程，不间断的从数据源（如 Kafka）中读取数据并导入到 Doris 中。")])]),_._v(" "),a("li",[a("p",[_._v("通过S3协议直接导入")]),_._v(" "),a("p",[_._v("用户通过S3协议直接导入数据，用法和Broker Load 类似")])])]),_._v(" "),a("h2",{attrs:{id:"基本原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本原理"}},[_._v("#")]),_._v(" 基本原理")]),_._v(" "),a("h3",{attrs:{id:"导入执行流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入执行流程"}},[_._v("#")]),_._v(" 导入执行流程")]),_._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v("+---------+      +---------+      +----------+      +-----------+\n|         |      |         |      |          |      |           |\n| PENDING +-----\x3e+   ETL   +-----\x3e+ LOADING  +-----\x3e+ FINISHED  |\n|         |      |         |      |          |      |           |\n+---------+      +---+-----+      +----+-----+      +-----------+\n     |               |                 |\n     |               |                 |\n     |               |                 |\n     |               |                 |            +-----------+\n     |               |                 |            |           |\n     +---------------+-----------------+------------\x3e CANCELLED |\n                                                    |           |\n                                                    +-----------+\n\n")])]),_._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[_._v("1")]),a("br"),a("span",{staticClass:"line-number"},[_._v("2")]),a("br"),a("span",{staticClass:"line-number"},[_._v("3")]),a("br"),a("span",{staticClass:"line-number"},[_._v("4")]),a("br"),a("span",{staticClass:"line-number"},[_._v("5")]),a("br"),a("span",{staticClass:"line-number"},[_._v("6")]),a("br"),a("span",{staticClass:"line-number"},[_._v("7")]),a("br"),a("span",{staticClass:"line-number"},[_._v("8")]),a("br"),a("span",{staticClass:"line-number"},[_._v("9")]),a("br"),a("span",{staticClass:"line-number"},[_._v("10")]),a("br"),a("span",{staticClass:"line-number"},[_._v("11")]),a("br"),a("span",{staticClass:"line-number"},[_._v("12")]),a("br"),a("span",{staticClass:"line-number"},[_._v("13")]),a("br"),a("span",{staticClass:"line-number"},[_._v("14")]),a("br")])]),a("p",[_._v("如上图，一个导入作业主要经过上面4个阶段。")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("PENDING（非必须）: 该阶段只有 Broker Load 才有。Broker Load 被用户提交后会短暂停留在这个阶段，直到被 FE 中的 Scheduler 调度。 其中 Scheduler 的调度间隔为5秒。")])]),_._v(" "),a("li",[a("p",[_._v("ETL（非必须）： 该阶段在版本 0.10.0(包含) 之前存在，主要是用于将原始数据按照用户声明的方式进行变换，并且过滤不满足条件的原始数据。在 0.10.0 后的版本，ETL 阶段不再存在，其中数据 transform 的工作被合并到 LOADING 阶段。")])]),_._v(" "),a("li",[a("p",[_._v("LOADING： 该阶段在版本 0.10.0（包含）之前主要用于将变换后的数据推到对应的 BE 存储中。在 0.10.0 后的版本，该阶段先对数据进行清洗和变换，然后将数据发送到 BE 存储中。当所有导入数据均完成导入后，进入等待生效过程，此时 Load job 依旧是 LOADING。")])]),_._v(" "),a("li",[a("p",[_._v("FINISHED： 在 Load job 涉及的所有数据均生效后，Load job 的状态变成 FINISHED。FINISHED 后导入的数据均可查询。")])]),_._v(" "),a("li",[a("p",[_._v("CANCELLED: 在作业 FINISH 的之前，作业都可能被取消并进入 CANCELLED 状态。如用户手动取消，或导入出现错误等。CANCELLED 也是 Load Job 的最终状态，不可被再次执行。")])])]),_._v(" "),a("p",[_._v("上述阶段，除了 PENDING 到 LOADING 阶段是 Scheduler 轮训调度的，其他阶段之前的转移都是回调机制实现。")]),_._v(" "),a("h3",{attrs:{id:"label-和-原子性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#label-和-原子性"}},[_._v("#")]),_._v(" Label 和 原子性")]),_._v(" "),a("p",[_._v("Doris 对所有导入方式提供原子性保证。既保证同一个导入作业内的数据，原子生效。不会出现仅导入部分数据的情况。")]),_._v(" "),a("p",[_._v("同时，每一个导入作业都有一个由用户指定或者系统自动生成的 Label。Label 在一个 Database 内唯一。当一个 Label 对应的导入作业成功后，不可再重复使用该 Label 提交导入作业。如果 Label 对应的导入作业失败，则可以重复使用。")]),_._v(" "),a("p",[_._v("用户可以通过 Label 机制，来保证 Label 对应的数据最多被导入一次，即At-Most-Once 语义。")]),_._v(" "),a("h2",{attrs:{id:"同步和异步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步和异步"}},[_._v("#")]),_._v(" 同步和异步")]),_._v(" "),a("p",[_._v("Doris 目前的导入方式分为两类，同步和异步。如果是外部程序接入 Doris 的导入功能，需要判断使用导入方式是哪类再确定接入逻辑。")]),_._v(" "),a("h3",{attrs:{id:"同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步"}},[_._v("#")]),_._v(" 同步")]),_._v(" "),a("p",[_._v("同步导入方式即用户创建导入任务，Doris 同步执行导入，执行完成后返回用户导入结果。用户可直接根据创建导入任务命令返回的结果同步判断导入是否成功。")]),_._v(" "),a("p",[_._v("同步类型的导入方式有: "),a("strong",[_._v("Stream load")]),_._v("，"),a("strong",[_._v("Insert")]),_._v("。")]),_._v(" "),a("p",[_._v("操作步骤：")]),_._v(" "),a("ol",[a("li",[_._v("用户（外部系统）创建导入任务。")]),_._v(" "),a("li",[_._v("Doris 返回导入结果。")]),_._v(" "),a("li",[_._v("用户（外部系统）判断导入结果，如果失败可以再次提交导入任务。")])]),_._v(" "),a("p",[a("em",[_._v("注意：如果用户使用的导入方式是同步返回的，且导入的数据量过大，则创建导入请求可能会花很长时间才能返回结果。")])]),_._v(" "),a("h3",{attrs:{id:"异步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步"}},[_._v("#")]),_._v(" 异步")]),_._v(" "),a("p",[_._v("异步导入方式即用户创建导入任务后，Doris 直接返回创建成功。"),a("strong",[_._v("创建成功不代表数据已经导入")]),_._v("。导入任务会被异步执行，用户在创建成功后，需要通过轮询的方式发送查看命令查看导入作业的状态。如果创建失败，则可以根据失败信息，判断是否需要再次创建。")]),_._v(" "),a("p",[_._v("异步类型的导入方式有："),a("strong",[_._v("Broker load")]),_._v("，"),a("strong",[_._v("Multi load")]),_._v("。")]),_._v(" "),a("p",[_._v("操作步骤：")]),_._v(" "),a("ol",[a("li",[_._v("用户（外部系统）创建导入任务。")]),_._v(" "),a("li",[_._v("Doris 返回导入创建结果。")]),_._v(" "),a("li",[_._v("用户（外部系统）判断导入创建结果，成功则进入4，失败回到重试创建导入，回到1。")]),_._v(" "),a("li",[_._v("用户（外部系统）轮询查看导入任务，直到状态变为 FINISHED 或 CANCELLED。")])]),_._v(" "),a("h3",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[_._v("#")]),_._v(" 注意事项")]),_._v(" "),a("p",[_._v("无论是异步还是同步的导入类型，都不应该在 Doris 返回导入失败或导入创建失败后，无休止的重试。"),a("strong",[_._v("外部系统在有限次数重试并失败后，保留失败信息，大部分多次重试均失败问题都是使用方法问题或数据本身问题。")])]),_._v(" "),a("h2",{attrs:{id:"内存限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存限制"}},[_._v("#")]),_._v(" 内存限制")]),_._v(" "),a("p",[_._v("用户可以通过设置参数来限制单个导入的内存使用，以防止导入占用过多的内存而导致系统OOM。\n不同导入方式限制内存的方式略有不同，可以参阅各自的导入手册查看。")]),_._v(" "),a("p",[_._v("一个导入作业通常会分布在多个 Backend 上执行，导入内存限制的是一个导入作业，在单个 Backend 上的内存使用，而不是在整个集群的内存使用。")]),_._v(" "),a("p",[_._v("同时，每个 Backend 会设置可用于导入的内存的总体上限。具体配置参阅下面的通用系统配置小节。这个配置限制了所有在该 Backend 上运行的导入任务的总体内存使用上限。")]),_._v(" "),a("p",[_._v("较小的内存限制可能会影响导入效率，因为导入流程可能会因为内存达到上限而频繁的将内存中的数据写回磁盘。而过大的内存限制可能导致当导入并发较高时，系统OOM。所以，需要根据需求，合理的设置导入的内存限制。")]),_._v(" "),a("h2",{attrs:{id:"最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[_._v("#")]),_._v(" 最佳实践")]),_._v(" "),a("p",[_._v("用户在接入 Doris 导入时，一般会采用程序接入的方式，这样可以保证数据被定期的导入到 Doris 中。下面主要说明了程序接入 Doris 的最佳实践。")]),_._v(" "),a("ol",[a("li",[_._v("选择合适的导入方式：根据数据源所在位置选择导入方式。例如：如果原始数据存放在 HDFS 上，则使用 Broker load 导入。")]),_._v(" "),a("li",[_._v("确定导入方式的协议：如果选择了 Broker load 导入方式，则外部系统需要能使用 MySQL 协议定期提交和查看导入作业。")]),_._v(" "),a("li",[_._v("确定导入方式的类型：导入方式为同步或异步。比如 Broker load 为异步导入方式，则外部系统在提交创建导入后，必须调用查看导入命令，根据查看导入命令的结果来判断导入是否成功。")]),_._v(" "),a("li",[_._v("制定 Label 生成策略：Label 生成策略需满足，每一批次数据唯一且固定的原则。这样 Doris 就可以保证 At-Most-Once。")]),_._v(" "),a("li",[_._v("程序自身保证 At-Least-Once：外部系统需要保证自身的 At-Least-Once，这样就可以保证导入流程的 Exactly-Once。")])]),_._v(" "),a("h2",{attrs:{id:"通用系统配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用系统配置"}},[_._v("#")]),_._v(" 通用系统配置")]),_._v(" "),a("p",[_._v("下面主要解释了几个所有导入方式均通用的系统级别的配置。")]),_._v(" "),a("h3",{attrs:{id:"fe-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fe-配置"}},[_._v("#")]),_._v(" FE 配置")]),_._v(" "),a("p",[_._v("以下配置属于 FE 的系统配置，可以通过修改 FE 的配置文件 "),a("code",[_._v("fe.conf")]),_._v(" 来修改配置。")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("max_load_timeout_second 和 min_load_timeout_second")]),_._v(" "),a("p",[_._v("这两个配置含义为：最大的导入超时时间，最小的导入超时时间，以秒为单位。默认的最大超时时间为3天, 默认的最小超时时间为1秒。用户自定义的导入超时时间不可超过这个范围。该参数通用于所有的导入方式。")])]),_._v(" "),a("li",[a("p",[_._v("desired_max_waiting_jobs")]),_._v(" "),a("p",[_._v("在等待队列中的导入任务个数最大值，默认为100。当在 FE 中处于 PENDING 状态（也就是等待执行的）导入个数超过该值，新的导入请求则会被拒绝。")]),_._v(" "),a("p",[_._v("此配置仅对异步执行的导入有效，当异步执行的导入等待个数超过默认值，则后续的创建导入请求会被拒绝。")])]),_._v(" "),a("li",[a("p",[_._v("max_running_txn_num_per_db")]),_._v(" "),a("p",[_._v("这个配置的含义是说，每个 Database 中正在运行的导入最大个数（不区分导入类型，统一计数）。默认的最大导入并发为 100。当当前 Database 正在运行的导入个数超过最大值时，后续的导入不会被执行。如果是同步导入作业，则导入会被拒绝。如果是异步导入作业。则作业会在队列中等待。")])])]),_._v(" "),a("h3",{attrs:{id:"be-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#be-配置"}},[_._v("#")]),_._v(" BE 配置")]),_._v(" "),a("p",[_._v("以下配置属于 BE 的系统配置，可以通过修改 BE 的配置文件 "),a("code",[_._v("be.conf")]),_._v(" 来修改配置。")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("push_write_mbytes_per_sec")]),_._v(" "),a("p",[_._v("BE 上单个 Tablet 的写入速度限制。默认是 10，即 10MB/s。通常 BE 对单个 Tablet 的最大写入速度，根据 Schema 以及系统的不同，大约在 10-30MB/s 之间。可以适当调整这个参数来控制导入速度。")])]),_._v(" "),a("li",[a("p",[_._v("write_buffer_size")]),_._v(" "),a("p",[_._v("导入数据在 BE 上会先写入一个 memtable，memtable 达到阈值后才会写回磁盘。默认大小是 100MB。过小的阈值可能导致 BE 上存在大量的小文件。可以适当提高这个阈值减少文件数量。但过大的阈值可能导致 RPC 超时，见下面的配置说明。")])]),_._v(" "),a("li",[a("p",[_._v("tablet_writer_rpc_timeout_sec")]),_._v(" "),a("p",[_._v("导入过程中，发送一个 Batch（1024行）的 RPC 超时时间。默认 600 秒。因为该 RPC 可能涉及多个 memtable 的写盘操作，所以可能会因为写盘导致 RPC 超时，可以适当调整这个超时时间来减少超时错误（如 "),a("code",[_._v("send batch fail")]),_._v(" 错误）。同时，如果调大 "),a("code",[_._v("write_buffer_size")]),_._v(" 配置，也需要适当调大这个参数。")])]),_._v(" "),a("li",[a("p",[_._v("streaming_load_rpc_max_alive_time_sec")]),_._v(" "),a("p",[_._v("在导入过程中，Doris 会为每一个 Tablet 开启一个 Writer，用于接收数据并写入。这个参数指定了 Writer 的等待超时时间。如果在这个时间内，Writer 没有收到任何数据，则 Writer 会被自动销毁。当系统处理速度较慢时，Writer 可能长时间接收不到下一批数据，导致导入报错："),a("code",[_._v("TabletWriter add batch with unknown id")]),_._v("。此时可适当增大这个配置。默认为 600 秒。")])])]),_._v(" "),a("ul",[a("li",[a("p",[_._v("load_process_max_memory_limit_bytes 和 load_process_max_memory_limit_percent")]),_._v(" "),a("p",[_._v("这两个参数，限制了单个 Backend 上，可用于导入任务的内存上限。分别是最大内存和最大内存百分比。"),a("code",[_._v("load_process_max_memory_limit_percent")]),_._v(" 默认为 80，表示对 Backend 总内存限制的百分比（总内存限制 "),a("code",[_._v("mem_limit")]),_._v(" 默认为 80%，表示对物理内存的百分比）。即假设物理内存为 M，则默认导入内存限制为 M * 80% * 80%。")]),_._v(" "),a("p",[a("code",[_._v("load_process_max_memory_limit_bytes")]),_._v(" 默认为 100GB。系统会在两个参数中取较小者，作为最终的 Backend 导入内存使用上限。")])])]),_._v(" "),a("ul",[a("li",[a("p",[_._v("label_keep_max_second")]),_._v(" "),a("p",[_._v("设置导入任务记录保留时间。已经完成的（ FINISHED or CANCELLED ）导入任务记录会保留在 Doris 系统中一段时间，时间由此参数决定。参数默认值时间为3天。该参数通用与所有类型的导入任务。")])])]),_._v(" "),a("h3",{attrs:{id:"列映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列映射"}},[_._v("#")]),_._v(" 列映射")]),_._v(" "),a("p",[_._v("假设导入数据有为 "),a("code",[_._v("1，2，3")]),_._v("，表有 "),a("code",[_._v("c1,c2,c3")]),_._v(" 三列，如果数据直接导入表中可以使用如下语句 "),a("code",[_._v("COLUMNS(c1,c2,c3)")]),_._v(" 此语句等价于 "),a("code",[_._v("COLUMNS(tmp_c1,tmp_c2,tmp_c3,c1=tmp_c1,c2=tmp_c2,c3=tmp_c3)")]),_._v("\n如果想再导入数据时执行变换或者使用临时变量，则变换或者临时变量一定要按照使用的顺序指定， 例如 "),a("code",[_._v("COLUMNS(tmp_c1,tmp_c2,tmp_c3, c1 = tmp_c1 +1, c2= c1+1, c3 =c2+1)")]),_._v(", 这样的语句等价于 "),a("code",[_._v("COLUMNS(tmp_c1,tmp_c2,tmp_c3, c1 = tmp_c1 +1, c2= tmp_c1 +1+1, c3 =tmp_c1 +1+1+1)")]),_._v("\n在使用某个表达式时这个表达式一定要在前面定义，例如如下语句则不合法 "),a("code",[_._v("COLUMNS(tmp_c1,tmp_c2,tmp_c3, c1 = c1+1, c2 = temp + 1, temp = tmp_c1 +1, c3 =c2+1)")])])])}),[],!1,null,null,null);v.default=t.exports}}]);