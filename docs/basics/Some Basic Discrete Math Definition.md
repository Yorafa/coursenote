# Some Basic Discrete Math Definition

A **variable** is a logical variable like $x$,$y$, $p$, $q$.

A **literal** is either a logical variable or the negation of a logical variable. For example, $\neg x, y, \neg p$ are all literals.

A **clause** is an \`\`or '' of literals. For example $x \lor y \lor \neg p$ is a clause. 

A **term** is an \`\` and'' of literals. For example $x \land y \land \neg p$ is a term.

The **width** of a clause/term is the number of literals in it. A clause/term of width 1 is a single literal.

A formula is in **conjunctive normal form (CNF)** if it is an \`\`and'' of clauses. 

A formula is in **disjunctive normal form (DNF)** if it is an \`\`or'' of terms. 

The **size** of a CNF/DNF is the number of clauses/terms in it. A CNF/DNF of size 1 is a single clause/term.

Two formulas $\varphi, \psi$ are called **equivalent** if $\varphi \iff \psi$.