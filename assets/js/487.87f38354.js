(window.webpackJsonp=window.webpackJsonp||[]).push([[487],{1109:function(s,t,a){"use strict";a.r(t);var e=a(15),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"alter-routine-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alter-routine-load"}},[s._v("#")]),s._v(" ALTER-ROUTINE-LOAD")]),s._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),a("p",[s._v("ALTER ROUTINE LOAD")]),s._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),a("p",[s._v("This syntax is used to modify an already created routine import job.")]),s._v(" "),a("p",[s._v("Only jobs in the PAUSED state can be modified.")]),s._v(" "),a("p",[s._v("grammar:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROUTINE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("job_name\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("job_properties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" data_source\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("data_source_properties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",[a("li",[a("p",[a("code",[s._v("[db.]job_name")])]),s._v(" "),a("p",[s._v("Specifies the job name to modify.")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("tbl_name")])]),s._v(" "),a("p",[s._v("Specifies the name of the table to be imported.")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("job_properties")])]),s._v(" "),a("p",[s._v("Specifies the job parameters that need to be modified. Currently, only the modification of the following parameters is supported:")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("desired_concurrent_number")])]),s._v(" "),a("li",[a("code",[s._v("max_error_number")])]),s._v(" "),a("li",[a("code",[s._v("max_batch_interval")])]),s._v(" "),a("li",[a("code",[s._v("max_batch_rows")])]),s._v(" "),a("li",[a("code",[s._v("max_batch_size")])]),s._v(" "),a("li",[a("code",[s._v("jsonpaths")])]),s._v(" "),a("li",[a("code",[s._v("json_root")])]),s._v(" "),a("li",[a("code",[s._v("strip_outer_array")])]),s._v(" "),a("li",[a("code",[s._v("strict_mode")])]),s._v(" "),a("li",[a("code",[s._v("timezone")])]),s._v(" "),a("li",[a("code",[s._v("num_as_string")])]),s._v(" "),a("li",[a("code",[s._v("fuzzy_parse")])])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("data_source")])]),s._v(" "),a("p",[s._v("The type of data source. Currently supports:")]),s._v(" "),a("p",[s._v("KAFKA")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("data_source_properties")])]),s._v(" "),a("p",[s._v("Relevant properties of the data source. Currently only supports:")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("kafka_partitions")])]),s._v(" "),a("li",[a("code",[s._v("kafka_offsets")])]),s._v(" "),a("li",[a("code",[s._v("kafka_broker_list")])]),s._v(" "),a("li",[a("code",[s._v("kafka_topic")])]),s._v(" "),a("li",[s._v("Custom properties, such as "),a("code",[s._v("property.group.id")])])]),s._v(" "),a("p",[s._v("Note:")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("kafka_partitions")]),s._v(" and "),a("code",[s._v("kafka_offsets")]),s._v(" are used to modify the offset of the kafka partition to be consumed, only the currently consumed partition can be modified. Cannot add partition.")])])])]),s._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Change "),a("code",[s._v("desired_concurrent_number")]),s._v(" to 1")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROUTINE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" db1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("label1\nPROPERTIES\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"desired_concurrent_number"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Modify "),a("code",[s._v("desired_concurrent_number")]),s._v(" to 10, modify the offset of the partition, and modify the group id.")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROUTINE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" db1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("label1\nPROPERTIES\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"desired_concurrent_number"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" kafka\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka_partitions"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0, 1, 2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka_offsets"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"100, 200, 100"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"property.group.id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"new_group"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("ALTER, ROUTINE, LOAD\n")])])]),a("h3",{attrs:{id:"best-practice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);t.default=r.exports}}]);