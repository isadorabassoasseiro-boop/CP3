function logar(event){

    //IA
    event.preventDefault();

    //VIDEO
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario === 'aluno' && senha === 'fiap2025') {
        location.href = "lista.html";
        
    }
    else {
        alert('Usuário ou Senha incorretos')
    }
}