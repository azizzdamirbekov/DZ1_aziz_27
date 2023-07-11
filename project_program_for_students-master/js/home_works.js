const gmailInput = document.getElementById('gmail_input')
const gmailButton = document.getElementById('gmail_button')
const gmailResult = document.getElementById('gmail_result')


const regExp = /\@gmail.com$/

gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'CORRECT'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.textContent = 'INCORRECT'
        gmailResult.style.color = 'red'
    }
})


const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let block = 0;

function move() {
    childBlock.style.left = block + 'px'
    block++
    if(block >= 448){
        return
    }
    setTimeout(move, 10)
}
move()


