// Finds the nth element in an array
var findNthElement = function(array, n) {
    if (array.length == 1) {
        return array[n];
    }

    var middle = Math.floor(array.length / 2);
    if (n < middle) {
        return findNthElement(array.slice(0, middle), n);
    }
    else {
        return findNthElement(array.slice(middle, array.length), n - middle);
    }
};

// Find a series of elements from an array
var findElements = function(array, toFind) {
    var elements = [];
    for (var i=0; i<toFind.length; i++) {
        var element = findNthElement(toFind[i]);
        elements.push(element);
    }
    return elements;
};

// Returns whether a number is odd or even
var isOdd = function(number) {
    var remainder = number % 2;
    return remainder == 1;
};

// Calculates the sample autocorrelation matrix (i.e. the matrix found by
// multiplying every item in an array with every other item)
var sampleAutocorrelationMatrix = function(array) {
    var matrix = [];
    for (var i=0; i<array.length; i++) {
        var row = [];
        for (var j=0; j<array.length; j++) {
            row.push(array[i] * array[j]);
        }
        matrix.push(row);
    }
};

// Doubles every value in an array
var doubleArray = function(array) {
    for (var i=0; i<array.length; i++) {
        array[i] = array[i] * 2;
    }
    return array;
};

// Calculates the nth triangle number
// This one's a challenge! :)
var triangleNumbers = function(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    return triangleNumbers(n - 1) + triangleNumbers(n - 1) - triangleNumbers(n - 2) + 1;
};
