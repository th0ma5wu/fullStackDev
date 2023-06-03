const form = document.getElementById('form-atividade');
let linhas = '';
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Aprovado">';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Reprovado">';
let atividades = [];
let notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima:'));

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionarLinha();
    adicionarTabela();
    adicionarMediaFinal();
});

function adicionarLinha() {
    const nomeAtividade = document.getElementById('nome-atividade');
    const notaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(nomeAtividade.value)) {
        alert(`A atividade: ${nomeAtividade.value} já foi inserida.`)
    } else {
        atividades.push(nomeAtividade.value);
        notas.push(parseFloat(notaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${nomeAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value}</td>`;
        linha += `<td>${parseFloat(notaAtividade.value) >= 7 ? imgAprovado : imgReprovado}`;
        linha += '</tr>';

        console.log(linha);
        console.log(atividades);
        console.log(notas);

        linhas += linha;
    }

    nomeAtividade.value = '';
    notaAtividade.value = '';

}

function adicionarTabela() {
    const body = document.querySelector('tbody');
    body.innerHTML = linhas;
}

function adicionarMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}