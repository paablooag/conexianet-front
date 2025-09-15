# ConnexiaNet Frontend

Landing page para ConnexiaNet - Asistente Digital de Relaciones Empresariales (ADRE)

## 🚀 Características

- **Landing page explicativa** con diseño futurista
- **Componentes reutilizables** (Header, Footer, Button)
- **Formularios de autenticación** (Login/Registro con doble verificación de email)
- **Diseño responsive** optimizado para todos los dispositivos
- **Integración con API backend** para autenticación
- **Transiciones suaves** entre formularios
- **Validaciones en tiempo real** con feedback visual

## 🛠️ Tecnologías

- **Nuxt 3** - Framework de Vue.js
- **Tailwind CSS** - Framework de CSS utilitario
- **Vue 3** - Framework de JavaScript
- **TypeScript** - Tipado estático

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/conexianet-front.git

# Navegar al directorio
cd conexianet-front

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🏗️ Estructura del Proyecto

```
conexianet-front/
├── components/              # Componentes reutilizables
│   ├── Button.vue          # Componente de botón con variantes
│   ├── Header.vue          # Header con navegación
│   └── Footer.vue          # Footer con enlaces y estado del sistema
├── pages/                  # Páginas de la aplicación
│   ├── index.vue           # Landing page principal
│   └── auth.vue            # Página de autenticación (Login/Registro)
├── assets/                 # Recursos estáticos
│   └── css/               # Estilos globales y componentes
├── public/                # Archivos públicos
├── nuxt.config.ts         # Configuración de Nuxt
├── tailwind.config.js     # Configuración de Tailwind
└── package.json           # Dependencias del proyecto
```

## 🔌 API Endpoints

- `POST /login` - Iniciar sesión
  ```json
  {
    "username": "admin",
    "password": "admin123"
  }
  ```

- `POST /register` - Registro de usuario
  ```json
  {
    "username": "admin",
    "email": "admin@gmail.com",
    "password": "admin123"
  }
  ```

## 🎨 Diseño

### Paleta de Colores
- **Primario**: Cyan (#06b6d4)
- **Secundario**: Azul (#3b82f6)
- **Acento**: Púrpura (#8b5cf6)
- **Fondo**: Gris claro (#f1f5f9)
- **Texto**: Gris oscuro (#1e293b)

### Características del Diseño
- **Estilo futurista** sin gradientes
- **Tipografía monoespaciada** para elementos técnicos
- **Iconos SVG** personalizados
- **Efectos hover** sutiles
- **Grid de fondo** sutil
- **Tarjetas con colores distintivos**

## 🚀 Funcionalidades

### Landing Page
- **Hero section** con call-to-action
- **Sección de funciones** con 6 módulos principales
- **Sección de beneficios** con métricas
- **Formularios de contacto** integrados

### Autenticación
- **Login** con validación de campos
- **Registro** con doble verificación de email
- **Transiciones suaves** entre formularios
- **Mensajes de éxito/error** con feedback visual
- **Validación en tiempo real** de emails

## 🔧 Desarrollo

### Configuración del Backend
El proyecto está configurado para trabajar con un backend en `http://127.0.0.1:8000`

### Scripts Disponibles
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa de producción
npm run generate     # Generar sitio estático
```

## 📱 Responsive Design

- **Mobile First**: Optimizado para dispositivos móviles
- **Breakpoints**: sm, md, lg, xl
- **Grid adaptativo**: Se ajusta automáticamente
- **Navegación móvil**: Menú hamburguesa

## 🎯 Próximas Características

- [ ] Dashboard de usuario
- [ ] Gestión de perfil
- [ ] Integración con más APIs
- [ ] PWA (Progressive Web App)
- [ ] Internacionalización

## 📄 Licencia

MIT License - Ver [LICENSE](LICENSE) para más detalles

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

ConnexiaNet - [@connexianet](https://twitter.com/connexianet)

Link del Proyecto: [https://github.com/tu-usuario/conexianet-front](https://github.com/tu-usuario/conexianet-front)