document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    withdrawAmount = withdrawField.value;  
    withdrawField.value = '';
    if(isNaN(parseFloat(withdrawAmount))) {
        window.alert('Invalid Input!!');
        return;
    }
    const totalBalanceElement = document.getElementById('total-balance');
    if(parseFloat(withdrawAmount) > parseFloat(totalBalanceElement.innerText)) {
        window.alert('Insufficient Balance!!');
        return;
    }
    const withdrawTotalElement = document.getElementById('withdraw-total');
    withdrawTotalElement.innerText = parseFloat(withdrawTotalElement.innerText) + parseFloat(withdrawAmount);
    totalBalanceElement.innerText = parseFloat(totalBalanceElement.innerText) - parseFloat(withdrawAmount);
});