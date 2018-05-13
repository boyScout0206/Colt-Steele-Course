var nums = [1, 2, 3, 4, 5];
function printReverse(i) {
    for(var entry = (i.length - 1); entry >= 0; entry--) {
        console.log(i[entry]);
    }
}


var nums1 = [1,1,1,1,1,1];

function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}

// BELLOW DOESNT WORK BECAUSE THE RETURN OF FALSE ONLY COMES BACK INTO ANOTHER FUNCTION AND NOT TO THE CONSOLE
// function isUniform(i) {
//     var firstEntry = i[0];
//     i.forEach(function(entry) {
//         if(entry !== firstEntry) {
//         return false;
//         }
//     });
//     return true;
// }

function sumArray(arr) {
    var total = 0;
    arr.forEach(function(num) {
        total = (total + num);
    });
    console.log(total);
}

function max(arr) {
    var maxNum = arr[0];
    arr.forEach(function(i) {
        if(i > maxNum) {
            maxNum = i;
        }
    });
    console.log(maxNum);
}