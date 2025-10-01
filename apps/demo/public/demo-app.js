/**
 * Root Block Design System - Demo App
 * JavaScript minimalista para la demo
 */

// Importar Web Components (ruta relativa desde public/)
import '../../../libs/ui/dist/index.js';

// Estado
let eventLog = [];
const MAX_LOG_ENTRIES = 15;

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  setupControls();
  setupEventLogger();
  logEvent('🚀 Demo inicializado con Jelpit Light');
}

// Configurar selectores de marca y tema
function setupControls() {
  const brandSelect = document.getElementById('brand-select');
  const themeSelect = document.getElementById('theme-select');

  if (brandSelect) {
    brandSelect.addEventListener('change', (e) => {
      const brand = e.target.value;
      loadTheme(brand, themeSelect.value);
      logEvent(`🎨 Marca cambiada a: ${getBrandLabel(brand)}`);
    });
  }

  if (themeSelect) {
    themeSelect.addEventListener('change', (e) => {
      const theme = e.target.value;
      loadTheme(brandSelect.value, theme);
      logEvent(`🌓 Tema cambiado a: ${theme}`);
    });
  }
}

// Configurar event logger
function setupEventLogger() {
  // Botón para limpiar log
  const clearBtn = document.getElementById('clear-log');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      eventLog = [];
      updateEventLog();
      logEvent('🗑️ Log limpiado');
    });
  }

  // Escuchar eventos de botones
  document.addEventListener('rb-button-click', (e) => {
    const button = e.target;
    const variant = button.getAttribute('variant') || 'default';
    const size = button.getAttribute('size') || 'medium';
    const text = button.textContent?.trim() || 'Unknown';
    
    logEvent(`🖱️ Button: variant="${variant}" size="${size}" text="${text}"`);
  });
}

// Cargar tema dinámicamente
function loadTheme(brand, theme) {
  const themeLink = document.getElementById('theme-css');
  if (themeLink) {
    const cssPath = `/tokens/${brand}-${theme}.css`;
    themeLink.href = cssPath;
  }

  // Actualizar atributos HTML
  document.documentElement.setAttribute('data-brand', brand);
  document.documentElement.setAttribute('data-theme', theme);
}

// Agregar evento al log
function logEvent(message) {
  eventLog.unshift({
    timestamp: new Date(),
    message
  });

  if (eventLog.length > MAX_LOG_ENTRIES) {
    eventLog = eventLog.slice(0, MAX_LOG_ENTRIES);
  }

  updateEventLog();
}

// Actualizar el DOM del event log
function updateEventLog() {
  const logContent = document.getElementById('event-log-content');
  if (!logContent) return;

  logContent.innerHTML = eventLog
    .map(entry => {
      const time = entry.timestamp.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      return `
        <div class="event-item">
          <span class="event-time">[${time}]</span> ${entry.message}
        </div>
      `;
    })
    .join('');
}

// Helper para labels de marcas
function getBrandLabel(brand) {
  const labels = {
    'jelpit': 'Jelpit',
    'davivienda': 'Davivienda',
    'cien-cuadras': 'Cien Cuadras',
    'doctor-aki': 'Doctor Aki',
    'seguros-bolivar': 'Seguros Bolívar',
    'white-label': 'White Label'
  };
  return labels[brand] || brand;
}
