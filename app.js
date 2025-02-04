// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar el nombre a amigos
function agregarAmigo() {

    let nombreAmigo = document.getElementById('amigo').value.trim();

    if (nombreAmigo === "") {
        alert("Ingresar un nombre válido");
        return; 
    }

    amigos.push(nombreAmigo);
    document.getElementById('amigo').value = ''; 
    mostrarListaAmigos(); 
}

// Función para mostrar la lista amigos
function mostrarListaAmigos() {
    
    let listaAmigos = document.getElementById('listaAmigos');
    
    listaAmigos.innerHTML = '';

    amigos.forEach(function(amigo) {
        
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear la lista amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debes agregar al menos un amigo antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p class="resultado-sorteo">El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></p>`;

    
    amigos = [];
}
