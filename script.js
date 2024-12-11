document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});

function changeAmount(delta) {
    let amountElement = document.getElementById('amount');
    let currentAmount = parseInt(amountElement.textContent);
    let newAmount = currentAmount + delta;
    if (newAmount >= 0) {
        amountElement.textContent = newAmount + 'ml';
        document.getElementById('autoFillInput').value = newAmount + 'ml'; // Автоматически заполняем input
    }
}






