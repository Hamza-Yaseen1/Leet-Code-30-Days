
let filter = function(arr, fn) {
    n = arr.length;
    let filteredArray = new Array();
    for(let i = 0; i<n;i++){
        if(fn(arr[i],i)){
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
};