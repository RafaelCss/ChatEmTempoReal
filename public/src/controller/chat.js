  
  const socket = io();

  const messages = document.getElementById('messages');
  const form = document.getElementById('submit');
  const input = document.getElementById('text-message');
  
  form.addEventListener('click', function(e) {
    e.preventDefault();
    if (input.value) {
      socket.emit('chat message', input.value);
      input.value = '';
    }
  });
  
  socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });