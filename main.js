let xhr = new XMLHttpRequest();
let corpo = document.getElementById('corpo');
let url = "https://api.github.com/users/mmatheusjs/repos";

xhr.open('GET', url);

xhr.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200) {
        let dadosJSONText = xhr.responseText;
        let dadosJSONObj = JSON.parse(dadosJSONText);
        for (let i = 0; i < dadosJSONObj.length; i++) {
            corpo.innerHTML +=
            `<div class="repos">
                <h2 class="title">${dadosJSONObj[i].name}</h2>
                <img class="img_language" src="imagens/${dadosJSONObj[i].language}.png">
                
                <div class="btn_div">
                    <button class="mdl-button mdl-js-button mdl-button--raised" onclick="openrepos('${dadosJSONObj[i].svn_url}')">Link</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised" onclick="clone('git clone ${dadosJSONObj[i].html_url}')">Clone</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised" id="${dadosJSONObj[i].name}' onclick="info(this)" >Sobre</button>
                </div>        
            </div>`
        }
    }
}

xhr.send();

function openrepos(url){
    window.open(url)
}

function clone(url){
    const input = document.createElement("input");
    input.value = url;
    input.id = "input";
    document.body.appendChild(input); //inserindo o "input" dentro do elemento pai "body"
    input.select();
    document.execCommand("copy");
    input.remove();
}

function info(sobre){
    let arr = [];

    arr.push({nome: sobre.id});
    let arrJson = JSON.stringify(arr);

    localStorage.repositorio = arrJson;

    window.location.href = "info.html"
}