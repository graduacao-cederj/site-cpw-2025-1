const queijos = new Array(5);

queijos[0] = {
    tipo: 'Canastra',
    imagem: '../imagens/QueijoCanastra.jpg',
    peso: '500g',
    preco: 'R$ 70,00'
};

queijos[1] = {
    tipo: 'Minas',
    imagem: '../imagens/QueijoMinas.jpg',
    peso: '400g',
    preco: 'R$ 23,00'
};

queijos[2] = {
    tipo: 'Coalho',
    imagem: '../imagens/QueijoCoalho.jpg',
    peso: '500g',
    preco: 'R$ 40,00'
};

queijos[3] = {
    tipo: 'Gorgonzola',
    imagem: '../imagens/QueijoGorgonzola.jpg',
    peso: '200g',
    preco: 'R$ 20,00'
};

queijos[4] = {
    tipo: 'Brie',
    imagem: '../imagens/QueijoBrie.jpg',
    peso: '200g',
    preco: 'R$ 30,00'
};

function mostrarQueijo(nome) {
    const info = queijos.find(q => q.tipo === nome);
    if (!info) return;

    document.getElementById('conteudoDescricao').style.display = 'block';
    document.getElementById('NomeDes').textContent = info.tipo;
    document.getElementById('ImgDes').src = info.imagem;
    document.getElementById('ImgDes').alt = `Imagem do queijo ${info.tipo}`;
    document.getElementById('PesoDes').textContent = `Peso: ${info.peso}`;
    document.getElementById('PrecoDes').textContent = info.preco.replace('R$ ', '');
}
