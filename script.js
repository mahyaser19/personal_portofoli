document.getElementById('cv-upload').addEventListener('change', function() {
  const file = this.files[0];
  document.getElementById('cv-filename').textContent = file ? file.name : '';
});
document.getElementById('work-upload').addEventListener('change', function() {
  const files = Array.from(this.files).map(f => f.name).join(', ');
  document.getElementById('work-filenames').textContent = files;
});

// Typing animation for name and title
function typeText(elementId, text, speed, callback) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById(elementId).innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      callback();
    }
  }
  typing();
}
window.addEventListener('DOMContentLoaded', function() {
  typeText('typed-name', 'Mahmoud Yasser', 100, function() {
    typeText('typed-title', 'Software Engineer', 80);
  });
}); 