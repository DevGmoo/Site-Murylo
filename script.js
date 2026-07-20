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
    // O fetch inicia a busca do arquivo
    fetch(arquivo)
        .then(response => {
            // Verifica se o arquivo realmente existe no servidor (Status 200 OK)
            if (!response.ok) {
                throw new Error("Arquivo não encontrado no servidor");
            }
            return response.text(); // Converte a resposta em texto puro
        }) 
        .then(base64Texto => {
            // Remove espaços e quebras de linha nas pontas
            const doc_lmp = base64Texto.trim();

            // Decodifica a string usando o nome correto: atob
            const doc_lmpf = atob(doc_lmp);

            // Aplica o texto decodificado diretamente na tag img
            document.getElementById('asjd').src = doc_lmpf;
        })
        .catch(err => console.error("Erro ao carregar o arquivo:", err));
}

// Executa a função chamando o seu arquivo de texto
carregarImagem('asffuhef.txt');

// 1. Bloqueia o menu do botão direito do mouse (Clique de contexto)
document.addEventListener('contextmenu', event => event.preventDefault());

// 2. Bloqueia os atalhos de teclado mais comuns do Inspecionar
document.addEventListener('keydown', event => {
    
    // Bloqueia a tecla F12 isolada
    if (event.key === 'F12') {
        event.preventDefault();
        mostrarAviso();
    }
    
    // Bloqueia Ctrl + Shift + I (Windows) ou Cmd + Opt + I (Mac) - Inspecionar
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === 'i') {
        event.preventDefault();
        mostrarAviso();
    }
    
    // Bloqueia Ctrl + Shift + J (Windows) ou Cmd + Opt + J (Mac) - Console
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === 'j') {
        event.preventDefault();
        mostrarAviso();
    }
    
    // Bloqueia Ctrl + Shift + C (Windows) ou Cmd + Opt + C (Mac) - Inspecionar Elemento
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === 'c') {
        event.preventDefault();
        mostrarAviso();
    }
    
    // Bloqueia Ctrl + U (Windows) ou Cmd + Opt + U (Mac) - Exibir Código Fonte da Página
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'u') {
        event.preventDefault();
        mostrarAviso();
    }
});

// Função opcional para alertar o usuário (ou você pode deixar vazio se preferir silêncio)
function mostrarAviso() {
    console.warn("A inspeção de código está desativada nesta página por motivos de segurança.");
}