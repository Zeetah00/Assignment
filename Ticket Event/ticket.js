const form = document.querySelector('.form');
const nameInput = document.getElementById('userName');
const emailInput = document.getElementById('email');
const dobInput = document.getElementById('dateOfBirth');
const buyButton = document.getElementById('buyButton');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  
  const name = nameInput.value;
  const email = emailInput.value;
  const dob = new Date(dobInput.value);
  const age = calculateAge(dob);

  if (name.trim() === '') {
    alert('Please enter your name');
    return;
  }

  else if (email.trim() === '' || !isValidEmail(email)) {
    alert('Please enter a valid email');
    return;
  }

  else if (age >= 18) {
    alert('You\'re permitted to register');
     form.submit(); 
  } else {
    alert('You are not old enough to register');
  }
});

function calculateAge(dateOfBirth) {
  const now = new Date();
  const diff = now - dateOfBirth;
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}


