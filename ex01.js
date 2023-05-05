"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(peso, idade) {
        this.peso = peso;
        this.idade = idade;
    }
    Pessoa.prototype.setPeso = function (peso) {
        this.peso = peso;
    };
    Pessoa.prototype.getPeso = function () {
        return this.peso;
    };
    Pessoa.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa.prototype.toString = function () {
        return "Peso: ".concat(this.peso, " kg, Idade: ").concat(this.idade);
    };
    return Pessoa;
}());
var ids;
ids = [];
/*Método para facilitar a inserção de novas pessoas no Array,
pois decidi não utilizar readLine no cosole por tornar o código muito mais extenso e complicado
comparado a JAVA, PYTHON, C#*/
function addPessoas(peso, idade) {
    ids.push(new Pessoa(peso, idade));
}
//addPessoas(peso,idade);
addPessoas(100, 45);
addPessoas(71, 20);
addPessoas(55, 21);
addPessoas(86, 84);
var soma = 0;
var media = 0;
var acimaDeNoventa = 0;
console.log('\nEste programa recebe ' + ids.length + " pessoas, onde setamos o peso e idade: \n");
for (var i = 0; i < ids.length; i++) {
    console.log("Pessoa " + (i + 1));
    console.log(ids[i].toString() + "\n");
    soma += ids[i].getIdade();
    acimaDeNoventa = (ids[i].getPeso() > 90 ? acimaDeNoventa + 1 : acimaDeNoventa);
}
media = soma / ids.length;
console.log("A média aritmetica da idade das pessoas é: " + media);
console.log("A quantidade de pessoas acima de 90 quilos é: " + acimaDeNoventa);
