(window.webpackJsonp=window.webpackJsonp||[]).push([[822],{1447:function(a,t,s){"use strict";s.r(t);var n=s(15),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"使用-ldb-toolchain-编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-ldb-toolchain-编译"}},[a._v("#")]),a._v(" 使用 LDB toolchain 编译")]),a._v(" "),s("p",[a._v("本文档主要介绍如何使用 LDB toolchain 编译 Doris。该方式目前作为 Docker 编译方式的补充，方便没有 Docker 环境的开发者和用户编译 Doris 源码。")]),a._v(" "),s("blockquote",[s("p",[a._v("您依然可以使用 Docker 开发镜像编译最新代码："),s("code",[a._v("apache/incubator-doris:build-env-ldb-toolchain-latest")])])]),a._v(" "),s("blockquote",[s("p",[a._v("感谢 "),s("a",{attrs:{href:"https://github.com/amosbird",target:"_blank",rel:"noopener noreferrer"}},[a._v("Amos Bird"),s("OutboundLink")],1),a._v(" 的贡献。")])]),a._v(" "),s("h2",{attrs:{id:"准备编译环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备编译环境"}},[a._v("#")]),a._v(" 准备编译环境")]),a._v(" "),s("p",[a._v("该方式适用于绝大多数 Linux 发行版（CentOS，Ubuntu 等）。")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("下载 "),s("code",[a._v("ldb_toolchain_gen.sh")])]),a._v(" "),s("p",[a._v("可以从 "),s("a",{attrs:{href:"https://github.com/amosbird/ldb_toolchain_gen/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里"),s("OutboundLink")],1),a._v(" 下载最新的 "),s("code",[a._v("ldb_toolchain_gen.sh")]),a._v("。该脚本用于生成 ldb toolchain。")]),a._v(" "),s("blockquote",[s("p",[a._v("更多信息，可访问 "),s("a",{attrs:{href:"https://github.com/amosbird/ldb_toolchain_gen",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/amosbird/ldb_toolchain_gen"),s("OutboundLink")],1)])])]),a._v(" "),s("li",[s("p",[a._v("执行以下命令生成 ldb toolchain")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sh ldb_toolchain_gen.sh /path/to/ldb_toolchain/\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("其中 "),s("code",[a._v("/path/to/ldb_toolchain/")]),a._v(" 为安装 toolchain 目录。")]),a._v(" "),s("p",[a._v("执行成功后，会在 "),s("code",[a._v("/path/to/ldb_toolchain/")]),a._v(" 下生成如下目录结构：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("├── bin\n├── include\n├── lib\n├── share\n├── test\n└── usr\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("下载并安装其他编译组件")]),a._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/jdk-8u131-linux-x64.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java8"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/apache-maven-3.6.3-bin.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[a._v("Apache Maven 3.6.3"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/node-v12.13.0-linux-x64.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[a._v("Node v12.13.0"),s("OutboundLink")],1)])]),a._v(" "),s("p",[a._v("对于不同的 Linux 发行版，可能默认包含的组件不同。因此可能需要安装一些额外的组件。下面以 centos6 为例，其他发行版类似：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# install required system packages\nsudo yum install -y byacc patch automake libtool make which file ncurses-devel gettext-devel unzip bzip2 zip util-linux wget git python2\n\n# install autoconf-2.69\nwget http://ftp.gnu.org/gnu/autoconf/autoconf-2.69.tar.gz && \\\n    tar zxf autoconf-2.69.tar.gz && \\\n    cd autoconf-2.69 && \\\n    ./configure && \\\n    make && \\\n    make install\n\n# install bison-3.0.4\nwget http://ftp.gnu.org/gnu/bison/bison-3.0.4.tar.gz && \\\n    tar xzf bison-3.0.4.tar.gz && \\\n    cd bison-3.0.4 && \\\n    ./configure && \\\n    make && \\\n    make install\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("下载 Doris 源码")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git clone https://github.com/apache/incubator-doris.git\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("下载完成后，进入到 doris 源码目录，创建 "),s("code",[a._v("custom_env.sh")]),a._v("，文件，并设置 PATH 环境变量，如：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("export JAVA_HOME=/path/to/java/\nexport PATH=$JAVA_HOME/bin:$PATH\nexport PATH=/path/to/maven/bin:$PATH\nexport PATH=/path/to/node/bin:$PATH\nexport PATH=/path/to/ldb_toolchain/bin:$PATH\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])])])]),a._v(" "),s("h2",{attrs:{id:"编译-doris"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译-doris"}},[a._v("#")]),a._v(" 编译 Doris")]),a._v(" "),s("p",[a._v("进入 Doris 源码目录，执行：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ cat /proc/cpuinfo | grep avx2\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("查看编译机器是否支持avx2指令集")]),a._v(" "),s("p",[a._v("不支持则使用以下命令进行编译")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ USE_AVX2=0  sh build.sh\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("若支持则直接执行 "),s("code",[a._v("sh build.sh")]),a._v(" 即可")]),a._v(" "),s("p",[a._v("该脚本会先编译第三方库，之后再编译 Doris 组件（FE、BE）。编译产出在 "),s("code",[a._v("output/")]),a._v(" 目录下。")])])}),[],!1,null,null,null);t.default=e.exports}}]);