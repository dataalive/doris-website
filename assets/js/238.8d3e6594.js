(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{863:function(a,e,t){"use strict";t.r(e);var s=t(15),i=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"bitmap-union"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-union"}},[a._v("#")]),a._v(" BITMAP_UNION")]),a._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),t("h4",{attrs:{id:"create-table"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-table"}},[a._v("#")]),a._v(" Create table")]),a._v(" "),t("p",[a._v("The aggregation model needs to be used when creating the table. The data type is bitmap and the aggregation function is bitmap_union.")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('CREATE TABLE `pv_bitmap` (\n  `dt` int (11) NULL COMMENT" ",\n  `page` varchar (10) NULL COMMENT" ",\n  `user_id` bitmap BITMAP_UNION NULL COMMENT" "\n) ENGINE = OLAP\nAGGREGATE KEY (`dt`,` page`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH (`dt`) BUCKETS 2;\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("p",[a._v("Note: When the amount of data is large, it is best to create a corresponding rollup table for high-frequency bitmap_union queries")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ALTER TABLE pv_bitmap ADD ROLLUP pv (page, user_id);\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"data-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-load"}},[a._v("#")]),a._v(" Data Load")]),a._v(" "),t("p",[t("code",[a._v("TO_BITMAP (expr)")]),a._v(": Convert 0 ~ 18446744073709551615 unsigned bigint to bitmap")]),a._v(" "),t("p",[t("code",[a._v("BITMAP_EMPTY ()")]),a._v(": Generate empty bitmap columns, used for insert or import to fill the default value")]),a._v(" "),t("p",[t("code",[a._v("BITMAP_HASH (expr)")]),a._v(": Convert any type of column to a bitmap by hashing")]),a._v(" "),t("h5",{attrs:{id:"stream-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stream-load"}},[a._v("#")]),a._v(" Stream Load")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('cat data | curl --location-trusted -u user: passwd -T--H "columns: dt, page, user_id, user_id = to_bitmap (user_id)" http: // host: 8410 / api / test / testDb / _stream_load\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('cat data | curl --location-trusted -u user: passwd -T--H "columns: dt, page, user_id, user_id = bitmap_hash (user_id)" http: // host: 8410 / api / test / testDb / _stream_load\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('cat data | curl --location-trusted -u user: passwd -T--H "columns: dt, page, user_id, user_id = bitmap_empty ()" http: // host: 8410 / api / test / testDb / _stream_load\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h5",{attrs:{id:"insert-into"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#insert-into"}},[a._v("#")]),a._v(" Insert Into")]),a._v(" "),t("p",[a._v("id2's column type is bitmap")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("insert into bitmap_table1 select id, id2 from bitmap_table2;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("id2's column type is bitmap")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("INSERT INTO bitmap_table1 (id, id2) VALUES (1001, to_bitmap (1000)), (1001, to_bitmap (2000));\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("id2's column type is bitmap")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("insert into bitmap_table1 select id, bitmap_union (id2) from bitmap_table2 group by id;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("id2's column type is int")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("insert into bitmap_table1 select id, to_bitmap (id2) from table;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("id2's column type is String")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("insert into bitmap_table1 select id, bitmap_hash (id_string) from table;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"data-query"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-query"}},[a._v("#")]),a._v(" Data Query")]),a._v(" "),t("h5",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),t("p",[t("code",[a._v("BITMAP_UNION (expr)")]),a._v(": Calculate the union of two Bitmaps. The return value is the new Bitmap value.")]),a._v(" "),t("p",[t("code",[a._v("BITMAP_UNION_COUNT (expr)")]),a._v(": Calculate the cardinality of the union of two Bitmaps, equivalent to BITMAP_COUNT (BITMAP_UNION (expr)). It is recommended to use the BITMAP_UNION_COUNT function first, its performance is better than BITMAP_COUNT (BITMAP_UNION (expr)).")]),a._v(" "),t("p",[t("code",[a._v("BITMAP_UNION_INT (expr)")]),a._v(": Count the number of different values ​​in columns of type TINYINT, SMALLINT and INT, return the sum of COUNT (DISTINCT expr) same")]),a._v(" "),t("p",[t("code",[a._v("INTERSECT_COUNT (bitmap_column_to_count, filter_column, filter_values ​​...)")]),a._v(": The calculation satisfies\nfilter_column The cardinality of the intersection of multiple bitmaps of the filter.\nbitmap_column_to_count is a column of type bitmap, filter_column is a column of varying dimensions, and filter_values ​​is a list of dimension values.")]),a._v(" "),t("h5",{attrs:{id:"example-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[a._v("#")]),a._v(" Example")]),a._v(" "),t("p",[a._v("The following SQL uses the pv_bitmap table above as an example:")]),a._v(" "),t("p",[a._v("Calculate the deduplication value for user_id:")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("select bitmap_union_count (user_id) from pv_bitmap;\n\nselect bitmap_count (bitmap_union (user_id)) from pv_bitmap;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("Calculate the deduplication value of id:")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("select bitmap_union_int (id) from pv_bitmap;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("Calculate the retention of user_id:")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("select intersect_count (user_id, page, 'meituan') as meituan_uv,\nintersect_count (user_id, page, 'waimai') as waimai_uv,\nintersect_count (user_id, page, 'meituan', 'waimai') as retention // Number of users appearing on both 'meituan' and 'waimai' pages\nfrom pv_bitmap\nwhere page in ('meituan', 'waimai');\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[a._v("#")]),a._v(" keywords")]),a._v(" "),t("p",[a._v("BITMAP, BITMAP_COUNT, BITMAP_EMPTY, BITMAP_UNION, BITMAP_UNION_INT, TO_BITMAP, BITMAP_UNION_COUNT, INTERSECT_COUNT")])])}),[],!1,null,null,null);e.default=i.exports}}]);