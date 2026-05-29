function logar(event) {
    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario === 'aluno' && senha === 'fiap2025') {
        location.href = "lista.html";
    } else {
        alert('Usuário ou Senha incorretos');
    }
}

// ---------------------------------------------------
let cats = ['Tequila', 'Nala', 'Simba'];

function mostrarErro(msg) {
    document.getElementById('erro').textContent = msg;
}

function mostrarLista() {
    const list = document.getElementById('catList');
    list.innerHTML = '';

    if (cats.length === 0) {
        list.innerHTML = '<p class="lista-vazia">Nenhum gatinho na lista ainda.</p>';
        return;
    }

    cats.forEach(function(cat, i) {
        const article = document.createElement('article');
        article.className = 'card';

        article.innerHTML = `
            <div class="card-info">
                <i class="bx-cat"></i>
                <h2>${cat}</h2>
            </div>
            <div class="buttom-card">
                <button class="edit" onclick="editarItem(${i})">Editar</button>
                <button class="remove" onclick="removerItem(${i})">Remover</button>
                <button class="view" onclick="verItem(${i})">
                    <i class="bx bx-search-alt"></i>
                </button>
            </div>
        `;

        list.appendChild(article);
    });
}

function adicionarFinal() {
    const input = document.getElementById('catName');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Digite o nome do gatinho.');
        return;
    }

    mostrarErro('');
    cats.push(nome);
    input.value = '';
    mostrarLista();
}

function adicionarInicio() {
    const input = document.getElementById('catName');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Digite o nome do gatinho.');
        return;
    }

    mostrarErro('');
    cats.unshift(nome);
    input.value = '';
    mostrarLista();
}

function editarItem(index) {
    const novoNome = prompt('Digite o novo nome:', cats[index]);

    if (novoNome === null || novoNome.trim() === '') {
        return;
    }

    cats[index] = novoNome.trim();
    mostrarLista();
}

function removerItem(index) {
    cats = cats.filter(function(_, i) {
        return i !== index;
    });
    mostrarLista();
}

function verItem(index) {
    alert('Gatinho: ' + cats[index]);
}

document.getElementById('inicio').addEventListener('click', adicionarInicio);
document.getElementById('final').addEventListener('click', adicionarFinal);

mostrarLista();