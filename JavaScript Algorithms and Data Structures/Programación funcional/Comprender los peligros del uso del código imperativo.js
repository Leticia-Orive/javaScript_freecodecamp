//Comprender los peligros del uso del código imperativo
/* La programación funcional es un buen hábito. Mantiene su código fácil de administrar y lo salva de errores furtivos. Pero antes de llegar allí, veamos un enfoque imperativo de la programación para resaltar dónde puede tener problemas.

En inglés (y muchos otros idiomas), el tiempo imperativo se usa para dar órdenes. De manera similar, un estilo imperativo en la programación es aquel que le da a la computadora un conjunto de declaraciones para realizar una tarea.

A menudo, las declaraciones cambian el estado del programa, como actualizar variables globales. Un ejemplo clásico es escribir un forbucle que proporcione instrucciones exactas para iterar sobre los índices de una matriz.

En contraste, la programación funcional es una forma de programación declarativa. Le dices a la computadora lo que quieres que haga llamando a un método o función.

JavaScript ofrece muchos métodos predefinidos que manejan tareas comunes, por lo que no necesita escribir cómo debe realizarlas la computadora. Por ejemplo, en lugar de usar el forciclo mencionado anteriormente, puede llamar al mapmétodo que maneja los detalles de iterar sobre una matriz. Esto ayuda a evitar errores semánticos, como los "Errores desactivados por uno" que se trataron en la sección Depuración.

Considere el escenario: está navegando por la web en su navegador y desea realizar un seguimiento de las pestañas que ha abierto. Intentemos modelar esto usando un código simple orientado a objetos.

Un objeto de ventana se compone de pestañas y, por lo general, tiene más de una ventana abierta. Los títulos de cada sitio abierto en cada objeto Ventana se mantienen en una matriz. Después de trabajar en el navegador (abrir nuevas pestañas, fusionar ventanas y cerrar pestañas), desea imprimir las pestañas que aún están abiertas. Las pestañas cerradas se eliminan de la matriz y se agregan nuevas pestañas (para simplificar) al final.

El editor de código muestra una implementación de esta funcionalidad con funciones para tabOpen(), tabClose()y join(). La matriz tabses parte del objeto Ventana que almacena el nombre de las páginas abiertas.

Examine el código en el editor. Está utilizando un método que tiene efectos secundarios en el programa, provocando un comportamiento incorrecto. La lista final de pestañas abiertas, almacenadas en finalTabs.tabs, debería estar ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']pero la lista producida por el código es ligeramente diferente.

Cambie Window.prototype.tabClosepara que elimine la pestaña correcta.*/
//Ejercicio
/* finalTabs.tabsdebiera ser['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']*/

// tabs is an array of titles of each site open within the window
const Window = function (tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push("new tab"); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  //const tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab
  const tabsAfterIndex = this.tabs.splice(1);

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line
  return this;
};

// Let's create three browser windows
const workWindow = new Window([
  "GMail",
  "Inbox",
  "Work mail",
  "Docs",
  "freeCodeCamp",
]); // Your mailbox, drive, and other work sites
const socialWindow = new Window([
  "FB",
  "Gitter",
  "Reddit",
  "Twitter",
  "Medium",
]); // Social sites
const videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
