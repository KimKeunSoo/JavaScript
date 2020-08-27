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





















