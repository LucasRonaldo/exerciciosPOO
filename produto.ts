class Produto {
    nome: string;
    valor: number;


    constructor(nome: string, valor: number,) {
        this.nome = nome;
        this.valor = valor;



    }

    exibirProduto() {


        return console.log("Produto: " + this.nome + " , " + " Preço: R$" + this.valor + ",00");



    }

    exibirDesconto(Desconto: number) {

        console.log("Desconto de " + Desconto + "%" + " aplicado " + "ao  " + this.nome + ". " + "Preço: R$" + (this.valor - ((Desconto / 100) * this.valor)) + ",00");
    }
}

let produto1 = new Produto("Air Force", 350,);
let produto2 = new Produto("Air Jordan", 670,);
let produto3 = new Produto(" Air max", 400,);


console.log(produto1.exibirProduto());
console.log(produto2.exibirProduto());
console.log(produto3.exibirProduto());

console.log(produto1.exibirDesconto(10));
console.log(produto2.exibirDesconto(10));
console.log(produto3.exibirDesconto(10));

