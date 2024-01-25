/// Dark mode

function toggleDarkMode() {
  var element = document.body;
  if (element) {
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
      localStorage.setItem("darkModeEnabled", "true");
    } else {
      localStorage.removeItem("darkModeEnabled");
    }
  }
}

// Check if dark mode was enabled and apply it on page load
if (localStorage.getItem("darkModeEnabled")) {
  document.body.classList.add("dark-mode");
}

/// Language changer

document.getElementById("language-select").addEventListener("change", function() {
  var selectedLanguage = this.value;
  var nixtext1 = document.getElementById("nixtext1");
  var projects = document.getElementById("projects");
  var projectstext = document.getElementById("projectstext");

  if (selectedLanguage === 'en') {
    nixtext1.textContent = 'web developer, love pizza, play games and talk to people';
    projects.textContent = 'solo projects'
    projectstext.textContent = 'no solo projects for now but i will add them later:)'

  } else if (selectedLanguage === 'ru') {
    nixtext1.textContent = 'веб-разработчик, люблю пиццу, играю в игры и общаюсь с людьми';
    projects.textContent = 'сольные проекты'
    projectstext.textContent = 'нет сольных проектов, но я добавлю их позже:)'
  } 
});

// Audio

let soundButton = document.querySelector('.soundbutton'),
		audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})

document.getElementById('sound1').play();
