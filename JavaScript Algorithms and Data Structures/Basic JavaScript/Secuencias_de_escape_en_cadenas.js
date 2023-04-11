//Secuencias de escape en cadenas
/*Las comillas no son los únicos caracteres que se pueden escapar dentro de una cadena. Las secuencias de escape le permiten usar caracteres que de otro modo no podría usar en una cadena.

Código	Producción
\'	una frase
\"	comillas dobles
\\	barra invertida
\n	nueva línea
\t	pestaña
\r	retorno de carro
\b	retroceso
\f	alimentación de formulario
Tenga en cuenta que la barra invertida en sí debe tener escape para que se muestre como una barra invertida.

Asigne las siguientes tres líneas de texto a la única variable myStrusando secuencias de escape.

Primera linea
    \Segunda linea
Tercera Línea
Deberá usar secuencias de escape para insertar caracteres especiales correctamente. También deberá seguir el espaciado como se ve arriba, sin espacios entre secuencias de escape o palabras.

Nota: La sangría para SecondLinese logra con el carácter de escape de tabulación, no con espacios. */
//Ejercicio
/*myStr no debe contener ningún espacio
myStrdebe contener las cadenas FirstLine, SecondLiney ThirdLine(recuerde la distinción entre mayúsculas y minúsculas)
FirstLinedebe ir seguido del carácter de nueva línea\n
myStrdebe contener un carácter de tabulación \tque sigue a un carácter de nueva línea
SecondLinedebe estar precedido por el carácter de barra invertida\
Debe haber un carácter de nueva línea entre SecondLineyThirdLine
myStrsolo debe contener los caracteres que se muestran en las instrucciones */
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
