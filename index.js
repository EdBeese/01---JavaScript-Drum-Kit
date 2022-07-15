// console.log("connected")

document.querySelectorAll(".key").forEach ((drum) => {
  drum.addEventListener("click", function() {
    const code = this.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    audio.play();
    // setTimeout(function() {this.classList.remove("playing")}, 100 );
  });
});

window.addEventListener('keydown', function(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if(!audio) return;
  audio.play();
})
