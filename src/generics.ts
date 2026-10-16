//generics are also templates , generics make code reusable
function pair<A, B>(a: A, b:B):[A, B]{
    return[a, b]
}
pair("masala", 22)
pair("ginger", "lemon")

//genenric interfaces
interface Box<T>{
    content:T
}

const numberBox: Box<number> = {content: 90}
const numberBox2: Box<string> = {content: "hello"}

interface apiPromises<T>{
    status: number,
    data: T
}

const res: apiPromises<{flavor: string}> = {
    status: 200,
    data:{flavor:"masala"}
}