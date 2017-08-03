



PRODUIT MATRICIELLE
====================

A a=(i, j) est une matrice de dimension n * m et B b=(i, j) une matrice de
dimension m * p.
Ou i sont les vecteurs colonnes et j sont les vecteurs lignes
La produit des matrices A et B est la matrice de dimension n * p notée A B

Tous les produits ne sont pas possibles !
Tous les produits de matrices ne sont pas possibles. Elles doivent avoir des dimensions
compatibles. Plus exactement, le premier facteur doit avoir autant de colonnes que le second a
de lignes. Cela afin que les lignes de la première matrice s'emboîtent bien avec les colonnes de
la seconde.
ex: M(2,3) et N(2,2) telle que

M = (
    a, b, c
    d, e, f
)
N = (
    r, s
    u, v
)

MN(2,2) possible ?



MN = (
    ar + bu + c???, as + bv + c???
    dr + eu + f???, ds + ev + f???
)
Cependant dans l'autre sens le produit est possible. Cependant
la multiplication matricielle n'est pas commutative


//----------------------------------------------------------------------
OK
M(3,3)
si m = (
    a, b, c
    d, e, f
    g, h, i
)

N(3,3)
et n = (
    r, s, t
    u, v, w
    x, y, z
)

alors la multiplication matricielle de ces deux matrices vaut matrice MN
de dimension MN(3,3)
res = (
    X1, Y1, Z1
    X2, Y2, Z2
    X3, Y3, Z3
)
=>
res = (
    ar + bu + cx, as + bv + cy, at + bw + cz
    dr + eu + fx, ds + ev + fy, dt + ew + fz
    gr + hu + ix, gs + gv + iy, gt + hw + iz
)

//-------------------------------------------------------------------
OK
dim M(2 lignes, 3colonnes)
si m = (
    a, b, c
    d, e, f
)
dim N(3lignes, 2colonnes)
et n = (
    r, s
    u, v
    x, y
)

alors la multiplication matricielle de ces deux matrices vaut MN
dim MN(2,2)
res = (
    X1, Y1
    X2, Y2
)
=>
MN = (
    ar + bu + cx, as + bv + cy
    dr + eu + fx, ds + ev + fy
)
//----------------------------------------------------------------

M(3l., 2c.)
si m = (
    r, s
    u, v
    x, y
)
N(2l., 3c.)
et n = (
    a, b, c
    d, e, f
)
MN possible ?
voir si premier facteur (M) a autant de colonnes que le deuxieme facteur (N) a
de lignes
MN(3c., 3l.)

MN => (
    ra + sd, rb + se, rc + sf
    ua + vd, ub + ve, uc + vf
    xa + yd, xb + ye, xc + yf
)

commutation est elle possible ?

M(3l., 2c.)
si m = (
    r, s
    u, v
    x, y
)
N(2l., 3c.)
et n = (
    a, b, c
    d, e, f
)

NM possible ? N 3 colonnes et M 3 lignes donc NM(2l., 2c.)
NM = (
    ar + bu + cx, as + bv + cy
    dr + eu + fx, ds + ev + fy
)


//--------------------------------------------------------------
OK
M(2l., 3c.)
si m = (
    a, b, c
    d, e, f
)
N(3l., 3c.)
et n = (
    r, s, t
    u, v, w
    x, y, z
)
MN possible ? M(3c.) et N(3l.)
alors la multiplication matricielle de ces deux matrices vaut MN(2l. 3c.)
res = (
    X1, Y1, Z1
    X2, Y2, Z2
)
=>
MN = (
    ar + bu + cx, as + bv + cy, at + bw + cz
    dr + eu + fx, ds + ev + fy, dt + ew + fz
)

commutation ?
NM possible ? N(3c.) et M(2l.) donc impossible
ex par absude :
=> NM(3l., 3c.)
res = (
    X1, Y1, Z1
    X2, Y2, Z2
    X3, Y3, Z3
)
NM(
    ra + sd + t???, rb + se + t???, rc + sf + t???
    ..., ..., ...
    xa + yd + z???, ..., ...
)

//--------------------------------------------------------------

M(2l. 3c.)
si m = (
    a, b, c
    d, e, f
)
N(2l., 3c.)
et n = (
    r, s, t
    u, v, w
)
MN possible ?
M(3c.) et N(2l.) donc impossible
commutation NM impossible car N(3c.) et M(2l.)
