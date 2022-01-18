const blue = {
    name: 'Blue',
    breed: 'Scottish Fold',
    dance: function(dance){
        console.log("This is " + this);
        console.log(`Meow, I am ${this.name} and I like to ${dance}`);
    },
    play : function(...toys) {
        for(let toy of toys) {
            console.log(`${this.name} plays with ${toy}`);
        }
    }
};

// I can create the new dance function (same as the one in the blue object) and set it to it has the same args every time
const blueDisco = blue.dance.bind(blue,'disco');
const paysWithSocks = blue.play.bind(blue,'left sock', 'right sock');

// Ex2: function takes the rate and price and returns a Sales Tax
function applySalesTax(taxRate, price) {
    return price + price * taxRate;
}

// setting the first argument as nothing
// so when you pass something into this new variable,
// the argument you pass will replace null
const applyCATax = applySalesTax.bind(null, 0.0725);
const applyTXTax = applySalesTax.bind(null, 0.0625);

// Ex 3: creating a function that collects membership fee
const bobsMembership = {
    name : 'Bob',
    total : 250
};

const jillsMembership = {
    name : 'Jill',
    total : 899
};

function collectMonthlyFee(fee) {
    const remaining = this.total - fee;
    this.total = remaining;
    return this.name + ' remaining balance:' + remaining;
}
const collectBobsFee = collectMonthlyFee.bind(bobsMembership, 5);
const collectJillsFee = collectMonthlyFee.bind(bobsMembership, 35);