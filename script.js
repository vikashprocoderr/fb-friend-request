var answer = document.querySelector('h5')

var add = document.querySelector('#Add')

var rmve = document.querySelector('#remove')

var hii = 0

 add.addEventListener('click', function (){

    answer.innerHTML = 'Friends'
    answer.style.color = 'green'

    //if else hu bhi kar ska aapa jad only 1 button rakhno hov
//   if(hii== 0) {
//     answer.innerHTML = 'Friends'
//     answer.style.color = 'green'
   
//     hii=1
//   }
//   else {
//     answer.innerHTML = 'Stranger'
//     answer.style.color = 'red'
   
//     hii=0
//   }
})
rmve.addEventListener('click', function () {
  answer.innerHTML = 'Stranger'
  answer.style.color = 'red'
})
