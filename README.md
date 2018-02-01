# Cardify

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

***
## Objetivo

Implementar un plugin de jQuery que dado un _contenedor_ debe buscar todas las
imágenes que encuentre dentro del _contenedor_ y reemplazarlas por un nuevo
elemento `<figure>` que contenga la imagen (`<img>`) además de un `<figcaption>`
con el texto del atributo `alt` de la imagen.

## Integrantes

* Melissa Yauri
* Silvia Fuentes

## Herramientas

* Jquery.
* Babel(transpilador).
* html,css,javascript.

## Procedimiento de trabajo

1.- Para la creación de la librería, se procede con la inicialización del comando `npm.init`, para la creación del objeto JSON.
    En este archivo debe escribirse el siguiente comando:
    `"build": "babel --presets env src -d public/js"`,
    con el fin de que se realize la sincronización de babel con las carpetas donde se ejecutará los archivos en ES5.

2.- Luego se ejecuta el comando `npm install --save-dev babel-cli babel-preset-env`, para instalar babel.
    Esto producirá el archivo `package-lock.json` y `node_modules`.

3.- Crear el archivo `.babelrc` y incorporar lo siguiente.
    { "presets": ["env"] }

4.- Y también crear el archivo `.gitignore`, para que git, ciertos archivos los ignore y no los subas como por ejemplo el node_modules. En este archivo se debe de escribir los archivos que no se desean subir.Se incorpora lo siguiente:
    node_modules/
    .DS_Store
    Thumbs.db

5.- En el archivo `app.js` ubicados en la carpeta src, se procede con llamar al plugin con la función
    $('#container-img').cardify();

6.- En el archivo `index.js` ubicados en la carpeta src se encuentra la ejecución del plugin `Cardify`.
7.- Finalmente para hacer la conversión de ES6 a ES5, se ejecuta en el `comand node.js`, lo siguiente `npm install --save-dev babel-cli` y luego `npm run bluid`, con ello convertiremos a ES5, que se ubica en la carpeta public.


## Desarrollo
![GIF](public/assets/imagenes/gif-demo.gif)

Mediante el plugin cardify, lo que se realiza es lo siguiente:

1. Las imágenes son envueltas por la etiqueta `figure`
2. Luego en esa etiqueta se le adiciona la etiqueta `figcaption`, que contiene el atributo `alt`, de la imagen.
3. Finalmente se realiza un efecto `hover`, para que aparezca el atributo `alt`, que se encuentra en la etiqueta `figure`

***
## Documentacion

### ¿Qué es Cardify?

Cardify es una herramienta que le permitirá mostrar de manera dinamica, el texto equivalente (alt), de cada imagen, dentro de un contenedor específico.

### Funcionalidad

Utilizando Cardify, automaticamente:
1. Las imágenes son envueltas por la etiqueta `figure`
2. Luego en esa etiqueta se le adiciona la etiqueta `figcaption`, que contiene el atributo `alt`, de la imagen.
3. Finalmente se realiza un efecto `hover`, para que aparezca el atributo `alt`, que se encuentra en la etiqueta `figure`

### Uso

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="index.js"></script>
```

```js
// `container` es el selector del contenedor donde se buscarán todas las
// imágenes a ser procesadas.
$(container).cardify({});