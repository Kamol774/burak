/* L-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc"; */

function reverseSentence(sentence: string) {
  const arr = sentence.split(" ")
  let newSentence = ""

  for (let word of arr) {
    if (word) {
      newSentence = newSentence + word.split('').reverse().join('').replace(/[.,!@?#$%^&*s]/g, '') + " ";
    }
  }
  return newSentence;
}

console.log(reverseSentence("we like coding!?"))






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


