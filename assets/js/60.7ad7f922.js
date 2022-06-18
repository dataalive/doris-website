(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{688:function(s,a,e){"use strict";e.r(a);var t=e(15),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"doris-docker-quick-build-development-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#doris-docker-quick-build-development-environment"}},[s._v("#")]),s._v(" Doris Docker quick build development environment")]),s._v(" "),e("h2",{attrs:{id:"related-detailed-document-navigation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#related-detailed-document-navigation"}},[s._v("#")]),s._v(" Related detailed document navigation")]),s._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/developer/install/source-install/compilation.html#developing-mirror-compilation-using-docker-recommended"}},[s._v("Developing mirror compilation using Docker")])],1),s._v(" "),e("li",[e("RouterLink",{attrs:{to:"/developer/install/install-deploy.html#cluster-deployment"}},[s._v("Deploying Doris")])],1),s._v(" "),e("li",[e("RouterLink",{attrs:{to:"/developer/developer-guide/be-vscode-dev.html"}},[s._v("VSCode Be Development Debugging")])],1)]),s._v(" "),e("h2",{attrs:{id:"environment-preparation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment-preparation"}},[s._v("#")]),s._v(" Environment preparation")]),s._v(" "),e("ul",[e("li",[s._v("Install Docker")]),s._v(" "),e("li",[s._v("VSCode\n"),e("ul",[e("li",[s._v("Remote plugin")])])])]),s._v(" "),e("h2",{attrs:{id:"build-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-image"}},[s._v("#")]),s._v(" Build image")]),s._v(" "),e("p",[s._v("create dockerfile")]),s._v(" "),e("p",[s._v("VSCode replace all by using Ctrl-d")]),s._v(" "),e("ul",[e("li",[s._v("<!!! your user !!!>")]),s._v(" "),e("li",[s._v("<!!! your user password !!!>")]),s._v(" "),e("li",[s._v("<!!! root password !!!>")]),s._v(" "),e("li",[s._v("<!!! your git email !!!>")]),s._v(" "),e("li",[s._v("<!!! your git username !!!>")])]),s._v(" "),e("div",{staticClass:"language-dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" apache/incubator-doris:build-env-latest")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" root")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /root")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<!!! root password !!!>'")]),s._v(" | passwd root --stdin")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yum install -y vim net-tools man wget git mysql lsof bash-completion "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && cp /var/local/thirdparty/installed/bin/thrift /usr/bin")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# safer usage, create new user instead of using root")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yum install -y sudo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && useradd -ms /bin/bash <!!! your user !!!> && echo <!!! your user password !!!> | passwd <!!! your user !!!> --stdin "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && usermod -a -G wheel <!!! your user !!!>")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" <!!! your user !!!>")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /home/<!!! your user !!!>")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" git config --global color.ui true "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && git config --global user.email "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<!!! your git email !!!>"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && git config --global user.name "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<!!! your git username !!!>"')])]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install zsh and oh my zsh, easier to use on, you can remove it if you don't need it")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" root")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yum install -y zsh "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && chsh -s /bin/zsh <!!! your user !!!>")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" <!!! your user !!!>")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && git clone https://github.com/zsh-users/zsh-autosuggestions "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ZSH_CUSTOM:-~/.oh-my-zsh/custom}")]),s._v("/plugins/zsh-autosuggestions "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && git clone https://github.com/zsh-users/zsh-syntax-highlighting.git "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ZSH_CUSTOM:-~/.oh-my-zsh/custom}")]),s._v("/plugins/zsh-syntax-highlighting")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br")])]),e("p",[s._v("run build command")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build -t doris "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("run image")]),s._v(" "),e("p",[s._v("note! "),e("RouterLink",{attrs:{to:"/developer/install/source-install/compilation.html"}},[s._v("problems with mounting")])],1),s._v(" "),e("blockquote",[e("p",[s._v("See the link above: It is recommended to run the image by mounting the local Doris source code directory as a volume .....")])]),s._v(" "),e("p",[s._v("if you are developing on windows, mounting may cause cross-filesystem access problems, please consider setting it manually")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it doris:latest /bin/bash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("if you installed zsh, replace plugins in ~/.zshrc after running the container")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("plugins=(git zsh-autosuggestions zsh-syntax-highlighting)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("create directory and download doris")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your user"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" code "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" code\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/apache/incubator-doris.git\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"compile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compile"}},[s._v("#")]),s._v(" Compile")]),s._v(" "),e("p",[s._v("Note:")]),s._v(" "),e("p",[s._v("use the following command first time compiling")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" build.sh --clean --be --fe --ui\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("it is because build-env-for-0.15.0 version image upgraded thrift(0.9 -> 0.13), so you need to use --clean command to force use new version of thrift to generate code files, otherwise it will cause incompatibilities.")]),s._v(" "),e("p",[s._v("compile Doris")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" build.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[s._v("#")]),s._v(" Run")]),s._v(" "),e("p",[s._v("manually create "),e("code",[s._v("meta_dir")]),s._v(" metadata storage location, default value is "),e("code",[s._v("${DORIS_HOME}/doris-meta")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" meta_dir\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("launch FE")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" output/fe\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" bin/start_fe.sh --daemon\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("launch BE")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" output/be\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" bin/start_be.sh --daemon\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("mysql-client connect")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("mysql -h "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -P "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9030")]),s._v(" -u root\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);