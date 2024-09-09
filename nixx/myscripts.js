const video = document.querySelector('video');
video.onclick = () => video.paused ? video.play() : video.pause();
