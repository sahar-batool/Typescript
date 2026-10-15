class Chai {
    flavour: string;
    price: number

    constructor(flavour:string, price: number){
      this.flavour = flavour
      console.log(this);
      
    }
}



//example of classes
class Person {
    public name: string
    private age: number
    readonly id: number

    constructor(name: string, age: number, id: number){
    this.name = name;
    this.age = age;
    this.id = id
    }

}

const p = new Person("ali", 23, 12)
p.name //ok
//p.id = 2  not ok it shows id is readonly


const masalaChai = new Chai("ginger", 20)
masalaChai.flavour = "masala"



class Tea {
    public flavour: string = "masala"

    private secretIngredients = "ceremon"

    reveal(){
        return this.secretIngredients
    }

    
}


class Shop {
    protected shopName = "chai corner"
}

class Branch extends Shop{
    getName(){
        return this.shopName
    }
}
new Branch().getName

// private type
class Walet{
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new Walet()
