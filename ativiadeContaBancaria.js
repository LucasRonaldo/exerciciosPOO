"use strict";
class ContaBancaria {
    constructor(numeroConta, saldoInicial, titular) {
        this.numeroConta = numeroConta;
        this.saldoInicial = saldoInicial;
        this.titular = titular;
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldoInicial += valor;
            console.log("Depósito de R$$" + valor + "realizado com sucesso.");
        }
        else {
            console.log("O valor do depósito deve ser maior que zero.");
        }
    }
    sacar(valor) {
        if (valor > 0 && this.saldoInicial >= valor) {
            this.saldoInicial -= valor;
            console.log("Saque de R$$" + valor + "realizado com sucesso.");
        }
        else {
            console.log("Saldo insuficiente ou valor de saque inválido.");
        }
    }
    consultarSaldo() {
        return this.saldoInicial;
    }
}
class ContaCorrente extends ContaBancaria {
    constructor(numeroConta, saldoInicial, titular, limiteChequeEspecial) {
        super(numeroConta, saldoInicial, titular);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    sacar(valor) {
        if (valor > 0 && (this.saldoInicial + this.limiteChequeEspecial) >= valor) {
            this.saldoInicial -= valor;
            console.log("Saque de R$$" + valor + " realizado com sucesso.");
        }
        else {
            console.log("Saldo insuficiente ou valor de saque inválido.");
        }
    }
}
class ContaPoupanca extends ContaBancaria {
    calcularRendimentoAnual(taxa) {
        const rendimentoAnual = this.saldoInicial * (taxa / 100);
        return rendimentoAnual;
    }
}
class ContaInvestimento extends ContaBancaria {
    investir(valor, prazoMeses, taxaJuros) {
        if (valor > 0 && prazoMeses > 0 && taxaJuros > 0) {
            const rendimento = (valor * taxaJuros * prazoMeses) / 12 / 100;
            this.saldoInicial += rendimento;
            console.log("Investimento de R$$" + valor + "realizado com sucesso.");
        }
        else {
            console.log("Valores de investimento, prazo ou taxa de juros inválidos.");
        }
    }
}
const contaCorrente = new ContaCorrente("12345-6", 1000, "João", 500);
contaCorrente.depositar(500);
contaCorrente.sacar(1200);
console.log("Saldo da Conta Corrente: R$$" + contaCorrente.consultarSaldo());
const contaPoupanca = new ContaPoupanca("98765-4", 5000, "Maria");
console.log("Rendimento Anual da Conta Poupança: R$$" + contaPoupanca.calcularRendimentoAnual(3));
const contaInvestimento = new ContaInvestimento("54321-0", 20000, "Carlos");
contaInvestimento.investir(10000, 12, 5);
console.log("Saldo da Conta de Investimento: R$$" + contaInvestimento.consultarSaldo());
