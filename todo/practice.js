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

   
// const form = document.getElementById("myForm")
// const nameInput = document.getElementById("nameInput")
// const emailInput = document.getElementById("emailInput")
// const messageInput = document.getElementById("messageInput")
// const submitButton = document.getElementById("submitButton")

// submitButton.addEventListener("click", function(event) {
//     event.preventDefault();

//     if(!nameInput.value || !emailInput.value || !messageInput.value){
//         alert("Please fill out all fields");
//     } else {
//     }
// });



// const form = document.querySelector('.form');
// const submitButton=document.querySelector('.letstalk');

// submitButton.addEventListener('click', (event) => {
//     event.preventDefault();
    // if (!nameInput.value || !emailInput.value || !messageInput.value) {
    //     alert('Please fill out all fields');
    //     return;
    //   }

// const formData = new formData(form);
// fetch('process-foorm.php', {
//     method: 'POST',
//     body: formData
// })
// .then(response => {
//     if (response.ok){
//     alert('Form submitted successfully!');
//     form.requestFullscreen(); //clear all input fields
// } else {
//     throw new Error ('Form submission failed.')
// }
// })
// .catch(error => {
//     console.error(error);
//     alert ('There was an error submitting the form, please try again with correct details');
// });
// });