function mediaPlayer(config){
    this.media = config.elemento
}

mediaPlayer.prototype.play = function(){
   this.media.play();
}

mediaPlayer.prototype.pause = function(){
    this.media.pause();
    
}

export default mediaPlayer
