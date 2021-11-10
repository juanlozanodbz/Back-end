## BACK-END
Juan Lozano Derbez & Rodrigo Cravioto Caballero

Este es un proyecto para realizar el back-end para realizar playlists de películas (título, año, director, duración, clasificación) y museos (nombre, ubicación, descripción) con operaciones CRUD.

----

### 1.1 Add Movie

Este endpoint se usa para agregar alguna película a la base de datos
* endpoint: `/addMovie`
* método: `CREATE`
* errores: 

| Código | Mensaje | HTTP |
| ------------- | ------------- | ------------- |
| InvalidBodyException | Field must be string | 422 |
| InvalidBodyException | Title must be between 5 and 50 characters | 422 |
| InvalidBodyException | Description must be between 50 and 250 characters | 422 |

* response: HTTP status 200

----

### 1.2 Read Movie

Este endpoint se usa para visualizar alguna película a la base de datos
* endpoint: `/readMovie`
* método: `READ`
* errores: 

| Código | Mensaje | HTTP |
| ------------- | ------------- | ------------- |
| Forbidden | | 403 |

* response: HTTP status 200

----

### 1.3 Read Movies

Este endpoint se usa para visualizar las películas de la base de datos
* endpoint: `/readMovies`
* método: `READ`
* errores: 

| Código | Mensaje | HTTP |
| ------------- | ------------- | ------------- |
| Forbidden | | 403 |

* response: HTTP status 200

----


### 1.4 Update Movie

Este endpoint se usa para actualizar alguna película a la base de datos
* endpoint: `/updateMovie`
* método: `UPDATE`
* errores: 

| Código | Mensaje | HTTP |
| ------------- | ------------- | ------------- |
| InvalidBodyException | Field must be string | 422 |
| InvalidBodyException | Title must be between 5 and 50 characters | 422 |
| InvalidBodyException | Description must be between 50 and 250 characters | 422 |

* response: HTTP status 200

----

### 1.5 Delete Movie

Este endpoint se usa para borrar películas de la base de datos
* endpoint: `/deleteMovie`
* método: `DELETE`
* errores: 

| Código | Mensaje | HTTP |
| ------------- | ------------- | ------------- |
| Forbidden | | 403 |

* response: HTTP status 200

----

### 2.1 Add Museum

Este endpoint se usa para agregar algun museo a la base de datos
* endpoint: `/addMuseum`
* método: `CREATE`
* errores: 

| Código | Mensaje | HTTP |
| ------------- | ------------- | ------------- |
| InvalidBodyException | Field must be string | 422 |
| InvalidBodyException | Title must be between 5 and 50 characters | 422 |
| InvalidBodyException | Description must be between 50 and 250 characters | 422 |

* response: HTTP status 200

----

### 2.2 Read Museum

Este endpoint se usa para visualizar algun museo de la base de datos
* endpoint: `/readMuseum`
* método: `READ`
* errores: 

| Código | Mensaje | HTTP |
| ------------- | ------------- | ------------- |
| Forbidden | | 403 |

* response: HTTP status 200

----

### 2.3 Read Museums

Este endpoint se usa para visualizar los museos de la base de datos
* endpoint: `/readMuseums`
* método: `READ`
* errores: 

| Código | Mensaje | HTTP |
| ------------- | ------------- | ------------- |
| Forbidden | | 403 |

* response: HTTP status 200

----


### 2.4 Update Museum

Este endpoint se usa para actualizar algun museo a la base de datos
* endpoint: `/updateMuseum`
* método: `UPDATE`
* errores: 

| Código | Mensaje | HTTP |
| ------------- | ------------- | ------------- |
| InvalidBodyException | Field must be string | 422 |
| InvalidBodyException | Title must be between 5 and 50 characters | 422 |
| InvalidBodyException | Description must be between 50 and 250 characters | 422 |

* response: HTTP status 200

----

### 2.5 Delete Museum

Este endpoint se usa para borrar museos de la base de datos
* endpoint: `/deleteMuseum`
* método: `DELETE`
* errores: 

| Código | Mensaje | HTTP |
| ------------- | ------------- | ------------- |
| Forbidden | | 403 |

* response: HTTP status 200

----
