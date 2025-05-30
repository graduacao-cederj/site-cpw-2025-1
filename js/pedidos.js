function incluirProduto() {
    const combo = document.querySelector("select[name='produto']");
    const produtoSelecionado = combo.value;
    const lista = document.getElementById("listaCompras");
    const campoValor = document.getElementById("valor");

    // Verifica se o usuário selecionou um produto válido
    if (produtoSelecionado === "-----") {
        alert("Por favor, selecione um produto antes de incluir.");
        return;
    }

    // Mapeamento dos preços por produto (sem R$)
    const precos = {
        "Canastra (500g)": 70.00,
        "Queijo Minas (400g)": 23.00,
        "Queijo Coalho (500g)": 40.00,
        "Gorgonzola (200g)": 20.00,
        "Queijo Brie (200g)": 30.00
    };

    // Adiciona o produto à lista
    lista.value += (lista.value ? "\n" : "") + produtoSelecionado;

    // Atualiza o valor total
    const precoProduto = precos[produtoSelecionado];
    const valorAtual = parseFloat(campoValor.value.replace(",", ".") || 0);
    const novoValor = valorAtual + precoProduto;

    campoValor.value = novoValor.toFixed(2).replace(".", ",");

    // Reseta o combo para “-----”
    combo.selectedIndex = 0;
}
