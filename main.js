// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function hideTheModal() {
  const modal = document.getElementById('modal')
  setTimeout(() => modal.className = "hidden", 3000)
}

function clickTheHeart() {
  document.addEventListener("click", function(event){
   mimicServerCall("randomURL")
    .then(data => {
      console.log(event.target)
      let heartIcon = event.target
      if (heartIcon.innerHTML === EMPTY_HEART){
          heartIcon.innerHTML = FULL_HEART
          heartIcon.className = 'activated-heart'
      } else if (heartIcon.innerHTML === FULL_HEART) {
          heartIcon.innerHTML = EMPTY_HEART 
          heartIcon.className = ''
      }
    })

    .catch((error) => {
      console.log(error)
      document.getElementById('modal').className = ''
      hideTheModal()
      const h2 = document.querySelector('#modal h2')
      h2.textContent = `${error}`
    })

})}
clickTheHeart()
console.log(mimicServerCall())



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
