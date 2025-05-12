 // Menú hamburguesa
 const menuIcon = document.querySelector('.menu-icon');
 const navMenu = document.querySelector('.nav-ul');

 menuIcon.addEventListener('click', () => {
     navMenu.classList.toggle('active');
 });

 // Sistema de pestañas
 const tabLinks = document.querySelectorAll('.tab-link');
 const featureContents = document.querySelectorAll('.feature-content'); // NOTA: Selector para la clase común

 // Función para mostrar la pestaña seleccionada
 function showTab(event) {
     event.preventDefault();

     // Quitar clases activas
     tabLinks.forEach(link => link.classList.remove('active'));

     // Ocultar todas las secciones de contenido de las features
     featureContents.forEach(section => {
         section.style.display = 'none'; // NOTA: Se maneja con JavaScript, la clase 'hidden' en CSS haría esto mejor
     });

     // Activar la pestaña actual
     event.currentTarget.classList.add('active');

     // Mostrar la sección correspondiente usando el data-section attribute
     const targetId = event.currentTarget.getAttribute('data-section');
     document.getElementById(targetId).style.display = 'flex'; // NOTA: Se podría usar una clase 'active-tab' en CSS
 }

 // Añadir eventos click a las pestañas
 tabLinks.forEach(link => {
     link.addEventListener('click', showTab);
 });

 // Mostrar la primera pestaña por defecto
 document.getElementById('simple-bookmarking').style.display = 'flex'; // NOTA: Se podría añadir una clase 'active-tab' al HTML inicial

 // Función para el acordeón de preguntas frecuentes
 document.addEventListener('DOMContentLoaded', function() {
     const faqItems = document.querySelectorAll('.faq-item');

     faqItems.forEach(item => {
         const question = item.querySelector('.faq-question');

         question.addEventListener('click', () => {
             // Cerrar todas las demás preguntas
             faqItems.forEach(otherItem => {
                 if (otherItem !== item && otherItem.classList.contains('active')) {
                     otherItem.classList.remove('active');
                 }
             });

             // Alternar la clase 'active' en el elemento actual
             item.classList.toggle('active');
         });
     });
 });

 document.addEventListener('DOMContentLoaded', function() {
     const emailInput = document.getElementById('email-input');
     const errorIcon = document.getElementById('error-icon');
     const errorMessage = document.getElementById('error-message');
     const contactBtn = document.getElementById('contact-btn');

     // Función para validar formato de email
     function isValidEmail(email) {
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         return emailRegex.test(email);
     }

     // Función para mostrar error
     function showError() {
         errorIcon.style.display = 'block';
         errorMessage.style.display = 'block';
         emailInput.classList.add('error');
     }

     // Función para ocultar error
     function hideError() {
         errorIcon.style.display = 'none';
         errorMessage.style.display = 'none';
         emailInput.classList.remove('error');
     }

     // Validar cuando se hace clic en el botón
     contactBtn.addEventListener('click', function(event) {
         if (!isValidEmail(emailInput.value)) {
             event.preventDefault();
             showError();
         } else {
             hideError();

             /*alert('¡Email válido!');*/
         }
     });

     // Resetear errores cuando el usuario comienza a escribir de nuevo
     emailInput.addEventListener('input', function() {
         if (errorIcon.style.display === 'block') {
             hideError();
         }
     });
 });