class AutoPause {
    constructor(){
        this.umbral = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    run(player){
        this.player = player;
        const observer = new IntersectionObserver(this.handlerIntersection, {
            umbral : this.umbral,
        });

        //el observer observara el elemento media y el contenedor es toda la pantalla
        observer.observe(this.player.media);

        document.addEventListener("visibilitychange", this.handleVisibilityChange)
        
    }

    handlerIntersection(entries){
        const entry = entries[0];
        const isVisible = entry.intersectionRatio > this.umbral

        if(isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }

    handleVisibilityChange(){
        const isVisible = document.visibilityState === "visible";
        isVisible ? this.player.play() : this.player.pause();
    }
}

export default AutoPause;