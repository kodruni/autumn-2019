document.addEventListener('DOMContentLoaded', () => {
  const padlock = document.querySelector('#padlock');
  const message = document.querySelector('#message');
  
  padlock.addEventListener('mouseenter', () => {
    message.classList.remove('hidden');  
  });

  padlock.addEventListener('mouseleave', () => {
    message.classList.add('hidden');
  });
});
