document.getElementById('login-button').addEventListener('click', function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    alert('Login successful: '+email);
  } else {
    alert('Please fill in both email and password');
  }
});

document.getElementById('forgot-password-link').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Redirecting to password recovery...');
});
