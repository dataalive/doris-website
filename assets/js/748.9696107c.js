(window.webpackJsonp=window.webpackJsonp||[]).push([[748],{1374:function(s,a,t){"use strict";t.r(a);var e=t(15),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"链路追踪"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链路追踪"}},[s._v("#")]),s._v(" 链路追踪")]),s._v(" "),t("p",[s._v("链路追踪（tracing）记录了一次请求在系统中的执行的生命周期，包括请求及其子过程调用链路、执行时间及统计信息，可用于慢查询定位、性能瓶颈分析等。")]),s._v(" "),t("h1",{attrs:{id:"操作流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作流程"}},[s._v("#")]),s._v(" 操作流程")]),s._v(" "),t("h2",{attrs:{id:"部署链路分析系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署链路分析系统"}},[s._v("#")]),s._v(" 部署链路分析系统")]),s._v(" "),t("p",[s._v("目前支持 "),t("a",{attrs:{href:"https://zipkin.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Zipkin"),t("OutboundLink")],1),s._v(" ，未来会支持更多链路分析系统。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("curl -sSL https://zipkin.io/quickstart.sh | bash -s\njava -jar zipkin.jar\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"配置及启动doris"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置及启动doris"}},[s._v("#")]),s._v(" 配置及启动Doris")]),s._v(" "),t("h3",{attrs:{id:"添加配置到fe-conf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加配置到fe-conf"}},[s._v("#")]),s._v(" 添加配置到fe.conf")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 开启链路追踪\nenable_tracing = true\n\n# 配置traces导出到zipkin\ntrace_export_url = http://127.0.0.1:9411/api/v2/spans\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"添加配置到be-conf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加配置到be-conf"}},[s._v("#")]),s._v(" 添加配置到be.conf")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 开启链路追踪\nenable_tracing = true\n\n# 配置traces导出到zipkin\ntrace_export_url = http://127.0.0.1:9411/api/v2/spans\n\n# 缓存span的队列大小。span数量达到队列容量一半时将触发一次span导出，队列满后到达队列的span将被丢弃。\nmax_span_queue_size=2048\n\n# 单次导出span的最大数量。\nmax_span_export_batch_size=512\n\n# 导出span的最大间隔时间\nexport_span_schedule_delay_millis=500\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h3",{attrs:{id:"启动fe和be"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动fe和be"}},[s._v("#")]),s._v(" 启动fe和be")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sh fe/bin/start_fe.sh --daemon\nsh be/bin/start_be.sh --daemon\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"执行查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行查询"}},[s._v("#")]),s._v(" 执行查询")]),s._v(" "),t("h2",{attrs:{id:"查看zipkin-ui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看zipkin-ui"}},[s._v("#")]),s._v(" 查看zipkin UI")]),s._v(" "),t("p",[s._v("浏览器打开"),t("code",[s._v("http://127.0.0.1:9411/zipkin/")]),s._v(" 可查看查询链路。")])])}),[],!1,null,null,null);a.default=n.exports}}]);