# MA Store

Consiste en una web moderna y responsiva construida con React y Vite, diseñada para mostrar un catálogo de productos deportivos.

## Despliegue
El proyecto está desplegado en Vercel -> https://ma-store-psi.vercel.app
 
## Cumplimiento de la Rúbrica

* **Estructura React con Vite:** El proyecto fue inicializado con Vite y los componentes están ordenados lógicamente dentro de la carpeta `src/components/` y las vistas en `src/pages/`.
* **Uso de imágenes en assets:** Las imágenes estáticas y de prueba están correctamente ubicadas y consumidas desde la carpeta `src/assets/`.
* **Aplicación de sombras:** Se aplicó la propiedad `box-shadow` en las tarjetas de información, botones y componentes principales.
* **Ordenamiento con Flexbox:** Toda la maquetación principal está construida usando `display: flex`.
* **Fuente de Google Fonts:** El proyecto integra la tipografía `Figtree`.
* **Responsividad:** Mediante `Media Queries` de CSS, el sitio es 100% responsivo, siguiendo la guía de referencia.
* **Bordes CSS:** Se utilizó `border-radius` para suavizar las esquinas de los botones, imágenes y tarjetas flotantes.
* **Componente de Propuesta (Props):** Se crearon dos componentes que reciben propiedades (`props`), uno para la página de Desarrollador, recibiendo una imagen y la informacón asociada, y otro para la redirección del botón explorar colecciones (página en construcción)inyectando texto y un GIF animado.
* **Página de Perfil del Desarrollador:** Se creó una ruta (`/desarrollador`) que muestra una tarjeta con mi Nombre, Carrera, Ciudad y un enlace funcional a mi GitHub.
* **Documentación con Git/GitHub:** El desarrollo se llevó a cabo utilizando control de versiones, visualizable en el historial de commits del repositorio.
* **Animación CSS (Slide/Fade):** Se incorporó una animación personalizada utilizando, `transition` y `opacity` para que la tarjeta gire al realizar hover.
* **Rutas con React Router DOM:** Se implementó `BrowserRouter`, `Routes` y `Route` para navegar de forma fluida entre la página principal, el perfil del desarrollador y la página en construcción.
* **Uso de Dummy:** La información de las tarjetas se renderiza consumiendo un archivo de datos simulados (dummy data).
* **Despliegue en Vercel:** El código está desplegado, enlazado a GitHub para despliegues continuos.
