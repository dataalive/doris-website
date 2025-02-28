---
{
    "title": "ALTER-TABLE-REPLACE",
    "language": "en"
}
---

<!--
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
-->

## ALTER-TABLE-REPLACE

### Name

ALTER TABLE REPLACE

### Description

This statement is used to modify the attributes of the schema of the existing table. The syntax is basically similar to [ALTER TABLE CULUMN](ALTER-TABLE-COLUMN.md).

```sql
ALTER TABLE [database.]table MODIFY NEW_COLUMN_INFO REPLACE OLD_COLUMN_INFO ;
```

### Example

1. Modify the maximum length of the val1 column of base index. The original val1 is (val1 VARCHAR(32) REPLACE DEFAULT "abc")

```sql
ALTER TABLE example_db.my_table
MODIFY COLUMN val1 VARCHAR(64) REPLACE DEFAULT "abc";
```

### Keywords

```text
ALTER, TABLE, REPLACE, ALTER TABLE
```

### Best Practice

