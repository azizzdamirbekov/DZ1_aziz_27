const phoneInput = document.getElementById('phone_input')
const phoneButton = document.getElementById('phone_button')
const phoneResult = document.getElementById('phone_result')

var regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneInput.value = '+996 '

phoneButton.addEventListener('click', () =>{
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'CORRECT'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'UNCORRECT'
        phoneResult.style.color = 'red'
    }
})