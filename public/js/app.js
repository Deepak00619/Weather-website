
console.log('Client side javascript is loaded.')

// fetch('http://puzzle.mead.io/puzzle').then((response) =>{
//     response.json().then((data) =>{
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=nawadah').then((response) =>{
//     response.json().then((data) =>{
//        if(data.error){
//            console.log('error')
//        } else {
//            console.log(data.location);
//            console.log(data.forecast);
//        }
//     })
// })

const weatherForm= document.querySelector('form')
const search= document.querySelector('input')

const messageOne= document.querySelector('#message-1')
//messageOne.textContent= 'from helloworld'
const messageTwo= document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e) =>{
    e.preventDefault()

    const location= search.value

    messageOne.textContent= 'Loading....'
    messageTwo.textContent= ''

    fetch('/weather?address='+location).then((response) =>{
    response.json().then((data) =>{
       if(data.error){
           console.log(data.error)
           messageOne.textContent= data.error
       } else {
           console.log(data.location);
           console.log(data.forecast);
       messageOne.textContent= data.location
        messageTwo.textContent= data.forecast
       }
    })
})
    
})