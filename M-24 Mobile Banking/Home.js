// Home
let addMoneyPage = document.querySelector('#addMoney')
let GetBonusPage = document.querySelector('#GetBonus')
let CashOutPage = document.querySelector('#CashOut')

addMoneyPage.addEventListener('click', e=> {
    window.location.href = 'addMoney.html'
})

GetBonusPage.addEventListener('click', e=> {
    window.location.href = 'GetBonus.html'
})

CashOutPage.addEventListener('click', e=> {
    window.location.href = 'CashOut.html'
})

let balanceSelect  = document.querySelector('#balance')

if(localStorage.getItem('balance'))
{
    let balance = JSON.parse(localStorage.getItem('balance'))
    balanceSelect.textContent = balance
}



