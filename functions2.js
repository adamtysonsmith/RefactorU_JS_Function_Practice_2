///////////////////////////////////////////
// Test Variables
///////////////////////////////////////////
var ned = {
    name: 'Flanders',
    age: 46,
    neighbor: 'Homer Simpson'
}
var stringArray = ['Ned','Homer','Lisa','Bart','Marge','Smithers','Mr. Burns'];
var quote = 'and this is the snack holder where i can put my beverage or, if you will, cupcake.';
var boolArray = [true, false, false, true, true];
var falsy = [false, false, false];
var dupArray = ['String','Array','Number','String','Array','Number'];


///////////////////////////////////////////
// Functions Part 2
///////////////////////////////////////////

// 1. Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
function getName(obj) {
    return obj.name;
}
console.log(getName(ned));


// 2. Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
function totalLetters(arrStr) {
    var total = 0;
    for (var i = 0; i < arrStr.length; i++) {
        total += arrStr[i].length;
    }
    return total;
}


// 3. Write a function called 'keyValue' which takes two arguments and returns a new object with a key of the first argument and the value of the second argument.
function keyValue(key, value) {
    var obj = {}
    obj[key] = value;
    return obj;
}
console.log(keyValue('name','Homer'));


// 4. Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num
function negativeIndex(arr, neg) {
    return arr[arr.length + neg]
}
console.log(negativeIndex(stringArray, -1));
console.log(negativeIndex(stringArray, -2));


// 5. Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function won't actually modify the string.
function removeM(str) {
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== 'm') {
            newStr += str[i];
        }
    }
    return newStr;
}
console.log(removeM('moo moo cow'));
console.log(removeM('MMMmmmmmmmmmm that looks good!'));


// 6. Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format "key is value" on separate lines.
function printObject(obj) {
    for (var key in obj) {
        console.log(key + ' is ' + obj[key]);
    }
}
printObject(ned);


// 7. Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.
function vowels(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            arr.push(str[i]);
        }
    }
    return arr;
}
console.log(vowels(quote));


// 8. Write a function called 'twins' which takes an array and returns true if every adjacent pair of items in the array is the same.
function twins(arr) {
    // Return false if the array has an odd number of items
    if ((arr.length % 2) !== 0) {
        return false;
    } else {
        // Loop will throw false if a pair is not the same value
        for (var i = 0; i < arr.length; i+=2) {
            if (arr[i] !== arr[i + 1]) {
                return false;
            }
        }
    }
    // Return true if the tests pass
    return true;
}
console.log(twins([12,12,13,13,14,14 ,5, 5]));
console.log(twins([12,12,13,13,14,14]));
console.log(twins([12,3,14,14,14]));


// 9. Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. If you find an item that is true, the function should return true immediately and not continue checking further values.
function or(arrBool) {
    if (arrBool.length === 0) {
        return false;
    }
    
    for (var i = 0; i < arrBool.length; i++) {
        if (arrBool[i] === true) {
            return true;
        }
    }
    
    // If nothing returns true, return false
    return false;
}
console.log('Or function returns:', or(boolArray));
console.log('Or function returns:', or(falsy));


// 10. Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).
function unique(arr) {
    var unqObj = {};
    var unqArr = [];
    
    for (var i = 0; i < arr.length; i++) {
        // Set the value of each key to the current array item
        // Set the value of the object keys to null because we won't use them
        // Since an object must have unique keys, this is how we are deduplicating the data in the array
        unqObj[arr[i]] = null;
    }
    
    for (var key in unqObj) {
        // Now just push the unique keys
        unqArr.push(key);
    }
    
    return unqArr;
}

console.log('The unique values are:', unique(dupArray));