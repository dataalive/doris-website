(window.webpackJsonp=window.webpackJsonp||[]).push([[583],{1206:function(e,t,s){"use strict";s.r(t);var a=s(15),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"show-restore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-restore"}},[e._v("#")]),e._v(" SHOW-RESTORE")]),e._v(" "),s("h3",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[e._v("#")]),e._v(" Name")]),e._v(" "),s("p",[e._v("SHOW RESTORE")]),e._v(" "),s("h3",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),s("p",[e._v("This statement is used to view RESTORE tasks")]),e._v(" "),s("p",[e._v("grammar:")]),e._v(" "),s("div",{staticClass:"language-SQL line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SHOW")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RESTORE")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" DB_NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("illustrate:\n1. Only the most recent RESTORE task is saved in Doris.\n2. The meaning of each column is as follows:\nJobId: Unique job id\nLabel: The name of the backup to restore\nTimestamp: The time version of the backup to restore\nDbName: belongs to the database\nState: current stage\nPENDING: The initial state after submitting the job\nSNAPSHOTING: Executing snapshot\nDOWNLOAD: The snapshot is complete, ready to download the snapshot in the repository\nDOWNLOADING: Snapshot downloading\nCOMMIT: Snapshot download is complete, ready to take effect\nCOMMITING: in effect\nFINISHED: The job was successful\nCANCELLED: Job failed\nAllowLoad: Whether to allow import when restoring (currently not supported)\nReplicationNum: Specifies the number of replicas to restore\nRestoreJobs: Tables and partitions to restore\nCreateTime: task submission time\nMetaPreparedTime: Metadata preparation completion time\nSnapshotFinishedTime: Snapshot completion time\nDownloadFinishedTime: Snapshot download completion time\nFinishedTime: Job finish time\nUnfinishedTasks: Displays unfinished subtask ids during SNAPSHOTING, DOWNLOADING and COMMITING stages\nStatus: If the job fails, display the failure message\nTimeout: Job timeout, in seconds")]),e._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("View the latest RESTORE task under example_db.")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SHOW")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RESTORE")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" example_db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])]),e._v(" "),s("h3",{attrs:{id:"keywords"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[e._v("#")]),e._v(" Keywords")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("SHOW, RESTORE\n")])])]),s("h3",{attrs:{id:"best-practice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[e._v("#")]),e._v(" Best Practice")])])}),[],!1,null,null,null);t.default=n.exports}}]);