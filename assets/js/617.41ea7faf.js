(window.webpackJsonp=window.webpackJsonp||[]).push([[617],{1241:function(t,a,i){"use strict";i.r(a);var p=i(15),o=Object(p.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"统计数据"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#统计数据"}},[t._v("#")]),t._v(" 统计数据")]),t._v(" "),i("p",[t._v("共 25 位作者提交了 43 个 Commit 。感谢以下作者的贡献（Github ID，按字母序）：")]),t._v(" "),i("p",[t._v("caiconghui, chaplinthink, chovy-3012, dh-cloud, dongweizhao, EmmyMiao87, GoGoWen, HappenLee, hf200012, jackwener, kezhenxu94, MeiontheTop, morningman, qidaye, renzhimin7, SleepyBear96, sparklezzz, tianhui5, tinkerrrr, weizuo93, xinghuayu007, xinyiZzz, yangzhg, zenoyang, zuochunwei")]),t._v(" "),i("p",[t._v("最近 2 周，共修改新增代码行 4699 ，删除代码行 3483 。")]),t._v(" "),i("h2",{attrs:{id:"主要进展"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#主要进展"}},[t._v("#")]),t._v(" 主要进展")]),t._v(" "),i("h3",{attrs:{id:"新增功能"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#新增功能"}},[t._v("#")]),t._v(" 新增功能")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7155")]),t._v(" "),i("p",[t._v("支持将 BE 节点标记为不可读或不可导入，已屏蔽部分故障节点。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7149")]),t._v(" "),i("p",[t._v("新增 Z-Order 数据排序方式。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7269")]),t._v(" "),i("p",[t._v("支持 Lateral View 列转行功能。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7211")]),t._v(" "),i("p",[t._v("支持正交 bitmap 函数（orthogonal bitmap function）")])])]),t._v(" "),i("h3",{attrs:{id:"bug-修复"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bug-修复"}},[t._v("#")]),t._v(" Bug 修复")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7193")]),t._v(" "),i("p",[t._v("修复 Broker Load 中使用 preceding filter 可能导致 BE 宕机的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7262")]),t._v(" "),i("p",[t._v("修复读取长度超过 2GB 的字符串时，可能导致 MySQL 客户端报错 Malformed 的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7262")]),t._v(" "),i("p",[t._v("修复 BE 处理 null 字符串可能导致结果不正确的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7297")]),t._v(" "),i("p",[t._v("修复 show data skew 命令可能导致FE OOM 的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7290")]),t._v(" "),i("p",[t._v("修复 outer join 是处理 nullable slotref 逻辑错误。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7254")]),t._v(" "),i("p",[t._v("修复某些情况下 show load 语句可能会卡住的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7260")]),t._v(" "),i("p",[t._v("修复手动触发 compaction 时可能导致 BE 宕机的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7323")]),t._v(" "),i("p",[t._v("修复关键词 stream 导致元数据无法读取的问题。")])])]),t._v(" "),i("h3",{attrs:{id:"功能改进"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#功能改进"}},[t._v("#")]),t._v(" 功能改进")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7164")]),t._v(" "),i("p",[t._v("支持通过 BRPC 的 Attachment 方式传输数据，以减少序列化开销。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7251")]),t._v(" "),i("p",[t._v("Routine Load 支持通过 plain password 的方式访问 Kafka。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7236")]),t._v(" "),i("p",[t._v("通过 SIMD 指令优化一些字符串函数的执行效率。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7281")]),t._v(" "),i("p",[t._v("Spark Doris Connector 支持设定批次大小和批次间隔时间。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7231")]),t._v(" "),i("p",[t._v("优化 sql cache，提升 sql cache 的命中率。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7283")]),t._v(" "),i("p",[t._v("Compaction URL 结果中增加 missing rowset。")])])])])}),[],!1,null,null,null);a.default=o.exports}}]);