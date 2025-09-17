# MOTOR DE RESERVAS - API Backend

## DESCRIPCIÓN GENERAL

Sistema completo de reservas para restaurantes que incluye:
- Widget embebible para cualquier página web
- API REST para gestión de reservas
- Sistema de notificaciones (Email, WhatsApp, SMS)
- Panel de administración
- Personalización de colores y estilos del widget

---

## ENDPOINTS PRINCIPALES

### RESERVAS

#### POST /api/reservations
- **Descripción**: Crea nueva reserva desde el widget público
- **Headers**: `Content-Type: application/json`
- **Body**: 
```json
{
  "full_name": "string",
  "phone": "string", 
  "email": "string",
  "date": "YYYY-MM-DD",
  "time": "HH:MM",
  "people": "integer",
  "notes": "string (opcional)",
  "widget_id": "string (opcional)"
}
```
- **Response**: 
```json
{
  "success": true,
  "reservation": {
    "id": "uuid",
    "full_name": "string",
    "phone": "string",
    "email": "string", 
    "date": "YYYY-MM-DD",
    "time": "HH:MM",
    "people": "integer",
    "status": "pending|confirmed|cancelled",
    "notes": "string",
    "created_at": "datetime",
    "confirmation_code": "string"
  }
}
```

#### GET /api/reservations
- **Descripción**: Obtiene reservas (admin)
- **Headers**: `Authorization: Bearer <token>`
- **Query**: `?date=2024-01-25&status=confirmed&page=1&limit=20`
- **Response**: 
```json
{
  "reservations": [...],
  "total": 100,
  "page": 1,
  "total_pages": 5
}
```

#### GET /api/reservations/{id}
- **Descripción**: Obtiene detalles de reserva específica
- **Headers**: `Authorization: Bearer <token>`
- **Response**: 
```json
{
  "reservation": {
    "id": "uuid",
    "full_name": "string",
    "phone": "string",
    "email": "string",
    "date": "YYYY-MM-DD", 
    "time": "HH:MM",
    "people": "integer",
    "status": "string",
    "notes": "string",
    "created_at": "datetime",
    "confirmation_code": "string"
  }
}
```

#### PUT /api/reservations/{id}
- **Descripción**: Actualiza estado de reserva
- **Headers**: `Authorization: Bearer <token>`
- **Body**: 
```json
{
  "status": "pending|confirmed|cancelled",
  "notes": "string"
}
```
- **Response**: 
```json
{
  "success": true,
  "reservation": {...}
}
```

#### DELETE /api/reservations/{id}
- **Descripción**: Cancela reserva
- **Headers**: `Authorization: Bearer <token>`
- **Response**: 
```json
{
  "success": true,
  "message": "Reserva cancelada"
}
```

---

### WIDGET CONFIGURACIÓN

#### GET /api/widget/config
- **Descripción**: Obtiene configuración del widget
- **Headers**: `Authorization: Bearer <token>`
- **Response**: 
```json
{
  "widget": {
    "id": "uuid",
    "name": "string",
    "primary_color": "#06b6d4",
    "secondary_color": "#ffffff", 
    "text_color": "#000000",
    "border_radius": "8px",
    "font_family": "Arial, sans-serif",
    "is_active": true,
    "embed_code": "<script>...</script>",
    "created_at": "datetime"
  }
}
```

#### PUT /api/widget/config
- **Descripción**: Actualiza configuración del widget
- **Headers**: `Authorization: Bearer <token>`
- **Body**: 
```json
{
  "name": "string",
  "primary_color": "#06b6d4",
  "secondary_color": "#ffffff",
  "text_color": "#000000", 
  "border_radius": "8px",
  "font_family": "Arial, sans-serif",
  "is_active": true
}
```
- **Response**: 
```json
{
  "success": true,
  "widget": {...},
  "embed_code": "<script>...</script>"
}
```

#### POST /api/widget/generate-embed
- **Descripción**: Genera nuevo código de embed
- **Headers**: `Authorization: Bearer <token>`
- **Response**: 
```json
{
  "success": true,
  "embed_code": "<script src='https://api.conexianet.com/widget/reservations.js?id=WIDGET_ID'></script>",
  "widget_id": "uuid"
}
```

---

### DISPONIBILIDAD

#### GET /api/availability
- **Descripción**: Verifica disponibilidad para fecha/hora específica
- **Query**: `?date=2024-01-25&time=20:00&people=4`
- **Response**: 
```json
{
  "available": true,
  "max_capacity": 50,
  "current_bookings": 12,
  "available_slots": [
    "19:00", "19:30", "20:00", "20:30", "21:00"
  ]
}
```

#### GET /api/availability/calendar
- **Descripción**: Obtiene disponibilidad para un mes completo
- **Query**: `?month=2024-01&year=2024`
- **Response**: 
```json
{
  "calendar": {
    "2024-01-25": {
      "available": true,
      "bookings": 12,
      "max_capacity": 50
    },
    "2024-01-26": {
      "available": false,
      "bookings": 50,
      "max_capacity": 50
    }
  }
}
```

---

### NOTIFICACIONES

#### POST /api/reservations/{id}/notify
- **Descripción**: Envía notificación de reserva
- **Headers**: `Authorization: Bearer <token>`
- **Body**: 
```json
{
  "method": "email|whatsapp|sms",
  "template": "confirmation|cancellation|reminder",
  "message": "string (opcional)"
}
```
- **Response**: 
```json
{
  "success": true,
  "message": "Notificación enviada",
  "sent_to": "email@example.com"
}
```

#### POST /api/notifications/send-bulk
- **Descripción**: Envía notificaciones masivas
- **Headers**: `Authorization: Bearer <token>`
- **Body**: 
```json
{
  "reservation_ids": ["uuid1", "uuid2"],
  "method": "email|whatsapp|sms",
  "template": "reminder",
  "message": "string"
}
```
- **Response**: 
```json
{
  "success": true,
  "sent": 15,
  "failed": 2,
  "results": [...]
}
```

---

### CONFIGURACIÓN RESTAURANTE

#### GET /api/restaurant/config
- **Descripción**: Obtiene configuración del restaurante
- **Headers**: `Authorization: Bearer <token>`
- **Response**: 
```json
{
  "restaurant": {
    "name": "string",
    "address": "string",
    "phone": "string",
    "email": "string",
    "opening_hours": {
      "monday": {"open": "09:00", "close": "22:00"},
      "tuesday": {"open": "09:00", "close": "22:00"},
      "wednesday": {"open": "09:00", "close": "22:00"},
      "thursday": {"open": "09:00", "close": "22:00"},
      "friday": {"open": "09:00", "close": "23:00"},
      "saturday": {"open": "10:00", "close": "23:00"},
      "sunday": {"open": "10:00", "close": "21:00"}
    },
    "max_capacity": 50,
    "advance_booking_days": 30,
    "cancellation_hours": 2
  }
}
```

#### PUT /api/restaurant/config
- **Descripción**: Actualiza configuración del restaurante
- **Headers**: `Authorization: Bearer <token>`
- **Body**: 
```json
{
  "name": "string",
  "address": "string", 
  "phone": "string",
  "email": "string",
  "opening_hours": {...},
  "max_capacity": 50,
  "advance_booking_days": 30,
  "cancellation_hours": 2
}
```
- **Response**: 
```json
{
  "success": true,
  "restaurant": {...}
}
```

---

### ESTADÍSTICAS

#### GET /api/reservations/stats
- **Descripción**: Obtiene estadísticas de reservas
- **Headers**: `Authorization: Bearer <token>`
- **Query**: `?period=daily|weekly|monthly&date_from=2024-01-01&date_to=2024-01-31`
- **Response**: 
```json
{
  "stats": {
    "total_reservations": 150,
    "confirmed_reservations": 140,
    "cancelled_reservations": 10,
    "no_shows": 5,
    "average_party_size": 3.2,
    "peak_hours": ["20:00", "21:00"],
    "busiest_days": ["friday", "saturday"]
  }
}
```

#### GET /api/reservations/analytics
- **Descripción**: Obtiene análisis detallado de reservas
- **Headers**: `Authorization: Bearer <token>`
- **Query**: `?period=monthly&date=2024-01`
- **Response**: 
```json
{
  "analytics": {
    "reservations_by_hour": {...},
    "reservations_by_day": {...},
    "party_size_distribution": {...},
    "cancellation_rate": 6.7,
    "no_show_rate": 3.3
  }
}
```

---

## WIDGET JAVASCRIPT

### Archivo: `/public/widget/reservations.js`

```javascript
(function() {
  'use strict';
  
  // Configuración del widget
  const CONFIG = {
    apiUrl: 'https://api.conexianet.com',
    widgetId: 'WIDGET_ID',
    version: '1.0.0'
  };
  
  // Crea el widget de reservas
  function createReservationWidget() {
    const widget = document.createElement('div');
    widget.id = 'conexia-reservation-widget';
    widget.innerHTML = `
      <div class="reservation-form">
        <h3>Reservar Mesa</h3>
        <form id="reservation-form">
          <input type="text" name="full_name" placeholder="Nombre Completo" required>
          <input type="tel" name="phone" placeholder="Teléfono" required>
          <input type="email" name="email" placeholder="Correo Electrónico" required>
          <input type="date" name="date" required>
          <input type="time" name="time" required>
          <select name="people" required>
            <option value="">Personas</option>
            <option value="1">1 persona</option>
            <option value="2">2 personas</option>
            <option value="3">3 personas</option>
            <option value="4">4 personas</option>
            <option value="5">5 personas</option>
            <option value="6">6 personas</option>
            <option value="7">7 personas</option>
            <option value="8">8 personas</option>
          </select>
          <textarea name="notes" placeholder="Notas especiales (opcional)"></textarea>
          <button type="submit">Reservar</button>
        </form>
      </div>
    `;
    
    return widget;
  }
  
  // Aplica estilos personalizados
  function applyCustomStyles(styles) {
    const style = document.createElement('style');
    style.textContent = `
      #conexia-reservation-widget {
        font-family: ${styles.font_family || 'Arial, sans-serif'};
        max-width: 400px;
        margin: 20px auto;
        padding: 20px;
        border: 2px solid ${styles.primary_color || '#06b6d4'};
        border-radius: ${styles.border_radius || '8px'};
        background: ${styles.secondary_color || '#ffffff'};
        color: ${styles.text_color || '#000000'};
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      }
      
      #conexia-reservation-widget h3 {
        color: ${styles.primary_color || '#06b6d4'};
        text-align: center;
        margin-bottom: 20px;
      }
      
      #conexia-reservation-widget input,
      #conexia-reservation-widget select,
      #conexia-reservation-widget textarea {
        width: 100%;
        padding: 10px;
        margin: 8px 0;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
      }
      
      #conexia-reservation-widget button {
        width: 100%;
        padding: 12px;
        background: ${styles.primary_color || '#06b6d4'};
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        margin-top: 10px;
      }
      
      #conexia-reservation-widget button:hover {
        opacity: 0.9;
      }
    `;
    document.head.appendChild(style);
  }
  
  // Envía reserva al backend
  async function submitReservation(formData) {
    try {
      const response = await fetch(`${CONFIG.apiUrl}/api/reservations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.get('full_name'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          date: formData.get('date'),
          time: formData.get('time'),
          people: parseInt(formData.get('people')),
          notes: formData.get('notes'),
          widget_id: CONFIG.widgetId
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        alert('¡Reserva confirmada! Te hemos enviado un email de confirmación.');
        document.getElementById('reservation-form').reset();
      } else {
        alert('Error al procesar la reserva. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión. Por favor, inténtalo de nuevo.');
    }
  }
  
  // Inicializa el widget
  function init() {
    // Cargar configuración del widget
    fetch(`${CONFIG.apiUrl}/api/widget/config/${CONFIG.widgetId}`)
      .then(response => response.json())
      .then(config => {
        const widget = createReservationWidget();
        document.body.appendChild(widget);
        applyCustomStyles(config.widget);
        
        // Manejar envío del formulario
        document.getElementById('reservation-form').addEventListener('submit', (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          submitReservation(formData);
        });
      })
      .catch(error => {
        console.error('Error cargando configuración del widget:', error);
      });
  }
  
  // Inicializar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
```

---

## MODELOS DE DATOS

### Reserva
```json
{
  "id": "uuid",
  "full_name": "string",
  "phone": "string", 
  "email": "string",
  "date": "date",
  "time": "time",
  "people": "integer",
  "status": "pending|confirmed|cancelled",
  "notes": "text",
  "confirmation_code": "string",
  "widget_id": "uuid",
  "created_at": "datetime",
  "updated_at": "datetime"
}
```

### Widget Config
```json
{
  "id": "uuid",
  "name": "string",
  "primary_color": "string",
  "secondary_color": "string",
  "text_color": "string",
  "border_radius": "string",
  "font_family": "string",
  "is_active": "boolean",
  "created_at": "datetime",
  "updated_at": "datetime"
}
```

### Restaurant Config
```json
{
  "id": "uuid",
  "name": "string",
  "address": "string",
  "phone": "string",
  "email": "string",
  "opening_hours": "json",
  "max_capacity": "integer",
  "advance_booking_days": "integer",
  "cancellation_hours": "integer",
  "created_at": "datetime",
  "updated_at": "datetime"
}
```

---

## NOTAS TÉCNICAS

- **Autenticación**: JWT para endpoints de admin
- **Rate Limiting**: 10 reservas por IP por hora
- **Validaciones**: 
  - Fecha no puede ser en el pasado
  - Hora debe estar dentro del horario de apertura
  - Número de personas entre 1-8
  - Email válido
  - Teléfono válido
- **Notificaciones**: Email automático de confirmación
- **Códigos de confirmación**: 6 dígitos alfanuméricos
- **Disponibilidad**: Verificación en tiempo real
- **Widget**: Responsive, funciona en cualquier sitio web
