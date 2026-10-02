// =====================================
// NAVEGAÇÃO SPA
// =====================================

import { configurarFormulario } from "./formulario.js";


// =====================================
// CONFIGURAR NAVEGAÇÃO
// =====================================

export function configurarNavegacao() {

    const links =
        document.querySelectorAll("nav a");

    links.forEach(function(link) {

        link.addEventListener("click", function(event) {

            // Impede o carregamento de outra página
            event.preventDefault();


            // Identifica a rota selecionada
            const pagina =
                link.getAttribute("href");


            // Localiza o conteúdo principal
            const conteudo =
                document.getElementById("conteudo");


            let template = "";


            // =================================
            // INÍCIO
            // =================================

            if (pagina === "index2.html") {

                template = `
                    <section>

                        <h2>Quem somos</h2>

                        <p>
                            Somos uma organização não governamental
                            dedicada a promover ações sociais e
                            contribuir para uma sociedade melhor.
                        </p>

                        <div class="badges">

                            <span class="badge badge-ativo">
                                Projeto ativo
                            </span>

                            <span class="badge badge-voluntario">
                                Voluntariado
                            </span>

                            <span class="badge badge-novo">
                                Novo projeto
                            </span>

                        </div>

                        <img
                            src="Imagens/voluntarios.jpg"
                            alt="Voluntários da ONG realizando uma ação social">

                    </section>

                    <section>

                        <h2>Entre em contato</h2>

                        <p>
                            <strong>E-mail:</strong>
                            contato@ong.org
                        </p>

                        <p>
                            <strong>Telefone:</strong>
                            (32) 99999-9999
                        </p>

                        <p>
                            <strong>Endereço:</strong>
                            Juiz de Fora - MG
                        </p>

                        <div class="alerta">

                            <strong>Informação</strong>

                            Nossa equipe está disponível para receber
                            dúvidas, sugestões e novos voluntários.

                        </div>

                    </section>
                `;


            // =================================
            // SOBRE
            // =================================

            } else if (pagina === "sobre.html") {

                template = `
                    <section>

                        <h2>Sobre nós</h2>

                        <p>
                            A Ação Comunidade é uma organização
                            dedicada ao desenvolvimento de ações
                            sociais e ao apoio à comunidade.
                        </p>

                    </section>
                `;


            // =================================
            // CONTATO
            // =================================

            } else if (pagina === "contato.html") {

                template = `
                    <section>

                        <h2>Entre em contato</h2>

                        <form id="formContato">

                            <label for="nome">
                                Nome:
                            </label>

                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                required>

                            <label for="email">
                                E-mail:
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                required>

                            <label for="mensagem">
                                Mensagem:
                            </label>

                            <textarea
                                id="mensagem"
                                name="mensagem"
                                required></textarea>

                            <button type="submit">
                                Enviar mensagem
                            </button>

                            <p id="feedback"></p>

                        </form>

                        <div id="historico"></div>

                    </section>
                `;
            }


            // =================================
            // ATUALIZA O DOM
            // =================================

            conteudo.innerHTML = template;


            // =================================
            // CONFIGURA O FORMULÁRIO
            // =================================

            configurarFormulario();

        });

    });

}

