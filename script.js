function generateCaptcha() {
  const captchaLength = 6;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < captchaLength; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById('captcha').innerText = captcha;
}

function validateCaptcha() {
  const captcha = document.getElementById('captcha').innerText;
  const userInput = document.getElementById('captchaInput').value;

  const message = document.getElementById('message');

  if (userInput === captcha) {
    message.style.color = 'green';
    message.innerText = '✅ CAPTCHA matched!';
  } else {
    message.style.color = 'red';
    message.innerText = '❌ CAPTCHA did not match. Try again!';
  }
}

window.onload = generateCaptcha;
