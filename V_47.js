/* 

Caracteres :
\s: Coincide con un carácter de
espacio, entre eLLos incLuidos espacio, tab, saito de página, salto de Linea y retorno de carro. *[a-zA-Z] +\s[a-zA-Z]+$
\S: Coincide con todo menos caracteres de espacio y'\S{5}$
\d: Coincide con un carácter de número. Equivalente a [0-9] y'\d{5}$
\D: Coincide con cualquier carácter no numérico. Equivalente a [*0-9] A\D {5}$
\w: Coincide con cualquier carácter alfanumérico, incluyendo el guión bajo. Equivalente a [A-Za-z0-9_] A\w
\W: Coincide con todo menos caracteres de palabra. *\\rJ+$

*/