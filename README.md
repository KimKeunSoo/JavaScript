# 1~3 장

## 자바스크립트의 객체

기본 타입(Call by Value)  =>  boolean, number, string  + null, undefined 

를 제외한 모든 것은 자바스크립트에서는 객체로 인식

참조 타입(Call by Reference) => 객체 => 배열, 함수, 정규표현식



**기본 타입과 표준 메서드**

```javascript
var str = 'Test';
console.log(str.charAt(2));	// 's'
```



**null 타입 변수 체크**

```javascript
var nallVar = null;
console.log(typeof nullVar === null); // false
console.log(nullVar === null);	// true
```



#### **객체 생성하는 방법 3가지**

1. **Object() 생성자 함수 사용**

   ```javascript
   var foo = new Object();
   foo.name = 'keunsoo';
   foo.age = 27;
   foo.gender = 'male';
   ```

2. **객체 리터럴 방식 사용**

   ```javascript
   var foo = {
   	name : 'keunsoo',
   	age : 27,
   	gender : 'male'
   };
   ```

3. **생성자 함수 사용**

   ```
   var foo = new Array(3);
   console.log(foo);	// [undefined, undefined, undefined]
   console.log(foo.length);	// 3
   
   var bar = new Array(1, 2, 3);
   console.log(bar);	// [1, 2, 3]
   console.log(bar.length);	// 3
   ```

   



**객체 프로퍼티 생성**

1. 객체 프로퍼티 갱신

   ```javascript
   foo.age = '28';
   ```

2. 객체 프로퍼티 동적 생성

   ```javascript
   foo.major = 'CSE';
   ```

3. 객체 프로퍼티 삭제

   ```javascript
   delete foo.major;
   ```



## 프로토타입

**모든 객체는 자신의 부모 역할을 하는 객체와 연결되어 있다. 이러한 부모 객체를 => '프로토타입 객체' 라고 한다.**

```javascript
foo.toString();
foo.valueOf();
foo.hasOwnProperty();
```



## 자바스크립트의 배열

```javascript
var colorArr = ['orange', 'yellow', 'blue', 'green'];
console.log(colorArr[0]);	// orange
console.log(colorArr[4]);	// undefined

colorArr[5] = red;
console.log(colorArr.length);	// 6

colorArr.length = 7
console.log(colorArr);	// [orange, yellow, blue, green, undefined, red, undefined]

colorArr.push('black');
console.log(colorArr);	// [orange, yellow, blue, green, undefined, red, undefined, black]
```



## 배열과 객체

1. 둘 다 index 값 가능

   ```javascript
   var arr = ['one', 'two', 'three'];
   var obj = {
   	'0' : 'one',
   	'1' : 'two',
   	'2' : 'three'
   }
   
   console.log(arr[0]);	// one
   console.log(obj[0]);	// one
   ```

2. 배열도 객체이다. (null도 객체)

   ```javascript
   console.log(typeof arr);	// object
   console.log(typeof obj);	// object
   ```

   

3. length는 배열만 인식

   ```javascript
   console.log(arr.lenghth) // 3
   console.log(obj.lenghth) // undefined
   ```

   

4. 배열 표준 method(`push()`, `shift()`, `pop()`등등)는 배열만 인식

   ```javascript
   arr.push(four);	// Complete
   obj.push(four);	// Uncaught TypeError : Object has no method 'push'
   ```



## 배열의 프로퍼티

**배열의 동적 프로퍼티 생성**

```javascript
var arr = ['zero', 'one', 'two'];
arr.name = 'keunsoo';
arr.age = 27;

for(var prop in arr){
	console.log(prop, arr[prop]);
}
/*
0 zero
1 one
2 two
name keunsoo
age 27
*/

for(var i = 0; i<arr.length; i++){
	console.log(i, arr[i]);
}
/*
0 "zero"
1 "one"
2 "two"
*/
```



**배열의 요소 삭제**

delete 연산자로 배열 요소 삭제 후에도 length 값은 변하지 않으며 해당 요소 값을 undefined로 설정 할 뿐 원소 자체를 삭제하지 않음

그래서 보통 <u>배열에서 요소들을 완전히 삭제하는 경우에는 `splice()`배열 method를 사용함</u>

```javascript
var arr = ['zero', 'one', 'two'];

arr.splice(2,1);	// 2번째 요소를 시작접으로 1개의 원소를 삭제한다.
console.log(arr);	// ["zero", "one"]
console.log(arr.lenght);	// 2
```



#### = = (동등) 연산자와 = = = (일치) 연산자

= = 연산자 : 비교하려는 피연산자의 타입이 다를 경우 <u>타입 변환을 거친 다음 비교</u>

**= = =** 연산자 : 피연산자의 타입이 다를 경우 <u>타입을 변경하지 않고 비교</u> (가급적 이거 사용 권장)

```javascript
console.log(1 == '1');	// true
console.log(1 === '1');	// flase
```



#### !! 연산자

!!의 역할은 피연산자를 boolean값으로 변환

```javascript
console.log(!!0);			// false
console.log(!!1);			// true
console.log(!!true);		// true
console.log(!!null);		// false
console.log(!!undefined);	// false
console.log(!!{});			//true
console.log(!!'');			//false
```



# 4 장

## 자바스크립트의 함수

함수를 생성하는 방법 3가지



0. 함수 리터럴 (함수도 객체처럼, 객체 리터럴 방식 사용)

   ```javascript
   function (x, y){
   	return x + y;
   }	// 함수명은 선택사항, 있어도 되고 없어도 됨.
   ```

   

1. #### **함수 선언문** (반드시 함수명 정의)

   ```javascript
   function add(x, y){
   	return x + y;
   }	// 여기서 add는 함수 명
   ```

   <u>마지막 세미콜론 붙이지 않음</u>

   

   **함수 선언문의 유효 범위**

   ```javascript
   add(2, 3);	//5
   function add(x, y){
   	return x + y;
   }
   ```

   유효 범위는 코드의 맨 처음부터 시작함 -> 함수 호이스팅

   

2. #### **함수 표현식**

   ```javascript
   var add = function(x, y){
   	return x + y;
   };
   var plus = add;	//여기서 add는 함수 변수
   ```

   이러한 함수 변수 add만 있고 특정한 함수의 이름이 없는 함수를 **익명 함수** 라고 함

   <u>마지막 세미콜론 붙임</u>

   


   ```javascript
   var add = function sum(x, y){
   	return x + y;
   };
   console.log(add(1,2));	// 3
   console.log(sum(1,2));	// Uncaught ReferenceError : sum is not defined
   ```

   이렇게 함수명을 sum이라고 지정해도 **외부 코드에서 접근이 불가능**

   예를 들어,

   ```javascript
   var factorialVar = function factorial(n){
   	if(n <= 1){
   		return 1;
   	}
   	return n * factorial(n - 1);
   };
   
   console.log(factorialVar(3));	// 6
   console.log(factorial(3));		// Uncaught ReferenceError : factorial is not defined
   ```

   

   **함수 표현식의 유효 범위**

   ```javascript
   add(2, 3);	// uncaught type error
   var add = function (x, y){
   	return x + y;
   }
   ```

   함수 호이스팅이 일어나지 않음.


3. #### **Function() 생성자 함수**

   ```javascript
   var add = new Function('x', 'y', 'return x + y');
   console.log(add(3, 4));
   ```



### 함수 객체의 기본 프로퍼티

1. length 프로퍼티

   ```javascript
   function func1(x,y){
   	return x+y;
   }
   function func2(x,y,z){
   	return x+y+z;
   }
   console.log(func1.length);	// 2
   console.log(func2.length);	// 3
   ```

   함수 객체의 length 프로퍼티는 <u>함수를 작성할 때 정의한 인자 개수</u>를 의미

   

2. prototype 프로퍼티

   ```
   
   ```



### 콜백 함수

```html
<!DOCTYPE html>
<html><body>
	<script>
        window.onload = function(){
            alert('This is the callback function');
        };
    </script>
</body></html>
```



### 즉시 실행 함수

```javascript
(function (name){
	console.log('This is the immediate function ->' + name);
})('foo');
// This is the immediate function -> foo
```

최초 한번의 실행만을 필요로 하는 초기화 코드 부분에 사용



### 내부 함수

```javascript
function parent(){
	var a = 10;
	var b = 20;
	
	function child(){
		var b = 30;
		console.log(a);
		console.log(b);
	}
	
	child();
}

parent();
child();


/* 출력결과
10
30
Uncaught ReferenceError : child is not defined
*/
```



**내부 함수에서는 자신을 둘러싼 부모 함수의 변수에 접근이 가능하다.**

`child()` 내부 함수에 변수 a가 선언 안되어있어도 접근 가능. 내부에 변수 b가 선언되어 있으므로 내부 b 변수 사용.

**내부 함수는 일반적으로 자신이 정의된 부모 함수 내부에서만 호출이 가능하다.**

마지막 `child();`는 부모함수 내부가 아니기 때문에 not defined가 뜸.



### 함수를 리턴하는 함수

```javascript
var self = function(){
	console.log('a');
	return function(){
		console.log('b');
	}
}
self = self();	// a
self();			// b
```

처음 `self()`함수가 호출됐을 때는 'a'가 출력되고 다시 `self` 함수 변수에 `self()`함수 호출 리턴값으로 내보낸 함수가 저장된다.

두번째로 `self()`함수가 호출됐을 때는 내보낸 함수로 저장되어 변경됐기 때문에 'b'가 출력이 된다.  



## 함수 호출과 this

#### 1. arguments 객체

arguments 객체는 세 부분으로 구성, 배열이 아니고 객체이다.

- 함수를 호출할 때 넘겨진 인자 : 첫번째 arg는 0번 index, 두번째 arg는 1번 index
- length 프로퍼티 : 호출할 때 넘겨진 arg의 개수
- callee 프로퍼티 : 현재 실행 중인 함수의 참조값

```javascript
function sum(){
	var result = 0;
	for(var i=0; i<arguments.length; i++){
		result += arguments[i];
	}
	return result;
}

console.log(sum(1,2,3));		//1~3더한값
console.log(sum(1,2,3,4,5,6));	//1~6더한값
```



#### ==2. 호출 패턴과 this 바인딩==

arguments 객체 및 this 인자가 함수 내부로 암묵적으로 전달됨.



##### 가. 객체의 메서드 호출할 때 this 바인딩

```javascript
var myObject = {
	name : 'foo',
	sayName : function(){
		console.log(this.name);
	}
};

var otherObject = {
	name : 'bar'
};

otherObject.sayName = myObject.sayName;

myObject.sayName();		//foo
otherObject.sayName();	//bar
```

객체의 프로퍼티가 함수일 경우, 이 함수를 메서드라 함. 이러한 메서드를 호출할 때, 메서드 내부 코드에서 사용된 this는 <u>해당 메서드를 호출한 객체</u>로 **바인딩**됨.



##### 나. 함수를 호출할 때 this 바인딩

js에서 함수를 호출하면, 해당 함수 내부 코드에서 사용된 <u>this는 전역 객체에 바인딩</u> 된다. 브라우저에서 js를 실행하는 경우 전역 개체는 **window 객체**가 된다.

(Node.js 자바스크립트 런타임 환경에서의 전역 객체는 global 객체가 됨.)

```javascript
var test = 'This is test';
console.log(window.test);	//This is test
console.log(test);			//This is test

var sayFoo = function(){
	console.log(this.test);	// sayFoo() 함수 호출 시 this는 전역 객체에 바인딩 된다!!
}

sayFoo();	//This is test
```



내부 함수의 this 바인딩 동작 예제 코드

```javascript
var value = 100;	//전역 변수 정의

var myObject = {
	value : 1,
	func1 : function(){
		this.value += 1;
		console.log('func1() called this.value :' + this.value);
		
		func2 = funciton(){
			this.value += 1;
			console.log('func2() called this.value :' + this.value);
			
			func3 = function(){
				this.value += 1;
				console.log('func3() called this.value :' + this.value);
			}
			func3();
		}
		func2();
	}
};

myObject.func1();

/*출력결과
func1() called - this.value : 2
func1() called - this.value : 101
func1() called - this.value : 102
*/
```



예제 코드 해결 -> that을 사용함. 변수명을 that으로 해두고 this를 할당하면 객체 value 계속 사용.

```javascript
var value = 100;	//전역 변수 정의

var myObject = {
	value : 1,
	func1 : function(){
		var that = this;
		
		this.value += 1;
		console.log('func1() called this.value :' + this.value);
		
		func2 = funciton(){
			that.value += 1;
			console.log('func2() called this.value :' + that.value);
			
			func3 = function(){
				that.value += 1;
				console.log('func3() called this.value :' + that.value);
			}
			func3();
		}
		func2();
	}
};

myObject.func1();

/*출력결과
func1() called - this.value : 2
func1() called - this.value : 3
func1() called - this.value : 4
*/
```



##### 다. 생성자 함수를 호출할 때 this 바인딩

자바스크립트의 <u>생성자 함수</u>는 <u>기존 함수에 new 연산자를 붙여서 호출</u>하면 <u>해당 함수는 생성자함수로 동작</u>한다.

특정 함수가 생성자 함수로 정의되어 있음을 알리기 위해 <u>함수 이름의 첫 문자</u>를 <u>대문자로 쓰기를 권장</u>한다.



**생성자 함수가 동작하는 방식**

1. 빈 객체 생성 및 this 바인딩

   생성자 함수 코드가 실행되기 전 빈 객체가 생성, 이 객체는 this로 바인딩 되며 생성자 함수 내부에서의 this는 이 빈 객체를 가르킴.

2. this를 통한 프로퍼티 생성

   함수 내부에서 this를 사용하여 동적으로 프로퍼티나 메서드를 생성할 수 있음.

3. 생성된 객체 리턴

   별도의 리턴문이 없을 경우, this로 바인딩 된 새로 생성한 객체가 리턴됨.
   주의 : 생성자 함수가 아닌 일반 함수를 호출할때 리턴값이 명시되어 있지 않으면 undefined가 리턴됨.



##### 객체 리터럴 방식 vs 생성자 함수 = 를 통한 객체 생성 방식의 차이

```javascript
//객체 리터럴 방식
var foo = {
	name : 'keunsoo',
	age : 27,
	gender : 'man'
}

//생성자 함수 방식
function Person(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
}
var bar = new Person('bar', 33, 'woman');

```

객체 리터럴 방식 : 자신의 프로토타입 객체 -> Object(Object.prototype)

생성자 함수 방식 : 자신의 프로토타입 객체 -> Person(Person.prototype)



##### 생성자 함수를 new를 붙이지 않고 호출할 경우

```javascript
function Person(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
}
var qux = Person('qux', 20, 'man');

console.log(qux);			//undefined

console.log(window.name);	//qux
console.log(window.age);	//20
```



new를 붙이지 않고 호출하는 경우를 해결하기 위해, new로 반환된 인스턴스를 사용하게 될 것을 확신하기 위해 js 전문가들은 아래의 별도의 코드 패턴을 사용함.

다음은 강제로 인스턴스 생성하기 예제 코드.

```javascript
function A(arg){
	if(!(this instanceof A))
		return new A(arg);
	this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10);
console.log(a.value);	// 100
console.log(b.value);	// 10
console.log(global.value);	//undefined
```



##### call과 apply 메서드를 이용한 명시적인 this 바인딩

상황에 따른 내부적인 this 바인딩이 아닌 특정 객체에 명시적으로 바인딩을 하게 해주는 함수 객체의 기본 프로퍼티인 `apply()` `call()`메서드는 기능이 같고 넘겨받는 인자의 형식만 다름.

```javascript
function.apply(thisArg, argArray)
```

- `apply()`메서드를 호출하는 주체는 함수.
- 첫번째 인자 `thisArg`는 호출하는 함수 내부에서 사용한 this에 바인딩할 객체를 가르킴.
- 두번째 인자 `argArray`는 함수를 호출할 때 넘길 인자들의 배열을 가르킴.

```javascript
//생성자 함수로 객체 생성
function Person(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
}

//빈 객체 생성
var foo1 = {};
var foo2 = {};

Person.apply(foo1, ['keunsoo', 27, 'man']);		//Person(~~)함수를 호출하면서 this를 foo1 객체에 명시적으로 바인딩
Person.call(foo2, 'keunsoo', 27, 'man');		//Person(~~)함수를 호출하면서 this를 foo2 객체에 명시적으로 바인딩
```



#### 3. 함수 리턴

**자바스크립트 함수는 항상 리턴값을 반환한다.**

1. 일반 함수나 메서드는 리턴값을 지정하지 않을 경우, undefined 값이 리턴된다.

   ```javascript
   var noReturnFunc = function(){
       console.log('This function has no return statement');
   };
   
   var result = noReturnFunc();	//This function has no return statement
   console.log(result);	//undefined
   ```

   

2. 생성자 함수에서 리턴값을 지정하지 않을 경우 생성된 객체가 리턴된다. (앞에서 알아봄)

   하지만, 리턴값을 지정할 경우!

   ```javascript
   function Person(name, age, gender){
       this.name = name;
       this.age = age;
       this,gender = gender;
       
       return {name:'bar', age:20, gender:'woman'};//명시적으로 다른 객체 반환
   }
   
   var foo = new Person('foo', 30, 'man');
   console.log(foo);	//
   ```



## 프로토타입 체이닝

자바스크립트는 객체 지향이 아닌 <u>프로토타입 기반의 객체 지향 프로그래밍</u>을 지원함.

`hasOwnProperty()` 메서드는 이 메서드를 호출한 객체에 인자로 넘긴 문자열 이름의 프로퍼티나 메서드가 있는지 체크하는 자바스크립트 표준 API 함수.



- 객체 리터럴 방식에서의 **프로토타입 체이닝**

```javascript
var obj = {
	name : 'keunsoo',
	sayName : function(){
		console.log('My name is' + this.name);
	}
};

console.log(obj.hasOwnProperty('name'));		//true
console.log(obj.hasOwnProperty('nickname'));	//false
```

객체 리터럴로 생성한 객체는 `Object()`라는 내장 생성자 함수로 생성한 것이므로 `Object()`함수의 prototype 프로퍼티가 가리키는 `Object.prototype` 객체를 자신의 프로토타입 객체로 연결한다. 객체의 프로퍼티나 메서드에 접근하려고 할때 해당 객체에 없다면 <u>`Prototype`링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티를 차례대로 검색하는 것</u>을 **프로토타입 체이닝** 이라고 한다.



- 생성자 함수로 생성된 객체의 **프로토타입 체이닝**

```javascript
function Person(name, age, hobby){
	this.name = name;
    this.age = age;
    this hobby = hobby;
}

var foo = new Person('foo',30, 'tennis');

console.log(foo.hasOwnProperty('name'));	//true
```

foo 객체의 프로토타입 객체는 자신을 생성한 Person 생성자 함수 객체의 prototype 프로퍼티가 가리키는 객체, 즉 `Person.prototype`가 된다. 함수에 연결된 프로토타입 객체는 default로 `constructor` 프로퍼티만을 가진 객체이므로 `hasOwnProperty()`메서드는 찾을 수 없다. 그 다음으로 `Person.prototype` 역시 객체이므로 `Object.prototype`를 프로토타입 객체로 가진다. 결국은 이렇게 **프로토타입 체이닝**을 통해 `hasOwnProperty()`메서드를 찾을 수 있다. 



- 결국 프로토타입 체이닝의 종점은  `Object.prototype`이다. 모든 객체가 호출 가능한 표준 메서드들이 정의 되어있다.
- 기본 데이터 타입에서 사용되는 표준 메서드들의 경우, 이들의 프로토타입인 `Number.prototype`, `String.prototype`, `Array.prototype`등에 정의되어 있다.
- 자바스크립트는 표준 빌트인 프로토타입 객체에도 사용자가 직접 정의한 메서드들을 추가하는것을 허용한다.
- 아래는 `String.prototype`객체에 `testMethod()`메서드를 추가하면 일반 문자열 표준 메서드처럼 모든 문자열에서 접근가능하게 되는 예제이다.

```javascript
String.prototype.testMethod = function(){
    console.log('This is the String.prototype.testMethod()');
};

var str = "This is test";
str.testMethod();

console.dir(String.prototype);
```



- **프로토타입도 자바스크립트 객체다.**

```javascript
// Person() 생성자 함수
function Person(name){
	this.name = name;
}

// foo 객체 생성
var foo = new Person('foo');

//Person.prototype 객체에 sayHello() 메서드 정의
Person.prototype.sayHello = function(){
	console.log('Hello');
}

foo.sayHello();	//  Hello
```

프로토타입 객체 역시 자바스크립트 객체이므로 일반 객체처럼 동적으로 프로퍼티를 추가/삭제하는 것이 가능하다.



- **프로토타입 메서드와 this 바인딩**

프로토타입 객체는 메서드를 가질 수 있고, 이를 프로토타입 메서드라고 부를 것임.

프로토타입 메서드 내부에서 this를 사용한다면 이는 어디에 바인딩 될까?

Person.prototype.getName() 호출 시 this 바인딩 => Person.prototype 객체

foo.getName() 호출 시 this 바인딩 => foo 객체

```javascript
// Person() 생성자 함수
function Person(name){
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;
}

// foo 객체 생성
var foo = new Person('foo');

console.log(foo.getName());	// foo

//Person.prototype 객체에 name 프로퍼티 동적 추가
Person.prototype.name = 'person';

console.log(Person.prototype.getName());	// person
```



- **디폴트 르포로타입은 다른 객체로 변경이 가능**

```javascript
// Person() 생성자 함수
function Person(name){
    this.name = name;
}
console.log(Person.prototype.constructor); //Person(name)

// foo 객체 생성
var foo = new Person('foo');
console.log(foo.country); // undefined

// 디폴트 프로토타입 객체 변경
Person.prototype = {
    country : 'korea'
};
console.log(Person.prototype.constructor); // Object()

// bar 객체 생성
var bar = new Person('bar');
console.log(foo.country);		//undefined
console.log(bar.country);		//korea
console.log(foo.constructor);	//Person(name)
console.log(bar.constructor);	//Object()
```

Person() 생성자 함수 생성 ------ Person.prototype 객체 (프로퍼티로  constructor 가짐) ------- Object.prototype 객체 (프로퍼티로  constructor 가짐)

foo 객체 생성 ------- Person.prototype 객체 (프로퍼티로  constructor 가짐) ------- Object.prototype 객체 (프로퍼티로  constructor 가짐)

디폴트 프로토타입 객체인 Person.prototype 객체 변경 (프로퍼티로 country 가짐)

bar 객체 생성 ------- Person.prototype 객체 (프로퍼티로 country 가짐) ------- Object.prototype 객체 (프로퍼티로  constructor 가짐)



- **객체의 프로퍼티 읽기나 메서드를 실행할 때만 프로토타입 체이닝이 동작한다**

```javascript
// Person() 생성자 함수
function Person(name){
    this.name = name;
}

Person.prototype.country = 'Korea';

var foo = new Person('foo');
var bar = new Person('bar');
console.log(foo.country);	//Korea
console.log(bar.country);	//Korea
foo.country = 'USA';

console.log(foo.country);	//USA
console.log(bar.country);	//Korea
```

처음 foo나 bar 객체에는 name 프로퍼티 밖에 없으므로 프로토타입 체이닝이 이뤄지면서 country 프로퍼티값을 가져옴

foo 객체에 country 프로퍼티 동적생성

나중에 foo 객체에는 country 프로퍼티가 있으므로 프로토타입 체이닝 없이 바로 USA가 출력됨.





# 5 장 - 실행 컨텍스트와 클로저

#### 실행 컨텍스트

```javascript
console.log("This is global context");

function ExContext1(){
    console.log("This is ExContext1");
};

function ExContext2(){
    ExContext1();
    console.log("This is ExContext2");
};

ExContext2();
/*
This is global context
This is ExContext1
This is ExContext2
/*
```

실행 컨텍스트 스택에는

전역 컨텍스트

전역 컨텍스트 over ExContext2

전역 컨텍스트 over ExContext2 over ExContext1

전역 컨텍스트 over ExContext2 - ExContext1반환

전역 컨텍스트 - ExContext2 반환

전역 컨켁스트 반환



#### 브라우저 vs Node.js

```javascript
var a = 10;
b = 15;
console.log(window.a);	// 10
console.log(window.b);	// 15
```

브라우저에서는 최상위 코드가 곧 전역 코드이다. var로 정의한 변수 a가 전역 객체인 window의 한 프로퍼티로 들어갔다.



```javascript
var a = 10;
b = 15;
console.log(global.a);	// undefined
console.log(global.b);	// 15
```

Node.js에서는 하나의 js파일이 하나의 모듈로 동작하고 최상위에 변수를 선언해도 그 모듈의 지역 변수가 된다. 하지만 var을 사용하지 않을 경우 전역 객체인 global의 한 프로퍼티로 들어간다. 주의, 전역 객체를 오염시키는 원인이 될 수 있음.



#### 클로저

###### 클로저의 사용 이유.

이처럼 클로저는 <u>현재 상태를 기억하고 이 상태가 변경되어도 최신 상태를 유지해야 하는 상황에 매우 유용</u>하다. 만약 자바스크립트에 클로저라는 기능이 없다면 상태를 유지하기 위해 전역 변수를 사용할 수 밖에 없다. <u>전역 변수는 언제든지 누구나 접근할 수 있고 변경할 수 있기 때문에 많은 부작용을 유발해 오류의 원인이 되므로 사용을 억제해야</u> 한다.



###### 클로저 설명.

```javascript
function outerFunc(){
    var x = 10;	// 자유 변수(Free variable)
    
    var innerFunc = function(){	// 함수 전체 => 클로저
        console.log(x);
    }
    
    return innerFunc;
}
var inner = outerFunc();

inner();	// 10
```

이미 생명 주기가 끝난 외부 함수의 변수를 참조하는 함수를 **클로저** 라고 한다.

클로저로 참조되는 외부 변수를 **자유 변수** 라고 한다.



간단한 사용 예시 :

```javascript
function outerFunc(arg1, arg2){
    var local = 10;	
    function innerFunc(innerArg){
        console.log((arg1 + arg2)/(innerArg + local));
    }
    return innerFunc;
}
var exam1 = outerFunc(2,4)
exam1(2);	// (2+4)/(2+8)
```



### 클로저의 활용

1. #### 전역 변수의 사용 억제

```html
<!DOCTYPE html>
<html>
<body>
  <p>전역 변수를 사용한 Counting</p>
  <button id="inclease">+</button>
  <p id="count">0</p>
  <script>
    var incleaseBtn = document.getElementById('inclease');
    var count = document.getElementById('count');

    // 카운트 상태를 유지하기 위한 전역 변수
    var counter = 0;

    function increase() {
      return ++counter;
    }

    incleaseBtn.onclick = function () {
      count.innerHTML = increase();
    };
  </script>
</body>
</html>
```

위 코드는 잘 동작하지만 오류 발생 가능성 有. 전역 변수 counter의 값이 처음 무조건 0이여야함. increase 함수의 지역 변수로 바꿔야함.



2. #### 지역 변수의 사용

```html
<!DOCTYPE html>
<html>
<body>
  <p>지역 변수를 사용한 Counting</p>
  <button id="inclease">+</button>
  <p id="count">0</p>
  <script>
    var incleaseBtn = document.getElementById('inclease');
    var count = document.getElementById('count');

    function increase() {
      // 카운트 상태를 유지하기 위한 지역 변수
      var counter = 0;
      return ++counter;
    }

    incleaseBtn.onclick = function () {
      count.innerHTML = increase();
    };
  </script>
</body>
</html>
```

하지만 increase 함수 호출될때마다 counter를 0으로 초기화하기 때문에 언제나 1료 포기됨. 변경된 이전 상태를 기억하지 못함 => 클로저 사용



3. #### 클로저 사용

```html
<!DOCTYPE html>
<html>
  <body>
  <p>클로저를 사용한 Counting</p>
  <button id="inclease">+</button>
  <p id="count">0</p>
  <script>
    var incleaseBtn = document.getElementById('inclease');
    var count = document.getElementById('count');

    var increase = (function () {
      // 카운트 상태를 유지하기 위한 자유 변수
      var counter = 0;
      // 클로저를 반환
      return function () {
        return ++counter;
      };
    }());

    incleaseBtn.onclick = function () {
      count.innerHTML = increase();
    };
  </script>
</body>
</html>
```

변수 increase에는 함수 function(){return ++counter;} 가 할당됨. 이 함수는 자신이 생성됐을 때의 렉시컬 환경(Lexical environment)을 기억하는 클로저. 



4. #### 클로저 사용 2 - 독립적 렉시컬 환경

```javascript
function makeCounter(predicate) {
  // 카운트 상태를 유지하기 위한 자유 변수
  var counter = 0;
  // 클로저를 반환
  return function () {
    counter = predicate(counter);
    return counter;
  };
}

// 보조 함수
function increase(n) {
  return ++n;
}

// 보조 함수
function decrease(n) {
  return --n;
}

// 함수로 함수를 생성한다.
// makeCounter 함수는 보조 함수를 인자로 전달받아 함수를 반환한다
const increaser = makeCounter(increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

// increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다.
const decreaser = makeCounter(decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2
```

함수 makeCounter는 보조 함수를 인자로 전달받고 함수를 반환하는 고차 함수이다. 함수 makeCounter가 반환하는 함수는 자신이 생성됐을 때의 렉시컬 환경인 함수 makeCounter의 스코프에 속한 변수 counter을 기억하는 클로저다. 함수 makeCounter는 인자로 전달받은 보조 함수를 합성하여 자신이 반환하는 함수의 동작을 변경할 수 있다. 이때 주의해야 할 것은 함수 makeCounter를 호출해 함수를 반환할 때 반환된 함수는 자신만의 독립된 렉시컬 환경을 갖는다는 것이다. 이는 함수를 호출하면 그때마다 새로운 렉시컬 환경이 생성되기 때문이다. 위 예제에서 변수 increaser와 변수 decreaser에 할당된 함수는 각각 자신만의 독립된 렉시컬 환경을 갖기 때문에 카운트를 유지하기 위한 자유 변수 counter를 공유하지 않아 카운터의 증감이 연동하지 않는다. 따라서 독립된 카운터가 아니라 연동하여 증감이 가능한 카운터를 만들려면 렉시컬 환경을 공유하는 클로저를 만들어야 한다.



5. #### 정보의 은닉 - 공유하는 렉시컬 환경

```javascript
function Counter() {
  // 카운트를 유지하기 위한 자유 변수
  var counter = 0;

  // 클로저
  this.increase = function () {
    return ++counter;
  };

  // 클로저
  this.decrease = function () {
    return --counter;
  };
}

const counter = new Counter();

console.log(counter.increase()); // 1
console.log(counter.decrease()); // 0
```

생성자 함수 Counter는 increase, decrease 메소드를 갖는 인스턴스를 생성한다. 이 메소드들은 모두 자신이 생성됐을 때의 렉시컬 환경인 생성자 함수 Counter의 스코프에 속한 변수 counter를 기억하는 클로저이며 렉시컬 환경을 공유한다. 생성자 함수가 함수가 생성한 객체의 메소드는 객체의 프로퍼티에만 접근할 수 있는 것이 아니며 자신이 기억하는 렉시컬 환경의 변수에도 접근할 수 있다.

이때 생성자 함수 Counter의 변수 counter는 this에 바인딩된 프로퍼티가 아니라 변수다. counter가 this에 바인딩된 프로퍼티라면 생성자 함수 Counter가 생성한 인스턴스를 통해 외부에서 접근이 가능한 `public` 프로퍼티가 되지만 생성자 함수 Counter 내에서 선언된 변수 counter는 생성자 함수 Counter 외부에서 접근할 수 없다. 하지만 생성자 함수 Counter가 생성한 인스턴스의 메소드인 increase, decrease는 클로저이기 때문에 자신이 생성됐을 때의 렉시컬 환경인 생성자 함수 Counter의 변수 counter에 접근할 수 있다. 이러한 클로저의 특징을 사용해 클래스 기반 언어의 `private` 키워드를 흉내낼 수 있다.



6. #### 자주 발생하는 실수

```javascript
var arr = [];

for (var i = 0; i < 5; i++) {
    arr[i] = function () {
        return i;
  };
}

for (var j = 0; j < arr.length; j++) {
    console.log(arr[j]());
}
```

5만 다섯 번 출력 됨. 클로져가 반환되기 전에 이미 i 가 5로 되면서 arr[]배열에 모두 5가 들어가짐.

<u>let 키워드</u>를 사용하면서 <u>클로저</u>를 사용해보자

```javascript
const arr = [];

for (let i = 0; i < 5; i++) {
    arr[i] = function () {
        return i;
  };
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]());
}
```

또는 함수형 프로그래밍 기법인 고차 함수를 사용해보자

```javascript
const arr = new Array(5).fill();

arr.forEach((v, i, array) => array[i] = () => i);

arr.forEach(f => console.log(f()));
```



#### let, const, var 차이점

- `var`은 함수 레벨 스코프이고, `let`, `const`는 블럭 레벨 스코프이다.
- `var`로 선언한 변수는 선언 전에 사용해도 에러가 나지 않지만, `let`과 `const`는 에러가 발생한다.
- `var`, `let`은 변수 선언시 초기 값을 주지 않아도 되지만 `const`는 반드시 초기 값을 할당해야 한다.
- [`let`과 `const` ]는 `var`과 다르게 **변수 재선언이 불가능** 하다.
- `let`은 변수에 재할당이 가능하지만,  `const`는 변수 재선언, 재할당 모두 불가능하다.



#### setTimeout()에 지정되는 함수의 사용자 정의

```javascript
function callLater(obj, a, b) {
  return function () {
    obj["sum"] = a + b;
    console.log(obj["sum"]);
  };
}

var sumObj = {
  sum: 0,
};

var func = callLater(sumObj, 1, 2);
setTimeout(func, 500);
```

setTimeout() 함수의 첫번째 인자 : 함수, 두번째 인자 ; 밀리 초 단위 숫자만큼의 시간 간격으로 해당 함수 호출



#### 루프 안에서 클로저 및 let 사용 (setTimeout 사용법)

```javascript
function countSeconds(howMany){
    for(let i = 1; i <= howMany; i++){
        setTimeout(function(){
            console.log(i);
        }, i * 1000);
    }
};
countSeconds(3);
```





# 6 장

## 객체 지향 프로그래밍

```javascript
function Person(arg){
    this.name = arg;
    this.getName = function(){
        return this.name;
    }
    this.setName = function(value){
        this.name = value;
    }
}
var me = new Person("KeunSoo");
console.log(me.getName());	// KeunSoo

me.setName("KS");
console.log(me.getName());	// KS
```

함수 Person이 클래스이자 생성자의 역할을 함. `var me = new Person("me")`, `var you = new Person("you")` 이런식으로 여러 객체 생성이 가능하고 잘 동작을 하나 이는 불필요하게 중복되는 영역을 메모리에 올려놓고 사용함. 이를 해결하기 위해 함수의 프로토타입 객체를 사용함

```javascript
function Person(arg){
    this.name = arg;
}
Person.prototype.getName = function(){
    return this.name;
}
Person.prototype.setName = function(value){
    this.name = value;
}

var me = new Person("me");
var you = new Person("you");
console.log(me.getName());		// me
console.log(you.getName());		// you
```

메서드를 정의하는 방법으로 최종적으로 구성한다면,

```javascript
Function.prototype.method = function(name, func){
    this.prototype[name] = func;
}

function Person(arg){
    this.name = arg;
}
Person.method("setName",function(value){
    this.name = value;
});
Person.method("getName",function(){
    return this.name;
});

var me = new Person("me");
var you = new Person("you");
console.log(me.getName());		// me
console.log(you.getName());		// you
```



## 상속

자바스크립트는 클래스를 기반으로 하는 전통적인 상속을 지원하지 않는다. 하지만 객체 프로토타입 체인을 이용하여 상속을 구현해낼 수 있다.

1. 클래스 개념 없이 객체의 프로토타입으로 상속을 구현 - 프로토타입을 이용한 상속(Prototypal Inheritance)
2. 클래스 기반 전통적인 상속 방식 흉내



#### 프로토타입을 이용한 상속

ECMAScript 5에서 `Object.create()`함수로 제공됨. 이런 함수를 풀어보면

```javascript
function create_object(o){
    function F(){}
    F.prototype = o;
    return new F();
}
```

빈 함수 객체 F를 만들고, F.prototype 프로퍼티에 인자로 들어온 객체(o)를 참조하고, 함수 객체 F를 생성자로 하는 새로운 객체를 만들어 반환한다.



`Object.create()`를 사용하여 구현하면,

```javascript
var person = {
    name : "keunsoo",
    getName : function(){
        return this.name;
    },
    setName : function(arg){
        this.name = arg;
    }
};

var student = Object.create(person);

student.setName("me");
console.log(student.getName());	//	me
```



지금까지는 부모 객체의 메서드를 그대로 상속받아 사용하는 방법. 하지만 여기에서 자식은 자신의 메서드를 동적 추가 또는 확장 가능해야함.

```javascript
student.setAge = function(age){ . . . }
student.getAge = function(){ . . . }
```

요런식으로 확장시킬 수는 있으나 코드가 지저분해짐. 



jQuery의 extend() 함수를 풀어보면,

```javascript
jQuery.extend = jQuery.fn.extend = function(obj, prop){
    if(!prop) {prop = obj; obj = this;}
    for(var i in prop) obj[i] = prop[i];
    return obj;
};
```

`jQuery.fn`은 `jQuery.prototype`이다. 따라서 첫줄은 jQuery 함수 객체와 jQuery 함수 객체의 인스턴스 모두 extend 함수에 넣겠다라는 의미.  즉, `jQuery.extend()`로 호출할 수도 있고, `var elem = new jQuery(..); elem.extend();`의 형태로도 호출할 수 있음.

두번째 줄은 extend 함수 인자가 하나만 들어오는 경우에는 현재 객체(this)에 인자로 들어오는 객체의 프로퍼티를 복사함을 의미, 두개가 들어오는 경우에는 첫 번째 객체에 두번째 객체의 프로퍼티를 복사하겠다는 것을 뜻한다.

세번째 줄은 루프를 돌면서 prop의 프로퍼티를 obj로 복사한다.



이제 extend()함수를 사용하여 작성하면,

```javascript
var person = {
    name : "keunsoo",
    getName : function(){
        return this.name;
    },
    setName : function(arg){
        this.name = arg;
    }
};

var student = Object.create(person);
var added = {
    setAge : function(age){
        this.age = age;
    },
    getAge : function(){
        return this.age;
    }
};
extend(student, added);

student.setAge(25);
console.log(student.getAge());
```

최종적으로 Person의 객체에는 name, setName, getName  프로퍼티가 있고 Person을 Prototype을 이용한 상속을 한 Student의 객체에는 age, setAge, getAge 프로퍼티가 있다.



#### 클래스 기반의 상속

```javascript
function Person(arg){
    this.name = arg;
}
Person.prototype.setName = function(vlaue){
    this.name = value;
};
Person.prototype.getName = function(){
    return this.name;
};
function Student(arg){
}

var you = new Person("Justin");
Student.prototype = you;

var me = new Student("KeunSoo");
me.setName =("KeunSoo");
console.log(me.getName());
```

![image-20200828172042266](README%20assets/image-20200828172042266.png)

결국 생성된 me객체는 빈 객체임.  마지막 두번째 setName이 호출되어야 me객체에 name 프로퍼티가 만들어짐. 이렇게 부모의 생성자가 호출되지 않으면 안됨. 따라서 Student함수를 수정한다.

```javascript
function Person(arg){
    this.name = arg;
}
Person.prototype.setName = function(vlaue){
    this.name = value;
};
Person.prototype.getName = function(){
    return this.name;
};
function Student(arg){
    Person.apply(this, arguments)
}

var you = new Person("Justin");
Student.prototype = you;

var me = new Student("KeunSoo");
me.setName =("KeunSoo");
console.log(me.getName());
```

STudent 함수 안에서 새롭게 생성된 객체를 `apply()` 함수의 첫 번째 인자로 넘겨 Person 함수를 실행시킨다. 하지만 이또한 부모 클래스의 인스턴스와 자식 클래스의 인스턴스는 서로 독립적일 필요가 있다. 두 클래스 프로토타입 사이에 중개자를 하나 만들어보자.



```javascript
function Person(arg){
    this.name = arg;
}
Function.prototype.method = function(name, func){
    this.prototype[name] = func;
}
Person.method("setName", function(value){
    this.name = value;
});
Person.method("getName", function(){
    return this.name;
});
function Student(arg){
}
function F(){};

F.prototype = person.prototype;
Student.prototype = new F();
Student.prototype.constructor = Student;
Student.super = Person.prototype;

var me = new Student();
me.setName("keunsoo");
console.lgo(me.getName());
```

![image-20200828175111684](README%20assets/image-20200828175111684.png)

빈 함수의 객체를 중간에 두어 Person과 Student를 독립적으로 생성함.

상속관계를 즉시 실행 함수와 클로저를 활용한 최적화된 함수

```javascript
var inherit = function(Parent, Child){
    var F = function(){};
    return function(Parent, Child){
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.super = Parent.prototype;
    };
}();
```



# 7 장

## 함수형 프로그래밍