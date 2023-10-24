
function navslider() {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.burger');

  const openbar = () => nav.classList.toggle('nav-active')
  // function openbar() {
  //    nav.classList.toggle('nav-active');
  // }

  menu.addEventListener('click', openbar);
}

navslider();




const faqs = document.querySelectorAll('.faq');

for (let i = 0; i < faqs.length; i++) {
  const faq = faqs[i];

  faq.addEventListener('click', () => faq.classList.toggle('active')
  );
}





const links = document.querySelectorAll('.link1');
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.addEventListener('click', () => link.classList.toggle('moreActive')
  );
}


