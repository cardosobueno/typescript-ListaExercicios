/*Fazer um algoritmo para ajudar uma bilheteria
Você deve instanciar um tipo de bilhete e calcular o troco e quantos bilhetes são possiveis comprar 
com o que sobrou.
Valor dos bilhetes: unitario = 1, plus = 2.60, premium = 12*/
export { }



enum TipoBilhete {

    unitario = "UNITARIO",
    plus = "PLUS",
    premium= "PREMIUM"

}

class Bilhete {

    tipoBilhete: TipoBilhete;
    valorBilhete: number;

    constructor(tipoBilhete: TipoBilhete) {
        this.tipoBilhete = tipoBilhete;
    }

    //Metodo que calcula troco.
    /* 
        1 - Checa o tipo do bilhete
        2 - Verifica se o valor recebido é maior que o preço do bilhete
        3 - Caso positivo, calcula troco   
        4 - Depois, divide o valor recebido pelo preço do bilhete para que possa encontrar o numero
        de bilhetes que ainda dá pra comprar com o troco
        
    */
    public calculaTroco(valor: number) {
       
        console.log("----------------------------------------");
        //UNITARIO
        switch (this.tipoBilhete) {
            case TipoBilhete.unitario:
                this.valorBilhete = 1;
                if (valor < this.valorBilhete) {
                    console.log("Você não tem dinheiro suficiente.");
                } else {
                    let troco = valor - this.valorBilhete;
                    console.log("Você comprou um bilhete "+ this.tipoBilhete + "\nSeu troco: R$" + troco.toFixed(2));

                    let sobrouValor = valor / this.valorBilhete;

                    if (sobrouValor <= 1) {
                        console.log("Você não consegue comprar mais bilhetes unitarios com o troco recebido.");
                      
                    } else {
                        console.log("Com o valor do troco, ainda é possivel comprar "+Math.floor((sobrouValor - 1))+" bilhete(s) unitario(s)");
                    }


                }
                break;
            //PLUS
            case TipoBilhete.plus:
                this.valorBilhete = 2.60;
                if (valor < this.valorBilhete) {
                    console.log("Você não tem dinheiro suficiente.");
                } else {
                    let troco = valor - this.valorBilhete;
                    console.log("Você comprou um bilhete "+ this.tipoBilhete + "\nSeu troco: R$" + troco.toFixed(2));
                    let sobrouValor = valor / this.valorBilhete;

                    if (sobrouValor <= 1) {
                        console.log("Você não consegue comprar mais bilhetes PLUS com o troco recebido.");
                        
                    } else {
                        console.log("Com o valor do troco, ainda é possivel comprar "+Math.floor((sobrouValor - 1))+" bilhete(s) PLUS");
                    }

                }
                break;
            //PREMIUM
            case TipoBilhete.premium:
                this.valorBilhete = 12.00;
                if (valor < this.valorBilhete) {
                    console.log("Você não tem dinheiro suficiente.");
                } else {
                    let troco = valor - this.valorBilhete;
                    console.log("Você comprou um bilhete "+ this.tipoBilhete + "\nSeu troco: R$" + troco.toFixed(2));
                    let sobrouValor = valor / this.valorBilhete;

                    if (sobrouValor < 1) {
                        console.log("Você não consegue comprar mais bilhetes Premium com o troco recebido.");
                        
                    } else {
                        console.log("Com o valor do troco, ainda é possivel comprar "+Math.floor((sobrouValor - 1))+" bilhete(s) Premium");
                    }

                }
                break;

        }
        console.log("----------------------------------------");



    }



}

//Instancie aqui um tipo de bilhete. Valores TipoBilhete. = unitario, plus, premium
const bilhetePremium = new Bilhete(TipoBilhete.premium);
const bilheteUnitario = new Bilhete(TipoBilhete.unitario);


//Chame o método calculaTroco para cada bilhete. Insira o valor no método e veja o calculo
bilhetePremium.calculaTroco(59);
bilheteUnitario.calculaTroco(1);
