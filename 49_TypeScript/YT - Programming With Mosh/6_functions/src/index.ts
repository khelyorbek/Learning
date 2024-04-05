function calculateTax(income: number): number {
    return income * 0.2;
}

function sum(num1: number, num2: number, num3:number = 0) {
    return num1 + num2 + num3;
}

console.log(sum(1,2));
console.log(sum(1,2,3));