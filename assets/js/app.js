// Note: I've posted this on Dev

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

/*
Below is a list of 20 array methods. For each method, there's a description at the top (stolen directly from MDN) and one or more examples.

I wanted all of the 20 in the same place, and organized a certain way, for myself, and I figured I may as well share it because it might also be helpful to others.

Please note that some of these methods are more complicated than others. And some may be simple in the examples I've included but have much more complicated uses. The best example of one of these more complicated methods is reduce(). To read more about reduce() (just to take one example), visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce.

Please note that some of the 20 array methods I've included do modify the original array, and some do not. For example, push(), pop(), unshift(), and shift() do, and forEach(), filter(), map(), and reduce() do not. In most, though not all, of the MDN descriptions that I've included, it is mentioned whether the original array is modified or not. But another clue is this: If you view my example for the reverse() method (just to take one example), you'll notice that in the second line the method is put on the array and that in the third line only the array name itself (i.e., without any method on it) is passed in to console.log(), and yet a modified array is what is logged to the console.
*/


// 1. The push() method adds one or more elements to the end of an array and returns the new length of the array.

const pushDemoArr = [10, 20, 30, 40, 50]
console.log(pushDemoArr.push(60)) // 6
console.log(pushDemoArr) // [10, 20, 30, 40, 50, 60]


// 2. The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

const popDemoArr = [10, 20, 30, 40, 50]
console.log(popDemoArr.pop()) // 50
console.log(popDemoArr) // [10, 20, 30, 40]


// 3. The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

const unshiftDemoArr = [10, 20, 30, 40, 50]
console.log(unshiftDemoArr.unshift(0)) // 6
console.log(unshiftDemoArr) // [0, 10, 20, 30, 40, 50]


// 4. The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

const shiftDemoArr = [10, 20, 30, 40, 50]
console.log(shiftDemoArr.shift()) // 10
console.log(shiftDemoArr) // [20, 30, 40, 50]


// 5. The forEach() method executes a provided function once for each array element.

const forEachDemoArr = [10, 20, 30, 40, 50]
forEachDemoArr.forEach(val => { console.log(val + 3) }) // 13 23 33 43 53


// 6. The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const filterDemoArr = [10, 20, 30, 40, 50]
const newFilterDemoArr = filterDemoArr.filter(val => { return val > 25 }) // i.e., if a number in filterDemoArr is greater than 25, then add it to newFilterDemoArr
console.log(newFilterDemoArr) // [30, 40, 50]


// 7. The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const mapDemoArr = [10, 20, 30, 40, 50]
const newMapDemoArr = mapDemoArr.map(val => { return val + 5 })
console.log(newMapDemoArr) // [15, 25, 35, 45, 55]


// 8. The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// Below are three examples of reduce().

// Without an initialValue, which means that reduceDemoArr1 is treated as it is: [10, 20, 30, 40, 50]
const reduceDemoArr1 = [10, 20, 30, 40, 50]
const sum1 = reduceDemoArr1.reduce((accumulator, currentVal) => { return accumulator + currentVal }) 
console.log(sum1) // 150

// With an initialValue of 0, which means that reduceDemoArr2 is treated as: [0, 10, 20, 30, 40, 50]
const reduceDemoArr2 = [10, 20, 30, 40, 50]
const sum2 = reduceDemoArr2.reduce((accumulator, currentVal) => { return accumulator + currentVal }, 0) 
console.log(sum2) // 150

// With an initialValue of 100, which means that reduceDemoArr3 is treated as: [100, 10, 20, 30, 40, 50]
const reduceDemoArr3 = [10, 20, 30, 40, 50]
const sum3 = reduceDemoArr3.reduce((accumulator, currentVal) => { return accumulator + currentVal }, 100) 
console.log(sum3) // 250

/* Additional notes on reduce() that may be helpful:
- Even though reduce() is being used for addition in the three examples above, reduce() is not inherently adding, or multiplying, or anything. Don't make the mistake of thinking that it is, because thinking so can make things very confusing with more complex uses of reduce(). reduce() returns one value in the end based on the conditions provided.
- As is written here https://medium.com/swlh/javascript-reduce-with-examples-570f1b51e854, the "accumulator" can also be called the "previousValue", because it holds "whatever the previous iteration returned".
- The second parameter of reduce(), following the 2- to 4-paramater callback function, is the initialValue (often set to 0), which just determines what the accumulator/previousValue used in the first iteration is. In other words (from fCC): In addition to the callback function, reduce() has a parameter which takes an initial value for the accumulator. If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.
*/


// 9. The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const findDemoArr = [11, 20, 31, 40, 51]
const valFound = findDemoArr.find(val => { return val % 2 === 0 }) 
console.log(valFound) // 20


// 10. The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const includesDemoArr = [10, 20, 30, 40, 50]
console.log(includesDemoArr.includes(20)) // true
console.log(includesDemoArr.includes(25)) // false
console.log(includesDemoArr.includes(2)) // false


// 11. The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

const someDemoArr = [10, 20, 30, 40, 50]
const thereIsAtLeastOne = someDemoArr.some(val => { return val > 12 && val < 28 })
console.log(thereIsAtLeastOne) // true


// 12. The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// Below are two examples of every().

const everyDemoArr1 = [10, 20, 30, 40, 50]
const theyAllPassTheTest1 = everyDemoArr1.every(val => { return typeof val === 'number' })
console.log(theyAllPassTheTest1) // true

const everyDemoArr2 = [10, 20, 30, 40, 50, 'I am a string, not a number']
const theyAllPassTheTest2 = everyDemoArr2.every(val => { return typeof val === 'number' })
console.log(theyAllPassTheTest2) // false


// 13. The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// Below are three examples of sort().

const sortDemoArr1 = [100, 50, 32, 20000, 4]
sortDemoArr1.sort()
console.log(sortDemoArr1) // [100, 20000, 32, 4, 50] // note that the numbers have been sorted into ascending order according to each number's first digit

const sortDemoArr2 = [100, 50, 32, 20000, 4]
sortDemoArr2.sort((a, b) => { return a - b })
console.log(sortDemoArr2) // [4, 32, 50, 100, 20000] // note that the numbers have been sorted into ascending order

const sortDemoArr3 = ['Tuesday', 'Wednesday', 'Monday', 'Friday', 'Thursday']
sortDemoArr3.sort()
console.log(sortDemoArr3) // ['Friday', 'Monday', 'Thursday', 'Tuesday', 'Wednesday'] // note that the days have been sorted into alphabetical order


// 14. The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

const reverseDemoArr = [10, 20, 30, 40, 50]
reverseDemoArr.reverse()
console.log(reverseDemoArr) // [50, 40, 30, 20, 10]


// 15. The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

// Below are three examples of fill().

const fillDemoArr1 = [10, 20, 30, 40, 50]
fillDemoArr1.fill(4) // fill all positions with 4
console.log(fillDemoArr1) // [4, 4, 4, 4, 4]

const fillDemoArr2 = [10, 20, 30, 40, 50]
fillDemoArr2.fill(7, 2) // fill with 7 from position 2
console.log(fillDemoArr2) // [10, 20, 7, 7, 7]

const fillDemoArr3 = [10, 20, 30, 40, 50]
fillDemoArr3.fill(8, 1, 4) // fill with 8 from position 1 until (not including) position 4
console.log(fillDemoArr3) // [10, 8, 8, 8, 50]


// 16. The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

const joinDemoArr = [10, 20, 30, 40, 50]
console.log(joinDemoArr.join()) // '10,20,30,40,50'
console.log(joinDemoArr.join('')) // '1020304050'
console.log(joinDemoArr.join(' ')) // '10 20 30 40 50'
console.log(joinDemoArr.join('-')) // '10-20-30-40-50'


// 17. The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

const findIndexDemoArr = [10, 20, 30, 40, 50]
const indexFound = findIndexDemoArr.findIndex(val => { return val > 32 })
console.log(indexFound) // 3


// 18. The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

const indexOfDemoArr = [10, 20, 30, 40, 50]
const index = indexOfDemoArr.indexOf(30)
console.log(index) // 2


// 19. The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// Below are three examples of slice().

const sliceDemoArr1 = [10, 20, 30, 40, 50]
const sliced1 = sliceDemoArr1.slice(2, 4)
console.log(sliced1) // [30, 40]

const sliceDemoArr2 = [10, 20, 30, 40, 50]
const sliced2 = sliceDemoArr2.slice(0, 3)
console.log(sliced2) // [10, 20, 30]

const sliceDemoArr3 = [10, 20, 30, 40, 50]
const sliced3 = sliceDemoArr3.slice(2) // note that if there is no second number passed to slice() (the second number indicates the sliceDemoArr3 index at which the "slicing" is to stop), then sliceDemoArr3.length is the de facto second number
console.log(sliced3) // [30, 40, 50]


// 20. The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// Below are two examples of concat().

const concatDemoArr1 = [10, 20, 30, 40, 50]
const newConcatDemoArr1 = concatDemoArr1.concat(60)
console.log(newConcatDemoArr1) // [10, 20, 30, 40, 50, 60]

const concatDemoArr2 = [10, 20, 30, 40, 50]
const newConcatDemoArr2 = concatDemoArr2.concat([60, 70, 80, 90, 100])
console.log(newConcatDemoArr2) // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]