// Função fornecida pelo enunciado para cálculo dos dígitos verificadores
function calculaDV(num) {
    var resto = 0, soma = 0;
    for (let i = 2; i < 11; i++) {
        soma += (num % 10) * i;
        num = Math.floor(num / 10);
    }
    resto = soma % 11;
    return (resto > 1) ? (11 - resto) : 0;
}

// Função principal chamada ao alterar o CPF
function validaCPF() {
    const campoCPF = document.getElementById("cpf");
    const cpf = campoCPF.value;

    // a) Verifica se tem 11 caracteres
    if (cpf.length !== 11) {
        alert("O CPF deve conter exatamente 11 dígitos.");
        return;
    }

    // b) Verifica se todos os caracteres são dígitos (0 a 9)
    if (!/^[0-9]+$/.test(cpf)) {
        alert("O CPF deve conter apenas dígitos.");
        return;
    }

    // c) Verifica os dígitos verificadores
    const identCPF = parseInt(cpf.substring(0, 9));
    const dig1 = calculaDV(identCPF);
    const dig2 = calculaDV(identCPF * 10 + dig1);

    const digitosInformados = cpf.substring(9, 11);
    const digitosCalculados = "" + dig1 + dig2;

    if (digitosInformados !== digitosCalculados) {
        alert("Os dígitos verificadores do CPF são inválidos.");
        return;
    }

    // Se passou por tudo, CPF é válido → não mostra nenhuma mensagem
}
