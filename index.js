const images = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rigthBtn = document.getElementById('right')
const imageWidth = 500
let imageCount = 0

let interval = setInterval(moveImageToRight, 2000)


const animationDuration = 500 // ms

rigthBtn.addEventListener('click', () => {

  resetInterval()
  moveImageToRight()

})


leftBtn.addEventListener('click', () => {
  resetInterval()
  moveImageToLeft()
})

//stops the auto sliding for each left or rigth button event
function resetInterval() {
  clearInterval(interval)
  setTimeout(() => {
    interval = setInterval(moveImageToRight, 2000)
  }, animationDuration)

}


function moveImageToRight() {
  if (imageCount < images.childElementCount - 1) {
    imageCount++
    images.style.transform = `translateX(-${imageWidth * imageCount}px)`
  } else {
    imageCount = 0
    images.style.transform = `translateX(${imageWidth * imageCount}px)`
  }
}



function moveImageToLeft() {
  if (imageCount > 0) {
    imageCount--
    images.style.transform = `translateX(-${imageWidth * imageCount}px)`
  } else {
    imageCount = images.childElementCount - 1
    images.style.transform = `translateX(-${imageWidth * imageCount}px)`
  }
}



