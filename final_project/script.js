const duration = 5000; // Confetti duration (5 seconds)
const intervalTime = 200; // Interval between confetti bursts (200ms)
const endTime = () => Date.now() + duration;

function randomPosition() {
  return { x: Math.random(), y: Math.random() };
}

function shootStars() {
  confetti({
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["star"],
    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
    particleCount: 10,
    scalar: 1.2,
    origin: randomPosition(),
  });
}

function startConfetti() {
  const stopTime = endTime();
  const interval = setInterval(() => {
    if (Date.now() >= stopTime) {
      clearInterval(interval);
    } else {
      shootStars();
    }
  }, intervalTime);
}

// Attach event listener to button
document.addEventListener("DOMContentLoaded", function () {
  const fireBtn = document.querySelector(".fire-btn");
  if (fireBtn) {
    fireBtn.addEventListener("click", startConfetti);
  }
});
