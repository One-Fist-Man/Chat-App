
const chatMessages = document.querySelector('.chat-messages')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChatBtn = document.querySelector('.clear-chat-button')

const messages = JSON.parse(localStorage.getItem('messages')) || []

const createChatMessageElement = (message) => `
<div class="receiver-part">
<img src="image/mehedi.jpg" alt="receiver-image">
<div class="receiver-name-and-text">
<div class="receiver-name"><h5>Mehedi</h5></div>
<div class="receiver-text" >
 <p>${message.text}</p>
</div>
</div>
</div>
`

let cnt=1
let messageSender = 'John'

const sendMessage = (e) => {
  
  e.preventDefault()

  const message = {
    sender: messageSender,
    text: chatInput.value,

  }


  /* Save message to local storage */
  messages.push(message)
  localStorage.setItem('messages', JSON.stringify(messages))

  /* Add message to DOM */
  chatMessages.innerHTML += createChatMessageElement(message)

  /* Clear input field */
  chatInputForm.reset()

  /*  Scroll to bottom of chat messages */
  chatMessages.scrollTop = chatMessages.scrollHeight

  /*  Take a array of messages for automated send */
  var arr=[ 
    {clsName:"assistant-message",mess:"hello"},
    {clsName:"assistant-message",mess:"How are you?"},
    {clsName:"assistant-message",mess:"i am well!"},
    {clsName:"assistant-message",mess:"hello"},
    {clsName:"assistant-message",mess:"hello"},
    {clsName:"assistant-message",mess:"hello "},
    {clsName:"assistant-message",mess:"hello"},
    {clsName:"assistant-message",mess:"hello"},
    
  ]

  const createChatMessageElement2 = (mess) => `
  <div class="sender-part">
  <img src="image/rafi.jpg" alt="Sender-photo">
  <div class="sender-name-and-text">
      <div class="sender-name"><h5>Arafat</h5></div>
      <div class="sender-text" id="sender-typed-message">
          <div class="assistant-message">${mess}</div>
      </div>
  </div>
  </div>
`
       if(cnt>=arr.length) cnt=1;
   
        setTimeout(function() {

    chatMessages.innerHTML +=  createChatMessageElement2(arr[cnt].mess)
    cnt++;

  },cnt* 3000); // Set timeout for delay as needed

}

chatInputForm.addEventListener('submit', sendMessage)


