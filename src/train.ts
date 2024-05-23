/*  ZQ-TASK:

Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida arrayda qaytarsin.
MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]  */

function findDuplicates(arr: number[]): number[] {
  const duplicates: number[] = [];
  const count: { [key: number]: number } = {};

  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  for (const num in count) {
    if (count[num] === 2) {
      duplicates.push(Number(num));
    }
  }

  return duplicates;
}
console.log(findDuplicates([1, 2, 3, 4, 5, 3, 4]));

/* ZP-TASK:

Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4
 */

// function majorityElement(arr: number[]) {
//   const frequencyMap: Record<number, number> = {};
//   let maxFrequency = 0;
//   let mostRepeatedNum = arr[0];

//   for (const num of arr) {
//     frequencyMap[num] = (frequencyMap[num] || 0) + 1;
//     if (frequencyMap[num] > maxFrequency) {
//       maxFrequency = frequencyMap[num];
//       mostRepeatedNum = num;
//     }
//   }

//   return mostRepeatedNum;
// }

// console.log(majorityElement([1, 3, 3, 3, 2, 2, 1, 3, 4]));

/*  ZO-TASK:

Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true   */

// function areParenthesesBalanced(sentence: string) {
//   sentence.
// }

// areParenthesesBalanced("string()ichida(qavslar)soni()balansda");

// function areParenthesesBalanced(sentence: string): boolean {
//   let count = 0;

//   for (const char of sentence) {
//     if (char === "(") {
//       count++;
//     } else if (char === ")") {
//       count--;
//       if (count < 0) {
//         return false;
//       }
//     }
//   }
//   return count === 0;
// }

// console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda"));

/* ZN-TASK:

Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]  */

// function rotateArray(arr: number[], num: number): number[] {
//   const taken = arr.slice(0, num);
//   const leftPart = arr.slice(num);

//   return [...leftPart, ...taken];
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));

/* ZM-TASK:

Shunday function yozing, u function parametrga berilgan raqamlarni orqasiga ogirib qaytarsin.
MASALAN: reverseInteger(123456789) return 987654321  */

// function reverseInteger(num: Number) {
//   const arr = num.toString().split("").reverse().join("");
//   const result = parseInt(arr);
//   console.log("result:", result);
//   console.log("type:", typeof result);
// }

// reverseInteger(5456153);

/* ZL-TASK:

Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”  */

// function stringToKebab(text: string) {
//   console.log(text.toLowerCase().replace(/ /g, "-"));
// }

// stringToKebab("I love Kebab");

/*  ZK-TASK:

Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
MASALAN: printNumbers()  */

// function printNumbers(): void {
//   let i = 1;
//   const intervalId = setInterval(() => {
//     console.log(i);
//     i++;
//     if (i > 5) {
//       clearInterval(intervalId);
//     }
//   }, 1000);
// }

// printNumbers();

/* ZJ-TASK:

Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8  */

// function reduceNestedArray(arr: any[]): number {
//   return arr.reduce((sum, element) => {
//     if (Array.isArray(element)) {
//       return sum + reduceNestedArray(element);
//     } else {
//       return sum + element;
//     }
//   }, 0);
// }
// const result = reduceNestedArray([1, [1, 2, [4]]]);
// console.log(result);

/* ZH-TASK:

Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin. 
MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6] */

// function findDisappearedNumbers(arr: number[]) {
//   let newArr = [];
//   const minNumber = Math.min(...arr);
//   const maxNumber = Math.max(...arr);

//   for (let i = minNumber; i < maxNumber; i++) {
//     if (!arr.includes(i + 1)) {
//       newArr.push(i + 1);
//     }
//   }
//   console.log(newArr);
// }

// findDisappearedNumbers([1, 3, 4, 7]);

/*  ZG-TASK:

Shunday function yozing, u berilgan string parametrni snake casega otkazib qaytarsin. 
MASALAN: capitalizeWords('name should be a string') return 'name_should_be_a_string' */

// function capitalizeWords(str: string) {
//   let words = str.split(" ");
//   let capitalize = words.map(function (word) {
//     return word.charAt(0).toLowerCase() + word.slice(1);
//   });
//   return capitalize.join("_");
// }
// const result = capitalizeWords("name should be a string");
// console.log("result:", result);

/* ZF-TASK:

Shunday function yozing, uni string parametri bolsin. String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'  */

// function capitalizeWords(text: string): string {
//   return text
//     .toLowerCase()
//     .split(" ")
//     .map(word => {
//       if (word.length <= 2) {
//         return word;
//       }
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }

// console.log("test:", capitalizeWords('name should be a string'))

/* ZE-TASK:

Shunday function yozing, uni  string parametri bolsin. String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
MASALAN: removeDuplicate('stringg') return 'string' */

// function removeDuplicate(str: string) {
//   let count = 0;
//   let strArray = str.split("");
//   for (let i = 0; i < strArray.length; i++) {
//     for (let j = i + 1; j < strArray.length; j++) {
//       if (strArray[i] == strArray[j]) {
//         strArray.splice(j, 1)
//         count++;
//         break;
//       }
//     }
//   }
//   return strArray
// }

// console.log(removeDuplicate("heeloo"))

/* ZD-TASK:

Shunday function yozing, uni number, array va number parametrlari bolsin va berilgan 1-parametr numberga teng indexni array ichidan topib 3-parametrdagi raqam bilan almashtirib yangilangan arrayni qaytarsin
MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2]   */

// function changeNumberInArray(num1: number, arr: number[], num2: number) {
//   arr[num1] = num2;
//   return arr;
// }

// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2))

/* ZC-TASK:

Shunday function yozing, uni number parametri bolsin va function qabul parametrni selsiy miqdori sifatida qabul qilib uni farenhitga ozgartirib bersin
MASALAN: celsiusToFahrenheit(0) return 32
*/

// function celsiusToFahrenheit(celsius: number) {
//   const fahrenheit = celsius * 9 / 5 + 32;
//   return fahrenheit;
// }

// console.log(celsiusToFahrenheit(200))

/*  ZB-TASK:

Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
MASALAN: randomBetween(30, 50) return 45    */

// function randomBetween(num1: number, num2: number) {
//   return Math.floor(Math.random() * (num1 - num2 + 1) + num2)
// }

// console.log(randomBetween(30, 50))

/*   ZA-TASK:

Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin.
MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]  */

// type Age = {
//   age: number;
// };

// function sortByAge(arr: Age[]): Age[] {
//   return arr.sort((a, b) => a.age - b.age);
// }

// console.log(sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]));

/*  Z-TASK:

Shunday function yozing, u sonlardan tashkil topgan array qabul qilsin. Function arraydagi juft sonlarni yigindisini qaytarsin
MASALAN: sumEvens([1,2,3]) return 2
*/

// function sumEvens(arr: number[]) {
//   return arr.reduce((i, ele) => ele % 2 === 0 ? i + ele : i, 0);
// }
// const result = sumEvens([1, 2, 3, 4, 5])
// console.log(result)

/*  Y-TASK:

 Shunday function yozing, uni 2 ta array parametri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
 MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]
*/

// function findIntersection(arr1: any[], arr2: any[]): any[] {
//   const sameElements = arr1.filter(element => arr2.includes(element));
//   return sameElements;
// }

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];
// const result = findIntersection(arr1, arr2);

// console.log(result);

/* X-TASK:

Shunday function yozing, uni object va string parapetrlari bolsin. Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object bolsa ham sanasin)

MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2  */

// if (typeof obj[key] === 'string' && obj[key].includes(target)) {

// function countOccurrences(obj: object | any, key: any) {
//   let count = 0;
//   function countKeys(val: any) {
//     for (let prop in val) {
//       if (obj.hasOwnProperty(prop)) {
//         if (typeof val[prop] === "object") {
//           countKeys(val[prop]);
//         } else if (prop === key) {
//           count++;
//         }
//       }
//     }
//   }
//   countKeys(obj);
//   return console.log(count);
// }

// countOccurrences({ model: 'Bugatti', steer: { model: 'HANKOOK', size: 30 } }, 'model')

/* W-TASK:

Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]] */

// function chunkArray<T>(arr: T[], num: number) {
//   return arr.reduce((resultArray, item, index) => {
//     const chunkIndex = Math.floor(index / num);
//     if (!resultArray[chunkIndex]) {
//       resultArray[chunkIndex] = [];
//     }
//     resultArray[chunkIndex].push(item);
//     return resultArray;
//   }, [] as T[][]);
// }

// const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// console.log(result);

// 2-variant of W-task

// function chunkArray(arr: any, num: number) {
//   let newArr = []
//   for (let i = 0; i <= arr.length; i++) {
//     newArr.push(arr.slice(0, num))
//     for (let j = 0; j < num; j++) {
//       arr.shift()
//     }
//     if (arr.length < num) {
//       newArr.push(arr.slice(0, arr.length))
//     } else {
//       null
//     }
//   }
//   console.log(newArr)
// }

// chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)

// const numbers = [5, 6, 9, 2, 4, 7];
// // reduce - qisqartirish
// const result = numbers.reduce((total, curValue, curIndex) => {
//   console.log("total: ", total);
//   console.log(`reduce method=> ${curIndex}: ${curValue}`);
//   return total + curValue;
// }, 0);    // 0 buyerda initial value.
// console.log("reduce method's result:", result);

/* V-TASK:

Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}
*/

// function countChars(word: string) {
//   const countLetter: any = {};

//   for (const letter of word) {
//     if (!countLetter[letter]) {
//       countLetter[letter] = 1;
//     } else {
//       countLetter[letter]++;
//     }
//   }

//   return countLetter;
// }
// console.log(countChars("hello"))

// U-TASK:

// Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// function summOdds(num: number) {
//   let count = [];
//   for (let i = 1; i < num; i++) {
//     if (i % 2 !== 0) {
//       count.push(i);
//     }
//   } return count.join('').length
// }

// console.log(summOdds(9))
// console.log(summOdds(11))

// T - TASK
// Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]

// function mergeSortedArrays(arr1: number[], arr2: number[]) {
//   let newArray: number[] = [];
//   let i: number = 0;
//   let j: number = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       newArray.push(arr1[i]);
//       i++;
//     } else {
//       newArray.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     newArray.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     newArray.push(arr2[j]);
//     j++;
//   }

//   return newArray;
// }

// const arr1: number[] = [0, 3, 4, 31];
// const arr2: number[] = [4, 6, 30];

// console.log(mergeSortedArrays(arr1, arr2));

/** S-TASK:

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2
 */

// function missingNumber(arr: number[]) {
//   const newArray = arr.sort();

//   for (let i = 0; i < newArray.length; i++) {
//     if (newArray[i] + 1 !== newArray[i + 1]) {
//       if (newArray.some((ele) => { return ele === 0 })) {
//         return (console.log(i + 1))
//       } else {
//         return (console.log(i + 2))
//       }
//     }
//   }
// }

// missingNumber([3, 2, 1, 0, 5, 6])

/* R-TASK:

Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
MASALAN: calculate("1+3") return 4;
 */

// function calculate(amount: string) {
//   let result = 0
//   const m = amount.split('').map((num => parseInt(num) ? result + (parseInt(num)) : 0)
//   )
//   m.forEach(num => { result += num })
//   return console.log(result)
// }

// calculate("7+9")

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
