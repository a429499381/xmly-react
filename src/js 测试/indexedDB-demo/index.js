
var cc = 10
var bbc = 10


function a(callback) {
   cc = cc + 1


  setTimeout(function () {
         cc = cc + cc
        console.log('c', cc)
        console.log('setTimeout CC', cc)
        // cc = 0
      },0)
  callback.call(this, cc)

  return new Promise(function (resolve, reject) {
      // console.log('new Promise a return', cc++)



    setTimeout(function () {
      console.log('Promise a  setTimeou return')

      return resolve(cc)
    },0)
  })

}

function b(e) {
  setTimeout(function () {
    var bb= e * e
    console.log('b', bb)
  },0)
}
for (var i = 0; i < 3; i++) {

    (function (i) {
      setTimeout(function () {
        console.log('setTime i', i)
      },0)
    })(i)

    a(b).then(function (num) {
      console.log('Promise a  setTimeou resolve', num)
    })

}
