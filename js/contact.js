function sendEmail() {

    let pars={

      name  : document.getElementById("name").value,
      email  : document.getElementById("email").value,
      contact  : document.getElementById("phone").value,
      subject  : document.getElementById("subject").value,
      message  : document.getElementById("message").value,
      form: document.getElementById("form").addEventListener("click",function(event){
        event.preventDefault()
      })
     
    }
    emailjs.send("service_7qzi3jq","template_4koe25q",pars).then(alert("Sent ...!")) 
}
   
