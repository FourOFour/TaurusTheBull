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

1. Write a JavaScript function to check whether an **input** is a string or not.

    **Test Data :**

    ```js
    console.log(is_string('w3resource')); // true
    console.log(is_string([1, 2, 4, 0])); // false
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

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

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

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

    </details>

    <hr>
    <br>

2. Write a JavaScript function to check whether a string is **blank** or not.

    **Test Data :**

    ```js
    console.log(is_Blank('')); // true
    console.log(is_Blank('abc')); // false
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

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

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

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

    </details>

    <hr>
    <br>

3. Write a JavaScript function to split a string and convert it into an array of words.

    **Test Data :**

    ```js
    console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

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

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

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

    </details>

    <hr>
    <br>

4. Write a JavaScript function to extract a specified number of characters from a string.

    **Test Data :**

    ```js
    console.log(truncate_string("Robin Singh",4)); // "Robi"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

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
        return v.match('^(.|\n){' + i + '}')[0]; // (any character except newline Or newline) 'i' times
    }
    console.log(truncate_string("Robin Singh",4));
    ```

    Which also had the following result **:**

    ```js
    "Robi"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

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

    </details>

    <hr>
    <br>

5. Write a JavaScript function to convert a string in abbreviated form.

    **Test Data :**

    ```js
    console.log(abbrev_name("Robin Singh")); // "Robin S."
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was what is the proper way to do **abbreviated form**, With a some help from google and the expected answer, I went with the following code **:**

    ```js
    function abbrev_name(v) {
        let arr = v.trim().split(' ');

        if (arr.length > 1)
            return arr[0] + ' ' + arr[1].charAt(0) + '.';
        else
            return arr[0];
    }
    console.log(abbrev_name("Robin Singh"));
    console.log(abbrev_name("Robin "));
    ```

    Which had the following result **:**

    ```js
    "Robin S."
    "Robin"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-5.php)**:**

    ```js
    abbrev_name = function (str1) {
        var split_names = str1.trim().split(" ");
        if (split_names.length > 1) {
            return (split_names[0] + " " + split_names[1].charAt(0) + ".");
        }
        return split_names[0];
    };
    console.log(abbrev_name("Robin Singh"));
    ```

    Which had the following result **:**

    ```js
    "Robin S."
    ```

    </details>

    <hr>
    <br>

6. Write a JavaScript function to hide email addresses to protect from unauthorized user.

    **Test Data :**

    ```js
    console.log(protect_email("robin_singh@example.com")); // "robin...@example.com"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was how many words should i trim ? or how many words should it be at max on left hand side of **@**? i could go static ( 1 to 5 ) character max or divide that ( 2 or 3 ), I will just go with static one first then just refine it. **:**

    ```js
    function protect_email(v) {
        var arr;

        arr = v.split('@');

        return arr[0].slice(0, arr[0].length > 5 ? 5 : 1) + '...' + '@' + arr[1];
    }
    console.log(protect_email("robin_singh@example.com"));
    ```

    Which had the following result **:**

    ```js
    "robin...@example.com"
    ```

    Now lets refine it a bit **:**

    ```js
    function protect_email(v) {
        const regex = /^.+@.+$/; // make sure it's email (simple one ofc)
        var arr;

        if (regex.test(v)) {
            arr = v.trim().split('@');

            return arr[0].slice(0, arr[0].length / 2) + '...@' + arr[1];
        } else {
            return 'ERROR';
        }
    }
    console.log(protect_email("robin_singh@example.com"));
    ```

    How about a RegExp version **:**

    ```js
    function protect_email(v) {
        const regex = /^(.+)@(.+)$/; // Now we use capturing groups
        var execVal;

        if (regex.test(v)) {
            execVal = regex.exec(v.trim());

            return execVal[1].slice(0, execVal[1].length / 2) + '...@' + execVal[2];
        } else {
            return 'ERROR';
        }
    }
    console.log(protect_email("robin_singh@example.com"));
    ```

    Which both had the following result **:**

    ```js
    "robin...@example.com"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-6.php)**:**

    ```js
    protect_email = function (user_email) {
        var avg, splitted, part1, part2;
        
        splitted = user_email.split("@");
        part1 = splitted[0];
        avg = part1.length / 2;
        part1 = part1.substring(0, (part1.length - avg));
        part2 = splitted[1];
        
        return part1 + "...@" + part2;
    };
    console.log(protect_email("robin_singh@example.com"));
    ```

    Which had the following result **:**

    ```js
    "robin...@example.com"
    ```

    It does uses more variables but also it makes it reasier to read aswel.

    </details>

    <hr>
    <br>

7. Write a JavaScript function to parameterize a string.

    **Test Data :**

    ```js
    console.log(string_parameterize("Robin Singh from USA.")); // "robin-singh-from-usa"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was, okay lets google parameterize, then rest was as following **:**

    ```js
    function string_parameterize(v) {
        let regex = /[^\w -]/g,
            regex2 = /\s/g;
        
        // capture anything we don't want with 'regex', and all white-space with regex2
        
        return v.trim().toLowerCase().replace(regex, '').replace(regex2, '-');
    }
    console.log(string_parameterize("Robin Singh from USA."));
    ```

    Which had the following result **:**

    ```js
    "robin-singh-from-usa"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-7.php)**:**

    ```js
    string_parameterize = function (str1) {
        return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
    };
    console.log(string_parameterize("Robin Singh from USA."));
    ```

    Which had the following result **:**

    ```js
    "robin-singh-from-usa"
    ```

    </details>

    <hr>
    <br>

8. Write a JavaScript function to capitalize the first letter of a string.

    **Test Data :**

    ```js
    console.log(capitalize('js string exercises')); // "Js string exercises"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function capitalize(v) {
        return v.charAt(0).toUpperCase() + v.slice(1);
    }
    console.log(capitalize('js string exercises'));
    ```

    Which had the following result **:**

    ```js
    "Js string exercises"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-8.php)**:**

    ```js
    capitalize = function(str1){
        return str1.charAt(0).toUpperCase() + str1.slice(1);
    }        
    console.log(capitalize('js string exercises'));    
    ```

    Which had the following result **:**

    ```js
    "Js string exercises"
    ```

    </details>

    <hr>
    <br>

9. Write a JavaScript function to capitalize the first letter of each word in a string.

    **Test Data :**

    ```js
    console.log(capitalize_Words('js string exercises')); // "Js String Exercises"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function capitalize_Words(v) {
        let regex = /\b\w+\b/g;

        return v.replace(regex, function(match) {
            return match.charAt(0).toUpperCase() + match.slice(1);
        });
    }
    console.log(capitalize_Words('js string exercises'));
    ```

    Which had the following result **:**

    ```js
    "Js String Exercises"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-9.php)**:**

    ```js
    //capitalize_Words 
    function capitalize_Words(str)
    {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
    console.log(capitalize_Words('js string exercises'));
    ```

    Which had the following result **:**

    ```js
    "Js String Exercises"
    ```

    Got to say `/\w\S*/g` compare to my `/\b\w+\b/g`, is a nice touch.

    </details>

    <hr>
    <br>
