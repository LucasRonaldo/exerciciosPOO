"use strict";
class ProdutoLoja {
    constructor(nomeDoProduto, precoDoProduto) {
        this.nome = nomeDoProduto;
        this.preco = precoDoProduto;
    }
}
class CarrinhoDeCompras {
    constructor() {
        this.produtosDoCarrinho = [];
    }
    adicionarProduto(produto) {
        this.produtosDoCarrinho.push(produto);
        return " Produto adicionado na loja";
    }
    excluirProduto(nomeDoProduto) {
        this.produtosDoCarrinho = this.produtosDoCarrinho.filter((item) => item.nome !== nomeDoProduto);
    }
    calcularValorProduto() {
        let soma = 0;
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            soma = soma + this.produtosDoCarrinho[i].preco;
        }
        return soma.toFixed(2);
    }
    exibirProdutos() {
        console.log("Produtos de Carrinho");
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            console.log("Produto: " + this.produtosDoCarrinho[i].nome
                + "R$" + this.produtosDoCarrinho[i].preco.toFixed(2));
        }
    }
}
class Loja {
    constructor() {
        this.produtoDoEstoque = [];
        this.carrinhoDeCompra = new CarrinhoDeCompras();
    }
    adicionarProdutoAoEstoque(produto) {
        this.produtoDoEstoque.push(produto);
    }
    removerprodutoDoEstoque(produto) {
        this.produtoDoEstoque = this.produtoDoEstoque.filter(item => item.nome !== produto.nome);
    }
    adicionarProdutoAoCarrinho(produto) {
        const produtoEncontrado = this.produtoDoEstoque.find(item => item.nome === produto.nome);
        if (produtoEncontrado) {
            this.carrinhoDeCompra.adicionarProduto(produtoEncontrado);
            return "Produto adicionado ao carrinho de compra";
        }
        else {
            return "Produto não encontrado ao estoque da loja";
        }
    }
    removerprodutoDoCarrinho(produto) {
        this.carrinhoDeCompra.excluirProduto(produto.nome);
    }
    exibirProdutosCarrinho() {
        this.carrinhoDeCompra.exibirProdutos();
    }
}
const produtoLoja1 = new ProdutoLoja("Camiseta", 29.99);
const produtoLoja2 = new ProdutoLoja("Calça", 49.99);
const produtoLoja3 = new ProdutoLoja("Sapato", 79.99);
const produtoLoja4 = new ProdutoLoja("Meia", 20.00);
const minhaLoja = new Loja();
minhaLoja.adicionarProdutoAoEstoque(produtoLoja1);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja2);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja3);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja4);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja1);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja2);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja3);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja4);
minhaLoja.removerprodutoDoCarrinho(produtoLoja2);
minhaLoja.removerprodutoDoEstoque(produtoLoja2);
minhaLoja.exibirProdutosCarrinho();
console.log("Total de carrinho de compras: R$ " + minhaLoja.carrinhoDeCompra.calcularValorProduto());
