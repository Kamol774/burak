/* G-TASK: 

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini */



function getHighestIndex(arr: Array<number>) {
  let newArr = [...arr]
  function sortArr(a:number, b:number) {
    return a > b ? -1 : b > a ? 1 : 0;
    }  
  let m = newArr.sort(sortArr)[0]
  console.log(`Berilgan arraydagi eng katta son ${m} va uning indeksi < ${arr.indexOf(m)} >`)
} 

getHighestIndex([1, 136, 8, 3, 156, 19, 2, 34, 55, 7])


