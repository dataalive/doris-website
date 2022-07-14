(window.webpackJsonp=window.webpackJsonp||[]).push([[3477],{4107:function(e,s,a){"use strict";a.r(s);var t=a(15),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"向量化执行引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#向量化执行引擎"}},[e._v("#")]),e._v(" 向量化执行引擎")]),e._v(" "),a("p",[e._v("向量化执行引擎 是 Doris 当前版本加入的实验性功能。目标是为了替换当前Doris的行式的SQL执行引擎，充分释放现代CPU的计算能力，突破Doris在SQL执行引擎上的性能短板。")]),e._v(" "),a("p",[e._v("它的具体设计、实现和效果可以参阅 "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/issues/6238",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISSUE 6238"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[e._v("#")]),e._v(" 原理")]),e._v(" "),a("p",[e._v("当前的Doris的SQL执行引擎是基于行式内存格式，基于传统的火山模型进行设计，在进行SQL算子与函数运算的时候存在大量的非必要的开销：")]),e._v(" "),a("ol",[a("li",[e._v("类型丢失导致的虚函数的调用，函数无法进行内联优化")]),e._v(" "),a("li",[e._v("Cache亲和度差，代码和数据Cache的局部性原理无法得到充分利用")]),e._v(" "),a("li",[e._v("无法利用现代CPU的向量化能力将计算SIMD化")]),e._v(" "),a("li",[e._v("CPU的分支预测，预取内存不友好")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/vectorized-execution-engine1.png"),alt:"image.png"}}),e._v(" "),a("p",[e._v("由此带来的一系列开销导致当前Doris执行引擎效率低下，并不适应现代CPU的体系结构。")]),e._v(" "),a("p",[e._v("而如下图所示（引用自"),a("a",{attrs:{href:"https://web.stanford.edu/class/cs346/2015/notes/old/column.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Column-Oriented\nDatabase Systems"),a("OutboundLink")],1),e._v("），向量化执行引擎基于现代CPU的特点与火山模型的执行特点，重新设计列式存储系统的SQL执行引擎：")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/vectorized-execution-engine2.png"),alt:"image.png"}}),e._v(" "),a("ol",[a("li",[e._v("重新组织内存的数据结构，用"),a("strong",[e._v("Column")]),e._v("替换"),a("strong",[e._v("Tuple")]),e._v("，提高了计算时Cache亲和度，分支预测与预取内存的友好度")]),e._v(" "),a("li",[e._v("分批进行类型判断，在本次批次中都使用类型判断时确定的类型。将每一行类型判断的虚函数开销分摊到批量级别。")]),e._v(" "),a("li",[e._v("通过批级别的类型判断，消除了虚函数的调用，让编译器有函数内联以及SIMD优化的机会")])]),e._v(" "),a("p",[e._v("从而大大提高了CPU在SQL执行时的效率，提升了SQL查询的性能。")]),e._v(" "),a("h2",{attrs:{id:"使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[e._v("#")]),e._v(" 使用方式")]),e._v(" "),a("h3",{attrs:{id:"设置session变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置session变量"}},[e._v("#")]),e._v(" 设置Session变量")]),e._v(" "),a("h4",{attrs:{id:"enable-vectorized-engine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-vectorized-engine"}},[e._v("#")]),e._v(" enable_vectorized_engine")]),e._v(" "),a("p",[e._v("将session变量"),a("code",[e._v("enable_vectorized_engine")]),e._v("设置为"),a("code",[e._v("true")]),e._v("，则FE在进行查询规划时就会默认将SQL算子与SQL表达式转换为向量化的执行计划。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("set enable_vectorized_engine = true;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h4",{attrs:{id:"batch-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#batch-size"}},[e._v("#")]),e._v(" batch_size")]),e._v(" "),a("p",[a("code",[e._v("batch_size")]),e._v("代表了SQL算子每次进行批量计算的行数。Doris默认的配置为"),a("code",[e._v("1024")]),e._v(",这个配置的行数会影响向量化执行引擎的性能与CPU缓存预取的行为。这里推荐配置为"),a("code",[e._v("4096")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("set batch_size = 4096;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"null值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null值"}},[e._v("#")]),e._v(" NULL值")]),e._v(" "),a("p",[e._v("由于NULL值在向量化执行引擎中会导致性能劣化。所以在建表时，将对应的列设置为NULL通常会影响向量化执行引擎的性能。"),a("strong",[e._v("这里推荐使用一些特殊的列值表示NULL值，并在建表时设置列为NOT NULL以充分发挥向量化执行引擎的性能。")])]),e._v(" "),a("h3",{attrs:{id:"查看sql执行的类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看sql执行的类型"}},[e._v("#")]),e._v(" 查看SQL执行的类型")]),e._v(" "),a("p",[e._v("可以通过"),a("code",[e._v("explain")]),e._v("命令来查看当前的SQL是否开启了向量化执行引擎：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+-----------------------------+\n| Explain String              |\n+-----------------------------+\n| PLAN FRAGMENT 0             |\n|  OUTPUT EXPRS:<slot 0> TRUE |\n|   PARTITION: UNPARTITIONED  |\n|                             |\n|   VRESULT SINK              |\n|                             |\n|   0:VUNION                  |\n|      constant exprs:        |\n|          TRUE               |\n+-----------------------------+\n                                       \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br")])]),a("p",[e._v("开启了向量化执行引擎之后，在SQL的执行计划之中会在SQL算子前添加一个"),a("code",[e._v("V")]),e._v("的标识。")]),e._v(" "),a("h2",{attrs:{id:"与行存执行引擎的部分差异"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与行存执行引擎的部分差异"}},[e._v("#")]),e._v(" 与行存执行引擎的部分差异")]),e._v(" "),a("p",[e._v("在绝大多数场景之中，用户只需要默认打开session变量的开关，就可以透明地使用向量化执行引擎，并且使SQL执行的性能得到提升。但是，"),a("strong",[e._v("目前的向量化执行引擎在下面一些微小的细节上与原先的行存执行引擎存在不同，需要使用者知晓")]),e._v("。这部分区别分为两类")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("a类")]),e._v(" ：行存执行引擎需要被废弃和不推荐使用或依赖的功能")]),e._v(" "),a("li",[a("strong",[e._v("b类")]),e._v("： 短期没有在向量化执行引擎上得到支持，但后续会得到开发支持的功能")])]),e._v(" "),a("h4",{attrs:{id:"a类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a类"}},[e._v("#")]),e._v(" a类")]),e._v(" "),a("ol",[a("li",[e._v("Float与Double类型计算可能产生精度误差，仅影响小数点后5位之后的数字。"),a("strong",[e._v("如果对计算精度有特殊要求，请使用Decimal类型")]),e._v("。")]),e._v(" "),a("li",[e._v("DateTime类型不支持秒级别以下的计算或format等各种操作，向量化引擎会直接丢弃秒级别以下毫秒的计算结果。同时也不支持"),a("code",[e._v("microseconds_add")]),e._v("等，对毫秒计算的函数。")]),e._v(" "),a("li",[e._v("有符合类型进行编码时，"),a("code",[e._v("0")]),e._v("与"),a("code",[e._v("-0")]),e._v("在SQL执行中被认为是相等的。这可能会影响"),a("code",[e._v("distinct")]),e._v("，"),a("code",[e._v("group by")]),e._v("等计算的结果。")]),e._v(" "),a("li",[e._v("bitmap/hll 类型在向量化执行引擎中：输入均为NULL，则输出的结果为NULL而不是0。")])]),e._v(" "),a("h4",{attrs:{id:"b类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b类"}},[e._v("#")]),e._v(" b类")]),e._v(" "),a("ol",[a("li",[e._v("不支持原有行存执行引擎的"),a("code",[e._v("UDF")]),e._v("与"),a("code",[e._v("UDAF")]),e._v("。")]),e._v(" "),a("li",[a("code",[e._v("string/text")]),e._v("类型最大长度支持为1MB，而不是默认的2GB。即当开启向量化引擎后，将无法查询或导入大于1MB的字符串。但如果关闭向量化引擎，则依然可以正常查询和导入。")]),e._v(" "),a("li",[e._v("不支持 "),a("code",[e._v("select ... into outfile")]),e._v(" 的导出方式。")]),e._v(" "),a("li",[e._v("不支持extrenal broker外表。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);