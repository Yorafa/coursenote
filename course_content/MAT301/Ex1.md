# Excecise 1

1.    Let $F \in R^2$ be a proper rectangle, i.e. a rectangle that is not a square. Determine all symmetries of F and write down the Cayley table (a.k.a. operation table or multiplication table) of thes symmetry group of $F$.

2.   Let $C$ be a cube in $R^3$. How many symmetries of $C$ are there?

     1.    48

3.   Let G be a group.

     1.   Let $a,b \in G$ with $a^{11} = e$. Express the inverses of $a,a^2,a^5,a^7$, and $a^{10}$ without using negative exponents.
          1.   $a \cdot a^{10} = e$, $a^2\cdot a^9= e$, $a^5\cdot a^6 = e$, $a^7\cdot a^4 = e$

     2.   Let $a,b \in G$ with $a^6 = e = b^7$. Write $a^{−2}b^{−4}$ and $(a^2b^4)^{−2}$ without using negative exponents.
          1.   $a^{-2}b^{-4}= a^4b^3$
          2.   $(a^2b^4)^{−2}=a^2b$

4.  Let $G$ be a group.
    1. Prove that for all $a \in G$, we have $(a^{−1})^{−1} = a$.
        1. let $b = a^{-1}$, then WTS $b^{-1}=a$
        1. let $b^{-1} = c$
        1. $bc = e= ba$
        1. $c =a$
        1. $c = (a^{-1})^{-1} = a$
    2. If $a_1,...,a_n \in G$ and $n \in Z$, what is $(a_1 ···a_n)^{−1}$? Prove your formula by induction on $n$.
    
5. Let G be the set {e,a,b}. Determine all group operations on the set G for which e is the identity element.

6. Let S be a reflection in Dn. Which elements x ∈Dn satisfy x2 = S? Which elements x ∈Dn satisfy x3 = S?

7.   List the elements of the group ((Z/8Z)×,·) and write down its Cayley table.          

8.   Define a relation ∼ on R by x ∼y if and only if x −y ∈Z, for all x,y ∈R.

     1.   Prove that ∼ is an equivalence relation.
     2.   What are the equivalence classes of ∼?
     3.   Prove that each equivalence class of ∼ has a unique representative in [0,1).
     4. Prove that for all x1,x2,y1,y2 ∈R, if x1 ∼x2 and y1 ∼y2, then x1 + y1 ∼x2 + y2.
     For x ∈R, let [x] denote the equivalence class of x under the equivalence relation ∼. Let R/Z = {[x] : x ∈R}, the set of equivalence classes of ∼. For α,β ∈R/Z, define α+ β ∈R/Z as follows: choose x,y ∈R such that α = [x] and β = [y], and define α + β = [x + y]. This is well-defined, independent of the choices of x and y by Part 4. We have a binary operation R/Z ×R/Z →R/Z defined by [x] + [y] = [x + y].
     5. Prove that (R/Z,+) is an abelian group.
9. Let G be a group and suppose that a2 = e for all a ∈G. Prove that G is abelian.
10. Let G be a finite group. Prove that the number of elements x ∈G such that x3 = e is odd.
11. Let G be a finite group whose order is even. Prove that there is an element x ∈G such that x ̸= e and x2 = e. (Hint: x2 = e if and only if x = x−1.)
12. The quaternions H, introduced by Hamilton, is a four-dimensional version of the complex numbers. The quaternions H is the real vector space R4 together with a multiplication defined by (a,b,c,d)(e,f,g,h) = (ae −bf −cg −dh,af + be + ch −dg,ag + ce −bh + df,ah + de + bg −cf). for all (a,b,c,d),(e,f,g,h) ∈ R4. With the operations of addition and multiplication, the quaternions H satisfy all axioms of a field except that multiplication is not commutative. Let 1 = (1,0,0,0),i = (0,1,0,0),j = (0,0,1,0), and k = (0,0,0,1). Then, the element (a,b,c,d) ∈ H can be written as a1 + bi + cj + dk. It is typical to write a1 as a, so that a1 + bi + cj + dk = a + bi + cj + dk. Identify the subspace R1 = R(1,0,0,0) = {a1 = (a,0,0,0) | a ∈ R} of the quaternions with R via the map a1 7→a. Identify the subspace Ri+ Rj + Rk = {bi+ cj + dk = (0,b,c,d) |b,c,d ∈R} of the quaterions with R3 via the map bi+ cj+ dk 7→(b,c,d). For a quaternion x = x01 + x1i+ x2j+ x3k, we write xs = x0 ∈R and xv = (x1,x2,x3) ∈R3, and then x = xs + xv under our identifications. If x = xs + xv and y = ys + yv are quaternions, then
     xy = (xsys −xv ·yv) + (xsyv + ysxv + xv ×yv),
     that is, (xy)s = xsys −xv ·yv and (xy)v = xsyv + ysxv + xv ×yv.
     Consider the subset Q8 = {±1,±i,±j,±k} of the quaternions H.
     1. Prove that Q8 is a non-abelian group under multiplication. It is called the quaternion group.
     2. Write down its Cayley table.
13. Define a relation ∼ on the quaternions H as follows: for all x,y ∈ H define a ∼ b to mean x = y or x = −y.
     1. Prove that ∼ is an equivalence relation on H and describe its equivalence classes.
     2. Prove that for all x1,x2,y2,y2 ∈H, if x1 ∼x2 and y1 ∼y2, then x1y1 ∼x2y2.
     For x ∈H, let [x] denote the equivalence class of x, that is, [x] = {x′ ∈H : x′ ∼x}. Let  ̃H = {[x] : x ∈H×}. If α,β ∈  ̃H define α·β ∈  ̃H as follows: choose x,y ∈H such that α = [x] and β = [y], and define α·β = [xy]. (By Part 2, this does not depend on the choice of x and y.) Therefore we have a binary operation  ̃H ×  ̃H −→  ̃H  ([x],[y]) 7−→[x] ·[y]
     3. Is (  ̃H,·) a group? Justify your answer.
     4. Let G = {[x] : x ∈H×}, where H× is the set of invertible quaternions, i.e. H× = H \{0}. Prove that if [x],[y] ∈G, then [x] ·[y] ∈G. Consequently, we have a binary operation G×G →G,([x],[y]) 7→[x] ·[y].
     5. Prove that (G,·) is a group.
     6. Let K = {[1],[i],[j],[k]}. Prove that if α,β ∈ K, then α ·β ∈ K, so that we have a binary operation K ×K →K,(α,β) 7→α ·β.
     7. Prove that (K,·) is a group and write down its Cayley table.
     8. Compare the Cayley table of K with the Cayley table of the symmetry group of a proper rectangle from Exercise 1.
14. (x1 ∗···∗xn is unambiguous). Let S be a set and let ∗: S ×S →S be an associative binary operation. The pair (S,∗) is called a semigroup. Note that every group is a semigroup. An example of a semigroup that is not a group is (Z>0,+).
     For each n ∈ Z>0, we will define a function Pn : Sn → 2S such that for all (x1,...,xn) ∈ Sn, the set Pn(x1,...,xn) is the subset of S consisting of all ways of inserting parentheses in the string of symbols
     x1 ∗···∗xn to obtain a valid product in (S,∗). For example, we will have
     P4(x1,x2,x4) = x1 ∗(x2 ∗(x3 ∗x4)),x1 ∗((x2 ∗x3) ∗x4), (x1 ∗(x2 ∗x3)) ∗x4,((x1 ∗x2) ∗x3) ∗x4,(x1 ∗x2) ∗(x3 ∗x4) .
     We now inductively define the functions Pn : Sn →2S for all n ∈Z>0.
     (i) Define P1 : S →2S by P1(x1) = x1 for all x1 ∈S.
     (ii) Suppose that n ∈ Z>0 and that Pm : Sm → 2S is defined for all m ∈ {1,...,n}. We define Pn+1 :
    
     Prove by strong induction that for all n ∈Z>0, the set Pn(x1,...,xn) is a singleton for all x1,...,xn ∈S.
15. A monoid is a semigroup (M,·) such that there exists an element e ∈ M with the property that x ·e = x = e ·x for all x ∈M. Let (M,·) be a monoid.
     1. Prove that e is unique.
     2. Let x ∈M and suppose that there exist y,z ∈M such that y ·x = e = x ·z. Prove that y = z.
16. (Laws of exponents). Let G be a group and let a ∈ G. Recall that for n ∈ Z≥0 we define an inductively by: a0 = 1 and an+1 = ana. Recall that for n ∈ Z<0, we define an = (a−1)−n, which is defined since −n > 0.
     1. Prove that for all n ∈Z, we have ana = an+1
     2. Prove that for all m,n ∈ Z, we have aman = am+n. (Hint: Prove that for any m ∈ Z we have aman = am+n for all n ∈Z≥0 by induction on n. For m ∈Z and n ∈Z<0, use aman = (a−1)−m(a−1)−n to reduce to a case that has already been proved.)
     3. Prove that for all m,n ∈Z, we have (am)n = amn.
     4. Give an example of a group H and elements x,y ∈H such that (xy)2 ̸= x2y2.
17. Let G be a group and let a,b ∈G. Prove that for all n ∈Z, we have (aba−1)n = abna−1.
18. (Laws of exponents for commuting elements). Let G be a group and let a,b ∈G with ab = ba.
     1. Prove that for all n ∈ Z we have anb = ban. (Note that if n < 0, then an = (a−1)−n, so it suffices to
     prove the result in the case n ≥0.)
     2. Prove that for all n ∈Z we have (ab)n = anbn.