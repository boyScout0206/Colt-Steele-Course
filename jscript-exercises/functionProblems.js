function isEven(i) {
    if(i % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function factorial(i) {
    if (i === 0) {
        return 1;
    }
    else if(i < 0) {
        return -1;
    }
    else {
        for(var finalNum = i; (i - 1) >= 1; i--){
            finalNum = finalNum * (i - 1);
        }
    }
    return finalNum;
}

function kebabToSnake(i) {
    return i.replace(/-/g , "_");
}