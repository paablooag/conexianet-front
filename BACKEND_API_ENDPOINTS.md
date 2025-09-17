# BACKEND API ENDPOINTS - CONEXIANET

## ÍNDICE
1. [Autenticación y Usuarios](#autenticación-y-usuarios)
2. [Gestión de Restaurantes](#gestión-de-restaurantes)
3. [Sistema de Reservas](#sistema-de-reservas)
4. [Blog y Contenido](#blog-y-contenido)
5. [Dashboard y Estadísticas](#dashboard-y-estadísticas)
6. [Widget de Reservas](#widget-de-reservas)

---

## AUTENTICACIÓN Y USUARIOS

### POST /api/auth/register
**Descripción:** Registro de nuevos usuarios
**Body:**
```json
{
  "email": "usuario@ejemplo.com",
  "password": "password123",
  "name": "Nombre Usuario",
  "restaurant_name": "Mi Restaurante"
}
```
**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "email": "usuario@ejemplo.com",
      "name": "Nombre Usuario",
      "created_at": "2024-01-15T10:00:00Z"
    },
    "token": "jwt_token_here"
  }
}
```

### POST /api/auth/login
**Descripción:** Inicio de sesión de usuarios
**Body:**
```json
{
  "email": "usuario@ejemplo.com",
  "password": "password123"
}
```
**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "email": "usuario@ejemplo.com",
      "name": "Nombre Usuario"
    },
    "token": "jwt_token_here"
  }
}
```

### POST /api/auth/logout
**Descripción:** Cerrar sesión
**Headers:** Authorization: Bearer {token}
**Response:**
```json
{
  "success": true,
  "message": "Sesión cerrada correctamente"
}
```

### GET /api/auth/me
**Descripción:** Obtener información del usuario autenticado
**Headers:** Authorization: Bearer {token}
**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "email": "usuario@ejemplo.com",
      "name": "Nombre Usuario",
      "restaurant_id": 1
    }
  }
}
```

---

## GESTIÓN DE RESTAURANTES

### GET /api/restaurant
**Descripción:** Obtener información del restaurante del usuario
**Headers:** Authorization: Bearer {token}
**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Hamburguesería El Buen Sabor",
    "slug": "hamburgueseria-el-buen-sabor",
    "address": "Calle Principal 123, Madrid",
    "phone": "+34 123 456 789",
    "schedule": "Lun-Dom: 12:00-16:00, 19:00-23:00",
    "description": "Hamburguesería especializada en hamburguesas gourmet",
    "reservations_enabled": true,
    "max_capacity": 50,
    "has_reservation_page": true,
    "user_id": 1,
    "created_at": "2024-01-15T10:00:00Z",
    "updated_at": "2024-01-15T10:00:00Z"
  }
}
```

### PUT /api/restaurant
**Descripción:** Actualizar configuración del restaurante
**Headers:** Authorization: Bearer {token}
**Body:**
```json
{
  "name": "Nuevo Nombre del Restaurante",
  "slug": "nuevo-slug",
  "address": "Nueva Dirección 456, Barcelona",
  "phone": "+34 987 654 321",
  "schedule": "Lun-Dom: 12:00-16:00, 19:00-23:00",
  "description": "Nueva descripción del restaurante",
  "reservations_enabled": true,
  "max_capacity": 75
}
```
**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Nuevo Nombre del Restaurante",
    "slug": "nuevo-slug",
    "address": "Nueva Dirección 456, Barcelona",
    "phone": "+34 987 654 321",
    "schedule": "Lun-Dom: 12:00-16:00, 19:00-23:00",
    "description": "Nueva descripción del restaurante",
    "reservations_enabled": true,
    "max_capacity": 75,
    "has_reservation_page": true,
    "updated_at": "2024-01-15T11:00:00Z"
  }
}
```

### POST /api/restaurant/create-reservation-page
**Descripción:** Crear página de reservas para el restaurante
**Headers:** Authorization: Bearer {token}
**Response:**
```json
{
  "success": true,
  "data": {
    "restaurant_id": 1,
    "has_reservation_page": true,
    "reservation_url": "https://conexianet.com/reservas/hamburgueseria-el-buen-sabor",
    "created_at": "2024-01-15T10:00:00Z"
  }
}
```

### GET /api/restaurants/{slug}
**Descripción:** Obtener información pública del restaurante por slug
**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Hamburguesería El Buen Sabor",
    "slug": "hamburgueseria-el-buen-sabor",
    "address": "Calle Principal 123, Madrid",
    "phone": "+34 123 456 789",
    "schedule": "Lun-Dom: 12:00-16:00, 19:00-23:00",
    "description": "Hamburguesería especializada en hamburguesas gourmet",
    "reservations_enabled": true,
    "max_capacity": 50
  }
}
```

---

## SISTEMA DE RESERVAS

### POST /api/reservations
**Descripción:** Crear nueva reserva
**Body:**
```json
{
  "restaurant_slug": "hamburgueseria-el-buen-sabor",
  "date": "2024-01-20",
  "time": "20:00",
  "guests": 4,
  "name": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "phone": "+34 666 123 456",
  "special_requests": "Mesa cerca de la ventana"
}
```
**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "restaurant_id": 1,
    "date": "2024-01-20",
    "time": "20:00",
    "guests": 4,
    "name": "Juan Pérez",
    "email": "juan@ejemplo.com",
    "phone": "+34 666 123 456",
    "special_requests": "Mesa cerca de la ventana",
    "status": "Confirmada",
    "confirmation_code": "ABC123",
    "created_at": "2024-01-15T10:00:00Z"
  }
}
```

### GET /api/reservations
**Descripción:** Obtener reservas del restaurante del usuario
**Headers:** Authorization: Bearer {token}
**Query Parameters:**
- `status` (opcional): Filtrar por estado (Confirmada, Cancelada, Pendiente)
- `date` (opcional): Filtrar por fecha (YYYY-MM-DD)
- `page` (opcional): Número de página (default: 1)
- `limit` (opcional): Elementos por página (default: 20)
**Response:**
```json
{
  "success": true,
  "data": {
    "reservations": [
      {
        "id": 1,
        "date": "2024-01-20",
        "time": "20:00",
        "guests": 4,
        "name": "Juan Pérez",
        "email": "juan@ejemplo.com",
        "phone": "+34 666 123 456",
        "special_requests": "Mesa cerca de la ventana",
        "status": "Confirmada",
        "confirmation_code": "ABC123",
        "created_at": "2024-01-15T10:00:00Z"
      }
    ],
    "pagination": {
      "current_page": 1,
      "total_pages": 5,
      "total_items": 100,
      "items_per_page": 20
    }
  }
}
```

### GET /api/reservations/{id}
**Descripción:** Obtener detalles de una reserva específica
**Headers:** Authorization: Bearer {token}
**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "restaurant_id": 1,
    "date": "2024-01-20",
    "time": "20:00",
    "guests": 4,
    "name": "Juan Pérez",
    "email": "juan@ejemplo.com",
    "phone": "+34 666 123 456",
    "special_requests": "Mesa cerca de la ventana",
    "status": "Confirmada",
    "confirmation_code": "ABC123",
    "created_at": "2024-01-15T10:00:00Z",
    "updated_at": "2024-01-15T10:00:00Z"
  }
}
```

### PUT /api/reservations/{id}
**Descripción:** Actualizar estado de una reserva
**Headers:** Authorization: Bearer {token}
**Body:**
```json
{
  "status": "Cancelada"
}
```
**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "status": "Cancelada",
    "updated_at": "2024-01-15T11:00:00Z"
  }
}
```

### DELETE /api/reservations/{id}
**Descripción:** Eliminar una reserva
**Headers:** Authorization: Bearer {token}
**Response:**
```json
{
  "success": true,
  "message": "Reserva eliminada correctamente"
}
```

### GET /api/reservations/calendar
**Descripción:** Obtener reservas para el calendario del dashboard
**Headers:** Authorization: Bearer {token}
**Query Parameters:**
- `year`: Año (ej: 2024)
- `month`: Mes (1-12)
**Response:**
```json
{
  "success": true,
  "data": {
    "calendar": [
      {
        "date": "2024-01-20",
        "reservations": [
          {
            "id": 1,
            "time": "20:00",
            "guests": 4,
            "name": "Juan Pérez",
            "status": "Confirmada"
          }
        ],
        "total_reservations": 1
      }
    ]
  }
}
```

---

## BLOG Y CONTENIDO

### GET /api/blog/posts
**Descripción:** Obtener lista de artículos del blog
**Query Parameters:**
- `page` (opcional): Número de página (default: 1)
- `limit` (opcional): Elementos por página (default: 10)
- `category` (opcional): Filtrar por categoría
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Cómo Optimizar la Gestión de Pedidos en tu Hamburguesería",
      "excerpt": "Descubre las mejores estrategias para automatizar y optimizar la gestión de pedidos...",
      "slug": "optimizar-gestion-pedidos-hamburgueseria",
      "category": "Gestión",
      "published_at": "2024-01-15T10:00:00Z",
      "reading_time": 5,
      "author": "Equipo ConexiaNet",
      "tags": ["gestión", "pedidos", "automatización"]
    }
  ],
  "pagination": {
    "current_page": 1,
    "total_pages": 3,
    "total_items": 25,
    "items_per_page": 10
  }
}
```

### GET /api/blog/posts/{slug}
**Descripción:** Obtener artículo individual del blog
**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Cómo Optimizar la Gestión de Pedidos en tu Hamburguesería",
    "excerpt": "Descubre las mejores estrategias para automatizar y optimizar la gestión de pedidos...",
    "content": "<h2>Introducción</h2><p>La gestión eficiente de pedidos...</p>",
    "slug": "optimizar-gestion-pedidos-hamburgueseria",
    "category": "Gestión",
    "published_at": "2024-01-15T10:00:00Z",
    "reading_time": 5,
    "author": "Equipo ConexiaNet",
    "tags": ["gestión", "pedidos", "automatización"]
  }
}
```

### GET /api/blog/posts/related/{slug}
**Descripción:** Obtener artículos relacionados
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 2,
      "title": "Marketing Digital para Restaurantes: Estrategias que Funcionan",
      "excerpt": "Aprende las técnicas de marketing digital más efectivas...",
      "slug": "marketing-digital-restaurantes-estrategias"
    }
  ]
}
```

---

## DASHBOARD Y ESTADÍSTICAS

### GET /api/dashboard/overview
**Descripción:** Obtener estadísticas generales del dashboard
**Headers:** Authorization: Bearer {token}
**Response:**
```json
{
  "success": true,
  "data": {
    "reservations": {
      "total": 150,
      "today": 8,
      "confirmed": 120,
      "cancelled": 15,
      "pending": 15
    },
    "revenue": {
      "total": 15000.50,
      "this_month": 3500.25,
      "growth_percentage": 12.5
    },
    "customers": {
      "total": 89,
      "new_this_month": 12
    },
    "recent_activity": [
      {
        "type": "reservation",
        "message": "Nueva reserva de Juan Pérez para 4 personas",
        "created_at": "2024-01-15T10:00:00Z"
      }
    ]
  }
}
```

### GET /api/dashboard/reservations/stats
**Descripción:** Obtener estadísticas específicas de reservas
**Headers:** Authorization: Bearer {token}
**Query Parameters:**
- `period` (opcional): Período (today, week, month, year)
**Response:**
```json
{
  "success": true,
  "data": {
    "total_reservations": 150,
    "confirmed_reservations": 120,
    "cancelled_reservations": 15,
    "pending_reservations": 15,
    "average_guests_per_reservation": 3.2,
    "peak_hours": ["20:00", "21:00", "22:00"],
    "reservations_by_day": [
      {
        "date": "2024-01-15",
        "count": 8
      }
    ]
  }
}
```

---

## WIDGET DE RESERVAS

### GET /api/widget/reservations/{restaurant_slug}
**Descripción:** Obtener configuración del widget para un restaurante específico
**Response:**
```json
{
  "success": true,
  "data": {
    "restaurant": {
      "name": "Hamburguesería El Buen Sabor",
      "slug": "hamburgueseria-el-buen-sabor",
      "address": "Calle Principal 123, Madrid",
      "phone": "+34 123 456 789",
      "schedule": "Lun-Dom: 12:00-16:00, 19:00-23:00",
      "reservations_enabled": true,
      "max_capacity": 50
    },
    "widget_config": {
      "theme": "cyan",
      "available_times": ["12:00", "12:30", "13:00", "19:00", "19:30", "20:00"],
      "max_advance_days": 30,
      "min_advance_hours": 2
    }
  }
}
```

### POST /api/widget/reservations/{restaurant_slug}/submit
**Descripción:** Enviar reserva desde el widget
**Body:**
```json
{
  "date": "2024-01-20",
  "time": "20:00",
  "guests": 4,
  "name": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "phone": "+34 666 123 456",
  "special_requests": "Mesa cerca de la ventana"
}
```
**Response:**
```json
{
  "success": true,
  "data": {
    "reservation_id": 1,
    "confirmation_code": "ABC123",
    "message": "Reserva confirmada correctamente"
  }
}
```

---

## NOTIFICACIONES Y COMUNICACIÓN

### POST /api/notifications/email
**Descripción:** Enviar email de confirmación de reserva
**Headers:** Authorization: Bearer {token}
**Body:**
```json
{
  "reservation_id": 1,
  "type": "confirmation",
  "to_email": "juan@ejemplo.com"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Email enviado correctamente"
}
```

### POST /api/notifications/whatsapp
**Descripción:** Enviar mensaje de WhatsApp
**Headers:** Authorization: Bearer {token}
**Body:**
```json
{
  "reservation_id": 1,
  "phone": "+34666123456",
  "message": "Hola Juan, le recordamos su reserva para el 20/01/2024 a las 20:00"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Mensaje de WhatsApp enviado"
}
```

---

## CONFIGURACIÓN Y UTILIDADES

### GET /api/config/available-times
**Descripción:** Obtener horarios disponibles para reservas
**Query Parameters:**
- `restaurant_slug`: Slug del restaurante
- `date`: Fecha (YYYY-MM-DD)
**Response:**
```json
{
  "success": true,
  "data": {
    "available_times": [
      "12:00", "12:30", "13:00", "13:30", "14:00",
      "19:00", "19:30", "20:00", "20:30", "21:00"
    ],
    "max_capacity": 50,
    "reservations_enabled": true
  }
}
```

### POST /api/config/validate-slug
**Descripción:** Validar si un slug está disponible
**Body:**
```json
{
  "slug": "mi-restaurante"
}
```
**Response:**
```json
{
  "success": true,
  "data": {
    "available": true,
    "slug": "mi-restaurante"
  }
}
```

---

## CÓDIGOS DE ERROR

### Códigos HTTP
- `200`: OK
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `422`: Unprocessable Entity
- `500`: Internal Server Error

### Estructura de Error
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Los datos proporcionados no son válidos",
    "details": {
      "email": ["El email es requerido"],
      "phone": ["El teléfono debe tener un formato válido"]
    }
  }
}
```

### Códigos de Error Específicos
- `INVALID_CREDENTIALS`: Credenciales inválidas
- `USER_NOT_FOUND`: Usuario no encontrado
- `RESTAURANT_NOT_FOUND`: Restaurante no encontrado
- `RESERVATION_NOT_FOUND`: Reserva no encontrada
- `SLUG_NOT_AVAILABLE`: Slug no disponible
- `RESERVATIONS_DISABLED`: Reservas desactivadas
- `CAPACITY_EXCEEDED`: Capacidad excedida
- `INVALID_DATE`: Fecha inválida
- `INVALID_TIME`: Hora inválida
- `VALIDATION_ERROR`: Error de validación

---

## AUTENTICACIÓN JWT

### Headers Requeridos
```
Authorization: Bearer {jwt_token}
Content-Type: application/json
```

### Estructura del Token
```json
{
  "user_id": 1,
  "email": "usuario@ejemplo.com",
  "restaurant_id": 1,
  "iat": 1642248000,
  "exp": 1642251600
}
```

---

## RATE LIMITING

### Límites por Endpoint
- **Autenticación**: 5 requests/minuto por IP
- **Reservas**: 10 requests/minuto por IP
- **Dashboard**: 60 requests/minuto por usuario
- **Widget**: 20 requests/minuto por IP
- **Blog**: 30 requests/minuto por IP

### Headers de Rate Limiting
```
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 59
X-RateLimit-Reset: 1642251600
```

---

## BASE DE DATOS

### Tablas Principales
1. **users**: Información de usuarios
2. **restaurants**: Configuración de restaurantes
3. **reservations**: Reservas de clientes
4. **blog_posts**: Artículos del blog
5. **notifications**: Historial de notificaciones

### Relaciones
- `users` 1:1 `restaurants`
- `restaurants` 1:N `reservations`
- `reservations` N:1 `users` (cliente)

---

## DEPLOYMENT

### Variables de Entorno
```
DATABASE_URL=postgresql://user:password@localhost:5432/conexianet
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=1h
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
WHATSAPP_API_URL=https://api.whatsapp.com
WHATSAPP_TOKEN=your_whatsapp_token
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

---

## TESTING

### Endpoints de Testing
- `GET /api/health`: Health check
- `GET /api/test/db`: Test de conexión a base de datos
- `POST /api/test/email`: Test de envío de emails

### Datos de Prueba
```json
{
  "test_user": {
    "email": "test@conexianet.com",
    "password": "test123"
  },
  "test_restaurant": {
    "slug": "test-restaurant"
  }
}
```

---

## DOCUMENTACIÓN ADICIONAL

### Swagger/OpenAPI
- URL: `/api/docs`
- Especificación completa de todos los endpoints

### Postman Collection
- Archivo: `conexianet-api.postman_collection.json`
- Incluye todos los endpoints con ejemplos

### SDKs Disponibles
- JavaScript/Node.js
- Python
- PHP
- Java

---

**Versión:** 1.0.0
**Última actualización:** 15 de Enero, 2024
**Autor:** Equipo ConexiaNet
