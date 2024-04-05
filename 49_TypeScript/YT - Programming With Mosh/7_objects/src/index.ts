// let employee = { id: 1 };
// employee.name = "Ely";

let employee: {
    // here we can specify properties that this object should have and the data types for these properties
    readonly id: number,
    name: string,
    // adding a method/func inside the object
    // and turning it into nothing
    retire: (date: Date) => void
} = {
        // And here we will specify the values for these properties 
        id: 1, 
        name: "Ely",
        // passing the date into the retire method and then
        retire: (date: Date) => { console.log(date) }
    }

