# Teoría clase 03


Bibliografia recomendada:

https://refactoring.guru/es/design-patterns/
https://github.com/dileofrancoj/elite-web-developer-books/blob/main/Clean.Code.A.Handbook.of.Agile.Software.Craftsmanship.pdf

> Typescript ofrece soporte al feature de clases introducido en ES2015

## Pilares de POO
- Herencia
- Polimorfismo
- Abstracción
- Encapsulamiento

## ¿Cuándo usar clases?
- Abstracciones más claras para objetos complejos
- Herencia y polimorfismo
- Legibilidad y mantenimiento
- Integración con frameworks y bibliotecas

### Scope de las propiedades de clases
- Public: **public** visible dentro y fuera de la clase
- Protected: **protected** visible en la clase y para extensión
- Private: **private** visible solo en la clase
- Static: **static** Se puede acceder directamente desde la clase sin necesidad de una instancia.

### Getters y Setters

¿Cómo debemos acceder y modificar los atributos en caso de que lo necesitemos? Como el objetivo del principio de encapsulamiento es dar acceso solo a través de los métodos pertinentes, lo que suele hacerse crear métodos para **acceder** al valor de un atributo y métodos para **fijar** el valor de un atributo (bueno, siempre que veamos oportuno dar este tipo de accesos). Los métodos que permiten acceder al valor de un atributo se denominan "*getters*" (del verbo inglés "*get*", obtener) y los que fijan el valor de un atributo se denominan "*setters*" (del verbo inglés "*set*", fijar).

Los getters y setters  proporcionan una forma de acceder y modificar propiedades de un objeto de una manera controlada. Aquí hay algunas razones por las que puedes considerar utilizar getters y setters en tus objetos:

1. **Encapsulación:** Los getters y setters permiten encapsular el acceso a las propiedades de un objeto. Esto significa que puedes controlar cómo se accede y modifica una propiedad, lo que puede ayudar a mantener la integridad de los datos y prevenir modificaciones no deseadas.
2. **Validación de datos:** Los setters te permiten validar los datos antes de asignarlos a una propiedad. Puedes realizar comprobaciones como asegurarte de que un valor sea del tipo correcto, esté dentro de ciertos límites o cumpla con ciertas condiciones antes de asignarlo a la propiedad.

## Patrones de diseño

Son soluciones habituales a problemas que ocurren en el diseño de software. Son como plantillas personalizables para resolver un problema.

Un patrón de diseño es un **concepto** general para resolver un problema particular. No es algo que podamos copiar y pegar ya que dependerá de nuestro código.

### Tipos de patrones de diseño

- Patrones creacionales: Habla de como crear considerando la flexibilidad y la escalabilidad
- Patrones estructurales: Como abstraer el código en estructuras más grandes y flexibles
- Patrones de comportamiento: Como se comunicaran los objetos y que responsabilidades tendrán.

### Teoría de Patrones

- Patrón factory:
https://refactoring.guru/es/design-patterns/factory-method

- Patrón builder:
https://refactoring.guru/es/design-patterns/builder

- Patrón strategy:
https://refactoring.guru/es/design-patterns/strategy

- Patron Observer
https://refactoring.guru/es/design-patterns/observer

- Adapter
https://refactoring.guru/es/design-patterns/adapter

- Proxy
https://refactoring.guru/es/design-patterns/proxy