(window.webpackJsonp=window.webpackJsonp||[]).push([[1835],{2463:function(e,t,a){"use strict";a.r(t);var o=a(15),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"routine-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routine-load"}},[e._v("#")]),e._v(" Routine Load")]),e._v(" "),a("p",[e._v("The Routine Load feature provides users with a way to automatically load data from a specified data source.")]),e._v(" "),a("p",[e._v("This document describes the implementation principles, usage, and best practices of this feature.")]),e._v(" "),a("h2",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),a("ul",[a("li",[e._v("RoutineLoadJob: A routine load job submitted by the user.")]),e._v(" "),a("li",[e._v("JobScheduler: A routine load job scheduler for scheduling and dividing a RoutineLoadJob into multiple Tasks.")]),e._v(" "),a("li",[e._v("Task: RoutineLoadJob is divided by JobScheduler according to the rules.")]),e._v(" "),a("li",[e._v("TaskScheduler: Task Scheduler. Used to schedule the execution of a Task.")])]),e._v(" "),a("h2",{attrs:{id:"principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#principle"}},[e._v("#")]),e._v(" Principle")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("         +---------+\n         |  Client |\n         +----+----+\n              |\n+-----------------------------+\n| FE          |               |\n| +-----------v------------+  |\n| |                        |  |\n| |   Routine Load Job     |  |\n| |                        |  |\n| +---+--------+--------+--+  |\n|     |        |        |     |\n| +---v--+ +---v--+ +---v--+  |\n| | task | | task | | task |  |\n| +--+---+ +---+--+ +---+--+  |\n|    |         |        |     |\n+-----------------------------+\n     |         |        |\n     v         v        v\n +---+--+   +--+---+   ++-----+\n |  BE  |   |  BE  |   |  BE  |\n +------+   +------+   +------+\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br")])]),a("p",[e._v("As shown above, the client submits a routine load job to FE.")]),e._v(" "),a("p",[e._v("FE splits an load job into several Tasks via JobScheduler. Each Task is responsible for loading a specified portion of the data. The Task is assigned by the TaskScheduler to the specified BE.")]),e._v(" "),a("p",[e._v("On the BE, a Task is treated as a normal load task and loaded via the Stream Load load mechanism. After the load is complete, report to FE.")]),e._v(" "),a("p",[e._v("The JobScheduler in the FE continues to generate subsequent new Tasks based on the reported results, or retry the failed Task.")]),e._v(" "),a("p",[e._v("The entire routine load job completes the uninterrupted load of data by continuously generating new Tasks.")]),e._v(" "),a("h2",{attrs:{id:"kafka-routine-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kafka-routine-load"}},[e._v("#")]),e._v(" Kafka Routine load")]),e._v(" "),a("p",[e._v("Currently we only support routine load from the Kafka system. This section details Kafka's routine use and best practices.")]),e._v(" "),a("h3",{attrs:{id:"usage-restrictions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-restrictions"}},[e._v("#")]),e._v(" Usage restrictions")]),e._v(" "),a("ol",[a("li",[e._v("Support unauthenticated Kafka access and Kafka clusters certified by SSL.")]),e._v(" "),a("li",[e._v("The supported message format is csv text or json format. Each message is a line in csv format, and the end of the line does not contain a ** line break.")]),e._v(" "),a("li",[e._v("Kafka 0.10.0.0 (inclusive) or above is supported by default. If you want to use Kafka versions below 0.10.0.0 (0.9.0.x, 0.8.x.y), you need to modify the configuration of be, set the value of kafka_broker_version_fallback to be the older version and set the value of kafka_api_version_request to be false, or directly set the value of property.broker.version.fallback to the old version and set the value of property.api.version.request to be false when creating routine load. The cost of the old version is that some new features of routine load may not be available, such as setting the offset of the kafka partition by time.")])]),e._v(" "),a("h3",{attrs:{id:"create-a-routine-load-task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-routine-load-task"}},[e._v("#")]),e._v(" Create a routine load task")]),e._v(" "),a("p",[e._v("The detailed syntax for creating a routine load task can be connected to Doris and execute "),a("code",[e._v("HELP ROUTINE LOAD;")]),e._v(" to see the syntax help. Here is a detailed description of the precautions when creating a job.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("columns_mapping")]),e._v(" "),a("p",[a("code",[e._v("columns_mapping")]),e._v(" is mainly used to specify the column structure of the table structure and message, as well as the conversion of some columns. If not specified, Doris will default to the columns in the message and the columns of the table structure in a one-to-one correspondence. Although under normal circumstances, if the source data is exactly one-to-one, normal data load can be performed without specifying. However, we still strongly recommend that users ** explicitly specify column mappings**. This way, when the table structure changes (such as adding a nullable column), or the source file changes (such as adding a column), the load task can continue. Otherwise, after the above changes occur, the load will report an error because the column mapping relationship is no longer one-to-one.")]),e._v(" "),a("p",[e._v("In "),a("code",[e._v("columns_mapping")]),e._v(" we can also use some built-in functions for column conversion. But you need to pay attention to the actual column type corresponding to the function parameters. for example:")]),e._v(" "),a("p",[e._v("Suppose the user needs to load a table containing only a column of "),a("code",[e._v("k1")]),e._v(" with a column type of "),a("code",[e._v("int")]),e._v(". And you need to convert the null value in the source file to 0. This feature can be implemented with the "),a("code",[e._v("ifnull")]),e._v(" function. The correct way to use is as follows:")]),e._v(" "),a("p",[a("code",[e._v('COLUMNS (xx, k1=ifnull(xx, "3"))')])]),e._v(" "),a("p",[e._v("Note that we use "),a("code",[e._v('"3"')]),e._v(" instead of "),a("code",[e._v("3")]),e._v(", although "),a("code",[e._v("k1")]),e._v(" is of type "),a("code",[e._v("int")]),e._v(". Because the column type in the source data is "),a("code",[e._v("varchar")]),e._v(" for the load task, the "),a("code",[e._v("xx")]),e._v(" virtual column is also of type "),a("code",[e._v("varchar")]),e._v(". So we need to use "),a("code",[e._v('"3"')]),e._v(" to match the match, otherwise the "),a("code",[e._v("ifnull")]),e._v(" function can't find the function signature with the parameter "),a("code",[e._v("(varchar, int)")]),e._v(", and an error will occur.")]),e._v(" "),a("p",[e._v("As another example, suppose the user needs to load a table containing only a column of "),a("code",[e._v("k1")]),e._v(" with a column type of "),a("code",[e._v("int")]),e._v(". And you need to process the corresponding column in the source file: convert the negative number to a positive number and the positive number to 100. This function can be implemented with the "),a("code",[e._v("case when")]),e._v(" function. The correct wording should be as follows:")]),e._v(" "),a("p",[a("code",[e._v("COLUMNS (xx, k1 = case when xx < 0 then cast(-xx as varchar) else cast((xx + '100') as varchar) end)")])]),e._v(" "),a("p",[e._v("Note that we need to convert all the parameters in "),a("code",[e._v("case when")]),e._v(" to varchar in order to get the desired result.")])]),e._v(" "),a("li",[a("p",[e._v("where_predicates")]),e._v(" "),a("p",[e._v("The type of the column in "),a("code",[e._v("where_predicates")]),e._v(" is already the actual column type, so there is no need to cast to the varchar type as "),a("code",[e._v("columns_mapping")]),e._v(". Write according to the actual column type.")])]),e._v(" "),a("li",[a("p",[e._v("desired_concurrent_number")]),e._v(" "),a("p",[a("code",[e._v("desired_concurrent_number")]),e._v(" is used to specify the degree of concurrency expected for a routine job. That is, a job, at most how many tasks are executing at the same time. For Kafka load, the current actual concurrency is calculated as follows:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Min(partition num, desired_concurrent_number, Config.max_routine_load_task_concurrrent_num)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Where "),a("code",[e._v("Config.max_routine_load_task_concurrrent_num")]),e._v(" is a default maximum concurrency limit for the system. This is a FE configuration that can be adjusted by changing the configuration. The default is 5.")]),e._v(" "),a("p",[e._v("Where partition num refers to the number of partitions for the Kafka topic subscribed to.")])]),e._v(" "),a("li",[a("p",[e._v("max_batch_interval/max_batch_rows/max_batch_size")]),e._v(" "),a("p",[e._v("These three parameters are used to control the execution time of a single task. If any of the thresholds is reached, the task ends. Where "),a("code",[e._v("max_batch_rows")]),e._v(" is used to record the number of rows of data read from Kafka. "),a("code",[e._v("max_batch_size")]),e._v(" is used to record the amount of data read from Kafka in bytes. The current consumption rate for a task is approximately 5-10MB/s.")]),e._v(" "),a("p",[e._v("So assume a row of data 500B, the user wants to be a task every 100MB or 10 seconds. The expected processing time for 100MB is 10-20 seconds, and the corresponding number of rows is about 200000 rows. Then a reasonable configuration is:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"max_batch_interval" = "10",\n"max_batch_rows" = "200000",\n"max_batch_size" = "104857600"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("The parameters in the above example are also the default parameters for these configurations.")])]),e._v(" "),a("li",[a("p",[e._v("max_error_number")]),e._v(" "),a("p",[a("code",[e._v("max_error_number")]),e._v(" is used to control the error rate. When the error rate is too high, the job will automatically pause. Because the entire job is stream-oriented, and because of the borderless nature of the data stream, we can't calculate the error rate with an error ratio like other load tasks. So here is a new way of calculating to calculate the proportion of errors in the data stream.")]),e._v(" "),a("p",[e._v("We have set up a sampling window. The size of the window is "),a("code",[e._v("max_batch_rows * 10")]),e._v(". Within a sampling window, if the number of error lines exceeds "),a("code",[e._v("max_error_number")]),e._v(", the job is suspended. If it is not exceeded, the next window restarts counting the number of error lines.")]),e._v(" "),a("p",[e._v("We assume that "),a("code",[e._v("max_batch_rows")]),e._v(" is 200000 and the window size is 2000000. Let "),a("code",[e._v("max_error_number")]),e._v(" be 20000, that is, the user expects an error behavior of 20000 for every 2000000 lines. That is, the error rate is 1%. But because not every batch of tasks consumes 200000 rows, the actual range of the window is [2000000, 2200000], which is 10% statistical error.")]),e._v(" "),a("p",[e._v("The error line does not include rows that are filtered out by the where condition. But include rows that do not have a partition in the corresponding Doris table.")])]),e._v(" "),a("li",[a("p",[e._v("data_source_properties")]),e._v(" "),a("p",[e._v("The specific Kafka partition can be specified in "),a("code",[e._v("data_source_properties")]),e._v(". If not specified, all partitions of the subscribed topic are consumed by default.")]),e._v(" "),a("p",[e._v("Note that when partition is explicitly specified, the load job will no longer dynamically detect changes to Kafka partition. If not specified, the partitions that need to be consumed are dynamically adjusted based on changes in the kafka partition.")])]),e._v(" "),a("li",[a("p",[e._v("strict_mode")]),e._v(" "),a("p",[e._v("Routine load load can turn on strict mode mode. The way to open it is to add "),a("code",[e._v('"strict_mode" = "true"')]),e._v(" to job_properties. The default strict mode is off.")]),e._v(" "),a("p",[e._v("The strict mode mode means strict filtering of column type conversions during the load process. The strict filtering strategy is as follows:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("For column type conversion, if strict mode is true, the wrong data will be filtered. The error data here refers to the fact that the original data is not null, and the result is a null value after participating in the column type conversion.")])]),e._v(" "),a("li",[a("p",[e._v("When a loaded column is generated by a function transformation, strict mode has no effect on it.")])]),e._v(" "),a("li",[a("p",[e._v("For a column type loaded with a range limit, if the original data can pass the type conversion normally, but cannot pass the range limit, strict mode will not affect it. For example, if the type is decimal(1,0) and the original data is 10, it is eligible for type conversion but not for column declarations. This data strict has no effect on it.")])])])]),e._v(" "),a("li",[a("p",[e._v("merge_type\nThe type of data merging supports three types: APPEND, DELETE, and MERGE. APPEND is the default value, which means that all this batch of data needs to be appended to the existing data. DELETE means to delete all rows with the same key as this batch of data. MERGE semantics Need to be used in conjunction with the delete condition, which means that the data that meets the delete condition is processed according to DELETE semantics and the rest is processed according to APPEND semantics")])])]),e._v(" "),a("p",[a("strong",[e._v("strict mode and load relationship of source data")])]),e._v(" "),a("p",[e._v("Here is an example of a column type of TinyInt.")]),e._v(" "),a("blockquote",[a("p",[e._v("Note: When a column in a table allows a null value to be loaded")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("source data")]),e._v(" "),a("th",[e._v("source data example")]),e._v(" "),a("th",[e._v("string to int")]),e._v(" "),a("th",[e._v("strict_mode")]),e._v(" "),a("th",[e._v("result")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("null")]),e._v(" "),a("td",[e._v("\\N")]),e._v(" "),a("td",[e._v("N/A")]),e._v(" "),a("td",[e._v("true or false")]),e._v(" "),a("td",[e._v("NULL")])]),e._v(" "),a("tr",[a("td",[e._v("not null")]),e._v(" "),a("td",[e._v("aaa or 2000")]),e._v(" "),a("td",[e._v("NULL")]),e._v(" "),a("td",[e._v("true")]),e._v(" "),a("td",[e._v("invalid data(filtered)")])]),e._v(" "),a("tr",[a("td",[e._v("not null")]),e._v(" "),a("td",[e._v("aaa")]),e._v(" "),a("td",[e._v("NULL")]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("NULL")])]),e._v(" "),a("tr",[a("td",[e._v("not null")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("true or false")]),e._v(" "),a("td",[e._v("correct data")])])])]),e._v(" "),a("p",[e._v("Here the column type is Decimal(1,0)")]),e._v(" "),a("blockquote",[a("p",[e._v("Note: When a column in a table allows a null value to be loaded")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("source data")]),e._v(" "),a("th",[e._v("source data example")]),e._v(" "),a("th",[e._v("string to int")]),e._v(" "),a("th",[e._v("strict_mode")]),e._v(" "),a("th",[e._v("result")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("null")]),e._v(" "),a("td",[e._v("\\N")]),e._v(" "),a("td",[e._v("N/A")]),e._v(" "),a("td",[e._v("true or false")]),e._v(" "),a("td",[e._v("NULL")])]),e._v(" "),a("tr",[a("td",[e._v("not null")]),e._v(" "),a("td",[e._v("aaa")]),e._v(" "),a("td",[e._v("NULL")]),e._v(" "),a("td",[e._v("true")]),e._v(" "),a("td",[e._v("invalid data(filtered)")])]),e._v(" "),a("tr",[a("td",[e._v("not null")]),e._v(" "),a("td",[e._v("aaa")]),e._v(" "),a("td",[e._v("NULL")]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("NULL")])]),e._v(" "),a("tr",[a("td",[e._v("not null")]),e._v(" "),a("td",[e._v("1 or 10")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("true or false")]),e._v(" "),a("td",[e._v("correct data")])])])]),e._v(" "),a("blockquote",[a("p",[e._v("Note: 10 Although it is a value that is out of range, because its type meets the requirements of decimal, strict mode has no effect on it. 10 will eventually be filtered in other ETL processing flows. But it will not be filtered by strict mode.")])]),e._v(" "),a("p",[a("strong",[e._v("Accessing SSL-certified Kafka clusters")])]),e._v(" "),a("p",[e._v("Accessing the SSL-certified Kafka cluster requires the user to provide a certificate file (ca.pem) for authenticating the Kafka Broker public key. If the Kafka cluster has both client authentication enabled, you will also need to provide the client's public key (client.pem), key file (client.key), and key password. The files needed here need to be uploaded to Doris via the "),a("code",[e._v("CREAE FILE")]),e._v(" command, ** and the catalog name is "),a("code",[e._v("kafka")]),e._v("**. See "),a("code",[e._v("HELP CREATE FILE;")]),e._v(" for specific help on the "),a("code",[e._v("CREATE FILE")]),e._v(" command. Here is an example:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Upload file")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE FILE "ca.pem" PROPERTIES("url" = "https://example_url/kafka-key/ca.pem", "catalog" = "kafka");\nCREATE FILE "client.key" PROPERTIES("url" = "https://example_urlkafka-key/client.key", "catalog" = "kafka");\nCREATE FILE "client.pem" PROPERTIES("url" = "https://example_url/kafka-key/client.pem", "catalog" = "kafka");\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Create a routine load job")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE ROUTINE LOAD db1.job1 on tbl1\nPROPERTIES\n(\n    "desired_concurrent_number"="1"\n)\nFROM KAFKA\n(\n    "kafka_broker_list"= "broker1:9091,broker2:9091",\n    "kafka_topic" = "my_topic",\n    "property.security.protocol" = "ssl",\n    "property.ssl.ca.location" = "FILE:ca.pem",\n    "property.ssl.certificate.location" = "FILE:client.pem",\n    "property.ssl.key.location" = "FILE:client.key",\n    "property.ssl.key.password" = "abcdefg"\n);\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br")])])])]),e._v(" "),a("blockquote",[a("p",[e._v("Doris accesses Kafka clusters via Kafka's C++ API "),a("code",[e._v("librdkafka")]),e._v(". The parameters supported by "),a("code",[e._v("librdkafka")]),e._v(" can be found.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"viewing-the-status-of-the-load-job"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewing-the-status-of-the-load-job"}},[e._v("#")]),e._v(" Viewing the status of the load job")]),e._v(" "),a("p",[e._v("Specific commands and examples for viewing the status of the "),a("strong",[e._v("job")]),e._v(" can be viewed with the "),a("code",[e._v("HELP SHOW ROUTINE LOAD;")]),e._v(" command.")]),e._v(" "),a("p",[e._v("Specific commands and examples for viewing the "),a("strong",[e._v("Task")]),e._v(" status can be viewed with the "),a("code",[e._v("HELP SHOW ROUTINE LOAD TASK;")]),e._v(" command.")]),e._v(" "),a("p",[e._v("You can only view tasks that are currently running, and tasks that have ended and are not started cannot be viewed.")]),e._v(" "),a("h3",{attrs:{id:"alter-job"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alter-job"}},[e._v("#")]),e._v(" Alter job")]),e._v(" "),a("p",[e._v("Users can modify jobs that have been created. Specific instructions can be viewed through the "),a("code",[e._v("HELP ALTER ROUTINE LOAD;")]),e._v(" command. Or refer to "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD.html"}},[e._v("ALTER ROUTINE LOAD")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"job-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-control"}},[e._v("#")]),e._v(" Job Control")]),e._v(" "),a("p",[e._v("The user can control the stop, pause and restart of the job by the three commands "),a("code",[e._v("STOP/PAUSE/RESUME")]),e._v(". You can view help and examples with the three commands "),a("code",[e._v("HELP STOP ROUTINE LOAD;")]),e._v(", "),a("code",[e._v("HELP PAUSE ROUTINE LOAD;")]),e._v(" and "),a("code",[e._v("HELP RESUME ROUTINE LOAD;")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"other-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-instructions"}},[e._v("#")]),e._v(" other instructions")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The relationship between a routine load job and an ALTER TABLE operation")]),e._v(" "),a("ul",[a("li",[e._v("Routine load does not block SCHEMA CHANGE and ROLLUP operations. Note, however, that if the column mappings are not matched after SCHEMA CHANGE is completed, the job's erroneous data will spike and eventually cause the job to pause. It is recommended to reduce this type of problem by explicitly specifying column mappings in routine load jobs and by adding Nullable columns or columns with Default values.")]),e._v(" "),a("li",[e._v("Deleting a Partition of a table may cause the loaded data to fail to find the corresponding Partition and the job will be paused.")])])]),e._v(" "),a("li",[a("p",[e._v("Relationship between routine load jobs and other load jobs (LOAD, DELETE, INSERT)")]),e._v(" "),a("ul",[a("li",[e._v("Routine load does not conflict with other LOAD jobs and INSERT operations.")]),e._v(" "),a("li",[e._v("When performing a DELETE operation, the corresponding table partition cannot have any load tasks being executed. Therefore, before performing the DELETE operation, you may need to pause the routine load job and wait for the delivered task to complete before you can execute DELETE.")])])]),e._v(" "),a("li",[a("p",[e._v("Relationship between routine load jobs and DROP DATABASE/TABLE operations")]),e._v(" "),a("p",[e._v("When the corresponding database or table is deleted, the job will automatically CANCEL.")])]),e._v(" "),a("li",[a("p",[e._v("The relationship between the kafka type routine load job and kafka topic")]),e._v(" "),a("p",[e._v("When the user creates a routine load declaration, the "),a("code",[e._v("kafka_topic")]),e._v(" does not exist in the kafka cluster.")]),e._v(" "),a("ul",[a("li",[e._v("If the broker of the user kafka cluster has "),a("code",[e._v("auto.create.topics.enable = true")]),e._v(" set, "),a("code",[e._v("kafka_topic")]),e._v(" will be automatically created first, and the number of partitions created automatically will be in the kafka cluster** of the user side. The broker is configured with "),a("code",[e._v("num.partitions")]),e._v(". The routine job will continue to read the data of the topic continuously.")]),e._v(" "),a("li",[e._v("If the broker of the user kafka cluster has "),a("code",[e._v("auto.create.topics.enable = false")]),e._v(" set, topic will not be created automatically, and the routine will be paused before any data is read, with the status "),a("code",[e._v("PAUSED")]),e._v(".")])]),e._v(" "),a("p",[e._v("So, if the user wants to be automatically created by the routine when the kafka topic does not exist, just set the broker in the kafka cluster** of the user's side to set auto.create.topics.enable = true` .")])]),e._v(" "),a("li",[a("p",[e._v("Problems that may occur in the some environment\nIn some environments, there are isolation measures for network segment and domain name resolution. So should pay attention to:\n1. The broker list specified in the routine load task must be accessible on the doris environment.\n2. If "),a("code",[e._v("advertised.listeners")]),e._v(" is configured in kafka, The addresses in "),a("code",[e._v("advertised.listeners")]),e._v(" need to be accessible on the doris environment.")])]),e._v(" "),a("li",[a("p",[e._v("About specified Partition and Offset")]),e._v(" "),a("p",[e._v("Doris supports specifying Partition and Offset to start consumption. The new version also supports the consumption function at a specified time point. The configuration relationship of the corresponding parameters is explained here.")]),e._v(" "),a("p",[e._v("There are three relevant parameters:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("kafka_partitions")]),e._v(': Specify the list of partitions to be consumed, such as: "0, 1, 2, 3".')]),e._v(" "),a("li",[a("code",[e._v("kafka_offsets")]),e._v(": Specify the starting offset of each partition, which must correspond to the number of "),a("code",[e._v("kafka_partitions")]),e._v(' lists. Such as: "1000, 1000, 2000, 2000"')]),e._v(" "),a("li",[a("code",[e._v("property.kafka_default_offset")]),e._v(": Specify the default starting offset of the partition.")])]),e._v(" "),a("p",[e._v("When creating an routine load job, these three parameters can have the following combinations:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Combinations")]),e._v(" "),a("th",[a("code",[e._v("kafka_partitions")])]),e._v(" "),a("th",[a("code",[e._v("kafka_offsets")])]),e._v(" "),a("th",[a("code",[e._v("property.kafka_default_offset")])]),e._v(" "),a("th",[e._v("Behavior")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("No")]),e._v(" "),a("td",[e._v("No")]),e._v(" "),a("td",[e._v("No")]),e._v(" "),a("td",[e._v("The system will automatically find all the partitions corresponding to the topic and start consumption from OFFSET_END")])]),e._v(" "),a("tr",[a("td",[e._v("2")]),e._v(" "),a("td",[e._v("No")]),e._v(" "),a("td",[e._v("No")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("The system will automatically find all the partitions corresponding to the topic and start consumption from the position specified by the default offset")])]),e._v(" "),a("tr",[a("td",[e._v("3")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("No")]),e._v(" "),a("td",[e._v("No")]),e._v(" "),a("td",[e._v("The system will start consumption from the OFFSET_END of the specified partition")])]),e._v(" "),a("tr",[a("td",[e._v("4")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("No")]),e._v(" "),a("td",[e._v("The system will start consumption from the specified offset of the specified partition")])]),e._v(" "),a("tr",[a("td",[e._v("5")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("No")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("The system will start consumption from the specified partition and the location specified by the default offset")])])])])]),e._v(" "),a("li",[a("p",[e._v("The difference between STOP and PAUSE")]),e._v(" "),a("p",[e._v("the FE will automatically clean up stopped ROUTINE LOAD，while paused ROUTINE LOAD can be resumed")])])]),e._v(" "),a("h2",{attrs:{id:"related-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-parameters"}},[e._v("#")]),e._v(" Related parameters")]),e._v(" "),a("p",[e._v("Some system configuration parameters can affect the use of routine loads.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("max_routine_load_task_concurrent_num")]),e._v(" "),a("p",[e._v("The FE configuration item, which defaults to 5, can be modified at runtime. This parameter limits the maximum number of subtask concurrency for a routine load job. It is recommended to maintain the default value. If the setting is too large, it may cause too many concurrent tasks and occupy cluster resources.")])]),e._v(" "),a("li",[a("p",[e._v("max_routine_load_task_num_per_be")]),e._v(" "),a("p",[e._v("The FE configuration item, which defaults to 5, can be modified at runtime. This parameter limits the number of subtasks that can be executed concurrently by each BE node. It is recommended to maintain the default value. If the setting is too large, it may cause too many concurrent tasks and occupy cluster resources.")])]),e._v(" "),a("li",[a("p",[e._v("max_routine_load_job_num")]),e._v(" "),a("p",[e._v("The FE configuration item, which defaults to 100, can be modified at runtime. This parameter limits the total number of routine load jobs, including NEED_SCHEDULED, RUNNING, PAUSE. After the overtime, you cannot submit a new assignment.")])]),e._v(" "),a("li",[a("p",[e._v("max_consumer_num_per_group")]),e._v(" "),a("p",[e._v("BE configuration item, the default is 3. This parameter indicates that up to several consumers are generated in a subtask for data consumption. For a Kafka data source, a consumer may consume one or more kafka partitions. Suppose a task needs to consume 6 kafka partitions, it will generate 3 consumers, and each consumer consumes 2 partitions. If there are only 2 partitions, only 2 consumers will be generated, and each consumer will consume 1 partition.")])]),e._v(" "),a("li",[a("p",[e._v("push_write_mbytes_per_sec")]),e._v(" "),a("p",[e._v("BE configuration item. The default is 10, which is 10MB/s. This parameter is to load common parameters, not limited to routine load jobs. This parameter limits the speed at which loaded data is written to disk. For high-performance storage devices such as SSDs, this speed limit can be appropriately increased.")])]),e._v(" "),a("li",[a("p",[e._v("max_tolerable_backend_down_num\nFE configuration item, the default is 0. Under certain conditions, Doris can reschedule PAUSED tasks, that becomes RUNNING?This parameter is 0, which means that rescheduling is allowed only when all BE nodes are in alive state.")])]),e._v(" "),a("li",[a("p",[e._v("period_of_auto_resume_min\nFE configuration item, the default is 5 mins. Doris reschedules will only try at most 3 times in the 5 minute period. If all 3 times fail, the current task will be locked, and auto-scheduling will not be performed. However, manual intervention can be performed.")])])]),e._v(" "),a("h2",{attrs:{id:"more-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-help"}},[e._v("#")]),e._v(" More Help")]),e._v(" "),a("p",[e._v("For more detailed syntax used by "),a("strong",[e._v("Routine load")]),e._v(",  you can enter "),a("code",[e._v("HELP ROUTINE LOAD")]),e._v(" on the Mysql client command line for more help.")])])}),[],!1,null,null,null);t.default=s.exports}}]);