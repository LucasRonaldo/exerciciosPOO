"use strict";
class ContaBancaria {
    constructor(numeroConta, saldoInicial, titular) {
        this.numeroConta = numeroConta;
        this.saldoInicial = saldoInicial;
        this.titular = titular;
    }
}
class ContaCorrente extends ContaBancaria {
    constructor() {
        super("um", 4000, "Lucas");
        this.limiteChequeEspecial = 0;
    }
    chequeEspecial(limiteChequeEspecial) {
        this.limiteChequeEspecial = limiteChequeEspecial;
        console.log("voçê possui R$" + this.limiteChequeEspecial + " de limite no cheque especial");
    }
    depositar(valor) {
        let saldoTotal = this.limiteChequeEspecial + this.saldoInicial;
        saldoTotal = this.saldoInicial + valor;
        console.log("Usuario: " + this.titular + " fez um deposito de " + valor + ",00. Saldo atual é de : R$ " + saldoTotal + ",00\n  OBS: " +
            "Cheque Especial: R$: " + this.limiteChequeEspecial + "& Saldo: " + this.saldoInicial);
    }
    sacar(valor) {
        let saldoTotal = this.saldoInicial + this.limiteChequeEspecial;
        if (saldoTotal < valor) {
            console.log("Saldo indisponivel para saque");
        }
        else {
            saldoTotal = saldoTotal - valor;
            console.log("Saque de RS:" + valor + ",00 realizado com sucesso. Saldo atual é de : R$ " + (saldoTotal));
        }
    }
    consultaSaldo() {
        let saldoTotal = this.saldoInicial + this.limiteChequeEspecial;
        return saldoTotal;
    }
}
const contaCorrente = new ContaCorrente();
console.log(contaCorrente.consultaSaldo());
console.log(contaCorrente.chequeEspecial(1000));
console.log(contaCorrente.consultaSaldo());
console.log(contaCorrente.sacar(1000));
console.log(contaCorrente.depositar(500));
