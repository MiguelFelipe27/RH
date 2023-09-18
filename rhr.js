function calcularRescisao() {
    // Obter informações do usuário
    var salarioRescisaoInput = document.getElementById("salario_rescisao").value;
    var salario = parseFloat(salarioRescisaoInput);

    var mesesTrabalhadosInput = document.getElementById("meses_trabalhados").value;
    var mesesTrabalhados = parseFloat(mesesTrabalhadosInput);

    var diasTrabalhadosInput = document.getElementById("dias_trabalhados").value;
    var diasTrabalhados = parseFloat(diasTrabalhadosInput);

    var anosTrabalhadosInput = document.getElementById("anos_trabalhados").value;
    var anosTrabalhados = parseFloat(anosTrabalhadosInput);

    // Cálculo de férias proporcionais
    const feriasProporcionais = (salario * mesesTrabalhados / 12) / 3;

    // Cálculo de décimo terceiro proporcional
    const decimoTerceiroProporcional = (salario / 12) * mesesTrabalhados;

    // Cálculo do saldo do salário
    const saldoSalario = (salario / 30) * diasTrabalhados;

    // Cálculo do aviso prévio indenizado
    const avisoPrevioIndenizado = ((anosTrabalhados * 3) + 30) * (salario / 30);

    // Cálculo do FGTS
    const fgts = (salario * 0.08) * mesesTrabalhados * 0.4;

    // Exibir os resultados
    var resp_ferias = `R$ ${feriasProporcionais.toFixed(2)}`;
    document.getElementById("resp_ferias").innerHTML = resp_ferias;

    var resp_decimoTerceiro = `R$ ${decimoTerceiroProporcional.toFixed(2)}`;
    document.getElementById("resp_decimoTerceiro").innerHTML = resp_decimoTerceiro;

    var resp_salario = `R$ ${saldoSalario.toFixed(2)}`;
    document.getElementById("resp_salario").innerHTML = resp_salario;

    var resp_aviso = `R$ ${avisoPrevioIndenizado.toFixed(2)}`;
    document.getElementById("resp_aviso").innerHTML = resp_aviso;

    var resp_fgts = `R$ ${fgts.toFixed(2)}`;
    document.getElementById("resp_fgts").innerHTML = resp_fgts;
}

