# Navy Travels — V1

Primera versión del sitio web institucional de **Navy Travels**, una agencia de viajes y turismo ubicada en Miraflores, Lima. Esta entrega presenta la información principal de la agencia y permite iniciar una cotización mediante WhatsApp.

> **Versión actual:** `v1.0.0` — primera entrega funcional del frontend.

## Ver el proyecto

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/suk033/Navy-Travels.git
   cd Navy-Travels
   ```

2. Iniciá un servidor local:

   ```bash
   python -m http.server 8000
   ```

3. Abrí [http://localhost:8000](http://localhost:8000) en el navegador.

También es posible abrir `index.html` directamente, aunque el servidor local representa mejor el funcionamiento de una publicación web.

## Funcionalidades de la V1

- Diseño adaptable para computadoras, tablets y celulares.
- Navegación responsive con menú móvil.
- Presentación institucional, misión y propuesta de valor.
- Catálogo visual de servicios y destinos.
- Datos de contacto y acceso directo a WhatsApp.
- Formulario de cotización con validaciones del lado del cliente.
- Mensaje de cotización preparado automáticamente para WhatsApp.
- Estructura semántica y estados de accesibilidad.

## Tecnologías

- HTML5
- CSS3
- JavaScript

El proyecto no requiere frameworks, dependencias ni proceso de compilación.

## Estructura

| Archivo | Responsabilidad |
|---|---|
| `index.html` | Contenido y estructura semántica del sitio |
| `styles.css` | Diseño visual, responsive y estados de accesibilidad |
| `script.js` | Navegación móvil, validaciones y cotización por WhatsApp |

## Alcance de esta versión

La V1 es una entrega exclusivamente frontend. El formulario no almacena información ni utiliza un backend: valida los campos y abre WhatsApp con el mensaje preparado.

Las fotografías se cargan desde Unsplash y las fuentes desde Google Fonts. El logotipo textual es provisional y las direcciones definitivas de las redes sociales deben confirmarse antes de una publicación comercial.

## Próximas mejoras

Las mejoras y correcciones se administrarán mediante [GitHub Issues](https://github.com/suk033/Navy-Travels/issues), utilizando ramas independientes y Pull Requests para conservar un historial claro del desarrollo.

Posibles evoluciones:

- Incorporación de recursos visuales oficiales.
- Mejoras del diseño y las animaciones.
- Integración de un backend para almacenar cotizaciones.
- Administración dinámica de destinos y promociones.

## Versión

Esta entrega está identificada mediante el tag [`v1.0.0`](https://github.com/suk033/Navy-Travels/releases/tag/v1.0.0).

## Autor

Proyecto académico desarrollado como práctica de frontend, control de versiones y buenas prácticas con Git y GitHub por:

- Bernny Santos Danfer Gordillo Vallejos
- Jimmy Andres Padilla Lopez
- Braulio Jesus Javier Buendia
- Hedy Denilson Perez Unocc
