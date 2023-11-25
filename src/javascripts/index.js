import "bootstrap"

document.getElementById("redirect").addEventListener("click", redirect)

function redirect() {
  window.location = "http://localhost:8080/about.html"
}
