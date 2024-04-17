const loginButton = document.querySelector('#submit');

loginButton.addEventListener('click', function() {
    const username = document.getElementById('user');
    const password = document.querySelector('#password');

    if (username.value === 'admin' && password.value === 'admin1234') {
        window.location.href = 'dashboard.html';
    } else if (username.value === '' || password.value === '') {
        alert('Please enter both username and password');
    } else {
        alert('Invalid username or password');
    }
});