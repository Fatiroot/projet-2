var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');
var form = document.getElementById('form');

form.addEventListener("submit", function validateName(event) {
    event.preventDefault()
    let name = event.target.querySelector('#namec');


    if (name.value == "") {
        nameError.innerHTML = 'name is required';
        return false;
    }
    if (!name.value.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'please write your ful name';
        return false;
    } else {
        nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

});
form.addEventListener("submit", function validatePhone(event) {
    event.preventDefault()
    let phone = event.target.querySelector('#phonec');


    if (phone.value.length !==10 || phone.value.length === 0) {
        phoneError.innerHTML = 'phone should be 10 digits';
        return false;
    }
    if (!phone.value.match(/^\d+$/)) {
        phoneError.innerHTML = 'phone is required';
        return false;
    } else {
        phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

});

form.addEventListener("submit", function validateEmail(event) {
    event.preventDefault()
    let email = event.target.querySelector('#emailc');


    if (email.value.length == 0) {
        emailError.innerHTML = 'email is required';
        return false;
    } else {
        emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

});
form.addEventListener("submit", function validateMessage(event) {
    event.preventDefault()
    let message = event.target.querySelector('#messagec');
    var required = 30;
    var left = required- message.value.length;
    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    } else {
        messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

});
// form.addEventListener("submit" , function(event){
//     event.preventDefault();
//     if(!validateName(event) || !validatePhone(event) ||  !validateEmail(event) || !validateMessage(event) ){
//         submitError.innerHTML='please fix error to submit ' ;
//         return false;
//     }
// }
// )