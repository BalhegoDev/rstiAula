class Vehicle{
    constructor(type,rodinhas,passageiros){
        this.type = type;
        this.rodinhas = rodinhas;
        this.passageiros = passageiros;
    }

    dirigir(gasol){
        setInterval(() => {
            if(gasol >= 0) console.log(gasol, "\n");
            gasol -=10;
            if(gasol < 0) clearInterval()
        },1000)
    }
}

const carrinho = new Vehicle("carrinho",4,5);
carrinho.dirigir(100);