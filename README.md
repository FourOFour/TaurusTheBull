<p align="center"><img src="https://camo.githubusercontent.com/e1a54ddebc870cb971c713b20765f1c2ed328efff836eebe3c2bafccbc12bb0a/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f3334342f6a6176617363726970742e706e67" width="100px" alt="JS"></p>

<h1 align="center"> Welcome to javascript-exercise-404</h1>

#### This is a place that I will put all my javascript exercises in, which safe to say mainly is involved writing a function or a programmer to answer a qesution or challange,I mainly made this repository for exercies purpose so feel free to join in / contribute, send or make a challange.

<br>

## Categories 

* [**String**](#String)
    * [w3resource - Exercises, Practice, Solution](https://www.w3resource.com/javascript-exercises/javascript-string-exercises.php)

___
<br>

<h2 id="String"><b>String</b></h2>

**1.** Write a JavaScript function to check whether an `input` is a string or not.

**Test Data :**

```js
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false
```
My first thought is to go with **:**

```js
function is_string(v) {
    return typeof v === "string";
}
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));
```
Which resulted **:**

```js
true
false
```

But in the <a href="https://www.w3resource.com/javascript-exercises/javascript-string-exercise-1.php">solution</a> page it used the following method **:**

```js
is_string = function(input) {
    if (Object.prototype.toString.call(input) === '[object String]')
        return true;
    else
        return false;   
};
```
Which is smart method, because it can catches strings that was made by ` new String() `
