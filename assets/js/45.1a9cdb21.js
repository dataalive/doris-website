(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{673:function(e,a,s){"use strict";s.r(a);var t=s(15),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"validate-apache-releases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validate-apache-releases"}},[e._v("#")]),e._v(" Validate Apache Releases")]),e._v(" "),s("p",[e._v("This validation step can be used for validation during release polling and also for validation of released versions.")]),e._v(" "),s("p",[e._v("The following steps can be followed to verify.")]),e._v(" "),s("ol",[s("li",[e._v("[ ] Whether the download link is legitimate.")]),e._v(" "),s("li",[e._v("[ ] Whether the checksum and PGP signature are legitimate. 3.")]),e._v(" "),s("li",[e._v("[ ] Whether the DISCLAIMER or DISCLAIMER-WIP is included.")]),e._v(" "),s("li",[e._v("[ ] Whether the code matches the current release.")]),e._v(" "),s("li",[e._v("[ ] Whether the LICENSE and NOTICE files are correct.")]),e._v(" "),s("li",[e._v("[ ] All files carry the necessary protocol descriptions.")]),e._v(" "),s("li",[e._v("[ ] No compiled content is included in the source package.")]),e._v(" "),s("li",[e._v("[ ] Whether the compilation can be executed without problems.")])]),e._v(" "),s("p",[e._v("Here we use the verification of the Doris Core version as an example. Note that other components have their corresponding names changed.")]),e._v(" "),s("h2",{attrs:{id:"_1-download-the-source-package-signature-file-checksum-file-and-keys"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-download-the-source-package-signature-file-checksum-file-and-keys"}},[e._v("#")]),e._v(" 1. download the source package, signature file, checksum file and KEYS")]),e._v(" "),s("p",[e._v("Download all relevant files, using a.b.c-incubating as an example:")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://www.apache.org/dyn/mirrors/mirrors.cgi?action"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("download"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("filename")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/incubator/doris/a.b.c-incubating/apache-doris-a.b.c-incubating-src.tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://www.apache.org/dist/incubator/doris/a.b.c-incubating/apache-doris-a.b.c-incubating-src.tar.gz.sha512\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://www.apache.org/dist/incubator/doris/a.b.c-incubating/apache-doris-a.b.c-incubating-src.tar.gz.asc\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://downloads.apache.org/incubator/doris/KEYS\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("blockquote",[s("p",[e._v("In case of poll verification, you need to get the relevant files from the svn address provided in the email.")])]),e._v(" "),s("h2",{attrs:{id:"_2-check-signature-and-checksum-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-check-signature-and-checksum-value"}},[e._v("#")]),e._v(" 2. Check signature and checksum value")]),e._v(" "),s("p",[e._v("It is recommended to use GunPG, which can be installed by the following command.")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("CentOS: yum "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" gnupg\nUbuntu: "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" gnupg\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("gpg --import KEYS\ngpg --verify apache-doris-a.b.c-incubating-src.tar.gz.asc apache-doris-a.b.c-incubating-src.tar.gz\nsha512sum --check apache-doris-a.b.c-incubating-src.tar.gz.sha512\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h2",{attrs:{id:"_3-verify-the-source-protocol-header"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-verify-the-source-protocol-header"}},[e._v("#")]),e._v(" 3. Verify the source protocol header")]),e._v(" "),s("p",[e._v("Here we use "),s("a",{attrs:{href:"https://github.com/apache/skywalking-eyes",target:"_blank",rel:"noopener noreferrer"}},[e._v("skywalking-eyes"),s("OutboundLink")],1),e._v(" for protocol validation.")]),e._v(" "),s("p",[e._v("Go to the root of the source code and execute:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo docker run -it --rm -v $(pwd):/github/workspace apache/skywalking-eyes header check\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("The results of the run are as follows.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("INFO GITHUB_TOKEN is not set, license-eye won't comment on the pull request\nINFO Loading configuration from file: .licenserc.yaml\nINFO Totally checked 5611 files, valid: 3926, invalid: 0, ignored: 1685, fixed: 0\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("If invalid is 0, then the validation passes.")]),e._v(" "),s("h2",{attrs:{id:"_4-verify-compilation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-verify-compilation"}},[e._v("#")]),e._v(" 4. Verify compilation")]),e._v(" "),s("p",[e._v("Please see the compilation documentation of each component to verify the compilation.")]),e._v(" "),s("ul",[s("li",[e._v("For Doris Core, see "),s("RouterLink",{attrs:{to:"/install/source-install/compilation.html"}},[e._v("compilation documentation")])],1),e._v(" "),s("li",[e._v("Flink Doris Connector, see "),s("RouterLink",{attrs:{to:"/ecosystem/flink-doris-connector.html"}},[e._v("compilation documentation")])],1),e._v(" "),s("li",[e._v("Spark Doris Connector, see "),s("RouterLink",{attrs:{to:"/ecosystem/spark-doris-connector.html"}},[e._v("compilation documentation")])],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);