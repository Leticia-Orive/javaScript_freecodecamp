//Convertir entidades HTML
/*Convierta los caracteres &, <, >, "(comillas dobles) y '(apóstrofe) de una cadena en sus entidades HTML correspondientes. */
//Ejercicio
/* convertHTML("Dolce & Gabbana")debe devolver la cadena Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos")debe devolver la cadena Hamburgers &lt; Pizza &lt; Tacos.
convertHTML("Sixty > twelve")debe devolver la cadena Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"')debe devolver la cadena Stuff in &quot;quotation marks&quot;.
convertHTML("Schindler's List")debe devolver la cadena Schindler&apos;s List.
convertHTML("<>")debe devolver la cadena &lt;&gt;.
convertHTML("abc")debe devolver la cadena abc.*/

function convertHTML(str) {
  // Split by character to avoid problems.

  var temp = str.split("");

  // Since we are only checking for a few HTML elements, use a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}

//test here
convertHTML("Dolce & Gabbana");
