# Todo INVGATE

Proyecto creado como desafio para ingresar a INVGATE

## Tabla de contenido
  - [Tecnologías](#tecnologías)
  - [Pre-requisitos](#pre-requisitos)
  - [Variables de entorno](#Variables-de-entorno)
  - [Scripts](#scripts)
  - [Políticas](#políticas)
  - [Pautas de contribución](#pautas-de-contribución)
    - [Branchs](#branchs)
    - [Commits](#commits)
    - [Pull requests](#pull-requests)
  - [Scaffolding](#scaffolding)
  - [Imágenes en AWS](#imágenes-en-aws)
  - [Tutoriales](#tutoriales)
    - [Configurar librería Dali](#configurar-librería-dali)
    - [Configurar librería MPP-UI](#configurar-librería-mpp-ui)

## Tecnologías
El stack tecnológico que tiene el proyecto es el siguiente:
* React: 18.2.0
* react-router: 6.23.1
* redux: 9.1.2
* cypress: 13.10.0
* @reduxjs/toolkit


  
## Pre-requisito
Tener instalado la versión de node **`^20.11.0`**

## Variables de entorno
- `.env` - Variables para ambiente.


## Scripts

- Iniciar el proyecto LOCAL

  - Instalación de dependencias `npm install`
  - Levantar en local con `npm run start`
  - El proyecto corre en `http://localhost:5000`
  - Iniciar el servidor para la base de datos con `npx json-server db.json` que correrá en el puerto 3000
  - Iniciar Cypress con `npx cypress open`


    ```
    $ npm run start:local
    ```

- Compilar el proyecto

  ```
  $ npm build
  ```

- Ejecutar las pruebas unitarias `npm run test`

  ```
  $ npm run test
  ```

## Políticas

> Más detalles en [Coding Style Guide.](/coding-styleguide.md)

- Revisar el código en el Pull Request cuidadosamente.
- Ser muy asertivo en los comentarios de los Pull Requests.
- Evitar la complejidad en los métodos.

## Pautas de contribución

### Branchs
Al momento de crear el branch debemos tener en consideración el número de ticket y una descripción breve, además de que debe ser una rama limpia del main despues de haber hecho un pull del mismo.

tiene la siguiente nomenclatura 

- Si es un feature: `feature([jira-ticket]): [descripción-breve]`
- Si es un issue: `bug([jira-ticket]): [descripción-breve]`
- Si es un hotfix: `hotfix([jira-ticket]): [descripción-breve]`
- Si es un refactor: `refactor([jira-ticket]): [descripción-breve]`

ejemplo:
```
$ git checkout -b "feature(MGG-1293): checkout-payment-types"
```

### Commits
Usar commits más atómicos es decir si trabajo sobre una pantalla o contexto considerarlo en mi commit dentro de un parantesis

ejemplo:

```
$ git commit -am "feat(checkout): added payment types component"
```

### Pull requests
Cuando creemos los PR consideremos el numero de ticket de Jira además del tipo de incidencia que es, tiene la siguiente nomenclatura.
- Si es un feature: `feature([jira-ticket]): [descripción-breve]`
- Si es un issue: `bug([jira-ticket]): [descripción-breve]`
- Si es un hotfix: `hotfix([jira-ticket]): [descripción-breve]`
- Si es un refactor: `refactor([jira-ticket]): [descripción-breve]`

## Scaffolding

En el siguiente detalle podemos revisar el scaffolding a detalle

<details>
<summary><b>Expandir scaffolding</b></summary>

```scaffolding
Project/
├─ coverage/
├─ cypress/
├─ node_modules/
├─ public/
│ ├─ favicon.ico
│ ├─ index.html
│ ├─ robots.txt
├─ src/
│ ├─ core/
│ │ ├─ services/
│ │ │ ├─ todo/
│ │ │ │ ├─ todo.service.ts
│ │ │ │ ├─ interfaces/
│ │ │ │ │ ├─ index.ts
│ │ │ │ │ ├─ todo.dto.ts
│ │ │ │ ├─ helpers, converters, config, etc/
│ │ │ │ │ ├─ index.ts
│ │ │ │ ├─ enums/
│ │ │ │ │ ├─ index.ts
│ │ │ │ │ ├─ todo.enum.ts
│ │ │ ├─ index.ts
│ │ ├─ redux/
│ │ │ ├─ todo/
│ │ │ │ ├─ async-thunks/
│ │ │ │ │ ├─ todo-action-1.ts
│ │ │ │ │ ├─ todo-action-2.ts
│ │ │ │ │ ├─ index.ts
│ │ │ │ ├─ constants.ts
│ │ │ │ ├─ index.ts
│ │ │ │ ├─ reducers.ts
│ │ │ │ ├─ selectors.ts
│ │ │ │ ├─ slice.ts
│ │ │ ├─ enhancers.ts
│ │ │ ├─ epics.ts
│ │ │ ├─ index.ts
│ │ │ ├─ middlewares.ts
│ │ │ ├─ reducers.ts
│ │ ├─ model/
│ │ │ ├─ interfaces/
│ │ │ │ ├─ index.ts
│ │ │ │ ├─ todo/
│ │ │ │ │ ├─ index.ts
│ │ │ │ │ ├─ todo.interface.ts
│ │ │ ├─ enums/
│ │ │ │ ├─ todo/
│ │ │ │ │ ├─ index.ts
│ │ │ │ │ ├─ todo.enum.ts
│ │ │ │ ├─ index.ts
│ │ │ ├─ index.ts
│ │ ├─ constants/
│ │ │ ├─ index.ts
│ │ │ ├─ products.ts
│ │ ├─ hooks/
│ │ │ ├─ index.ts
│ │ │ ├─ hook-1.ts
│ │ ├─ contexts/
│ │ │ ├─ index.ts
│ │ │ ├─ context-1.tsx
│ ├─ screens/
│ │ ├─ home/
│ │ │ ├─ index.ts
│ │ │ ├─ todo/
│ │ │ │ ├─ index.ts
│ │ │ │ ├─ todo.tsx
│ │ │ │ ├─ todo.scss
│ │ │ ├─ item-todo/
│ ├─ shared/
│ ├─ http/
│ ├─ assets/
│ ├─ scss/
│ ├─ index.css
│ ├─ index.js
├─ .gitignore
├─ package.json
├─ README.md
```
</details>


``
``

### Contributors
Parnasus84
