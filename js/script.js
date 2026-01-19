// Video ro'yxati
const videos = [
  { title: "Sample Video 1", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Sample Video 2", src: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Sample Video 3", src: "https://www.w3schools.com/html/mov_bbb.mp4" }
];

const videoList = document.getElementById("videoList");

// Har bir video uchun karta yaratish
videos.forEach(video => {
  const card = document.createElement("div");
  card.className = "video-card";

  // Video sarlavhasi
  const title = document.createElement("h3");
  title.textContent = video.title;

  // Video player
  const vid = document.createElement("video");
  vid.src = video.src;
  vid.controls = true;
  vid.preload = "metadata";

  // Loading bar
  const loadingBar = document.createElement("div");
  loadingBar.className = "loading-bar";
  const fill = document.createElement("div");
  fill.className = "loading-fill";
  loadingBar.appendChild(fill);

  // Video buffering progress
  vid.addEventListener("progress", () => {
    if (vid.buffered.length > 0) {
      const percent = (vid.buffered.end(0) / vid.duration) * 100;
      fill.style.width = percent + "%";
    }
  });

  // Kartaga qo'shish
  card.appendChild(title);
  card.appendChild(vid);
  card.appendChild(loadingBar);

  videoList.appendChild(card);
});
