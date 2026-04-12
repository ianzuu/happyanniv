const correctPassword = 'pabji tidak?';
const targetUrl = 'anniversary.html';
let attemptCount = 0;

const errorMessages = [
    '😭 Cek chat kita dulu!',
    '🤔 Blum di cek kah?',
    '💔 ohh gatau kamu yaa...',
    '😢 bukan ituu tauuk...',
    
];

function redirectIfValid() {
    const input = document.getElementById('passwordInput');
    const value = input.value.trim();

    if (value === correctPassword) {
        window.location.href = targetUrl;
    } else {
        attemptCount++;
        const messageIndex = Math.min(attemptCount - 1, errorMessages.length - 1);
        alert('❌ ' + errorMessages[messageIndex]);
        input.value = '';
        input.focus();
    }
}

document.getElementById('loginBtn').addEventListener('click', redirectIfValid);
document.getElementById('passwordInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        redirectIfValid();
    }
});

// Toggle password visibility
let isPasswordVisible = false;
const togglePasswordBtn = document.getElementById('togglePasswordBtn');
const passwordInput = document.getElementById('passwordInput');

togglePasswordBtn.addEventListener('click', function() {
    isPasswordVisible = !isPasswordVisible;
    passwordInput.type = isPasswordVisible ? 'text' : 'password';
    togglePasswordBtn.textContent = isPasswordVisible ? '○' : '●';
});


let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);