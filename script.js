document.addEventListener('DOMContentLoaded', function(){

const form = document.getElementById('registration-form');

const feedbackDiv = document.getElementById('form-feedback');

const username = document.getElementById('username').value.trim();

const email = document.getElementById('email').value.trim();

const password = document.getElementById('password').value.trim();

let isValid = true;

let messages = [];

let validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2, 4})$/;


form.addEventListener('submit', onSubmit);


function onSubmit(event){
    event.preventDefault();

    if(username.length < 3){
        isValid = false;
        messages.push("Invalid User Name");
        feedbackDiv.style.display="block";
        feedbackDiv.innerHTML="<p>messages.join(<br>)</p>";
        feedbackDiv.style.color="#dc3545";
    }else{
        feedbackDiv.style.display="block";
        feedbackDiv.textContent="Registration successful!";
        feedbackDiv.style.color="#28a745";
    }
    if(!email.match(validEmail)){
        isValid = false;
        messages.push("Invalid Email Address");
    }
    if(password.length < 8){
        isValid = false;
        messages.push("Password is too short. Minimum of 8 characters required");
    }
}
});