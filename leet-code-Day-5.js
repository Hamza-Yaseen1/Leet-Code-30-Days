let map = function(arr, fn) {
    n=arr.length;
    let res = new Array(n);
    for(let i = 0; i<n;i++){
     res[i]=fn(arr[i],i)
    }
    return res;
 };