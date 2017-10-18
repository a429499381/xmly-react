export const play = function(src) {
    if (!window.audio) {
        window.audio = new Audio(src)
    }
    window.audio.src = src
    window.audio.paused ? window.audio.play() : window.audio.pause()
}

// export const playLoad = function () {
//     // play() {
//     //     let audio = this.refs.audio
//     //     //  设置当前播放位置 不设置就是获取当前播放位置
//     //     let star = audio.currentTime = 600
//     //     console.log(audio.currentTime)
//     //     audio.paused ? audio.play() : audio.pause()
//     // }
//     //
//     // Seek() {
//     //     let audio = window.audio
//     //     audio.paused ? audio.play() : audio.pause()
//     //     console.log(audio.duration)
//     // }
//     // Up() {
//     //     let audio = window.audio
//     //     audio.playbackRate = audio.playbackRate + 0.2
//     //     if (audio.playbackRate >= 2) {
//     //         audio.playbackRate = 1
//     //     }
//     //     console.log(audio.playbackRate)
//     // }
//     //
//     // Dp() {
//     //     let audio = window.audio
//     //     let star = audio.startTime
//     //     star = 600
//     //     console.log(audio.startTime)
//     // }
// }