"use strict";
class Cachorro {
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    apresentar() {
        return "oi, eu sou " + this.nome + "um " + this.raca + "de " + this.idade + " anos";
    }
    apresentarPara(Humano) {
        return "ola" + Humano + ", meu nome é " + this.nome + " sou um " + this.raca + " de " + this.idade + " anos";
    }
}
let lucas = new Cachorro("Lucas", "rex", 16);
let rex = new Cachorro("Rex ", "labrador ", 3);
let thor = new Cachorro("Thor ", "bullfog ", 2);
console.log(rex.nome);
console.log(thor.nome);
console.log(lucas.nome);
console.log(rex.apresentar());
console.log(thor.apresentar());
console.log(lucas.apresentarPara("felipe"));
