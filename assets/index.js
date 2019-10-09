import mediaPlayer from './mediaPlayer.js';

const video = document.querySelector("video"); //query selector representa un selector o varios
const button = document.querySelector("button");

const player = new mediaPlayer({elemento: video})


button.addEventListener('click', function(){
   video.paused ? player.play() : player.pause();
})

