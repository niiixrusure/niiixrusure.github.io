let y = 0

document.body.addEventListener('wheel', (e) => {
    const height = document.body.offsetHeight

    y = y + e.wheelDeltaY
  
    if(y < -height + window.innerHeight) {
      y = -height + window.innerHeight
    }
  
    if(y > 0) {
      y = 0
    }
  
    const tr = `translateY(${y}px)`
    document.body.style.transform = tr

})

// Audio

let soundButton = document.querySelector('.soundbutton'),
		audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
	audio.pause()
}
