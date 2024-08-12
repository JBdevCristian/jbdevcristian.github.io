function rolarParaRodape() {
	const batePapoDiv = document.getElementById("batePapo");
	const ultimaMensagem = batePapoDiv.lastElementChild;
	if (ultimaMensagem) {
		ultimaMensagem.scrollIntoView({
			behavior: 'smooth'
		});
	}
}

function rolarParaOTopo() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

function verificarValoresBotoes() {
	// Seleciona a div com o atributo name="opcao"
	const divOpcao = document.querySelector('div[name="opcao"]');
	const idValores = {};
	if (divOpcao) {
		// Seleciona todos os botões dentro da div
		const botoes = divOpcao.querySelectorAll('button');
		// Itera sobre os botões encontrados e armazena os IDs e valores no objeto
		botoes.forEach(botao => {
			if (botao.id) {
				idValores[botao.id] = botao.value;
			}
		});
	} else {
		console.log('Nenhuma div com name="opcao" foi encontrada.');
	}
	// Retorna ou imprime os IDs e valores encontrados
	return idValores;
}
const funcoesPorId = {
	'1': botao1,
	'2': botao2,
	'3': botao3,
	'4': botao4,
	'5': botao5,
	'6': botao6,
	'7': botao7,
	'8': botao8,
	'9': botao9,
	'10': botao10,
	'11': botao11,
	'12': botao12,
	'13': botao13
};

function adicionarEventosBotoes() {
	const divOpcao = document.querySelector('div[name="opcao"]');
	if (divOpcao) {
		const botoes = divOpcao.querySelectorAll('button');
		botoes.forEach(botao => {
			botao.addEventListener('click',
				() => {
					const texto = botao.value;
					const mensagemHTML = `<div class="caixaUsuario mb-2 row d-flex justify-content-end">
           <div class="col-7 me-2">
              <div class="box-texto-usuario text-center">
                  <p>${texto}</p>
              </div>
           </div>
          </div>`;
					// Adiciona o HTML de mensagem ao bate-papo
					document.getElementById("batePapo").innerHTML += mensagemHTML;
					rolarParaRodape()
					const funcao = funcoesPorId[botao.id];
					if (funcao) {
						funcao();
					} else {
						console.log(`Nenhuma função associada ao botão com ID: ${botao.id}`);
					}
				});
		});
	} else {
		console.log('Nenhuma div com name="opcao" foi encontrada.');
	}
}
// Chama a função para adicionar os eventos de clique aos botões
adicionarEventosBotoes();

function botao1() {
	var carregamentoId = adicionarHtmlCarregamento();
	setTimeout(() => {
		removerHtmlCarregamento(carregamentoId);
		const mensagemBotao1HTML = `
         <div class="caixaBot mt-2 row d-flex">
             <div class="col-1">
                 <div class="box-imagem">
                     <img src="assets/img/cacoIcone.png" alt="" />
                 </div>
             </div>
             <div class="col-11">
                 <div class="ms-3">
                     <div class="box-texto">
                         <h5 class="text-center mb-2">Paypal Plus (Checkout transparente)</h5>
                         <hr>
                         <p>O Checkout transparente é a integração em que <b class="text-danger">não é preciso ter uma conta no PayPal para efetuar a transação</b>, apenas inserir os dados do cartão que processamos a compra diretamente no site.</p>
                         <hr>
                         <h5 class="text-center mb-2">Dá uma olhada em como é dentro de um site:</h5>
                         <img class="mx-auto d-block imagem1" alt="Imagem" src="perguntas/paypal plus.png">
                         <hr>
                         <div class="text-center botoes d-grid">
                             <button id="14" value="Solicitação " class="btn btn-success btn-sm">Analise</button>
                             <button id="15" value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()>Voltar para inicio</button>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     `;
		document.getElementById("batePapo").innerHTML += mensagemBotao1HTML;
		rolarParaRodape()
	}, 800)
}

function botao2() {
	var carregamentoId = adicionarHtmlCarregamento();
	setTimeout(() => {
		removerHtmlCarregamento(carregamentoId);
		const mensagemBotao2HTML = `
        <div class="caixaBot mt-2 row d-flex">
            <div class="col-1">
                <div class="box-imagem">
                    <img src="assets/img/cacoIcone.png" alt="" />
                </div>
            </div>
            <div class="col-11">
                <div class="ms-3">
                    <div class="box-texto">
                        <h5 class="text-center mb-2">Express checkout</h5>
                        <hr>
                        <p>Express Checkout é uma solução de pagamento do PayPal indicada para sites e lojas online que tenham integrações de médio e grande porte.</p>
                        <p>A funcionalidade desse produto é simples: por meio de chamadas API, é possível montar a estrutura do checkout no seu site, <b class="text-danger">sendo necessário ter uma conta PayPal para concluir o pagamento.</b></p>
                        <hr>
                        <h5 class="text-center mb-2">Dá uma olhada em como é dentro de um site:</h5>
                        <img class="mx-auto d-block imagem2"alt="imagem" src="perguntas/EC.png">
                        <p class="fst-italic mt-3" style="font-size: 12px;"><b class="text-danger">PS:</b> Não é necessário Analise, já vem ativo na conta.<p>
                        <hr>
                        <div class="text-center botoes d-grid">
                            <button id="16" value="Solicitação " onclick="ecDuvida()" class="btn btn-success btn-sm">O que é necessário para ter?</button>
                            <button id="17" value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()>Voltar para inicio</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;
		document.getElementById("batePapo").innerHTML += mensagemBotao2HTML;
		rolarParaRodape()
	}, 800)
}

function botao3() {
	var carregamentoId = adicionarHtmlCarregamento();
	setTimeout(() => {
		removerHtmlCarregamento(carregamentoId);
		const mensagemBotao2HTML = `
              <div class="caixaBot mt-2 row d-flex">
        <div class="col-1">
            <div class="box-imagem">
                <img src="assets/img/cacoIcone.png" alt="" />
            </div>
        </div>
        <div class="col-11">
            <div class="ms-3">
                <div class="box-texto">
                    <h5 class="text-center mb-2">Qual a diferença entre as duas integrações?</h5>
                    <hr>
                    <p><b class="text-danger">O Checkout Transparente</b> é a integração em que os <b class="text-danger">compradores não necessitam de ter uma conta conosco.</b></p>
                    <hr>
                    <p><b class="text-danger">O Express Checkout</b> o cliente faz o login na conta PayPal para efetuar a transação. Neste recurso, implica que os clientes <b class="text-danger">precisam ter, necessariamente, uma conta no PayPal.</b></p>
                    <hr>
                    <h5 class="text-danger">Script:</h5>
                    <p>Certinho vou te explicar qual a diferença entre as duas, <b class="text-danger">caso você queira que seus clientes realizem os pagamentos utilizando a conta paypal ou queira vender em outra moeda</b>, o mais indicado para você seria o <b class="text-danger">ExpressCheckout</b>, mas caso queira que <b class="text-danger">seus clientes somente utilizem o cartão no seu site o mais indicado seria o Paypal plus (checkout transparente)</b> cliente não precisa ter uma conta somente colocar as informações do cartão de crédito, <b class="text-danger">lembrando que para ter a integração paypal plus precisar escalar para aprovação e logo em seguida se tiver tudo certinho poderá utilizar essa integração.</b></p>
                    <div class="text-center botoes d-grid">
                       <button value="Solicitação" class="btn btn-success btn-sm" onclick="escalacaoPP()">Analise</button>
                        <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                    </div>
                </div>
            </div>
        </div>
     </div>
     `;
		document.getElementById("batePapo").innerHTML += mensagemBotao2HTML;
		rolarParaRodape()
	}, 800)
}

function botao4() {
	var carregamentoId = adicionarHtmlCarregamento();
	setTimeout(() => {
		removerHtmlCarregamento(carregamentoId);
		const mensagemBotao2HTML = `
              <div class="caixaBot mt-2 row d-flex">
          <div class="col-1">
              <div class="box-imagem">
                  <img src="assets/img/cacoIcone.png" alt="" />
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
                        <li><a target="_blank"href="https://www.paypal.com/br/webapps/mpp/merchant-integration/solution/ecommerce-platform?solution=express-checkout">Outras plataformas</a></li>
                      </ul>
                      <p><b class="text-danger mt-4">Mas não se preocupe, caso a plataforma de seu cliente não esteja inclusa nessas plataformas, basta informar ao mesmo que entre em contato com o suporte ou desenvolvedor para saber como realizar a integrção.</b></p>
                      <hr>
                      <div class="text-center botoes d-grid">
                          <button value="Voltar para inicio" class="btn btn-success btn-sm">Voltar para inicio</button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
 
     `;
		document.getElementById("batePapo").innerHTML += mensagemBotao2HTML;
		rolarParaRodape()
	}, 800)
}

function botao5() {
	var carregamentoId = adicionarHtmlCarregamento();
	setTimeout(() => {
		removerHtmlCarregamento(carregamentoId);
		const mensagemBotao2HTML = `
              <div class="caixaBot mt-2 row d-flex">
    <div class="col-1">
        <div class="box-imagem">
            <img src="assets/img/cacoIcone.png" alt="" />
        </div>
    </div>
    <div class="col-11">
        <div class="ms-3">
            <div class="box-texto">
                <h5 class="text-center mb-2">O que transferir para Integrações?</h5>
                <hr>
                <p><b>Ótima pergunta, atualmente o time de Integrações atende:</b></p>
                <ul>
                  <li>Dúvidas de integração (Precisa ter alguns requisitos para ser feita a transferéncia)</li>
                  <li>Testes de pagamentos de integração</li>
                  <li>Notificações instantâneas (NIP/Webhook)</li>
                  <li>Pagamento Referenciado.</li>
                </ul>
                <hr>
                <p class="text-danger" style="font-style: italic; font-size: 13px;">Caso o cliente queira adquirir esse produto em sua conta, basta direcioná-lo ao paypal para darmos a orientação.</p>
                <div class="text-center botoes d-grid">
                    <button value="O que não atendemos" class="btn btn-success btn-sm" onclick="naoAtendemos()">O que não atendemos</button>
                    <button value="O que analisar antes de ligar para Integrações" class="btn btn-success btn-sm" onclick="handleBotao7()">O que analisar antes de ligar para Integrações</button>
                    <button value="O que é necessário para o teste de pagamento?" class="btn btn-success btn-sm" onclick="handleBotao6()">O que é necessário para o teste de pagamento?</button>
                    <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                </div>
            </div>
        </div>
    </div>
  </div>
 
     `;
		document.getElementById("batePapo").innerHTML += mensagemBotao2HTML;
		rolarParaRodape()
	}, 800)
}

function botao6() {
	var carregamentoId = adicionarHtmlCarregamento();
	setTimeout(() => {
		removerHtmlCarregamento(carregamentoId);
		const mensagemBotao2HTML = `
              <div class="caixaBot mt-2 row d-flex">
          <div class="col-1">
          <div class="box-imagem">
              <img src="assets/img/cacoIcone.png" alt="" />
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
                    <li>Contas CPF ou CNPJ</li>
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
		document.getElementById("batePapo").innerHTML += mensagemBotao2HTML;
		rolarParaRodape()
	}, 800)
}

function botao7() {
	var carregamentoId = adicionarHtmlCarregamento();
	setTimeout(() => {
		removerHtmlCarregamento(carregamentoId);
		const mensagemBotao2HTML = `
              <div class="caixaBot mt-2 row d-flex">
          <div class="col-1">
              <div class="box-imagem">
                  <img src="assets/img/cacoIcone.png" alt="" />
              </div>
          </div>
          <div class="col-11">
              <div class="ms-3">
                  <div class="box-texto">
                      <h5 class="text-center mb-2">O que analisar antes de ligar para Integrações?</h5>
                      <hr>
                      <p>É muito importante que você <b class="text-danger">verifique qual o tipo de conta</b>, pois em Integrações <b class="text-danger">só atendemos contas CPF e CNPJ</b>, verifique se o e-mail do cliente está confirmado, pois para recebimentos de pagamento o <b class="text-danger">e-mail precisaria estar confirmado.</b></p>
                      <hr>
                        <li>Se atente se a conta do cliente está limitada, o que impede qualquer tipo de integração</li>
                        <li>Verificar se o e-mail está confirmado</li>
                        <li>Tipo de conta (CPF ou CNPJ).</li>
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
		document.getElementById("batePapo").innerHTML += mensagemBotao2HTML;
		rolarParaRodape()
	}, 800)
}

function botao8() {
	var carregamentoId = adicionarHtmlCarregamento();
	setTimeout(() => {
		removerHtmlCarregamento(carregamentoId);
		const mensagemBotao2HTML = `
              <div class="caixaBot mt-2 row d-flex">
          <div class="col-1">
              <div class="box-imagem">
                  <img src="assets/img/cacoIcone.png" alt="" />
              </div>
          </div>
          <div class="col-11">
              <div class="ms-3">
                  <div class="box-texto">
                      <h5 class="text-center mb-2">Botões disponíveis no PayPal</h5>
                      <hr>
                      <p>Atualmente, a Paypal Brasil só está trabalhando com dois botões, que seriam eles, <b class="text-danger">Doação e o Assinatura Smart.</b> Caso algum cliente quisesse integrar algum outro botão, <b class="text-danger">seria um cenário de negativa</b>, pois os botões fora esses dois foram descontinuados.</p>
                      <p>Então é sempre importante questionar ao cliente qual tipo de botão o mesmo está tentando integrar para darmos uma tratativa mais eficiente possivel</p>
                      
                      <p class="mt-4"><b class="text-danger">Importante!! Tem alguns clientes que confundem botão com as integrações (PP+ e ExpressCheckout)</b></p>
                      <hr>
                      <div class="text-center botoes d-grid">
                        <button value="Botão de Doação" class="btn btn-success btn-sm" onclick="botaoDoacao()">Botão de Doação</button>
                        <button value="Botão Assinatura Smart" class="btn btn-success btn-sm" onclick="botaoAss()">Botão Assinatura Smart</button>
                          <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
 
     `;
		document.getElementById("batePapo").innerHTML += mensagemBotao2HTML;
		rolarParaRodape()
	}, 800)
}

function botao9() {
	var carregamentoId = adicionarHtmlCarregamento();
	setTimeout(() => {
		removerHtmlCarregamento(carregamentoId);
		const mensagemBotao2HTML = `
              <div class="caixaBot mt-2 row d-flex">
          <div class="col-1">
              <div class="box-imagem">
                  <img src="assets/img/cacoIcone.png" alt="" />
              </div>
          </div>
          <div class="col-11">
              <div class="ms-3">
                  <div class="box-texto">
                      <h5 class="text-center mb-2">Recusas de pagamentos nas integrações.</h5>
                      <hr>
                      <p>Imagine um cenário onde o cliente entra em contato apenas informando que o cliente dele não está conseguindo pagar em seu site.  Antes de entrar em contato com o setor de Integrações deve verificar se não se trata de um Recusa por parte do cartão ou Analise sistemica</p>
                      <hr />
                      <p class="mt-4"><b class="text-danger">Quando houver uma solicitação parecida como essa, deve verificar se:</b></p>
                      <ul>
                        <li>Se apresenta tentativa de transação na conta.</li>
                        <li>Perguntar quantos clientes estão tendo esse problema (no caso, se for apenas 1 verificar as tentativas de transação). Se passar de mais de 1 cliente, precisa ser direcionado ao time para analisar a integração.</li>
                        <li>Verificar a conta do cliente (pergunte ao vendedor se possui o endereço de e-mail do cliente)</li>
                        <hr />
                        <p>Ou seja, se atende alguns desses critérios, <b class="text-danger">possivelmente se trata de um Recusa por parte do cartão ou uma analise sistemica</b>, caso seja, simplesmente informe <b class="text-danger">como funciona a análise de pagamento realizada pela Paypal e oriente que o cliente dele entre em contato para darmos mais detalhes.</b></p>
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
		document.getElementById("batePapo").innerHTML += mensagemBotao2HTML;
		rolarParaRodape()
	}, 800)
}

function botao10() {
	var carregamentoId = adicionarHtmlCarregamento();
	setTimeout(() => {
		removerHtmlCarregamento(carregamentoId);
		const mensagemBotao2HTML = `
              <div class="caixaBot mt-2 row d-flex">
          <div class="col-1">
              <div class="box-imagem">
                  <img src="assets/img/cacoIcone.png" alt="" />
              </div>
          </div>
          <div class="col-11">
              <div class="ms-3">
                  <div class="box-texto">
                      <h5 class="text-center mb-2">Pagamento Referenciado</h5>
                      <hr>
                      <p><b class="text-danger">Sempre bom adquirir mais conhecimento não é mesmo</b> 🤓</p>
                      <p>O pagamento referenciado é uma opção de assinatura para contas jurídicas, em que se pode solicitar uma cobrança sem data e sem valor fixo, ou seja, pode-se solicitar a cobrança de um valor aleatório, na data em que desejar (contanto que seja referente ao produto,  serviço ou produto vendido).</p> 
                      <p><b class="text-danger">Neste processo, o comprador autoriza o vendedor a cobrar qualquer valor em sua conta PayPal, sempre que ele quiser, sem limite de valor e tempo.</b></p>
                      <hr>
                      <div class="text-center botoes d-grid">
                        <button value="O que é necessário para Analise?" class="btn btn-success btn-sm" onclick="nessReferenciado()">O que é necessário para Analise?</button>
                        <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
     `;
		document.getElementById("batePapo").innerHTML += mensagemBotao2HTML;
		rolarParaRodape()
	}, 800)
}

function botao11() {
	var carregamentoId = adicionarHtmlCarregamento();
	setTimeout(() => {
		removerHtmlCarregamento(carregamentoId);
		const mensagemBotao2HTML = `
              <div class="caixaBot mt-2 row d-flex">
                  <div class="col-1">
                      <div class="box-imagem">
                          <img src="assets/img/cacoIcone.png" alt="" />
                      </div>
                  </div>
                  <div class="col-11">
                      <div class="ms-3">
                          <div class="box-texto">
                              <h5 class="text-center mb-2">O que é API?</h5>
                              <hr>
                              <p><b>Sempre bom adquirir mais conhecimento não é mesmo </b>🤓</p>
                              <p><b class="text-danger">As APIs são um tipo de “ponte” que conecta aplicações</b>, podendo ser utilizadas para os mais variados tipos de negócio, por empresas de diversos nichos de mercado ou tamanho.</p> 
                              <p>Para você entender melhor, <b class="text-danger">usamos uma metáfora para explicar o significado de uma API.</b> Quando vamos a um restaurante, escolhemos um prato no menu e fazemos o pedido ao garçom.</p>
                              <p>Em seguida, o garçom encaminha esse pedido à cozinha, que o prepara. No fim, o garçom traz o prato pronto até a gente. Por fim, não sabemos como o prato foi preparado, <b class="text-danger">apenas recebemos o que solicitamos.</b></p>
                              <hr>
                              <div class="text-center botoes d-grid">
                                  <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
     `;
		document.getElementById("batePapo").innerHTML += mensagemBotao2HTML;
		rolarParaRodape()
	}, 800)
}

function botao12() {
	var carregamentoId = adicionarHtmlCarregamento();
	setTimeout(() => {
		removerHtmlCarregamento(carregamentoId);
		const mensagemBotao2HTML = `
              <div class="caixaBot mt-2 row d-flex">
              <div class="col-1">
                  <div class="box-imagem">
                      <img src="assets/img/cacoIcone.png" alt="" />
                  </div>
              </div>
              <div class="col-11">
                  <div class="ms-3">
                      <div class="box-texto">
                          <h5 class="text-center mb-2">O que é notificação de pagamentos (NIP)?</h5>
                          <hr>
                          <p><b>Sempre bom adquirir mais conhecimento não é mesmo </b>🤓</p>
                          <p>Notificação instantânea de pagamento (NIP) é um serviço de mensagem que <b class="text-danger">envia notificações sobre atualizações de suas transações do PayPal.</b> Você pode usá-la para automatizar funções administrativas, como preenchimento de pedidos, rastreamento de envio de mercadorias e atualizações de status. As notificações instantâneas de pagamento podem atualizá-lo sobre:</p> 
                          <ul>
                              <li>Pagamentos instantâneos (incluindo o PayPal Checkout e pagamentos diretos com cartão de crédito)</li>
                              <li>Pagamentos com cheque eletrônico</li>
                              <li>Pagamentos pendentes</li>
                              <li>Cobranças recorrentes e assinaturas</li>
                              <li>Autorizações</li>
                              <li>Contestações, estornos e reembolsos</li>
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
		document.getElementById("batePapo").innerHTML += mensagemBotao2HTML;
		rolarParaRodape()
	}, 800)
}

function botao13() {
	var carregamentoId = adicionarHtmlCarregamento();
	setTimeout(() => {
		removerHtmlCarregamento(carregamentoId);
		const mensagemBotao2HTML = `
              <div class="caixaBot mt-2 row d-flex">
          <div class="col-1">
              <div class="box-imagem">
                  <img src="assets/img/cacoIcone.png" alt="" />
              </div>
          </div>
          <div class="col-11">
              <div class="ms-3">
                  <div class="box-texto">
                      <h5 class="text-center mb-2">Solicitação   </h5>
                      <hr>
                      <p>Vou te ajudar com isso 😉</p>
                      <p><b>Qual tipo de Analise está procurando ?</b></p>
                      <hr>
                      <div class="text-center botoes d-grid">
                        <button value="Paypal Plus" class="btn btn-success btn-sm" onclick="escalacaoPP()">Paypal Plus</button>
                        <button value="Pagamento referenciado" class="btn btn-success btn-sm disabled" onclick="nessReferenciado">Pagamento referenciado</button>
                        <button value="Pendencia de Pagamento" class="btn btn-success btn-sm disabled" onclick="Pending()">Pendencia de Pagamento</button>
                        <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
     `;
		document.getElementById("batePapo").innerHTML += mensagemBotao2HTML;
		rolarParaRodape()
	}, 800)
}

function escalacaoPP() {
	var carregamentoId = adicionarHtmlCarregamento();
	setTimeout(() => {
		removerHtmlCarregamento(carregamentoId);
		var escalacaoPP = `
         <div class="caixaBot mt-2 row d-flex">
         <div class="col-1">
             <div class="box-imagem">
                 <img src="assets/img/cacoIcone.png" alt="" />
             </div>
         </div>
         <div class="col-11">
             <div class="ms-3">
                 <div class="box-texto">
                     <h5 class="text-center mb-2">Aqui ficaria script de Analise</h5>
                     <hr>
                     <p>Boa ai sim, segue o que é necessário para escalar no Intranet 😉</p>
                     <hr>
                     <ul>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                     </ul>
                     <p> <b class="text-danger">Nota adicional sobre prazo médio</b></p>
                     <div class="text-center botoes d-grid">
                       <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                     </div>
                 </div>
             </div>
         </div>
       </div>
         `;
		document.getElementById("batePapo").innerHTML += escalacaoPP;
		rolarParaRodape()
	}, 800)
}

function ecDuvida() {
	var carregamentoId = adicionarHtmlCarregamento();
	setTimeout(() => {
		removerHtmlCarregamento(carregamentoId);
		var duvidaExpress = `
         <div class="caixaBot mt-2 row d-flex">
         <div class="col-1">
             <div class="box-imagem">
                 <img src="assets/img/cacoIcone.png" alt="" />
             </div>
         </div>
         <div class="col-11">
             <div class="ms-3">
                 <div class="box-texto">
                     <h5 class="text-center mb-2">O que é necessário para ter Express checkout</h5>
                     <hr>
                     <p>Boa ai sim, otima pergunta.</p>
                     <hr>
                     <p>Para utilizar a integração Express checkout, é necessário que o cliente tenha uma conta no mínimo comercial CPF.</p>
                     <p class="text-danger">Importante saber que as plataformas atualmente estão apenas utilizando contas de perfil CNPJ sendo necessário entrar em contato com o mesmo para saber se o perfil da conta é aceita, tudo bem?</p>
                     <p><b class="text-danger">PS:<b> é uma integração que já vem ativa na conta, não precisa ter uma Analise, caso o cliente queira integrar basta entrar em contato com o time de Integrações</p>
                     <div class="text-center botoes d-grid">
                       <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                     </div>
                 </div>
             </div>
         </div>
       </div>
         `;
		document.getElementById("batePapo").innerHTML += duvidaExpress;
		rolarParaRodape()
	}, 800)
}

function naoAtendemos() {
	var carregamentoId = adicionarHtmlCarregamento();
	setTimeout(() => {
		removerHtmlCarregamento(carregamentoId);
		var naoAtendemos = `
         <div class="caixaBot mt-2 row d-flex">
         <div class="col-1">
             <div class="box-imagem">
                 <img src="assets/img/cacoIcone.png" alt="" />
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
                         <li>Contas Pessoais - mesmo que seja apenas para passar uma orientação, não podemos atender porque não atende os critérios de transferência tipo gerar credenciais que seria necessário.</li>
                         <li>Solicitação de integração</li>
                         <li>Parcelamento/manual</li>
                         <li>Faturas</li>
                         <li>Negociação de Taxas</li>
                      </ul>
                     <hr>
                     <p class="text-danger">Claro, existem suas exceções, mas precisa ser analisado cautelosamente, pois pode acarretar possíveis reports caso seja uma transferência indevida.</p>
                     <div class="text-center botoes d-grid">
                       <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                     </div>
                 </div>
             </div>
         </div>
       </div>
         `;
		document.getElementById("batePapo").innerHTML += naoAtendemos;
		rolarParaRodape()
	}, 800)
}

function botaoDoacao() {
	var carregamentoId = adicionarHtmlCarregamento();
	setTimeout(() => {
		removerHtmlCarregamento(carregamentoId);
		var botaoDoacao = `
         <div class="caixaBot mt-2 row d-flex">
         <div class="col-1">
             <div class="box-imagem">
                 <img src="assets/img/cacoIcone.png" alt="" />
             </div>
         </div>
         <div class="col-11">
             <div class="ms-3">
                 <div class="box-texto">
                     <h5 class="text-center mb-2">Botão de Doação</h5>
                     <hr>
                     <p>Maravilha, dá uma olhadinha do que é preciso ter para utilizar essa integração. 😁</p>
                     <hr>
                     <p>O Botão de doação na finalização de compra permite que você doe para instituições de caridade ao concluir uma compra. Basta clicar na caixa de seleção de doações durante a finalização da compra se quiser apoiar a instituição de caridade que aparece para você.</p>
                     <p class="text-danger">O botão de doação só está disponível para contas ONG (Sem fins lucrativos).</p>
                     <div class="text-center botoes d-grid">
                       <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                     </div>
                 </div>
             </div>
         </div>
       </div>
         `;
		document.getElementById("batePapo").innerHTML += botaoDoacao;
		rolarParaRodape()
	}, 800)
}

function botaoAss() {
	var carregamentoId = adicionarHtmlCarregamento();
	setTimeout(() => {
		removerHtmlCarregamento(carregamentoId);
		var botaoAss = `
         <div class="caixaBot mt-2 row d-flex">
         <div class="col-1">
             <div class="box-imagem">
                 <img src="assets/img/cacoIcone.png" alt="" />
             </div>
         </div>
         <div class="col-11">
             <div class="ms-3">
                 <div class="box-texto">
                     <h5 class="text-center mb-2">Botão de assinatura</h5>
                     <hr>
                     <p>Maravilha, dá uma olhadinha do que é preciso ter para utilizar essa integração. 	😁</p>
                     <hr>
                     <p>Com o Botão de assinatura você pode usar o botão Assinar para cobrar os clientes regularmente, cobrar as tarifas de assinatura ou oferecer serviços de assinatura (Exemplo: Netflix, Disney, Amazon, etc...) Nós fornecemos um código HTML que você pode copiar e colar no código do seu site.</p>
                     <hr>
                     <p>Caso o cliente deseja utilizar basta conferir se a conta é CNPJ ou CPF e se está com o E-mail <b class="text-danger">Confirmado</b> depois disso só <b class="text-danger">entrar em contato com Integrações</b> que orientamos o mesmo.</p>
                     <div class="text-center botoes d-grid">
                       <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                     </div>
                 </div>
             </div>
         </div>
       </div>
         `;
		document.getElementById("batePapo").innerHTML += botaoAss;
		rolarParaRodape()
	}, 800)
}

function nessReferenciado() {
	var carregamentoId = adicionarHtmlCarregamento();
	setTimeout(() => {
		removerHtmlCarregamento(carregamentoId);
		var nessReferenciado = `
        <div class="caixaBot mt-2 row d-flex">
        <div class="col-1">
            <div class="box-imagem">
                <img src="assets/img/cacoIcone.png" alt="" />
            </div>
        </div>
        <div class="col-11">
            <div class="ms-3">
                <div class="box-texto">
                    <h5 class="text-center mb-2">Analise Pagamento Referenciado</h5>
                    <hr>
                    <p>Maravilha, dá uma olhadinha do que é preciso ter para utilizar esse produto 	😁</p>
                    <hr>
                    <ul>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                       <li>Informação de Analise: XXX</li>
                    </ul>
                    <hr>
                    <p class="text-danger">O prazo para análise e retorno é de 10 dias úteis, depois da Analise apenas deixar nota em conta com as informações preenchidas.</p>
                    <hr>
                    <p class="text-danger" style="font-style: italic; font-size: 13px;">PS: Qualquer dúvida se o cliente tem ou não o pagamento referenciado ativo em conta entrar em contato com Integrações</p>
                    <div class="text-center botoes d-grid">
                      <button value="Voltar para inicio" class="btn btn-success btn-sm" onclick="rolarParaOTopo()">Voltar para inicio</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        `;
		document.getElementById("batePapo").innerHTML += nessReferenciado;
		rolarParaRodape()
	}, 800)
}