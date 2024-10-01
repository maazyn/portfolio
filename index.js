/* -----------------------------------------
  Have focus outline only for keyboard users
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});



document.getElementById('copy-btn').addEventListener('click', function () {
  const email = document.getElementById('email').innerText;

  // Copy the email to the clipboard
  navigator.clipboard.writeText(email).then(function () {
    // Success notification
    const notification = document.getElementById('notification');
    notification.innerText = 'Email copied!';
    notification.style.color = 'green';

    // Clear the notification after 3 seconds
    setTimeout(() => {
      notification.innerText = '';
    }, 3000);
  }, function () {
    // Error handling
    const notification = document.getElementById('notification');
    notification.innerText = 'Failed to copy!';
    notification.style.color = 'red';

    // Clear the error message after 3 seconds
    setTimeout(() => {
      notification.innerText = '';
    }, 3000);
  });
});
