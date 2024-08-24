document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('play');
  const pauseButton = document.getElementById('pause');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const progressBar = document.getElementById('progress');
  const trackTitle = document.getElementById('track-title');
  const artistName = document.getElementById('artist-name');
  const albumArt = document.querySelector('.album-art img');

  // Example tracks
  const tracks = [
    { title: 'Older', artist: 'Sasha Alex Sloan', src: './older.mp3', art: './img/older.jpeg' },
    { title: 'Thoughts', artist: 'Sasha Alex Sloan', src: './thoughts.mp3', art: './img/thoughts.jpeg' }
  ];

  let currentTrackIndex = 0;
  let audio = new Audio(tracks[currentTrackIndex].src);

  function loadTrack(index) {
    audio.src = tracks[index].src;
    trackTitle.textContent = tracks[index].title;
    artistName.textContent = tracks[index].artist;
    albumArt.src = tracks[index].art;
    audio.load();
  }

  function playTrack() {
    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline';
  }

  function pauseTrack() {
    audio.pause();
    playButton.style.display = 'inline';
    pauseButton.style.display = 'none';
  }

  function updateProgress() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
  }

  playButton.addEventListener('click', () => {
    if (audio.paused) {
      playTrack();
    }
  });

  pauseButton.addEventListener('click', () => {
    if (!audio.paused) {
      pauseTrack();
    }
  });

  prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex > 0) ? currentTrackIndex - 1 : tracks.length - 1;
    loadTrack(currentTrackIndex);
    playTrack();
  });

  nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex < tracks.length - 1) ? currentTrackIndex + 1 : 0;
    loadTrack(currentTrackIndex);
    playTrack();
  });

  progressBar.addEventListener('input', (e) => {
    const value = e.target.value;
    audio.currentTime = (value / 100) * audio.duration;
  });

  audio.addEventListener('timeupdate', updateProgress);

  // Initialize player with the first track
  loadTrack(currentTrackIndex);
});
