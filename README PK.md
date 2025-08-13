# Instrucciones para Prueba Técnica: Pokédex en React

## Objetivo
Desarrollar una aplicación Pokédex que muestre los 151 Pokémon originales de la región Kanto con funcionalidades de búsqueda, filtrado y gestión de favoritos.

## Requisitos técnicos obligatorios

### 1. Consumo de APIs
- Utilizar la PokéAPI según los endpoints proporcionados
- Implementar optimización de llamadas a la API (evitar duplicados, cachear respuestas)

### 2. Funcionalidades principales
- **Listado completo** de los 151 Pokémon de Kanto
- **Búsqueda** por nombre o ID de Pokémon
- **Filtrado** por tipo de Pokémon
- **Sistema de favoritos** con persistencia en localStorage
- **Filtro** para mostrar solo Pokémon favoritos

### 3. Estructura del proyecto
- Organización modular de componentes
- Gestión de estado adecuada (Context API, Redux o similar)
- Hooks personalizados para lógica reutilizable

## Especificaciones técnicas

### Endpoints a utilizar:
```
- Listado Pokémon: https://pokeapi.co/api/v2/pokemon?limit=151
- Detalle Pokémon: https://pokeapi.co/api/v2/pokemon/{id}
- Imágenes: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/{pokemonId}.png
- Listado tipos: https://pokeapi.co/api/v2/type
- Detalle tipo: https://pokeapi.co/api/v2/type/{id}
```

### Requisitos de implementación:
1. **Componente de listado**:
   - Mostrar tarjetas de cada Pokémon con imagen, nombre, número, tipos y botón para marcar o desmarcar favorito 

2. **Componente de búsqueda**:
   - Campo de texto para buscar por nombre o ID
   - Búsqueda en tiempo real (con retraso al ingresar texto)

3. **Filtro por tipos**:
   - Selector desplegable con todos los tipos disponibles
   - Filtrado inmediato al seleccionar un tipo
   - Opción "Todos" para resetear el filtro

4. **Sistema de favoritos**:
   - Icono/botón para marcar/desmarcar favoritos en cada tarjeta
   - Persistencia en localStorage
   - Filtro para mostrar solo favoritos
   - Los favoritos deben persistir al recargar la página

5. **Optimización**:
   - Evitar llamadas duplicadas a la API
   - Implementar caché de respuestas
   - Uso de memoización donde sea necesario

6. **Puntos extra**:
   - Posibilidad de cambiarle el nombre (apodo) a los marcados como favoritos

## Criterios de evaluación
- **Funcionalidad**: Cumplimiento de todos los requisitos
- **Código**: Limpieza, organización y buenas prácticas
- **Performance**: Optimización de llamadas API y rendimiento
- **UX/UI**: Interfaz intuitiva y experiencia de usuario
- **Extras**: Implementación de TypeScript (opcional)

## Tecnologías recomendadas
- React (v18+)
- TypeScript (opcional pero valorado)
- Context API, Redux o similar para gestión de estado
- Uso de algún framework como Bootstrap, Tailwind CSS o módulos CSS para estilos
- Axios o Fetch para llamadas API

## Tiempo estimado
Se espera que la prueba requiera máximo 2 horas de desarrollo.