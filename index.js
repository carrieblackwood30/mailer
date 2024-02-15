const feedbackForm = document.querySelector('#feedback-form')

function sendFeedback(feedback) {
    fetch("/api/feedback", {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(feedback),
    }).then((response) =>response.json()).then(data =>{
        console.log(data)
        alert('accepted')
    }).catch((error) =>{
        console.log(error)
        alert('error')
    })
}

feedbackForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const feedbackFromData = new FormData(e.target)
    console.log('feedbackFromData:', feedbackFromData)
    const feedback = Object.fromEntries(feedbackFromData)
    console.log(feedback)

    sendFeedback(feedback)
})