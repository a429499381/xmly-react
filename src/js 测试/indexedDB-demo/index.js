
var cc = 10


function a(callback) {

  setTimeout(function () {
         cc = cc + cc
        console.log('c', cc)
        console.log('setTimeout CC', cc)
        // cc = 0
      },0)

  callback.call(this, cc)


}

function b(e) {
  setTimeout(function () {
    console.log('b', e)
  },0)
}
for (var i = 0; i < 3; i++) {

    (function (i) {
      setTimeout(function () {
        console.log('setTime i', i)
      },0)
    })(i)

    a(b)

}
