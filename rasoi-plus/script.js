// Demo only: no real bookings, payments or enquiries are sent anywhere.
document.querySelectorAll('form[data-demo]').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = form.querySelector('.message');
    var name = form.querySelector('[name="name"]');
    if (name && name.value.trim() === '') {
      msg.className = 'message error';
      msg.textContent = 'Please enter your name.';
      return;
    }
    msg.className = 'message success';
    msg.textContent = form.dataset.demo + ' (demo only, not a real booking)';
    form.reset();
  });
});

// Simple demo assistant with predefined replies
var chatForm = document.getElementById('chat-form');
if (chatForm) {
  var replies = {
    recipe: 'Try a simple dal tadka: toor dal, onion, tomato, garlic and a tempering of cumin and red chilli.',
    substitute: 'No cream? Use thick cashew paste or full-fat coconut milk as a substitute.',
    price: 'A common rule is to price at 3 to 4 times your ingredient and packaging cost per dish.',
    bakery: 'Start with 3 to 5 signature items, sell through pre-orders, then expand your menu.'
  };
  chatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = document.getElementById('chat-input');
    var text = input.value.trim();
    if (!text) return;
    var box = document.getElementById('chat-box');
    box.insertAdjacentHTML('beforeend', '<div class="bubble user"></div>');
    box.lastElementChild.textContent = text;
    var answer = 'This is a demo assistant. Try asking about a recipe, a substitute, pricing or a bakery idea.';
    var lower = text.toLowerCase();
    for (var key in replies) {
      if (lower.indexOf(key) !== -1) { answer = replies[key]; break; }
    }
    box.insertAdjacentHTML('beforeend', '<div class="bubble bot"></div>');
    box.lastElementChild.textContent = answer;
    box.scrollTop = box.scrollHeight;
    input.value = '';
  });
}
