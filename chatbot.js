const chatbot = document.getElementById('chatbot');
const toggleBtn = document.getElementById('chat-toggle');

toggleBtn.addEventListener('click', () => {
    $('#chat-toggle').click(function() {
        $('#chatbot').toggleClass('open');
      });
});