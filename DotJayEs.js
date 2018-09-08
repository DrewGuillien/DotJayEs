var can = {
    you: {
        get: {
            me: {
                every: function(thing){
                    if(typeof thing !== "string") {
                        thing = "" + thing;
                    }
                    return {
                        class: document.getElementsByClassName(thing),
                        element: document.getElementsByName(thing),
                        id: document.getElementById(thing)
                    };
                }
            }
        },
        make: {
            me: {
                a: function(thing) {
                    if(typeof thing !== "string") {
                        thing = "" + thing;
                    }
                    return {
                        element: document.createElement(thing)
                    }
                }
            }
        }
    }
};

var divs = can.you.get.me.every("div").element;