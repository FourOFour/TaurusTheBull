<p align="center"><img src="https://camo.githubusercontent.com/e1a54ddebc870cb971c713b20765f1c2ed328efff836eebe3c2bafccbc12bb0a/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f3334342f6a6176617363726970742e706e67" width="100px" alt="JS"></p>

<h1 align="center"> Welcome to javascript-exercise-404</h1>

#### This is a place that I will put some of my javascript exercises in, which is safe to say, this is involved writing a function or a programmer to answer a qesution or challange,I made this repository for exercies purpose so feel free to join in / contribute, send or make a challange.

<br>

## Categories 

* [**String**](#String)
    * [w3resource - Exercises, Practice, Solution](https://www.w3resource.com/javascript-exercises/javascript-string-exercises.php)

<hr>
<br>

<h2 id="String"><b>String</b></h2>

**1.** Write a JavaScript function to check whether an **input** is a string or not.

**Test Data :**

```js
console.log(is_string('w3resource')); // true
console.log(is_string([1, 2, 4, 0])); // false
```

<br>

**My Answer**

My first thought is to go with **:**

```js
function is_string(v) {
    return typeof v == "string";
    /*
    *   Since 'typeof v' only returns a string value it would just do ===  
    */
}
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));
```

Which had the following result **:**

```js
true
false
```

<br>

**Provided Solution**

But in the [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-1.php) page it used the following method **:**

```js
is_string = function(input) {
    if (Object.prototype.toString.call(input) === '[object String]')
        return true;
    else
        return false;   
};
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));
```
Which had the following result **:**

```js
true
false
```

Which is smart method, because it can catches strings that was created by `new String()`, But i would say why make `Object` out of **Primitive Value** and also we are getting a **value** from **input**, So i dont think we are ever going to run into that problem.

You can test the following code for both method to understand this part **:**

```js
console.log(is_string(new String('Why?')));
```

<hr>
<br>

**2.** Write a JavaScript function to check whether a string is **blank** or not.

**Test Data :**

```js
console.log(is_Blank('')); // true
console.log(is_Blank('abc')); // false
```

<br>

**My Answer**

My first thought is to go with **:**

```js
function is_Blank(v) {
    return v.length == 0;
    /*
    *   If v.length is undefined still would get false
    *   If not both side will be number so it would just do ===
    */
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));
```

Which had the following result **:**

```js
true
false
```

Have in mind im not checking for **type** of the `v`, just trusting that the question will always provide string as argument.

If i wanted to make sure `v` is string it would go as the following code **:**

```js
function is_Blank(v) {
    if (typeof v == 'string') 
        return v.length == 0;
    else 
        console.log('WHY?!'); // handling the wrong type
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));
```

<br>

**Provided Solution**

[**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-2.php)**:**

```js
is_Blank =  function(input) {
    if (input.length === 0)
        return true;
    else 
        return false;
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));
```

Which had the following result **:**

```js
true
false
```

<hr>
<br>

**3.** Write a JavaScript function to split a string and convert it into an array of words.

**Test Data :**

```js
console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]
```

<br>

**My Answer**

My first thought is to go with **:**

```js
function string_to_array(v) {
    return v.split(' ');
}
console.log(string_to_array("Robin Singh"));
```

Which had the following result **:**

```js
['Robin', 'Singh']
```

But it did come to my mind since i am spliting a string base on `white-space` maybe i should make sure there is nothing at the end or start of the string aswel.

It went as the following code **:**

```js
function string_to_array(v) {
    return v.trim().split(' ');
}
console.log(string_to_array("  Robin Singh "));
```

Also lets do extra version with `RegExp` while i am at it.

```js
function string_to_array(v) {
    return v.replace(/^\s*|\s*$/g, '').split(/\s/);
}
console.log(string_to_array("  Robin Singh "));
```

Which both had the following result **:**

```js
['Robin', 'Singh']
```

<br>

**Provided Solution**

[**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-3.php)**:**

```js
string_to_array = function (str) {
     return str.trim().split(" ");
};
console.log(string_to_array("Robin Singh"));
```

Which had the following result **:**

```js
["Robin","Singh"]
```

<hr>
<br>

**4.** Write a JavaScript function to extract a specified number of characters from a string.

**Test Data :**

```js
console.log(truncate_string("Robin Singh",4)); // "Robi"
```

<br>

**My Answer**

My first thought is to go with **:**

```js
function truncate_string(v, i) {
    return v.substring(0, i);
}
console.log(truncate_string("Robin Singh",4));
```

Or

```js
function truncate_string(v, i) {
    return v.slice(0, i);
}
console.log(truncate_string("Robin Singh",4));
```

Which both had the following result **:**

```js
"Robi"
```

And if we want to do it with `RegExp`, it would go as the following code **:**

```js
function truncate_string(v, i) {
    return v.match('^(.|\n){' + i + '}')[0]; // any character except newline Or newline 'i' times
}
console.log(truncate_string("Robin Singh",4));
```

Which also had the following result **:**

```js
"Robi"
```

<br>

**Provided Solution**

[**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-4.php)**:**

```js
truncate_string = function (str1, length) {
    if ((str1.constructor === String) && (length>0)) {
        return str1.slice(0, length);
    }
};
console.log(truncate_string("Robin Singh",4));
```

Which had the following result **:**

```js
"Robi"
```

Got to say, nice way to check the type `str1.constructor === String`, Base on the question it self i am not sure about `length>0` to not return empty string.
