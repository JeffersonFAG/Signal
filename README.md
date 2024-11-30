# Dashboard de Gestión de Marcas

## Descripción

Este proyecto consiste en un **Tablero de Gestión de Marcas** diseñado para facilitar la administración de marcas dentro de una plataforma. El tablero incluye un **sidebar lateral** para navegación y un **panel izquierdo** para gestionar las opciones de cada marca registrada. Los usuarios tienen la capacidad de **agregar, editar y eliminar marcas**, además de realizar un **monitoreo detallado** de las marcas registradas en el sistema.

## Diseño Técnico

El diseño de este proyecto sigue principios de **componentización** para asegurar una implementación limpia, modular y fácil de mantener. Para la gestión de estados, se ha optado por **Zustand**, un manejador de estados sencillo pero poderoso, que proporciona una solución escalable y eficiente para el manejo de datos dentro de la aplicación.

## Instrucciones para Iniciar el Proyecto

Para comenzar a trabajar con este proyecto, sigue los pasos a continuación:

1. **Instalar dependencias**  
   Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

   ```bash
   npm install
   ```

## Tecnologías Utilizadas

Este proyecto hace uso de las siguientes tecnologías para garantizar una experiencia de desarrollo y usuario optimizada:

- **Next.js**: Framework basado en React para el desarrollo de aplicaciones web escalables y rápidas.
- **Axios**: Biblioteca para hacer solicitudes HTTP de manera sencilla.
- **Zustand**: Manejador de estados ligero y sencillo para React, ideal para la gestión de estados globales.
- **Tailwind CSS**: Framework de CSS que permite un diseño altamente personalizable y eficiente, con clases utilitarias.
- **HeroIcons**: Conjunto de iconos SVG libres, fáciles de usar, ideales para integrarlos en interfaces modernas.

## Estructura del Proyecto

La estructura del proyecto está organizada en componentes reutilizables para facilitar su mantenimiento y escalabilidad. Aquí se describen los principales componentes:

- **Sidebar**: Barra lateral de navegación con las opciones del panel.
- **Panel**: Área principal donde se gestionan las marcas, incluyendo formularios para agregar, editar o eliminar marcas.
- **Gestión de Marcas**: Vista que muestra las marcas registradas y sus detalles, permitiendo al usuario realizar un seguimiento de su información.
