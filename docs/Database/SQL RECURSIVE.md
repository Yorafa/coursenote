```MySQL
WITH RECURSIVE employee_hierarchy AS (
    -- 基础查询部分：选择顶级管理者
    SELECT emp_id, emp_name, manager_id, 1 AS level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- 递归部分：查找下一级员工，增加递归深度
    SELECT e.emp_id, e.emp_name, e.manager_id, eh.level + 1 AS level
    FROM employees e
    INNER JOIN employee_hierarchy eh ON e.manager_id = eh.emp_id
    WHERE eh.level < 3
)
SELECT * FROM employee_hierarchy;
```
在上面RECURSIVE例子中每个CLAUSE都只会执行一遍，也就是说第一层就是基础部分，第二层是基础部分加1，第三层是第二层加1，以此类推, 不会出现第三层的时候把第一层和第二层都+1的情况所以可以使用union all不做查重
