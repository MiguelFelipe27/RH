function salarioLiquido() {
    var salarioInput = document.getElementById("salario").value;
    var salario = parseFloat(salarioInput);

    var vtInput = document.getElementById("vt").value;
    var vt = parseFloat(vtInput);

    var dias_trabalhadosInput = document.getElementById("dias_trabalhados").value;
    var dias_trabalhados = parseFloat(dias_trabalhadosInput);

    var calc_inss;

    if (salario <= 1320)
    {
        calc_inss = (salario * 7.5) / 100;
    }
     else if (salario < 2571.30)
    {
        calc_inss = (salario * 9) / 100;
    }
     else if (salario < 3856.95)
    {
        calc_inss = (salario * 12) / 100;
    }
     else if (salario < 7507.50)
    {
        calc_inss = (salario * 14) / 100;
    }
     else
    {
        calc_inss = 876.97; // Valor máximo
    }


    var salarioLiquido_01 = salario - calc_inss;

    var calc_irrf;

    if (salarioLiquido_01 <= 1903.98)
    {
        calc_irrf = 0;
    }
     else if (salarioLiquido_01 < 2826.66)
    {
        calc_irrf = (salarioLiquido_01 * 7.5) / 100;
    }
     else if (salarioLiquido_01 < 3751.06)
    {
        calc_irrf = (salarioLiquido_01 * 15) / 100;
    }
     else if (salarioLiquido_01 < 4664.69)
    {
        calc_irrf = (salarioLiquido_01 * 22.5) / 100;
    }
     else
    {
        calc_irrf = (salarioLiquido_01 * 27.5) / 100;
    }

    var salarioLiquido_02 = salarioLiquido_01 - calc_irrf;

    var transpo = salario * 0.06;

    var vale_transporte = vt * dias_trabalhados;

    if (transpo>vale_transporte)
    {
        var salarioLiquido_03 = salarioLiquido_02 - vale_transporte;
        var excedente_01 = transpo - vale_transporte;
        var excedente_02 = `R$ ${excedente_01.toFixed(2)}`;
        document.getElementById("excedente").innerHTML = excedente_02;
    }
    else
    {
        salarioLiquido_03 = salarioLiquido_02 - transpo;
        excedente_01 = 0;
        document.getElementById("excedente").innerHTML = excedente_01;
    }
    
    var resposta = `R$ ${salarioLiquido_03.toFixed(2)}`;
    document.getElementById("resp").innerHTML = resposta;
}