const form = document.querySelector('#ourForm');

form.addEventListener('submit',function(event) {
    event.preventDefault();    
    console.log("Form submitted");
})

const anchor = document.querySelector('a');
anchor.addEventListener('click', function(evt) {
    evt.preventDefault();
    console.log("Nope. Won't do that :\\");
})

const chk = document.querySelector('#chk');
chk.addEventListener('click', function(evv){
    evv.preventDefault();
    console.log("Nope. Wont even check it");
})