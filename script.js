var botao = document.querySelector("#botao");

botao.addEventListener('click', function (event) {
    event.preventDefault();
    var usuario = document.querySelector("#usuario").value;
    var senha = document.querySelector("#senha").value;

    if (usuario == "admin" && senha == "admin") {
        document.querySelector("#aviso").textContent = "Login Efetuado Com Sucesso";
        document.querySelector("#aviso").style.color = "Green";
    } else {
        document.querySelector("#aviso").textContent = "Usuário ou Senha incorretos";
        document.querySelector("#aviso").style.color = "red";
    }

})