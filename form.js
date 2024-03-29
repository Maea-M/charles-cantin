const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/https://charles-cantin-photos.netlify.app/contact.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => alert("Votre demande a bien été envoyée"))
        .catch((error) => alert(error));
};

document.querySelector("form").addEventListener("submit", handleSubmit);
