//FUNCION PARA CAMBIAR TITULOS (HTML) | INTERFAZ NO.1
function asignarTextoElemento(elemento, texto) { //Elemento = Etiqueta HTML - Texto = Es la redacción que queremos que aparezca.
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.textContent = texto; //De acuerdo a lo investigado, se recomienda usar "textContent", en lugar de "innerHTML", porque no se esta usando un contenido HTML
  return; 
}

//LLAMADO A LA FUNCION DE TITULOS (HTML) | INTERFAZ NO.1
asignarTextoElemento('h1','¿QUIÉN SERÁ TU AMIGO SECRETO?');
asignarTextoElemento('h2','¡Agrega a los participantes!')

//BOTON -FUNCION PARA AGREGAR LOS NOMBRES DE LOS AMIGOS 
function nuevoAmigo() {
  let input = document.getElementById('nombreDeAmigo');
  let nombre = input.value.trim(); // trim = Elimina espacios en blancos de los costados

  if (nombre !== "") { // Sí es igual a un campo vacío == "", marca error.
    let listaTotal = document.getElementById('listaAmigos');
    
    // Verifica si el nombre ya existe en la lista
    let nombresEnLista = listaTotal.getElementsByTagName('li');
    let nombreDuplicado = false; //En caso idoneo se busca que esta variable no este duplicada. por ello el "false"

    // Iteramos sobre la lista para verificar duplicados
    for (let i = 0; i < nombresEnLista.length; i++) { //Hablemos del i: Cuando juntas nombresEnLista[i], lo que haces es acceder a un elemento específico dentro de una colección de elementos (en este caso, un <li> que contiene un nombre de amigo).
      if (nombresEnLista[i].textContent.toLowerCase() === nombre.toLowerCase()) { //toLowerCase ayuda a que la comparación no distinga entre mayusculas o minusculas, a la hora de hacer la comparacion
        nombreDuplicado = true; // Encontramos un duplicado por ello el "true"
        input.value = ""; // Limpia el campo de texto, para agilizar el uso de la interfaz
        break; // Salimos del bucle si encontramos el duplicado
      }
    }

    if (nombreDuplicado) {
      // Si el nombre ya está en la lista, mostramos un mensaje llamando a la funcion: asignarTextoElemento
      asignarTextoElemento('h2', 'Este nombre ya está en la lista.');
      setTimeout(() => asignarTextoElemento('h2', '¡Agrega a los participantes!'), 3000); // Esto permitira que al cabo de un tiempo, el texto regrese al principal. 
    } else {
      // Si el nombre no está duplicado, lo agregamos a la lista
      let participantes = document.createElement("li");
      participantes.textContent = nombre; // Asignamos el texto al <li>
      listaTotal.appendChild(participantes); // Agregamos el <li> a la lista <ul>

      input.value = ""; // Limpia el campo de texto, para agilizar el uso de la interfaz

      // PARA OBTENER EL NÚMERO TOTAL EN LA LISTA
      let totalElementos = listaTotal.getElementsByTagName('li').length;

      // CONTROL INTERNO (log) | texto + (let = Variable): De esta manera se mejora la compresión a la hora de trabajar con la consola
      console.log('Nombre nuevo: ' + nombre);  
      console.log('Número total de la lista: ' + totalElementos);
    }

    } else {
      asignarTextoElemento('h2','Por favor, ingresa un nuevo nombre'); // Esto es en caso de que el campo este vacio
   }
}

//MEJORA EN EL PROCESO #1 (ACTIVAR BOTON ENTER)
document.getElementById('nombreDeAmigo').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {  // Verifica si la tecla presionada es "Enter"
    nuevoAmigo();  // Ejecuta la función de agregar nombre - nuevoAmigo
  }
});

// FUNCIÓN PARA SORTEAR UN AMIGO SECRETO
function sortearAmigo() {
  let listaTotal = document.getElementById('listaAmigos');
  let resultado = document.getElementById('resultado');
  let nombresEnLista = listaTotal.getElementsByTagName('li');

  asignarTextoElemento('h1','MOMENTO DEL SORTEO');
  asignarTextoElemento('h2','¿Quién te tocara?');
  
  if (nombresEnLista.length > 0) {
    let indiceSorteado = Math.floor(Math.random() * nombresEnLista.length);
    let nombreSorteado = nombresEnLista[indiceSorteado].textContent;

    // Mostrara el nombre sorteado en pantalla
    resultado.innerHTML = `Tu amigo secreto es: <strong>${nombreSorteado}</strong>`;
    console.log(`Amigo secreto sorteado: ${nombreSorteado}`);

    // Esperar un tiempo antes de eliminarlo de la lista
    
      if (nombresEnLista[indiceSorteado]) { // Verificamos que el elemento aún exista
        listaTotal.removeChild(nombresEnLista[indiceSorteado]);
      }

      // Si la lista queda vacía, mostrara el mensaje final depues de un tiempo
      if (listaTotal.getElementsByTagName('li').length === 0) {
      setTimeout(() => asignarTextoElemento('h2', 'Sorteo completado. ¡Que comiencen las sorpresas!'), 400);
      }
  } else {
    //MENSAJE DE CIERRE Y EN CASO DE QUE SIGAN PRESIONANDO EL BOTON
    asignarTextoElemento('h1','¿QUIÉN SERÁ TU AMIGO SECRETO?');
    asignarTextoElemento('h2', 'No hay más nombres en la lista.'); 
    resultado.innerHTML = `¡Feliz intercambio!`
  }
  // OCULTAR LISTA DE AMIGOS 
  listaTotal.style.display = 'none'; //Esto evita spoilers o que otros participantes sepan quien le toco a quien...
}