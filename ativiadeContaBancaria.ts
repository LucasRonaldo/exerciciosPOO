abstract class ContaBancaria{
    protected numeroConta: string;
    protected saldoInicial: number;
    protected titular: string;


    constructor(numeroConta: string, saldoInicial: number, titular: string){
this.numeroConta = numeroConta;
this.saldoInicial = saldoInicial;
this.titular = titular;
    }



     abstract depositar(valor:number): void;

    

     abstract sacar(valor:number): void;

    
     abstract consultaSaldo(): number;
}



class ContaCorrente extends ContaBancaria{

    protected  limiteChequeEspecial: number = 0 ;

    constructor(){
        super("um",4000,"Lucas");
    }


    chequeEspecial(limiteChequeEspecial:number): void {
    
        this.limiteChequeEspecial = limiteChequeEspecial

        console.log("voçê possui R$" + this.limiteChequeEspecial  + " de limite no cheque especial")
    }

    depositar(valor: number): void {
        let saldoTotal = this.limiteChequeEspecial + this.saldoInicial;

        saldoTotal = this.saldoInicial + valor

        console.log("Usuario: " + this.titular + " fez um deposito de " + valor + ",00. Saldo atual é de : R$ " + saldoTotal+ ",00\n  OBS: " +
        "Cheque Especial: R$: "+this.limiteChequeEspecial+"& Saldo: " + this.saldoInicial
   ) }

    sacar(valor: number): void {
        let saldoTotal = this.saldoInicial + this.limiteChequeEspecial

        if (saldoTotal < valor) {

            console.log( "Saldo indisponivel para saque")
        }
        else {
            saldoTotal = saldoTotal - valor
            console.log( "Saque de RS:" + valor + ",00 realizado com sucesso. Saldo atual é de : R$ " + (saldoTotal));
        }
    }

    consultaSaldo(): number {
        let saldoTotal = this.saldoInicial + this.limiteChequeEspecial
        return  saldoTotal;
    }
}



const contaCorrente = new ContaCorrente();

console.log(contaCorrente.consultaSaldo())
console.log(contaCorrente.chequeEspecial(1000))
console.log(contaCorrente.consultaSaldo())
console.log(contaCorrente.sacar(1000))
console.log(contaCorrente.depositar(500))






