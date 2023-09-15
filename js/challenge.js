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

//PLUS AND MINUS BUTTONS FUNCTIONALITY
plusButton.addEventListener('click', countNumber)
minusButton.addEventListener('click', minusNumber)

let count= 0
 function countNumber () {
    count++
    document.getElementById('counter').innerText= count
}  
function minusNumber () {
    count--
    document.getElementById('counter').innerText= count
}      
 
//LIKE BUTTON FUNCTIONALITY
likeButton.addEventListener('click', handleLikeButton)
likeNum = 0
function handleLikeButton(){
    //alert('It was clicked')
    likeNum++
    console.log(likeNum)
    const li = document.createElement('li')
    li.dataset.count = count
    const likeComment = document.getElementById('likes')
    li.innerText = `${count} was liked ${likeNum} time(s)`
    likeComment.append(li)
} 
//likes per number on same line
//reset like counter for each number

//FAILED EFFORTS
// const myCounter = document.getElementById('counter')
// const myCounterNum = parseInt(myCounter.innerText)
// myCounter.innerText = myCounterNum + 1
// console.log(myCounter)
// console.log(myCounterNum)


//STARTS THE COUNT TIMER
const myCounter = document.getElementById('counter')
document.addEventListener('DOMContentLoaded', function () {
    intervalID = setInterval(function () {
        // const myCounter = document.getElementById('counter')
        // const myCounterNum = parseInt(myCounter.innerText)
        // myCounter.innerText = myCounterNum + 1
        // console.log("hi!")
        count += 1
        myCounter.textContent = count
    }, 1000)
})
//HANDLES THE PAUSE BUTTON TIMER STOP
let intervalID
pauseButton.addEventListener('click', function(){
    clearInterval(intervalID)
})
//DISABLES ALL BUTTONS ON PAUSE
//HANDLES THE RESUME FEATURE