let challenges_list = {};

window.onload = () => {
    fetch("./app.json")
    .then(response => response.json())
    .then(data => {
        const sectionEle = document.getElementById("content");
        sectionEle.innerHTML = data.map(d => (
            `
            <div class="card">
                <img src="${d.profile}" alt="" width="100%" class="profile"/>
                <div class="name roboto-bold">${d.name}</div>
                <div class="level roboto-medium ">${d.level}</div>
                <div class="button-group">
                    <div class="language roboto-light">${d.languages}</div>
                    <div class="date-of-completion roboto-light">${d.date}</div>
                </div>
            
                <div class="button-group">
                    <button class="button-preview roboto-bold" onclick="redirectToUrl('${d.preview}')">Preview</button>
                    <button class="button-check-code roboto-bold" onclick="redirectToUrl('${d.code}')">Check code</button>
                </div>
            </div>`
        ))
    })
    .catch(err => console.log(err))
}

function clickGithubButton(){
    window.location.href = "https://github.com/shubhamr10";
}

function redirectToUrl(link){
    window.location.href = link;
}

function onSearchBoxChange(e) {
    console.log(e.target.value);
}


