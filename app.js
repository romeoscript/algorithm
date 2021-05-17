// task 1. 

function convertFahrToCelcius(f){

    if(typeof f === "string" || typeof f === "number"){
        var result = (f - 32)* (5/9) ;
        var mainAns = result.toFixed(4);
              return mainAns
    };
    if(Array.isArray(f)){
        return `${f} is not a valid number but a/an array.` 
    };
    if(typeof f === "object"){
        var value = JSON.stringify(f);
        return `${value} is not a valid number but a/an. object`
    };
    
};
console.log(convertFahrToCelcius("0"));
    console.log(convertFahrToCelcius([1,2,3,4]));
    console.log(convertFahrToCelcius({age:10 }));

 