# Modern SQL

## Aggregation

Aggregate functions can only be used in the `SELECT` output list. (i.e. `SELECT AGGREGATION(...) FROM ...`)

Some aggregate functions:
- `COUNT(...)`:
  - `COUNT(column)` counts the number of non-null values in the column
  - `COUNT(*)` counts the number of non-null values in the table
  - `COUNT(DISTINCT column)` counts the number of distinct non-null values in the column
- `AVG(...)`
- `SUM(...)`
- `MIN(...)`
- `MAX(...)`
- `GROUP BY`: Project tuples into subsets and calculate aggregates against each subset.
  - Non-aggregated values in `SELECT` output clause must appear in `GROUP BY` clause.
- `HAVING`: Filters results based on aggregation computation. Like a WHERE clause but used for a GROUP BY. (i.e. `HAVING AGGREGATION(...)`)

## String / Date / Time Operations

String operations:
- `LIKE` : used for string matching, some patterns:
  - `%`: Matches any substring (including empty string)
  - `_`: Matches any single character
- `SUBSTRING(string, start, length)`: Extracts a substring from a string
- `EXTRACT(field FROM source)`: Extracts a field from a date/time value
  - some possible fields: `YEAR`, `MONTH`, `DAY`, `HOUR`, `MINUTE`, `SECOND`, etc.
- `UPPER(string)`: Converts a string to uppercase
- `LOWER(string)`: Converts a string to lowercase
- `||`: Concatenates two strings (SQL standard)
- `CONCAT(string1, string2)`: Concatenates two strings (MySQL)
- `+`: Concatenates two strings (MSSQL)

## Output Control + Redirection

Redirection:
- `INTO`: Redirects output of a query to a new table (SQL-92)
- `INTO TEMPORARY`: Redirects output of a query to a new temporary table (PostgreSQL)
- `INSERT INTO`: Redirects output of a query to a new table 
  
Output control:
- `ORDER BY <> ASC/DESC`: Sorts output by specified column(s)
- `LIMIT <n>`: Limits output to first n rows
- `PARTITION BY <>`: Partitions output by specified column(s)
- `FETCH {FIRST|NEXT} <n> ROWS ONLY`: Limits output to first n rows
- `OFFSET <n> ROWS`: Skips first n rows of output

## Window Functions

- `OVER(...)`: Defines a window or subset of rows within a query result set
  - use control functions inside `OVER(...)`
- `ROW_NUMBER()`: Assigns a unique sequential integer to each row in a window
- `RANK()`: Assigns a unique sequential integer to each row in a window, but with gaps

## Nested Queries

- `IN`: Checks if a value is in a set of values
- `ALL`: Checks if a value is greater than all values in a set of values
- `ANY`: Checks if a value is greater than any value in a set of values
- `EXISTS`: Checks if a subquery returns any rows

## Joins

- `LATERAL JOIN`: Allows a nested query to reference attributes in other nested queries that precede it.
- `LEFT JOIN`: Returns all rows from the left table, and the matched rows from the right table; NULL values are used for unmatched rows on the right. (similarly for `RIGHT JOIN`)
- `INNER JOIN`: Returns all rows when there is at least one match in BOTH tables. (the same as `JOIN`)

## Common Table ExpressionsSELECT name FROM student

- `WITH`: Defines a temporary named result set that can be referenced by a subsequent query
  - `WITH RECURSIVE`: Defines a temporary named result set that can be referenced by a subsequent query, and allows the query to reference itself
- `AS`: You can bind/alias output columns to names before the AS keyword.

## Other

- `ifnull(expr1, expr2)`: Returns expr1 if it is not NULL, or expr2 otherwise.