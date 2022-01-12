
// OLD WAY OF DOING IT
// function makePerson(first, last, age) {
//     return {
//         first : first,
//         last : last,
//         age : age,
//         isAlive : true
//     }
// }

// NEW WAY
// JS will know that you are trying to create a new key with the parameters that i passsed
// NOT SUPPORTED IN IE11 :|
function makePerson(first, last, age) {
    return {
        first, last, age,
        isAlive : true
    }
}