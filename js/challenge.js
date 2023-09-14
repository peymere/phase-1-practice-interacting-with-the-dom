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
