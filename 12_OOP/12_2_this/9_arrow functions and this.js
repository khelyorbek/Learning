const greeter = {
    msg : 'I like chienz',
    sayHi : function() {
        alert(this.msg);
    },
    waitAndGreet : function(delay) {
        setTimeout(function(){
            console.log(this);
            alert(this.msg);
        }.bind(this),delay);
    
    // waitAndGreet : function(delay) {
    //     setTimeout(() => {
    //         alert(this.msg);
    //     },delay);
    }
};


