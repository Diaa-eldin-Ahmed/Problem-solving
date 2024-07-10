class UserManager {
    constructor() {
      this.users = [];
    }
  
    addUser(user) {
      this.users.push(user);
    }
  
    removeUser(username) {
      this.users = this.users.filter(user => user.username !== username);
    }
  
    // Method to be implemented
    findUserByUsername(username) {
      // Find and return the user object with the given username
      return this.users.find(user => user.username === username);
    }
  
    // Method to be implemented
    listUsersByRole(role) {
      // Return an array of users with the given role
      return this.users.filter(user => user.role === role);
    }
  
    // Method to be implemented
    getTotalUserCount() {
      // Return the total number of users
      return this.users.length;
    }
  }

  class BankAccount{
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount){
        
        this.balance += amount;
    }

    withdraw(amount){
        if(amount <= this.balance){
            this.balance -= amount;
        }else{
            console.log("insufficient funds!");
        }
    }

    getBalance(){
        return this.balance;
    }
  }

  class Library {
    constructor() {
      this.books = [];
    }
  
    // Implement the methods here
     addBook(title, author, genre) {
        const book = {title,author, genre};
        this.books.push(book);
     }
     removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
     }
    // getBooksByGenre(genre) { ... }
     listAllBooks() {
        return this.books;
     }
  }
  
class IntegerReverser{
    constructor(){};

    reverse(number){
        const isNegative = number < 0 ;
        const reversedStr = number.toString().split('').reverse().join('');
        const reversedInt = parseInt(reversedStr, 10);

        return isNegative ? -reversedInt : reversedInt;

    }
}

/* longest substring without repeating characters (medium) */

var lengthOfLongestSubstring = function(s) {
    const splittedStr = s.split('');
    let maxLen = 0;

    for (let i = 0; i < splittedStr.length; i++) {
        const visited = new Set();
        for (let j = i; j < splittedStr.length; j++) {
            if (visited.has(splittedStr[j])) {
                break;
            }
            visited.add(splittedStr[j]);
            maxLen = Math.max(maxLen, j - i + 1);
        }
    }

    return maxLen;
};

/* twoSum */

var twoSum = function(nums, target) {
    for(i= 0 ; i <= nums.length; i++){
        for(j = i+1 ; j <= nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i,j];
            }
            // or
            // if(nums[j] == target - nums[i]){
            //     return [i,j];
            // }
        }
    }
};
//we are looping over the array 2 times then condition if the outer iterate + inner iterate numbers are equal target.
// time complexity o(n2) as nested loop used 
// space complexity o(1) as only constant space was used

/* Reverse Integer (medium) */

var reverse = function(x) {
    const isNegative = x < 0; // declare negative values
    const absX = Math.abs(x); // get only absolute values
    const reversedX = String(absX).split('').reverse().join('');
    const reversedInt = parseInt(reversedX, 10);
    if(reversedInt > 0x7FFFFFFF){
        return 0;
    }else{
    return isNegative ? -reversedInt : reversedInt;
    }
};
// time complexity o(n) where n represents the number of digits in the input integer
/* 
The space complexity of your solution is O(n), where n represents the number of digits in the input integer. Let’s break it down:
The absX variable stores the absolute value of x, which requires O(n) space to store the digits of the integer.
The reversedX variable holds the reversed string representation of absX. Since each digit is stored as a character in the string, it also requires O(n) space.
The reversedInt variable stores the parsed integer value of reversedX. Although it’s an integer, the space complexity remains O(n) because the number of digits in the integer still corresponds to the input size.
*/
// solution 2
var reverse = function(x) {
  const isNegative = x < 0 ;
  let absX = Math.abs(x);
  let reversedInt = 0;
  let rem = 0;
  while(absX !== 0){
      reversedInt *= 10;
      rem = absX % 10;
      absX = (absX - rem) / 10 ;
      reversedInt += rem
  }
  if(reversedInt > 0x7fffffff){
      return 0;
  }
  return isNegative ? -reversedInt : reversedInt;
};

/* Palindrome */
// solution 1 
var isPalindrome = function(x) {
  if(x < 0){
    return false;
  } // early exit This early exit condition improves efficiency by avoiding unnecessary calculations
  const reversedStrX = String(x).split('').reverse().join('');
  const reversedIntX = parseInt(reversedStrX, 10);
  if(reversedIntX === x){
      return true;
  }else{
      return false;
  }
};
// time complexity o(log(n)) : Converting an integer to a string takes O(log(x)) time (where x is the input number).
// Space complexity: O(log(x)) due to the string conversion.

// solution 2 (better)
var isPalindrome = function(x) {
  if(x < 0){
      return false;
  } // early exit This early exit condition improves efficiency by avoiding unnecessary calculations
  let originalX = x;
  let reversedInt = 0;
  let rem = 0;
  while(x > 0){
      reversedInt *= 10;
      rem = x % 10; // <-- remainder grabs last digit
      x = (x - rem) / 10; // <-- eliminate zero in num
      reversedInt += rem;
  }
  if(originalX == reversedInt){
      return true;
  }else {
      return false;
  }
};

// Time Complexity o(log(n)) as we iterate through each digit & the number of iterations is proportional to the number of digits in x
// Space Complexity o(1) (constant space) because we only use a few variables (originalX, reversedInt, and rem) regardless of the input size.

/* Roman to Integer */
var romanToInt = function(s) {
  // Create a dictionary to map Roman symbols to values
  const romanValues = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };

  let result = 0; // Initialize the result
  for(i = 0 ; i < s.length ; i++){
      const curr = romanValues[s[i]];
      const next = romanValues[s[i +1]];
      if(next && curr < next){
          result -= curr;
      }else{
          result += curr;
      }
  }
  return result;
};

// time complexity is O(n), where n is the length of the input Roman numeral string
// space complexity is O(1), as no extra space is required beyond the minimal variables used in the algorithm

/* Binary search Algorithm */
const binarySearch = function(arr, target){
    let low = 0 ;
    let high = arr.length - 1;
    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return -1;
}

// const arr = [1,2,3,4,5,6,7,8,9,10];
// const target = 8;
// console.log(binarySearch(arr,target));
// Big O = O(log n)

/* Find min/max value Algorithm*/
// const findMin = function(arr3){
//     let minVal = arr3[0];
//     let minIndx = 0;
//     for(let i =1 ; i < arr3.length; i++){
//         if(arr3[i] < minVal){ //-> find max if(arr[i] > minVal)
//             minVal = arr3[i];
//             minIndx = i;
//         }
//     }
//     return minIndx;
// }

const findMin = function(arr3,startedSearch){
    let minVal = arr3[startedSearch];
    let minIndx = startedSearch;
    for(let i = startedSearch ; i < arr3.length; i++){
        if(arr3[i] < minVal){ //-> find max if(arr[i] > minVal)
            minVal = arr3[i];
            minIndx = i;
        }
    }
    return minIndx;
}

// const arr3 = [2,6,5,4,1];
// console.log(findMin(arr));
// Big Order = O(n)


const swap = function(x,y){
    let temp = y;
    y = x;
    x = temp;
    return [x,y];
}
// console.log(swap(1,9));


/* Selection Sort Algo */

// const selectionSort = function(arr2) {
//     const findMin = function(arr3, startedSearch) {
//         let minVal = arr3[startedSearch];
//         let minIndx = startedSearch;
//         for (let i = startedSearch + 1; i < arr3.length; i++) {
//             if (arr3[i] < minVal) { // Fixed typo here
//                 minVal = arr3[i];
//                 minIndx = i;
//             }
//         }
//         return minIndx;
//     };
 
//     const swap = function(arr, x, y) {
//         let temp = arr[x];
//         arr[x] = arr[y];
//         arr[y] = temp;
//     };
 
//     for (let i = 0; i < arr2.length - 1; i++) {
//         let minIndex = findMin(arr2, i);
//         swap(arr2, i, minIndex);
//     }
 
//     return arr2;
// };
 
// const arr2 = [2, 6, 5, 4, 1];
// console.log(selectionSort(arr2)); // Output should be [1, 2, 4, 5, 6]


const selectionSort = function(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        // Assume the minimum is the first element
        let minIndex = i;
 
        // Check the rest of the array to find the real minimum
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
 
        // Swap the found minimum element with the first element
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
 
    return arr;
};
 
const arr = [2, 6, 5, 4, 1];
console.log(selectionSort(arr)); // Output should be [1, 2, 4, 5, 6]
 