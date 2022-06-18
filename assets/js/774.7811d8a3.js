(window.webpackJsonp=window.webpackJsonp||[]).push([[774],{1398:function(a,e,t){"use strict";t.r(e);var s=t(15),_=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"数据导入事物及原子性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据导入事物及原子性"}},[a._v("#")]),a._v(" 数据导入事物及原子性")]),a._v(" "),t("p",[a._v("Doris 中的所有导入操作都有原子性保证，即一个导入作业中的数据要么全部成功，要么全部失败。不会出现仅部分数据导入成功的情况。")]),a._v(" "),t("p",[a._v("在 "),t("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD.html"}},[a._v("BROKER LOAD")]),a._v(" 中我们也可以实现多多表的原子性导入。")],1),a._v(" "),t("p",[a._v("对于表所附属的 "),t("RouterLink",{attrs:{to:"/zh-CN/docs/advanced/materialized-view.html"}},[a._v("物化视图")]),a._v("，也同时保证和基表的原子性和一致性。")],1),a._v(" "),t("h2",{attrs:{id:"label-机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#label-机制"}},[a._v("#")]),a._v(" Label 机制")]),a._v(" "),t("p",[a._v("Doris 的导入作业都可以设置一个 Label。这个 Label 通常是用户自定义的、具有一定业务逻辑属性的字符串。")]),a._v(" "),t("p",[a._v("Label 的主要作用是唯一标识一个导入任务，并且能够保证相同的 Label 仅会被成功导入一次。")]),a._v(" "),t("p",[a._v("Label 机制可以保证导入数据的不丢不重。如果上游数据源能够保证 At-Least-Once 语义，则配合 Doris 的 Label 机制，能够保证 Exactly-Once 语义。")]),a._v(" "),t("p",[a._v("Label 在一个数据库下具有唯一性。Label 的保留期限默认是 3 天。即 3 天后，已完成的 Label 会被自动清理，之后 Label 可以被重复使用。")]),a._v(" "),t("h2",{attrs:{id:"最佳实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[a._v("#")]),a._v(" 最佳实践")]),a._v(" "),t("p",[a._v("Label 通常被设置为 "),t("code",[a._v("业务逻辑+时间")]),a._v(" 的格式。如 "),t("code",[a._v("my_business1_20220330_125000")]),a._v("。")]),a._v(" "),t("p",[a._v("这个 Label 通常用于表示：业务 "),t("code",[a._v("my_business1")]),a._v(" 这个业务在 "),t("code",[a._v("2022-03-30 12:50:00")]),a._v(" 产生的一批数据。通过这种 Label 设定，业务上可以通过 Label 查询导入任务状态，来明确的获知该时间点批次的数据是否已经导入成功。如果没有成功，则可以使用这个 Label 继续重试导入。")])])}),[],!1,null,null,null);e.default=_.exports}}]);