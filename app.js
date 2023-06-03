let ghostContainer = document.querySelector('.ghost')
let ghostImg = document.querySelector('.ghost-img')
var ghostIsActive = false

function changeGhostOpacity(bool) {
   var opacityValue = window
      .getComputedStyle(ghostImg)
      .getPropertyValue('opacity')

   if (bool === true) {
      let increaseOpacity = opacityValue * 1 + 0.1
      if (increaseOpacity <= 1) {
         return (ghostImg.style.opacity = increaseOpacity)
      }
   }
   let decreaseOpacity = opacityValue * 1 - 0.1
   if (decreaseOpacity >= 0) {
      return (ghostImg.style.opacity = decreaseOpacity)
   }
}

function openAndCloseTheGhost() {
   if (ghostIsActive === false) {
      ghostContainer.classList.add('active')
      return (ghostIsActive = true)
   } else if (ghostIsActive === true) {
      ghostContainer.classList.remove('active')
      return (ghostIsActive = false)
   }
}

function keypressFunc(event) {
   if (event.key === 'G' && event.shiftKey) {
      openAndCloseTheGhost(event)
   } else if ((event.key === 'N' || event.key === 'B') && event.shiftKey) {
      if (event.key === 'N' && event.shiftKey) {
         changeGhostOpacity(true)
      } else if (event.key === 'B' && event.shiftKey) {
         changeGhostOpacity(false)
      }
   }
   return
}

window.addEventListener('DOMContentLoaded', () => {
   document.addEventListener('keydown', (e) => keypressFunc(e))
})
