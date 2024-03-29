/* R-TASK:

Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
MASALAN: calculate("1+3") return 4;
 */

function calculate(amount: string) {
  let result = 0
  const m = amount.split('').map((num => parseInt(num) ? result + (parseInt(num)) : 0)
  )
  m.forEach(num => { result += num })
  return console.log(result)
}


calculate("7+9")



/* Q-TASK:

Shunday function yozing, u 2 ta parametrga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false   */

// function hasProperty(object: any, key: any) {
//   if (object.hasOwnProperty(key)) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"))
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"))






/*
P - TASK:

Shunday function yozing, u object qabul
 qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
*/

// function objectToArray(val: any) {
//   const result = [];
//   for (let key in val) {
//     if (val.hasOwnProperty(key)) {
//       result.push([key, val[key]]);
//     }
//   }
//   return result;
// }

// const obj = { a: 10, b: 20 };
// const result = objectToArray(obj);
// console.log("result:", result);



//////////////////////////////////////////////////////////////////////////

/* O-TASK:

Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45
*/

// function calculateSumOfNumbers(arr: any[]) {
//   let result = 0
//   for (let ele of arr)
//     if (typeof ele == 'number') {
//       result += ele
//     }
//   return result
// }

// console.log(calculateSumOfNumbers([10, "10", 3, { son: 10 }, null, "8", true, 35]))


//////////////////////////////////////////////////////////////////////////

/* N-TASK:

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;
*/

// function palindromCheck(word: string) {
//   const word2: string = word.split('').reverse().join('').toString()
//   return word === word2
// }

// console.log(palindromCheck("dad"))
// console.log(palindromCheck("son"))


//////////////////////////////////////////////////////////////////////////

/* M-TASK:

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];
*/

// function getSquareNumbers(numbers: number[]) {
//   return numbers.map(ele => { return { number: ele, square: ele * ele } })
// }

// const result = getSquareNumbers([1, 2, 3]);
// console.log(result);
// console.log("typeof result:", typeof result)


//////////////////////////////////////////////////////////////////////////

/* L-TASK:

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc"; */

// function reverseSentence(sentence: string) {
//   const arr = sentence.split(" ")
//   let newSentence = ""

//   for (let word of arr) {
//     if (word) {
//       newSentence = newSentence + word.split('').reverse().join('').replace(/[.,!@?#$%^&*s]/g, '') + " ";
//     }
//   }
//   return newSentence;
// }

// console.log(reverseSentence("we like coding!?"))






//////////////////////////////////////////////////////////////////////////

/* K-TASK:

Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;  */

// function countVowel(word: string) {
//   let count = word.match(/[aeiou]/gi);
//   return count;
// }
// const result = countVowel('Assalom-alekum');
// console.log(result?.length);


//////////////////////////////////////////////////////////////////////////

/** J-TASK:
Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"  */

// function findLongestWord(text: string) {
//   const arr = text.split(" ")
//   let sWord = ""

//   for (let word of arr) {
//     if (word.length > sWord.length) {
//       sWord = word;
//     }
//   }
//   return sWord;
// }

// console.log(findLongestWord("Welcome to Uzbekistan"))



//////////////////////////////////////////////////////////////////////////

/*  I-TASK:

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141" */

// function getDigit(list: string) {
//   const m = list.match(/\d/g)
//   return m?.join('')
// }
// console.log(getDigit('0s2fd51w'))

// console.log(typeof (getDigit('0s2fd51w')))  // for testing



//////////////////////////////////////////////////////////////////////////

/* H-TASK:

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"  */

// function getPositive(arr: Array<number>) {
//   let newArr = [...arr]
//   newArr = arr.filter((ele) => {
//     return (ele >= 0 ? 'ele' : null);
//   })
//   console.log(newArr.join(''))
// }

// getPositive([1, -8, 3, 0, -19, 2, -34, 55, 7])


///////////////////////////////////////////////////////////////////////////


/* Project standarts
- Logging standards
- Naming standards
    function, method, variable => Camel case   goHome
    class => Pascal case                       MemberService
    folder => Kebab case
    CSS => Snake case                          button_style
- Error handlings

*/
/*
Eng ko'p ishlatiladigan API lar:
  - Traditional API (shunchaki API deb ham ataladi)
  - Rest Api
  - GraphQL Api
*/


///////////////////////////////////////////////////////////////////////////




/* G-TASK:

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini */



// function getHighestIndex(arr: Array<number>) {
//   let newArr = [...arr]
//   function sortArr(a:number, b:number) {
//     return a > b ? -1 : b > a ? 1 : 0;
//     }
//   let m = newArr.sort(sortArr)[0]
//   console.log(`Berilgan arraydagi eng katta son ${m} va uning indeksi < ${arr.indexOf(m)} >`)
// }

// getHighestIndex([1, 136, 8, 3, 156, 19, 2, 34, 55, 7])
/**/