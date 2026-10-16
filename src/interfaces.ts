interface Chai {
    flavour: string;
    price: number;
    milk?: boolean
}

const masala: Chai{
    flavour: "masala";
    price: 43
}

interface discountCalculator {
    (price:number):number
}

const applu50: discountCalculator = (p) => p *0.5

interface teaMachine{
    start(): void;
    stop(): void
}

const machine: teaMachine = {
    start(){
        console.log("start");
        
    }
    stop(){
        console.log("stop");
        
    }
}

//index signature
interface chaiRading {
    [flavor: string]: number
}

const ratings: chaiRading = {
    masala: 4,
    ginger: 5
}

 //we can extends interfaces
 interface A {a: string}
 interface B {b: string}

 interface C extends A, B {.}