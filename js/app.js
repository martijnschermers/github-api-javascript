
// 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

// Get all repos
// curl -i -H "Authorization: token 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" https://api.github.com/user/repos

const btnCommits = document.getElementById("btnCommits")
const divResult = document.getElementById("divResult")

btnCommits.addEventListener('click', e=> getCommits()); 

async function getRepos() {
    const url = 'https://api.github.com/';
    const response = await fetch(url); 
    const data = await response.json();

    console.log(data);
}

async function getCommits(url="https://api.github.com/search/commits?q=repo:Martoen/Login-Signup-System author-date:2018-03-01..2022-03-31") {
    clear();

    const response = await fetch(url)
    //"<https://api.github.com/search/commits?q=repo%3Afreecodecamp%2Ffreecodecamp+author-date%3A2019-03-01..2019-03-31&page=2>; rel="next", <https://api.github.com/search/commits?q=repo%3Afreecodecamp%2Ffreecodecamp+author-date%3A2019-03-01..2019-03-31&page=27>; rel="last""

    const link = response.headers.get("link")
    const links = link.split(",")
    const urls = links.map(a=> {
        return {
            url: a.split(";")[0].replace(">","").replace("<",""),
            title:a.split(";")[1]
        }

    })
    const result = await response.json()

    result.items.forEach(i=>{
        const img = document.createElement("img")
        img.src = i.author.avatar_url;
        img.style.width="32px"
        img.style.height="32px"
        const anchor = document.createElement("a")
        anchor.href = i.html_url;
        anchor.textContent = i.commit.message.substr(0,120) + "...";
        divResult.appendChild(img)
        divResult.appendChild(anchor)
        divResult.appendChild(document.createElement("br"))


    })


    urls.forEach(u => {
        const btn = document.createElement("button")
        btn.textContent = u.title;
        btn.addEventListener("click", e=> getCommits(u.url))
        divResult.appendChild(btn);
    })

}

function clear(){
    while(divResult.firstChild) 
        divResult.removeChild(divResult.firstChild)
}

const changeText = () => {
    const p = document.querySelector('p');

    p.textContent = "Changed the text";
} 

const originalText = () => {
    const p = document.querySelector('p');

    p.textContent = "Hello world";
}

// const button = document.querySelector('button');
// button.addEventListener('mouseenter', changeText); 
// button.addEventListener('mouseleave', originalText);

// Keylogger
document.addEventListener('keydown', event => {
    console.log('key: ' + event.key);
    console.log('code: ' + event.code);
});

document.addEventListener('keydown', event => {
    var element = document.querySelector('p');

    // Set variables for keydown codes
    var a = 'KeyA';
    var s = 'KeyS';
    var d = 'KeyD';
    var w = 'KeyW';

    // Set a direction for each code
    switch (event.code) {
        case a:
            element.textContent = 'Left';
            break;
        case s:
            element.textContent = 'Down';
            break;
        case d:
            element.textContent = 'Right';
            break;
        case w:
            element.textContent = 'Up';
            break;
    }
});

