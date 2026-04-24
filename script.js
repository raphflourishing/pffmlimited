const { response } = require("express");

//Newsletter form submittion
const scriptURL = 'https://script.google.com/macros/s/AKfycbwFpia9VwKCWOpR8lcjTfKVEic25M1057AR1RvT-Ew06vze8eQPDcLqtxDJ4dESchbn/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank You For Subscribing!"
        setTimeout(function(){
             msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


//for the contact form





   //this section is for newsltter

   function subscribe() {
    var email = document.getElementById('emailInput').value;
    var message = document.getElementById('message');
    
    if (validateEmail(email)) {
        message.textContent = 'Subscribed successfully!';
        message.style.color = '#28a745';
    } else {
        message.textContent = 'Please enter a valid email address.';
        message.style.color = '#dc3545';
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}



// this section is for sliding in lm


  // Initialize ScrollReveal
  ScrollReveal().reveal('#about1', { delay: 200, origin: 'left', distance: '50px', });
  ScrollReveal().reveal('#about2', { delay: 200, origin: 'right', distance: '50px', });
  ScrollReveal().reveal('#about3', { delay: 200, origin: 'left', distance: '50px', });
  ScrollReveal().reveal('#about4', { delay: 200, origin: 'right', distance: '50px', });



    function submitNewsletter() {
        const email = document.getElementById('email').value;
        const responseMessage = document.getElementById('responseMessage');

        if (email) {
            fetch('https://raphairdrop.example.com/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    responseMessage.style.display = 'block';
                    responseMessage.textContent = 'Thank you for signing up!';
                } else {
                    responseMessage.style.display = 'block';
                    responseMessage.textContent = 'Failed to sign up. Please try again.';
                }
            })
            .catch(error => {
                responseMessage.style.display = 'block';
                responseMessage.textContent = 'An error occurred. Please try again.';
            });
        } else {
            responseMessage.style.display = 'block';
            responseMessage.textContent = 'Please enter a valid email address.';
        }
    }