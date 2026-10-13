//object declration in typescript
let Tea: {
    name:string;
    price:number;
    isHot:boolean
}

Tea = {
    name : "masala chai",
    price: 50,
    isHot: true
}

type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabic"}
const chaiBrew:Brew = coffee


type Chai = {
    name: string;
    price:number;
    isHot:boolean
}

const updateChai = (updates:Partial<Chai>)=> {
    console.log("update chai with ", updates);
    
}

updateChai({price:40})
updateChai({isHot: false})



type ChaiOrder = {
    name?: string;
    quantity?: number
}

const orderChai = (order:Required<ChaiOrder>)=> {
    console.log(order);
    
}

orderChai({
    name: "ginger",
    quantity: 2
})