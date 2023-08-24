class Pessoa {
    nome: string;
    idade: number;
    comidas: string[];

    constructor(nome: string, idade: number, comidas: string[]) {
        this.nome = nome;
        this.idade = idade;
        this.comidas = comidas;


    }
    cumprimentar() {

        let msgHabilitação = " e já posso tirar meu CNH";
        if (this.idade < 18) {
            msgHabilitação = " e não posso tirar meu CNH";
        }
        return "Olá meu nome é " + this.nome + " e tenho " + this.idade + " anos " + msgHabilitação + ".";
    }

    comidasFavoritas(){
        console.log("Minha(s) comidas(s) favorita(s)");
        for(let i =0; i < this.comidas.length; i++){
            console.log(this.comidas[i]);
        }
    }

   




}

let pessoa1 = new Pessoa("Lucas", 18, ["Doguinho", "Macarrâo"]);

console.log(pessoa1.cumprimentar());

console.log(pessoa1.comidasFavoritas());