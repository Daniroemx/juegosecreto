🎁 Amigo Secreto - Sorteo Automático (PRIMERA ETAPA)

Este proyecto es una aplicación en JavaScript para gestionar y realizar un sorteo de "Amigo Secreto". Permite agregar participantes, evitar nombres duplicados y realizar un sorteo aleatorio hasta que todos los nombres hayan sido asignados. (Es ideal para aquellas personas que están adentrándose al mundo de la programacion a traves de JavaScript, ya que a lo largo de todo el código, podrán encontrar "etiquetas" que explican las diferentes funciones y secciones del código) 

🚀 Características Principales

Agregar nombres a la lista de participantes.

Evitar la inclusión de nombres duplicados.

Iniciar el sorteo de manera aleatoria.

Ocultar la lista de participantes una vez iniciado el sorteo.

Mostrar el resultado del sorteo de forma progresiva.

Avisar cuando todos los nombres han sido sorteados.


📜 Funciones del Código

1️⃣ asignarTextoElemento(elemento, texto)

Descripción: Cambia el texto de un elemento HTML según el selector proporcionado.

Parámetros:

elemento (string): Selector del elemento (ej. 'h1', 'h2').

texto (string): Texto que se asignará al elemento.

Uso: Se utiliza para actualizar títulos y mensajes en la interfaz.

2️⃣ nuevoAmigo()

Descripción: Agrega un nuevo participante a la lista de amigos si no está duplicado.

Lógica:

Obtiene el valor ingresado en el campo de texto.

Elimina espacios innecesarios.

Verifica si el nombre ya está en la lista.

Si es un nombre nuevo, lo agrega a la lista y actualiza la interfaz.

Si el nombre está duplicado, muestra un mensaje de advertencia y lo oculta después de 4 segundos.

3️⃣ Evento "Enter" para agregar nombres

Captura la tecla Enter en el campo de entrada para agregar nombres rápidamente sin necesidad de presionar un botón manualmente.

4️⃣ sortearAmigo()

Descripción: Realiza el sorteo de forma aleatoria eliminando participantes conforme se asignan.

Lógica:

Muestra un mensaje indicando que el sorteo ha comenzado.

Selecciona un nombre aleatorio de la lista.

Elimina al participante de la lista para evitar repeticiones.

Muestra el resultado del sorteo en la interfaz.

Si no quedan más nombres, muestra un mensaje final.

5️⃣ Evento del Botón de Sorteo

Asigna el evento click al botón para ejecutar la función sortearAmigo().


📌 Instrucciones de Uso

Ingresa un nombre en el campo de texto.

Presiona Enter o el botón para agregarlo.

Repite el proceso hasta completar la lista de participantes.

Haz clic en "Sortear" para iniciar el sorteo.

Los nombres se asignarán y se mostrará el resultado.

Cuando todos los nombres hayan sido sorteados, se mostrará un mensaje final.


🛠 Posibles Mejoras para La Segunda Etapa.

Implementar un sistema de emparejamiento en lugar de eliminación de nombres.

Agregar la opción de reiniciar el sorteo sin recargar la página.

Permitir la visualización de los nombres restantes antes del sorteo.
