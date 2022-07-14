(window.webpackJsonp=window.webpackJsonp||[]).push([[1711],{2337:function(t,a,e){"use strict";e.r(a);var s=e(15),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"apache-doris-be-development-and-debugging-in-vs-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache-doris-be-development-and-debugging-in-vs-code"}},[t._v("#")]),t._v(" Apache Doris Be development and debugging in VS Code")]),t._v(" "),e("p",[t._v("Some developers are building FE development environment on a development machine/WSL/docker, but this kind of development environment is not supported for local development, some developers are used to use VSCode to configure remote develop and debug.")]),t._v(" "),e("h2",{attrs:{id:"preparation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[t._v("#")]),t._v(" Preparation")]),t._v(" "),e("ul",[e("li",[t._v("JDK11+ (Java Extension Pack need JDK11+) (author is creating a "),e("code",[t._v("lib")]),t._v(" directory under "),e("code",[t._v("home")]),t._v(", and install "),e("a",{attrs:{href:"https://github.com/adoptium/temurin11-binaries/releases/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JDK11"),e("OutboundLink")],1),t._v(" and JDK8 in it, and use them for "),e("code",[t._v("Extensions")]),t._v(" and "),e("code",[t._v("Compilation")]),t._v(")")]),t._v(" "),e("li",[t._v("VSCode\n"),e("ul",[e("li",[t._v("Extension Pack for Java")]),t._v(" "),e("li",[t._v("Remote Extensions")])])])]),t._v(" "),e("h2",{attrs:{id:"download-code-for-compilation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download-code-for-compilation"}},[t._v("#")]),t._v(" Download code for compilation")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("https://github.com/apache/incubator-doris.git Download the doris source code")])]),t._v(" "),e("li",[e("p",[t._v("use VSCode to open the code "),e("code",[t._v("/fe")]),t._v(" directory")])])]),t._v(" "),e("h2",{attrs:{id:"setting-for-vscode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-for-vscode"}},[t._v("#")]),t._v(" Setting for VSCode")]),t._v(" "),e("p",[t._v("Create "),e("code",[t._v("settings.json")]),t._v(" in "),e("code",[t._v(".vscode/")]),t._v(" , and set settings:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('"java.configuration.runtimes"')])]),t._v(" "),e("li",[e("code",[t._v('"java.jdt.ls.java.home"')]),t._v(" -- must set it to the directory of JDK11+, used for vscode-java plugin")]),t._v(" "),e("li",[e("code",[t._v('"maven.executable.path"')]),t._v(" -- maven path，for maven-language-server plugin")])]),t._v(" "),e("p",[t._v("example:")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"java.configuration.runtimes"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JavaSE-1.8"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/!!!path!!!/jdk-1.8.0_191"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JavaSE-11"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/!!!path!!!/jdk-11.0.14.1+1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"default"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"java.jdt.ls.java.home"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/!!!path!!!/jdk-11.0.14.1+1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"maven.executable.path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/!!!path!!!/maven/bin/mvn"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br")])]),e("h2",{attrs:{id:"build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[t._v("#")]),t._v(" Build")]),t._v(" "),e("p",[t._v("Other articles have already explained:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/docs/install/source-install/compilation-with-ldb-toolchain.html"}},[t._v("Build with LDB toolchain ")])],1),t._v(" "),e("li",[t._v("......")])]),t._v(" "),e("p",[t._v("In order to debug, you need to add debugging parameters when fe starts, such as "),e("code",[t._v("-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005")]),t._v(" .")]),t._v(" "),e("p",[t._v("In "),e("code",[t._v("incubator-doris/output/fe/bin/start_fe.sh")]),t._v(" , after "),e("code",[t._v("$JAVA $final_java_opt")]),t._v(" add this param.")])])}),[],!1,null,null,null);a.default=n.exports}}]);