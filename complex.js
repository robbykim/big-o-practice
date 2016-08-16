// Finds the nth element in an array
var findNthElement = function( array, n, i ) { // O(log(n))
  // console.log( n, '____N' );
  //console.log( i, '___inner' );
  i = i || 0;

  if ( array.length == 1 ) { // happens once O(1)
    return array[ n ]; // return happens once (maybe) O(1)
  }

  var middle = Math.floor( array.length / 2 ); // declaration happens once O(1)
  console.log( middle, '______middle' );
  if ( n < middle ) { // happens once O(1)
    // console.log(i);
    return findNthElement( array.slice( 0, middle ), n, i + 1 ); // loop O(log(n))
  } else { // happens once O(1)
    // console.log(i);
    return findNthElement( array.slice( middle, array.length ), n - middle, i + 1 );
  }
};

// console.log( findNthElement( [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ], 2 ) );

/* BEST AND WORST */

// var demo = function( array ) {
//   var best = array.length,
//     worst = 0;
//   var tot = 0;
//   for ( var i = 0; i < array.length; ++i ) {
//     var iter = findNthElement( array, i );
//     tot += iter
//     if ( best > iter ) best = iter;
//     if ( worst < iter ) worst = iter;
//   }
//   console.log( array.length, best, worst, tot / array.length )
// }

// demo( Array( 1023 ) );
// demo( Array( 1024 ) );


// Find a series of elements from an array
var findElements = function( array, toFind, j ) { // a * log(n) -> O( log(n) )
  j = j || 0;

  var elements = [];
  for ( var i = 0; i < toFind.length; i++ ) { // O(n): iterating over the length of toFind
    // console.log( i, 'OUTER' );
    var element = findNthElement( array, toFind[ i ], j + 1 ); // loop O(log(n))
    elements.push( element );
  }
  return elements;
};

// console.log( findElements( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ], [ 3, 4, 5, 6 ] ) );



// Returns whether a number is odd or even
var isOdd = function( number, i ) { // -> O(1)
  var remainder = number % 2; // O(1)
  return remainder == 1; // O(1)
};

// console.log(isOdd(4));
// console.log(isOdd(3));

// Calculates the sample autocorrelation matrix (i.e. the matrix found by
// multiplying every item in an array with every other item)
// BEST CASE: has to go through whole array each time so is O(n^2)
// WORST CASE: same as best case O(n^2)
var sampleAutocorrelationMatrix = function( array, count ) { // O(n^2)
  var matrix = []; // O(1)
  var count = count || 0;
  for ( var i = 0; i < array.length; i++ ) { // O(n)
    var row = []; // O(1)
    for ( var j = 0; j < array.length; j++ ) { // O(n)
      row.push( array[ i ] * array[ j ] ); // O(1)
    }
    matrix.push( row ); // O(1)
  }
  return matrix;
};

// console.log(sampleAutocorrelationMatrix([0,1,2,3,4,5,6,7,8,9]));

// Doubles every value in an array
// BEST CASE: has to go through whole array each time so is O(n)
// WORST CASE: same as best case O(n)
var doubleArray = function( array, count ) { // O(n)
  count = count || 0;
  for ( var i = 0; i < array.length; i++ ) { // O(n)
    array[ i ] = array[ i ] * 2; // O(1)
    count++;
  }
  // console.log(count, '______count');
  return array; // O(1)
};

// console.log(doubleArray([0,1,2,3,4,5,6,7,8,9]));

// Calculates the nth triangle number
// This one's a challenge! :) somewhere btn 2^n and !n

var c1 = 0;
var triangleNumbers = function( n ) {
  c1++;
  if ( n == 0 || n == 1 ) {
    return n;
  }
  return 2 * triangleNumbers( n - 1 ) - triangleNumbers( n - 2 ) + 1;
};

var factorial = function(n) {
  if (n === 1) return n;
  return factorial(n-1)*n;};

for (var i = 1; i < 40; i++) {
  c1 = 0;
  var result = triangleNumbers(i);
  console.log(i, c1);
}
