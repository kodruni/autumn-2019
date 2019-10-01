document.addEventListener('DOMContentLoaded', () => {
  const chat = document.querySelector('#chat');

  for(const msg of conversation) {
    const name = msg.name.toLowerCase();
    chat.innerHTML += (
      `<div class="message ${msg.side}">
          <div class="head ${name}">
          <img src="img/${name}.png"/>
        </div>
        <div class="text">${msg.text}</div>
       </div>`
    );
  };
});
