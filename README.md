## BACK-END

Este es un proyecto para realizar el back-end para realizar playlists de películas (título, año, director, duración, clasificación) y museos (nombre, ubicación, descripción) con operaciones CRUD.

----

### 1.1 Add Movie

Este endpoint se usa para agregar alguna película a la base de datos
* endpoint: `/addMovie`
* método: `CREATE`
* errores: 

| Código | Mensaje | HTTP |
| ------------- | ------------- | ------------- |
| MovieAlredyExists | This movie already exists | 422 |

* response: HTTP status 200

----
