
var cc = 10
var bbc = 10


function a(callback) {
   // cc = cc + 1


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
    }).then(function () {
      console.log('Promise 第二个then')
      return (function () {
         // return bbc++
      })()
    })
      .then(
        // sleep(3000)
        function () {
          var N = 0
          while(N < 1000) {
            N++
            console.log('阻塞延迟')
          }
          return bbc++
        }
      ).then(function (num) {
      console.log('OK', num)
    }).then(function () {
      console.log('Ok +++')
    })

}



function sleep(ms) {
  return function () {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, ms || 1000)
    })
  }
}

