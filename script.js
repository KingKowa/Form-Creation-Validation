document.addEventListener('DOMContentLoaded', function(){

const form = document.getElementById('registration-form');

const feedbackDiv = document.getElementById('form-feedback');

const username = document.getElementById('username').value.trim();

const email = document.getElementById('email').value.trm();

const password = document.getElementById('password').value.trim();

let isValid = true;

let messages = [];


form.addEventListener('submit', onSubmit);


function onSubmit(event){
    event.preventDefault();

    if(username.length < 3){
        isValid = false;
        messages.push("Invalid User Name");
    }
}
});