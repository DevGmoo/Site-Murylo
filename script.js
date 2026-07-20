const guardaDeRolagem = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');
        } else {
            entrada.target.classList.remove('visivel');
        }
    });
}, {
    threshold: 0.15 
});

const todosOsCards = document.querySelectorAll('.card-arredondado');
todosOsCards.forEach((card) => {
    guardaDeRolagem.observe(card);
});


function configurarClickSeguro(idElemento){
    const elemento = document.getElementById(idElemento);

    if (elemento){
        elemento.addEventListener('click', function(evento){
            evento.preventDefault();

            const codigoEscondido = this.getAttribute("data-seguro");

            if (codigoEscondido){
                const linkOriginal = atob(codigoEscondido);

                window.open(linkOriginal, "_blank")
            }
        }
    )}
}

configurarClickSeguro("btn-whatsapp-ace");
configurarClickSeguro("btn-whatsapp-ace2");
configurarClickSeguro("btn-instagram-ace");


/* Carregar a imagem */
function carregarImagem(arquivo) {
    fetch(arquivo)
        .then(response => {
            if (!response.ok) {
                throw new Error("Arquivo não encontrado no servidor");
            }
            return response.text(); 
        }) 
        .then(base64Texto => {
            const doc_lmp = base64Texto.trim();

            const doc_lmpf = atob(doc_lmp);

            document.getElementById('asjd').src = doc_lmpf;
        })
        .catch(err => console.error("Erro ao carregar o arquivo:", err));
}


carregarImagem('asffuhef.txt');