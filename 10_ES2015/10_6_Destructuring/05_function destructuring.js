const order2 = {
    variety : 'green',
    teaName : 'silver needle',
    original : 'taiwan',
    price : 12.99,
    hasCaffeine : true,
    quantity : 4
};

// we could do it this way and destructure insideo of the function like we did before
// function getTotal(tea) {
//     const {quantity,price} = tea;
//     return quantity * price;
// }

// But we can also destructure right inside the parameter ()
function getTotal({quantity : qty = 1, price}) {
    return quantity * price;
}