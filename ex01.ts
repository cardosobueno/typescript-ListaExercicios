export {}

class Pessoa {
    peso: number;
    idade: number;
    
    constructor(peso: number, idade:number)
    {
        this.peso = peso;
        this.idade = idade;
    }

    setPeso(peso: number)
    {
        this.peso = peso;
    }
    getPeso()
    {
        return this.peso;
    }
    setIdade(idade: number)
    {
        this.idade = idade;
    }
    getIdade()
    {
        return this.idade;
    }
    toString()
    {
        return `Peso: ${this.peso} kg, Idade: ${this.idade}`;
    }


}

let ids: Array<Pessoa>;
ids = [];

/*Método para facilitar a inserção de novas pessoas no Array, 
pois decidi não utilizar readLine no cosole por tornar o código muito mais extenso e complicado
comparado a JAVA, PYTHON, C#*/
function addPessoas(peso: number , idade: number)
{
  ids.push(new Pessoa(peso, idade));
}

//addPessoas(peso,idade);
addPessoas(100,45);
addPessoas(71,20);
addPessoas(55,21);
addPessoas(86,84);

let soma = 0;
let media = 0;
let acimaDeNoventa = 0;
console.log('\nEste programa recebe '+ ids.length + " pessoas, onde setamos o peso e idade: \n" );
for (let i = 0; i < ids.length; i++) {
  console.log("Pessoa " + (i+1))
  console.log(ids[i].toString() + "\n");
  soma += ids[i].getIdade();
  acimaDeNoventa = (ids[i].getPeso() > 90 ? acimaDeNoventa + 1 : acimaDeNoventa);
}
media = soma/ids.length

console.log("A média aritmetica da idade das pessoas é: " + media);
console.log("A quantidade de pessoas acima de 90 quilos é: " + acimaDeNoventa);


      

  






 