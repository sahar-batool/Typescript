let numericLength: number = (response as string).length;

type Book = {
    name: string;
}

let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject)


//in this case we tell that this "input" id is Htmlinputelement
const inputElement = document.getElementById("input") as HTMLInputElement;

let value : any;

value = "chai";
value = [1,2,3];
value.toUpperCase()



let newValue : unknown;

newValue = "chai";
newValue = [1,2,3];

if (typeof newValue === "string"){
    newValue.toUpperCase()
}

try {
    
} catch (error) {
    if (error instanceof Error){
        console.log(error.message)
    }
    console.log("Error", error)
    
}
//here using any 
let data1: any = "chai aur typescript" 
const strData1: string = data1


//here unknown we forecfully tell as string ,as number
let data: unknown = "chai aur typescript" 
const strData: string = data as string


type Role = "user" | "admin" | "superadmin"

function redirectBasedOnRole(role:Role): void {
    if(role === "admin"){
        console.log("redirect to admin dashboard");
        return
    }
    if(role === "user"){
        console.log("redirect to user dashboard");
        return
    }
    role
}