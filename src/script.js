let buttons = document.querySelectorAll('.calcButton')
let input = document.getElementById('inputArea')
let  output = document.getElementById('outputArea')
let equate = document.getElementById('equate')
let clearAll = document.getElementById('clearAll')
let clearOne = document.getElementById('clearOne')

buttons.forEach(button => {
    button.addEventListener('click',function (){
        input.innerHTML+=button.innerHTML
    })
});

equate.addEventListener('click',function (){
    output.innerHTML = eval(input.innerHTML)
})

clearAll.addEventListener('click',function (){
    input.innerHTML = ""
})
clearOne.addEventListener('click',function (){
    input.innerHTML = input.innerHTML.substring(0,input.innerHTML.length-1)
})

