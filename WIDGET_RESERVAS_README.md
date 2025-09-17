# Widget de Reservas - ConexiaNet ADRE

## Descripción

Sistema completo de reservas para restaurantes que incluye un widget embebible personalizable que se puede integrar en cualquier página web.

## Características

- ✅ **Widget Embebible**: Se integra fácilmente en cualquier sitio web
- ✅ **Personalización Completa**: Colores, fuentes, estilos y más
- ✅ **Vista Previa en Tiempo Real**: Ve los cambios al instante
- ✅ **Código Copy-Paste**: Genera automáticamente el código de integración
- ✅ **Responsive**: Se adapta a móviles y tablets
- ✅ **Validación Completa**: Validación de formularios en tiempo real
- ✅ **Notificaciones**: Email de confirmación automático

## Campos del Formulario

El widget incluye los siguientes campos obligatorios:

1. **Nombre Completo** - Mínimo 2 caracteres
2. **Teléfono** - Formato internacional válido
3. **Correo Electrónico** - Email válido
4. **Fecha** - No puede ser en el pasado
5. **Hora** - Dentro del horario de apertura
6. **Personas** - Entre 1 y 8 personas
7. **Notas** - Campo opcional para comentarios especiales

## Instalación y Uso

### 1. Acceder al Dashboard

1. Inicia sesión en tu cuenta de ConexiaNet ADRE
2. Ve a **Dashboard** → **Widget Reservas**
3. Personaliza los colores y estilos según tu marca

### 2. Personalización

En el panel de configuración puedes personalizar:

- **Nombre del Widget**: Identificador único
- **Color Principal**: Color de botones y bordes
- **Color Secundario**: Color de fondo
- **Color del Texto**: Color de las letras
- **Radio de Bordes**: Redondez de las esquinas
- **Fuente**: Tipo de letra del widget
- **Estado**: Activar/desactivar el widget

### 3. Vista Previa

La vista previa se actualiza automáticamente cuando cambias la configuración, permitiéndote ver exactamente cómo se verá el widget en tu sitio web.

### 4. Código de Integración

Una vez configurado, copia el código generado y pégalo en tu página web:

```html
<script src="https://api.conexianet.com/widget/reservations.js?id=mi-widget-de-reservas"></script>
```

### 5. Integración en tu Sitio Web

Simplemente pega el código en el HTML de tu página donde quieras que aparezca el widget:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi Restaurante</title>
</head>
<body>
    <h1>Bienvenido a Mi Restaurante</h1>
    <p>Reserva tu mesa online</p>
    
    <!-- Widget de Reservas -->
    <script src="https://api.conexianet.com/widget/reservations.js?id=mi-widget-de-reservas"></script>
</body>
</html>
```

## API Backend

### Endpoints Principales

#### Crear Reserva
```http
POST /api/reservations
Content-Type: application/json

{
  "full_name": "Juan Pérez",
  "phone": "+34 666 123 456",
  "email": "juan@email.com",
  "date": "2024-01-25",
  "time": "20:00",
  "people": 4,
  "notes": "Cena romántica",
  "widget_id": "mi-widget-de-reservas"
}
```

#### Obtener Configuración del Widget
```http
GET /api/widget/config/{widget_id}
```

#### Actualizar Configuración del Widget
```http
PUT /api/widget/config
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Mi Widget de Reservas",
  "primary_color": "#06b6d4",
  "secondary_color": "#ffffff",
  "text_color": "#000000",
  "border_radius": "8px",
  "font_family": "Arial, sans-serif",
  "is_active": true
}
```

## Personalización Avanzada

### CSS Personalizado

Puedes agregar CSS personalizado para mayor control:

```css
#conexia-reservation-widget {
  /* Estilos personalizados */
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  border: 3px solid #your-color;
}

#conexia-reservation-widget button {
  background: linear-gradient(45deg, #your-color1, #your-color2);
}
```

### JavaScript Personalizado

Puedes agregar funcionalidades adicionales:

```javascript
// Escuchar cuando se envía una reserva
document.addEventListener('conexiaReservationSubmitted', function(event) {
  console.log('Reserva enviada:', event.detail);
  // Tu código personalizado aquí
});

// Escuchar cuando hay un error
document.addEventListener('conexiaReservationError', function(event) {
  console.log('Error en reserva:', event.detail);
  // Tu código personalizado aquí
});
```

## Estadísticas y Analytics

El dashboard incluye estadísticas en tiempo real:

- **Reservas Hoy**: Número de reservas del día actual
- **Reservas Esta Semana**: Total de reservas de la semana
- **Tasa de Conversión**: Porcentaje de visitantes que hacen reservas
- **Vistas del Widget**: Número de veces que se ha cargado el widget

## Notificaciones

### Email de Confirmación

Cada reserva genera automáticamente un email de confirmación que incluye:

- Detalles de la reserva
- Código de confirmación
- Información del restaurante
- Instrucciones de cancelación

### Plantillas Personalizables

Puedes personalizar las plantillas de email desde el dashboard:

- Asunto del email
- Contenido del mensaje
- Logo del restaurante
- Información de contacto

## Seguridad

- **Rate Limiting**: Máximo 10 reservas por IP por hora
- **Validación**: Validación completa en frontend y backend
- **HTTPS**: Todas las comunicaciones son seguras
- **CORS**: Configuración segura para dominios permitidos

## Soporte

Para soporte técnico o preguntas:

- **Email**: soporte@conexianet.com
- **Teléfono**: +34 91 123 45 67
- **Documentación**: https://docs.conexianet.com
- **Chat**: Disponible en el dashboard

## Changelog

### v1.0.0 (Enero 2024)
- ✅ Widget embebible inicial
- ✅ Personalización de colores y estilos
- ✅ Vista previa en tiempo real
- ✅ Código de integración automático
- ✅ Validación de formularios
- ✅ Notificaciones por email
- ✅ Dashboard de gestión
- ✅ Estadísticas en tiempo real

## Licencia

© 2024 ConexiaNet ADRE. Todos los derechos reservados.

---

**¿Necesitas ayuda?** Contacta con nuestro equipo de soporte o consulta la documentación completa en el dashboard.
