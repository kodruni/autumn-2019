document.addEventListener('DOMContentLoaded', () => {
  const chat = document.querySelector('#chat');
  
  for(const msg of conversation) {
    const name = msg.name.toLowerCase();
    const msgElm = document.createElement('div');
    msgElm.className = `message ${msg.side}`;
    msgElm.innerHTML = (
      `<div class="head ${name}">
        <img src="img/${name}.png"/>
        </div>
       <div class="text">${msg.text}</div>
       <button class="btn-like">like</button>`
    );

    msgElm.querySelector('.btn-like').addEventListener('click', (event) => {
      if (msg.liked) {
        msg.liked = false;
        event.target.style.backgroundColor = 'initial';
      } else {
        msg.liked = true;
        event.target.style.backgroundColor = 'orange';
      }
    });

    chat.appendChild(msgElm);
  };
});
