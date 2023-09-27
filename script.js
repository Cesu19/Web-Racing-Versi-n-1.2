// Espera a que la página se cargue completamente
window.addEventListener('load', function () {
    // Simula pantalla de carga
    setTimeout(function () {
        // Ocultar el elemento .loader
        document.querySelector('.loader').style.display = 'none';
    }, 2000);
});

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
            column.style.marginLeft = "0";
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

// Selector de todas las columnas
const columns = document.querySelectorAll(".column");

// Itera sobre cada columna
columns.forEach((column) => {
    // Encuentra el título (H2) y el párrafo (P) dentro de la columna
    const title = column.querySelector("h2");
    const paragraph = column.querySelector("p");
    const h1 = column.querySelector("h1");

    // Agrega un evento para mostrar el párrafo cuando el cursor entra en la columna
    column.addEventListener("mouseenter", () => {
        paragraph.style.opacity = "1";
        h1.style.opacity="1";
    });

    // Agrega un evento para ocultar el párrafo cuando el cursor sale de la columna
    column.addEventListener("mouseleave", () => {
        paragraph.style.opacity = "0";
        h1.style.opacity="0";
    });
});

// Itera sobre cada columna
columns.forEach((column) => {
    // Encuentra la capa superpuesta dentro de la columna
    const overlay = column.querySelector(".overlay");
    let isHovered = false;

    // Agrega un evento para cambiar la opacidad de la capa superpuesta al pasar el cursor sobre la columna
    column.addEventListener("mouseenter", () => {
        if (!isHovered) {
            overlay.style.opacity = "0.8"; // Cambia la opacidad de la capa superpuesta a 0.7 cuando el cursor entra en la columna
            isHovered = true;
        }
    });

    // Agrega un evento para restaurar la opacidad de la capa superpuesta cuando el cursor sale de la columna
    column.addEventListener("mouseleave", () => {
        overlay.style.opacity = "0"; // Restaura la opacidad de la capa superpuesta a 0 (invisible) cuando el cursor sale de la columna
        isHovered = false;
    });
});

// Itera sobre cada columna
columns.forEach((column) => {
    // Encuentra el h2, el nuevo h1 y el párrafo dentro de la columna
    const h2 = column.querySelector("h2");
    let isHovered = false;

    // Agrega un evento para mostrar el nuevo h1 y ocultar el h2 cuando el cursor entra en la columna
    column.addEventListener("mouseenter", () => {
        if (!isHovered) {
            h2.style.display = "none"; // Oculta el h2
            isHovered = true;
        }
    });

    // Agrega un evento para restaurar el estado original cuando el cursor sale de la columna
    column.addEventListener("mouseleave", () => {
        h2.style.display = "block"; // Muestra nuevamente el h2
    
        isHovered = false;
    });
});
