export const play = function(src) {
    window.audio ? '' : window.audio = new Audio
    if(src){
        window.audio.src = src
    }

}

export const playLoad = function () {
    window.audio.paused ? window.audio.play() : window.audio.pause()
}
