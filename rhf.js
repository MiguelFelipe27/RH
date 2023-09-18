function ferias()
{
    var salario_feriasInput = document.getElementById("salario_ferias").value;
    var salario_ferias = parseFloat(salario_feriasInput);

    var dias_feriasInput = document.getElementById("dias_ferias").value;
    var dias_ferias = parseFloat(dias_feriasInput);

    var calc_inss;

    if (salario_ferias <= 1320)
    {
        calc_inss = (salario_ferias * 7.5) / 100;
    }
     else if (salario_ferias < 2571.30)
    {
        calc_inss = (salario_ferias * 9) / 100;
    }
     else if (salario_ferias < 3856.95)
    {
        calc_inss = (salario_ferias * 12) / 100;
    }
     else if (salario_ferias < 7507.50)
    {
        calc_inss = (salario_ferias * 14) / 100;
    }
     else
    {
        calc_inss = 876.97; // Valor máximo
    }


    var salarioLiquido_01 = salario_ferias - calc_inss;

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

    var salario_ferias_02 = (((salario_ferias/3) * dias_ferias)/30);    

    var ferias = salarioLiquido_02 + salario_ferias_02;

    var ferias_02= `R$ ${ferias.toFixed(2)}`;

    document.getElementById("resp").innerHTML = ferias_02;

}