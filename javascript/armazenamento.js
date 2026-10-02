// =====================================
// ARMAZENAMENTO DE MENSAGENS
// =====================================

export function salvarMensagem(mensagem) {

    // Recupera as mensagens já armazenadas
    const dadosSalvos =
        localStorage.getItem("mensagens");

    let mensagens = [];

    if (dadosSalvos) {
        mensagens = JSON.parse(dadosSalvos);
    }

    // Adiciona a nova mensagem
    mensagens.push(mensagem);

    // Converte o array para texto JSON
    const dados =
        JSON.stringify(mensagens);

    // Salva no localStorage
    localStorage.setItem("mensagens", dados);
}


// =====================================
// RECUPERAR MENSAGENS
// =====================================

export function recuperarMensagens() {

    const dadosSalvos =
        localStorage.getItem("mensagens");

    if (!dadosSalvos) {
        return [];
    }

    return JSON.parse(dadosSalvos);
}

