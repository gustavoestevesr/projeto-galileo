//Função para apadrinhar ou não os candidatos
function mouseClick(value) {

    //Criando Alert para perguntar ao padrinho
    pergunta = confirm("Deseja apadrinhar este candidato?");

    //Confirmando
    if (pergunta == true) {

        //Fazendo DOM para pegar todos os candidatos columns
        var candidatos = document.getElementsByClassName('column-candidatos');

        //Removendo visualmente da vitrine
        candidatos[value].style.display = 'none';

        alert("Candidato apadrinhado")
        //Removendo o candidato do Google Sheets
        //codigo...
        //fazer...
    }
    //Cancelando
    else {
        alert("Candidato não apadrinhado")
    }

}

//Função para carregar os candidatos na vitrine
function loadCandidates() {

    //Lendo do Google Sheets
    var links = ['https://flipgrid.com/s/qMKzWSZC6Nweuyz3?embed=true', 'https://flipgrid.com/s/qMKzWSZC6Nweuyz3?embed=true', 'https://flipgrid.com/s/qMKzWSZC6Nweuyz3?embed=true']
    var nomes = ['Victor de Freitas Silva Silva Silva','Gustavo Esteves Rocha','Bruna Pires Guimarães']
    var idades = ['20','25','23']
    var irmaos = ['2','3','4']
    var rendas = ['R$1200.00','R$1000.00','R$1150.00']

    //Pegando o tamanho do vetor de links por conta do For
    var tamVetorLinks = links.length

    //Usando DOM para pegar o row candidatos para criar dinamicamente os candidatos
    var row_candidatos = document.getElementsByClassName("row-candidatos")

    //Loop para gerar candidatos na vitrine de acordo com a quantidade de candidatos do google sheets
    for (let i = 0; i < tamVetorLinks; i++) {

        //Criando dinamicamente marcadores html com os links dos candidatos
        row_candidatos[0].innerHTML +=
            `  
        <!-- CANDIDADO -->

        <div class="column-candidatos">

            <div class="container-depoimento">
            <img id="image" class="parte1" src="depoimento_aluno.png" alt="Depopimento do aluno">
            <label id="texto-depoimento">
                Para mim é um prazer enorme
                poder contribuir com este Projeto
                tão incrível que só tende a
                prosperar. Vida longa ao Galileo!
            </label>
            </div>

            <iframe frameBorder="0" src="${links[i]}" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="microphone; camera"></iframe>       

            <div class="container-dados-do-aluno">
            <img id="image" class="parte2" src="dados_do_aluno.png" alt="Dados do aluno">
            <label id="texto-nome-dados-do-aluno">
                ${nomes[i]}
            </label>
            <label id="texto-renda-dados-do-aluno">
                ${rendas[i]}
            </label>
            <label id="texto-idade-dados-do-aluno">
                ${idades[i]}
            </label>
            <label id="texto-n-irmaos-dados-do-aluno">
                ${irmaos[i]}
            </label>
            </div>

            <br>

            <button type="button" class="btn btn-primary" value=${i} onclick="mouseClick(${i});" >Apadrinhar</button>

            <hr>

        </div>
        `

    }
}
