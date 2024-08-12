function rolarParaRodape() {
	const batePapoDiv = document.getElementById("batePapo");
	const ultimaMensagem = batePapoDiv.lastElementChild;
	if (ultimaMensagem) {
		ultimaMensagem.scrollIntoView({
			behavior: 'smooth'
		});
	}
}

var input = document.getElementById("perguntasUsuario");
input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("botaoForm").click();
	}
});

var bancoDeDados = {
	"mensagens": [{
			"id": 0,
			"texto": "Está testando verificando se consigo conversar bobinho",
			"tipo": "resposta",
			"palavrasChave": ["teste", "testes", "testando"]
		},
		{
			"id": 1,
			"texto": "Olá! Como posso ajudar você hoje?",
			"tipo": "saudacao",
			"palavrasChave": ["olá", "ajudar", "hoje", "oi"]
		},
		{
			"id": 2,
			"texto": "Estou aqui para responder suas perguntas.",
			"tipo": "informativo",
			"palavrasChave": ["responder", "perguntas"]
		},
		{
			"id": 3,
			"texto": "Desculpe, não entendi sua pergunta. Pode reformular?",
			"tipo": "erro",
			"palavrasChave": ["desculpe", "não entendi", "reformular"]
		},
		{
			"id": 4,
			"texto": "Tenha um ótimo dia!",
			"tipo": "despedida",
			"palavrasChave": ["ótimo dia", "despedida"]
		},
		{
			"id": 5,
			"texto": "Você pode me contar mais sobre isso?",
			"tipo": "inquilino",
			"palavrasChave": ["contar", "mais"]
		},
		{
			"id": 6,
			"texto": "Estou processando sua solicitação, um momento por favor...",
			"tipo": "processamento",
			"palavrasChave": ["processando", "solicitação", "momento"]
		},
		{
			"id": 7,
			"texto": "Aqui está a informação que você pediu.",
			"tipo": "resposta",
			"palavrasChave": ["informação", "pediu"]
		},
		{
			"id": 8,
			"texto": "Teu pai é lindo",
			"tipo": "resposta",
			"palavrasChave": ["pai", "lindo"]
		},
		{
			"id": 9,
			"texto": "Paypal Plus é perfeito",
			"tipo": "resposta",
			"palavrasChave": ["Paypal", "plus", "checkout transparente", "checkout", "transparente", "problema no checkout transparente", "paypal plus"]
		},
		{
			"id": 10,
			"texto": "Parcelamento não seria responsabilidade para PSS",
			"tipo": "resposta",
			"palavrasChave": ["parcelamento", "cliente com parcelamento", "teste de parcelamento", "fatura parcelamento"]
		},
		{
			"id": 11,
			"texto": "Fatura é perfeito",
			"tipo": "resposta",
			"palavrasChave": ["faturas", "erro na fatura", "problema na fatura", "teste na fatura", "teste de parcelamento em fatura"]
		},
      {
			"id": 12,
			"texto": "Ele gostaria de integrar qual opção? Checkout transparente ou Express?",
			"tipo": "resposta",
			"palavrasChave": ["integrar", "integrar em seu site", "ajuda a integrar no site"]
		}

	]
};

function buscarMensagemPorPalavrasChave(palavras) {
	var palavrasArray = palavras.toLowerCase().split(' ');

	var mensagensEncontradas = bancoDeDados.mensagens.map(function(mensagem) {
		// Verificar a correspondência das palavras-chave
		var palavrasChave = mensagem.palavrasChave.map(palavraChave => palavraChave.toLowerCase());
		var correspondencias = palavrasArray.filter(palavra => palavrasChave.some(palavraChave => palavraChave.includes(palavra) || palavra.includes(palavraChave)));

		return {
			texto: mensagem.texto,
			correspondencias: correspondencias.length
		};
	});

	// Filtrar mensagens com pelo menos uma correspondência
	mensagensEncontradas = mensagensEncontradas.filter(mensagem => mensagem.correspondencias > 0);

	// Ordenar mensagens pela quantidade de palavras-chave correspondidas
	mensagensEncontradas.sort((a, b) => b.correspondencias - a.correspondencias);

	return mensagensEncontradas.map(function(mensagem) {
		return mensagem.texto;
	});
}

function pergunta() {
	var texto = document.getElementById("perguntasUsuario").value.trim();

	if (!texto) {
		alert("Digite um texto");
		return;
	}

	document.getElementById("perguntasUsuario").value = '';

	document.getElementById("batePapo").innerHTML += criarHtmlUsuario(texto);
	rolarParaRodape()

	var carregamentoId = adicionarHtmlCarregamento();

	setTimeout(function() {
		removerHtmlCarregamento(carregamentoId);

		var resposta = gerarRespostaBot(texto);
		document.getElementById("batePapo").innerHTML += criarHtmlBot(resposta);
		rolarParaRodape()

	}, 1200);
}

function criarHtmlUsuario(texto) {
	return `
       <div class="caixaUsuario mb-2 row d-flex justify-content-end">
         <div class="col-7 me-2">
            <div class="box-texto-usuario text-center">
                <p>${texto}</p>
            </div>
         </div>
        </div>`;
}

function adicionarHtmlCarregamento() {
	var carregamentoId = 'loading-' + new Date().getTime();
	var html = `
         <div class="caixaCarregamento" id="${carregamentoId}">
             <div class="row d-flex">
                 <div class="col-1">
                     <div class="box-imagem">
                         <img src="cacoIcone.png" alt="" />
                     </div>
                 </div>
                 <div class="col-4">
                     <div class="ms-3">
                         <div class="box-texto-carregamento d-flex justify-content-center">
                             <div class="ms-1 carregamento ">
                                 <span class="elementoCarregamento"></span>
                                 <span class="elementoCarregamento"></span>
                                 <span class="elementoCarregamento"></span>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>`;
	document.getElementById("carregamento").innerHTML += html;
	rolarParaRodape()
	return carregamentoId;

}

function removerHtmlCarregamento(carregamentoId) {
	var carregamentoDiv = document.getElementById(carregamentoId);
	if (carregamentoDiv) {
		carregamentoDiv.remove();
	}

}

function gerarRespostaBot(inputUsuario) {
	var respostas = buscarMensagemPorPalavrasChave(inputUsuario);
	return respostas.length > 0 ? respostas[0] : "Desculpe, não entendi sua pergunta. Pode reformular?";
}

function criarHtmlBot(texto) {
	return `
             <div class="row d-flex">
                 <div class="col-1">
                     <div class="box-imagem">
                         <img src="cacoIcone.png" alt="" />
                     </div>
                 </div>
                 <div class="col-10">
                     <div class="ms-3">
                         <div class="caixaBot box-texto-bot box-texto mb-2">
                             
                                 <span>${texto}</span>
                            
                         </div>
                     </div>
                 </div>
             </div>
   `;
}