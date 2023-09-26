abstract class Funcionario2 {
   protected nome: string;
   protected salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    abstract calcularSalarioMensal(): number;
    
      

}


class Gerente extends Funcionario2 {

    constructor() {
        super("Henrique", 4000);
    }

    calcularSalarioMensal(): number {

        let NovoSalario = (this.salario + ((this.salario/100)*10))
        
   return NovoSalario
    }

}


class Desenvolvedor extends Funcionario2 {

    constructor() {
        super("Henrique", 2000);
    }

    calcularSalarioMensal(): number {

        return this.salario
        
    }

}



const gerente = new Gerente();
console.log("Salario do gerente: " + gerente.calcularSalarioMensal())

const desenvolvedor = new Desenvolvedor();
console.log("Salario do Desenvolvedor: "+ desenvolvedor.calcularSalarioMensal())





