const scores = [
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	55,
	59,
	69,
	73,
	73,
	75,
	79,
	83,
	88,
	91,
	93
];
//(FIND) (DOM) Results in next score higher than 75
scores.find(function(score){
    return score > 75;
}); //79

//(FIND) (DOM) 
scores.find(function(score){
    return score !== 0 && score % 2 === 0;
}); //88
//(FIND) (DOM) Results in all even numbers(including 0)
const evenScores = scores.filter(function(score){
    return score % 2 === 0;
});

const firstEven = scores.findIndex(function(score){
    return score !== 0 && score % 2 === 0;
});

//Splits the array into two; one with all the 0s and the second is the rest of the numbers
function partition(arr, pivot){
    const pivotPoint = arr.findIndex(function(el){
        return el > pivot;
    });
    const left = arr.slice(0, pivotPoint);
    const right = arr.slice(pivotPoint);
    return [ left, right ];   
}

//
function myFind(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr) === true) return arr[i];
    }
}
//DOM
myFind(scores, function(score){
    return score > 91;
});


function myFindIndex(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr) === true) return i;
    }
    return -1;
}

myFindIndex(scores, function(score){
    return score !== 0 && score % 2 === 0;
});