(window.webpackJsonp=window.webpackJsonp||[]).push([[4046],{4676:function(t,e,a){"use strict";a.r(e);var s=a(15),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tablet-恢复工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tablet-恢复工具"}},[t._v("#")]),t._v(" Tablet 恢复工具")]),t._v(" "),a("h2",{attrs:{id:"从-be-回收站中恢复数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从-be-回收站中恢复数据"}},[t._v("#")]),t._v(" 从 BE 回收站中恢复数据")]),t._v(" "),a("p",[t._v("用户在使用Doris的过程中，可能会发生因为一些误操作或者线上bug，导致一些有效的tablet被删除（包括元数据和数据）。为了防止在这些异常情况出现数据丢失，Doris提供了回收站机制，来保护用户数据。用户删除的tablet数据不会被直接删除，会被放在回收站中存储一段时间，在一段时间之后会有定时清理机制将过期的数据删除。回收站中的数据包括：tablet的data文件(.dat)，tablet的索引文件(.idx)和tablet的元数据文件(.hdr)。数据将会存放在如下格式的路径：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/root_path/trash/time_label/tablet_id/schema_hash/\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[t._v("root_path")]),t._v("：对应BE节点的某个数据根目录。")]),t._v(" "),a("li",[a("code",[t._v("trash")]),t._v("：回收站的目录。")]),t._v(" "),a("li",[a("code",[t._v("time_label")]),t._v("：时间标签，为了回收站中数据目录的唯一性，同时记录数据时间，使用时间标签作为子目录。")])]),t._v(" "),a("p",[t._v("当用户发现线上的数据被误删除，需要从回收站中恢复被删除的tablet，需要用到这个tablet数据恢复功能。")]),t._v(" "),a("p",[t._v("BE提供http接口和 "),a("code",[t._v("restore_tablet_tool.sh")]),t._v(" 脚本实现这个功能，支持单tablet操作（single mode）和批量操作模式（batch mode）。")]),t._v(" "),a("ul",[a("li",[t._v("在single mode下，支持单个tablet的数据恢复。")]),t._v(" "),a("li",[t._v("在batch mode下，支持批量tablet的数据恢复。")])]),t._v(" "),a("h3",{attrs:{id:"操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[t._v("#")]),t._v(" 操作")]),t._v(" "),a("h4",{attrs:{id:"single-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-mode"}},[t._v("#")]),t._v(" single mode")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("http请求方式")]),t._v(" "),a("p",[t._v("BE中提供单个tablet数据恢复的http接口，接口如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl -X POST "http://be_host:be_webserver_port/api/restore_tablet?tablet_id=11111\\&schema_hash=12345"\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("成功的结果如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{"status": "Success", "msg": "OK"}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("失败的话，会返回相应的失败原因，一种可能的结果如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{"status": "Failed", "msg": "create link path failed"}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("脚本方式")]),t._v(" "),a("p",[a("code",[t._v("restore_tablet_tool.sh")]),t._v(" 可用来实现单tablet数据恢复的功能。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('sh tools/restore_tablet_tool.sh -b "http://127.0.0.1:8040" -t 12345 -s 11111\nsh tools/restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --tablet_id 12345 --schema_hash 11111\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])]),t._v(" "),a("h4",{attrs:{id:"batch-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#batch-mode"}},[t._v("#")]),t._v(" batch mode")]),t._v(" "),a("p",[t._v("批量恢复模式用于实现恢复多个tablet数据的功能。")]),t._v(" "),a("p",[t._v("使用的时候需要预先将恢复的tablet id和schema hash按照逗号分隔的格式放在一个文件中，一个tablet一行。")]),t._v(" "),a("p",[t._v("格式如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("12345,11111\n12346,11111\n12347,11111\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("然后如下的命令进行恢复(假设文件名为："),a("code",[t._v("tablets.txt")]),t._v(")：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('sh restore_tablet_tool.sh -b "http://127.0.0.1:8040" -f tablets.txt\nsh restore_tablet_tool.sh --backend "http://127.0.0.1:8040" --file tablets.txt\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"修复缺失或损坏的-tablet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复缺失或损坏的-tablet"}},[t._v("#")]),t._v(" 修复缺失或损坏的 Tablet")]),t._v(" "),a("p",[t._v("在某些极特殊情况下，如代码BUG、或人为误操作等，可能导致部分分片的全部副本都丢失。这种情况下，数据已经实质性的丢失。但是在某些场景下，业务依然希望能够在即使有数据丢失的情况下，保证查询正常不报错，降低用户层的感知程度。此时，我们可以通过使用空白Tablet填充丢失副本的功能，来保证查询能够正常执行。")]),t._v(" "),a("p",[a("strong",[t._v("注：该操作仅用于规避查询因无法找到可查询副本导致报错的问题，无法恢复已经实质性丢失的数据")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("查看 Master FE 日志 "),a("code",[t._v("fe.log")])]),t._v(" "),a("p",[t._v("如果出现数据丢失的情况，则日志中会有类似如下日志：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("backend [10001] invalid situation. tablet[20000] has few replica[1], replica num setting is [3]\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这个日志表示，Tablet 20000 的所有副本已损坏或丢失。")])]),t._v(" "),a("li",[a("p",[t._v("使用空白副本填补缺失副本")]),t._v(" "),a("p",[t._v("当确认数据已经无法恢复后，可以通过执行以下命令，生成空白副本。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ADMIN SET FRONTEND CONFIG ("recover_with_empty_tablet" = "true");\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("注：可以先通过 "),a("code",[t._v("ADMIN SHOW FRONTEND CONFIG;")]),t._v(" 命令查看当前版本是否支持该参数。")])])]),t._v(" "),a("li",[a("p",[t._v("设置完成几分钟后，应该会在 Master FE 日志 "),a("code",[t._v("fe.log")]),t._v(" 中看到如下日志：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("tablet 20000 has only one replica 20001 on backend 10001 and it is lost. create an empty replica to recover it.\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("该日志表示系统已经创建了一个空白 Tablet 用于填补缺失副本。")])]),t._v(" "),a("li",[a("p",[t._v("通过查询来判断是否已经修复成功。")])]),t._v(" "),a("li",[a("p",[t._v("全部修复成功后，通过以下命令关闭 "),a("code",[t._v("recover_with_empty_tablet")]),t._v(" 参数：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ADMIN SET FRONTEND CONFIG ("recover_with_empty_tablet" = "false");\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);