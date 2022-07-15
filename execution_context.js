var a =1;
var b =2;

function calculateSum(...args){
    var sum=0;
    args.forEach(num=> sum+=num);
    return sum;
}

function cFunc(e){
    var a = 3, c =15, d =10;
    function dFunc(){
        var f = 5;
        var sum = calculateSum(a,b,c,d,e,f);
        console.log(sum)
    }
dFunc();
}

cFunc(10);
