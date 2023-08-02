
const form = document.forms['contact_us'];

// console.log(document.forms['contact_us']);
form.addEventListener('submit', e => {
  e.preventDefault()
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwn2bk46nIxL8U4D8dtAT2PhSLFRJwm-YUCqjLmX1Np-Hbv9xFZmNccjdc8h0sLSS4Raw/exec'
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))

})
form.addEventListener('submit', e=>{

    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    fetch('https://api.propacity.in/api/v1/webhooks/integration/794d3601-ec97-454f-a3b8-6c5961ff8da8/insertLead',{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, message })
  }
        ).then(()=>{
            console.log("Data sent to API successfully.");
        }).catch(()=>{
            console.log("Data has not sent to API successfully.");
        })


})
