const hearts = document.querySelectorAll('.heart');
  hearts.forEach(heart => {
    heart.style.left = Math.random() * 100 + '%'; // random horizontal start
    heart.style.top = '100%'; // start from bottom
  });

  function moveHearts() {
    hearts.forEach(heart => {
      let top = parseFloat(heart.style.top);
      top -= 1; // uniform speed for all hearts
      if(top < -10) top = 100; // reset to bottom when off-screen
      heart.style.top = top + '%';
    });
    requestAnimationFrame(moveHearts);
  }

  moveHearts();

  // === Visitor Counter Loader ===

// Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  // Show temporary text
  const counter = document.getElementById('dupli_hit_counter');
  if (counter) {
    counter.textContent = "Loading...";
  }

  // Dynamically load the counter script
  const script = document.createElement("script");
  script.src = "https://visitorshitcounter.com/js/badgess.js?v=1761534968";
  script.async = true;
  document.body.appendChild(script);

  // Optional fallback if it takes too long
  setTimeout(() => {
    if (counter && (counter.textContent.trim() === "Loading..." || counter.textContent.trim() === "")) {
      counter.textContent = "Please wait...";
    }
  }, 2000);
});

