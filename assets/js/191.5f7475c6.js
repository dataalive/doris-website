(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{816:function(t,a,o){"use strict";o.r(a);var e=o(15),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"import-overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#import-overview"}},[t._v("#")]),t._v(" Import Overview")]),t._v(" "),o("h2",{attrs:{id:"supported-data-sources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#supported-data-sources"}},[t._v("#")]),t._v(" Supported data sources")]),t._v(" "),o("p",[t._v("Doris provides a variety of data import solutions, and you can choose different data import methods for different data sources.")]),t._v(" "),o("h3",{attrs:{id:"by-scene"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#by-scene"}},[t._v("#")]),t._v(" By scene")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Data Source")]),t._v(" "),o("th",[t._v("Import Method")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Object Storage (s3), HDFS")]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/docs/data-operate/import/import-scenes/external-storage-load.html"}},[t._v("Import data using Broker")])],1)]),t._v(" "),o("tr",[o("td",[t._v("Local file")]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/docs/data-operate/import/import-scenes/local-file-load.html"}},[t._v("Import local data")])],1)]),t._v(" "),o("tr",[o("td",[t._v("Kafka")]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/docs/data-operate/import/import-scenes/kafka-load.html"}},[t._v("Subscribe to Kafka data")])],1)]),t._v(" "),o("tr",[o("td",[t._v("Mysql, PostgreSQL, Oracle, SQLServer")]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/docs/data-operate/import/import-scenes/external-table-load.html"}},[t._v("Sync data via external table")])],1)]),t._v(" "),o("tr",[o("td",[t._v("Import via JDBC")]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/docs/data-operate/import/import-scenes/jdbc-load.html"}},[t._v("Sync data using JDBC")])],1)]),t._v(" "),o("tr",[o("td",[t._v("Import JSON format data")]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/docs/data-operate/import/import-way/load-json-format.html"}},[t._v("JSON format data import")])],1)]),t._v(" "),o("tr",[o("td",[t._v("MySQL Binlog")]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/docs/data-operate/import/import-way/binlog-load-manual.html"}},[t._v("Binlog Load")])],1)])])]),t._v(" "),o("h3",{attrs:{id:"divided-by-import-method"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#divided-by-import-method"}},[t._v("#")]),t._v(" Divided by import method")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Import method name")]),t._v(" "),o("th",[t._v("Use method")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Spark Load")]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/docs/data-operate/import/import-way/spark-load-manual.html"}},[t._v("Import external data via Spark")])],1)]),t._v(" "),o("tr",[o("td",[t._v("Broker Load")]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/docs/data-operate/import/import-way/broker-load-manual.html"}},[t._v("Import external storage data via Broker")])],1)]),t._v(" "),o("tr",[o("td",[t._v("Stream Load")]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/docs/data-operate/import/import-way/stream-load-manual.html"}},[t._v("Stream import data (local file and memory data)")])],1)]),t._v(" "),o("tr",[o("td",[t._v("Routine Load")]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/docs/data-operate/import/import-way/routine-load-manual.html"}},[t._v("Import Kafka data")])],1)]),t._v(" "),o("tr",[o("td",[t._v("Binlog Load")]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/docs/data-operate/import/import-way/binlog-load-manual.html"}},[t._v("collect Mysql Binlog import data")])],1)]),t._v(" "),o("tr",[o("td",[t._v("Insert Into")]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/docs/data-operate/import/import-way/insert-into-manual.html"}},[t._v("External table imports data through INSERT")])],1)]),t._v(" "),o("tr",[o("td",[t._v("S3 Load")]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/docs/data-operate/import/import-way/s3-load-manual.html"}},[t._v("Object storage data import of S3 protocol")])],1)])])]),t._v(" "),o("h2",{attrs:{id:"supported-data-formats"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#supported-data-formats"}},[t._v("#")]),t._v(" Supported data formats")]),t._v(" "),o("p",[t._v("Different import methods support slightly different data formats.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Import Methods")]),t._v(" "),o("th",[t._v("Supported Formats")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Broker Load")]),t._v(" "),o("td",[t._v("Parquet, ORC, csv, gzip")])]),t._v(" "),o("tr",[o("td",[t._v("Stream Load")]),t._v(" "),o("td",[t._v("csv, gzip, json")])]),t._v(" "),o("tr",[o("td",[t._v("Routine Load")]),t._v(" "),o("td",[t._v("csv, json")])])])]),t._v(" "),o("h2",{attrs:{id:"import-instructions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#import-instructions"}},[t._v("#")]),t._v(" import instructions")]),t._v(" "),o("p",[t._v("The data import implementation of Apache Doris has the following common features, which are introduced here to help you better use the data import function")]),t._v(" "),o("h2",{attrs:{id:"import-atomicity-guarantees"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#import-atomicity-guarantees"}},[t._v("#")]),t._v(" Import atomicity guarantees")]),t._v(" "),o("p",[t._v("Each import job of Doris, whether it is batch import using Broker Load or single import using INSERT statement, is a complete transaction operation. The import transaction can ensure that the data in a batch takes effect atomically, and there will be no partial data writing.")]),t._v(" "),o("p",[t._v("At the same time, an import job will have a Label. This Label is unique under a database (Database) and is used to uniquely identify an import job. Label can be specified by the user, and some import functions will also be automatically generated by the system.")]),t._v(" "),o("p",[t._v("Label is used to ensure that the corresponding import job can only be successfully imported once. A successfully imported Label, when used again, will be rejected with the error "),o("code",[t._v("Label already used")]),t._v(". Through this mechanism, "),o("code",[t._v("At-Most-Once")]),t._v(" semantics can be implemented in Doris. If combined with the "),o("code",[t._v("At-Least-Once")]),t._v(" semantics of the upstream system, the "),o("code",[t._v("Exactly-Once")]),t._v(" semantics of imported data can be achieved.")]),t._v(" "),o("p",[t._v("For best practices on atomicity guarantees, see Importing Transactions and Atomicity.")]),t._v(" "),o("h2",{attrs:{id:"synchronous-and-asynchronous-imports"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#synchronous-and-asynchronous-imports"}},[t._v("#")]),t._v(" Synchronous and asynchronous imports")]),t._v(" "),o("p",[t._v("Import methods are divided into synchronous and asynchronous. For the synchronous import method, the returned result indicates whether the import succeeds or fails. For the asynchronous import method, a successful return only means that the job was submitted successfully, not that the data was imported successfully. You need to use the corresponding command to check the running status of the import job.")])])}),[],!1,null,null,null);a.default=r.exports}}]);