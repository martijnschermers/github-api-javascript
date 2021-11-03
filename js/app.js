var request = new XMLHttpRequest();

request.open('GET', 'https://api.github.com/repos/Martoen/javascript-api', true)

request.onload = function () {
    var data = JSON.parse(this.response)

    console.log(this.response)

    if (request.status >= 200 && request.status < 400) {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const h1 = document.createElement('h1')
        h1.textContent = data.owner.login

        const p = document.createElement('p')
        p.textContent = data.full_name

        container.appendChild(card)

        card.appendChild(h1)
        card.appendChild(p)
    } else {
        const errorMessage = document.createElement('h2')
        h2.textContent = "Failed to fetch data from API :("
        card.appendChild(errorMessage)  
    }
}

request.send()

const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)