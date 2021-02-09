let url = "https://api.github.com/repos/mmatheusjs/" + localStorage.repositorio;


function loadRepositorio(){
    fetch(url).then(response => response.json()).then(function(data) {
    
    let detalhes = document.getElementById('detalhes');
    detalhes.innerHTML +=

    `<div class="div_detalhes">
        <h1 class="title">${data.name}</h1>
     
        <div class="img_owner">
            <img class="avatar" src="../imagens/matheus.jpeg" alt="foto de perfil">
        </div>

        <div class="owner">
            <h2> Desenvolvedor:</h2>
                <a href="${data.html_url}">Matheus Henrique</a> 

            <h2> Seguidores:</h2>
                <a href="https://github.com/mmatheusjs?tab=followers" target="_blank">Seguidores</a>

            <h2> Seguindo:</h2>
                <a href="https://github.com/mmatheusjs?tab=following" target="_blank">Seguidores</a>
        </div>

        <div class="repositorio">
            <h2>Descrição:</h2>
                <p>${data.description}</p>
            <h2>Commits:</h2>
                <a href="https://api.github.com/repos/${data.owner.login}/${data.name}/commits">Link</a>    

            
            <p>Linguagem predominante: ${data.language}</p>
            <img class="img_language" src="../imagens/${data.language}.png">
        </div>
`

    
    
    
    
})

}

// detalhes.innerHTML += 
    // `<div class="exemplo">`

    // document.getElementById('title').innerHTML = data.name;
    // document.getElementById('avatar').innerHTML = data.avatar_url;
    // document.getElementById('user').innerHTML = data.owner.login;