//TAKES IN COMMENTS AND ADDS COMMENTS TO PAGE
const form = document.getElementById('comment-form')
form.addEventListener('submit', e => {
    e.preventDefault()
    //create p from submit element
    addCommentToPage(e.target.commentInput.value)
    console.log(e.target.commentInput.value)
    form.reset()
})

function addCommentToPage(comment){
    const p = document.createElement('p')
    p.textContent = comment
    document.getElementById('list').append(p)
    
}

//BUTTON VARIABLES 
const likeButton= document.getElementById('heart')
const minusButton= document.getElementById('minus')
const plusButton= document.getElementById('plus')
const pauseButton= document.getElementById('pause')
const submitButton = document.getElementById('submit')

/////////////TIMER FUNCTIONALITIES////////////
const myCounter = document.getElementById('counter')
let intervalID = setInterval(increment, 1000)
function increment() { 
    myCounter.textContent++
}
let paused = false

//PLUS AND MINUS BUTTONS
plusButton.addEventListener('click', countNumber)
minusButton.addEventListener('click', minusNumber)
function countNumber () {
    myCounter.textContent++
    //document.getElementById('counter').innerText= count
}  
function minusNumber () {
    myCounter.textContent--
    //document.getElementById('counter').innerText= count
}      

//STARTS THE COUNT TIMER
// document.addEventListener('DOMContentLoaded', function () {
//     intervalID = setInterval(function () {
//         count += 1
//         myCounter.textContent = count
//     }, 1000)
// })

//PAUSE BUTTON
pauseButton.addEventListener('click', function(){
    paused = !paused
    const buttons = [likeButton, plusButton, minusButton, submitButton]
    buttons.forEach( button => button.disabled = paused)
    pauseButton.innerText = paused ? 'resume' : 'pause'
    if (paused) {
        clearInterval(intervalID)
    } else {
        intervalID = setInterval(increment, 1000)
    }
})

//LIKE BUTTON FUNCTIONALITY
likesContainer = document.getElementById('likes')
likeButton.addEventListener('click', handleLikeButton)

function handleLikeButton(){
    //alert('It was clicked')
    const theNum = myCounter.innerText
    const foundLi = document.getElementById(`num-${theNum}`)
    if(foundLi) {
        const thatSpan = foundLi.querySelector('span')
        thatSpan.innerText++
        if(thatSpan.innerText == '2'){
            foundLi.append('s')
        }
    } else {
        const theText = `${theNum} has been liked <span>1</span> time` 
        const li = document.createElement('li')
        li.id = `num-${theNum}`
        li.innerHTML = theText
        likesContainer.append(li)

    }
} 
//likes per number on same line
//reset like counter for each number

//FAILED EFFORTS
// const myCounter = document.getElementById('counter')
// const myCounterNum = parseInt(myCounter.innerText)
// myCounter.innerText = myCounterNum + 1
// console.log(myCounter)
// console.log(myCounterNum)

