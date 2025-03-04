document.getElementById('startButton').addEventListener('click', function() {
    alert('A aventura começa agora!');
    // Aqui você pode redirecionar para outra página ou carregar conteúdo dinâmico
});
document.getElementById('startButton').addEventListener('click', function() {
    window.location.href = 'pagina2.html'; // Redireciona para a nova página
});

document.addEventListener('DOMContentLoaded', function() {
    console.log("Página 2 carregada!");
    // Você pode adicionar mais interações aqui
});