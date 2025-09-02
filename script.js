function sendMail(){
    let parms={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value, 
        message : document.getElementById("message").value,
    }
    emailjs.send("service_5210xq7","template_jggpydd",parms).then(alert("email send!!"))
}