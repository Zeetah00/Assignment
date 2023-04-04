const form = document.getElementById("myForm")

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting automatically

const nameInput = document.getElementById("nameInput").value;
const emailInput = document.getElementById("emailInput").value;
const messageInput = document.getElementById("messageInput").value;
const submitButton = document.getElementById("submitButton").value;

//perform validation checks
if (!nameInput.trim()){
    alert("Please enter your name");
} else if (!emailInput.trim() || !isValidEmail(emailInput)){
    alert("Please enter a valid email address");
}
else if (!messageInput.trim()){
    alert("Please enter a message");
} else {
  form.submit ();
} 
});

function isValidEmail(email) {
    // Regex pattern to check for valid email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}



