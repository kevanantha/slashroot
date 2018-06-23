const countdown = document.querySelector('.countdown');

// Set Launch Date (ms)
const launchDate = new Date('Augv 1, 2018 13:00:00').getTime();

// Set every second
const interval = setInterval(() => {
  // get todays date and time (ms)
  const today = new Date().getTime();
  
  // Distance from today to the launchDate
  const distance = launchDate - today;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display countdown
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
  `;

  // If launch date passed
  if (distance < 0) {
    // Stop countdown
    clearInterval(interval);
    // Style and output text
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched!';
  }
}, 1000);