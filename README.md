# Contenido y distribución de clases

## Bibliografia obligatoria

A lo largo del curso veremos temas como

- Typescript
- Patrones de Diseño
- Librerías
- React
- Design System
- Buenas prácticas
- Arquitectura
- etc

Para esto, contamos con material de lectura obligatoria que nos acercará aún más a ser un desarrollador web de élite 🚀. Espero que disfruten esta bibliografia tanto como yo lo hago ✅

Link: [https://github.com/dileofrancoj/elite-web-developer-books]

## Distribución de clases

### 1. Typescript
- Clase 01: Introducción a Typescript (compilador, tipos básicos, types, clases)
- Clase 02: Webpack, Genéricos, type guards
- Clase 03: Patrones de diseño con TS (Factory, Builder, Strategy, Adapter, Observer)

### 2. Utilidades
- Clase 04: lib de utilidades (creación + funciones básicas)
- Clase 05: Funciones más complejas
- Clase 06: Testing con vitest + mutation testing (opcional)

### 3. Hooks
- Clase 07: Librería de hooks (creación + hooks básicos)
- Clase 08: Finalización de hooks + testing con @testing-library/hooks
- Clase 09: Desafío -> Challenge de Axios

### 4. Entrevista
- Clase 10: Live Coding - Writing Speed challenge

### 5. Storybook
- Clase 11: Storybook - Inicialización y componentes básicos. Teoría de DS
- Clase 12: Componentes + testing visual
- Clase 13: Finalización de componentes + despliegue

### 6. Proyecto integrador
- Clase 14: Inicio de proyecto. Definición de routes, lazy modules
- Clase 15: Autenticación y rutas protegidas con useAxios + Inicialización de Sentry
- Clase 16: Contexto de usuarios e interceptors para validar sesión
- Clase 17: Métricas frontend, issues, dashboards + GTM para sesiones y tracking

### 7. Arquitectura
- Clase 18: Design System (teoría de escalado, balancer, gateway, db y problemas de entrevista) + microservicios
- Clase 19: Amazon S3: Configuración de bucket para deployear proyecto en react, Vercel, CI/CD

### 8. NextJS
- Clase 20: Proyecto con NextJS

### 9. Sonar
- Clase 21: Integración con SonarQube

### Workshop Opcionales de la comunidad
- Monorepo con Turbo
- Microfrontends
- Integración con firebase
------------------------------------------------

## Especificaciones del proyecto

- No podes acceder a ningúna ruta a menos que estés logueado
- Se debe guardar el JWT en el storage y se debe validar en cada request al server mediante un interceptor
    - Los datos de autenticación deben estar en un contexto
- La página principal debe tener carouseles de productos por categorias disponibles en el storybook
- La página individual del producto debe ser una ruta lazy
- Se debe contar con un test coverage de al menos 80%
- Se debe tener observabilidad de la aplicación en todo momento y debe buscarse que el P90 del FCP no sea mayor a 1.5s
- La navbar debe estar comunicada en tiempo real con el store de producto
- El carrito debe estar comunicado entre todas las pestañas
- Todas las funcionalidades comúnes deben estar en una librería de utilidades
- Todos los componentes comúnes deben estar en una libreria de componentes visuales
- Todos los custom hooks deben estar en una librería de hooks
- Checkout
- Opcional:
    - Diagrama del funnel de compra
    - Integración con firebase para productos y manejo de stock