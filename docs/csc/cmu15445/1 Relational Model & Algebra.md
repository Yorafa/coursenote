# Intro to DBMS

**database**: organized collection of inter-related data that models some aspect of the real world.
- db are the core component of most computer applications
- some common use such as we store our db as comma-separated value(csv) files.
  
**database management system(DBMS)**: software that allows applications to store and analyze information in a database.
- a general-purpose DBMS supports the definition, creation, querying, update, and administration of databases in accordance with the data model.
- **data model**: a collection of concepts for describing the data in a database.
  - some common data models are relational, key-value, graph, document, etc. This course will focus on relational model.
- **schema**: a description of a particular collection of data, using a given data model.

Why we should have a dbms? Imagine you store your data in flat files (e.g. csv):
- **data integrity**: no constraints on data(e.g. some people like to store date as MM/DD/YYYY, some like DD/MM/YYYY)
- **efficiency**: scan whole file to find data, 
- **concurrency**: multiple users can access the same data at the same time, what if they update at same time?
- **durability**: if the system crashes, how to recover the data?

## Relational Model

**relational model***: a database abstraction based on relations to avoid maintenance overhead. Key tenets(principles) of the relational model:
- Stor db in simple data structures(relations)
- Physical storage left up to the DBMS implementation
- Access data through high-lvl languages, let DBMS figures best strategy to execute

To implement relational model, we need to define:
- **Structure**: the definition of the db's realtions and their contents
  - **relation**: an unordered set that contains the relationship of attributes that represent entities
  - **tuple**: a set of attribute values in a relation, sometimes we call it attribute values' **domain**
  - **primary key** of a relation: uniquely identifies a single tuple in the relation
    - DBMS can auto-gen unique primary keys: `IDENTITY` in SQL Server, `AUTO_INCREMENT` in MySQL, `SEQUENCE` in PostgreSQL
  - **foreign key**: specifies that an attribute from one relation maps to a tuple in another relation. (e.g. student id in a course relation is a foreign key to the student relation)
- **Integrity**: the constraints of the db's contents
  - **Constraints**: user-defined conditions that must hold for any instance of the database
- **Manipulation**: programming interface for accessing and modifying a db's contents

## Relational Algebra

We need **DML**(data manipulation language) to manipulate data in a db. There are two types of DML:
- Procedural DML(i.e. the **relational algebra**): query that specifies high-level strategy to find the desired result based on sets/bags
- Non-procedural DML(i.e. **relational calculus**): query that specifies only what data is wanted and not how to find it.

The language is comprised of different classes of commands:
1. Data Manipulation Language (DML): SELECT, INSERT, UPDATE, and DELETE statements.
2. Data Definition Language (DDL): Schema definitions for tables, indexes, views, and other objects.
3. Data Control Language (DCL): Security, access controls.

### Relational Algebra Operators

The operators of relational algebra are based on set algebra and each operator takes one or more relations as its input and outputs a new relation. The operators are:
- $\sigma$ (select): Choose a subset of the tuples from a relation that satisfies a selection predicate, ($\sigma_{\text{predicate}}(\text{R})$)
  - predicate here acts as a filter to retain only tuples that satisfy the requirement
  - predicate can use $\land$, $\lor$, $\lnot$ to combine multiple predicates
  - SQL: `SELECT * FROM R WHERE predicate`
- $\pi$ (projection): Generate a relation with tuples that contains only hte specified attributes, ($\pi_{\text{attribute1, attribute2}}(\text{R})$)
  - rearrange, remove, modify and etc. the attributes of a relation
  - SQL: `SELECT attribute1, attribute2 FROM R`
- $\cup$ (union): Generate a relation that contains all tuples that appear in either only one or both of the input relations, ($\text{R} \cup \text{S}$)
  - SQL: `(SELECT * FROM R) UNION (SELECT * FROM S)`
- $\cap$ (intersection): Generate a relation that contains all tuples that appear in both of the input relations, ($\text{R} \cap \text{S}$)
  - SQL: `(SELECT * FROM R) INTERSECT (SELECT * FROM S)`
- $-$ (difference): Generate a relation that contains only the tuples that appear in the first and not hte second of the input relations, ($\text{R} - \text{S}$)
  - SQL: `(SELECT * FROM R) EXCEPT (SELECT * FROM S)`
- $\times$ (product): Generate a relation that contains all combinations of tuples from the two input relations, ($\text{R} \times \text{S}$)
  - SQL: `SELECT * FROM R, S` or `SELECT * FROM R CROSS JOIN S`
- $\bowtie$ (join): Generate a relation that contains all tuples that are a combination of two tuples (one from each input relation) with a common values for one or more attributes, ($\text{R} \bowtie_{\text{predicate}} \text{S}$)
  - SQL: `SELECT * FROM R JOIN S ON predicate` or `SELECT * FROM R NATURAL JOIN S` or `SELECT * FROM R JOIN S USING (attribute)`
- $\rho$ (rename): Generate a relation that contains all tuples from the input relation but with a new name, ($\rho_{\text{new name}}(\text{R})$)
  - SQL: `SELECT * FROM R AS new name`
- $\leftarrow$ (assignment): Assign the result of a relational algebra expression to a relation, ($\text{R} \leftarrow \text{expression}$)
  - SQL: `CREATE TABLE R AS expression`
- $\delta$ (duplicate elimination): Generate a relation that contains all tuples from the input relation but with duplicate tuples removed, ($\delta(\text{R})$)
  - SQL: `SELECT DISTINCT * FROM R`
- $\gamma$ (aggregation): Generate a relation that contains all tuples from the input relation but with duplicate tuples removed, ($\gamma_{\text{attribute1, attribute2}}(\text{R})$)
  - SQL: `SELECT attribute1, attribute2 FROM R GROUP BY attribute1, attribute2`
- $\tau$ (sorting): Generate a relation that contains all tuples from the input relation but with duplicate tuples removed, ($\tau_{\text{attribute1, attribute2}}(\text{R})$)
  - SQL: `SELECT * FROM R ORDER BY attribute1, attribute2`
- $\div$ (division): Generate a relation that contains all tuples from the input relation but with duplicate tuples removed, ($\text{R} \div \text{S}$)
  - SQL: `SELECT * FROM R WHERE NOT EXISTS (SELECT * FROM S EXCEPT SELECT * FROM R)`
