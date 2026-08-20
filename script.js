// =========================
// REVEAL ANIMATION
// =========================

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach(section => {
  observer.observe(section);
});


// =========================
// FLOATING HEARTS
// =========================

const hearts = document.getElementById("hearts");

setInterval(() => {

  if (Math.random() > 0.5) return;

  const heart = document.createElement("div");

  heart.className = "heart";

  heart.textContent =
    Math.random() > 0.5 ? "♡" : "✦";

  heart.style.left =
    Math.random() * 100 + "vw";

  heart.style.animationDuration =
    4 + Math.random() * 4 + "s";

  heart.style.fontSize =
    12 + Math.random() * 15 + "px";

  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);

}, 650);


// =========================
// MUSIC
// =========================

const btn = document.getElementById("musicBtn");
const song = document.getElementById("song");

let playing = false;

btn.addEventListener("click", async () => {

  if (!playing) {

    try {

      await song.play();

      playing = true;

      btn.textContent = "Ⅱ Pause our song";

    } catch (error) {

      alert(
        "Music file nahi mil rahi. Check karo: music/song.mp3"
      );

    }

  } else {

    song.pause();

    playing = false;

    btn.textContent = "▶ Play our song";
  }

});


// =========================
// MUSIC ENDED
// =========================

song.addEventListener("ended", () => {

  playing = false;

  btn.textContent = "▶ Play our song";

});