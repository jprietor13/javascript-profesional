function mediaPlayer(config){
    this.media = config.elemento;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

mediaPlayer.prototype.play = function(){
   this.media.play();
}

mediaPlayer.prototype.pause = function(){
    this.media.pause();
}

mediaPlayer.prototype.mute = function(){
    this.media.muted = true;
}

mediaPlayer.prototype.unmute = function(){
    this.media.muted = false;
}

mediaPlayer.prototype._initPlugins = function(){
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted(){
            return this.media.muted;
        },

        set muted(value){
            this.media.muted = value
            // if(value === true){
            //     this.media.muted = true;
            // } else {
            //     this.nedia.muted = false;
            // }
        }

    };

    //player.muted();

    this.plugins.forEach(plugin => {
        plugin.run(player);
    })
}

mediaPlayer.prototype.toggleMute = function(){
    this.media.muted ? this.media.muted = false : this.media.muted = true;
}

export default mediaPlayer
