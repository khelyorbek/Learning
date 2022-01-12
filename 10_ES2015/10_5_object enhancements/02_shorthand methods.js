// OLD WAY
    const mathStuff = {
        x: 200,
        // adding methods here
        add: function (a,b) {
            return a+b;
        },
        square: function(a) {
            return a*a;
        }
    }

    // calling the method, passing the args and consoling it out
    console.log(mathStuff.add(3,7));

// NEW WAY
    const mathStuff2 = {
        x:200,
        add(a,b) { return a+b; },
        square(a) {return a*a;}
        // !!! DO NOT USE ARROW FUNCTIONS !!!
    };

