let cardNumber = document.querySelector('.card-number') 
let cardName = document.querySelector('.card-name')
let cardDate = document.querySelector('.card-date')
let cardMM = document.querySelector('.card-MM')
let cardYY = document.querySelector('.card-YY')
let cardCVC = document.querySelector('.card-CVC')
let inputNumber = document.querySelector('#input-number')
let inputName = document.querySelector('#input-name')
let inputDate = document.querySelectorAll('.input-date')
let inputMM = document.querySelector('.input-MM')
let inputYY = document.querySelector('.input-YY')
let inputCVC = document.querySelector('#input-CVC')
let confirmButton = document.querySelector('#confirm-btn')
let continueButton = document.querySelector('#continue-btn')
let form = document.querySelector('form')
let completeState = document.querySelector('.complete-state')


function inputCheck(input,error,emptyText,text,num){
    if(input.value == ''){
        input.classList.add('invalid')
        error.innerText = emptyText
    }else{
        input.classList.remove('invalid')
        error.innerText = ''
        if(input.value.length >= num){
            input.classList.add('invalid')
            error.innerText = text
        }
    }
}

function inputEmptyCheck(input){
    if(input.value.length == 0){
        input.classList.add('invalid')
    }else{
        input.classList.remove('invalid')
    }
}

inputName.addEventListener('input',(e)=>{
    let name = inputName.value.toUpperCase()
    cardName.innerText = name
    inputCheck(inputName,e.target.nextElementSibling,'cant be blank')
})

inputNumber.addEventListener('input',(e)=>{
    inputCheck(inputNumber,e.target.nextElementSibling,'cant be blank','incurrect Card Number!',17)
    let num = inputNumber.value
    let output = num.toString().match(/\d{1,4}/g)
    cardNumber.innerText = output.join(' ')
})

inputCVC.addEventListener('input',(e)=>{
    cardCVC.innerText = inputCVC.value
    inputCheck(inputCVC,e.target.nextElementSibling,'cant be blank','incurrect CVC',4)
})
inputMM.addEventListener('input',(e)=>{
    cardMM.innerText = inputMM.value
    inputCheck(inputMM,e.target.nextElementSibling.nextElementSibling,'cant be blank','incurrect Date!',3)
})
inputYY.addEventListener('input',(e)=>{
    cardYY.innerText = inputYY.value
    inputCheck(inputYY,e.target.nextElementSibling,'cant be blank','incurrect Date!',3)
})
confirmButton.addEventListener('click',(e)=>{
    inputEmptyCheck(inputName)
    inputEmptyCheck(inputNumber)
    inputEmptyCheck(inputMM)
    inputEmptyCheck(inputYY)
    inputEmptyCheck(inputCVC)

    e.preventDefault()
    if(document.querySelector('form .invalid') == null){
        form.classList.add('hide')
        completeState.classList.remove('hide')
    }
})
continueButton.addEventListener('click',(e)=>{
    form.classList.remove('hide')
    completeState.classList.add('hide')
    location.reload()
})

window.addEventListener('load',()=>{
    inputName.value = ''
    inputNumber.value = ''
    inputMM.value = ''
    inputYY.value = ''
    inputCVC.value = ''
})





