(window.webpackJsonp=window.webpackJsonp||[]).push([[1141],{1766:function(a,s,e){"use strict";e.r(s);var t=e(15),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"show-backup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-backup"}},[a._v("#")]),a._v(" SHOW-BACKUP")]),a._v(" "),e("h3",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[a._v("#")]),a._v(" Name")]),a._v(" "),e("p",[a._v("SHOW BACKUP")]),a._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" Description")]),a._v(" "),e("p",[a._v("该语句用于查看 BACKUP 任务")]),a._v(" "),e("p",[a._v("语法：")]),a._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BACKUP")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" db_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("说明：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("    1. Doris 中仅保存最近一次 BACKUP 任务。\n    2. 各列含义如下：\n        JobId：                  唯一作业id\n        SnapshotName：           备份的名称\n        DbName：                 所属数据库\n        State：                  当前阶段\n            PENDING：        提交作业后的初始状态\n            SNAPSHOTING：    执行快照中\n            UPLOAD_SNAPSHOT：快照完成，准备上传\n            UPLOADING：      快照上传中\n            SAVE_META：      将作业元信息保存为本地文件\n            UPLOAD_INFO：    上传作业元信息\n            FINISHED：       作业成功\n            CANCELLED：      作业失败\n        BackupObjs：             备份的表和分区\n        CreateTime：             任务提交时间\n        SnapshotFinishedTime：   快照完成时间\n        UploadFinishedTime：     快照上传完成时间\n        FinishedTime：           作业结束时间\n        UnfinishedTasks：        在 SNAPSHOTING 和 UPLOADING 阶段会显示还未完成的子任务id\n        Status：                 如果作业失败，显示失败信息\n        Timeout：                作业超时时间，单位秒\n")])])]),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" Example")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("查看 example_db 下最后一次 BACKUP 任务。")]),a._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BACKUP")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" example_db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])])]),a._v(" "),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[a._v("#")]),a._v(" Keywords")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("SHOW, BACKUP\n")])])]),e("h3",{attrs:{id:"best-practice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[a._v("#")]),a._v(" Best Practice")])])}),[],!1,null,null,null);s.default=n.exports}}]);