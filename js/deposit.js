document.getElementById('deposit-btn').addEventListener('click', function(event){
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    depositField.value = '';
    if(isNaN(parseFloat(depositAmount))) {
        window.alert('Invalid Input!!');
        return;
    }
    const depositTotalElement = document.getElementById('deposit-total');
    depositTotalElement.innerText = parseFloat(depositTotalElement.innerHTML) + parseFloat(depositAmount);
    const totalBalanceElement = document.getElementById('total-balance');
    totalBalanceElement.innerHTML = parseFloat(totalBalanceElement.innerText) + parseFloat(depositAmount);
});