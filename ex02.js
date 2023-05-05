"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(peso, idade, altura) {
        this.peso = peso;
        this.idade = idade;
        this.altura = altura;
    }
    Pessoa.prototype.getPeso = function () {
        return this.peso;
    };
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa.prototype.getAltura = function () {
        return this.altura;
    };
    Pessoa.prototype.toString = function () {
        return "Peso: ".concat(this.peso, " kg, Idade: ").concat(this.idade, ", Altura: ").concat(this.altura);
    };
    return Pessoa;
}());
var ids;
ids = [];
/*Método para facilitar a inserção de novas pessoas no Array,
pois decidi não utilizar readLine no cosole por tornar o código muito mais extenso e complicado
comparado a JAVA, PYTHON, C#*/
function addPessoas(peso, idade, altura) {
    ids.push(new Pessoa(peso, idade, altura));
}
//addPessoas(peso,idade, altura);
addPessoas(100, 45, 1.90);
addPessoas(71, 20, 1.80);
addPessoas(55, 21, 1.65);
addPessoas(86, 84, 1.67);
addPessoas(43, 13, 1.60);
addPessoas(63, 52, 1.73);
addPessoas(90, 50, 1.63);
addPessoas(110, 50, 1.85);
var soma = 0;
var media = 0;
var acimaDeNoventa = 0;
var abaixoUmSetenta = 0;
var qtdJovens = 0;
var qtdJovensAcimaUmSetenta = 0;
var porcentagemJovensAcimaUmSetenta = 0;
console.log('\nEste programa recebe ' + ids.length + " pessoas, onde setamos o peso, idade e altura: \n");
for (var i = 0; i < ids.length; i++) {
    console.log("Pessoa " + (i + 1));
    console.log(ids[i].toString() + "\n");
    soma += ids[i].getIdade();
    acimaDeNoventa = (ids[i].getPeso() > 90 ? acimaDeNoventa + 1 : acimaDeNoventa);
    abaixoUmSetenta = (ids[i].getAltura() < 1.70 ? abaixoUmSetenta + 1 : abaixoUmSetenta);
    if (ids[i].getIdade() >= 15 && ids[i].getIdade() < 30) {
        qtdJovens += 1;
        if (ids[i].getAltura() > 1.70) {
            qtdJovensAcimaUmSetenta += 1;
        }
    }
}
porcentagemJovensAcimaUmSetenta = (qtdJovensAcimaUmSetenta / qtdJovens) * 100;
media = soma / ids.length;
console.log("A média aritmetica da idade das pessoas é: " + media);
console.log("A quantidade de pessoas jovens (entre 15-29 anos) é " + qtdJovens);
console.log("A porcentagem de pessoas jovens (entre 15-29 anos) com mais de 1,70m de altura é: " + porcentagemJovensAcimaUmSetenta + "%");
console.log("A quantidade de pessoas com menos de 1,70m de altura é: " + abaixoUmSetenta);
console.log("A quantidade de pessoas acima de 90 quilos é: " + acimaDeNoventa);
