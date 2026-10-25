'use strict';
const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('academiadigital3010@gmail.com');
    copyStatus.textContent = 'Correo copiado. Ya puedes pegarlo en tu mensaje.';
    copyButton.textContent = 'Copiado ✓';
  } catch {
    copyStatus.textContent = 'No se pudo copiar automáticamente. Selecciona el correo o pulsa “Escribir a soporte”.';
  }
});
