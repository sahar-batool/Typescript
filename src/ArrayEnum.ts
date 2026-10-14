// two ways to declare arrays
const chaiFlavorus: string[] = ["Adrk", "Ginger", "masala"]
const chaiRating: number[] = [12, 34, 5]

const Price: Array<number> = [40, 80, 50]
const chaiTypes: Array<string> = ["masalaChai", "gingerChai"]


//Array of objects
type Chai = {
    name: string;
    price: number;
}

const menu: Chai[] = [
    {name: "coffee", price: 100}
]


// read only array in which we can defined but cant redeclared
const cities: readonly string[] = ["karachi", "lahore"] // here if we try to push this will show error

//tuples
let chaiTuples:  [string, number]
chaiTuples = ["masala", 3]