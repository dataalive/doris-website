(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{684:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"c-code-diagnostic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-code-diagnostic"}},[s._v("#")]),s._v(" C++ Code Diagnostic")]),s._v(" "),a("p",[s._v("Doris support to use "),a("a",{attrs:{href:"https://clangd.llvm.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Clangd"),a("OutboundLink")],1),s._v(" and "),a("a",{attrs:{href:"https://clang.llvm.org/extra/clang-tidy/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Clang-Tidy"),a("OutboundLink")],1),s._v(" to diagnostic code. Clangd and Clang-Tidy already has in "),a("RouterLink",{attrs:{to:"/developer/install/source-install/compilation-with-ldb-toolchain.html"}},[s._v("LDB-toolchain")]),s._v("，also can install by self.")],1),s._v(" "),a("h3",{attrs:{id:"clang-tidy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clang-tidy"}},[s._v("#")]),s._v(" Clang-Tidy")]),s._v(" "),a("p",[s._v("Clang-Tidy can do some diagnostic cofig, config file "),a("code",[s._v(".clang-tidy")]),s._v(" is in Doris root path. Compared with vscode-cpptools, clangd can provide more powerful and accurate code jumping for vscode, and integrates the analysis and quick-fix functions of clang-tidy.")]),s._v(" "),a("h3",{attrs:{id:"enable-clangd-on-vscode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-clangd-on-vscode"}},[s._v("#")]),s._v(" Enable clangd on VSCODE")]),s._v(" "),a("p",[s._v("First we should install clangd plugin, then edit "),a("code",[s._v("settings.json")]),s._v(" or just change config on gui.")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"clangd.path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ldb_toolchain/bin/clangd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//clangd path")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"clangd.arguments"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--background-index"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--clang-tidy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//enable clang-tidy")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--compile-commands-dir=doris/be/build_RELEASE/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//clangd should read compile_commands.json create by cmake, so you should compile once")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--completion-style=detailed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-j=5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//clangd diagnostic parallelism")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--all-scopes-completion"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--pch-storage=memory"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--pretty"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-log=verbose"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--query-driver=ldb_toolchain/bin/*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//path of compiler")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"clangd.trace"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/disk2/pxl/dev/baidu/bdg/doris/core/output/clangd-server.log"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//clangd log path")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);