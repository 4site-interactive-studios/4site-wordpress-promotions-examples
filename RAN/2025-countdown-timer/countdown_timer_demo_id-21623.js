<script>
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

  // Function to check for elements and log their positions
  function adjustContainerPosition() {
      const countdownBar = document.querySelector('.countdown-bar');
      const container = document.querySelector('.foursiteDonationLightbox-container');
      const footer = document.querySelector('.dl-footer');

      debugLog('Checking elements:');
      debugLog('Countdown Bar:', countdownBar);
      debugLog('Container:', container);
      debugLog('Footer:', footer);

      if (countdownBar && container && footer) {
          const countdownBarTop = countdownBar.getBoundingClientRect().top;
          const footerBottom = footer.getBoundingClientRect().bottom;
          const windowHeight = window.innerHeight;

          const spaceBelowFooter = windowHeight - footerBottom;
          const spaceAboveCountdownBar = countdownBarTop;

          debugLog(`Space Above Countdown Bar: ${spaceAboveCountdownBar}px`);
          debugLog(`Space Below Footer: ${spaceBelowFooter}px`);
      } else {
          debugLog('One or more required elements were not found.');
      }
  }

  // Debounced version of adjustContainerPosition (200ms) for subsequent events
  const debouncedAdjustPosition = debounce(adjustContainerPosition, 200);

  // Countdown Timer Logic
  function startCountdown() {
      const hoursEl = document.getElementById('hours');
      const minutesEl = document.getElementById('minutes');
      const secondsEl = document.getElementById('seconds');

      function updateTimer() {
          const now = new Date();
          const midnight = new Date();
          midnight.setHours(24, 0, 0, 0); // Next midnight
          const timeDifference = midnight - now;

          if (timeDifference <= 0) {
              // Reset timer for the next day
              midnight.setDate(midnight.getDate() + 1);
          }

          const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
          const seconds = Math.floor((timeDifference / 1000) % 60);

          hoursEl.textContent = hours.toString().padStart(2, '0');
          minutesEl.textContent = minutes.toString().padStart(2, '0');
          secondsEl.textContent = seconds.toString().padStart(2, '0');
      }

      setInterval(updateTimer, 1000);
      updateTimer(); // Call once immediately to avoid delay
  }

  // Observe changes to the document for the addition of new elements
  const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
              // Check if the added node has the attribute `promotion-id="108611"`
              if (node.nodeType === 1 && node.hasAttribute('promotion-id') && node.getAttribute('promotion-id') === '108611') {
                  debugLog('Element with promotion-id="108611" has been added to the page');

                  // Create the new countdown bar div
                  const newDiv = document.createElement('div');
                  newDiv.classList.add('countdown-bar');

                  // Add a heading
                  const h2Element = document.createElement('h2');
                  h2Element.classList.add('h2', 'mb-2xs');
                  h2Element.textContent = 'Limited time match';

                  // Add countdown timer HTML
                  newDiv.appendChild(h2Element);
                  newDiv.innerHTML += `
                      <div class="countdown-timer">
                          <div class="time-block">
                      <span id="hours">00</span>
                   <label>HR</label>

                          </div>
                       <div class="colon">:</div>
    <div class="time-block">
        <span id="minutes">00</span>
        <label>MIN</label>
                          </div>
                      <div class="colon">:</div>
    <div class="time-block">
        <span id="seconds">00</span>
        <label>SEC</label>
                          </div>
                      </div>`;

                  // Insert the new div before the .dl-content element
                  const dlContent = document.querySelector('.dl-content');
                  if (dlContent) {
                      dlContent.insertAdjacentElement('beforebegin', newDiv);
                      debugLog('A countdown bar was added before .dl-content');
                      adjustContainerPosition();

                      // Start the countdown timer
                      startCountdown();
                  }

                  observer.disconnect(); // Stop observing after element is added
              }
          });
      });
  });

  // Start observing the document body for child list changes
  observer.observe(document.body, { childList: true, subtree: true });

  // Adjust position on window resize (debounced)
  window.addEventListener('resize', debouncedAdjustPosition);

  // Listen for changes in the .countdown-bar size (if it dynamically changes)
  const countdownBarObserver = new MutationObserver(() => {
      debouncedAdjustPosition();
  });

  // Start observing changes to the .countdown-bar
  countdownBarObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
  });

  // Run the adjustContainerPosition function immediately on page load
  document.addEventListener('DOMContentLoaded', adjustContainerPosition);
</script>
