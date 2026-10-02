// =====================================
// FORMULÁRIO DE CONTATO
// =====================================

import {
    salvarMensagem,
    recuperarMensagens
} from "./armazenamento.js";


// =====================================
// CONFIGURAÇÃO DO FORMULÁRIO
// =====================================

export function configurarFormulario() {

    const formulario =
        document.getElementById("formContato");

    // Se o formulário não existir, encerra a função
    if (!formulario) {
        return;
    }


    // =================================
    // MOSTRAR HISTÓRICO
    // =================================

    mostrarHistorico();


    // =================================
    // EVENTO SUBMIT
    // =================================

    formulario.addEventListener("submit", function(event) {

        // Impede o recarregamento da página
        event.preventDefault();


        const nome =
            document.getElementById("nome").value;

        const email =
            document.getElementById("email").value;

        const mensagem =
            document.getElementById("mensagem").value;


        // Cria o objeto da mensagem
        const novaMensagem = {

            nome: nome,
            email: email,
            mensagem: mensagem

        };


        // Envia a mensagem para o módulo
        // responsável pelo armazenamento
        salvarMensagem(novaMensagem);


        // Mostra feedback
        const feedback =
            document.getElementById("feedback");

        feedback.textContent =
            "Mensagem enviada com sucesso!";

        feedback.className = "sucesso";


        // Atualiza o histórico
        mostrarHistorico();


        // Limpa o formulário
        formulario.reset();

    });


    // =================================
    // VALIDAÇÃO DO NOME
    // =================================

    const campoNome =
        document.getElementById("nome");

    campoNome.addEventListener("input", function() {

        if (campoNome.value.length < 3) {

            campoNome.className =
                "campo-invalido";

        } else {

            campoNome.className =
                "campo-valido";

        }

    });


    // =================================
    // VALIDAÇÃO DO E-MAIL
    // =================================

    const campoEmail =
        document.getElementById("email");

    campoEmail.addEventListener("input", function() {

        if (campoEmail.value.includes("@")) {

            campoEmail.className =
                "campo-valido";

        } else {

            campoEmail.className =
                "campo-invalido";

        }

    });

}


// =====================================
// EXIBIR HISTÓRICO
// =====================================

function mostrarHistorico() {

    const historico =
        document.getElementById("historico");

    if (!historico) {
        return;
    }


    // Solicita os dados ao módulo
    // de armazenamento
    const mensagens =
        recuperarMensagens();


    // Se não houver mensagens
    if (mensagens.length === 0) {

        historico.innerHTML = "";

        return;
    }


    // Cria o conteúdo do histórico
    let html = `
        <h3>Mensagens enviadas</h3>
    `;


    mensagens.forEach(function(mensagem) {

        html += `
            <div class="mensagem-salva">

                <strong>Nome:</strong>
                ${mensagem.nome}

                <br>

                <strong>E-mail:</strong>
                ${mensagem.email}

                <br>

                <strong>Mensagem:</strong>
                ${mensagem.mensagem}

            </div>
        `;

    });


    // Insere o histórico no DOM
    historico.innerHTML = html;
}

