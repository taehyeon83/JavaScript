// 코플릿 배열

/*1*/
function getType(anything) {
  if (Array.isArray(anything)) {
    return "array";
  } else if (anything === null) {
    return "null";
  } else {
    return typeof anything;
  }
}

/*2*/
function getFirstElement(arr) {
  if (arr.length === 0) {
    return undefined; //빈배열 입력
  }
  return arr[0];
}

/*3*/
function getLastElement(arr) {
  if (arr.length > 0) {
    return arr[arr.length - 1];
  }
  return undefined; //빈배열 입력
}

/*4*/
function getNthElement(arr, index) {
  if (arr.length === 0) {
    return undefined;
  } else if (arr.length - 1 < index) {
    return "out of index range";
  } else {
    return arr[index];
  }
}

/*5*/
function computeSumOfAllElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]; // 요소의 합
  }
  return sum;
}

/*6*/
function getAllWords(str) {
  if (str === "") {
    return [];
  }
  return str.split(" ");
}

/*7*/
function getAllLetters(str) {
  let array = []; // 하나씩
  for (let i = 0; i < str.length; i++) {
    array.push(str[i]); //뒤에 엘리먼트 추가
  }
  return array;
}

/*8*/
function getLargestElement(arr) {
  return Math.max(...arr); //전개연산자->가장 큰 값->리턴
}

/*9*/
function getLongestWord(str) {
  // 가장 큰거, 긴거, 짧은거...->기준정하기->하나씩 비교해서 (반복문)->크면 기준바꾸기 -> 안크면 그대로
  // 문자열을 배열로 변경
  // str.split(' ')
  let arr = str.split(" ");
  let max = arr[0]; //'I'
  for (let i = 0; i < arr.length; i++) {
    if (max.length < arr[i].length) {
      max = arr[i];
    }
  }
  return max;
}

/*10*/
function getEvenNumbers(arr) {
  let result = []; //하나씩
  for (let i of arr) {
    // 배열에 든 요소
    if (i % 2 === 0) {
      //짝수만
      result.push(i); // 뒤에 엘리먼트 추가
    }
  }
  return result;
}

/*11*/
function addToFront(arr, el) {
  arr.unshift(el); // 맨 앞에 el추가
  return arr;
}

/*12*/
function addToBack(arr, el) {
  arr.push(el); // 맨 뒤에 el추가
  return arr;
}

/*13*/
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2); // 두 배열을 입력받아 합치기
}

/*14*/
function getElementsAfter(arr, n) {
  if (n >= arr.length) {
    return []; // 새로운 배열 리턴
  }
  return arr.slice(n + 1); // 인덱스 이후의 요소들을 가진 새 배열 리턴
}

/*15*/
function getElementsUpTo(arr, n) {
  if (n >= arr.length) {
    return [];
  }
  return arr.slice(0, n); // 이전의 새로운 배열 리턴
}

/*16*/
function getAllElementsButFirst(arr) {
  return arr.slice(1); // 첫번째 요소를 제외하고 리턴
}

/*17*/
function getAllElementsButLast(arr) {
  return arr.slice(0, arr.length - 1); // 첫요소부터 마지막 요소 뺀 나머지 리턴
}

/*18*/
function removeFromFront(arr) {
  arr.shift(); //첫 요소 삭제
  return arr; //나머지 리턴
}

/*19*/
function removeFromBack(arr) {
  arr.pop(); // 배열의 마지막 요소 삭제
  return arr;
}

/*20*/
function removeFromBackOfNew(arr) {
  return arr.slice(0, arr.length - 1); // 마지막 요소가 제외된 새 배열 리턴
} // 배열 수정x // pop()= 배열 수정

/*21*/
function addToBackOfNew(arr, el) {
  let newArr = arr.slice();
  newArr.push(el); // 새 요소 el을 입력받아 뒤에 추가
  return newArr; // 새 배열 리턴
}

/*22*/
function addToFrontOfNew(arr, el) {
  let newArray = arr.slice();
  newArray.unshift(el); // 맨 앞에 새로운 el추가
  return newArray; // 새 배열 리턴
}

/*23*/
function getAllElementsButNth(arr, n) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    //하나씩 확인
    if (i !== n) {
      //만약 인덱스 n이 아니면
      result.push(arr[i]); //result에 추가
    }
  }
  return result;
}

/*24*/
function createPhoneNumber(arr) {
  // 0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8
  let first = "(010)"; // 배열의 길이가 8인 경우
  const len = arr.length;
  const mid = arr.slice(len - 8, len - 4).join(""); //-8번째, -4번째
  const end = arr.slice(len - 4, len).join(""); // -4번째

  if (len === 11) {
    // 만약 앞에 0, 1, 0이 있다면
    first = `(${arr.slice(0, 3).join("")})`; // 맨 앞을 ( )로 묶음
  }
  return `${first}${mid}-${end}`; // 문자열 (' ') 리턴
}

/*25*/
function fibonacci(num) {
  let fibNum = []; //수열을 담아줄 배열

  for (let i = 0; i <= num; i++) {
    //num까지 반복하면서 < 맨 끝 수 + 그 앞에 수 >를 해준다.
    if (i === 0) {
      fibNum.push(0);
    } else if (i === 1) {
      fibNum.push(1);
    } else {
      fibNum.push(fibNum[i - 2] + fibNum[i - 1]); // fib[i] = fib[i-2] + fib[i -1]
    }
  }

  return fibNum; //배열을 리턴한다.
}
//피보나치 : 다음에 오는 수는 앞에 두 숫자를 합한 것
//다음 수 = 맨 끝 수 + 그 앞에 수
//수를 입력받아 num번까지 총 num+1개의 피보나치 수열을 리턴
//입력 : num, 0 이상의 정수
//출력 : 배열을 리턴
//주의 : 반복문 사용, 피보나치 수열은 0부터 시작
