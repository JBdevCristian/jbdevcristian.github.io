document.addEventListener('DOMContentLoaded', function () {
    var carregamento = document.getElementById("carregamento");
    var mensagemPrimaria = document.getElementById("mensagemPrimaria");
    var perguntas = document.getElementById("perguntas");

    carregamento.style.display = "none";
    mensagemPrimaria.style.display = "none";
    perguntas.style.display = "none";

    setTimeout(function () {
        exibirMensagem("mensagemPrimaria");
    }, 1000);

    setTimeout(function () {
        exibirMensagem("perguntas");
    }, 2000);
});

function exibirMensagem(idMensagem) {
    var mensagem = document.getElementById(idMensagem);
    if (mensagem) {
        exibirCarregamentoBot();
        setTimeout(function () {
            removerCarregamentoBot();
            mensagem.style.display = "block";
            rolarParaOFinal();
            if (idMensagem === "perguntas") {
                ativarChat();
            }
        }, 1000);
    }
}

function exibirCarregamentoBot() {
    var carregamentoBot = document.getElementById("carregamento");
    if (carregamentoBot) {
        carregamentoBot.style.display = "block";
    }
}

function removerCarregamentoBot() {
    var carregamentoBot = document.getElementById("carregamento");
    if (carregamentoBot) {
        carregamentoBot.style.display = "none";
    }
}

function rolarParaOFinal() {
    window.scrollTo(-10, document.body.scrollHeight);
}

function adicionarMensagem(mensagem, classe, tipoMensagem) {
    var novaCaixaMensagem = document.createElement("div");
    novaCaixaMensagem.className = tipoMensagem + " mt-2 " + classe;

    var objetoCaixa = `
        <div class="col-7 me-2">
            <div class="box-texto-usuario text-center">
                <p>${mensagem}</p>
            </div>
        </div>
    `;

    novaCaixaMensagem.innerHTML = objetoCaixa;

    var conteudoUsuario = document.getElementById("conteudoUsuario");
    conteudoUsuario.appendChild(novaCaixaMensagem);

    rolarParaOFinal()
}

function ativarChat() {
    var botoes = document.querySelectorAll('.botoes button');
    botoes.forEach(function(botao) {
        botao.addEventListener('click', function() {
            var valorDoBotao = botao.value;
            adicionarMensagem(valorDoBotao, "row d-flex justify-content-end", "caixaUsuario");
        });
    });
    rolarParaOFinal()
}

// Função para incorporar mensagens no HTML
function incorporarMensagem() {
    var divMensagens = document.getElementById("conteudoUsuario");
    var inputPergunta = document.getElementById("perguntasUsuario");
    var pergunta = inputPergunta.value;
    
    var novaMensagem = `
        <div class="caixaUsuario mt-2 row d-flex justify-content-end">
            <div class="col-7 me-2">
                <div class="box-texto-usuario text-center">
                    <p>${pergunta}</p>
                </div>
            </div>
        </div>
    `;
    divMensagens.innerHTML += novaMensagem;

    // Limpar o campo de entrada depois de enviar
    inputPergunta.value = "";
    rolarParaOFinal()
}

// Evento de clique no botão "enviar"
document.getElementById("enviar").addEventListener("click", incorporarMensagem);

// Simulação de respostas do backend
const respostasDoBackend = {
    "Qual seu nome?": "Meu nome é caco.",
    "qual é a sua função?": "Minha função é ajudar e responder às suas perguntas.",
    "como você está?": "Estou bem, obrigado por perguntar!",
    "adeus": "Até logo!",
    // Adicione outras respostas conforme necessário
};

// Função para enviar pergunta e obter resposta
function enviarPergunta() {
    var inputPergunta = document.getElementById("perguntasUsuario");
    var pergunta = inputPergunta.value.toLowerCase(); // Converter para minúsculas para garantir correspondência

    // Verificar se a pergunta tem uma resposta no backend
    if (respostasDoBackend.hasOwnProperty(pergunta)) {
        adicionarResposta(respostasDoBackend[pergunta], "caixaResposta");
    } else {
        adicionarResposta("Putz cara não to sabendo falar", "caixaResposta erro");
    }

    // Limpar o campo de entrada depois de enviar
    inputPergunta.value = "";
}

// Função para adicionar resposta ao chat
function adicionarResposta(resposta, classe) {
    var novaCaixaResposta = document.createElement("div");
    novaCaixaResposta.className = classe + " mt-2 row d-flex";

    var objetoCaixa = `
        <div class="col-1">
            <div class="box-imagem">
                <img src="cacoIcone.png" alt="" />
            </div>
        </div>
        <div class="col-7">
            <div class="ms-3"> <!--Parte texto -->
                <div class="box-texto">
                    <p>${resposta}</p>
                </div>
            </div> <!--/Parte texto -->
        </div>
    `;

    novaCaixaResposta.innerHTML = objetoCaixa;

    var conteudoUsuario = document.getElementById("conteudoUsuario");
    conteudoUsuario.appendChild(novaCaixaResposta);

    rolarParaOFinal();
}


// Evento de clique no botão "enviar"
document.getElementById("enviar").addEventListener("click", enviarPergunta);


// Paypal Plus (Checkout transparente)
var botao1 = document.getElementById('1');
botao1.addEventListener('click', handleBotao1);

function rolarParaOTopo() {
    window.scrollTo(0, 0);
}



function handleBotao1() {

    // Aguarda um curto período de tempo antes de incorporar a resposta específica
    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="1"
        var mensagemBotao1HTML = `
            <div class="caixaBot mt-2 row d-flex">
                <div class="col-1">
                    <div class="box-imagem">
                        <img src="cacoIcone.png" alt="" />
                    </div>
                </div>
                <div class="col-11">
                    <div class="ms-3">
                        <div class="box-texto">
                            <h5 class="text-center mb-2">Paypal Plus (Checkout transparente)</h5>
                            <hr>
                            <p>O Checkout transparente é a integração em que <b class="text-warning">não é preciso ter uma conta no PayPal para efetuar a transação</b>, apenas inserir os dados do cartão que processamos a compra diretamente no site.</p>
                            <hr>
                            <h5 class="text-center mb-2">Dá uma olhada em como é dentro de um site:</h5>
                            <img class="mx-auto d-block imagem1" alt="Imagem" onclick="zoomImg('img1', 'perguntas/paypal plus.png')" src="perguntas/paypal plus.png" alt="">
                            <hr>
                            <div class="text-center botoes d-grid">
                                <button value="Escalações" class="btn btn-success btn-sm" onclick="escalacaoPP()">Escalação</button>
                                <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="modal" class="modal">
                <span class="close" onclick="fecharModal()">&times;</span>
                <img class="modal-content" id="imgModal">
            </div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", mensagemBotao1HTML);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 1000); // Aguarda 1 segundo antes de incorporar a resposta específica
}
  

// Express checkout
var botao2 = document.getElementById('2');
botao2.addEventListener('click', handleBotao2);

function handleBotao2() {   

    // Aguarda um curto período de tempo antes de incorporar a resposta específica
    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="2"
        var mensagemBotao2HTML = `
            <div class="caixaBot mt-2 row d-flex">
                <div class="col-1">
                    <div class="box-imagem">
                        <img src="cacoIcone.png" alt="" />
                    </div>
                </div>
                <div class="col-11">
                    <div class="ms-3">
                        <div class="box-texto">
                            <h5 class="text-center mb-2">Express checkout</h5>
                            <hr>
                            <p>Express Checkout é uma solução de pagamento do PayPal indicada para sites e lojas online que tenham integrações de médio e grande porte.</p>
                            <p>A funcionalidade desse produto é simples: por meio de chamadas API, é possível montar a estrutura do checkout no seu site, <b class="text-warning">sendo necessário ter uma conta PayPal para concluir o pagamento.</b></p>
                            <hr>
                            <h5 class="text-center mb-2">Dá uma olhada em como é dentro de um site:</h5>
                            <img class="mx-auto d-block imagem2"alt="imagem" onclick="zoomImg('img2', 'perguntas/EC.png')" src="perguntas/EC.png">
                            <hr>
                            <div class="text-center botoes d-grid">
                                <button value="Escalações" onclick="ecDuvida()" class="btn btn-success btn-sm">O que é necessário para ter</button>
                                <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="modal" class="modal">
                <span class="close" onclick="fecharModal()">&times;</span>
                <img class="modal-content" id="imgModal">
            </div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", mensagemBotao2HTML);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 1000); // Aguarda 1 segundo antes de incorporar a resposta específica
}


//Qual a diferença entre as duas integrações?
var botao3 = document.getElementById('3');
botao3.addEventListener('click', handleBotao3);

function handleBotao3() {   

    // Aguarda um curto período de tempo antes de incorporar a resposta específica
    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="2"
        var mensagemBotao3HTML = `
        <div class="caixaBot mt-2 row d-flex">
        <div class="col-1">
            <div class="box-imagem">
                <img src="cacoIcone.png" alt="" />
            </div>
        </div>
        <div class="col-11">
            <div class="ms-3">
                <div class="box-texto">
                    <h5 class="text-center mb-2">Qual a diferença entre as duas integrações?</h5>
                    <hr>
                    <p><b class="text-warning">O Checkout Transparente</b> é a integração em que os <b class="text-warning">compradores não necessitam de ter uma conta conosco.</b></p>
                    <p><b class="text-warning">O Express Checkout</b> o cliente faz o login na conta PayPal para efetuar a transação. Neste recurso, implica que os clientes <b class="text-warning">precisam ter, necessariamente, uma conta no PayPal.</b></p>
                    <hr>
                    <div class="text-center botoes d-grid">
                        <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", mensagemBotao3HTML);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 1000); // Aguarda 1 segundo antes de incorporar a resposta específica
}

// Função para exibir o modal com a imagem
function zoomImg(imgId, imageSrc) {
    var modal = document.getElementById("modal");
    var img = document.getElementById("imgModal");
    modal.style.display = "block";
    img.src = imageSrc;
    img.setAttribute('data-id', imgId);
  }
  
  // Função para fechar o modal
  function fecharModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }

//Quais as principais plataformas que são utilizadas?
var botao4 = document.getElementById('4');
botao4.addEventListener('click', handleBotao4);

function handleBotao4() {   

    // Aguarda um curto período de tempo antes de incorporar a resposta específica
    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="2"
        var mensagemBotao4HTML = `
        <div class="caixaBot mt-2 row d-flex">
        <div class="col-1">
            <div class="box-imagem">
                <img src="cacoIcone.png" alt="" />
            </div>
        </div>
        <div class="col-11">
            <div class="ms-3">
                <div class="box-texto">
                    <h5 class="text-center mb-2">Quais as principais plataformas que são utilizadas?</h5>
                    <hr>
                    <p>Ótima pergunta, a paypal oferece serviço para vários tipos de plataformas existentes.</p>
                    <hr>
                    <h5 class="mb-3 text-center">As mais famosas que atendemos:</h5>
                    <ul>
                      <li>Shopify</li>
                      <li>NuvemShop</li>
                      <li>Woordpress</li>
                      <li>Woocomerce</li>
                      <li>Loja Integrada.</li>
                      <li>Tray</li>
                    </ul>
                    <p><b class="text-warning mt-4">Mas não se preocupe, caso a plataforma de seu cliente não esteja inclusa nessas plataformas, basta informar ao mesmo que entre em contato com o suporte ou desenvolvedor para saber como realizar a integrção.</b></p>
                    <hr>
                    <div class="text-center botoes d-grid">
                        <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", mensagemBotao4HTML);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 1000); // Aguarda 1 segundo antes de incorporar a resposta específica
}

//O que transferir para PSS?	
var botao5 = document.getElementById('5');
botao5.addEventListener('click', handleBotao5);

function handleBotao5() {   

    // Aguarda um curto período de tempo antes de incorporar a resposta específica
    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="2"
        var mensagemBotao5HTML = `
        <div class="caixaBot mt-2 row d-flex">
  <div class="col-1">
      <div class="box-imagem">
          <img src="cacoIcone.png" alt="" />
      </div>
  </div>
  <div class="col-11">
      <div class="ms-3">
          <div class="box-texto">
              <h5 class="text-center mb-2">O que transferir para PSS?</h5>
              <hr>
              <p><b>Ótima pergunta, atualmente o time de PSS atende:</b></p>
              <ul>
                <li>Dúvidas de integração (Precisa ter alguns requisitos para ser feita a transferéncia)</li>
                <li>Testes de pagamentos de integração</li>
                <li>Notificações instantâneas (NIP/Webhook)</li>
                <li>Pagamento Referenciado.</li>
              </ul>
              <hr>
              <p class="text-warning" style="font-style: italic; font-size: 13px;">Caso o cliente queira adquirir esse produto em sua conta, basta direcioná-lo ao paypal para darmos a orientação.</p>
              <div class="text-center botoes d-grid">
                  <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="naoAtendemos()">O que não atendemos</button>
                  <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="handleBotao7()">O que analisar antes de ligar para PSS</button>
                  <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="handleBotao6()">O que é necessário para o teste de pagamento?</button>
                  <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
              </div>
          </div>
      </div>
  </div>
</div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", mensagemBotao5HTML);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 1000); // Aguarda 1 segundo antes de incorporar a resposta específica
}

//O que é necessário o teste de pagamento?
var botao6 = document.getElementById('6');
botao6.addEventListener('click', handleBotao6);

function handleBotao6() {   

    // Aguarda um curto período de tempo antes de incorporar a resposta específica
    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="2"
        var mensagemBotao6HTML = `
        <div class="caixaBot mt-2 row d-flex">
        <div class="col-1">
        <div class="box-imagem">
            <img src="cacoIcone.png" alt="" />
        </div>
      </div>
      <div class="col-11">
        <div class="ms-3">
            <div class="box-texto">
                <h5 class="text-center mb-2">O que é necessário para o teste de pagamento?</h5>
                <hr>
                <p>Ótima pergunta, atualmente, para conseguirmos realizar algum teste de pagamento, será necessário essas informações:</p>
                <hr>
                <p></p>
                <ul>
                  <li>Contas Premier ou Bussines</li>
                  <li>E-mail confirmado</li>
                  <li>Site ativo</li>
                  <li>Plataforma que está utilizando atualmente ou se é desenvolvedor próprio</li>
                  <li>Link do site</li>
                </ul>
                <hr>
                <div class="text-center botoes d-grid">
                    <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                </div>
            </div>
        </div>
      </div>
      </div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", mensagemBotao6HTML);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 1000); // Aguarda 1 segundo antes de incorporar a resposta específica
}

//O que analisar antes de ligar para PSS?
var botao7 = document.getElementById('7');
botao7.addEventListener('click', handleBotao7);

function handleBotao7() {   

    // Aguarda um curto período de tempo antes de incorporar a resposta específica
    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="2"
        var mensagemBotao7HTML = `
        <div class="caixaBot mt-2 row d-flex">
        <div class="col-1">
            <div class="box-imagem">
                <img src="cacoIcone.png" alt="" />
            </div>
        </div>
        <div class="col-11">
            <div class="ms-3">
                <div class="box-texto">
                    <h5 class="text-center mb-2">O que analisar antes de ligar para PSS?</h5>
                    <hr>
                    <p>É muito importante que você <b class="text-warning">verifique qual o tipo de conta</b>, pois em PSS <b class="text-warning">só atendemos contas premier e business</b>, verifique se o e-mail do cliente está confirmado, pois para recebimentos de pagamento o <b class="text-warning">e-mail precisaria estar confirmado.</b></p>
                    <hr>
                      <li>Se atente se a conta do cliente está limitada, o que impede qualquer tipo de integração</li>
                      <li>Verificar se a conta está limitada ou não</li>
                      <li>Verificar se o e-mail está confirmado</li>
                      <li>Tipo de conta (premier ou business).</li>
                    </ul>
                    <hr>
                    <div class="text-center botoes d-grid">
                        <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", mensagemBotao7HTML);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 1000); // Aguarda 1 segundo antes de incorporar a resposta específica
}

//Botões disponíveis no PayPal
var botao8 = document.getElementById('8');
botao8.addEventListener('click', handleBotao8);

function handleBotao8() {   

    // Aguarda um curto período de tempo antes de incorporar a resposta específica
    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="2"
        var mensagemBotao8HTML = `
        <div class="caixaBot mt-2 row d-flex">
        <div class="col-1">
            <div class="box-imagem">
                <img src="cacoIcone.png" alt="" />
            </div>
        </div>
        <div class="col-11">
            <div class="ms-3">
                <div class="box-texto">
                    <h5 class="text-center mb-2">Botões disponíveis no PayPal</h5>
                    <hr>
                    <p>Atualmente, a Paypal Brasil só está trabalhando com dois botões, que seriam eles, <b class="text-warning">Doação e o Assinatura Smart.</b> Caso algum cliente quisesse integrar algum outro botão, <b class="text-warning">seria um cenário de negativa</b>, pois os botões fora esses dois foram descontinuados.</p>
                    <p>Então é sempre importante questionar ao cliente qual tipo de botão o mesmo está tentando integrar para darmos uma tratativa mais eficiente possivel</p>
                    
                    <p class="mt-4"><b class="text-danger">Importante!! Tem alguns clientes que confundem botão com as integrações (PP+ e ExpressCheckout)</b></p>
                    <hr>
                    <div class="text-center botoes d-grid">
                      <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="botaoDoacao()">Botão de Doação</button>
                      <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="botaoAss()">Botão Assinatura Smart</button>
                        <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", mensagemBotao8HTML);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 1000); // Aguarda 1 segundo antes de incorporar a resposta específica
}

//Recusas de pagamentos nas integrações.
var botao9 = document.getElementById('9');
botao9.addEventListener('click', handleBotao9);

function handleBotao9() {   

    // Aguarda um curto período de tempo antes de incorporar a resposta específica
    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="2"
        var mensagemBotao9HTML = `
        <div class="caixaBot mt-2 row d-flex">
        <div class="col-1">
            <div class="box-imagem">
                <img src="cacoIcone.png" alt="" />
            </div>
        </div>
        <div class="col-11">
            <div class="ms-3">
                <div class="box-texto">
                    <h5 class="text-center mb-2">Recusas de pagamentos nas integrações.</h5>
                    <hr>
                    <p>Imagine um cenário onde o cliente entra em contato apenas informando que o cliente dele não está conseguindo pagar em seu site.  Antes de entrar em contato com o setor de PSS deve verificar se não se trata de um Denied ou Risk Model</p>
                    <hr />
                    <p class="mt-4"><b class="text-warning">Quando houver uma solicitação parecida como essa, deve verificar se:</b></p>
                    <ul>
                      <li>Se apresenta tentativa de transação na conta.</li>
                      <li>Perguntar quantos clientes estão tendo esse problema (no caso, se for apenas 1 verificar as tentativas de transação). Se passar de mais de 1 cliente, precisa ser direcionado ao time para analisar a integração.</li>
                      <li>Verificar a conta do cliente (pergunte ao vendedor se possui o endereço de e-mail do cliente)</li>
                      <hr />
                      <p>Ou seja, se atende alguns desses critérios, <b class="text-warning">possivelmente se trata de um denied ou riskmodel</b>, caso seja, simplesmente informe <b class="text-warning">como funciona a análise de pagamento realizada pela Paypal e oriente que o cliente dele entre em contato para darmos mais detalhes.</b></p>
                      <p class="fst-italic mt-5 text-warning">HELP419</p>
                    </ul>
                    <hr>
                    <div class="text-center botoes d-grid">
                      <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", mensagemBotao9HTML);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 1000); // Aguarda 1 segundo antes de incorporar a resposta específica
}

//Pagamento Referenciado.
var botao10 = document.getElementById('10');
botao10.addEventListener('click', handleBotao10);

function handleBotao10() {   

    // Aguarda um curto período de tempo antes de incorporar a resposta específica
    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="2"
        var mensagemBotao10HTML = `
        <div class="caixaBot mt-2 row d-flex">
        <div class="col-1">
            <div class="box-imagem">
                <img src="cacoIcone.png" alt="" />
            </div>
        </div>
        <div class="col-11">
            <div class="ms-3">
                <div class="box-texto">
                    <h5 class="text-center mb-2">Pagamento Referenciado</h5>
                    <hr>
                    <p><b class="text-warning">Sempre bom adquirir mais conhecimento não é mesmo</b> &#129299</p>
                    <p>O pagamento referenciado é uma opção de assinatura para contas jurídicas, em que se pode solicitar uma cobrança sem data e sem valor fixo, ou seja, pode-se solicitar a cobrança de um valor aleatório, na data em que desejar (contanto que seja referente ao produto,  serviço ou produto vendido).</p> 
                    <p><b class="text-warning">Neste processo, o comprador autoriza o vendedor a cobrar qualquer valor em sua conta PayPal, sempre que ele quiser, sem limite de valor e tempo.</b></p>
                    <hr>
                    <div class="text-center botoes d-grid">
                      <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="nessReferenciado()">O que é necessário para escalação?</button>
                      <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", mensagemBotao10HTML);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 1000); // Aguarda 1 segundo antes de incorporar a resposta específica
}

//O que é API?
var botao11 = document.getElementById('11');
botao11.addEventListener('click', handleBotao11);

function handleBotao11() {   

    // Aguarda um curto período de tempo antes de incorporar a resposta específica
    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="2"
        var mensagemBotao11HTML = `
        <div class="caixaBot mt-2 row d-flex">
        <div class="col-1">
            <div class="box-imagem">
                <img src="cacoIcone.png" alt="" />
            </div>
        </div>
        <div class="col-11">
            <div class="ms-3">
                <div class="box-texto">
                    <h5 class="text-center mb-2">O que é API?</h5>
                    <hr>
                    <p><b >Sempre bom adquirir mais conhecimento não é mesmo </b>&#129299</p>
                    <p><b class="text-warning">As APIs são um tipo de “ponte” que conecta aplicações</b>, podendo ser utilizadas para os mais variados tipos de negócio, por empresas de diversos nichos de mercado ou tamanho.</p> 
                    <p>Para você entender melhor, <b class="text-warning">usamos uma metáfora para explicar o significado de uma API.</b> Quando vamos a um restaurante, escolhemos um prato no menu e fazemos o pedido ao garçom.</p>
                    <p>Em seguida, o garçom encaminha esse pedido à cozinha, que o prepara. No fim, o garçom traz o prato pronto até a gente. Por fim, não sabemos como o prato foi preparado, <b class="text-warning">apenas recebemos o que solicitamos.</b></p>
                    <hr>
                    <div class="text-center botoes d-grid">
                      <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", mensagemBotao11HTML);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 1000); // Aguarda 1 segundo antes de incorporar a resposta específica
}

//O que é notificação de pagamentos (NIP)?
var botao12 = document.getElementById('12');
botao12.addEventListener('click', handleBotao12);

function handleBotao12() {   

    // Aguarda um curto período de tempo antes de incorporar a resposta específica
    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="2"
        var mensagemBotao12HTML = `
        <div class="caixaBot mt-2 row d-flex">
        <div class="col-1">
            <div class="box-imagem">
                <img src="cacoIcone.png" alt="" />
            </div>
        </div>
        <div class="col-11">
            <div class="ms-3">
                <div class="box-texto">
                    <h5 class="text-center mb-2">O que é notificação de pagamentos (NIP)?</h5>
                    <hr>
                    <p><b>Sempre bom adquirir mais conhecimento não é mesmo </b>&#129299</p>
                    <p>Notificação instantânea de pagamento (NIP) é um serviço de mensagem que <b class="text-warning">envia notificações sobre atualizações de suas transações do PayPal.</b> Você pode usá-la para automatizar funções administrativas, como preenchimento de pedidos, rastreamento de envio de mercadorias e atualizações de status. As notificações instantâneas de pagamento podem atualizá-lo sobre:</p> 
                    <ul>
                      <li>Pagamentos instantâneos (incluindo o PayPal Checkout e pagamentos diretos com cartão de crédito)</li>
                      <li>Pagamentos com cheque eletrônico</li>
                      <li>Pagamentos pendentes</li>
                      <li>Cobranças recorrentes e assinaturas</li>
                      <li>Autorizações</li>
                      <li>Disputas, estornos, reversões e reembolsos</li>
                    </ul>
                    <hr>
                    <div class="text-center botoes d-grid">
                      <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", mensagemBotao12HTML);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 1000); // Aguarda 1 segundo antes de incorporar a resposta específica
}

//escalação
var botao13 = document.getElementById('13');
botao13.addEventListener('click', handleBotao13);

function handleBotao13() {   

    // Aguarda um curto período de tempo antes de incorporar a resposta específica
    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="2"
        var mensagemBotao13HTML = `
        <div class="caixaBot mt-2 row d-flex">
        <div class="col-1">
            <div class="box-imagem">
                <img src="cacoIcone.png" alt="" />
            </div>
        </div>
        <div class="col-11">
            <div class="ms-3">
                <div class="box-texto">
                    <h5 class="text-center mb-2">Escalações</h5>
                    <hr>
                    <p>Vou te ajudar com isso &#128521</p>
                    <p><b>Qual tipo de escalação está procurando ?</b></p>
                    <hr>
                    <div class="text-center botoes d-grid">
                      <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="escalacaoPP()">Paypal Plus</button>
                      <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="nessReferenciado">Pagamento referenciado</button>
                      <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="Pending()">Pending On Boarding</button>
                      <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", mensagemBotao13HTML);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 1000); // Aguarda 1 segundo antes de incorporar a resposta específica
}

//Mensagens secundarias botões

function escalacaoPP() {

    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="2"
        var escalacaoPP = `
        <div class="caixaBot mt-2 row d-flex">
        <div class="col-1">
            <div class="box-imagem">
                <img src="cacoIcone.png" alt="" />
            </div>
        </div>
        <div class="col-11">
            <div class="ms-3">
                <div class="box-texto">
                    <h5 class="text-center mb-2">Escalação Paypal plus</h5>
                    <hr>
                    <p>Boa ai sim, segue o que é necessário para escalar no Intranet &#128521</p>
                    <hr>
                    <ul>
                      <li>TPV Anual: R$XXX (Faturamento anual do cliente ou estimativa)</li>
                      <li>Nome Completo: XXX</li>
                      <li>Razão Social: XXX (Pode ser consultada por https://www.situacao-cadastral.com/ )</li>
                      <li>CNPJ: XXX</li>
                      <li>URL do Site: XXX</li>
                      <li>Telefone: XXX</li>
                      <li>E-mail: XXX</li>
                      <li>Porcentagem de Recebimento pelo PayPal (SOW): XXX% PayPal (Se o cliente recebe metade pelo PayPal, e metade por outro método de pagamento)</li>
                      <li>Valor médio de recebimento por cliente: R$XXX </li>
                      <li>Plataforma para hospedar ou desenvolvedor próprio: XXX</li>
                    </ul>
                    <p> <b class="text-warning">Após pegar essas informações, será necessário adicionar a nota com tudo preenchido na conta do cliente e orientar que o prazo médio é de 1 a 5 dias uteis, podendo se estender.</b></p>
                    <hr>
                    <div style="font-style: italic; font-size: 13px;">
                      <p>Área Ofender: <b class="text-warning">Integração.</b></p>
                      <p>Situação Ofender: <b class="text-warning">PayPal Plus<b></p>
                      <p>Sênior Responsável.</p>
                    </div>
                    <div class="text-center botoes d-grid">
                      <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", escalacaoPP);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 500); // Aguarda 1 segundo antes de incorporar a resposta específica

}

function ecDuvida() {
    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="2"
        var duvidaExpress = `
        <div class="caixaBot mt-2 row d-flex">
        <div class="col-1">
            <div class="box-imagem">
                <img src="cacoIcone.png" alt="" />
            </div>
        </div>
        <div class="col-11">
            <div class="ms-3">
                <div class="box-texto">
                    <h5 class="text-center mb-2">O que é necessário para ter Express checkout</h5>
                    <hr>
                    <p>Boa ai sim, otima pergunta.</p>
                    <hr>
                    <p>Para utilizar a integração Express checkout, é necessário que o cliente tenha uma conta no mínimo Premier.</p>
                    <p class="text-warning">Importante saber que as plataformas atualmente estão apenas utilizando contas de perfil Bussines sendo necessário entrar em contato com o mesmo para saber se o perfil da conta é aceita, tudo bem?</p>
                    <p>PS: é uma integração que já vem ativa na conta, não precisa ter uma escalação, caso o cliente queira integrar basta entrar em contato com o time de PSS</p>
                    <div class="text-center botoes d-grid">
                      <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", duvidaExpress);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 500); // Aguarda 1 segundo antes de incorporar a resposta específica

}

function naoAtendemos() {
    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="2"
        var naoAtendemos = `
        <div class="caixaBot mt-2 row d-flex">
        <div class="col-1">
            <div class="box-imagem">
                <img src="cacoIcone.png" alt="" />
            </div>
        </div>
        <div class="col-11">
            <div class="ms-3">
                <div class="box-texto">
                    <h5 class="text-center mb-2">O que não atendemos</h5>
                    <hr>
                    <p>Boa ai sim, obrigado por perguntar, segue a baixo uma listinha do que não conseguimos prestar suporte.</p>
                    <hr>
                     <ul>
                        <li>Contas Personal - mesmo que seja apenas para passar uma orientação, não podemos atender porque não atende os critérios de transferência tipo gerar credenciais que seria necessário.</li>
                        <li>Solicitação de integração</li>
                        <li>Parcelamento/manual</li>
                        <li>Faturas</li>
                        <li>Negociação de Taxas</li>
                     </ul>
                    <hr>
                    <p class="text-warning">Claro, existem suas exceções, mas precisa ser analisado cautelosamente, pois pode acarretar possíveis reports caso seja uma transferência indevida.</p>
                    <div class="text-center botoes d-grid">
                      <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", naoAtendemos);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 500); // Aguarda 1 segundo antes de incorporar a resposta específica

}

function botaoDoacao() {
    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="2"
        var botaoDoacao = `
        <div class="caixaBot mt-2 row d-flex">
        <div class="col-1">
            <div class="box-imagem">
                <img src="cacoIcone.png" alt="" />
            </div>
        </div>
        <div class="col-11">
            <div class="ms-3">
                <div class="box-texto">
                    <h5 class="text-center mb-2">Botão de Doação</h5>
                    <hr>
                    <p>Maravilha, dá uma olhadinha do que é preciso ter para utilizar essa integração. 	&#128513;</p>
                    <hr>
                    <p>O Botão de doação na finalização de compra permite que você doe para instituições de caridade ao concluir uma compra. Basta clicar na caixa de seleção de doações durante a finalização da compra se quiser apoiar a instituição de caridade que aparece para você.</p>
                    <p class="text-warning">O botão de doação só está disponível para contas ONG (Sem fins lucrativos).</p>
                    <hr>
                    <p>Caso o cliente deseja utilizar basta conferir se a conta é CNPJ e se está com o perfil <b class="text-warning">NOPROFIT</b> depois disso só <b class="text-warning">entrar em contato com PSS</b> que orientamos o mesmo.</p>
                    <div class="text-center botoes d-grid">
                      <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", botaoDoacao);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 500); // Aguarda 1 segundo antes de incorporar a resposta específica

}

function botaoAss() {
    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="2"
        var botaoAss = `
        <div class="caixaBot mt-2 row d-flex">
        <div class="col-1">
            <div class="box-imagem">
                <img src="cacoIcone.png" alt="" />
            </div>
        </div>
        <div class="col-11">
            <div class="ms-3">
                <div class="box-texto">
                    <h5 class="text-center mb-2">Botão de Doação</h5>
                    <hr>
                    <p>Maravilha, dá uma olhadinha do que é preciso ter para utilizar essa integração. 	&#128513;</p>
                    <hr>
                    <p>Com o Botão de assinatura você pode usar o botão Assinar para cobrar os clientes regularmente, cobrar as tarifas de assinatura ou oferecer serviços de assinatura (Exemplo: Netflix, Disney, Amazon, etc...) Nós fornecemos um código HTML que você pode copiar e colar no código do seu site.</p>
                    <hr>
                    <p>Caso o cliente deseja utilizar basta conferir se a conta é CNPJ ou Premier e se está com o E-mail <b class="text-warning">Confirmado</b> depois disso só <b class="text-warning">entrar em contato com PSS</b> que orientamos o mesmo.</p>
                    <div class="text-center botoes d-grid">
                      <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", botaoAss);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 500); // Aguarda 1 segundo antes de incorporar a resposta específica
}

function nessReferenciado() {
    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="2"
        var nessReferenciado = `
        <div class="caixaBot mt-2 row d-flex">
        <div class="col-1">
            <div class="box-imagem">
                <img src="cacoIcone.png" alt="" />
            </div>
        </div>
        <div class="col-11">
            <div class="ms-3">
                <div class="box-texto">
                    <h5 class="text-center mb-2">Escalação Pagamento Referenciado</h5>
                    <hr>
                    <p>Maravilha, dá uma olhadinha do que é preciso ter para utilizar esse produto 	&#128513;</p>
                    <hr>
                    <ul>
                      <li>Nome da empresa:  </li>
                      <li>URL do site da loja: </li>
                      <li>Numero de clientes recorrentes nos últimos 3 meses: </li>
                      <li>Valor das vendas mensais:  </li>
                      <li>Como pretende usar a integração referenciada: </li>
                      <li>O produto solicitado é para utilizar no carrinho:  </li>
                      <li>O comprador vai precisar iniciar manualmente cada pagamento ou será feito automático a partir do contrato de cobrança feito:  </li>
                      <li>Está utilizado plataforma para hospedar site ou desenvolvedor próprio:</li>
                    </ul>
                    <hr>
                    <p class="text-warning">O prazo para análise e retorno é de 10 dias úteis, depois da escalação apenas deixar nota em conta com as informações preenchidas.</p>
                    <hr>
                    <p class="text-warning" style="font-style: italic; font-size: 13px;">PS: Qualquer dúvida se o cliente te ou não o pagamento referenciado ativo em conta entrar em contato com PSS</p>
                    <div class="text-center botoes d-grid">
                      <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", nessReferenciado);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 500); // Aguarda 1 segundo antes de incorporar a resposta específica
}

function Pending() {
    setTimeout(function() {
        // Mensagem correspondente ao clique no botão com id="2"
        var Pending = `
        <div class="caixaBot mt-2 row d-flex">
        <div class="col-1">
            <div class="box-imagem">
                <img src="cacoIcone.png" alt="" />
            </div>
        </div>
        <div class="col-11">
            <div class="ms-3">
                <div class="box-texto">
                    <h5 class="text-center mb-2">Pending On Boarding</h5>
                    <hr>
                    <p>Maravilha, dá uma olhadinha do que é preciso ter para resolver esse problema	&#128513;</p>
                    <hr>
                    <p>Para os cenários de pagamentos com status de Pending partner Onboarding, foi identificado que é possível reverter (via Spark), desde que a pessoa vendedora nos contate e não tenha enviado produto/serviço vendido.</p>
                    <p>Caso a pessoa vendedora tenha enviado o item, precisamos entender se é a primeira vez que isso acontece, para coletar prints da evidência da entrega, entender o que é comercializado e analisar a conta no CCI, para ver a disponibilidade do CT e seguir com a orientação correta para o cliente, de que, isso está relacionado ao meio de integração e a plataforma, que ele deverá alterar a forma de integrar o paypal, pois, os próximos pagamentos também poderão ficar com esse status.</p>
                    <p><b class="text-warning">Importante: </b> O fluxo de ct está em validação, caso tenhamos qualquer novo update, avisaremos o mais breve. Todas as contas com esse cenário, deverão ser escaladas para consolidar e sinalizar ao time Paypal, que está atuando em uma melhoria para esse cenário.</p>
                    <hr>
                    <div style="font-style: italic; font-size: 13px;">
                    <p><b class="text-warning">Área Offender:</b>Integração Brasil</p>
                    <p><b class="text-warning">Situação Offender:</b>Pending On Boarding </p>
                    </div>
                    <hr>
                    <div class="text-center botoes d-grid">
                      <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        `;

        // Adiciona a resposta específica ao conteúdo do usuário
        var conteudoUsuario = document.getElementById("conteudoUsuario");
        conteudoUsuario.insertAdjacentHTML("beforeend", Pending);

        // Rola para o final após adicionar a resposta específica
        rolarParaOFinal();
    }, 500); // Aguarda 1 segundo antes de incorporar a resposta específica
}






























