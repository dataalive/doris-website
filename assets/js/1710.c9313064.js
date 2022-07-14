(window.webpackJsonp=window.webpackJsonp||[]).push([[1710],{2336:function(e,n,s){"use strict";s.r(n);var t=s(15),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"setting-up-development-environment-for-fe-using-intellij-idea"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-development-environment-for-fe-using-intellij-idea"}},[e._v("#")]),e._v(" Setting Up Development Environment for FE using IntelliJ IDEA")]),e._v(" "),s("h2",{attrs:{id:"_1-environmental-preparation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-environmental-preparation"}},[e._v("#")]),e._v(" 1. Environmental Preparation")]),e._v(" "),s("ul",[s("li",[e._v("Git")]),e._v(" "),s("li",[e._v("JDK1.8+")]),e._v(" "),s("li",[e._v("IntelliJ IDEA")]),e._v(" "),s("li",[e._v("Maven (Optional, IDEA shipped embedded Maven3)")])]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Git clone codebase from https://github.com/apache/incubator-doris.git")])]),e._v(" "),s("li",[s("p",[e._v("Use IntelliJ IDEA to open the code root directory")])]),e._v(" "),s("li",[s("p",[e._v("If your are only interested in FE module, and for some reason you can't or don't want to compile full thirdparty libraries,\nthe minimum tool required for FE module is "),s("code",[e._v("thrift")]),e._v(", so you can manually install "),s("code",[e._v("thrift")]),e._v(" and copy or create a link of\nthe executable "),s("code",[e._v("thrift")]),e._v(" command to "),s("code",[e._v("./thirdparty/installed/bin")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Doris build against `thrift` 0.13.0 ( note : `Doris` 0.15 and later version build against `thrift` 0.13.0 , the previous version is still `thrift` 0.9.3)   \n\nWindows: \n   1. Download：`http://archive.apache.org/dist/thrift/0.13.0/thrift-0.13.0.exe`\n   2. Copy：copy the file to `./thirdparty/installed/bin`\n   \nMacOS: \n   1. Download：`brew install thrift@0.13.0`\n   2. Establish soft connection： \n     `mkdir -p ./thirdparty/installed/bin`\n     # For ARM macOS\n     `ln -s /opt/homebrew/Cellar/thrift@0.13.0/0.13.0/bin/thrift ./thirdparty/installed/bin/thrift`\n     # For Intel macOS\n     `ln -s /usr/local/Cellar/thrift@0.13.0/0.13.0/bin/thrift ./thirdparty/installed/bin/thrift`\n   \nNote：The error that the version cannot be found may be reported when MacOS execute `brew install thrift@0.13.0`. The solution is execute at the terminal as follows:\n   1. `brew tap-new $USER/local-tap`\n   2. `brew extract --version='0.13.0' thrift $USER/local-tap`\n   3. `brew install thrift@0.13.0`\nReference link: `https://gist.github.com/tonydeng/02e571f273d6cce4230dc8d5f394493c`\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("Go to "),s("code",[e._v("./fe")]),e._v(" folder and run the following maven command to generate sources.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mvn generate-sources\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("If fails, run following command.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mvn clean install -DskipTests\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("You can also use IDE embedded GUI tools to run maven command to generate sources")])])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/images/gen_code.png"),alt:""}}),e._v(" "),s("p",[e._v("If you are developing on the OS which lack of support to run "),s("code",[e._v("shell script")]),e._v(" and "),s("code",[e._v("make")]),e._v(" such as Windows, a workround here\nis generate codes in Linux and copy them back. Using Docker should also be an option.")]),e._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[e._v("If a help document has not been generated, go to the docs directory and run"),s("code",[e._v("sh build_help_zip.sh")]),e._v("，\nThen copy help-resource.zip from build to fe/fe-core/target/classes")])]),e._v(" "),s("h2",{attrs:{id:"_2-debug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-debug"}},[e._v("#")]),e._v(" 2. Debug")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Import "),s("code",[e._v("./fe")]),e._v(" into IDEA")])]),e._v(" "),s("li",[s("p",[e._v("Follow the picture to create the folders (The directory may exist in the new version. If it exists, skip it, otherwise create it.)")])])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/images/DEBUG4.png"),alt:""}}),e._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[e._v("Build "),s("code",[e._v("ui")]),e._v(" project , and copy files from directory "),s("code",[e._v("ui/dist")]),e._v(" into directory "),s("code",[e._v("webroot")]),e._v(" ( you can skip this step , if you don't need "),s("code",[e._v("Doris")]),e._v(" UI )")])]),e._v(" "),s("h2",{attrs:{id:"_3-custom-fe-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-custom-fe-configuration"}},[e._v("#")]),e._v(" 3. Custom FE configuration")]),e._v(" "),s("p",[e._v("Copy below content into "),s("code",[e._v("conf/fe.conf")]),e._v(" and tune it to fit your environment(Note: If developed using"),s("code",[e._v("Mac")]),e._v(", since"),s("code",[e._v("docker for Mac")]),e._v("does not support"),s("code",[e._v("Host")]),e._v("mode,"),s("code",[e._v("be")]),e._v("needs to be exposed using"),s("code",[e._v("-p")]),e._v(" and "),s("code",[e._v("fe.conf")]),e._v(" "),s("code",[e._v("priority_networks")]),e._v(" configured to be accessible within the container, such as WIFI Ip).")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('# Licensed to the Apache Software Foundation (ASF) under one\n# or more contributor license agreements.  See the NOTICE file\n# distributed with this work for additional information\n# regarding copyright ownership.  The ASF licenses this file\n# to you under the Apache License, Version 2.0 (the\n# "License"); you may not use this file except in compliance\n# with the License.  You may obtain a copy of the License at\n#\n#   http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing,\n# software distributed under the License is distributed on an\n# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n# KIND, either express or implied.  See the License for the\n# specific language governing permissions and limitations\n# under the License.\n\n#####################################################################\n## The uppercase properties are read and exported by bin/start_fe.sh.\n## To see all Frontend configurations,\n## see fe/src/org/apache/doris/common/Config.java\n#####################################################################\n\n# the output dir of stderr and stdout \nLOG_DIR = ${DORIS_HOME}/log\n\nDATE = `date +%Y%m%d-%H%M%S`\nJAVA_OPTS="-Xmx2048m -XX:+UseMembar -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xloggc:$DORIS_HOME/log/fe.gc.log.$DATE"\n\n# For jdk 9+, this JAVA_OPTS will be used as default JVM options\nJAVA_OPTS_FOR_JDK_9="-Xmx4096m -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xlog:gc*:$DORIS_HOME/log/fe.gc.log.$DATE:time"\n\n##\n## the lowercase properties are read by main program.\n##\n\n# INFO, WARN, ERROR, FATAL\nsys_log_level = INFO\n\n# store metadata, create it if it is not exist.\n# Default value is ${DORIS_HOME}/doris-meta\n# meta_dir = ${DORIS_HOME}/doris-meta\n\nhttp_port = 8030\nrpc_port = 9020\nquery_port = 9030\nedit_log_port = 9010\nmysql_service_nio_enabled = true\n\n# Choose one if there are more than one ip except loopback address. \n# Note that there should at most one ip match this list.\n# If no ip match this rule, will choose one randomly.\n# use CIDR format, e.g. 10.10.10.0/24\n# Default value is empty.\n# priority_networks = 10.10.10.0/24;192.168.0.0/16\n\n# Advanced configurations \n# log_roll_size_mb = 1024\n# sys_log_dir = ${DORIS_HOME}/log\n# sys_log_roll_num = 10\n# sys_log_verbose_modules = \n# audit_log_dir = ${DORIS_HOME}/log\n# audit_log_modules = slow_query, query\n# audit_log_roll_num = 10\n# meta_delay_toleration_second = 10\n# qe_max_connection = 1024\n# max_conn_per_user = 100\n# qe_query_timeout_second = 300\n# qe_slow_log_ms = 5000\n\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br"),s("span",{staticClass:"line-number"},[e._v("45")]),s("br"),s("span",{staticClass:"line-number"},[e._v("46")]),s("br"),s("span",{staticClass:"line-number"},[e._v("47")]),s("br"),s("span",{staticClass:"line-number"},[e._v("48")]),s("br"),s("span",{staticClass:"line-number"},[e._v("49")]),s("br"),s("span",{staticClass:"line-number"},[e._v("50")]),s("br"),s("span",{staticClass:"line-number"},[e._v("51")]),s("br"),s("span",{staticClass:"line-number"},[e._v("52")]),s("br"),s("span",{staticClass:"line-number"},[e._v("53")]),s("br"),s("span",{staticClass:"line-number"},[e._v("54")]),s("br"),s("span",{staticClass:"line-number"},[e._v("55")]),s("br"),s("span",{staticClass:"line-number"},[e._v("56")]),s("br"),s("span",{staticClass:"line-number"},[e._v("57")]),s("br"),s("span",{staticClass:"line-number"},[e._v("58")]),s("br"),s("span",{staticClass:"line-number"},[e._v("59")]),s("br"),s("span",{staticClass:"line-number"},[e._v("60")]),s("br"),s("span",{staticClass:"line-number"},[e._v("61")]),s("br"),s("span",{staticClass:"line-number"},[e._v("62")]),s("br"),s("span",{staticClass:"line-number"},[e._v("63")]),s("br"),s("span",{staticClass:"line-number"},[e._v("64")]),s("br"),s("span",{staticClass:"line-number"},[e._v("65")]),s("br"),s("span",{staticClass:"line-number"},[e._v("66")]),s("br"),s("span",{staticClass:"line-number"},[e._v("67")]),s("br"),s("span",{staticClass:"line-number"},[e._v("68")]),s("br"),s("span",{staticClass:"line-number"},[e._v("69")]),s("br"),s("span",{staticClass:"line-number"},[e._v("70")]),s("br")])]),s("h2",{attrs:{id:"_4-setting-environment-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-setting-environment-variables"}},[e._v("#")]),e._v(" 4. Setting Environment Variables")]),e._v(" "),s("p",[e._v("Follow the picture to set runtime Environment Variables in IDEA")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/images/DEBUG5.png"),alt:""}}),e._v(" "),s("h2",{attrs:{id:"_5-config-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-config-options"}},[e._v("#")]),e._v(" 5. Config options")]),e._v(" "),s("p",[e._v("Because part of the dependency is "),s("code",[e._v("provided")]),e._v(", idea needs to do a special config. Click on the right "),s("code",[e._v("Modify Options")]),e._v(" in the "),s("code",[e._v("Run/Debug Configurations")]),e._v(" setting. Check the "),s("code",[e._v('Add Dependencies with "Provided" scope to classpath')]),e._v(" option.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/images/idea_options.png"),alt:""}}),e._v(" "),s("h2",{attrs:{id:"_6-start-fe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-start-fe"}},[e._v("#")]),e._v(" 6. Start FE")]),e._v(" "),s("p",[e._v("Having fun with Doris FE!")])])}),[],!1,null,null,null);n.default=a.exports}}]);