var createCounter = function(init) {
    temp = init;
    function increment(){
      
        return ++init;
    }
    function decrement(){
        
        return --init;
    }
    let reset = ()=>{
       init = temp
        return init;
    }
    return{
        increment,
        decrement,
        reset
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */