const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");

// Handle loading song error
song.onerror = function () {
  console.error("Error loading audio file");
};

// Set progress bar
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

// Handle onclick play/pause icon
const playPause = () => {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  }
};

// Update progress bar
song.addEventListener("timeupdate", () => {
  progress.value = song.currentTime;
});

// Handle progress bar changes
progress.oninput = function () {
  song.currentTime = progress.value;
};

progress.onerror = function () {
  console.error("Error updating progress bar");
};
