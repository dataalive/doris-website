(window.webpackJsonp=window.webpackJsonp||[]).push([[1136],{1763:function(e,t,a){"use strict";a.r(t);var s=a(15),l=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"get-log-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-log-file"}},[e._v("#")]),e._v(" get_log_file")]),e._v(" "),a("p",[e._v("To get FE log via HTTP")]),e._v(" "),a("h2",{attrs:{id:"types-of-fe-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types-of-fe-log"}},[e._v("#")]),e._v(" Types of FE log")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("fe.audit.log (Audit log)")]),e._v(" "),a("p",[e._v("The audit log records the all statements executed. Audit log's name format as follow:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("fe.audit.log                # The latest audit log\nfe.audit.log.20190603.1     # The historical audit log. The smaller the sequence number, the newer the log.\nfe.audit.log.20190603.2\nfe.audit.log.20190602.1\n...\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])])])]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Get the list of specified type of logs")]),e._v(" "),a("p",[e._v("Example")]),e._v(" "),a("p",[a("code",[e._v("curl -v -X HEAD -uuser:passwd http://fe_host:http_port/api/get_log_file?type=fe.audit.log")])]),e._v(" "),a("p",[e._v("Returns:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('HTTP/1.1 200 OK\nfile_infos: {"fe.audit.log":24759,"fe.audit.log.20190528.1":132934}\ncontent-type: text/html\nconnection: keep-alive\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("In the header of result, the "),a("code",[e._v("file_infos")]),e._v(" section saves the file list and file size in JSON format.")])]),e._v(" "),a("li",[a("p",[e._v("Download files")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl -X GET -uuser:passwd http://fe_host:http_port/api/get_log_file?type=fe.audit.log\\&file=fe.audit.log.20190528.1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])]),e._v(" "),a("h2",{attrs:{id:"notification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notification"}},[e._v("#")]),e._v(" Notification")]),e._v(" "),a("p",[e._v("Need ADMIN privilege.")])])}),[],!1,null,null,null);t.default=l.exports}}]);