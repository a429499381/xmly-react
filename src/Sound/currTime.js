// 计算时间
export const palyTime = function (that) {
    let times = 0
    let hours = 0
    let currTime = ''
    let setIntervalTime = ''
    // 播放时间 转换。
    let oldTime = localStorage.getItem('setIntervalTime')
    clearInterval(oldTime)
    console.log('oldTime 之前定时器', oldTime)
    clearInterval(setIntervalTime)
    setIntervalTime = setInterval(function () {
        let current = window.audio.currentTime
        if (current < 60) {
            hours = '00'
            times = current.toString().split('.')[0]
            times < 10 ? times = `0${times}` : ''
        } else {
            hours = Math.floor((current.toFixed(0) / 60))
            hours < 10 ? hours = `0${hours}` : ''
            times = current.toFixed(0) - hours * 60
            times < 10 ? times = `0${times}` : ''
        }

        that.setState({
            currentTime: `${hours}:${times}`
        })

    }, 500)

    localStorage.setItem('setIntervalTime', setIntervalTime)
}