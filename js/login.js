document.getElementById('submit-btn').addEventListener('click', function() {
    const email = document.getElementById('email-field').value;
    const password = document.getElementById('password-field').value;
    if(email == 'amrita15-3792@diu.edu.bd' && password == '202153792') {
        console.log('welcome');
        // window.location.href = "bank.html";
        window.location.replace("bank.html");
    } else {
        window.alert('Invalid Email or password!!');
    }
});

