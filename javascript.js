var url = "https://v2.jokeapi.dev/joke/Any?type=single"
var piada = document.getElementById("piada")

async function getjoke() {
    fetch(url)
    .then(data => data.json())
    .then(item => {
        piada.textContent = item.joke
    })
}

var botao = document.getElementById("botao")
botao.addEventListener("click", () => {
    getjoke()
    piada.style.transition = "0s"
    piada.style.opacity = 0
    setTimeout(() => {
    piada.style.transition = "1s"
    piada.style.opacity = 1
    }, 600);
})
