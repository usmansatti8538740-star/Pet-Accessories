// LOGIN PAGE JAVASCRIPT

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simple validation
  if (!email || !password) {
    showToast('⚠️ Please fill in all fields');
    return;
  }

  // Simulate login process
  showToast('🔐 Signing you in...');

  // In a real app, you'd send this to your backend
  // For demo, just redirect after a short delay
  setTimeout(() => {
    window.location.href = 'pawlux_website.html';
  }, 1500);
});

// Google Sign-In initialization
function initializeGoogleSignIn() {
  google.accounts.id.initialize({
    client_id: 'YOUR_GOOGLE_CLIENT_ID_HERE', // Replace with your actual Google Client ID
    callback: handleGoogleSignIn
  });

  // Render the Google Sign-In button
  google.accounts.id.renderButton(
    document.querySelector('.g_id_signin'),
    {
      theme: 'outline',
      size: 'large',
      text: 'signin_with',
      shape: 'rectangular',
      logo_alignment: 'left'
    }
  );
}

// Handle Google Sign-In response
function handleGoogleSignIn(response) {
  // The response.credential contains the JWT token
  console.log('Google Sign-In successful:', response);

  // In a real app, send this token to your backend for verification
  // For demo, just redirect to the main site
  showToast('🔐 Signing you in with Google...');
  setTimeout(() => {
    window.location.href = 'pawlux_website.html';
  }, 1500);
}

// Toast notification function
let toastTimeout;
function showToast(msg) {
  // Create toast element if it doesn't exist
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    toast.innerHTML = '<span id="toastMsg"></span>';
    document.body.appendChild(toast);
  }

  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

// Initialize when Google script loads
window.onload = function() {
  // Check if Google Identity Services is loaded
  if (typeof google !== 'undefined' && google.accounts) {
    initializeGoogleSignIn();
  } else {
    // Fallback if Google script fails to load
    console.log('Google Sign-In not available');
  }
};

// Add some visual enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Add focus effects to inputs
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
    });
  });
});