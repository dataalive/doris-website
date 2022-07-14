(window.webpackJsonp=window.webpackJsonp||[]).push([[4125],{4752:function(s,n,a){"use strict";a.r(n);var e=a(15),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"doris-插件框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-插件框架"}},[s._v("#")]),s._v(" Doris 插件框架")]),s._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("p",[s._v("Doris 的插件框架支持在运行时添加/卸载自定义插件，而不需要重启服务，用户可以通过开发自己的插件来扩展Doris的功能。")]),s._v(" "),a("p",[s._v("例如，审计插件作用于 Doris 请求执行后，可以获取到一次请求相关的信息（访问用户，请求IP，SQL等...），并将信息写入到指定的表中。")]),s._v(" "),a("p",[s._v("与UDF的区别：")]),s._v(" "),a("ul",[a("li",[s._v("UDF是函数，用于在SQL执行时进行数据计算。插件是附加功能，用于为Doris扩展自定义的功能，例如：支持不同的存储引擎，支持不同的导入方式，插件并不会参与执行SQL时的数据计算。")]),s._v(" "),a("li",[s._v("UDF的执行周期仅限于一次SQL执行。插件的执行周期可能与Doris进程相同。")]),s._v(" "),a("li",[s._v("使用场景不同。如果您需要执行SQL时支持特殊的数据算法，那么推荐使用UDF，如果您需要在Doris上运行自定义的功能，或者是启动一个后台线程执行任务，那么推荐使用插件。")])]),s._v(" "),a("p",[s._v("目前插件框架仅支持审计类插件。")]),s._v(" "),a("blockquote",[a("p",[s._v("注意:\nDoris的插件框架是实验性功能, 目前只支持FE插件，且默认是关闭的，可以通过FE配置"),a("code",[s._v("plugin_enable=true")]),s._v("打开")])]),s._v(" "),a("h2",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[s._v("#")]),s._v(" 插件")]),s._v(" "),a("p",[s._v("一个FE的插件可以使一个"),a("strong",[s._v("zip压缩包")]),s._v("或者是一个"),a("strong",[s._v("目录")]),s._v("。其内容至少包含两个文件："),a("code",[s._v("plugin.properties")]),s._v(" 和 "),a("code",[s._v(".jar")]),s._v(" 文件。"),a("code",[s._v("plugin.properties")]),s._v("用于描述插件信息。")]),s._v(" "),a("p",[s._v("文件结构如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# plugin .zip\nauditodemo.zip:\n    -plugin.properties\n    -auditdemo.jar\n    -xxx.config\n    -data/\n    -test_data/\n\n# plugin local directory\nauditodemo/:\n    -plugin.properties\n    -auditdemo.jar\n    -xxx.config\n    -data/\n    -test_data/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[a("code",[s._v("plugin.properties")]),s._v(" 内容示例:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('### required:\n#\n# the plugin name\nname = audit_plugin_demo\n#\n# the plugin type\ntype = AUDIT\n#\n# simple summary of the plugin\ndescription = just for test\n#\n# Doris\'s version, like: 0.11.0\nversion = 0.11.0\n\n### FE-Plugin optional:\n#\n# version of java the code is built against\n# use the command "java -version" value, like 1.8.0, 9.0.1, 13.0.4\njava.version = 1.8.31\n#\n# the name of the class to load, fully-qualified.\nclassname = AuditPluginDemo\n\n### BE-Plugin optional:\n# the name of the so to load\nsoName = example.so\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("h2",{attrs:{id:"编写插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写插件"}},[s._v("#")]),s._v(" 编写插件")]),s._v(" "),a("p",[s._v("插件的开发环境依赖Doris的开发编译环境。所以请先确保Doris的开发编译环境运行正常。")]),s._v(" "),a("p",[a("code",[s._v("fe_plugins")]),s._v(" 目录是 FE 插件的根模块。这个根模块统一管理插件所需的依赖。添加一个新的插件，相当于在这个根模块添加一个子模块。")]),s._v(" "),a("h3",{attrs:{id:"创建插件模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建插件模块"}},[s._v("#")]),s._v(" 创建插件模块")]),s._v(" "),a("p",[s._v("我们可以通过以下命令在 "),a("code",[s._v("fe_plugins")]),s._v(" 目录创建一个子模块用户实现创建和创建工程。其中 "),a("code",[s._v("doris-fe-test")]),s._v(" 为插件名称。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mvn archetype: generate -DarchetypeCatalog = internal -DgroupId = org.apache -DartifactId = doris-fe-test -DinteractiveMode = false\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个命令会创建一个新的 maven 工程，并且自动向 "),a("code",[s._v("fe_plugins/pom.xml")]),s._v(" 中添加一个子模块：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    .....\n    <groupId>org.apache</groupId>\n    <artifactId>doris-fe-plugins</artifactId>\n    <packaging>pom</packaging>\n    <version>1.0-SNAPSHOT</version>\n    <modules>\n        <module>auditdemo</module>\n        # new plugin module\n        <module>doris-fe-test</module>\n    </modules>\n    .....\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("新的工程目录结构如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-doris-fe-test/\n-pom.xml\n-src/\n    ---- main/java/org/apache/\n    ------- App.java # mvn auto generate, ignore\n    ---- test/java/org/apache\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("接下来我们在 "),a("code",[s._v("main")]),s._v(" 目录下添加一个 "),a("code",[s._v("assembly")]),s._v(" 目录来存放 "),a("code",[s._v("plugin.properties")]),s._v(" 和 "),a("code",[s._v("zip.xml")]),s._v("。最终的工程目录结构如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-doris-fe-test/\n-pom.xml\n-src/\n---- main/\n------ assembly/\n-------- plugin.properties\n-------- zip.xml\n------ java/org/apache/\n--------App.java # mvn auto generate, ignore\n---- test/java/org/apache\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"添加-zip-xml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加-zip-xml"}},[s._v("#")]),s._v(" 添加 zip.xml")]),s._v(" "),a("p",[a("code",[s._v("zip.xml")]),s._v(" 用于描述最终生成的 zip 压缩包中的文件内容。（如 .jar file, plugin.properties 等等）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<assembly>\n    <id>plugin</id>\n    <formats>\n        <format>zip</format>\n    </formats>\n    <!-IMPORTANT: must be false->\n    <includeBaseDirectory>false</includeBaseDirectory>\n    <fileSets>\n        <fileSet>\n            <directory>target</directory>\n            <includes>\n                <include>*.jar</include>\n            </ ncludes>\n            <outputDirectory>/</outputDirectory>\n        </fileSet>\n\n        <fileSet>\n            <directory>src/main/assembly</directory>\n            <includes>\n                <include>plugin.properties</include>\n            </includes>\n            <outputDirectory>/</outputDirectory>\n        </fileSet>\n    </fileSets>\n</assembly>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h3",{attrs:{id:"更新-pom-xml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新-pom-xml"}},[s._v("#")]),s._v(" 更新 pom.xml")]),s._v(" "),a("p",[s._v("接下来我们需要更新子模块的 "),a("code",[s._v("pom.xml")]),s._v(" 文件，添加 doris-fe 依赖：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xmlns="http://maven.apache.org/POM/4.0.0"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <parent>\n        <groupId>org.apache</groupId>\n        <artifactId>doris-fe-plugins</artifactId>\n        <version>1.0-SNAPSHOT</version>\n    </parent>\n    <modelVersion>4.0.0</modelVersion>\n\n    <artifactId>auditloader</artifactId>\n    <packaging>jar</packaging>\n\n    <dependencies>\n        \x3c!-- doris-fe dependencies --\x3e\n        <dependency>\n            <groupId>org.apache</groupId>\n            <artifactId>doris-fe</artifactId>\n        </dependency>\n\n        \x3c!-- other dependencies --\x3e\n        <dependency>\n            ...\n        </dependency>\n    </dependencies>\n\n    <build>\n        <finalName>auditloader</finalName>\n        <plugins>\n            <plugin>\n                <artifactId>maven-assembly-plugin</artifactId>\n                <version>2.4.1</version>\n                <configuration>\n                    <appendAssemblyId>false</appendAssemblyId>\n                    <descriptors>\n                        <descriptor>src/main/assembly/zip.xml</descriptor>\n                    </descriptors>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>make-assembly</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>single</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br")])]),a("h3",{attrs:{id:"实现插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现插件"}},[s._v("#")]),s._v(" 实现插件")]),s._v(" "),a("p",[s._v("之后我们就可以开始进行插件功能的开发了。插件需要实现 "),a("code",[s._v("Plugin")]),s._v(" 接口。具体可以参阅 Doris 自带的 "),a("code",[s._v("auditdemo")]),s._v(" 插件示例代码。")]),s._v(" "),a("h3",{attrs:{id:"编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[s._v("#")]),s._v(" 编译")]),s._v(" "),a("p",[s._v("在编译插件之前，需要先执行 "),a("code",[s._v("sh build.sh --fe")]),s._v(" 进行 Doris FE 代码的编译，并确保编译成功。")]),s._v(" "),a("p",[s._v("之后，执行 "),a("code",[s._v("sh build_plugin.sh")]),s._v(" 编译所有插件。最终的产出会存放在 "),a("code",[s._v("fe_plugins/output")]),s._v(" 目录中。")]),s._v(" "),a("p",[s._v("或者也可以执行 "),a("code",[s._v("sh build_plugin.sh --plugin your_plugin_name")]),s._v(" 来仅编译指定的插件。")]),s._v(" "),a("h3",{attrs:{id:"另一种开发方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#另一种开发方式"}},[s._v("#")]),s._v(" 另一种开发方式")]),s._v(" "),a("p",[s._v("您可以直接通过修改自带的 "),a("code",[s._v("auditdemo")]),s._v(" 插件示例代码进行开发。")]),s._v(" "),a("h2",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),a("p",[s._v("插件可以通过以下三种方式部署。")]),s._v(" "),a("ul",[a("li",[s._v("将 "),a("code",[s._v(".zip")]),s._v(" 文件放在 Http 或 Https 服务器上。如："),a("code",[s._v("http://xxx.xxx.com/data/my_plugin.zip")]),s._v(", Doris 会下载这个文件。同时需要在properties中设置md5sum的值，或者放置一个和 "),a("code",[s._v(".zip")]),s._v(" 文件同名的 md5 文件，如 "),a("code",[s._v("http://xxx.xxxxxx.com/data/my_plugin.zip.md5")]),s._v("。其中内容为 .zip 文件的 MD5 值。")]),s._v(" "),a("li",[s._v("本地 "),a("code",[s._v(".zip")]),s._v(" 文件。 如："),a("code",[s._v("/home/work/data/plugin.zip")]),s._v("。如果该插件仅用于 FE，则需部署在所有 FE 节点相同的目录下。否则，需要在所有 FE 和 BE 节点部署。")]),s._v(" "),a("li",[s._v("本地目录。如："),a("code",[s._v("/home/work/data/plugin/")]),s._v("。相当于 "),a("code",[s._v(".zip")]),s._v(" 文件解压后的目录。如果该插件仅用于 FE，则需部署在所有 FE 节点相同的目录下。否则，需要在所有 FE 和 BE 节点部署。")])]),s._v(" "),a("p",[s._v("注意：需保证部署路径在整个插件生命周期内有效。")]),s._v(" "),a("h2",{attrs:{id:"安装和卸载插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装和卸载插件"}},[s._v("#")]),s._v(" 安装和卸载插件")]),s._v(" "),a("p",[s._v("通过如下命令安装和卸载插件。更多帮助请参阅 "),a("code",[s._v("HELP INSTALL PLUGIN;")]),s._v(" "),a("code",[s._v("HELP IUNNSTALL PLUGIN;")]),s._v(" "),a("code",[s._v("HELP SHOW PLUGINS;")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('mysql> install plugin from "/home/users/doris/auditloader.zip";\nQuery OK, 0 rows affected (0.09 sec)\n\nmysql> show plugins\\G\n*************************** 1. row ***************************\n       Name: auditloader\n       Type: AUDIT\nDescription: load audit log to olap load, and user can view the statistic of queries\n    Version: 0.12.0\nJavaVersion: 1.8.31\n  ClassName: AuditLoaderPlugin\n     SoName: NULL\n    Sources: /home/users/doris/auditloader.zip\n     Status: INSTALLED\n Properties: {}\n*************************** 2. row ***************************\n       Name: AuditLogBuilder\n       Type: AUDIT\nDescription: builtin audit logger\n    Version: 0.12.0\nJavaVersion: 1.8.31\n  ClassName: org.apache.doris.qe.AuditLogBuilder\n     SoName: NULL\n    Sources: Builtin\n     Status: INSTALLED\n Properties: {}   \n2 rows in set (0.00 sec)\n\nmysql> uninstall plugin auditloader;\nQuery OK, 0 rows affected (0.05 sec)\n\nmysql> show plugins;\nEmpty set (0.00 sec)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);