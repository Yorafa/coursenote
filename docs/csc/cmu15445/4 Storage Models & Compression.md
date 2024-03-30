# Storage Models & DataS Compression


## Database Workloads
The file storage we talked about are ideal for write-heavy workloads (i.e. `INSERT/UPDATE/DELETE`), but how about read workload (i.e. `SELECT`). The relationnal model does not specify that DBMS store all attributes of a tuple in a single page, so this may not be the best layout for some workloads.

On-Line Transaction Processing (OLTP) (usually build first)
- Features of OLTP: fast operations that only read/update a small amount of data each time.

On-Line Analytical Processing (OLAP)
- Features of OLAP: Complex queries that read a lot of data to compute an aggregate result
- collect data from OLTP and aggregate them

Hybrid Transactional and Analytical Processing (HTAP)
- Features of HTAP: a mix of OLTP and OLAP workloads

## Storage Models

A DBMS's storage model specifies how it physically organizes tuples on disk and in memory. 

### N-ary Storage Model (NSM)

Use this model, the DBMS will stores almost all attributes of a single tuple contiguously in a single page. This model also known as row storage model.
- ideal for OLTP workloads because it is efficient for retrieving a single tuple
- typically with page size multiple of 4KB
- store tuples' fixed-length and variable-length attributes in a single slotted page
- tuples are identified by their record id (page#, slot#)