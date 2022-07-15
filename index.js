// for clicking on the button
document.querySelectorAll(".key").forEach ((drum) => {
  drum.addEventListener("click", function() {
    const code = this.getAttribute('data-key');
    const key = document.querySelector(`.key[data-key="${code}"]`);
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  });
});

// For pressing corresponding key


function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
