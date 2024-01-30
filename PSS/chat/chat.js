function enviar() {
    var campo = document.getElementById("campoTXT").value;
    adicionarMensagem(campo, "row d-flex justify-content-end", "caixaUsuario"); // Indica que a mensagem é do usuário
    document.getElementById("campoTXT").value = "";

    // Adiciona mensagem específica do bot se o campo for igual a "Checkout Transparente (Paypal Plus)"
    if (campo.trim() === "Checkout Transparente (Paypal Plus)") {
      exibirCarregamentoBot();
      setTimeout(function() {
        removerCarregamentoBot();
        adicionarMensagemBot();
      }, 1000);
    } else {
      // Simule uma resposta do sistema (bot) para mensagens normais
      setTimeout(function() {
        adicionarMensagem("Não entendi, pode repetir?", "row d-flex justify-content-start", "caixaBot");
      }, 1000);
    }
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

    rolarParaOFinal();
  }

  function adicionarMensagemBot() {
    var novaCaixaMensagem = document.createElement("div");
    novaCaixaMensagem.className = "caixaBot mt-2 row d-flex";

    var objetoCaixa = `
    <div class="col-1">
    <div class="box-imagem">
      <img src="../../imagens/cacoIcone.png" alt="" />
    </div>
  </div>
  <div class="col-11">
    <div class="ms-3">
      <div class="box-texto">
        <h5 class="text-center mb-2">Paypal Plus (Checkout transparente)</h5>
        <hr>
        <p>O Checkout transparente é a integração em que <b>não é preciso ter uma conta no PayPal para efetuar a transação</b>, apenas inserir os dados do cartão que processamos a compra diretamente no site.</p>
        <hr>
        <h5 class="text-center mb-2">Dá uma olhada em como é dentro de um site:</h5>
        <img class="mx-auto d-block" style="width: 250px;" src="perguntas/paypal plus.png" alt="">
        <hr>
        <div class="text-center botoes d-grid">
          <button value="Escalação" class="btn btn-success btn-sm">Escalação</button>
          <button value="Voltar pro inicio" class="btn btn-success btn-sm">Voltar para inicio</button>
        </div>
      </div>
    </div>
  </div>
    `;

    novaCaixaMensagem.innerHTML = objetoCaixa;

    var conteudoUsuario = document.getElementById("conteudoUsuario");
    conteudoUsuario.appendChild(novaCaixaMensagem);

    rolarParaOFinal();
  }

  function exibirCarregamentoBot() {
    var carregamentoBot = document.createElement("div");
    carregamentoBot.className = "caixaCarregamento carregamentoBot mt-2 row d-flex";

    var objetoCarregamentoBot = `
      <div class="col-1">
        <div class="box-imagem">
          <img src="../../imagens/cacoIcone.png" alt="" />
        </div>
      </div>
      <div class="col-4">
        <div class="ms-3"> <!--Chat bot Carregamento -->
        <div class="box-texto-carregamento">
            <div class="ms-1 carregamento">
              <span class="elementoCarregamento"></span>
              <span class="elementoCarregamento"></span>
              <span class="elementoCarregamento"></span>
            </div>
          </div>
        </div>
      </div>
    `;

    carregamentoBot.innerHTML = objetoCarregamentoBot;

    var conteudoUsuario = document.getElementById("conteudoUsuario");
    conteudoUsuario.appendChild(carregamentoBot);
  }

  function removerCarregamentoBot() {
    var carregamentoBot = document.querySelector(".carregamentoBot");
    if (carregamentoBot) {
      carregamentoBot.remove();
    }
  }

  function rolarParaOFinal() {
    // Rola a página para o final
    window.scrollTo(0, document.body.scrollHeight);
  }

  window.onload = function () {
    var carregamento = document.getElementById("carregamento");
    var mensagemPrimaria = document.getElementById("mensagemPrimaria");
    var duvidas = document.getElementById("duvidas");

    carregamento.style.display = "none";
    mensagemPrimaria.style.display = "none";
    duvidas.style.display = "none";

    setTimeout(function () {
      carregamento.style.display = "block";

      setTimeout(function () {
        mensagemPrimaria.style.display = "block";

        setTimeout(function () {
          duvidas.style.display = "block";

          setTimeout(function () {
            carregamento.remove();
            // Agora, após a remoção do carregamento inicial, permitimos que o chat funcione normalmente
            ativarChat();
          }, 1000);

        }, 1000);

      }, 1000);

    }, 350);
  }

  function ativarChat() {
    var botaoVoltar = document.querySelector('.botoes button[value="Voltar pro inicio"]');
    botaoVoltar.addEventListener('click', mostrarDuvidas);

    var botoes = document.querySelectorAll('.botoes button');
    botoes.forEach(function(botao) {
      botao.addEventListener('click', function() {
        var valorDoBotao = botao.value;
        console.log('Valor do botão clicado:', valorDoBotao);
        adicionarMensagem(valorDoBotao, "row d-flex justify-content-end", "caixaUsuario"); // Indica que a mensagem é do usuário
        if (valorDoBotao === "Checkout Transparente (Paypal Plus)") {
          exibirCarregamentoBot();
          setTimeout(function() {
            removerCarregamentoBot();
            adicionarMensagemBot();
          }, 1000);
        }
      });
    });
  }