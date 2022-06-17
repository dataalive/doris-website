(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{768:function(e,t,n){"use strict";n.r(t);var a=n(15),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"statistics-of-query-execution"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#statistics-of-query-execution"}},[e._v("#")]),e._v(" Statistics of query execution")]),e._v(" "),n("p",[e._v("This document focuses on introducing the "),n("strong",[e._v("Running Profile")]),e._v(" which recorded runtime status of Doris in query execution. Using these statistical information, we can understand the execution of frgment to become a expert of Doris's "),n("strong",[e._v("debugging and tuning")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"noun-interpretation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#noun-interpretation"}},[e._v("#")]),e._v(" Noun Interpretation")]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("FE")]),e._v(": Frontend, frontend node of Doris. Responsible for metadata management and request access.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("BE")]),e._v(": Backend, backend node of Doris. Responsible for query execution and data storage.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Fragment")]),e._v(": FE will convert the execution of specific SQL statements into corresponding fragments and distribute them to BE for execution. BE will execute corresponding fragments and gather the result of RunningProfile to send back FE.")])])]),e._v(" "),n("h2",{attrs:{id:"basic-concepts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-concepts"}},[e._v("#")]),e._v(" Basic concepts")]),e._v(" "),n("p",[e._v("FE splits the query plan into fragments and distributes them to BE for task execution. BE records the statistics of "),n("strong",[e._v("Running State")]),e._v(" when executing fragment. BE print the outputs statistics of fragment execution into the log. FE can also collect these statistics recorded by each fragment and print the results on FE's web page.")]),e._v(" "),n("h2",{attrs:{id:"specific-operation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#specific-operation"}},[e._v("#")]),e._v(" Specific operation")]),e._v(" "),n("p",[e._v("Turn on the report switch on FE through MySQL command")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("mysql> set enable_profile=true; \n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("After executing the corresponding SQL statement("),n("code",[e._v("is_report_success")]),e._v(" in old versions), we can see the report information of the corresponding SQL statement on the FE web page like the picture below.\n"),n("img",{attrs:{src:e.$withBase("/images/running_profile.png"),alt:"image.png"}})]),e._v(" "),n("p",[e._v("The latest  "),n("strong",[e._v("100 statements")]),e._v(" executed will be listed here. We can view detailed statistics of RunningProfile.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Query:\n  Summary:\n    Query ID: 9664061c57e84404-85ae111b8ba7e83a\n    Start Time: 2020-05-02 10:34:57\n    End Time: 2020-05-02 10:35:08\n    Total: 10s323ms\n    Query Type: Query\n    Query State: EOF\n    Doris Version: trunk\n    User: root\n    Default Db: default_cluster:test\n    Sql Statement: select max(Bid_Price) from quotes group by Symbol\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br")])]),n("p",[e._v("Here is a detailed list of  "),n("code",[e._v("query ID, execution time, execution statement")]),e._v(" and other summary information. The next step is to print the details of each fragment collected from be.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("   Fragment 0:\n     Instance 9664061c57e84404-85ae111b8ba7e83d (host=TNetworkAddress(hostname:192.168.0.1, port:9060)):(Active: 10s270ms, % non-child: 0.14%)\n        - MemoryLimit: 2.00 GB\n        - BytesReceived: 168.08 KB\n        - PeakUsedReservation: 0.00 \n        - SendersBlockedTimer: 0ns\n        - DeserializeRowBatchTimer: 501.975us\n        - PeakMemoryUsage: 577.04 KB\n        - RowsProduced: 8.322K (8322)\n       EXCHANGE_NODE (id=4):(Active: 10s256ms, % non-child: 99.35%)\n          - ConvertRowBatchTime: 180.171us\n          - PeakMemoryUsage: 0.00 \n          - RowsReturned: 8.322K (8322)\n          - MemoryUsed: 0.00 \n          - RowsReturnedRate: 811\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br")])]),n("p",[e._v("The fragment ID is listed here; "),n("code",[e._v("hostname")]),e._v(" show the be node executing the fragment; "),n("code",[e._v("active: 10s270ms")]),e._v("show the total execution time of the node;  "),n("code",[e._v("non child: 0.14%")]),e._v(" means the execution time of the execution node itself (not including the execution time of child nodes) as a percentage of the total time.")]),e._v(" "),n("p",[n("code",[e._v("PeakMemoryUsage")]),e._v(" indicates the peak memory usage of "),n("code",[e._v("EXCHANGE_NODE")]),e._v("; "),n("code",[e._v("RowsReturned")]),e._v(" indicates the number of rows returned by "),n("code",[e._v("EXCHANGE_NODE")]),e._v("; "),n("code",[e._v("RowsReturnedRate")]),e._v("="),n("code",[e._v("RowsReturned")]),e._v("/"),n("code",[e._v("ActiveTime")]),e._v("; the meaning of these three statistics in other "),n("code",[e._v("NODE")]),e._v(" the same.")]),e._v(" "),n("p",[e._v("Subsequently, the statistics of the child nodes will be printed in turn. "),n("strong",[e._v("here you can distinguish the parent-child relationship by intent")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"profile-statistic-analysis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#profile-statistic-analysis"}},[e._v("#")]),e._v(" Profile statistic analysis")]),e._v(" "),n("p",[e._v("There are many statistical information collected at BE.  so we list the corresponding meanings of profile are below:")]),e._v(" "),n("h4",{attrs:{id:"fragment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fragment"}},[e._v("#")]),e._v(" "),n("code",[e._v("Fragment")])]),e._v(" "),n("ul",[n("li",[e._v("AverageThreadTokens: Number of threads used to execute fragment, excluding the usage of thread pool")]),e._v(" "),n("li",[e._v("PeakReservation: Peak memory used by buffer pool")]),e._v(" "),n("li",[e._v("MemoryLimit: Memory limit at query")]),e._v(" "),n("li",[e._v("PeakMemoryUsage: Peak memory usage of instance")]),e._v(" "),n("li",[e._v("RowsProduced: Number of rows that process")])]),e._v(" "),n("h4",{attrs:{id:"blockmgr"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blockmgr"}},[e._v("#")]),e._v(" "),n("code",[e._v("BlockMgr")])]),e._v(" "),n("ul",[n("li",[e._v("BlocksCreated: Number of Block be created by BlockMgr")]),e._v(" "),n("li",[e._v("BlocksRecycled: Number of Block be recycled by BlockMgr")]),e._v(" "),n("li",[e._v("BytesWritten: How many bytes be writen to spill to disk")]),e._v(" "),n("li",[e._v("MaxBlockSize: Max size of one Block")]),e._v(" "),n("li",[e._v("TotalReadBlockTime: Total time read block from disk")])]),e._v(" "),n("h4",{attrs:{id:"datastreamsender"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#datastreamsender"}},[e._v("#")]),e._v(" "),n("code",[e._v("DataStreamSender")])]),e._v(" "),n("ul",[n("li",[e._v("BytesSent: Total bytes data sent")]),e._v(" "),n("li",[e._v("IgnoreRows: Rows filtered")]),e._v(" "),n("li",[e._v("LocalBytesSent: The amount bytes of local node send to it's self during Exchange")]),e._v(" "),n("li",[e._v("OverallThroughput: Total throughput = BytesSent / Time")]),e._v(" "),n("li",[e._v("SerializeBatchTime: Sending data serialization time")]),e._v(" "),n("li",[e._v("UncompressedRowBatchSize: Size of rowbatch before sending data compression")])]),e._v(" "),n("h4",{attrs:{id:"odbc-table-sink"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#odbc-table-sink"}},[e._v("#")]),e._v(" "),n("code",[e._v("ODBC_TABLE_SINK")])]),e._v(" "),n("ul",[n("li",[e._v("NumSentRows: Total number of rows written to ODBC table")]),e._v(" "),n("li",[e._v("TupleConvertTime: Time consuming of sending data serialization to insert statement")]),e._v(" "),n("li",[e._v("ResultSendTime: Time consuming of writing through ODBC driver")])]),e._v(" "),n("h4",{attrs:{id:"exchange-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#exchange-node"}},[e._v("#")]),e._v(" "),n("code",[e._v("EXCHANGE_NODE")])]),e._v(" "),n("ul",[n("li",[e._v("BytesReceived: Size of bytes received by network")]),e._v(" "),n("li",[e._v("DataArrivalWaitTime: Total waiting time of sender to push data")]),e._v(" "),n("li",[e._v("MergeGetNext: When there is a sort in the lower level node, exchange node will perform a unified merge sort and output an ordered result. This indicator records the total time consumption of merge sorting, including the time consumption of MergeGetNextBatch.")]),e._v(" "),n("li",[e._v("MergeGetNextBatch：It takes time for merge node to get data. If it is single-layer merge sort, the object to get data is network queue. For multi-level merge sorting, the data object is child merger.")]),e._v(" "),n("li",[e._v("ChildMergeGetNext: When there are too many senders in the lower layer to send data, single thread merge will become a performance bottleneck. Doris will start multiple child merge threads to do merge sort in parallel. The sorting time of child merge is recorded, which is the cumulative value of multiple threads.")]),e._v(" "),n("li",[e._v("ChildMergeGetNextBatch: It takes time for child merge to get data，If the time consumption is too large, the bottleneck may be the lower level data sending node.")]),e._v(" "),n("li",[e._v("FirstBatchArrivalWaitTime: The time waiting for the first batch come from sender")]),e._v(" "),n("li",[e._v("DeserializeRowBatchTimer: Time consuming to receive data deserialization")]),e._v(" "),n("li",[e._v("SendersBlockedTotalTimer(*): When the DataStreamRecv's queue buffer is full, wait time of sender")]),e._v(" "),n("li",[e._v("ConvertRowBatchTime: Time taken to transfer received data to RowBatch")]),e._v(" "),n("li",[e._v("RowsReturned: Number of receiving rows")]),e._v(" "),n("li",[e._v("RowsReturnedRate: Rate of rows received")])]),e._v(" "),n("h4",{attrs:{id:"sort-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sort-node"}},[e._v("#")]),e._v(" "),n("code",[e._v("SORT_NODE")])]),e._v(" "),n("ul",[n("li",[e._v("InMemorySortTime: In memory sort time")]),e._v(" "),n("li",[e._v("InitialRunsCreated: Number of initialize sort run")]),e._v(" "),n("li",[e._v("MergeGetNext: Time cost of MergeSort from multiple sort_run to get the next batch (only show spilled disk)")]),e._v(" "),n("li",[e._v("MergeGetNextBatch: Time cost MergeSort one sort_run to get the next batch (only show spilled disk)")]),e._v(" "),n("li",[e._v("SortDataSize: Total sorted data")]),e._v(" "),n("li",[e._v("TotalMergesPerformed: Number of external sort merges")])]),e._v(" "),n("h4",{attrs:{id:"aggregation-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#aggregation-node"}},[e._v("#")]),e._v(" "),n("code",[e._v("AGGREGATION_NODE")])]),e._v(" "),n("ul",[n("li",[e._v("PartitionsCreated: Number of partition split by aggregate")]),e._v(" "),n("li",[e._v("GetResultsTime: Time to get aggregate results from each partition")]),e._v(" "),n("li",[e._v("HTResizeTime: Time spent in resizing hashtable")]),e._v(" "),n("li",[e._v("HTResize: Number of times hashtable resizes")]),e._v(" "),n("li",[e._v("HashBuckets: Number of buckets in hashtable")]),e._v(" "),n("li",[e._v("HashBucketsWithDuplicate: Number of buckets with duplicatenode in hashtable")]),e._v(" "),n("li",[e._v("HashCollisions: Number of hash conflicts generated")]),e._v(" "),n("li",[e._v("HashDuplicateNodes: Number of duplicate nodes with the same buckets in hashtable")]),e._v(" "),n("li",[e._v("HashFailedProbe: Number of failed probe operations")]),e._v(" "),n("li",[e._v("HashFilledBuckets: Number of buckets filled data")]),e._v(" "),n("li",[e._v("HashProbe: Number of hashtable probe")]),e._v(" "),n("li",[e._v("HashTravelLength: The number of steps moved when hashtable queries")])]),e._v(" "),n("h4",{attrs:{id:"hash-join-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hash-join-node"}},[e._v("#")]),e._v(" "),n("code",[e._v("HASH_JOIN_NODE")])]),e._v(" "),n("ul",[n("li",[e._v("ExecOption: The way to construct a HashTable for the right child (synchronous or asynchronous), the right child in Join may be a table or a subquery, the same is true for the left child")]),e._v(" "),n("li",[e._v("BuildBuckets: The number of Buckets in HashTable")]),e._v(" "),n("li",[e._v("BuildRows: the number of rows of HashTable")]),e._v(" "),n("li",[e._v("BuildTime: Time-consuming to construct HashTable")]),e._v(" "),n("li",[e._v("LoadFactor: Load factor of HashTable (ie the number of non-empty buckets)")]),e._v(" "),n("li",[e._v("ProbeRows: Traverse the number of rows of the left child for Hash Probe")]),e._v(" "),n("li",[e._v("ProbeTime: Time consuming to traverse the left child for Hash Probe, excluding the time consuming to call GetNext on the left child RowBatch")]),e._v(" "),n("li",[e._v("PushDownComputeTime: The calculation time of the predicate pushdown condition")]),e._v(" "),n("li",[e._v("PushDownTime: The total time consumed by the predicate push down. When Join, the right child who meets the requirements is converted to the left child's in query")])]),e._v(" "),n("h4",{attrs:{id:"cross-join-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cross-join-node"}},[e._v("#")]),e._v(" "),n("code",[e._v("CROSS_JOIN_NODE")])]),e._v(" "),n("ul",[n("li",[e._v("ExecOption: The way to construct RowBatchList for the right child (synchronous or asynchronous)")]),e._v(" "),n("li",[e._v("BuildRows: The number of rows of RowBatchList (ie the number of rows of the right child)")]),e._v(" "),n("li",[e._v("BuildTime: Time-consuming to construct RowBatchList")]),e._v(" "),n("li",[e._v("LeftChildRows: the number of rows of the left child")]),e._v(" "),n("li",[e._v("LeftChildTime: The time it takes to traverse the left child and find the Cartesian product with the right child, not including the time it takes to call GetNext on the left child RowBatch")])]),e._v(" "),n("h4",{attrs:{id:"union-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#union-node"}},[e._v("#")]),e._v(" "),n("code",[e._v("UNION_NODE")])]),e._v(" "),n("ul",[n("li",[e._v("MaterializeExprsEvaluateTime: When the field types at both ends of the Union are inconsistent, the time spent to evaluates type conversion exprs and materializes the results")])]),e._v(" "),n("h4",{attrs:{id:"analytic-eval-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#analytic-eval-node"}},[e._v("#")]),e._v(" "),n("code",[e._v("ANALYTIC_EVAL_NODE")])]),e._v(" "),n("ul",[n("li",[e._v("EvaluationTime: Analysis function (window function) calculation total time")]),e._v(" "),n("li",[e._v("GetNewBlockTime: It takes time to apply for a new block during initialization. Block saves the cache line window or the entire partition for analysis function calculation")]),e._v(" "),n("li",[e._v("PinTime: the time it takes to apply for a new block later or reread the block written to the disk back to the memory")]),e._v(" "),n("li",[e._v("UnpinTime: the time it takes to flush the data of the block to the disk when the memory pressure of the block that is not in use or the current operator is high")])]),e._v(" "),n("h4",{attrs:{id:"olap-scan-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#olap-scan-node"}},[e._v("#")]),e._v(" "),n("code",[e._v("OLAP_SCAN_NODE")])]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("OLAP_SCAN_NODE")]),e._v(" is responsible for specific data scanning tasks. One "),n("code",[e._v("OLAP_SCAN_NODE")]),e._v(" will generate one or more "),n("code",[e._v("OlapScanner")]),e._v(". Each Scanner thread is responsible for scanning part of the data.")]),e._v(" "),n("p",[e._v("Some or all of the predicate conditions in the query will be pushed to "),n("code",[e._v("OLAP_SCAN_NODE")]),e._v(". Some of these predicate conditions will continue to be pushed down to the storage engine in order to use the storage engine's index for data filtering. The other part will be kept in "),n("code",[e._v("OLAP_SCAN_NODE")]),e._v(" to filter the data returned from the storage engine.")]),e._v(" "),n("p",[e._v("The profile of the "),n("code",[e._v("OLAP_SCAN_NODE")]),e._v(" node is usually used to analyze the efficiency of data scanning. It is divided into three layers: "),n("code",[e._v("OLAP_SCAN_NODE")]),e._v(", "),n("code",[e._v("OlapScanner")]),e._v(", and "),n("code",[e._v("SegmentIterator")]),e._v(" according to the calling relationship.")]),e._v(" "),n("p",[e._v("The profile of a typical "),n("code",[e._v("OLAP_SCAN_NODE")]),e._v(" is as follows. Some indicators will have different meanings depending on the storage format (V1 or V2).")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("OLAP_SCAN_NODE (id=0):(Active: 1.2ms,% non-child: 0.00%)\n  - BytesRead: 265.00 B                 # The amount of data read from the data file. Assuming that 10 32-bit integers are read, the amount of data is 10 * 4B = 40 Bytes. This data only represents the fully expanded size of the data in memory, and does not represent the actual IO size.\n  - NumDiskAccess: 1                    # The number of disks involved in this ScanNode node.\n  - NumScanners: 20                     # The number of Scanners generated by this ScanNode.\n  - PeakMemoryUsage: 0.00               # Peak memory usage during query, not used yet\n  - RowsRead: 7                         # The number of rows returned from the storage engine to the Scanner, excluding the number of rows filtered by the Scanner.\n  - RowsReturned: 7                     # The number of rows returned from ScanNode to the upper node.\n  - RowsReturnedRate: 6.979K /sec       # RowsReturned/ActiveTime\n  - TabletCount: 20                     # The number of Tablets involved in this ScanNode.\n  - TotalReadThroughput: 74.70 KB/sec   # BytesRead divided by the total time spent in this node (from Open to Close). For IO bounded queries, this should be very close to the total throughput of all the disks\n  - ScannerBatchWaitTime: 426.886us     # To count the time the transfer thread waits for the scaner thread to return rowbatch.\n  - ScannerWorkerWaitTime: 17.745us     # To count the time that the scanner thread waits for the available worker threads in the thread pool.\n  OlapScanner:\n    - BlockConvertTime: 8.941us         # The time it takes to convert a vectorized Block into a RowBlock with a row structure. The vectorized Block is VectorizedRowBatch in V1 and RowBlockV2 in V2.\n    - BlockFetchTime: 468.974us         # Rowset Reader gets the time of the Block.\n    - ReaderInitTime: 5.475ms           # The time when OlapScanner initializes Reader. V1 includes the time to form MergeHeap. V2 includes the time to generate various Iterators and read the first group of blocks.\n    - RowsDelFiltered: 0                # Including the number of rows filtered out according to the Delete information in the Tablet, and the number of rows filtered for marked deleted rows under the unique key model.\n    - RowsPushedCondFiltered: 0         # Filter conditions based on the predicates passed down, such as the conditions passed from BuildTable to ProbeTable in Join calculation. This value is not accurate, because if the filtering effect is poor, it will no longer be filtered.\n    - ScanTime: 39.24us                 # The time returned from ScanNode to the upper node.\n    - ShowHintsTime_V1: 0ns             # V2 has no meaning. Read part of the data in V1 to perform ScanRange segmentation.\n    SegmentIterator:\n      - BitmapIndexFilterTimer: 779ns   # Use bitmap index to filter data time-consuming.\n      - BlockLoadTime: 415.925us        # SegmentReader(V1) or SegmentIterator(V2) gets the time of the block.\n      - BlockSeekCount: 12              # The number of block seeks when reading Segment.\n      - BlockSeekTime: 222.556us        # It takes time to block seek when reading Segment.\n      - BlocksLoad: 6                   # read the number of blocks\n      - CachedPagesNum: 30              # In V2 only, when PageCache is enabled, the number of Pages that hit the Cache.\n      - CompressedBytesRead: 0.00       # In V1, the size of the data read from the file before decompression. In V2, the pre-compressed size of the read page that did not hit the PageCache.\n      - DecompressorTimer: 0ns          # Data decompression takes time.\n      - IOTimer: 0ns                    # IO time for actually reading data from the operating system.\n      - IndexLoadTime_V1: 0ns           # Only in V1, it takes time to read Index Stream.\n      - NumSegmentFiltered: 0           # When generating Segment Iterator, the number of Segments that are completely filtered out through column statistics and query conditions.\n      - NumSegmentTotal: 6              # Query the number of all segments involved.\n      - RawRowsRead: 7                  # The number of raw rows read in the storage engine. See below for details.\n      - RowsBitmapIndexFiltered: 0      # Only in V2, the number of rows filtered by the Bitmap index.\n      - RowsBloomFilterFiltered: 0      # Only in V2, the number of rows filtered by BloomFilter index.\n      - RowsKeyRangeFiltered: 0         # In V2 only, the number of rows filtered out by SortkeyIndex index.\n      - RowsStatsFiltered: 0            # In V2, the number of rows filtered by the ZoneMap index, including the deletion condition. V1 also contains the number of rows filtered by BloomFilter.\n      - RowsConditionsFiltered: 0       # Only in V2, the number of rows filtered by various column indexes.\n      - RowsVectorPredFiltered: 0       # The number of rows filtered by the vectorized condition filtering operation.\n      - TotalPagesNum: 30               # Only in V2, the total number of pages read.\n      - UncompressedBytesRead: 0.00     # V1 is the decompressed size of the read data file (if the file does not need to be decompressed, the file size is directly counted). In V2, only the decompressed size of the Page that missed PageCache is counted (if the Page does not need to be decompressed, the Page size is directly counted)\n      - VectorPredEvalTime: 0ns         # Time-consuming of vectorized condition filtering operation.\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br"),n("span",{staticClass:"line-number"},[e._v("33")]),n("br"),n("span",{staticClass:"line-number"},[e._v("34")]),n("br"),n("span",{staticClass:"line-number"},[e._v("35")]),n("br"),n("span",{staticClass:"line-number"},[e._v("36")]),n("br"),n("span",{staticClass:"line-number"},[e._v("37")]),n("br"),n("span",{staticClass:"line-number"},[e._v("38")]),n("br"),n("span",{staticClass:"line-number"},[e._v("39")]),n("br"),n("span",{staticClass:"line-number"},[e._v("40")]),n("br"),n("span",{staticClass:"line-number"},[e._v("41")]),n("br"),n("span",{staticClass:"line-number"},[e._v("42")]),n("br"),n("span",{staticClass:"line-number"},[e._v("43")]),n("br")])]),n("p",[e._v("The predicate push down and index usage can be inferred from the related indicators of the number of data rows in the profile. The following only describes the profile in the reading process of segment V2 format data. In segment V1 format, the meaning of these indicators is slightly different.")]),e._v(" "),n("ul",[n("li",[e._v("When reading a segment V2, if the query has key_ranges (the query range composed of prefix keys), first filter the data through the SortkeyIndex index, and the number of filtered rows is recorded in "),n("code",[e._v("RowsKeyRangeFiltered")]),e._v(".")]),e._v(" "),n("li",[e._v("After that, use the Bitmap index to perform precise filtering on the columns containing the bitmap index in the query condition, and the number of filtered rows is recorded in "),n("code",[e._v("RowsBitmapIndexFiltered")]),e._v(".")]),e._v(" "),n("li",[e._v("After that, according to the equivalent (eq, in, is) condition in the query condition, use the BloomFilter index to filter the data and record it in "),n("code",[e._v("RowsBloomFilterFiltered")]),e._v(". The value of "),n("code",[e._v("RowsBloomFilterFiltered")]),e._v(" is the difference between the total number of rows of the Segment (not the number of rows filtered by the Bitmap index) and the number of remaining rows after BloomFilter, so the data filtered by BloomFilter may overlap with the data filtered by Bitmap.")]),e._v(" "),n("li",[e._v("After that, use the ZoneMap index to filter the data according to the query conditions and delete conditions and record it in "),n("code",[e._v("RowsStatsFiltered")]),e._v(".")]),e._v(" "),n("li",[n("code",[e._v("RowsConditionsFiltered")]),e._v(" is the number of rows filtered by various indexes, including the values ​​of "),n("code",[e._v("RowsBloomFilterFiltered")]),e._v(" and "),n("code",[e._v("RowsStatsFiltered")]),e._v(".")]),e._v(" "),n("li",[e._v("So far, the Init phase is completed, and the number of rows filtered by the condition to be deleted in the Next phase is recorded in "),n("code",[e._v("RowsDelFiltered")]),e._v(". Therefore, the number of rows actually filtered by the delete condition are recorded in "),n("code",[e._v("RowsStatsFiltered")]),e._v(" and "),n("code",[e._v("RowsDelFiltered")]),e._v(" respectively.")]),e._v(" "),n("li",[n("code",[e._v("RawRowsRead")]),e._v(" is the final number of rows to be read after the above filtering.")]),e._v(" "),n("li",[n("code",[e._v("RowsRead")]),e._v(" is the number of rows finally returned to Scanner. "),n("code",[e._v("RowsRead")]),e._v(" is usually smaller than "),n("code",[e._v("RawRowsRead")]),e._v(", because returning from the storage engine to the Scanner may go through a data aggregation. If the difference between "),n("code",[e._v("RawRowsRead")]),e._v(" and "),n("code",[e._v("RowsRead")]),e._v(" is large, it means that a large number of rows are aggregated, and aggregation may be time-consuming.")]),e._v(" "),n("li",[n("code",[e._v("RowsReturned")]),e._v(" is the number of rows finally returned by ScanNode to the upper node. "),n("code",[e._v("RowsReturned")]),e._v(" is usually smaller than "),n("code",[e._v("RowsRead")]),e._v(". Because there will be some predicate conditions on the Scanner that are not pushed down to the storage engine, filtering will be performed once. If the difference between "),n("code",[e._v("RowsRead")]),e._v(" and "),n("code",[e._v("RowsReturned")]),e._v(" is large, it means that many rows are filtered in the Scanner. This shows that many highly selective predicate conditions are not pushed to the storage engine. The filtering efficiency in Scanner is worse than that in storage engine.")])]),e._v(" "),n("p",[e._v("Through the above indicators, you can roughly analyze the number of rows processed by the storage engine and the size of the final filtered result row. Through the "),n("code",[e._v("Rows***Filtered")]),e._v(" group of indicators, it is also possible to analyze whether the query conditions are pushed down to the storage engine, and the filtering effects of different indexes. In addition, a simple analysis can be made through the following aspects.")]),e._v(" "),n("ul",[n("li",[e._v("Many indicators under "),n("code",[e._v("OlapScanner")]),e._v(", such as "),n("code",[e._v("IOTimer")]),e._v(", "),n("code",[e._v("BlockFetchTime")]),e._v(", etc., are the accumulation of all Scanner thread indicators, so the value may be relatively large. And because the Scanner thread reads data asynchronously, these cumulative indicators can only reflect the cumulative working time of the Scanner, and do not directly represent the time consumption of the ScanNode. The time-consuming ratio of ScanNode in the entire query plan is the value recorded in the "),n("code",[e._v("Active")]),e._v(" field. Sometimes it appears that "),n("code",[e._v("IOTimer")]),e._v(" has tens of seconds, but "),n("code",[e._v("Active")]),e._v(" is actually only a few seconds. This situation is usually due to:\n"),n("ul",[n("li",[n("code",[e._v("IOTimer")]),e._v(" is the accumulated time of multiple Scanners, and there are more Scanners.")]),e._v(" "),n("li",[e._v("The upper node is time-consuming. For example, the upper node takes 100 seconds, while the lower ScanNode only takes 10 seconds. The field reflected in "),n("code",[e._v("Active")]),e._v(" may be only a few milliseconds. Because while the upper layer is processing data, ScanNode has performed data scanning asynchronously and prepared the data. When the upper node obtains data from ScanNode, it can obtain the prepared data, so the Active time is very short.")])])]),e._v(" "),n("li",[n("code",[e._v("NumScanners")]),e._v(" represents the number of Tasks submitted by the Scanner to the thread pool. It is scheduled by the thread pool in "),n("code",[e._v("RuntimeState")]),e._v(". The two parameters "),n("code",[e._v("doris_scanner_thread_pool_thread_num")]),e._v(" and "),n("code",[e._v("doris_scanner_thread_pool_queue_size")]),e._v(" control the size of the thread pool and the queue length respectively. Too many or too few threads will affect query efficiency. At the same time, some summary indicators can be divided by the number of threads to roughly estimate the time consumption of each thread.")]),e._v(" "),n("li",[n("code",[e._v("TabletCount")]),e._v(" indicates the number of tablets to be scanned. Too many may mean a lot of random read and data merge operations.")]),e._v(" "),n("li",[n("code",[e._v("UncompressedBytesRead")]),e._v(" indirectly reflects the amount of data read. If the value is large, it means that there may be a lot of IO operations.")]),e._v(" "),n("li",[n("code",[e._v("CachedPagesNum")]),e._v(" and "),n("code",[e._v("TotalPagesNum")]),e._v(" can check the hitting status of PageCache. The higher the hit rate, the less time-consuming IO and decompression operations.")])]),e._v(" "),n("h4",{attrs:{id:"buffer-pool"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#buffer-pool"}},[e._v("#")]),e._v(" "),n("code",[e._v("Buffer pool")])]),e._v(" "),n("ul",[n("li",[e._v("AllocTime: Memory allocation time")]),e._v(" "),n("li",[e._v("CumulativeAllocationBytes: Cumulative amount of memory allocated")]),e._v(" "),n("li",[e._v("CumulativeAllocations: Cumulative number of memory allocations")]),e._v(" "),n("li",[e._v("PeakReservation: Peak of reservation")]),e._v(" "),n("li",[e._v("PeakUnpinnedBytes: Amount of memory data of unpin")]),e._v(" "),n("li",[e._v("PeakUsedReservation: Peak usage of reservation")]),e._v(" "),n("li",[e._v("ReservationLimit: Limit of reservation of bufferpool")])])])}),[],!1,null,null,null);t.default=i.exports}}]);