
//********************* burger menu*****************/
function navslider() {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.burger');

  const openbar = () => nav.classList.toggle('nav-active')
  menu.addEventListener('click', openbar);
}

navslider();


//**************** FAQ ***********************/

const faqs = document.querySelectorAll('.faq');

for (let i = 0; i < faqs.length; i++) {
  const faq = faqs[i];

  faq.addEventListener('click', () => {
    const activeFaq = document.querySelector(".faq.active");
        if (activeFaq && activeFaq !== faq) {
            activeFaq.classList.remove("active");
        }
  faq.classList.toggle('active');
  });
}





//**********modale fenetre pour la page support (phone , adrees , email)

const links = document.querySelectorAll('.link1');
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  link.addEventListener('click', () => link.classList.toggle('moreActive')
  );
}


