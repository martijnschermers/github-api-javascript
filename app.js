
// It is possible to use other url's here.
const url = "https://api.github.com/users/martijnschermers/events/public"; 

// Your personal authentication Github token goes here. 
// https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
const token = ""; 

(async function() {
    const response = await fetch(url, {
        method: "GET",
        headers: new Headers({
            // If you are getting data from a public API, comment this line. Else uncomment it and fill in a valid token.  
            // 'Authorization': `Token ${token}`, 
            'Content-Type': 'application/json'
        }), 
    }); 

    const data = await response.json();

    if (response.status >= 200 && response.status < 400) {
        data.forEach(function(i) {
            // You can change this if you want other events as well. 
            if (i.type == "PushEvent") {
                const h1 = document.createElement('h2'); 
                h1.textContent = i.repo.name

                const card = document.createElement('div'); 
                card.setAttribute('class', 'card');
                card.appendChild(h1);

                container.appendChild(card);

                i.payload.commits.forEach(function(commit) {
                    const p = document.createElement('p'); 
                    p.textContent = commit.message;
                    card.appendChild(p);
                })
            }
        })
    } else {
        const errorMessage = document.createElement('h2')
        errorMessage.style.margin = '0 auto';
        errorMessage.style.fontSize = '3rem';
        errorMessage.textContent = data.message
        container.appendChild(errorMessage)  
    }
})()

const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)