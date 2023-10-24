
function navslider() {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.burger');
     
    function openbar() {
       nav.classList.toggle('nav-active');
    }
 
    menu.addEventListener('click', openbar);
 }
 
 navslider();




 const faqs = document.querySelectorAll('.faq');

 for (let i = 0; i < faqs.length; i++) {
   const faq = faqs[i];
   
   faq.addEventListener('click', function() {
     faq.classList.toggle('active');
   });
 }