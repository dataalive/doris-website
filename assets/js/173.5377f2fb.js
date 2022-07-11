(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{795:function(t,e,a){"use strict";a.r(e);var s=a(15),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"use-mysqldump-data-to-export-table-structure-or-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-mysqldump-data-to-export-table-structure-or-data"}},[t._v("#")]),t._v(" Use mysqldump data to export table structure or data")]),t._v(" "),a("p",[t._v("Doris has supported exporting data or table structures through the "),a("code",[t._v("mysqldump")]),t._v(" tool after version 0.15")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("h3",{attrs:{id:"export"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export"}},[t._v("#")]),t._v(" Export")]),t._v(" "),a("ol",[a("li",[t._v("Export the table1 table in the test database: "),a("code",[t._v("mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test --tables table1")])]),t._v(" "),a("li",[t._v("Export the table1 table structure in the test database: "),a("code",[t._v("mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test --tables table1 --no-data")])]),t._v(" "),a("li",[t._v("Export all tables in the test1, test2 database: "),a("code",[t._v("mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test1 test2")])]),t._v(" "),a("li",[t._v("Export all databases and tables "),a("code",[t._v("mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --all-databases")]),t._v("\nFor more usage parameters, please refer to the manual of "),a("code",[t._v("mysqldump")])])]),t._v(" "),a("h3",{attrs:{id:"import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[t._v("#")]),t._v(" Import")]),t._v(" "),a("p",[t._v("The results exported by "),a("code",[t._v("mysqldump")]),t._v(" can be redirected to a file, which can then be imported into Doris through the source command "),a("code",[t._v("source filename.sql")])]),t._v(" "),a("h2",{attrs:{id:"notice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[t._v("#")]),t._v(" Notice")]),t._v(" "),a("ol",[a("li",[t._v("Since there is no concept of tablespace in mysql in Doris, add the "),a("code",[t._v("--no-tablespaces")]),t._v(" parameter when using "),a("code",[t._v("mysqldump")])]),t._v(" "),a("li",[t._v("Using mysqldump to export data and table structure is only used for development and testing or when the amount of data is small. Do not use it in a production environment with a large amount of data.")])])])}),[],!1,null,null,null);e.default=o.exports}}]);