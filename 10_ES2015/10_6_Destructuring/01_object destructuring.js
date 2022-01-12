const teaOrder = {
    username: 'smith',
    id: 12345,
    password: 'fiddlesticks',
    firstName: 'Angela',
    lastName: 'Smith',
    age: 'guess',
    isLegit: undefined
  };

// Takes a long time to do this
// const price = teaOrder.price;
// const quantity = teaOrder.quantity;
// const teaName = teaOrder.teaName;

// Object destructuring can help
// Items inside {} are key names
// last word should be the name of the object that the destructurization should look inside
const {price,quantity,teaName} = teaOrder;

