"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["aguardando"] = "Aguardando Preparo";
    StatusPedido["preparo"] = "Em Preparo";
    StatusPedido["saiu"] = "Saiu para entrega";
    StatusPedido["entregue"] = "Entregue";
    StatusPedido["ClienteAusente"] = "Cliente n\u00E3o localizado";
})(StatusPedido || (StatusPedido = {}));
class ProdutoPedido {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido {
    constructor() {
        this.produtos = [];
        this.status = StatusPedido.aguardando;
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
        return "Produto adicionado com sucesso";
    }
    atualizarStatus(update) {
        this.status = update;
        console.log("Status atualizado: " + this.status);
    }
    exibirStatus() {
        return this.status;
    }
    exibirProdutosDoPedido() {
        for (let index = 0; index < this.produtos.length; index++) {
            console.log("Produto: " + this.produtos[index].nome + " R$ " + this.produtos[index].valor.toFixed(2));
        }
    }
}
const pedidos = new Pedido();
let produto01 = new ProdutoPedido("lanche", 20);
let produto02 = new ProdutoPedido("pizza", 20);
console.log(pedidos.adicionarProduto(produto01));
console.log(pedidos.adicionarProduto(produto02));
console.log(pedidos.exibirStatus());
console.log(pedidos.atualizarStatus(StatusPedido.entregue));
console.log(pedidos.exibirProdutosDoPedido());
