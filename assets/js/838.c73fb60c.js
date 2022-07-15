(window.webpackJsonp=window.webpackJsonp||[]).push([[838],{1466:function(e,a,t){"use strict";t.r(a);var s=t(15),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[e._v("#")]),e._v(" 编译")]),e._v(" "),t("p",[e._v("本文档主要介绍如何通过源码编译 Doris。")]),e._v(" "),t("h2",{attrs:{id:"使用-docker-开发镜像编译-推荐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-开发镜像编译-推荐"}},[e._v("#")]),e._v(" 使用 Docker 开发镜像编译（推荐）")]),e._v(" "),t("h3",{attrs:{id:"使用现成的镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用现成的镜像"}},[e._v("#")]),e._v(" 使用现成的镜像")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("下载 Docker 镜像")]),e._v(" "),t("p",[t("code",[e._v("$ docker pull apache/doris:build-env-ldb-toolchain-latest")])]),e._v(" "),t("p",[e._v("检查镜像下载完成：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ docker images\nREPOSITORY              TAG                               IMAGE ID            CREATED             SIZE\napache/doris  build-env-ldb-toolchain-latest    49f68cecbc1a        4 days ago          3.76GB\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])])])]),e._v(" "),t("blockquote",[t("p",[e._v("注1：针对不同的 Doris 版本，需要下载对应的镜像版本。从 Apache Doris 0.15 版本起，后续镜像版本号将与 Doris 版本号统一。比如可以使用 "),t("code",[e._v("apache/doris:build-env-for-0.15.0")]),e._v("  来编译 0.15.0 版本。")]),e._v(" "),t("p",[e._v("注2："),t("code",[e._v("apache/doris:build-env-ldb-toolchain-latest")]),e._v(" 用于编译最新主干版本代码，会随主干版本不断更新。可以查看 "),t("code",[e._v("docker/README.md")]),e._v(" 中的更新时间。")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("镜像版本")]),e._v(" "),t("th",[e._v("commit id")]),e._v(" "),t("th",[e._v("doris 版本")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("apache/incubator-doris:build-env")]),e._v(" "),t("td",[e._v("before "),t("a",{attrs:{href:"https://github.com/apache/doris/commit/ff0dd0d2daa588f18b6db56f947e813a56d8ec81",target:"_blank",rel:"noopener noreferrer"}},[e._v("ff0dd0d"),t("OutboundLink")],1)]),e._v(" "),t("td",[e._v("0.8.x, 0.9.x")])]),e._v(" "),t("tr",[t("td",[e._v("apache/incubator-doris:build-env-1.1")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://github.com/apache/doris/commit/ff0dd0d2daa588f18b6db56f947e813a56d8ec81",target:"_blank",rel:"noopener noreferrer"}},[e._v("ff0dd0d"),t("OutboundLink")],1)]),e._v(" "),t("td",[e._v("0.10.x, 0.11.x")])]),e._v(" "),t("tr",[t("td",[e._v("apache/incubator-doris:build-env-1.2")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://github.com/apache/doris/commit/4ef5a8c8560351d7fff7ff8fd51c4c7a75e006a8",target:"_blank",rel:"noopener noreferrer"}},[e._v("4ef5a8c"),t("OutboundLink")],1)]),e._v(" "),t("td",[e._v("0.12.x - 0.14.0")])]),e._v(" "),t("tr",[t("td",[e._v("apache/incubator-doris:build-env-1.3.1")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://github.com/apache/doris/commit/ad67dd34a04c1ca960cff38e5b335b30fc7d559f",target:"_blank",rel:"noopener noreferrer"}},[e._v("ad67dd3"),t("OutboundLink")],1)]),e._v(" "),t("td",[e._v("0.14.x")])]),e._v(" "),t("tr",[t("td",[e._v("apache/doris:build-env-for-0.15.0")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://github.com/apache/doris/commit/a81f4da4e461a54782a96433b746d07be89e6b54",target:"_blank",rel:"noopener noreferrer"}},[e._v("a81f4da"),t("OutboundLink")],1),e._v(" or later")]),e._v(" "),t("td",[e._v("0.15.0")])]),e._v(" "),t("tr",[t("td",[e._v("apache/incubator-doris:build-env-latest")]),e._v(" "),t("td",[e._v("before "),t("a",{attrs:{href:"https://github.com/apache/doris/commit/0efef1b332300887ee0473f9df9bdd9d7297d824",target:"_blank",rel:"noopener noreferrer"}},[e._v("0efef1b"),t("OutboundLink")],1)]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("apache/doris:build-env-for-1.0.0")]),e._v(" "),t("td"),e._v(" "),t("td",[e._v("1.0.0")])]),e._v(" "),t("tr",[t("td",[e._v("apache/doris:build-env-for-1.1.0")]),e._v(" "),t("td"),e._v(" "),t("td",[e._v("1.1.0")])]),e._v(" "),t("tr",[t("td",[e._v("apache/doris:build-env-ldb-toolchain-latest")]),e._v(" "),t("td",[e._v("trunk")]),e._v(" "),t("td")])])]),e._v(" "),t("p",[t("strong",[e._v("注意")]),e._v("：")]),e._v(" "),t("blockquote",[t("ol",[t("li",[e._v("编译镜像 "),t("a",{attrs:{href:"https://github.com/apache/doris/blob/master/thirdparty/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ChangeLog"),t("OutboundLink")],1),e._v("。")])])]),e._v(" "),t("blockquote",[t("ol",{attrs:{start:"2"}},[t("li",[e._v("doris 0.14.0 版本仍然使用apache/incubator-doris:build-env-1.2 编译，0.14.x 版本的代码将使用apache/incubator-doris:build-env-1.3.1。")])])]),e._v(" "),t("blockquote",[t("ol",{attrs:{start:"3"}},[t("li",[e._v("从 build-env-1.3.1 的docker镜像起，同时包含了 OpenJDK 8 和 OpenJDK 11，并且默认使用 OpenJDK 11 编译。请确保编译使用的 JDK 版本和运行时使用的 JDK 版本一致，否则会导致非预期的运行错误。你可以在进入编译镜像的容器后，使用以下命令切换默认 JDK 版本：")])]),e._v(" "),t("p",[e._v("切换到 JDK 8：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ alternatives --set java java-1.8.0-openjdk.x86_64\n$ alternatives --set javac java-1.8.0-openjdk.x86_64\n$ export JAVA_HOME=/usr/lib/jvm/java-1.8.0\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("切换到 JDK 11：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ alternatives --set java java-11-openjdk.x86_64\n$ alternatives --set javac java-11-openjdk.x86_64\n$ export JAVA_HOME=/usr/lib/jvm/java-11\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[e._v("运行镜像")]),e._v(" "),t("p",[t("code",[e._v("$ docker run -it apache/doris:build-env-ldb-toolchain-latest")])]),e._v(" "),t("p",[e._v("建议以挂载本地 Doris 源码目录的方式运行镜像，这样编译的产出二进制文件会存储在宿主机中，不会因为镜像退出而消失。")]),e._v(" "),t("p",[e._v("同时，建议同时将镜像中 maven 的 "),t("code",[e._v(".m2")]),e._v(" 目录挂载到宿主机目录，以防止每次启动镜像编译时，重复下载 maven 的依赖库。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ docker run -it -v /your/local/.m2:/root/.m2 -v /your/local/doris-DORIS-x.x.x-release/:/root/doris-DORIS-x.x.x-release/ apache/doris:build-env-ldb-toolchain-latest\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("下载源码")]),e._v(" "),t("p",[e._v("启动镜像后，你应该已经处于容器内。可以通过以下命令下载 Doris 源码（已挂载本地源码目录则不用）：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ wget https://dist.apache.org/repos/dist/dev/doris/xxx.tar.gz\nor\n$ git clone https://github.com/apache/doris.git\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("编译 Doris")]),e._v(" "),t("p",[e._v("先通过以下命令查看编译机器是否支持avx2指令集")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cat /proc/cpuinfo | grep avx2\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("不支持则使用以下命令进行编译")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ USE_AVX2=0  sh build.sh\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("如果支持，可不加 USE_AVX2=0 ，直接进行编译")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sh build.sh\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("编译完成后，产出文件在 "),t("code",[e._v("output/")]),e._v(" 目录中。")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("注意:")])]),e._v(" "),t("p",[e._v("如果你是第一次使用 "),t("code",[e._v("build-env-for-0.15.0")]),e._v(" 或之后的版本，第一次编译的时候要使用如下命令：")]),e._v(" "),t("p",[t("code",[e._v("sh build.sh --clean --be --fe --ui")])]),e._v(" "),t("p",[e._v("这是因为 build-env-for-0.15.0 版本镜像升级了 thrift(0.9 -> 0.13)，需要通过 --clean 命令强制使用新版本的 thrift 生成代码文件，否则会出现不兼容的代码。")])]),e._v(" "),t("p",[e._v("编译完成后，产出文件在 "),t("code",[e._v("output/")]),e._v(" 目录中。")])])]),e._v(" "),t("h3",{attrs:{id:"自行编译开发环境镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自行编译开发环境镜像"}},[e._v("#")]),e._v(" 自行编译开发环境镜像")]),e._v(" "),t("p",[e._v("你也可以自己创建一个 Doris 开发环境镜像，具体可参阅 "),t("code",[e._v("docker/README.md")]),e._v(" 文件。")]),e._v(" "),t("h2",{attrs:{id:"直接编译-centos-ubuntu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#直接编译-centos-ubuntu"}},[e._v("#")]),e._v(" 直接编译（CentOS/Ubuntu）")]),e._v(" "),t("p",[e._v("你可以在自己的 linux 环境中直接尝试编译 Doris。")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("系统依赖\n不同的版本依赖也不相同")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("在 "),t("a",{attrs:{href:"https://github.com/apache/doris/commit/ad67dd34a04c1ca960cff38e5b335b30fc7d559f",target:"_blank",rel:"noopener noreferrer"}},[e._v("ad67dd3"),t("OutboundLink")],1),e._v(" 之前版本依赖如下：")]),e._v(" "),t("p",[t("code",[e._v("GCC 7.3+, Oracle JDK 1.8+, Python 2.7+, Apache Maven 3.5+, CMake 3.11+ Bison 3.0+")])]),e._v(" "),t("p",[e._v("如果使用Ubuntu 16.04 及以上系统 可以执行以下命令来安装依赖")]),e._v(" "),t("p",[t("code",[e._v("sudo apt-get install build-essential openjdk-8-jdk maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev curl git ninja-build python autopoint pkg-config")])]),e._v(" "),t("p",[e._v("如果是CentOS 可以执行以下命令")]),e._v(" "),t("p",[t("code",[e._v("sudo yum groupinstall 'Development Tools' && sudo yum install maven cmake byacc flex automake libtool bison binutils-devel zip unzip ncurses-devel curl git wget python2 glibc-static libstdc++-static java-1.8.0-openjdk")])])]),e._v(" "),t("li",[t("p",[e._v("在 "),t("a",{attrs:{href:"https://github.com/apache/doris/commit/ad67dd34a04c1ca960cff38e5b335b30fc7d559f",target:"_blank",rel:"noopener noreferrer"}},[e._v("ad67dd3"),t("OutboundLink")],1),e._v(" 之后版本依赖如下：")]),e._v(" "),t("p",[t("code",[e._v("GCC 10+, Oracle JDK 1.8+, Python 2.7+, Apache Maven 3.5+, CMake 3.19.2+ Bison 3.0+")])]),e._v(" "),t("p",[e._v("如果使用Ubuntu 16.04 及以上系统 可以执行以下命令来安装依赖")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo apt install build-essential openjdk-8-jdk maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev curl git ninja-build python\nsudo add-apt-repository ppa:ubuntu-toolchain-r/ppa\nsudo apt update\nsudo apt install gcc-10 g++-10 \nsudo apt-get install autoconf automake libtool autopoint\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("如果是CentOS 可以执行以下命令")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo yum groupinstall 'Development Tools' && sudo yum install maven cmake byacc flex automake libtool bison binutils-devel zip unzip ncurses-devel curl git wget python2 glibc-static libstdc++-static java-1.8.0-openjdk\nsudo yum install centos-release-scl\nsudo yum install devtoolset-10\nscl enable devtoolset-10 bash\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("如果当前仓库没有提供devtoolset-10 可以添加如下repo 使用oracle 提供 package")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[ol7_software_collections]\nname=Software Collection packages for Oracle Linux 7 ($basearch)\nbaseurl=http://yum.oracle.com/repo/OracleLinux/OL7/SoftwareCollections/$basearch/\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-oracle\ngpgcheck=1\nenabled=1\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])])])]),e._v(" "),t("p",[e._v("安装完成后，自行设置环境变量 "),t("code",[e._v("PATH")]),e._v(", "),t("code",[e._v("JAVA_HOME")]),e._v(" 等。(可以通过"),t("code",[e._v("alternatives --list")]),e._v("命令找到jdk的安装目录)\n注意： Doris 0.14.0 的版本仍然使用gcc7 的依赖编译，之后的代码将使用gcc10 的依赖")])]),e._v(" "),t("li",[t("p",[e._v("编译 Doris")]),e._v(" "),t("p",[e._v("与使用 Docker 开发镜像编译一样，编译之前先检查是否支持avx2指令")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cat /proc/cpuinfo | grep avx2\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("支持则使用下面命令进行编译")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sh build.sh\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("如不支持需要加 USE_AVX2=0")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ USE_AVX2=0 sh build.sh\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("编译完成后，产出文件在 "),t("code",[e._v("output/")]),e._v(" 目录中。")])])]),e._v(" "),t("h2",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[e._v("#")]),e._v(" 常见问题")]),e._v(" "),t("ol",[t("li",[t("p",[t("code",[e._v("Could not transfer artifact net.sourceforge.czt.dev:cup-maven-plugin:pom:1.6-cdh from/to xxx")])]),e._v(" "),t("p",[e._v("如遇到上述错误，请参照 "),t("a",{attrs:{href:"https://github.com/apache/doris/pull/4769/files",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR #4769"),t("OutboundLink")],1),e._v(" 修改 "),t("code",[e._v("fe/pom.xml")]),e._v(" 中 cloudera 相关的仓库配置。")])]),e._v(" "),t("li",[t("p",[e._v("第三方依赖下载连接错误、失效等问题")]),e._v(" "),t("p",[e._v("Doris 所依赖的第三方库的下载连接都在 "),t("code",[e._v("thirdparty/vars.sh")]),e._v(" 文件内。随着时间推移，一些下载连接可能会失效。如果遇到这种情况。可以使用如下两种方式解决：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("手动修改 "),t("code",[e._v("thirdparty/vars.sh")]),e._v(" 文件")]),e._v(" "),t("p",[e._v("手动修改有问题的下载连接和对应的 MD5 值。")])]),e._v(" "),t("li",[t("p",[e._v("使用第三方下载仓库：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export REPOSITORY_URL=https://doris-thirdparty-repo.bj.bcebos.com/thirdparty\nsh build-thirdparty.sh\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("REPOSITORY_URL 中包含所有第三方库源码包和他们的历史版本。")])])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("fatal error: Killed signal terminated program ...")])]),e._v(" "),t("p",[e._v("使用 Docker 镜像编译时如遇到上述报错，可能是分配给镜像的内存不足（Docker 默认分配的内存大小为 2GB，编译过程中内存占用的峰值大于 2GB）。")]),e._v(" "),t("p",[e._v("尝试适当调大镜像的分配内存，推荐 4GB ~ 8GB。")])])]),e._v(" "),t("h2",{attrs:{id:"特别声明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特别声明"}},[e._v("#")]),e._v(" 特别声明")]),e._v(" "),t("p",[e._v("自 0.13 版本开始，默认的编译产出中将取消对 [1] 和 [2] 两个第三方库的依赖。这两个第三方库为 "),t("a",{attrs:{href:"https://www.gnu.org/licenses/gpl-3.0.en.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GNU General Public License V3"),t("OutboundLink")],1),e._v(" 协议。该协议与 "),t("a",{attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache License 2.0"),t("OutboundLink")],1),e._v(" 协议不兼容，因此默认不出现在 Apache 发布版本中。")]),e._v(" "),t("p",[e._v("移除依赖库 [1] 会导致无法访问 MySQL 外部表。访问 MySQL 外部表的功能会在后续版本中通过 UnixODBC 实现。")]),e._v(" "),t("p",[e._v("移除依赖库 [2] 会导致在无法读取部分早期版本（0.8版本之前）写入的部分数据。因为早期版本中的数据是使用 LZO 算法压缩的，在之后的版本中，已经更改为 LZ4 压缩算法。后续我们会提供工具用于检测和转换这部分数据。")]),e._v(" "),t("p",[e._v("如果有需求，用户可以继续使用这两个依赖库。如需使用，需要在编译时添加如下选项：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("WITH_MYSQL=1 WITH_LZO=1 sh build.sh\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("注意，当用户依赖这两个第三方库时，则默认不在 Apache License 2.0 协议框架下使用 Doris。请注意 GPL 相关协议约束。")]),e._v(" "),t("ul",[t("li",[e._v("[1] mysql-5.7.18")]),e._v(" "),t("li",[e._v("[2] lzo-2.10")])])])}),[],!1,null,null,null);a.default=r.exports}}]);