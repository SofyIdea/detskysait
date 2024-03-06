function playVideo() {
var videoPlayer = document.getElementById("videoPlayer");
videoPlayer.play();
}       
function pauseVideo() {
var videoPlayer = document.getElementById("videoPlayer");
 videoPlayer.pause();
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}