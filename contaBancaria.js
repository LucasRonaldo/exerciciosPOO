"use strict";
class MinhaConta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    consultarSaldo() {
        return "Usuario: " + this.titular + " possui R$:" + this.saldo + ",00 de saldo";
    }
    fazerDeposito(deposito) {
        this.saldo = this.saldo + deposito;
        return "Usuario: " + this.titular + " fez um deposito de " + deposito + ",00. Saldo atual é de : R$ " + this.saldo + ",00 ";
    }
    realizarSaque(saque) {
        if (this.saldo < saque) {
            return "Saldo indisponivel para saque";
        }
        else {
            this.saldo = this.saldo - saque;
            return "Saque de RS:" + saque + ",00 realizado com sucesso. Saldo atual é de : R$ " + (this.saldo);
        }
    }
}
let Conta1 = new MinhaConta("joão", 1000);
console.log(Conta1.consultarSaldo());
console.log(Conta1.fazerDeposito(200));
console.log(Conta1.realizarSaque(200));
console.log(Conta1.realizarSaque(1500));
console.log(Conta1.consultarSaldo());
let Conta2 = new MinhaConta("Rafael", 3000);
console.log(Conta2.consultarSaldo());
console.log(Conta2.fazerDeposito(200));
console.log(Conta2.realizarSaque(200));
console.log(Conta2.realizarSaque(1500));
console.log(Conta2.consultarSaldo());
let Conta3 = new MinhaConta("Lucas", 5000);
console.log(Conta3.consultarSaldo());
console.log(Conta3.fazerDeposito(200));
console.log(Conta3.realizarSaque(200));
console.log(Conta3.realizarSaque(1500));
console.log(Conta3.consultarSaldo());
