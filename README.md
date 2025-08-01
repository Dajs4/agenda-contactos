# 📱 Agenda de Contactos

Una aplicación moderna de gestión de contactos desarrollada con React, que permite agregar, buscar, visualizar y eliminar contactos con persistencia en localStorage.

## 🚀 Características

- ✅ **Formulario controlado** con validación en tiempo real
- ✅ **Persistencia de datos** con localStorage
- ✅ **Búsqueda de contactos** por nombre o correo
- ✅ **Validación de duplicados** (correos únicos)
- ✅ **Confirmación de eliminación** 
- ✅ **Feedback visual** para acciones del usuario
- ✅ **Diseño responsivo** con Tailwind CSS
- ✅ **Arquitectura por componentes** siguiendo buenas prácticas

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de construcción y desarrollo
- **Tailwind CSS** - Framework de CSS utility-first
- **Lucide React** - Biblioteca de iconos
- **LocalStorage** - Para persistencia de datos

## 📁 Estructura del Proyecto

```
agenda-contactos/
├── src/
│   ├── components/
│   │   ├── AgendaApp.jsx          # Componente principal
│   │   ├── FormularioContacto.jsx # Formulario para agregar contactos
│   │   ├── ListaContactos.jsx     # Lista de contactos
│   │   ├── Contacto.jsx           # Componente individual de contacto
│   │   └── BuscadorContactos.jsx  # Buscador de contactos
│   ├── App.jsx                    # Componente raíz
│   ├── main.jsx                   # Punto de entrada
│   └── index.css                  # Estilos globales
├── package.json
├── tailwind.config.js
├── vite.config.js
└── index.html
```

## 🔧 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar o descargar el proyecto**
   ```bash
   # Si tienes el proyecto en un repositorio
   git clone <url-del-repositorio>
   cd agenda-contactos
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar el proyecto en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - La aplicación estará disponible en `http://localhost:5173`

## 📋 Funcionalidades Detalladas

### 🔍 Búsqueda de Contactos
- Búsqueda en tiempo real por nombre o correo electrónico
- Filtrado automático de resultados

### ✏️ Formulario de Contacto
- **Campos requeridos**: Nombre, correo, teléfono
- **Validaciones**:
  - Campos no vacíos
  - Formato válido de correo electrónico
  - Prevención de correos duplicados
- **Estados del botón**: Habilitado/deshabilitado según validación
- **Feedback visual**: Mensajes de error y éxito

### 🗑️ Gestión de Contactos
- **Visualización**: Cards responsivas con información del contacto
- **Eliminación**: Confirmación antes de eliminar
- **Contador**: Muestra el número total de contactos

### 💾 Persistencia de Datos
- **Guardado automático**: Los contactos se guardan en localStorage
- **Carga automática**: Los contactos se recuperan al iniciar la aplicación
- **Sincronización**: Actualización automática cuando se agregan/eliminan contactos

## 🎨 Diseño y UX

- **Diseño responsivo**: Se adapta a móviles, tablets y desktop
- **Iconos intuitivos**: Lucide React para mejor UX
- **Transiciones suaves**: Hover effects y animaciones CSS
- **Colores consistentes**: Paleta de colores profesional
- **Accesibilidad**: Labels apropiados y estructura semántica

## 🧪 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Vista previa de la construcción
npm run preview

# Linting
npm run lint
```

## 📱 Uso de la Aplicación

1. **Agregar contacto**: Completa el formulario con nombre, correo y teléfono
2. **Buscar contacto**: Usa la barra de búsqueda para filtrar por nombre o correo
3. **Ver contactos**: Todos los contactos se muestran en cards organizadas
4. **Eliminar contacto**: Haz clic en el ícono de basura y confirma la eliminación

## 🔒 Validaciones Implementadas

- **Nombre**: Campo obligatorio, no puede estar vacío
- **Correo**: Campo obligatorio, formato válido, sin duplicados
- **Teléfono**: Campo obligatorio, no puede estar vacío

## 🎯 Conceptos de React Aplicados

- **useState**: Manejo de estado local en componentes
- **useEffect**: Efectos secundarios para localStorage
- **Props**: Comunicación entre componentes padre e hijo
- **Lifting State Up**: Estado global en componente padre
- **Formularios controlados**: Inputs controlados por estado
- **Renderizado condicional**: Mostrar/ocultar elementos según estado
- **Event handling**: Manejo de eventos de usuario

## 🚀 Posibles Mejoras

- [ ] Edición de contactos existentes
- [ ] Categorías o etiquetas para contactos
- [ ] Exportar/importar contactos
- [ ] Fotos de perfil
- [ ] Múltiples números de teléfono
- [ ] Integración con APIs externas
- [ ] Modo oscuro/claro

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.