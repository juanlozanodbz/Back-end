## BACK-END
Juan Lozano Derbez y Rodrigo Cravioto Caballero

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

Este endpoint se usa para visualizar las películas de la base de datos
* endpoint: `/deleteMovie`
* método: `DELETE`
* errores: 

| Código | Mensaje | HTTP |
| ------------- | ------------- | ------------- |
| Forbidden | | 403 |

* response: HTTP status 200

----
