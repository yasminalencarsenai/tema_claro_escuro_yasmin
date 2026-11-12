// variavel para guardar o botao
const botao = document.getElementById('tema');
const icone = botao.querySelector('i');
// BUSCA NA MEMORIA DO NAVEGADOR A OPÇÃO QUE O USUARIO TINHA ESCOLHIDO DE TEMA
const salvaTema = localStorage.getItem('theme');

// SE O TEMA SALVO NA MEMORIA LOCALSTORAGE FOR TEMA ESCURO

if (salvaTema === 'dark'){
    // adiciona a classe 'dark-mode' no corpo da pagina
    document.body.classList.add('dark-mode');
    // trocar o icone de lua ("fa-moon") para um icone de sol
    icone.classList.replace('fa-moon', 'fa-sun');
}

// quando clicar no botao ele vai executar o codigo abaixo

botao.addEventListener('click', () =>{
    // liga ou desliga a classe dark-mode
    document.body.classList.toggle('dark-mode');

    // verificar se a pagina ficou com o modo escuro ativado
    const dark = document.body.classList.contains('dark-mode');

    // Se o modo escuro estiver ativado (verdadeiro)
    if (dark){
        icone.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }else{
        // troca o sol de volta para a lua
        icone.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});