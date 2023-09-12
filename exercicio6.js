"use strict";
class ProdutoLoja {
    constructor(nomeProduto, precoProduto) {
        this.nomeProduto = nomeProduto;
        this.precoProduto = precoProduto;
    }
}
class CarrinhoDeCompra {
    constructor() {
        this.produtos = [];
    }
    adicionarAoCarrinho(produto) {
        this.produtos.push(produto);
    }
    exibirCarrinho() {
        if (this.produtos.length > 0) {
            for (let i = 0; i < this.produtos.length; i++) {
                console.log("Produto: " + this.produtos[i].nomeProduto + ' de R$:'
                    + this.produtos[i].precoProduto + ",00 adicionado com sucesso ao carrinho");
            }
        }
        else {
            return "nenhum produto adicionado ao carrinho";
        }
    }
    removerDoCarrinho(produtos) {
        this.produtos = this.produtos.filter((item) => item.nomeProduto !== produtos.nomeProduto);
        return "evento deletado";
    }
    somaDosProdutos() {
        let soma = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            soma = this.produtos[i].precoProduto + soma;
        }
        return soma.toFixed(2);
    }
}
class Loja {
    constructor() {
        this.estoque = [];
        this.carrinho = new CarrinhoDeCompra;
    }
    adicionarProdutoNaLoja(estoque) {
        this.estoque.push(estoque);
        return " Produto adicionado na loja";
    }
    removerProdutoEstoque(produto) {
        this.estoque = this.estoque.filter((item) => item.nomeProduto !== produto.nomeProduto);
        return "Produto deletado";
    }
    exibirEstoque() {
        if (this.estoque.length > 0) {
            for (let i = 0; i < this.estoque.length; i++) {
                console.log("Produto: " + this.estoque[i].nomeProduto);
            }
        }
        else {
            console.log("nenhum produto adicionado ao carrinho");
        }
    }
    AdicionarProdutosCarrinho(estoque, produto) {
        const produtoEncontrado = this.estoque.find(item => item.nomeProduto == produto.nomeProduto);
        if (produtoEncontrado) {
            this.carrinho.adicionarAoCarrinho(produto);
            return "Produto adicionado ao carrinho de compras";
        }
        else {
            return "Produto não encontrado no estoque";
        }
    }
}
const carrinho = new CarrinhoDeCompra();
const estoque = new Loja();
const produtoLoja1 = new ProdutoLoja("Tenis", 15);
const produtoLoja2 = new ProdutoLoja("matinho", 15);
const produtoLoja3 = new ProdutoLoja("sapato", 1000);
const produtoLoja4 = new ProdutoLoja("notebook", 1000);
console.log(carrinho.exibirCarrinho());
console.log("");
carrinho.adicionarAoCarrinho(produtoLoja1);
carrinho.adicionarAoCarrinho(produtoLoja2);
carrinho.adicionarAoCarrinho(produtoLoja3);
carrinho.adicionarAoCarrinho(produtoLoja4);
console.log(estoque.adicionarProdutoNaLoja(produtoLoja1));
console.log(estoque.adicionarProdutoNaLoja(produtoLoja2));
console.log(estoque.adicionarProdutoNaLoja(produtoLoja3));
console.log(estoque.adicionarProdutoNaLoja(produtoLoja4));
console.log(carrinho.exibirCarrinho());
const produto9 = new ProdutoLoja("sapato", 1000);
console.log(estoque.exibirEstoque());
console.log(carrinho.somaDosProdutos());
console.log(estoque.removerProdutoEstoque(produtoLoja1));
console.log(carrinho.somaDosProdutos());
console.log(estoque.exibirEstoque());
