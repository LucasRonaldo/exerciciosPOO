"use strict";
class Evento {
    constructor(nome, data, horas) {
        this.nome = nome;
        this.data = data;
        this.horas = horas;
    }
}
class Agenda {
    constructor() {
        this.eventos = [];
    }
    adicionarEvento(evento) {
        this.eventos.push(evento);
    }
    vizualizar() {
        if (this.eventos.length > 0) {
            for (let i = 0; i < this.eventos.length; i++) {
                console.log("Evento: " + this.eventos[i].nome + '\nEstá marcado no dia: '
                    + this.eventos[i].data + " as " + this.eventos[i].horas + "horas");
            }
        }
        else {
            return "Nenhum evento marcado";
        }
    }
    removerEvento(eventos) {
        this.eventos = this.eventos.filter((item) => item.nome !== eventos.nome);
        return "evento deletado";
    }
}
const evento1 = new Evento("churrasco", "22/09", "22");
const evento2 = new Evento("FESTA DO JAO", "22/09", "22");
const minhaAgenda = new Agenda();
minhaAgenda.adicionarEvento(evento1);
minhaAgenda.adicionarEvento(evento2);
console.log(minhaAgenda.vizualizar());
console.log(minhaAgenda.removerEvento(evento1));
console.log(minhaAgenda.vizualizar());
