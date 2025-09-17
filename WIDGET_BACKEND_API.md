# API Backend para Widgets de Reservas

## Descripción General

Este documento describe la API backend para gestionar widgets de reservas embebibles. Los widgets permiten a los restaurantes integrar un formulario de reservas en sus sitios web.

## Estructura del Widget

### ID Único del Widget
Cada widget tiene un ID único generado automáticamente con el formato:
```
widget_{timestamp}_{random_string}
```

Ejemplo: `widget_1k2j3h4g5f6_abc123`

## Endpoints de la API

### 1. Crear Widget

**POST** `/api/widgets`

Crea un nuevo widget de reservas.

#### Request Body:
```json
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

#### Response:
```json
{
  "success": true,
  "data": {
    "id": "widget_1k2j3h4g5f6_abc123",
    "name": "Mi Widget de Reservas",
    "primary_color": "#06b6d4",
    "secondary_color": "#ffffff",
    "text_color": "#000000", 
    "border_radius": "8px",
    "font_family": "Arial, sans-serif",
    "is_active": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

### 2. Obtener Widget

**GET** `/api/widgets/{widget_id}`

Obtiene la configuración de un widget específico.

#### Response:
```json
{
  "success": true,
  "data": {
    "id": "widget_1k2j3h4g5f6_abc123",
    "name": "Mi Widget de Reservas",
    "primary_color": "#06b6d4",
    "secondary_color": "#ffffff",
    "text_color": "#000000",
    "border_radius": "8px", 
    "font_family": "Arial, sans-serif",
    "is_active": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

### 3. Actualizar Widget

**PUT** `/api/widgets/{widget_id}`

Actualiza la configuración de un widget existente.

#### Request Body:
```json
{
  "name": "Widget Actualizado",
  "primary_color": "#ff6b6b",
  "secondary_color": "#ffffff",
  "text_color": "#000000",
  "border_radius": "12px",
  "font_family": "Georgia, serif",
  "is_active": true
}
```

#### Response:
```json
{
  "success": true,
  "data": {
    "id": "widget_1k2j3h4g5f6_abc123",
    "name": "Widget Actualizado",
    "primary_color": "#ff6b6b",
    "secondary_color": "#ffffff",
    "text_color": "#000000",
    "border_radius": "12px",
    "font_family": "Georgia, serif", 
    "is_active": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T11:45:00Z"
  }
}
```

### 4. Listar Widgets

**GET** `/api/widgets`

Obtiene la lista de todos los widgets del usuario.

#### Query Parameters:
- `page` (opcional): Número de página (default: 1)
- `limit` (opcional): Elementos por página (default: 10)
- `is_active` (opcional): Filtrar por estado activo (true/false)

#### Response:
```json
{
  "success": true,
  "data": {
    "widgets": [
      {
        "id": "widget_1k2j3h4g5f6_abc123",
        "name": "Mi Widget de Reservas",
        "is_active": true,
        "created_at": "2024-01-15T10:30:00Z",
        "updated_at": "2024-01-15T10:30:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 1,
      "pages": 1
    }
  }
}
```

### 5. Eliminar Widget

**DELETE** `/api/widgets/{widget_id}`

Elimina un widget específico.

#### Response:
```json
{
  "success": true,
  "message": "Widget eliminado correctamente"
}
```

## Widget JavaScript

### Cargar Widget

**GET** `/widget/reservations.js?id={widget_id}`

Sirve el JavaScript del widget para ser embebido en sitios web.

#### Parámetros:
- `id`: ID único del widget

#### Response:
JavaScript que crea el formulario de reservas con la configuración del widget.

#### Ejemplo de uso:
```html
<script src="https://api.conexianet.com/widget/reservations.js?id=widget_1k2j3h4g5f6_abc123"></script>
```

## Endpoints de Reservas

### 1. Crear Reserva

**POST** `/api/reservations`

Crea una nueva reserva desde el widget.

#### Request Body:
```json
{
  "widget_id": "widget_1k2j3h4g5f6_abc123",
  "customer_name": "Juan Pérez",
  "customer_phone": "+34 666 123 456",
  "customer_email": "juan@email.com",
  "reservation_date": "2024-01-25",
  "reservation_time": "20:00",
  "party_size": 2,
  "special_requests": "Cena romántica",
  "source": "widget"
}
```

#### Response:
```json
{
  "success": true,
  "data": {
    "id": "res_123456789",
    "widget_id": "widget_1k2j3h4g5f6_abc123",
    "customer_name": "Juan Pérez",
    "customer_phone": "+34 666 123 456",
    "customer_email": "juan@email.com",
    "reservation_date": "2024-01-25",
    "reservation_time": "20:00",
    "party_size": 2,
    "special_requests": "Cena romántica",
    "status": "pending",
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

### 2. Obtener Estadísticas del Widget

**GET** `/api/widgets/{widget_id}/stats`

Obtiene estadísticas de un widget específico.

#### Response:
```json
{
  "success": true,
  "data": {
    "widget_id": "widget_1k2j3h4g5f6_abc123",
    "today_reservations": 12,
    "week_reservations": 89,
    "month_reservations": 245,
    "conversion_rate": 15.2,
    "widget_views": 1250,
    "total_reservations": 1250
  }
}
```

## Códigos de Error

| Código | Descripción |
|--------|-------------|
| 400 | Bad Request - Datos inválidos |
| 401 | Unauthorized - Token de autenticación inválido |
| 403 | Forbidden - Sin permisos para acceder al recurso |
| 404 | Not Found - Widget no encontrado |
| 422 | Unprocessable Entity - Error de validación |
| 500 | Internal Server Error - Error interno del servidor |

## Ejemplos de Respuestas de Error

```json
{
  "success": false,
  "error": {
    "code": "WIDGET_NOT_FOUND",
    "message": "Widget no encontrado",
    "details": "El widget con ID 'widget_invalid' no existe"
  }
}
```

## Autenticación

Todos los endpoints requieren autenticación mediante JWT token en el header:

```
Authorization: Bearer {jwt_token}
```

## Rate Limiting

- **Widgets API**: 100 requests por minuto por usuario
- **Reservas API**: 50 requests por minuto por IP
- **Widget JavaScript**: Sin límite (público)

## Notas de Implementación

1. **ID Único**: Los IDs de widget se generan usando timestamp + string aleatorio para garantizar unicidad
2. **Configuración en Tiempo Real**: Los cambios en la configuración del widget se reflejan inmediatamente en el JavaScript servido
3. **Validación**: Todos los campos de color deben ser códigos hexadecimales válidos
4. **Fuentes**: Solo se permiten fuentes web-safe o Google Fonts
5. **Widget Inactivo**: Los widgets inactivos no sirven JavaScript, devuelven 404
