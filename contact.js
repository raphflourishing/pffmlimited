
const scriptURL = 'https://script.google.com/macros/s/AKfycbyN_2-FWJyNuN363JzBQ7ZoMQVCTjkdferYqBJwiyIeDImkmaAzN6K5Ic7447bqXwBi/exec'
 


const form = document.forms['contact-form']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submittd successfully"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error', error.message))

    
});

