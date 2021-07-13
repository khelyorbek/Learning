function toggleAllTodos() {
    const todos = document.querySelectorAll('li');

    for(let li of todos) {
        li.classList.toggle('completed');
    }
}

// finding a parent of the new li and then assigning to the variable
const uList = document.querySelector('ul');

// create a new empty li
const newTodo = document.createElement('li');
newTodo.classList.toggle('todo');

// appending the new empty li to the end of the parent
uList.append(newTodo);

// creating an empty bold tag
const boldText = document.createElement('b');

// typing in the text inside of the <b> </b>
boldText.textContent = "DON'T FORGET TO LOCK THE COOP!";

// appending the <b> </b> inside of the newly created <li> </li>
newTodo.append(boldText);

//////////////////////////////////////////////

const secondTodo = document.createElement('li');
secondTodo.textContent = "Buy the chickens";
secondTodo.classList.toggle('todo');

uList.prepend(secondTodo);

///////////////////////////////////////////////

const newImg = document.createElement('img');
newImg.setAttribute('src', 'https://images.unsplash.com/photo-1626104012691-e010bfb8a23e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
newImg.classList.toggle('thumbnail');
document.body.append(newImg);

//////////////////REMOVING AN ELEMENT/////////////////////////////
// Method 1 with 3 steps: 1) Find the parent 2) Find the item to be removed 3) removeChild from the parent
    // const removeMe = document.querySelector('#remove-me');
    // uList.removeChild(removeMe);

// Method 2 with 2 steps: 1) Find the element 2) Run the remove command on the element
const removeMe = document.querySelector('#remove-me');
removeMe.remove();

