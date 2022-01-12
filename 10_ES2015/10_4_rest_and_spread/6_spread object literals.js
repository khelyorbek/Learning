const tea = {
    type: 'oolong',
    name: 'winter sprout',
    origin: 'taiwan'
};

// const arr = [ ...tea];
// will error out saying tea is not iterable

const tea2 = {...tea};

const teaTin = {...tea, price:22.99};

// const newTea = {...tea, name: 'golden frost'};
const newTea = {name:'golden frost', ...tea};

const teaData = {
    steepTime : '30s',
    brewTemp : 175
};

const fullTea = {...tea, ...teaDate};

