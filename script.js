document.getElementById("toggleSidebar").addEventListener("click", function () {
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");
    const columns = document.querySelectorAll(".column"); // Selecciona todas las columnas

    sidebar.classList.toggle("active");
    content.classList.toggle("active");

    // Verifica si la barra lateral está activa y ajusta el margen izquierdo de las columnas
    if (sidebar.classList.contains("active")) {
        // Cuando la barra lateral está activa, establece el margen izquierdo de las columnas en 0
        columns.forEach(function (column) {
            column.style.marginLeft = "0";
        });
    } else {
        // Cuando la barra lateral no está activa, restaura el margen izquierdo de las columnas a 50px
        columns.forEach(function (column) {
            column.style.marginLeft = "50px";
        });
    }
});

// Selector del botón
const sidebarButton = document.querySelector(".sidebar-button");

// Agrega un evento de clic al botón
sidebarButton.addEventListener("click", function () {
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");

    // Obtiene el estado actual del sidebar desde el atributo data-state
    const currentState = sidebarButton.getAttribute("data-state");

    if (currentState === "closed") {
        // Si el sidebar está cerrado, cambia el icono a una flechita hacia la izquierda
        sidebarButton.innerHTML = `
        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path clip-rule="evenodd" fill-rule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"></path>
      </svg>
        `;
        // Actualiza el estado del sidebar
        sidebarButton.setAttribute("data-state", "open");
        // Agrega la clase para abrir el sidebar y girar el icono
        sidebar.classList.add("active");
        content.classList.add("active");
        sidebarButton.classList.add("sidebar-open");
    } else {
        // Si el sidebar está abierto, cambia el icono a una flechita hacia la derecha
        sidebarButton.innerHTML = `
        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path clip-rule="evenodd" fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"></path>
        <path clip-rule="evenodd" fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"></path>
      </svg>
        `;
        // Actualiza el estado del sidebar
        sidebarButton.setAttribute("data-state", "closed");
        // Quita la clase para cerrar el sidebar y girar el icono
        sidebar.classList.remove("active");
        content.classList.remove("active");
        sidebarButton.classList.remove("sidebar-open");
    }
});

