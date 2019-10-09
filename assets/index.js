const video = document.querySelector("video"); //query selector representa un selector o varios
const button = document.querySelector("button");

//llama al metodo play del video cuando se de click en el boton
button.addEventListener('click', function(){
   video.paused ? player.play() : player.pause();
})

/*Se le pasa un objeto de configuracion el cual lea cual es el elemento
que representa el media*/
function mediaPlayer(config){
    this.media = config.elemento
}

//mediaplayer va a tener un metodo, cuando se trabaja con clases,
//estos metodos se agregan al prototype
//el metodo se llama play, play agarra el video y va decirle play
//le pasamos al evento button, a player, el metodo play.ads

/*se lee el media (objeto de configuraicon) con this*/
mediaPlayer.prototype.play = function(){
   this.media.play();
}

mediaPlayer.prototype.pause = function(){
    this.media.pause();
}


 //se hace la instancia de player al prototipo para acceder a su metodo
//se le pasa un obj de configuracion, recibe un elemento que sera el video
 const player = new mediaPlayer({elemento: video})
