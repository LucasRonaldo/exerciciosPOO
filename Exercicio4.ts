class Funcionario{
nome: string;
cargo: string;
salarioBruto: number;
INSS: number = (11/100);
IR: number = (7.5/100);

constructor(nome: string, cargo: string, salarioBruto: number ){
    this.nome = nome;
    this.cargo = cargo;
    this.salarioBruto = salarioBruto;
   

    
}

calcularImpostos(){
    let valorDoINSS = (this.INSS*this.salarioBruto);
   
    let valorDoIR = ((this.salarioBruto-valorDoINSS)* this.IR);

    let totalDeImpostos = (valorDoINSS + valorDoIR);
    return totalDeImpostos;
}

exibirINSSeIR(){
    return " O valor total de impostos sera de R$: " + this.calcularImpostos();

} 

exibirDetalhes(){
    let totalDeImpostos = this.calcularImpostos();

    let salarioLiquido = (this.salarioBruto-totalDeImpostos) 

   return "Funcionário: " + this.nome + "\n\nSalário Bruto: R$" + this.salarioBruto + "\n\nImpostos a serem pagos: R$" + totalDeImpostos + "\n\nSalário liquido de: R$" + (this.salarioBruto-totalDeImpostos) 

}
aplicarAumento(porcentagem: number){
    let novoSalario = ((porcentagem/100)*this.salarioBruto)
this.salarioBruto = (novoSalario+this.salarioBruto)
    return "Aplicando porcentual o valor será de: R$" + (+this.salarioBruto)
}






}

let salarioum = new Funcionario("Ana Silva", "Analista de sistemas", 3000);
console.log(salarioum.exibirINSSeIR());
console.log(salarioum.exibirDetalhes());

console.log(salarioum.aplicarAumento(10));
console.log(salarioum.exibirDetalhes());