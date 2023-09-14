const form = document.getElementById('comment-form')
form.addEventListener('submit', e => {
    e.preventDefault()
    //create p from submit element
    addCommentToPage(e.target.commentInput.value)
    console.log(e.target.commentInput.value)
    form.reset()
})

// const comment = document.getElementById('comment-input').innerText
// console.log(comment)

function addCommentToPage(comment){
    const p = document.createElement('p')
    p.textContent = comment
    document.getElementById('list').append(p)
    
}

const likeButton= document.getElementById('heart')
const minusButton= document.getElementById('minus')
const plusButton= document.getElementById('plus')
const pauseButton= document.getElementById('pause')

plusButton.addEventListener('click', countNumber)

let count= 0
 function countNumber () {
    count++
    document.getElementById('counter').innerText= count
}    
 
likeButton.addEventListener('click', e => {
    alert('It was clicked')
})
