function fibsSum(n) {
  if (n === 1) {
    return 1;
  } else if (!n) {
    return 0;
  }

  return fibsSum(n - 2) + fibsSum(n - 1) + 1;
}

function nFibs(n) {
  if (!n) {
    return [];
  } else if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  }

  const preFibs = nFibs(n - 1);
  return preFibs.concat(preFibs[preFibs.length - 1] + preFibs[preFibs.length - 2]);
}

function nthFib(n) {
  return nFibs(n)[n - 1];
}

function nPrimes(n) {
  let primes = [];
  let i = 2;
  
  while (primes.length < n) {
    if (isPrime(i)) {
      primes.push(i);
    }
    i++;
  }
  
  return primes;
}

function primeSum(n) {
  return nPrimes(n).reduce((acc, el) => acc + el, 0);
}

String.prototype.symmetricSubstrings = function () {
  const results = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 2; j <= this.length; j++) {
      if (isPalindrome(this.slice(i, j))) {
        results.push(this.slice(i, j));
      }
    }
  }

  return results;
};

function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

function jumbleSort(str, alphabet = null) {
  alphabet = alphabet || "abcdefghijklmnopqrstuvwxyz".split('');
  let letters = str.split('');
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < letters.length - 1; i++) {
      let j = i + 1;

      if (alphabet.indexOf(letters[i]) > alphabet.indexOf(letters[j])) {
        [letters[i], letters[j]] = [letters[j], letters[i]];
        sorted = false;
      }
    }
  }

  return letters.join('');
}

function stringIncludeKey(string, key) {
  if (!key) {
    return true;
  } else if (!string) {
    return false;
  }

  for (let i = 0; i < string.length; i++) {
    if (string[i] === key[0]) {
      return stringIncludeKey(string.slice(i + 1), key.slice(1));
    }
  }

  return false;
}

function primeFactorization(num) {
  if (num < 2) {
    return [];
  }

  for (let i = 2; i < Math.ceil(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return [i].concat(primeFactorization(num / i));
    }
  }

  return [num];
}

function baseConverter(num, b) {
  if (!num) {
    return "";
  }

  const vals = [
    '0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'
  ];

  return baseConverter(Math.floor(num / b), b) + vals[num % b];
}

function deepDup(arr) {
  const result = [];

  arr.forEach(el => {
    if (el instanceof(Array)) {
      result.push(deepDup(el));
    } else {
      result.push(el);
    }
  });

  return result;
}

function firstEvenNumbersSum(n) {
  if (!n) {
    return 0;
  }

  return (n * 2) + firstEvenNumbersSum(n - 1);
}

function exponent(b, n) {
  if (!n) {
    return 1;
  }

  if (n < 0) {
    return (1 / b) * exponent(b, n + 1);
  } else {
    return b * exponent(b, n - 1);
  }
}

function recSum(nums) {
  if (!nums.length) {
    return 0;
  }

  return nums[0] + recSum(nums.slice(1));
}

function digitalRoot(num) {
  while (num > 10) {
    num = rootStep(num);
  }

  return num;
}

function rootStep(n) {
  let sum = 0;

  while (n > 10) {
    sum += (n % 10);
    n = Math.floor(n / 10);
  }

  return sum + n;
}

function factorialsRec(num) {
  if (!num) {
    return [0];
  } else if (num === 1) {
    return [1];
  }

  const facs = factorialsRec(num - 1);
  return facs.concat(facs[facs.length - 1] * (num - 1));
}

Array.prototype.myBsearch = function(target) {
  if (!this.length) {
    return -1;
  }

  const mIdx = Math.floor(this.length / 2);
  if (this[mIdx] === target) {
    return mIdx;
  } else if (this[mIdx] > target) {
    return this.slice(0, mIdx).myBsearch(target);
  } else {
    const result = this.slice(mIdx + 1).myBsearch(target);
    return (result === -1 ? -1 : result + mIdx + 1);
  }
};

String.prototype.mySlice = function(start, end) {
  if (end === undefined || end > this.length) {
    end = this.length;
  } 

  let result = "";
  
  if (start > end) {
    return result;
  }

  for (let i = start; i < end; i++) {
    result += this[i];
  }

  return result;
};

function factors(num) {
  const factors = [];

  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

Array.prototype.rotate = function(num = 1) {
  if (num < 0) {
    num = this.length - (Math.abs(num) % this.length)
  } else {
    num = Math.abs(num % this.length);
  }

  const result = this.slice();
  for (let i = 0; i < num; i++) {
    result.push(result.shift());
  }

  return result;
};

Array.prototype.median = function() {
  if (!this.length) {
    return null;
  } else if (this.length === 1) {
    return this[0];
  }

  const sorted = this.quickSort();
  const mIdx = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[mIdx] + sorted[mIdx - 1]) / 2;
  } else {
    return sorted[mIdx];
  }
};

function primes(num) {
  if (!num) {
    return [];
  }

  let i = 2;
  const result = [];
  while (result.length < num) {
    if (isPrime(i)) {
      result.push(i);
    }
    i++;
  }

  return result;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

Array.prototype.myJoin = function(separator = "") {
  if (this.length === 1) {
    return this[0];
  }

  return this[0] + separator + this.slice(1).myJoin(separator);
};

Array.prototype.flatten = function() {
  let result = [];
  this.forEach(el => {
    if (el instanceof Array) {
      result = result.concat(el.flatten());
    } else {
      result.push(el);
    }
  });

  return result;
};

Array.prototype.myReverse = function() {
  if (!this.length) {
    return [];
  }

  return this.slice(1).myReverse().concat(this[0]);
};

Array.prototype.dups = function() {
   const all = {};
   const dups = {};

  this.forEach((el, i) => {
    all[el] = all[el] || [];
    all[el].push(i);
  });

  const keys = Object.keys(all).filter(key => all[key].length > 1);
  keys.forEach(key => {
    dups[key] = all[key];
  });

  return dups;
};

function myFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
}

Array.prototype.twoSum = function() {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (!(this[i] + this[j])) {
        result.push([i, j]);
      }
    }    
  }

  return result;
};

function transpose(arr) {
  return arr[0].map((col, i) => arr.map(row => row[i]));
}

Array.prototype.quickSort = function(func) {
  if (this.length < 2) {
    return this;
  }

  const cb = func || ((a, b) => a > b ? 1 : -1);
  const left = this.slice(1).filter(el => cb(el, this[0]) < 0);
  const right = this.slice(1).filter(el => cb(el, this[0]) > 0);

  return left.quickSort(cb).concat(this[0], right.quickSort(cb));
};

Array.prototype.mergeSort = function(func) {
  if (this.length < 2) {
    return this;
  }
  console.log(this);
  const mIdx = Math.floor(this.length / 2);
  const cb = func || ((a, b) => a > b ? 1 : -1);
  const left = this.slice(0, mIdx).mergeSort(cb);
  const right = this.slice(mIdx, this.length).mergeSort(cb);

  return left.merge(right, cb);
};

Array.prototype.merge = function(right, cb) {
  const result = [];

  while (this.length && right.length) {
    if (cb(this[0], right[0]) > 0) {
      result.push(right.shift());
    } else {
      result.push(this.shift());
    }
  }

  return result.concat(this, right);
};









function jumbleSort(str, alphabet = null) {

}

Array.prototype.bubbleSort = function(func) {
  if (this.length < 2) {
    return this;
  }

  const copy = this.slice();
  const cb = func || ((a, b) => a > b ? 1 : -1);
  let unsorted = true;

  while (unsorted) {
    unsorted = false;

    for (let i = 0; i < copy.length - 1; i++) {
      const j = i + 1;
      if (cb(copy[i], copy[j]) > 0) {
        unsorted = true;
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
    }
  }

  return copy;
};

String.prototype.symmetricSubstrings = function () {
  const results = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 2; j <= this.length; j++) {
      if (isPalindrome(this.slice(i, j))) {
        results.push(this.slice(i, j));
      }
    }
  }

  return results;
};

const translate = word => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(word[0])) {
    return `${word}ay`;
  } else {
    let phoneme = 1;
    while (!vowels.includes(word[phoneme])) {
      phoneme++;
    }
    if (word[phoneme - 1] === 'q') {
      phoneme++;
    }
    return `${word.slice(phoneme)}${word.slice(0, phoneme)}ay`;
  }
};

function pigLatinify(sentence) {
  return sentence.split(' ').map(word => translate(word)).join(' ');
}

String.prototype.realWordsInString = function(dictionary) {
  const result = [];
  const letters = this.split(' ');

  dictionary.forEach(word => {
    if (this.includes(word)) {
      result.push(word);
    }
  });

  return result;
};

function caesarCipher(str, shift) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      result += ' ';
      continue;
    }

    const offset = (alpha.indexOf(str[i]) + shift) % 26;
    result += alpha[offset];
  }

  return result;
}

function titleize(title) {
  const noCaps = ['a', 'and', 'of', 'over', 'the'];
  const words = title.split(' ').map((word, i) => {
    if(noCaps.includes(word) && !i) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else if (!noCaps.includes(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });

  return words.join(' ');
}

function doubler(array) {
  return array.map(el => el * 2);
}

Array.prototype.reject = function(func) {
  return this.filter(el => !func(el));
};

Array.prototype.myEach = function(func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }

  return this;
};

Array.prototype.myEvery = function(func) {
  for (let i = 0; i < this.length; i++) {
    if (!func(this[i])) {
      return false;
    }
  }

  return true;
};

Array.prototype.mySome = function(func) {
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      return true;
    }
  }

  return false;
};

Array.prototype.myReduce = function(func, acc) {
  let start = 1;
  if (acc) {
    start = 0;
  } else {
    acc = this[0];
  }

  for (let i = start; i < this.length; i++) {
    acc = func(acc, this[i]);
  }

  return acc;
};

Array.prototype.myFilter = function(func) {
  const result = [];

  this.forEach(el => {
    if (func(el)) {
      result.push(el);
    }
  });

  return result;
};

Function.prototype.myCurry = function(numArgs) {
  const args = [];

  return (_curry = (arg) => {
    args.push(arg);
    return (args.length === numArgs ? this(...args) : _curry);
  });
};

Function.prototype.myBind = function(ctx, ...bindArgs) {
  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};

Function.prototype.myCall = function(ctx, ...args) {
  return this.apply(ctx, args);
};

Function.prototype.inherits = function(parent) {
  function Surrogate() {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};