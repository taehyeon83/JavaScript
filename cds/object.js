//객체
// dot notation , Bracket notation
// 추가, 삭제 가능
// in 사용 가능

/*1*/
function getProperty(obj, property) {
  //'Steve',16
  return obj[property]; // property = 'name', 'age'
}

/*2*/
function addProperty(obj, property) {
  //steve, 'isProgrammer'
  obj[property] = true; //객체(obj)와 키(property)를 입력받아 키에 해당하는 값을 true로 설정, return문 금지
} // steve.isProgrammer = true

/*3*/
function addPropertyAndValue(obj, property, value) {
  //steve, 'age', 30
  obj[property] = value; // //객체와 키,값을 입력받아 키에 값을 할당, return 금지
} //steve.age = 30

/*4*/
function addObjectProperty(obj1, property, obj2) {
  //두 객체와 키를 입력받아
  obj1[property] = obj2; //obj1의 property에 obj2 객체 할당, return 금지
}

/*5*/
function removeProperty(obj, property) {
  delete obj[property];
} //객체(obj)와 키(property)를 입력받아 키가 가리키는 속성(property)을 제거(delete)

/*6*/
function removeNumberValues(obj) {
  for (let prop in obj) {
    //for in 사용
    // 객체(obj)를 입력받아
    if (typeof obj[prop] === "number") {
      //만약 'number'타입일 경우
      delete obj[prop]; // number타입 값을 가진 속성을 모두 제거
    }
  }
}

/*7*/
function removeArrayValues(obj) {
  for (let prop in obj) {
    //객체(obj)를 입력받아
    if (Array.isArray(obj[prop])) {
      //만약 배열인 경우, Array.isArray = 배열인지 확인
      delete obj[prop]; // 해당 속성 모두 제거
    }
  }
}

/*8*/
function removeOddValues(obj) {
  for (let prop in obj) {
    //객체를 입력받아
    if (typeof obj[prop] === "number" && obj[prop] % 2 !== 0) {
      //타입이 number이면서 2로 나눈 나머지가 0이 아닐경우
      delete obj[prop]; // 해당 속성 모두 제거
    }
  }
}

/*9*/
function isPersonOldEnoughToVote(person) {
  if (person.age >= 18) {
    // 만약 객체(person)의 나이가 18세 이상이면
    return true; // true 리턴
  } else {
    // 그렇지 않으면
    return false; // false 리턴
  }
}

/* 10*/
function addFullNameProperty(obj) {
  // firstName='Jade', lastname='Smith'
  obj.fullName = obj.firstName + " " + obj.lastName; // 'Jade Smith'
} // 객체를 입력받아 'firstName', 'lastName' 속성값 사이에 띄어쓰기 하나를 둔 단일 문자열을 fullName 속성값으로 할당

/*11*/
function removeNumbersLargerThan(num, obj) {
  for (let prop in obj) {
    //수(num)와 객체(obj)를 입력받아
    if (obj[prop] > num && typeof obj[prop] === "number") {
      //입력받은 수보다 큰 수를 가지면서 'number' 타입일 경우
      delete obj[prop]; // 해당 속성 모두 제거
    }
  }
}

/*12*/
function countNumberOfKeys(obj) {
  // 객체를 입력받아 속성(obj)의 개수를 리턴
  return Object.keys(obj).length; // 객체(obj)의 key값만 가져오기(Object.keys) + 속성의 개수(.length)
}

/*13*/
function printObject(obj) {
  let result = ""; // string 타입
  for (let key in obj) {
    result = result + key + ": " + obj[key] + "\n"; // '키(key): 값(obj[key])' + '\n'(줄바꿈)
  } // \n = 줄바꿈 문자, ': '= 콜론 다음 공백표시
  return result; //string 타입 리턴
}

/*14*/
function getElementOfArrayProperty(obj, key, index) {
  // 객체(obj), 키(key), 수(index)를 입력받음
  let arrProperty = obj[key]; //

  if (Array.isArray(arrProperty) === false) {
    // 만약 arrProperty가 배열이 아닌경우
    return undefined; // undefined 리턴
  }
  return arrProperty[index]; // 수가 가르키는 index에 해당하는 요소 리턴
}

/*15*/
function select(arr, obj) {
  let newObj = {}; // 빈 객체를 선언
  for (let prop in obj) {
    for (let i = 0; i < arr.length; i++) {
      if (prop === arr[i]) {
        newObj[prop] = obj[prop]; // 다음과 같이 추가 가능
      }
    }
  }
  return newObj;
}

/*16*/
function getLastElementOfProperty(obj, property) {
  // 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 마지막 요소를 리턴
  let prop = obj[property];

  if (!Array.isArray(prop) || prop.length === 0) {
    // 만약 키 해당값이 배열이 아니거나 빈 배열일 때
    return undefined; // undefined 리턴
  }
  return prop[prop.length - 1]; // 배열의 마지막 요소 리턴
}

/*17*/
function getValueOfNthElement(arr, num) {
  if (arr.length === 0) {
    // 빈배열일 경우
    return "no name"; // 'no name' 리턴
  } else if (num > arr.length - 1) {
    // 배열의 범위를 벗어나는 인덱스를 입력받은 경우
    return arr[arr.length - 1]["name"]; // 마지막 객체의 'name' 속성값을 리턴
  } else {
    // 둘다 아니면
    return arr[num]["name"]; // 객체의 'name' 속성값을 리턴
  }
}

/*18*/
function getAllButLastElementOfProperty(obj, key) {
  if (!Array.isArray(obj[key]) || obj[key] === 0) {
    // 민약 배열이 아니거나 빈 배열인 경우
    return []; //빈 배열 리턴
  }
  return obj[key].slice(0, -1); //그 외는 마지막 요소가 제거된 배열 리턴
}

/*19*/
function extend(obj1, obj2) {
  for (let key in obj2) {
    // obj2 순회
    if (!(key in obj1)) {
      // 만약 obj1이 없으면
      obj1[key] = obj2[key];
    }
  }
}

/*20*/
function countAllCharacters(str) {
  // 입력 : 문자열
  // 출력 : { 문자열의 각 문자 : 나온 횟수 }
  // 객체를 하나 만들어 준다.
  let obj = {};
  // str의 length만큼 반복한다.
  // 해당 문자와 같은 키가 아직 없다면,
  // 키를 만들어 주고, 값을 0으로 넣어준다.
  // 값을 1증가 시킨다.
  // (반복)
  // 최종적으로 만들어진 객체를 리턴한다.

  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 0;
      // 'banana'
      // (1) 'b'는 아직 없음 -> obj => {b: 0}
      // (2) 'a'도 없음 -> obj = {b: 1, a: 0}
      // (3) 'n'도 없음 -> obj = {b: 1, a: 1, n: 0}
    }
    obj[str[i]]++;
    // 위 조건과 상관없이 str[i]를 키로한 값을 1 증가시킨다.
    // (1) {b: 0} -> {b: 1}
    // (2) {b: 1, a: 0} -> {b: 1, a: 1}
    // (3) {b: 1, a: 1, n: 0} -> {b: 1, a: 1, n: 1}
    // (반복)
    // (6) {b: 1, a: 2, n: 2} -> {b: 1, a: 3, n: 2}
  }
  return obj;
}
/*21*/
function mostFrequentCharacter(str) {
  // 20번과 유사한 문제
  // 20번 문제는 객체로 만들어서 리턴해주기만 하면 되는데, 이번에는 가장 많이 반복된 문자를 리턴
  // 20번 + '가장 많이 반복' 찾기
  // 가장 큰, 가장 많은 -> 비교 대상 만들어 놓고 하나씩 비교해서 교체하기

  // str이 만약 apple이라면
  // obj = {a: 1, p: 2, l: 1, e: 1} 이렇게 만들어 준다.
  // 가장 많이 나온 문자를 체크할 수 있는 변수를 하나 만들어 놓고,
  // 가장 큰 수를 체크할 수 있는 변수도 하나 만들어 놓고,
  // 그것보다 더 커지면? 교체 -> 가장 큰 수, 가장 많이 나온 문자 둘 다 교체
  let mostChar = "";
  let mostCount = 0;
  let obj = {};
  // 주의 사항 : 띄어쓰기 제외 -> 제외한다는 건 어떻게? continue를 사용하면 된다.
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 0;
    }
    obj[str[i]]++;

    if (obj[str[i]] > mostCount) {
      // 반복문을 돌다가 어느 순간 문자열에 해당하는 값이 mostCount보다 커지면? mostCount와 mostChar교체
      // {a: 1} -> 교체 -> mostCount:1, mostChar: 'a'
      // {a: 1, p: 2} -> 교체 -> mostCount:2, mostChar: 'p'
      // (반복...)
      // {a: 1, p: 2, l: 1, e: 1}
      mostCount = obj[str[i]];
      mostChar = str[i];
    }
  }
  // 마지막엔 가장 많이 나온 문자 리턴
  // 'p'
  return mostChar;
}
