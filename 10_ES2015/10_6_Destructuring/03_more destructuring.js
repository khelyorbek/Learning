const teaOrder = {
    username: 'smith',
    id: 12345,
    password: 'fiddlesticks',
    firstName: 'Angela',
    lastName: 'Smith',
    age: 'guess',
    isLegit: undefined,
    brewTemp = 180,
    teaName: 'winter sprout'
  };

// brewTemp does not exist
// can give a default value of 175
const {brewTemp = 175} = teaOrder;

function checkout(tea) {
    const {quantity,price} = tea;
    return quantity * price;
}

checkout(teaOrder);