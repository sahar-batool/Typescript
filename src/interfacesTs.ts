type ChaiOrder = {
    type: "string";
    sugar: "number";
    strong: "boolean";
}

function makeChai(order: ChaiOrder) {
    console.log(order);
    
}

function orderChai(order: ChaiOrder){
    console.log(order);
    
}


type teaRecipe = {
    water: number;
    milk: number
}

class MasalaChai implements teaRecipe{
    water = 100;
    milk = 50
}

interface CupSize {
    size: "small" | "large"
}

class Chai implements CupSize{
    size: "small" | "large" = "large"
}


type baseChai = {teaLeaves: number}
type Extra = {masala: number}

type masalaChai = baseChai & Extra

const cup: masalaChai{
    teaLeaves: 2,
    masala: 1
}