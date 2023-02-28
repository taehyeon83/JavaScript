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
  let prop = obj[key]; //객체에 키 입력
  if (!Array.isArray(prop) || prop.length === 0) {
    // 민약 배열이 아니거나 빈 배열인 경우
    return []; //빈 배열 리턴
  }
  return prop.slice(0, -1); //그 외는 마지막 요소가 제거된 배열 리턴
}

/*19*/
function extend(obj1, obj2) {
  for (let key in obj2) {
    // obj2를 입력
    if (!(key in obj1)) {
      // 만약 obj1이 아니면
      obj1[key] = obj2[key];
    }
  }
}
