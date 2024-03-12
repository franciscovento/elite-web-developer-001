## Tareas

### Consumo de API's

- Realizar un proyecto con webpack y typescript (SIN FRAMEWORK) para mostrar en pantalla los recursos de una API

Recomendaciones de API

- PokeAPI
- Rick&Morty API
- Chucknorris io
- The MovieDB API
- The MealDB API

### Algoritmos

- canSum: Desarrollar un algoritmo que tome 2 parámetros: x: number, arr: number[] y verifique si sumando 2 números del arreglo, se puede generar al número x.

Ejemplos:

```bash

x = 8
arr = [5,3,4,7]

Output: true

x = 4
arr = [5,3,2,7]
Output: false
```

Dar la complejidad algorítmica del problema

<hr />

### Tarea clase 03

Implementar una aplicación React que traiga elementos de una API (personajes, personas o bebidas). La aplicación debe contar con:

- Una función genérica para consumir la API
- Interfaces propias de la entidad a consumir (personajes, personas o bebidas)
- Botones de filtrado implementando una función de filtros basada en un patrón strategy para filtrar lo que traiga la API por criterios establecidos (por ejemplo, si se trata de un personaje quiero filtrar por estado, sexo, etc. Si se trata de un producto quiero filtrar por marca, etc)
- Los botones de filtrado deben ser construidos mediante un factory simple
