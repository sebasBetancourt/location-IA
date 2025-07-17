#  Generador de Coordenadas Falsas para IA

## Descripción del problema
Este proyecto fue creado con el propósito de generar coordenadas GPS falsas.
Su uso principal es para entrenar Inteligencias Artificiales que requieren datos de geolocalización sintéticos para pruebas, simulaciones o análisis.

El programa permite:

Generar una única coordenada aleatoria.

Generar múltiples coordenadas falsas y almacenarlas en un archivo .json.

Generar coordenadas falsas dentro de los límites geográficos de una ciudad real de Colombia, consultando dichos límites por medio de una API pública.

## Librerías utilizadas
Librería	Descripción	Link oficial
faker	Genera datos falsos (ubicación)	https://fakerjs.dev/
chalk	Colorea la consola	https://github.com/chalk/chalk
axios	Hace peticiones HTTP	https://axios-http.com/

La principal librería utilizada para las coordenadas es @faker-js/faker.

## ¿Cómo se implementó?
Se utilizó faker para generar coordenadas GPS falsas.

Se utilizó axios para consultar la API de Nominatim de OpenStreetMap y obtener los límites geográficos (bounding box) de una ciudad especificada por el usuario.

Se utilizó chalk para mejorar la presentación visual del menú y mensajes en la terminal.

Se creó un menú interactivo utilizando readline que ofrece al usuario varias opciones.

## Instrucciones de instalación y uso
1️-  Clonar el repositorio:

```
  git clone https://github.com/sebasBetancourt/location-IA.git
  
  cd location-IA
```
2️-  Instalar dependencias:

```
npm install
```
3️-  Ejecutar el programa:

```
node index.js
```
4️- Uso:

El programa mostrará este menú en consola:


```
1. Generar una única coordenada falsa.
2. Generar múltiples coordenadas y guardarlas en un archivo JSON.
3. Generar múltiples coordenadas en una zona específica.
0. Salir
```
Selecciona la opción escribiendo su número.
Por ejemplo, para generar coordenadas de Bogotá, el programa consultará la API para delimitar la zona automáticamente.

## Link al video de presentación
https://www.canva.com/design/DAGtZKhCMvQ/NjClrf4-LwFDJDP9wEEfXw/edit?utm_content=DAGtZKhCMvQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton