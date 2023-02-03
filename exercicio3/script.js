
const salarioFixo = 2000
const auxilioCreche = 2 * 45.50

const salarioFixoMaisCreche = salarioFixo + auxilioCreche
console.log (`Sálario fixo mais auxilio creche: ${salarioFixoMaisCreche}`)

const comissaoJaneiro = 5784.50 * 0.10
console.log (`Comissão mês de janeiro: ${comissaoJaneiro}`)

const descontoJnaeiroInss = (salarioFixo + comissaoJaneiro) * 0.05
console.log (`Desconto janeiro INSS: ${descontoJnaeiroInss}`)



let salarioJaneiroComissao = 5784.50 * 0.1
console.log(`Comissão ganha no mês de janeiro o: ${salarioJaneiroComissao}`)

let salarioFevereiroComissao = 3418.41 * 0.1
console.log(`Comissão ganha no mês de fevereiro: ${salarioFevereiroComissao}`)

let salarioMarcoComissao = 4124.10 * 0.1
console.log(`Comissão ganha no mês de março: ${salarioMarcoComissao}`)

let salarioAbrilComissao = 1874 * 0.1
console.log(`Comissão ganha no mês de abril: ${salarioAbrilComissao}`)

let salarioMaioComissao = 7000 * 0.1
console.log(`Comissão ganha no mês de maio: ${salarioMaioComissao}`)

let salarioJunhoComissao = 9450 * 0.1
console.log(`Comissão ganha no mês de junho: ${salarioJunhoComissao}`)



let salarioJaneiroDesconto = (salarioFixo + salarioJaneiroComissao) * 0.05
console.log(`Desconto no salario de janeiro: ${salarioJaneiroDesconto}`)

let salarioFevereiroDesconto = (salarioFixo + salarioFevereiroComissao) * 0.05
console.log(`Desconto no salario de fevereiro: ${salarioFevereiroDesconto}`)

let salarioMarcoDesconto = (salarioFixo + salarioMarcoComissao) * 0.05
console.log(`Desconto no salario de março: ${salarioMarcoDesconto}`)

let salarioAbrilDesconto = (salarioFixo + salarioAbrilComissao) * 0.05
console.log(`Desconto no salario de maio: ${salarioAbrilDesconto}`)

let salarioMaioDesconto = (salarioFixo + salarioMaioComissao) * 0.05
console.log(`Desconto no salario de abril: ${salarioMaioDesconto}`)

let salarioJunhoDesconto = (salarioFixo + salarioJaneiroComissao) * 0.05
console.log(`Desconto no salario de junho : ${salarioJunhoDesconto}`)



let salarioJaneiroFinal = salarioFixo + salarioJaneiroComissao - salarioJaneiroDesconto
console.log (`Salario janeiro com acrescimos e descontos: ${salarioJaneiroFinal}`)

let salarioFevereiroFinal = salarioFixo + salarioFevereiroComissao - salarioFevereiroDesconto
console.log (`Salario fevereiro com acrescimos e descontos: ${salarioFevereiroFinal}`)

let salarioMarcoFinal = salarioFixo + salarioMarcoComissao - salarioMarcoDesconto
console.log (`Salario março com acrescimos e descontos: ${salarioMarcoFinal}`)

let salarioAbrilFinal = salarioFixo + salarioAbrilComissao - salarioAbrilDesconto
console.log (`Salario maio com acrescimos e descontos: ${salarioAbrilFinal}`)

let salarioMaioFinal = salarioFixo + salarioMaioComissao - salarioAbrilDesconto
console.log (`Salario abril com acrescimos e descontos: ${salarioMaioFinal}`)

let salarioJunhoFinal = salarioFixo + salarioJunhoComissao - salarioJunhoDesconto
console.log (`Salario junho com acrescimos e descontos: ${salarioJunhoFinal}`)

const mediaSalarial6meses = (salarioJaneiroFinal + salarioFevereiroFinal + salarioMarcoFinal + salarioAbrilFinal + salarioMaioFinal + salarioMaioFinal + salarioJunhoFinal) / 6
console.log(`Média do salário nos ultimos 6 mêses: ${mediaSalarial6meses}`)





