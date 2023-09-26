"use strict";
class Animal {
    constructor(nome, qtdPatas) {
        this.nome = nome;
        this.qtdPatas = qtdPatas;
    }
    apresentar() {
        console.log("Este é um " + this.nome
            + " com " + this.qtdPatas + " patas");
    }
}
class Dog extends Animal {
    constructor() {
        super("Cachorro", 4);
    }
    fazerBarulho() {
        console.log("O Cachorro está latindo");
    }
}
class Cat extends Animal {
    constructor() {
        super("Gato", 4);
    }
    fazerBarulho() {
        console.log("O Gato está miando");
    }
}
class Passaro extends Animal {
    constructor() {
        super("Passaro", 2);
    }
    fazerBarulho() {
        console.log("O Passaro está cantando");
    }
}
const cachorro = new Dog();
cachorro.apresentar();
cachorro.apresentar();
const gato = new Cat();
gato.apresentar();
gato.apresentar();
const passaro = new Passaro();
passaro.apresentar();
passaro.apresentar();
