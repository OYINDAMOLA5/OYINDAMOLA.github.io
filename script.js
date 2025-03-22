// Confetti effect
document.addEventListener('DOMContentLoaded', () => {
    const surpriseButton = document.getElementById('surpriseButton');

  // Trigger confetti
  if (surpriseButton) {
    surpriseButton.addEventListener('click', () => {
        confetti({
            particleCount: 150, // More confetti
            spread: 90, // Wider spread
            origin: { y: 0.6 }, // Start position
            colors: ['#ff6f61', '#ffcc00', '#00ccff'], // Custom colors
          });
           // Show a surprise message
           alert('You are amazing, Bonita ❤️! Have the best birthday ever! 🎉');
        });
  } else {
    console.error('Button with id "surpriseButton" not found!');
  }
});



