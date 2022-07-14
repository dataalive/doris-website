(window.webpackJsonp=window.webpackJsonp||[]).push([[1803],{2431:function(e,a,t){"use strict";t.r(a);var n=t(15),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"colocation-join"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#colocation-join"}},[e._v("#")]),e._v(" Colocation Join")]),e._v(" "),t("p",[e._v("Colocation Join is a new feature introduced in Doris 0.9. The purpose of this paper is to provide local optimization for some Join queries to reduce data transmission time between nodes and speed up queries.")]),e._v(" "),t("p",[e._v("The original design, implementation and effect can be referred to "),t("a",{attrs:{href:"https://github.com/apache/incubator-doris/issues/245",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISSUE 245"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("The Colocation Join function has undergone a revision, and its design and use are slightly different from the original design. This document mainly introduces Colocation Join's principle, implementation, usage and precautions.")]),e._v(" "),t("h2",{attrs:{id:"noun-interpretation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#noun-interpretation"}},[e._v("#")]),e._v(" Noun Interpretation")]),e._v(" "),t("ul",[t("li",[e._v("FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access.")]),e._v(" "),t("li",[e._v("BE: Backend, Doris's back-end node. Responsible for query execution and data storage.")]),e._v(" "),t("li",[e._v("Colocation Group (CG): A CG contains one or more tables. Tables within the same group have the same Colocation Group Schema and the same data fragmentation distribution.")]),e._v(" "),t("li",[e._v("Colocation Group Schema (CGS): Used to describe table in a CG and general Schema information related to Colocation. Including bucket column type, bucket number and copy number.")])]),e._v(" "),t("h2",{attrs:{id:"principle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#principle"}},[e._v("#")]),e._v(" Principle")]),e._v(" "),t("p",[e._v("The Colocation Join function is to make a CG of a set of tables with the same CGS. Ensure that the corresponding data fragments of these tables will fall on the same BE node. When tables in CG perform Join operations on bucket columns, local data Join can be directly performed to reduce data transmission time between nodes.")]),e._v(" "),t("p",[e._v("The data of a table will eventually fall into a barrel according to the barrel column value Hash and the number of barrels modeled. Assuming that the number of buckets in a table is 8, there are eight buckets "),t("code",[e._v("[0, 1, 2, 3, 4, 5, 6, 7]")]),e._v("Buckets'. We call such a sequence a "),t("code",[e._v("Buckets Sequence")]),e._v(". Each Bucket has one or more Tablets. When a table is a single partitioned table, there is only one Tablet in a Bucket. If it is a multi-partition table, there will be more than one.")]),e._v(" "),t("p",[e._v("In order for a table to have the same data distribution, the table in the same CG must ensure the following attributes are the same:")]),e._v(" "),t("ol",[t("li",[e._v("Barrel row and number of barrels")])]),e._v(" "),t("p",[e._v("Bucket column, that is, the column specified in `DISTRIBUTED BY HASH (col1, col2,...)'in the table building statement. Bucket columns determine which column values are used to Hash data from a table into different Tablets. Tables in the same CG must ensure that the type and number of barrel columns are identical, and the number of barrels is identical, so that the data fragmentation of multiple tables can be controlled one by one.")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Number of copies")])]),e._v(" "),t("p",[e._v("The number of copies of all partitions of all tables in the same CG must be the same. If inconsistent, there may be a copy of a Tablet, and there is no corresponding copy of other table fragments on the same BE.")]),e._v(" "),t("p",[e._v("Tables in the same CG do not require consistency in the number, scope, and type of partition columns.")]),e._v(" "),t("p",[e._v("After fixing the number of bucket columns and buckets, the tables in the same CG will have the same Buckets Sequence. The number of replicas determines the number of replicas of Tablets in each bucket, which BE they are stored on. Suppose that Buckets Sequence is "),t("code",[e._v("[0, 1, 2, 3, 4, 5, 6, 7]")]),e._v(", and that BE nodes have "),t("code",[e._v("[A, B, C, D]")]),e._v("4. A possible distribution of data is as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+\n| 0 | | 1 | | 2 | | 3 | | 4 | | 5 | | 6 | | 7 |\n+---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+\n| A | | B | | C | | D | | A | | B | | C | | D |\n|   | |   | |   | |   | |   | |   | |   | |   |\n| B | | C | | D | | A | | B | | C | | D | | A |\n|   | |   | |   | |   | |   | |   | |   | |   |\n| C | | D | | A | | B | | C | | D | | A | | B |\n+---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("p",[e._v("The data of all tables in CG will be uniformly distributed according to the above rules, which ensures that the data with the same barrel column value are on the same BE node, and local data Join can be carried out.")]),e._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("h3",{attrs:{id:"establishment-of-tables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#establishment-of-tables"}},[e._v("#")]),e._v(" Establishment of tables")]),e._v(" "),t("p",[e._v("When creating a table, you can specify the attribute "),t("code",[e._v('"colocate_with"="group_name"')]),e._v(" in "),t("code",[e._v("PROPERTIES")]),e._v(", which means that the table is a Colocation Join table and belongs to a specified Colocation Group.")]),e._v(" "),t("p",[e._v("Examples:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('CREATE TABLE tbl (k1 int, v1 int sum)\nDISTRIBUTED BY HASH(k1)\nBUCKETS 8\nPROPERTIES(\n  "colocate_with" = "group1"\n);\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("If the specified group does not exist, Doris automatically creates a group that contains only the current table. If the Group already exists, Doris checks whether the current table satisfies the Colocation Group Schema. If satisfied, the table is created and added to the Group. At the same time, tables create fragments and replicas based on existing data distribution rules in Groups.\nGroup belongs to a database, and its name is unique in a database. Internal storage is the full name of Group "),t("code",[e._v("dbId_groupName")]),e._v(", but users only perceive groupName.")]),e._v(" "),t("h3",{attrs:{id:"delete-table"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-table"}},[e._v("#")]),e._v(" Delete table")]),e._v(" "),t("p",[e._v("When the last table in Group is deleted completely (deleting completely means deleting from the recycle bin). Usually, when a table is deleted by the "),t("code",[e._v("DROP TABLE")]),e._v(" command, it will be deleted after the default one-day stay in the recycle bin, and the group will be deleted automatically.")]),e._v(" "),t("h3",{attrs:{id:"view-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-group"}},[e._v("#")]),e._v(" View Group")]),e._v(" "),t("p",[e._v("The following command allows you to view the existing Group information in the cluster.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SHOW PROC '/colocation_group';\n\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| GroupId     | GroupName    | TableIds     | BucketsNum | ReplicationNum | DistCols | IsStable |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| 10005.10008 | 10005_group1 | 10007, 10040 | 10         | 3              | int(11)  | true     |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("ul",[t("li",[e._v("GroupId: The unique identity of a group's entire cluster, with DB ID in the first half and group ID in the second half.")]),e._v(" "),t("li",[e._v("GroupName: The full name of Group.")]),e._v(" "),t("li",[e._v("Tablet Ids: The group contains a list of Tables'ID.")]),e._v(" "),t("li",[e._v("Buckets Num: Number of barrels.")]),e._v(" "),t("li",[e._v("Replication Num: Number of copies.")]),e._v(" "),t("li",[e._v("DistCols: Distribution columns,")]),e._v(" "),t("li",[e._v("IsStable: Is the group stable (for the definition of stability, see section `Collocation replica balancing and repair').")])]),e._v(" "),t("p",[e._v("You can further view the data distribution of a group by following commands:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SHOW PROC '/colocation_group/10005.10008';\n\n+-------------+---------------------+\n| BucketIndex | BackendIds          |\n+-------------+---------------------+\n| 0           | 10004, 10002, 10001 |\n| 1           | 10003, 10002, 10004 |\n| 2           | 10002, 10004, 10001 |\n| 3           | 10003, 10002, 10004 |\n| 4           | 10002, 10004, 10003 |\n| 5           | 10003, 10002, 10001 |\n| 6           | 10003, 10004, 10001 |\n| 7           | 10003, 10004, 10002 |\n+-------------+---------------------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br")])]),t("ul",[t("li",[e._v("BucketIndex: Subscript to the bucket sequence.")]),e._v(" "),t("li",[e._v("Backend Ids: A list of BE node IDs where data fragments are located in buckets.")])]),e._v(" "),t("blockquote",[t("p",[e._v("The above commands require ADMIN privileges. Normal user view is not supported at this time.")])]),e._v(" "),t("h3",{attrs:{id:"modify-colocate-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modify-colocate-group"}},[e._v("#")]),e._v(" Modify Colocate Group")]),e._v(" "),t("p",[e._v("You can modify the Colocation Group property of a table that has been created. Examples:")]),e._v(" "),t("p",[t("code",[e._v('ALTER TABLE tbl SET ("colocate_with" = "group2");')])]),e._v(" "),t("ul",[t("li",[e._v("If the table has not previously specified a Group, the command checks the Schema and adds the table to the Group (if the Group does not exist, it will be created).")]),e._v(" "),t("li",[e._v("If other groups are specified before the table, the command first removes the table from the original group and adds a new group (if the group does not exist, it will be created).")])]),e._v(" "),t("p",[e._v("You can also delete the Colocation attribute of a table by following commands:")]),e._v(" "),t("p",[t("code",[e._v('ALTER TABLE tbl SET ("colocate_with" = "");')])]),e._v(" "),t("h3",{attrs:{id:"other-related-operations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-related-operations"}},[e._v("#")]),e._v(" Other related operations")]),e._v(" "),t("p",[e._v("When an ADD PARTITION is added to a table with a Colocation attribute and the number of copies is modified, Doris checks whether the modification violates the Colocation Group Schema and rejects it if it does.")]),e._v(" "),t("h2",{attrs:{id:"colocation-duplicate-balancing-and-repair"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#colocation-duplicate-balancing-and-repair"}},[e._v("#")]),e._v(" Colocation Duplicate Balancing and Repair")]),e._v(" "),t("p",[e._v("Copy distribution of Colocation tables needs to follow the distribution specified in Group, so it is different from common fragmentation in replica repair and balancing.")]),e._v(" "),t("p",[e._v("Group itself has a Stable attribute, when Stable is true, which indicates that all fragments of the table in the current Group are not changing, and the Colocation feature can be used normally. When Stable is false, it indicates that some tables in Group are being repaired or migrated. At this time, Colocation Join of related tables will degenerate into ordinary Join.")]),e._v(" "),t("h3",{attrs:{id:"replica-repair"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replica-repair"}},[e._v("#")]),e._v(" Replica Repair")]),e._v(" "),t("p",[e._v("Copies can only be stored on specified BE nodes. So when a BE is unavailable (downtime, Decommission, etc.), a new BE is needed to replace it. Doris will first look for the BE with the lowest load to replace it. After replacement, all data fragments on the old BE in the Bucket will be repaired. During the migration process, Group is marked Unstable.")]),e._v(" "),t("h3",{attrs:{id:"duplicate-equilibrium"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#duplicate-equilibrium"}},[e._v("#")]),e._v(" Duplicate Equilibrium")]),e._v(" "),t("p",[e._v("Doris will try to distribute the fragments of the Collocation table evenly across all BE nodes. For the replica balancing of common tables, the granularity is single replica, that is to say, it is enough to find BE nodes with lower load for each replica alone. The equilibrium of the Colocation table is at the Bucket level, where all replicas within a Bucket migrate together. We adopt a simple equalization algorithm, which distributes Buckets Sequence evenly on all BEs, regardless of the actual size of the replicas, but only according to the number of replicas. Specific algorithms can be referred to the code annotations in "),t("code",[e._v("ColocateTableBalancer.java")]),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("Note 1: Current Colocation replica balancing and repair algorithms may not work well for heterogeneous deployed Oris clusters. The so-called heterogeneous deployment, that is, the BE node's disk capacity, number, disk type (SSD and HDD) is inconsistent. In the case of heterogeneous deployment, small BE nodes and large BE nodes may store the same number of replicas.")]),e._v(" "),t("p",[e._v("Note 2: When a group is in an Unstable state, the Join of the table in it will degenerate into a normal Join. At this time, the query performance of the cluster may be greatly reduced. If you do not want the system to balance automatically, you can set the FE configuration item "),t("code",[e._v("disable_colocate_balance")]),e._v(" to prohibit automatic balancing. Then open it at the right time. (See Section "),t("code",[e._v("Advanced Operations")]),e._v(" for details)")])]),e._v(" "),t("h2",{attrs:{id:"query"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[e._v("#")]),e._v(" Query")]),e._v(" "),t("p",[e._v("The Colocation table is queried in the same way as ordinary tables, and users do not need to perceive Colocation attributes. If the Group in which the Colocation table is located is in an Unstable state, it will automatically degenerate to a normal Join.")]),e._v(" "),t("p",[e._v("Examples are given to illustrate:")]),e._v(" "),t("p",[e._v("Table 1:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('CREATE TABLE `tbl1` (\n    `k1` date NOT NULL COMMENT "",\n    `k2` int(11) NOT NULL COMMENT "",\n    `v1` int(11) SUM NOT NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`k1`, `k2`)\nPARTITION BY RANGE(`k1`)\n(\n    PARTITION p1 VALUES LESS THAN (\'2019-05-31\'),\n    PARTITION p2 VALUES LESS THAN (\'2019-06-30\')\n)\nDISTRIBUTED BY HASH(`k2`) BUCKETS 8\nPROPERTIES (\n    "colocate_with" = "group1"\n);\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br")])]),t("p",[e._v("Table 2:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('CREATE TABLE `tbl2` (\n    `k1` datetime NOT NULL COMMENT "",\n    `k2` int(11) NOT NULL COMMENT "",\n    `v1` double SUM NOT NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`k1`, `k2`)\nDISTRIBUTED BY HASH(`k2`) BUCKETS 8\nPROPERTIES (\n    "colocate_with" = "group1"\n);\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])]),t("p",[e._v("View the query plan:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("DESC SELECT * FROM tbl1 INNER JOIN tbl2 ON (tbl1.k2 = tbl2.k2);\n\n+----------------------------------------------------+\n| Explain String                                     |\n+----------------------------------------------------+\n| PLAN FRAGMENT 0                                    |\n|  OUTPUT EXPRS:`tbl1`.`k1` |                        |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   RESULT SINK                                      |\n|                                                    |\n|   2:HASH JOIN                                      |\n|   |  join op: INNER JOIN                           |\n|   |  hash predicates:                              |\n|   |  colocate: true                                |\n|   |    `tbl1`.`k2` = `tbl2`.`k2`                   |\n|   |  tuple ids: 0 1                                |\n|   |                                                |\n|   |----1:OlapScanNode                              |\n|   |       TABLE: tbl2                              |\n|   |       PREAGGREGATION: OFF. Reason: null        |\n|   |       partitions=0/1                           |\n|   |       rollup: null                             |\n|   |       buckets=0/0                              |\n|   |       cardinality=-1                           |\n|   |       avgRowSize=0.0                           |\n|   |       numNodes=0                               |\n|   |       tuple ids: 1                             |\n|   |                                                |\n|   0:OlapScanNode                                   |\n|      TABLE: tbl1                                   |\n|      PREAGGREGATION: OFF. Reason: No AggregateInfo |\n|      partitions=0/2                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 0                                  |\n+----------------------------------------------------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br"),t("span",{staticClass:"line-number"},[e._v("35")]),t("br"),t("span",{staticClass:"line-number"},[e._v("36")]),t("br"),t("span",{staticClass:"line-number"},[e._v("37")]),t("br"),t("span",{staticClass:"line-number"},[e._v("38")]),t("br"),t("span",{staticClass:"line-number"},[e._v("39")]),t("br"),t("span",{staticClass:"line-number"},[e._v("40")]),t("br")])]),t("p",[e._v("If Colocation Join works, the Hash Join Node will show "),t("code",[e._v("colocate: true")]),e._v(".")]),e._v(" "),t("p",[e._v("If not, the query plan is as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+----------------------------------------------------+\n| Explain String                                     |\n+----------------------------------------------------+\n| PLAN FRAGMENT 0                                    |\n|  OUTPUT EXPRS:`tbl1`.`k1` |                        |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   RESULT SINK                                      |\n|                                                    |\n|   2:HASH JOIN                                      |\n|   |  join op: INNER JOIN (BROADCAST)               |\n|   |  hash predicates:                              |\n|   |  colocate: false, reason: group is not stable  |\n|   |    `tbl1`.`k2` = `tbl2`.`k2`                   |\n|   |  tuple ids: 0 1                                |\n|   |                                                |\n|   |----3:EXCHANGE                                  |\n|   |       tuple ids: 1                             |\n|   |                                                |\n|   0:OlapScanNode                                   |\n|      TABLE: tbl1                                   |\n|      PREAGGREGATION: OFF. Reason: No AggregateInfo |\n|      partitions=0/2                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 0                                  |\n|                                                    |\n| PLAN FRAGMENT 1                                    |\n|  OUTPUT EXPRS:                                     |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   STREAM DATA SINK                                 |\n|     EXCHANGE ID: 03                                |\n|     UNPARTITIONED                                  |\n|                                                    |\n|   1:OlapScanNode                                   |\n|      TABLE: tbl2                                   |\n|      PREAGGREGATION: OFF. Reason: null             |\n|      partitions=0/1                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 1                                  |\n+----------------------------------------------------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br"),t("span",{staticClass:"line-number"},[e._v("35")]),t("br"),t("span",{staticClass:"line-number"},[e._v("36")]),t("br"),t("span",{staticClass:"line-number"},[e._v("37")]),t("br"),t("span",{staticClass:"line-number"},[e._v("38")]),t("br"),t("span",{staticClass:"line-number"},[e._v("39")]),t("br"),t("span",{staticClass:"line-number"},[e._v("40")]),t("br"),t("span",{staticClass:"line-number"},[e._v("41")]),t("br"),t("span",{staticClass:"line-number"},[e._v("42")]),t("br"),t("span",{staticClass:"line-number"},[e._v("43")]),t("br"),t("span",{staticClass:"line-number"},[e._v("44")]),t("br"),t("span",{staticClass:"line-number"},[e._v("45")]),t("br"),t("span",{staticClass:"line-number"},[e._v("46")]),t("br"),t("span",{staticClass:"line-number"},[e._v("47")]),t("br"),t("span",{staticClass:"line-number"},[e._v("48")]),t("br"),t("span",{staticClass:"line-number"},[e._v("49")]),t("br")])]),t("p",[e._v("The HASH JOIN node displays the corresponding reason: "),t("code",[e._v("colocate: false, reason: group is not stable")]),e._v(". At the same time, an EXCHANGE node will be generated.")]),e._v(" "),t("h2",{attrs:{id:"advanced-operations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#advanced-operations"}},[e._v("#")]),e._v(" Advanced Operations")]),e._v(" "),t("h3",{attrs:{id:"fe-configuration-item"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fe-configuration-item"}},[e._v("#")]),e._v(" FE Configuration Item")]),e._v(" "),t("ul",[t("li",[e._v("disable_colocate_relocate")])]),e._v(" "),t("p",[e._v("Whether to close Doris's automatic Colocation replica repair. The default is false, i.e. not closed. This parameter only affects the replica repair of the Colocation table, but does not affect the normal table.")]),e._v(" "),t("ul",[t("li",[e._v("disable_colocate_balance")])]),e._v(" "),t("p",[e._v("Whether to turn off automatic Colocation replica balancing for Doris. The default is false, i.e. not closed. This parameter only affects the replica balance of the Collocation table, but does not affect the common table.")]),e._v(" "),t("p",[e._v("User can set these configurations at runtime. See "),t("code",[e._v("HELP ADMIN SHOW CONFIG;")]),e._v(" and "),t("code",[e._v("HELP ADMIN SET CONFIG;")]),e._v(".")]),e._v(" "),t("ul",[t("li",[e._v("disable_colocate_join")])]),e._v(" "),t("p",[e._v("Whether to turn off the Colocation Join function or not. In 0.10 and previous versions, the default is true, that is, closed. In a later version, it will default to false, that is, open.")]),e._v(" "),t("ul",[t("li",[e._v("use_new_tablet_scheduler")])]),e._v(" "),t("p",[e._v("In 0.10 and previous versions, the new replica scheduling logic is incompatible with the Colocation Join function, so in 0.10 and previous versions, if "),t("code",[e._v("disable_colocate_join = false")]),e._v(", you need to set "),t("code",[e._v("use_new_tablet_scheduler = false")]),e._v(", that is, close the new replica scheduler. In later versions, "),t("code",[e._v("use_new_tablet_scheduler")]),e._v(" will be equal to true.")]),e._v(" "),t("p",[e._v("###HTTP Restful API")]),e._v(" "),t("p",[e._v("Doris provides several HTTP Restful APIs related to Colocation Join for viewing and modifying Colocation Group.")]),e._v(" "),t("p",[e._v("The API is implemented on the FE side and accessed using "),t("code",[e._v("fe_host: fe_http_port")]),e._v(". ADMIN privileges are required.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("View all Colocation information for the cluster")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('GET /api/colocate\n\nReturn the internal Colocation info in JSON format:\n\n{\n    "msg": "success",\n  "code": 0,\n  "data": {\n    "infos": [\n      ["10003.12002", "10003_group1", "10037, 10043", "1", "1", "int(11)", "true"]\n    ],\n    "unstableGroupIds": [],\n    "allGroupIds": [{\n      "dbId": 10003,\n      "grpId": 12002\n    }]\n  },\n  "count": 0 \n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Mark Group as Stable or Unstable")])])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Mark as Stable")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("```\nPOST /api/colocate/group_stable?db_id=10005&group_id=10008\n\nReturns: 200\n```\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Mark as Unstable")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("```\nDELETE /api/colocate/group_stable?db_id=10005&group_id=10008\n\nReturns: 200\n```\n")])])])])]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Setting Data Distribution for Group")])]),e._v(" "),t("p",[e._v("The interface can force the number distribution of a group.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("```\nPOST /api/colocate/bucketseq?db_id=10005&group_id=10008\n\nBody:\n[[10004,10002],[10003,10002],[10002,10004],[10003,10002],[10002,10004],[10003,10002],[10003,10004],[10003,10004],[10003,10004],[10002,10004]]\n\nReturns: 200\n```\n")])])]),t("p",[e._v("Body is a Buckets Sequence represented by a nested array and the ID of the BE where the fragments are distributed in each Bucket.")]),e._v(" "),t("p",[e._v("Note that using this command, you may need to set the FE configuration "),t("code",[e._v("disable_colocate_relocate")]),e._v(" and "),t("code",[e._v("disable_colocate_balance")]),e._v(" to true. That is to shut down the system for automatic Colocation replica repair and balancing. Otherwise, it may be automatically reset by the system after modification.")])])}),[],!1,null,null,null);a.default=s.exports}}]);