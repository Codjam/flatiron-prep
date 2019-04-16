let image = document.querySelector("#circle")
image.onclick = toggleClass;

function toggleClass() {
  if (image.className == 'image') {
    image.className = ''
  } else {
    image.className = 'image'
  }
}

document.querySelector("#firstHeading")