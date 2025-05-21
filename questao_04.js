class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }
    nomeCompleto() {
        return this.primeiroNome + " " + this.segundoNome;
    }
    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }
    situacao() {
        let media = this.media();
        if (media > 6) {
            return "Aprovado";
        } else { 
            return "Reprovado"; 
        }
    }
}

let alunos = [
    new Aluno("João", "Silva", 7, 8.5),
    new Aluno("Suelen", "Oliveira", 2, 1),
    new Aluno("Wesley", "ALmeida", 9, 5),
    new Aluno("Eduardo", "Santos", 6.5, 7),
    new Aluno("Giovanna", "Karolline", 10, 9.9)
];
for (let i = 0; i < 5; i++) {
    alert("Nome completo: "+ alunos[i].nomeCompleto() + "Média" + alunos[i].media() + "Situação: " + alunos[i].situacao() )
}

