import mediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';


const video = document.querySelector("video"); //query selector representa un selector o varios
const button = document.querySelector("button");

const player = new mediaPlayer({elemento: video, 
   plugins: [
      new AutoPlay(),
      new AutoPause()
   ]
});


button.addEventListener('click', function(){
   video.paused ? player.play() : player.pause();
})

document.getElementById('muteButton').addEventListener('click', function(){
   player.toggleMute();
})

