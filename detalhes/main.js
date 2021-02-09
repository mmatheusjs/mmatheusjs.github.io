let url = "https://api.github.com/repos/mmatheusjs/" + localStorage.repositorio;


function loadRepositorio(){
    fetch(url).then(response => response.json()).then(function(data) {
    
    let detalhes = document.getElementById('detalhes');
    detalhes.innerHTML +=

    `<div class="div_detalhes">
        <h1 class="title">${data.name}</h1>
     
        <div class="owner">
            <div class="img_owner">
                <img class="avatar" src="../imagens/matheus.jpeg" alt="foto de perfil">
            </div>

                <a class="a_link" href="${data.html_url}">Matheus Henrique (GitHub)</a> 

            <h2 class="title2"> Seguidores:</h2>
                <a class="a_link" href="https://github.com/mmatheusjs?tab=followers" target="_blank">Link GitHub</a>

            <h2 class="title2"> Seguindo:</h2>
                <a class="a_link" href="https://github.com/mmatheusjs?tab=following" target="_blank">Link GitHub</a>
        </div>

        <div class="repositorio">
            <h2 class="title2">Descrição do Repositório:</h2>
                <p class="paragrafo">"${data.description}"</p>
            <h2 class="title2">Commits:</h2>
                <a class="a_link" href="https://api.github.com/repos/${data.owner.login}/${data.name}/commits">Link GitHub</a>    

         <div class="main_language">   
            <h2 class="title2">Linguagem predominante: ${data.language}</h2>
            <img class="img_language" src="../imagens/${data.language}.png">
        </div>

        </div>
`

    
    
    
    
})

}

// detalhes.innerHTML += 
    // `<div class="exemplo">`

    // document.getElementById('title').innerHTML = data.name;
    // document.getElementById('avatar').innerHTML = data.avatar_url;
    // document.getElementById('user').innerHTML = data.owner.login;