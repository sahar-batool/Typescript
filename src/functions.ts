function makeChai(type: string, cups: number){
    console.log(`making ${cups} cups of ${type}`);
    
}
makeChai("masala", 2)

function getChaiPrice():number{
    return 23
}


function makeOrder(order:string){
   if(!order) return null
   return order
}

function createChai(order:{
    type: string;
    sugar: number;
    size: "small" | "large"
}): number{
    return 2
  
}

