(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{700:function(e,t,a){"use strict";a.r(t);var s=a(15),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"user-configuration-item"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-configuration-item"}},[e._v("#")]),e._v(" User configuration item")]),e._v(" "),a("p",[e._v("This document mainly introduces related configuration items at the User level. The configuration of the User level is mainly effective for a single user. Each user can set their own User property. Does not affect each other.")]),e._v(" "),a("h2",{attrs:{id:"view-configuration-items"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-configuration-items"}},[e._v("#")]),e._v(" View configuration items")]),e._v(" "),a("p",[e._v("After the FE is started, on the MySQL client, use the following command to view the User configuration items:")]),e._v(" "),a("p",[a("code",[e._v("SHOW PROPERTY [FOR user] [LIKE key pattern]")])]),e._v(" "),a("p",[e._v("The specific syntax can be queried through the command: "),a("code",[e._v("help show property;")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"set-configuration-items"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-configuration-items"}},[e._v("#")]),e._v(" Set configuration items")]),e._v(" "),a("p",[e._v("After FE is started, on the MySQL client, modify the User configuration items with the following command:")]),e._v(" "),a("p",[a("code",[e._v("SET PROPERTY [FOR'user'] 'key' = 'value' [,'key' ='value']")])]),e._v(" "),a("p",[e._v("The specific syntax can be queried through the command: "),a("code",[e._v("help set property;")]),e._v(".")]),e._v(" "),a("p",[e._v("User-level configuration items will only take effect for the specified users, and will not affect the configuration of other users.")]),e._v(" "),a("h2",{attrs:{id:"application-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-examples"}},[e._v("#")]),e._v(" Application examples")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Modify the max_user_connections of user Billie")]),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("SHOW PROPERTY FOR 'Billie' LIKE '%max_user_connections%';")]),e._v(" to check that the current maximum number of links for Billie users is 100.")]),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("SET PROPERTY FOR 'Billie' 'max_user_connections' = '200';")]),e._v(" to modify the current maximum number of connections for Billie users to 200.")])])]),e._v(" "),a("h2",{attrs:{id:"configuration-item-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-item-list"}},[e._v("#")]),e._v(" Configuration item list")]),e._v(" "),a("h3",{attrs:{id:"max-user-connections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#max-user-connections"}},[e._v("#")]),e._v(" max_user_connections")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("The maximum number of user connections, the default value is 100 In general, this parameter does not need to be changed unless the number of concurrent queries exceeds the default value.\n")])])]),a("h3",{attrs:{id:"max-query-instances"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#max-query-instances"}},[e._v("#")]),e._v(" max_query_instances")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("The maximum number of instances that the user can use at a certain point in time, The default value is -1, negative number means use default_max_query_instances config.\n")])])]),a("h3",{attrs:{id:"resource"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resource"}},[e._v("#")]),e._v(" resource")]),e._v(" "),a("h3",{attrs:{id:"quota"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quota"}},[e._v("#")]),e._v(" quota")]),e._v(" "),a("h3",{attrs:{id:"default-load-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-load-cluster"}},[e._v("#")]),e._v(" default_load_cluster")]),e._v(" "),a("h3",{attrs:{id:"load-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-cluster"}},[e._v("#")]),e._v(" load_cluster")])])}),[],!1,null,null,null);t.default=r.exports}}]);