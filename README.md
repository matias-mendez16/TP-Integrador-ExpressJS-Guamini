# TP-Integrador-ExpressJS-Guamini

# API REST de Localidades - Express JS

Proyecto realizado como Trabajo Integrador utilizando Node.js y Express JS.

La API permite consultar localidades de la Provincia de Buenos Aires mediante distintos endpoints, devolviendo siempre respuestas en formato JSON.

---

## Tecnologías utilizadas

* Node.js
* Express JS
* File System (`fs`)
* JSON

---

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/matias-mendez16/TP-Integrador-ExpressJS-Guamini.git
```

### 2. Ingresar al proyecto

```bash
cd TP-Integrador-ExpressJS-Guamini
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar el servidor

```bash
node index.js
```

---

## Puerto utilizado

El servidor corre en:

```bash
http://localhost:3000
```

---

# Endpoints

## Ruta raíz

### GET /

Documentación básica de la API y listado de endpoints disponibles.

### Respuesta

```json
{
  "status": 200,
  "message": "API de localidades de la Provincia de Buenos Aires",
  "data": {
    "endpoints": [
      {
        "path": "/localidades",
        "description": "Lista completa de localidades"
      },
      {
        "path": "/localidades/:id",
        "description": "Busca localidad por ID"
      },
      {
        "path": "/localidades/buscar?nombre=nombrelocalidad",
        "description": "Busca localidad por nombre"
      }
    ]
  }
}
```

---

## Obtener todas las localidades

### GET /localidades

Devuelve el listado completo de localidades.

### Respuesta

```json
{
  "status": 200,
  "message": "Listado completo",
  "data": []
}
```

---

## Buscar localidad por ID

### GET /localidades/:id

Busca una localidad mediante su ID.

### Ejemplo

```bash
/localidades/1
```

### Respuesta exitosa

```json
{
  "status": 200,
  "message": "Localidad encontrada",
  "data": {
    "id": "1",
    "nombre": "La Plata"
  }
}
```

### Respuesta error

```json
{
  "status": 404,
  "message": "Localidad no encontrada"
}
```

---

## Buscar localidad por nombre

### GET /localidades/buscar?nombre=

Busca localidades por coincidencia de nombre.

La búsqueda:

* No distingue mayúsculas/minúsculas.
* Ignora acentos.

### Ejemplo

```bash
/localidades/buscar?nombre=plata
```

### Respuesta exitosa

```json
{
  "status": 200,
  "message": "Resultados encontrados",
  "data": []
}
```

### Error si falta el parámetro

```json
{
  "status": 400,
  "message": "Debe indicar un parámetro 'nombre'"
}
```

### Error si no hay resultados

```json
{
  "status": 404,
  "message": "No se encontraron localidades"
}
```

---

## Manejo de rutas inexistentes

Si el usuario accede a una ruta que no existe, la API responde:

```json
{
  "status": 404,
  "message": "Ruta inexistente"
}
```

---

# Características implementadas

Servidor con Express JS
Lectura de archivo JSON usando `fs`
Respuestas en formato JSON
Códigos de estado HTTP correctos
Parámetros de ruta (`req.params`)
Parámetros query (`req.query`)
Manejo de errores y rutas inexistentes

---

# Matías Méndez
