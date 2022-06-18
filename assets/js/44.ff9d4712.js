(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{672:function(a,e,s){"use strict";s.r(e);var n=s(15),t=Object(n.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"publish-doris-manager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publish-doris-manager"}},[a._v("#")]),a._v(" Publish Doris Manager")]),a._v(" "),s("p",[a._v("Its codebase is separate from the main Doris codebase at:")]),a._v(" "),s("ul",[s("li",[a._v("https://github.com/apache/incubator-doris-manager")])]),a._v(" "),s("h2",{attrs:{id:"ready-to-publish"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ready-to-publish"}},[a._v("#")]),a._v(" ready to publish")]),a._v(" "),s("p",[a._v("First, refer to the "),s("RouterLink",{attrs:{to:"/community/release-and-verify/release-prepare.html"}},[a._v("release preparation")]),a._v(" documentation for release preparation.")],1),a._v(" "),s("h2",{attrs:{id:"prepare-branch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prepare-branch"}},[a._v("#")]),a._v(" prepare branch")]),a._v(" "),s("p",[a._v("Before publishing, you need to create a new branch. E.g:")]),a._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git checkout -b branch-1.0.0\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("This branch needs to be fully tested, so that functions are available, bugs are closed, and important bugs are fixed. This process requires waiting for the community to see if the necessary patch needs to be merged in this release, and if so, cherry-pick it to the release branch.")]),a._v(" "),s("h2",{attrs:{id:"clean-up-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clean-up-issues"}},[a._v("#")]),a._v(" clean up issues")]),a._v(" "),s("p",[a._v("Go through all issues that belong to this version, close the ones that have been completed, and postpone them to a later version if they cannot be completed")]),a._v(" "),s("h2",{attrs:{id:"merge-necessary-patches"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#merge-necessary-patches"}},[a._v("#")]),a._v(" Merge necessary patches")]),a._v(" "),s("p",[a._v("During the release waiting process, there may be more important patches merged. If someone in the community says that there are important bugs that need to be merged, then the Release Manager needs to evaluate and merge important patches into the release branch")]),a._v(" "),s("h2",{attrs:{id:"verify-branch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verify-branch"}},[a._v("#")]),a._v(" Verify branch")]),a._v(" "),s("h3",{attrs:{id:"stability-test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stability-test"}},[a._v("#")]),a._v(" Stability Test")]),a._v(" "),s("p",[a._v("Give the prepared branch to QA students for stability testing. If there is a problem that needs to be fixed during the testing process, if there is a problem that needs to be fixed during the testing process, after the repair is completed, the PR that fixes the problem needs to be merged into the branch of the to-be-released version.")]),a._v(" "),s("p",[a._v("After the entire branch is stable, the release version can be prepared.")]),a._v(" "),s("h3",{attrs:{id:"compile-and-verify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compile-and-verify"}},[a._v("#")]),a._v(" Compile and verify")]),a._v(" "),s("p",[a._v("Please refer to the compilation documentation for compilation to ensure that the source code is compiled correctly.")]),a._v(" "),s("h2",{attrs:{id:"community-release-voting-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#community-release-voting-process"}},[a._v("#")]),a._v(" Community release voting process")]),a._v(" "),s("h3",{attrs:{id:"tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tag"}},[a._v("#")]),a._v(" tag")]),a._v(" "),s("p",[a._v("When the above branch is relatively stable, you can tag this branch.")]),a._v(" "),s("p",[a._v("E.g:")]),a._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('$ git checkout branch-1.0.0\n$ git tag -a 1.0.0-rc01 -m "doris manager 1.0.0 release candidate 01"\n$ git push origin 1.0.0-rc01\nCounting objects: 1, done.\nWriting objects: 100% (1/1), 165 bytes | 0 bytes/s, done.\nTotal 1 (delta 0), reused 0 (delta 0)\nTo git@github.com:apache/incubator-doris-manager.git\n * [new tag] 1.0.0-rc01 -> 1.0.0-rc01\n\n$ git tag\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("h3",{attrs:{id:"package-sign-and-upload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-sign-and-upload"}},[a._v("#")]),a._v(" Package, sign and upload")]),a._v(" "),s("p",[a._v("In the following steps, you also need to log in to the user account directly through a terminal such as SecureCRT. You cannot switch it through su - user or ssh, otherwise the password input box will not be displayed and an error will be reported.")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git archive --format=tar 1.0.0-rc01 --prefix=apache-doris-incubating-manager-src-1.0.0-rc01/ | gzip > apache-doris-incubating-manager-src-1.0.0-rc01 .tar.gz\n\ngpg -u xxx@apache.org --armor --output apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz.asc --detach-sign apache-doris-incubating-manager-src- 1.0.0-rc01.tar.gz\n\ngpg --verify apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz.asc apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz\n\nsha512sum apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz > apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz.sha512\n\nsha512sum --check apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz.sha512\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("Then upload the packaged content to the svn repository, first download the svn library:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("svn co https://dist.apache.org/repos/dist/dev/incubator/doris/\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Organize all the files obtained before into the following svn paths")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("./doris/\n├── doris-manager\n│ └── 1.0.0\n│ ├── apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz\n│ ├── apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz.asc\n│ └── apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz.sha512\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[a._v("upload these files")]),a._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('svn add 1.0.0-rc01\nsvn commit -m "Add doris manager 1.0.0-rc01"\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"email-the-community-dev-doris-apache-org-to-vote"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#email-the-community-dev-doris-apache-org-to-vote"}},[a._v("#")]),a._v(" Email the community dev@doris.apache.org to vote")]),a._v(" "),s("p",[a._v("[VOTE] Release Apache Doris Manager 1.0.0-incubating-rc01")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Hi All,\n\nThis is a call for vote to release Doris Manager v1.0.0 for Apache Doris(Incubating).\n\n- apache-doris-incubating-manager-src-1.0.0-rc01\n\nThe release node:\n\n\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/doris-manager/1.0.0/\n\nKeys to verify the Release Candidate:\nhttps://downloads.apache.org/incubator/doris/KEYS\n\nLook at here for how to verify this release candidate:\nhttp://doris.incubator.apache.org/community/release-and-verify/release-verify.html\n\nVote thread at dev@doris: [1]\n\nThe vote will be open for at least 72 hours or until necessary number of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\n[1] vote thread in dev@doris\n\n\nBrs,\nxxxx\n------------------\nDISCLAIMER:\nApache Doris (incubating) is an effort undergoing incubation at The\nApache Software Foundation (ASF), sponsored by the Apache Incubator PMC.\n\nIncubation is required of all newly accepted\nprojects until a further review indicates that the\ninfrastructure, communications, and decision making process have\nstabilized in a manner consistent with other successful ASF\nprojects.\n\nWhile incubation status is not necessarily a reflection\nof the completeness or stability of the code, it does indicate\nthat the project has yet to be fully endorsed by the ASF.\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br"),s("span",{staticClass:"line-number"},[a._v("44")]),s("br"),s("span",{staticClass:"line-number"},[a._v("45")]),s("br"),s("span",{staticClass:"line-number"},[a._v("46")]),s("br"),s("span",{staticClass:"line-number"},[a._v("47")]),s("br"),s("span",{staticClass:"line-number"},[a._v("48")]),s("br"),s("span",{staticClass:"line-number"},[a._v("49")]),s("br")])]),s("h3",{attrs:{id:"after-voting-send-result-email"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#after-voting-send-result-email"}},[a._v("#")]),a._v(" After voting, send Result email")]),a._v(" "),s("p",[a._v("[Result][VOTE] Release Apache Doris Manager 1.0.0-incubating-rc01")]),a._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Thanks to everyone, and this vote is now closed.\n\nIt has passed with 4 +1 (binding) votes and no 0 or -1 votes.\n\nBinding:\n+1 jiafeng Zhang\n+1 xxx\n+1 EmmyMiao87\n+1 Mingyu Chen\n\nBest Regards,\nxxx\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("p",[a._v("After passing the dev mailing group, send an email to the general@incubator mailing group for IPMC voting.")]),a._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Hi all,\n\nPlease review and vote on Apache Doris Manager 1.0.0-incubating-rc01 release.\n\nDoris manager is a platform for automatic installation, deployment and management of Doris groups\n\nThe Apache Doris community has voted on and approved this release:\nhttps://lists.apache.org/thread.html/d70f7c8a8ae448bf6680a15914646005c6483564464cfa15f4ddc2fc@%3Cdev.doris.apache.org%3E\n\nThe vote result email thread:\nhttps://lists.apache.org/thread.html/64d229f0ba15d66adc83306bc8d7b7ccd5910ecb7e842718ce6a61da@%3Cdev.doris.apache.org%3E\n\nThe release candidate has been tagged in GitHub as 1.0.0-rc01, available here:\nhttps://github.com/apache/incubator-doris-manager/releases/tag/1.0.0-rc01\n\nThere is no CHANGE LOG file because this is the first release of Apache Doris.\nThanks to everyone who has contributed to this release, and there is a simple release notes can be found here:\nhttps://github.com/apache/incubator-doris/issues/406\n\nThe artifacts (source, signature and checksum) corresponding to this release candidate can be found here:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/doris-manager/1.0.0/\n\nThis has been signed with PGP key 33DBF2E0, corresponding to lide@apache.org.\nKEYS file is available here:\nhttps://downloads.apache.org/incubator/doris/KEYS\nIt is also listed here:\nhttps://people.apache.org/keys/committer/lide.asc\n\nThe vote will be open for at least 72 hours.\n[ ] +1 Approve the release\n[ ] +0 No opinion\n[ ] -1 Do not release this package because ...\n\nTo verify and build, you can refer to the following instruction:\n\nFirstly, you must be install and start docker service, and then you could build Doris as following steps:\n\n$ wget https://dist.apache.org/repos/dist/dev/incubator/doris/doris-manager/1.0.0/apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz\n\nStep4: Build Doris\nNow you can decompress and enter Doris source path and build Doris.\n$ tar zxvf apache-doris-incubating-manager-src-1.0.0-rc01.tar.gz\n$ cd apache-doris-incubating-manager-src-1.0.0-rc01\n$ sh build.sh\n\nBest Regards,\nxxx\n\n----\nDISCLAIMER:\nApache Doris (incubating) is an effort undergoing incubation at The\nApache Software Foundation (ASF), sponsored by the Apache Incubator PMC.\n\nIncubation is required of all newly accepted\nprojects until a further review indicates that the\ninfrastructure, communications, and decision making process have\nstabilized in a manner consistent with other successful ASF\nprojects.\n\nWhile incubation status is not necessarily a reflection\nof the completeness or stability of the code, it does indicate\nthat the project has yet to be fully endorsed by the ASF.\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br"),s("span",{staticClass:"line-number"},[a._v("44")]),s("br"),s("span",{staticClass:"line-number"},[a._v("45")]),s("br"),s("span",{staticClass:"line-number"},[a._v("46")]),s("br"),s("span",{staticClass:"line-number"},[a._v("47")]),s("br"),s("span",{staticClass:"line-number"},[a._v("48")]),s("br"),s("span",{staticClass:"line-number"},[a._v("49")]),s("br"),s("span",{staticClass:"line-number"},[a._v("50")]),s("br"),s("span",{staticClass:"line-number"},[a._v("51")]),s("br"),s("span",{staticClass:"line-number"},[a._v("52")]),s("br"),s("span",{staticClass:"line-number"},[a._v("53")]),s("br"),s("span",{staticClass:"line-number"},[a._v("54")]),s("br"),s("span",{staticClass:"line-number"},[a._v("55")]),s("br"),s("span",{staticClass:"line-number"},[a._v("56")]),s("br"),s("span",{staticClass:"line-number"},[a._v("57")]),s("br"),s("span",{staticClass:"line-number"},[a._v("58")]),s("br"),s("span",{staticClass:"line-number"},[a._v("59")]),s("br"),s("span",{staticClass:"line-number"},[a._v("60")]),s("br"),s("span",{staticClass:"line-number"},[a._v("61")]),s("br"),s("span",{staticClass:"line-number"},[a._v("62")]),s("br")])]),s("p",[a._v("The thread link for the mail can be found here:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("https://lists.apache.org/list.html?dev@doris.apache.org\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"send-result-email-to-general-incubator-apache-org"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#send-result-email-to-general-incubator-apache-org"}},[a._v("#")]),a._v(" Send Result email to general@incubator.apache.org")]),a._v(" "),s("p",[a._v("[RESULT][VOTE] Release Apache Doris Manager 1.0.0-incubating-rc01")]),a._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Hi,\n\nThanks to everyone, and the vote for releasing Apache Doris Manager 1.0.0-incubating-rc01 is now closed.\n\nIt has passed with 4 +1 (binding) votes and no 0 or -1 votes.\n\nBinding:\n+1 Willem Jiang\n+1 Justin Mclean\n+1 ShaoFeng Shi\n+1 Makoto Yui\n\nThe vote thread:\nhttps://lists.apache.org/thread.html/da05fdd8d84e35de527f27200b5690d7811a1e97d419d1ea66562130@%3Cgeneral.incubator.apache.org%3E\n\nBest Regards,\nxxx\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("h2",{attrs:{id:"finish-publishing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finish-publishing"}},[a._v("#")]),a._v(" Finish publishing")]),a._v(" "),s("p",[a._v("Please refer to the "),s("a",{attrs:{href:"https://doris.apache.org/en-US/community/release-and-verify/release-complete.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Completing the Release"),s("OutboundLink")],1),a._v(" documentation to complete all release processes.")])])}),[],!1,null,null,null);e.default=t.exports}}]);