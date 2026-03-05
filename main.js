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


document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    status.textContent = "Sending message...";

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {

        form.reset();  // clears fields immediately

        status.textContent = "Thank you! Your message has been sent.";
        status.className = "form-status success";

      } else {

        status.textContent = "Something went wrong. Please try again.";
        status.className = "form-status error";

      }

    } catch (error) {

      status.textContent = "Network error. Please try later.";
      status.className = "form-status error";

    }
  });

});

// document.addEventListener("DOMContentLoaded", () => {

//   const form = document.getElementById("contactForm");
//   const status = document.getElementById("formStatus");

//   if (!form) return;

//   form.addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const data = new FormData(form);

//     try {
//       const response = await fetch(form.action, {
//         method: form.method,
//         body: data,
//         headers: {
//           'Accept': 'application/json'
//         }
//       });

//       if (response.ok) {
//         status.textContent = "Thank you! Your message has been sent.";
//         status.className = "form-status success";
//         form.reset();
//       } else {
//         status.textContent = "Something went wrong. Please try again.";
//         status.className = "form-status error";
//       }

//     } catch (error) {
//       status.textContent = "⚠️ Network error. Please try later.";
//       status.className = "form-status error";
//     }
//   });

// });