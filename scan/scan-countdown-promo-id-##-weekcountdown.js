<script>

/* This script implements a countdown timer for a promotional campaign. It dynamically creates a countdown bar, displays the time remaining until a specific date, and adjusts its position relative to other elements on the page. The script includes helper functions for debugging, debouncing, and observing DOM changes. It also listens for specific messages to initialize the countdown bar based on a unique promotion ID. */

/*** IMPORTANT ***/
/* To use the countdown timer - this script must be updated with the unique promotion ID - copy: #### and replace the one instance with the actual promo id */



// Function to check if the URL has `debug=true` or `log=true` parameters
function isDebugMode() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('debug') === 'true' || urlParams.get('log') === 'true';
}

// Function to conditionally log messages based on the URL parameters
function debugLog(...messages) {
  if (isDebugMode()) {
    console.log(...messages);
  }
}

// Debounce function to limit how often adjustContainerPosition runs for subsequent events
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Function to calculate the remaining time until a specific date
function calculateRemainingTime(targetDate) {
  const now = new Date();
  const timeDifference = targetDate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

const targetDate = new Date('2025-08-07T09:00:00');
function updateCountdown() {
  const remainingTime = calculateRemainingTime(targetDate);

  if (remainingTime.days >= 0) {
    const countdownElement = document.getElementById('countdown-bar');
    countdownElement.textContent = `${remainingTime.days}d ${remainingTime.hours}h ${remainingTime.minutes}m ${remainingTime.seconds}s`;
  } else {
    const countdownElement = document.getElementById('countdown-bar');
    countdownElement.textContent = 'Promotion has ended!';
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

</script>