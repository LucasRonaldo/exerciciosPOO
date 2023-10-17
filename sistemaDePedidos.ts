enum StatusPedido {
    aguardando = "Aguardando Preparo",
    preparo = "Em Preparo",
    saiu = "Saiu para entrega",
    entregue = "Entregue",
    ClienteAusente = "Cliente não localizado"
}
class ProdutoPedido {
    nome: string;
    valor: number;

    constructor(nome: string,
        valor: number) {
        this.nome = nome;
        this.valor = valor;

    }
}
class Pedido {

    private produtos: ProdutoPedido[];

    private status: StatusPedido;

    constructor() {
        this.produtos = [];
        this.status = StatusPedido.aguardando;

    }


    adicionarProduto(produto:ProdutoPedido) {
        this.produtos.push(produto);
        return "Produto adicionado com sucesso" ;
    }
    atualizarStatus(update: StatusPedido) {

        this.status = update
       
       
        console.log("Status atualizado: "+ this.status)
 

    }

    exibirStatus(){
        return this.status
    }

    exibirProdutosDoPedido(){
        for(let index = 0; index < this.produtos.length; index++){
            console.log("Produto: " + this.produtos[index].nome + " R$ " + this.produtos[index].valor.toFixed(2));
        }
        
    }
}

const pedidos = new Pedido();
let produto01 = new ProdutoPedido("lanche",20)
let produto02 = new ProdutoPedido("pizza",20)
 
    console.log(pedidos.adicionarProduto(produto01));
    console.log(pedidos.adicionarProduto(produto02))
    console.log(pedidos.exibirStatus());
    console.log(pedidos.atualizarStatus(StatusPedido.entregue));
    console.log(pedidos.exibirProdutosDoPedido());


