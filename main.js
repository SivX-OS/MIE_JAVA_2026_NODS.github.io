// ================================
// TYPEWRITER EFFECT (QUOTE)
// ================================
const text = `"If it is humanly possible, consider it to be within your reach." — Marcus Aurelius`;
const speed = 45;

let index = 0;
const target = document.getElementById("typewriter");

function typeWriter() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", typeWriter);

// ================================
// NAV ACTIVE STATE
// ================================
const navItems = document.querySelectorAll('.nav-bar li');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});