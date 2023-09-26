"use strict";
class Funcionario2 {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
}
class Gerente extends Funcionario2 {
    constructor() {
        super("Henrique", 4000);
    }
    calcularSalarioMensal() {
        let NovoSalario = (this.salario + ((this.salario / 100) * 10));
        return NovoSalario;
    }
}
class Desenvolvedor extends Funcionario2 {
    constructor() {
        super("Henrique", 2000);
    }
    calcularSalarioMensal() {
        return this.salario;
    }
}
const gerente = new Gerente();
console.log("Salario do gerente: " + gerente.calcularSalarioMensal());
const desenvolvedor = new Desenvolvedor();
console.log("Salario do Desenvolvedor: " + desenvolvedor.calcularSalarioMensal());
