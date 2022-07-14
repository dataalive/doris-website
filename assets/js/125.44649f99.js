(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1649:function(t,e,a){"use strict";a.r(e);var o=a(15),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"doris-output-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-output-plugin"}},[t._v("#")]),t._v(" Doris output plugin")]),t._v(" "),a("p",[t._v("This plugin is used to output data to Doris for logstash, use the HTTP protocol to interact with the Doris FE Http interface, and import data through Doris's stream load.")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://doris.apache.org/master/zh-CN/administrator-guide/load-data/stream-load-manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Learn more about Doris Stream Load "),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://doris.apache.org/master/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Learn more about Doris"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"install-and-compile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-and-compile"}},[t._v("#")]),t._v(" Install and compile")]),t._v(" "),a("h3",{attrs:{id:"_1-download-source-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-download-source-code"}},[t._v("#")]),t._v(" 1.Download source code")]),t._v(" "),a("h3",{attrs:{id:"_2-compile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-compile"}},[t._v("#")]),t._v(" 2.compile")]),t._v(" "),a("p",[t._v("Execute under extension/logstash/ directory")]),t._v(" "),a("p",[a("code",[t._v("gem build logstash-output-doris.gemspec")])]),t._v(" "),a("p",[t._v("You will get logstash-output-doris-{version}.gem file in the same directory")]),t._v(" "),a("h3",{attrs:{id:"_3-plug-in-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-plug-in-installation"}},[t._v("#")]),t._v(" 3.Plug-in installation")]),t._v(" "),a("p",[t._v("copy logstash-output-doris-{version}.gem to the logstash installation directory")]),t._v(" "),a("p",[t._v("Executing an order")]),t._v(" "),a("p",[a("code",[t._v("./bin/logstash-plugin install logstash-output-doris-{version}.gem")])]),t._v(" "),a("p",[t._v("Install logstash-output-doris plugin")]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example:")]),t._v(" "),a("p",[t._v("Create a new configuration file in the config directory and name it logstash-doris.conf")]),t._v(" "),a("p",[t._v("The specific configuration is as follows:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('output {\n    doris {\n        http_hosts => [ "http://fehost:8030" ]\n        user => user_name\n        password => password\n        db => "db_name"\n        table => "table_name"\n        label_prefix => "label_prefix"\n        column_separator => ","\n    }\n}\n')])])]),a("p",[t._v("Configuration instructions:")]),t._v(" "),a("p",[t._v("Connection configuration:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Configuration")]),t._v(" "),a("th",[t._v("Explanation")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("http_hosts")])]),t._v(" "),a("td",[t._v("FE's HTTP interactive address eg")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("user")])]),t._v(" "),a("td",[t._v("User name, the user needs to have import permission for the doris table")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("password")])]),t._v(" "),a("td",[t._v("Password")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("db")])]),t._v(" "),a("td",[t._v("Database name")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("table")])]),t._v(" "),a("td",[t._v("Table name")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("label_prefix")])]),t._v(" "),a("td",[t._v("Import the identification prefix, the final generated ID is "),a("em",[t._v("{label_prefix}_{db}_{table}_{time_stamp}")])])])])]),t._v(" "),a("p",[t._v("Load configuration:("),a("a",{attrs:{href:"http://doris.apache.org/master/zh-CN/administrator-guide/load-data/stream-load-manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reference documents"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Configuration")]),t._v(" "),a("th",[t._v("Explanation")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("column_separator")])]),t._v(" "),a("td",[t._v("Column separator, the default is \\t")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("columns")])]),t._v(" "),a("td",[t._v("Used to specify the correspondence between the columns in the import file and the columns in the table")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("where")])]),t._v(" "),a("td",[t._v("The filter conditions specified by the import task")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("max_filter_ratio")])]),t._v(" "),a("td",[t._v("The maximum tolerance rate of the import task, the default is zero tolerance")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("partition")])]),t._v(" "),a("td",[t._v("Partition information of the table to be imported")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("timeout")])]),t._v(" "),a("td",[t._v("timeout, the default is 600s")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("strict_mode")])]),t._v(" "),a("td",[t._v("Strict mode, the default is false")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("timezone")])]),t._v(" "),a("td",[t._v("Specify the time zone used for this import, the default is the East Eight District")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("exec_mem_limit")])]),t._v(" "),a("td",[t._v("Import memory limit, default is 2GB, unit is byte")])])])]),t._v(" "),a("p",[t._v("Other configuration:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Configuration")]),t._v(" "),a("th",[t._v("Explanation")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("save_on_failure")])]),t._v(" "),a("td",[t._v("If the import fails to save locally, the default is true")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("save_dir")])]),t._v(" "),a("td",[t._v("Local save directory, default is /tmp")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("automatic_retries")])]),t._v(" "),a("td",[t._v("The maximum number of retries on failure, the default is 3")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("batch_size")])]),t._v(" "),a("td",[t._v("The maximum number of events processed per batch, the default is 100000")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("idle_flush_time")])]),t._v(" "),a("td",[t._v("Maximum interval, the default is 20 (seconds)")])])])]),t._v(" "),a("h2",{attrs:{id:"start-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-up"}},[t._v("#")]),t._v(" Start Up")]),t._v(" "),a("p",[t._v("Run the command to start the doris output plugin:")]),t._v(" "),a("p",[a("code",[t._v("{logstash-home}/bin/logstash -f {logstash-home}/config/logstash-doris.conf --config.reload.automatic")])]),t._v(" "),a("h2",{attrs:{id:"complete-usage-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#complete-usage-example"}},[t._v("#")]),t._v(" Complete usage example")]),t._v(" "),a("h3",{attrs:{id:"_1-compile-doris-output-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-compile-doris-output-plugin"}},[t._v("#")]),t._v(" 1. Compile doris-output-plugin")]),t._v(" "),a("p",[t._v("1> Download the ruby compressed package and go to "),a("a",{attrs:{href:"https://www.ruby-lang.org/en/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ruby official website"),a("OutboundLink")],1),t._v(" to download it. The version 2.7.1 used here")]),t._v(" "),a("p",[t._v("2> Compile and install, configure ruby environment variables")]),t._v(" "),a("p",[t._v("3> Go to the doris source extension/logstash/ directory and execute")]),t._v(" "),a("p",[a("code",[t._v("gem build logstash-output-doris.gemspec")])]),t._v(" "),a("p",[t._v("Get the file logstash-output-doris-0.1.0.gem, and the compilation is complete")]),t._v(" "),a("h3",{attrs:{id:"_2-install-and-configure-filebeat-here-use-filebeat-as-input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-install-and-configure-filebeat-here-use-filebeat-as-input"}},[t._v("#")]),t._v(" 2. Install and configure filebeat (here use filebeat as input)")]),t._v(" "),a("p",[t._v("1> "),a("a",{attrs:{href:"https://www.elastic.co/",target:"_blank",rel:"noopener noreferrer"}},[t._v("es official website"),a("OutboundLink")],1),t._v(" Download the filebeat tar compression package and decompress it")]),t._v(" "),a("p",[t._v("2> Enter the filebeat directory and modify the configuration file filebeat.yml as follows:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('filebeat.inputs:\n- type: log\n  paths:\n    - /tmp/doris.data\noutput.logstash:\n  hosts: ["localhost:5044"]\n')])])]),a("p",[t._v("/tmp/doris.data is the doris data path")]),t._v(" "),a("p",[t._v("3> Start filebeat:")]),t._v(" "),a("p",[a("code",[t._v('./filebeat -e -c filebeat.yml -d "publish"')])]),t._v(" "),a("h3",{attrs:{id:"_3-install-logstash-and-doris-out-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-install-logstash-and-doris-out-plugin"}},[t._v("#")]),t._v(" 3.Install logstash and doris-out-plugin")]),t._v(" "),a("p",[t._v("1> "),a("a",{attrs:{href:"https://www.elastic.co/",target:"_blank",rel:"noopener noreferrer"}},[t._v("es official website"),a("OutboundLink")],1),t._v(" Download the logstash tar compressed package and decompress it")]),t._v(" "),a("p",[t._v("2> Copy the logstash-output-doris-0.1.0.gem obtained in step 1 to the logstash installation directory")]),t._v(" "),a("p",[t._v("3> execute")]),t._v(" "),a("p",[a("code",[t._v("./bin/logstash-plugin install logstash-output-doris-0.1.0.gem")])]),t._v(" "),a("p",[t._v("Install the plugin")]),t._v(" "),a("p",[t._v("4> Create a new configuration file logstash-doris.conf in the config directory as follows:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('input {\n    beats {\n        port => "5044"\n    }\n}\n\noutput {\n    doris {\n        http_hosts => [ "http://127.0.0.1:8030" ]\n        user => doris\n        password => doris\n        db => "logstash_output_test"\n        table => "output"\n        label_prefix => "doris"\n        column_separator => ","\n        columns => "a,b,c,d,e"\n    }\n}\n')])])]),a("p",[t._v("The configuration here needs to be configured according to the configuration instructions")]),t._v(" "),a("p",[t._v("5> Start logstash:")]),t._v(" "),a("p",[t._v("./bin/logstash -f ./config/logstash-doris.conf --config.reload.automatic")]),t._v(" "),a("h3",{attrs:{id:"_4-test-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-test-load"}},[t._v("#")]),t._v(" 4.Test Load")]),t._v(" "),a("p",[t._v("Add write data to /tmp/doris.data")]),t._v(" "),a("p",[a("code",[t._v("echo a,b,c,d,e >> /tmp/doris.data")])]),t._v(" "),a("p",[t._v("Observe the logstash log. If the status of the returned response is Success, the import was successful. At this time, you can view the imported data in the logstash_output_test.output table")])])}),[],!1,null,null,null);e.default=s.exports}}]);