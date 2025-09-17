(function() {
  'use strict';
  
  // Configuración del widget
  const CONFIG = {
    apiUrl: 'https://api.conexianet.com',
    widgetId: null,
    version: '1.0.0'
  };
  
  // Obtener widget ID de los parámetros del script
  function getWidgetId() {
    const scripts = document.getElementsByTagName('script');
    for (let script of scripts) {
      if (script.src && script.src.includes('reservations.js')) {
        const url = new URL(script.src);
        CONFIG.widgetId = url.searchParams.get('id') || 'default';
        break;
      }
    }
  }
  
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
        <div id="reservation-message" style="display: none; margin-top: 15px; padding: 10px; border-radius: 4px;"></div>
      </div>
    `;
    
    return widget;
  }
  
  // Aplica estilos personalizados
  function applyCustomStyles(styles) {
    const style = document.createElement('style');
    style.id = 'conexia-widget-styles';
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
        position: relative;
      }
      
      #conexia-reservation-widget h3 {
        color: ${styles.primary_color || '#06b6d4'};
        text-align: center;
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: bold;
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
        box-sizing: border-box;
        transition: border-color 0.3s ease;
      }
      
      #conexia-reservation-widget input:focus,
      #conexia-reservation-widget select:focus,
      #conexia-reservation-widget textarea:focus {
        outline: none;
        border-color: ${styles.primary_color || '#06b6d4'};
        box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.2);
      }
      
      #conexia-reservation-widget button {
        width: 100%;
        padding: 12px;
        background: ${styles.primary_color || '#06b6d4'};
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        margin-top: 10px;
        transition: all 0.3s ease;
      }
      
      #conexia-reservation-widget button:hover {
        opacity: 0.9;
        transform: translateY(-1px);
      }
      
      #conexia-reservation-widget button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
      }
      
      #reservation-message.success {
        background: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
      }
      
      #reservation-message.error {
        background: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
      }
      
      #reservation-message.loading {
        background: #d1ecf1;
        color: #0c5460;
        border: 1px solid #bee5eb;
      }
      
      .loading-spinner {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid #ffffff;
        border-radius: 50%;
        border-top-color: transparent;
        animation: spin 1s ease-in-out infinite;
        margin-right: 8px;
      }
      
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      
      @media (max-width: 480px) {
        #conexia-reservation-widget {
          margin: 10px;
          padding: 15px;
        }
      }
    `;
    
    // Remover estilos anteriores si existen
    const existingStyle = document.getElementById('conexia-widget-styles');
    if (existingStyle) {
      existingStyle.remove();
    }
    
    document.head.appendChild(style);
  }
  
  // Muestra mensaje al usuario
  function showMessage(message, type = 'success') {
    const messageEl = document.getElementById('reservation-message');
    messageEl.textContent = message;
    messageEl.className = type;
    messageEl.style.display = 'block';
    
    // Auto-ocultar después de 5 segundos
    setTimeout(() => {
      messageEl.style.display = 'none';
    }, 5000);
  }
  
  // Valida el formulario
  function validateForm(formData) {
    const errors = [];
    
    // Validar nombre
    if (!formData.get('full_name') || formData.get('full_name').trim().length < 2) {
      errors.push('El nombre debe tener al menos 2 caracteres');
    }
    
    // Validar teléfono
    const phone = formData.get('phone').replace(/\s/g, '');
    if (!phone || !/^[+]?[\d\s\-\(\)]{9,}$/.test(phone)) {
      errors.push('El teléfono no es válido');
    }
    
    // Validar email
    const email = formData.get('email');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('El email no es válido');
    }
    
    // Validar fecha
    const date = new Date(formData.get('date'));
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (!formData.get('date') || date < today) {
      errors.push('La fecha debe ser hoy o en el futuro');
    }
    
    // Validar hora
    if (!formData.get('time')) {
      errors.push('Debe seleccionar una hora');
    }
    
    // Validar número de personas
    const people = parseInt(formData.get('people'));
    if (!people || people < 1 || people > 8) {
      errors.push('El número de personas debe estar entre 1 y 8');
    }
    
    return errors;
  }
  
  // Envía reserva al backend
  async function submitReservation(formData) {
    const submitButton = document.querySelector('#reservation-form button[type="submit"]');
    const originalText = submitButton.textContent;
    
    try {
      // Mostrar estado de carga
      submitButton.disabled = true;
      submitButton.innerHTML = '<span class="loading-spinner"></span>Procesando...';
      showMessage('Procesando tu reserva...', 'loading');
      
      const response = await fetch(`${CONFIG.apiUrl}/api/reservations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.get('full_name').trim(),
          phone: formData.get('phone').trim(),
          email: formData.get('email').trim(),
          date: formData.get('date'),
          time: formData.get('time'),
          people: parseInt(formData.get('people')),
          notes: formData.get('notes').trim(),
          widget_id: CONFIG.widgetId
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        showMessage('¡Reserva confirmada! Te hemos enviado un email de confirmación.', 'success');
        document.getElementById('reservation-form').reset();
      } else {
        showMessage(result.message || 'Error al procesar la reserva. Por favor, inténtalo de nuevo.', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      showMessage('Error de conexión. Por favor, inténtalo de nuevo.', 'error');
    } finally {
      // Restaurar botón
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  }
  
  // Carga configuración del widget
  async function loadWidgetConfig() {
    try {
      const response = await fetch(`${CONFIG.apiUrl}/api/widget/config/${CONFIG.widgetId}`);
      const config = await response.json();
      return config.widget || {};
    } catch (error) {
      console.warn('No se pudo cargar la configuración del widget, usando valores por defecto:', error);
      return {};
    }
  }
  
  // Inicializa el widget
  async function init() {
    // Obtener widget ID
    getWidgetId();
    
    if (!CONFIG.widgetId) {
      console.error('ConexiaNet Widget: No se encontró el ID del widget');
      return;
    }
    
    // Crear widget
    const widget = createReservationWidget();
    document.body.appendChild(widget);
    
    // Cargar configuración y aplicar estilos
    const config = await loadWidgetConfig();
    applyCustomStyles(config);
    
    // Configurar fecha mínima (hoy)
    const dateInput = document.querySelector('input[name="date"]');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    
    // Configurar hora mínima
    const timeInput = document.querySelector('input[name="time"]');
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    timeInput.setAttribute('min', currentTime);
    
    // Manejar envío del formulario
    document.getElementById('reservation-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      
      // Validar formulario
      const errors = validateForm(formData);
      if (errors.length > 0) {
        showMessage(errors.join('. '), 'error');
        return;
      }
      
      submitReservation(formData);
    });
    
    console.log('ConexiaNet Widget cargado correctamente');
  }
  
  // Inicializar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

