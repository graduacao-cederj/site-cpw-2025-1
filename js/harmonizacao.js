const dadosQueijos = {
    'Canastra': {
        imagem: '../imagens/QueijoCanastra.jpg',
        descricao: 'Harmoniza perfeitamente com tintos de corpo médio e taninos macios.'
    },
    'Minas': {
        imagem: '../imagens/QueijoMinas.jpg',
        descricao: 'Quando combinado com goiabada ou mel, espumantes ou brancos de colheita tardia.'
    },
    'Gorgonzola': {
        imagem: '../imagens/QueijoGorgonzola.jpg',
        descricao: 'Pede vinhos intensamente aromáticos e adocicados, como Porto, Madeira ou Moscatéis.'
    }
};


function abrirModal(nome) {
    const queijo = dadosQueijos[nome];
    document.getElementById('modalTitulo').textContent = nome;
    document.getElementById('modalImagem').src = queijo.imagem;
    document.getElementById('modalImagem').alt = `Imagem do queijo ${nome}`;
    document.getElementById('modalDescricao').textContent = queijo.descricao;

    document.getElementById('fundoModal').style.display = 'block';
    document.getElementById('janelaModal').style.display = 'block';
}

function fecharModal() {
    document.getElementById('fundoModal').style.display = 'none';
    document.getElementById('janelaModal').style.display = 'none';
}
