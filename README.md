# Node-Mysql

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

API REST de tipo **CRUD de empleados** hecha con Node.js, Express y MySQL usando el driver `mysql2` directamente (sin ORM). Las consultas se escriben en SQL crudo con parámetros, lo que lo hace útil como ejercicio para entender cómo se conecta Node a una base relacional sin intermediarios.

Ejercicio de aprendizaje.

## Stack

- **Runtime:** Node.js (ES Modules, `"type": "module"`)
- **Framework:** Express 4
- **Driver BD:** mysql2 (API de promesas, pool de conexiones)
- **BD:** MySQL
- **Dev:** nodemon

## Estructura

```
Node-Mysql/
├── db/
│   └── database.sql              # Schema y datos seed
├── src/
│   ├── index.js                  # Arranque del servidor
│   ├── db.js                     # Pool de conexiones MySQL
│   ├── routes/
│   │   ├── employees.routes.js
│   │   └── index.routes.js
│   └── controllers/
│       ├── employees.controller.js
│       └── index.controller.js
└── package.json
```

## Esquema de la BD

Base: `companydb`, tabla `employees`:

| Campo  | Tipo     | Notas                      |
| ------ | -------- | -------------------------- |
| id     | INT      | PK, AUTO_INCREMENT         |
| name   | VARCHAR  | 45 caracteres, opcional    |
| salary | INT      | 5 dígitos, opcional        |

## Endpoints

Base: `http://localhost:3000/api`

| Método | Ruta              | Descripción                |
| ------ | ----------------- | -------------------------- |
| GET    | `/employees`      | Lista todos los empleados  |
| GET    | `/employees/:id`  | Obtiene un empleado por id |
| POST   | `/employees`      | Crea un empleado           |
| PATCH  | `/employees/:id`  | Actualiza un empleado      |
| DELETE | `/employees/:id`  | Elimina un empleado        |

## Setup

1. Tener MySQL corriendo localmente (usuario `root`, puerto 3306).
2. Cargar el schema:

```bash
mysql -u root -p < db/database.sql
```

3. Ajustar credenciales en `src/db.js` si fuera necesario.
4. Instalar y arrancar:

```bash
npm install
npm run dev
```

## Issues conocidos

- El archivo `db/database.sql` tiene un typo: dice `CREATE DATABASE IF NOT EXIST` cuando debería ser `IF NOT EXISTS` (con `S` final). Corregir antes de ejecutar.
- Credenciales de la BD están hardcodeadas en `src/db.js` (deberían moverse a variables de entorno).

## Autor

Jean Caicedo — [@JeanCaicedo](https://github.com/JeanCaicedo)
