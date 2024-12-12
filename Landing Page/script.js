// Basic form validation for the contact form
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
    } else {
        alert("Thank you for reaching out, " + name + "!");
        // You can send form data to a server here.
    }
});
