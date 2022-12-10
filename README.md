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
    console.log(is_string('w3resource'));
    console.log(is_string([1, 2, 4, 0]));
    ```

    ```js
    true
    false
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
    console.log(is_Blank(''));
    console.log(is_Blank('abc'));
    ```

    ```js
    true
    false
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
    console.log(string_to_array("Robin Singh"));
    ```

    ```js
    ['Robin', 'Singh']
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
    console.log(truncate_string("Robin Singh",4));
    ```

    ```js
    "Robi"
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
    console.log(abbrev_name("Robin Singh"));
    ```

    ```js
    "Robin S."
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
    console.log(protect_email("robin_singh@example.com"));
    ```

    ```js
    "robin...@example.com"
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
    console.log(string_parameterize("Robin Singh from USA."));
    ```

    ```js
    "robin-singh-from-usa"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was, okay lets google parameterize, then rest was as following **:**

    ```js
    function string_parameterize(v) {
        const regex = /[^\w -]/g;
        const regex2 = /\s/g;
        
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
    console.log(capitalize('js string exercises')); 
    ```

    ```js
    "Js string exercises"
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
    console.log(capitalize_Words('js string exercises'));
    ```

    ```js
    "Js String Exercises"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function capitalize_Words(v) {
        const regex = /\b\w+\b/g;

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

10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.

    **Test Data :**

    ```js
    console.log(swapcase('AaBbc'));
    ```

    ```js
    "aAbBC"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was, okay now we are talking **:**

    ```js
    function swapcase(v) {
        const regex = /([a-z]+)|([A-Z]+)/g; // using capturing group to find out if its lowercase or uppercaser

        return v.replace(regex, function(match, p1, p2) {
            // if p1 is 'undefined' its uppercase (means p2 is not), otherwise its lowercase
            /*
            * p1 is '([a-z]+)'
            * p2 is '([A-Z]+)'
            * since its 'Or' condition one of them always is undefined
            */
            return p1 ? match.toUpperCase() : match.toLowerCase();
        });
    }
    console.log(swapcase('AaBbc'));
    ```

    Which had the following result **:**

    ```js
    "aAbBC"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-10.php)**:**

    ```js
    swapcase = function swapcase(str) {
        return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
            return chr ? match.toUpperCase() : match.toLowerCase();
        });
    }
    console.log(swapcase('AaBbc'));
    ```

    Which had the following result **:**

    ```js
    "aAbBC"
    ```

    It took me a bit to understand when using capturing groups and it is involved `Or` condition, one of the groups will be undefined in passed in function. they won't lose their spot or `index`, they will be just undefined.

    </details>

    <hr>
    <br>

11. Write a JavaScript function to convert a string into camel case.

    **Test Data :**

    ```js
    console.log(camelize("JavaScript Exercises"));
    console.log(camelize("JavaScript exercises"));
    console.log(camelize("JavaScriptExercises"));
    ```

    ```js
    "JavaScriptExercises"
    "JavaScriptExercises"
    "JavaScriptExercises"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function camelize(v) {
        const regex = /\b\w+\b/g;
        var arr = v.match(regex);

        // return arr.map(function(item) {
        //     return item.charAt(0).toUpperCase() + item.slice(1);
        // }, '').join('');
        
        // OR 

        return arr.reduce(function(sum, item) {
            return sum + item.charAt(0).toUpperCase() + item.slice(1);
        }, '');
    }
    console.log(camelize("JavaScript Exercises"));
    console.log(camelize("JavaScript exercises"));
    console.log(camelize("JavaScriptExercises"));
    ```

    Which had the following result **:**

    ```js
    "JavaScriptExercises"
    "JavaScriptExercises"
    "JavaScriptExercises"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-11.php)**:**

    ```js
    camelize = function camelize(str) {
        return str.replace(/\W+(.)/g, function(match, chr)
        {
            return chr.toUpperCase();
        });
    }

    console.log(camelize("JavaScript Exercises"));
    console.log(camelize("JavaScript exercises"));
    console.log(camelize("JavaScriptExercises"));
    ```

    Which had the following result **:**

    ```js
    "JavaScriptExercises"
    "JavaScriptExercises"
    "JavaScriptExercises"
    ```

    I guess main way to handle this was to capture the words seperately.

    </details>

    <hr>
    <br>

12. Write a JavaScript function to uncamelize a string.

    **Test Data :**

    ```js
    console.log(uncamelize('helloWorld'));
    console.log(uncamelize('helloWorld','-'));
    console.log(uncamelize('helloWorld','_'));
    ```

    ```js
    "hello world"
    "hello-world"
    "hello_world"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was okay we got to seperate by capital words and accept second argument to replace the white-space **:**

    ```js
    function uncamelize(v, p) {
        const regex = /[A-Z]?[a-z]+[^A-Z]/g;
        let arr = v.trim().match(regex);

        return arr.reduce(function(sum, item) {
            // We need to be careful not to place seperator (p) on first word
            if (sum.length > 0) {
                sum += p ? p : ' ';
            }

            return sum + item.toLowerCase();
        }, '');
    }
    console.log(uncamelize('helloWorld'));
    console.log(uncamelize('helloWorld','-'));
    console.log(uncamelize('helloWorld','_'));
    ```

    And second way is to check if First letter is capital or not.

    ```js
    function uncamelize(v, p) {
        const regex = /^[A-Z]/; 
        const regex2 = /[A-Z]/;

        // Check if the first character is capital
        if (regex.test(v)) {
            v = v.charAt(0).toLowerCase() + v.slice(1);
        }

        return v.replace(regex2, function(match) {
            return (p ? p : ' ') + match.toLowerCase();
        });
    }
    console.log(uncamelize('helloWorld'));
    console.log(uncamelize('helloWorld','-'));
    console.log(uncamelize('helloWorld','_'));
    ```

    Which both had the following result **:**

    ```js
    "hello world"
    "hello-world"
    "hello_world"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-12.php)**:**

    ```js
    function uncamelize(str, separator) {
        // Assume default separator is a single space.
        if(typeof(separator) == "undefined") {
            separator = " ";
        }
        // Replace all capital letters by separator followed by lowercase one
        var str = str.replace(/[A-Z]/g, function (letter) 
        {
            return separator + letter.toLowerCase();
        });
        // Remove first separator
        return str.replace("/^" + separator + "/", '');
    }
    console.log(uncamelize('helloWorld'));
    console.log(uncamelize('helloWorld','-'));
    console.log(uncamelize('helloWorld','_'));
    ```

    Which had the following result **:**

    ```js
    "hello world"
    "hello-world"
    "hello_world"
    ```

    </details>

    <hr>
    <br>

13. Write a JavaScript function to concatenates a given string n times (default is 1).

    **Test Data :**

    ```js
    console.log(repeat('Ha!'));
    console.log(repeat('Ha!',2));
    console.log(repeat('Ha!',3));
    ```

    ```js
    "Ha!"
    "Ha!Ha!"
    "Ha!Ha!Ha!"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function repeat(v, n=1) {
        var txt = '';

        for(var i=0; i < n; i++) {
            txt += v;
        }

        return txt;
    }
    console.log(repeat('Ha!'));
    console.log(repeat('Ha!',2));
    console.log(repeat('Ha!',3));
    ```

    Which had the following result **:**

    ```js
    "Ha!"
    "Ha!Ha!"
    "Ha!Ha!Ha!"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-13.php)**:**

    ```js
    repeat = function repeat(str, count) {
        if(typeof(count) == "undefined") {
            count =1;
        }
        return count < 1 ? '' : new Array(count + 1).join(str);
    }
    console.log(repeat('Ha!'));
    console.log(repeat('Ha!',2));
    console.log(repeat('Ha!',3));
    ```

    Which had the following result **:**

    ```js
    "Ha!"
    "Ha!Ha!"
    "Ha!Ha!Ha!"
    ```

    </details>

    <hr>
    <br>

14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).

    **Test Data :**

    ```js
    console.log(insert('We are doing some exercises.'));
    console.log(insert('We are doing some exercises.','JavaScript '));
    console.log(insert('We are doing some exercises.','JavaScript ',18));
    ```

    ```js
    "We are doing some exercises."
    "JavaScript We are doing some exercises."
    "We are doing some JavaScript exercises."
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function insert(v, v2, p=0) {
        return v.substring(0, p) + (v2 ? v2 : '') + v.slice(p);
    }
    console.log(insert('We are doing some exercises.'));
    console.log(insert('We are doing some exercises.','JavaScript '));
    console.log(insert('We are doing some exercises.','JavaScript ',18));
    ```

    Which had the following result **:**

    ```js
    "We are doing some exercises."
    "JavaScript We are doing some exercises."
    "We are doing some JavaScript exercises."
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-14.php)**:**

    ```js
    insert = function insert(main_string, ins_string, pos) {
        if(typeof(pos) == "undefined") {
            pos = 0;
        }
        if(typeof(ins_string) == "undefined") {
            ins_string = '';
        }
        return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
    }
    console.log(insert('We are doing some exercises.'));
    console.log(insert('We are doing some exercises.','JavaScript '));
    console.log(insert('We are doing some exercises.','JavaScript ',18));
    ```

    Which had the following result **:**

    ```js
    "We are doing some exercises."
    "JavaScript We are doing some exercises."
    "We are doing some JavaScript exercises."
    ```

    </details>

    <hr>
    <br>

15. Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.

    **Test Data :**

    ```js
    console.log(humanize_format());
    console.log(humanize_format(1));
    console.log(humanize_format(8));
    console.log(humanize_format(301));
    console.log(humanize_format(402));
    ```

    ```js
    "1st"
    "8th"
    "301st"
    "402nd"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function humanize_format(num) {
        if (num !== undefined) {
            let str = num.toString(10),
                end;

            switch (str.charAt(str.length-1)) {
                case '1':
                    end = 'st';
                    break;
                case '2':
                    end = 'nd';
                    break;
                case '3':
                    end = 'rd';
                    break;
                default:
                    end = 'th';
                    break;
            }

            return str + end;
        }
    }
    console.log(humanize_format());
    console.log(humanize_format(1));
    console.log(humanize_format(8));
    console.log(humanize_format(301));
    console.log(humanize_format(402));
    ```

    Which had the following result **:**

    ```js
    "1st"
    "8th"
    "301st"
    "402nd"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-15.php)**:**

    ```js
    humanize_format = function humanize(num) {
        if(typeof(num) == "undefined") return;
        if(num % 100 >= 11 && num % 100 <= 13)
            return num + "th";
            
            switch(num % 10) {
                case 1: return num + "st";
                case 2: return num + "nd";
                case 3: return num + "rd";
            }
        return num + "th";
    }
    console.log(humanize_format());
    console.log(humanize_format(1));
    console.log(humanize_format(8));
    console.log(humanize_format(301));
    console.log(humanize_format(402));
    ```

    Which had the following result **:**

    ```js
    "1st"
    "8th"
    "301st"
    "402nd"
    ```

    Got to say, i don't get it why would it use numerical methods.

    </details>

    <hr>
    <br>

16. Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.

    **Test Data :**

    ```js
    console.log(text_truncate('We are doing JS string exercises.'));
    console.log(text_truncate('We are doing JS string exercises.',19));
    console.log(text_truncate('We are doing JS string exercises.',15,'!!'));
    ```

    ```js
    "We are doing JS string exercises."
    "We are doing JS ..."
    "We are doing !!"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function text_truncate(v, i, p='...') {
        if (i !== undefined) {
            return v.substring(0, i - p.length) + p;
        } else {
            return v;
        }
    }
    console.log(text_truncate('We are doing JS string exercises.'))
    console.log(text_truncate('We are doing JS string exercises.',19))
    console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
    ```

    Which had the following result **:**

    ```js
    "We are doing JS string exercises."
    "We are doing JS ..."
    "We are doing !!"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-16.php)**:**

    ```js
    text_truncate = function(str, length, ending) {
        if (length == null) {
            length = 100;
        }
        if (ending == null) {
            ending = '...';
        }
        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        } else {
            return str;
        }
    };
    console.log(text_truncate('We are doing JS string exercises.'))
    console.log(text_truncate('We are doing JS string exercises.',19))
    console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
    ```

    Which had the following result **:**

    ```js
    "We are doing JS string exercises."
    "We are doing JS ..."
    "We are doing !!"
    ```

    </details>

    <hr>
    <br>

17. Write a JavaScript function to chop a string into chunks of a given length.

    **Test Data :**

    ```js
    console.log(string_chop('w3resource'));
    console.log(string_chop('w3resource',2));
    console.log(string_chop('w3resource',3));
    ```

    ```js
    ["w3resource"]
    ["w3", "re", "so", "ur", "ce"]
    ["w3r", "eso", "urc", "e"]
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function string_chop(v, l) {
        const regex = new RegExp('.{1,' + (l !== undefined ? l : '' ) +  '}', 'g');

        return v.match(regex);
    }
    console.log(string_chop('w3resource'));
    console.log(string_chop('w3resource',2));
    console.log(string_chop('w3resource',3));
    ```

    Which had the following result **:**

    ```js
    ['w3resource']
    ['w3', 're', 'so', 'ur', 'ce']
    ['w3r', 'eso', 'urc', 'e']
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-17.php)**:**

    ```js
    string_chop =  function(str, size){
        if (str == null) return [];
        str = String(str);
        size = ~~size;
        return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
    }
    console.log(string_chop('w3resource'));
    console.log(string_chop('w3resource',2));
    console.log(string_chop('w3resource',3));
    ```

    Which had the following result **:**

    ```js
    ["w3resource"]
    ["w3","re","so","ur","ce"]
    ["w3r","eso","urc","e"]
    ```

    If `size == undefined` then `size = ~~size;` will make it `0`, otherwise returns its own value (`Number`);

    </details>

    <hr>
    <br>

18. Write a JavaScript function to count the occurrence of a substring in a string.

    **Test Data :**

    ```js
    console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
    console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
    ```

    ```js
    2
    1
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was, wtf is `false` as 3rd argument? then went as following **:**

    ```js
    function count(v, m) {
        let result = v.match(new RegExp(m, 'gi'));  // not case-sensetive
        return (result ? result : []).length; // if we had zero result we will get `null` there for `[]`
    }
    console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
    console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
    ```

    Which had the following result **:**

    ```js
    2
    1
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-18.php)**:**

    ```js
    function count(main_str, sub_str) 
    {
        main_str += '';
        sub_str += '';

        if (sub_str.length <= 0) 
        {
            return main_str.length + 1;
        }

        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }    
    console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
    console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
    ```

    Which had the following result **:**

    ```js
    2
    1
    ```

    </details>

    <hr>
    <br>

19. Write a JavaScript function to escape a HTML string.

    **Test Data :**

    ```js
    console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
    ```

    ```js
    "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was, okay we just have to replace a list **:**

    ```js
    function escape_HTML(v) {
        const regex = /[<">]/g;
        return v.replace(regex, function(match) {
            switch (match) {
                case '&':
                    return '&amp;';
                case '<':
                    return '&lt;';
                case '"':
                    return '&quot;';
                case '>':
                    return '&gt;';
                default:
                    console.log('shouldnt be here: ', match);
                    return '';
            }
        })
    }
    console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
    ```

    Which had the following result **:**

    ```js
    '&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;'
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-19.php)**:**

    ```js
    function escape_HTML(html_str) {
        'use strict';

        return html_str.replace(/[&<>"]/g, function (tag) {
            var chars_to_replace = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;'
            };

            return chars_to_replace[tag] || tag;
        });
    }
    console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
    ```

    Which had the following result **:**

    ```js
    '&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;'
    ```

    I did fix `chars_to_replace`, answer was bit weird but i think whoever wrote it was just a bit sleepy, cause it works really nice (with the fix), also i like the way it went with `chars_to_replace` instead of a `switch`.

    </details>

    <hr>
    <br>

20. Write a JavaScript function that can pad (left, right) a string to get to a determined length.

    **Test Data :**

    ```js
    console.log(formatted_string('0000',123,'l'));
    console.log(formatted_string('00000000',123,''));
    ```

    ```js
    "0123"
    "12300000"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function formatted_string(pad, v, dir = 'r') {
        var replace = v.toString(); // maybe its not string (number for example)
        dir = dir.toLowerCase(); // it goes to r cause empty string '' will convert to 0 then false example #2
        
        if (dir == 'l') {
            return pad.substring(0, pad.length - replace.length) + replace;
        } else {
            return replace + pad.slice(replace.length);
        }
    }
    console.log(formatted_string('0000',123,'l'));
    console.log(formatted_string('00000000',123,''));
    ```

    Which had the following result **:**

    ```js
    "0123"
    "12300000"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-20.php)**:**

    ```js
    function formatted_string(pad, user_str, pad_pos)
    {
        if (typeof user_str === 'undefined') 
            return pad;
        if (pad_pos == 'l')
        {
            return (pad + user_str).slice(-pad.length);
        }
        else 
        {
            return (user_str + pad).substring(0, pad.length);
        }
    }
    console.log(formatted_string('0000',123,'l'));
    console.log(formatted_string('00000000',123,''));
    ```

    Which had the following result **:**

    ```js
    "0123"
    "12300000"
    ```

    </details>

    <hr>
    <br>

21. Write a JavaScript function to repeat a string a specified times.

    **Test Data :**

    ```js
    console.log(repeat_string('a', 4));
    console.log(repeat_string('a'));
    ```

    ```js
    "aaaa"
    "Error in string or count."
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was, we have done this before, but sure **:**

    ```js
    function repeat_string(v, c) {
        if (c == undefined) {
            return "Error in string or count.";
        }

        return new Array(c+1).join(v);
    }
    console.log(repeat_string('a', 4));
    console.log(repeat_string('a'));
    ```

    Which had the following result **:**

    ```js
    "aaaa"
    "Error in string or count."
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-21.php)**:**

    ```js
    function repeat_string(string, count) 
    {
        if ((string == null) || (count < 0) || (count === Infinity) || (count == null))
        {
            return('Error in string or count.');
        }
            count = count | 0; // Floor count.
        return new Array(count + 1).join(string);
    }

    console.log(repeat_string('a', 4));
    console.log(repeat_string('a'));
    console.log(repeat_string('a', -2));
    console.log(repeat_string('a', Infinity));
    ```

    Which had the following result **:**

    ```js
    "aaaa"
    "Error in string or count."
    "Error in string or count."
    "Error in string or count."
    ```

    Uh ops xD, i hould have checked for more then just `undefined`.

    </details>

    <hr>
    <br>

22. Write a JavaScript function to get a part of a string after a specified character.

    **Test Data :**

    ```js
    console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
    console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
    ```

    ```js
    "w3resource"
    "xercises"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function subStrAfterChars(str, seperator, wayPoint) {
        if (wayPoint === 'a') {
            return str.substring(0, str.indexOf(seperator));
        } else if (wayPoint === 'b') {
            return str.slice(str.indexOf(seperator)+1);
        } else {
            return 'WHY?';
        }
    }
    console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
    console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
    ```

    Which had the following result **:**

    ```js
    "w3resource"
    "xercises"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-22.php)**:**

    ```js
    function subStrAfterChars(str, char, pos)
    {
        if(pos=='b')
            return str.substring(str.indexOf(char) + 1);
        else if(pos=='a') 
            return str.substring(0, str.indexOf(char));
        else
            return str;  
    }
    console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
    console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
    ```

    Which had the following result **:**

    ```js
    "w3resource"
    "xercises"
    ```

    </details>

    <hr>
    <br>

23. Write a JavaScript function to strip leading and trailing spaces from a string.

    **Test Data :**

    ```js
    console.log(strip('w3resource '));
    console.log(strip(' w3resource'));
    console.log(strip(' w3resource '));
    ```

    ```js
    "w3resource"
    "w3resource"
    "w3resource"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was `return str.trim();`, then i was like nah, that's too easy lets do it with `RegExp` **:**

    ```js
    function strip(str) {
        // return str.trim();
        const regex = /^\s+|\s+$/g;

        return str.replace(regex, '');
    }
    console.log(strip('w3resource '));
    console.log(strip(' w3resource'));
    console.log(strip(' w3resource '));
    ```

    Which had the following result **:**

    ```js
    "w3resource"
    "w3resource"
    "w3resource"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-23.php)**:**

    ```js
    function strip(str) {
        return str.replace(/^\s+|\s+$/g, '');
    }
    console.log(strip('w3resource '));
    console.log(strip(' w3resource'));
    console.log(strip(' w3resource  '));
    ```

    Which had the following result **:**

    ```js
    "w3resource"
    "w3resource"
    "w3resource"
    ```

    </details>

    <hr>
    <br>

24. Write a JavaScript function to truncate a string to a certain number of words.

    **Test Data :**

    ```js
    console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
    ```

    ```js
    "The quick brown fox"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function truncate(str, count) {
        return str.split(' ').slice(0, count).join(' ');
    }
    console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
    ```

    And `RegExp` version **:**

    ```js
    function truncate(str, count) {
        const regex = /\b\w+\b/g;
        return str.match(regex).slice(0, count).join(' ');
    }
    console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
    ```

    Which both had the following result **:**

    ```js
    "The quick brown fox"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-24.php)**:**

    ```js
    function truncate(str, no_words) {
        return str.split(" ").splice(0,no_words).join(" ");
    }
    console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
    ```

    Which had the following result **:**

    ```js
    "The quick brown fox"
    ```

    </details>

    <hr>
    <br>

25. Write a JavaScript function to alphabetize a given string.

    **Test Data :**

    ```js
    console.log(alphabetize_string('United States'));
    ```

    ```js
    "SUadeeinsttt"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was, Nice! a good challange **:**

    ```js
    function alphabetize_string(str) {
        return str.replace(/\s/, '').split('').map(function(item) {
            return item.charCodeAt(0);
        }).sort(function(a, b) {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        }).map(function(item) {
            return String.fromCharCode(item);
        }).join('');
    }
    console.log(alphabetize_string('United States'));
    ```

    Which had the following result **:**

    ```js
    "SUadeeinsttt"
    ```

    There are better ways to do this but i like to experince with `.charCodeAt` and `String.fromCharCode`.

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-25.php)**:**

    ```js
    function alphabetize_string(str) 
    {
        return str.split('').sort().join('').trim();
    }
    console.log(alphabetize_string('United States'));
    ```

    Which had the following result **:**

    ```js
    "SUadeeinsttt"
    ```

    To understand wtf happen here xD, we have to understand `.sort()`, which has the following default behavior **:**

    ```js
    function compareFn(a, b) {
        if (a is less than b by some ordering criterion) {
            return -1;
        }
        if (a is greater than b by the ordering criterion) {
            return 1;
        }
        // a must be equal to b
        return 0;
    }
    ```

    You can read the following 'JavaScript' specification for this [**23.1.3.30 Array.prototype.sort**](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.sort) and [**7.2.13 IsLessThan**](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islessthan).

    
    Since all values are string with a `length` of `1` you can imagine it would do the following comparison. (Just to help visualize what .sort() is doing here)

    ```js
    function compareFn(a, b) {
        if (a.charCodeAt(0) < b.charCodeAt(0)) {
            return -1;
        }
        if (a.charCodeAt(0) > b.charCodeAt(0)) {
            return 1;
        }
        // a must be equal to b
        return 0;
    }
    'United States'.split('').sort(compareFn).join('').trim();
    ```

    ```js
    'SUadeeinsttt'
    ```

    </details>

    <hr>
    <br>

26. Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.

    **Test Data :**

    ```js
    console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
    ```

    ```js
    "The quick brown fox jumps over lazy dog"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function remove_first_occurrence(str, match) {
        return str.replace(match, '');
    }
    console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
    ```

    Which had the following result **:**

    ```js
    "The quick brown fox jumps over  lazy dog"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-26.php)**:**

    ```js
    function remove_first_occurrence(str, searchstr)       {
        var index = str.indexOf(searchstr);
        if (index === -1) {
            return str;
        }
        return str.slice(0, index) + str.slice(index + searchstr.length);
    }
    console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
    ```

    Which had the following result **:**

    ```js
    "The quick brown fox jumps over  lazy dog"
    ```

    </details>

    <hr>
    <br>

27. Write a JavaScript function to convert ASCII to Hexadecimal format.

    **Test Data :**

    ```js
    console.log(ascii_to_hexa('12'));
    console.log(ascii_to_hexa('100'));
    ```

    ```js
    "3132"
    "313030"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function ascii_to_hexa(str) {
        return str.split('').map(item => item.charCodeAt(0).toString(16)).join('');
    }
    console.log(ascii_to_hexa('12'));
    console.log(ascii_to_hexa('100'));
    ```

    Which had the following result **:**

    ```js
    "3132"
    "313030"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-27.php)**:**

    ```js
    function ascii_to_hexa(str)
    {
        var arr1 = [];
        for (var n = 0, l = str.length; n < l; n ++) 
        {
            var hex = Number(str.charCodeAt(n)).toString(16);
            arr1.push(hex);
        }
        return arr1.join('');
    }
    console.log(ascii_to_hexa('12'));
    console.log(ascii_to_hexa('100'));
    ```

    Which had the following result **:**

    ```js
    "3132"
    "313030"
    ```

    </details>

    <hr>
    <br>

28. Write a JavaScript function to convert Hexadecimal to ASCII format.

    **Test Data :**

    ```js
    console.log(hex_to_ascii('3132'));
    console.log(hex_to_ascii('313030'));
    ```

    ```js
    "12"
    "100"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function hex_to_ascii(str) {
        return str.match(/\d{2}/g).map(item => String.fromCharCode(parseInt(item, 16))).join('');
    }
    console.log(hex_to_ascii('3132'));
    console.log(hex_to_ascii('313030'));
    ```

    Which had the following result **:**

    ```js
    "12"
    "100"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-28.php)**:**

    ```js
    function hex_to_ascii(str1)
    {
        var hex  = str1.toString();
        var str = '';
        for (var n = 0; n < hex.length; n += 2) {
            str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
        }
        return str;
    }
    console.log(hex_to_ascii('3132'));
    console.log(hex_to_ascii('313030'));
    ```

    Which had the following result **:**

    ```js
    "12"
    "100"
    ```

    </details>

    <hr>
    <br>

29. Write a JavaScript function to find a word within a string.

    **Test Data :**

    ```js
    console.log(search_word('The quick brown fox', 'fox'));
    console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
    ```

    ```js
    "'fox' was found 1 times."
    "'aa' was found 2 times."
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function search_word(str, word) {
        var match = str.match(new RegExp('\\b' + word + '\\b', 'g')); // in case of null (0 match)
        return "'" + word + "'" + ' was found ' + (match ? match.length : 0) + ' times.'; 
    }
    console.log(search_word('The quick brown fox', 'fox'));
    console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
    ```

    Which had the following result **:**

    ```js
    "'fox' was found 1 times."
    "'aa' was found 2 times."
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-29.php)**:**

    ```js
    function search_word(text, word){
        var x = 0, y=0;
    
        for (i=0;i< text.length;i++)
            {
            if(text[i] == word[0])
                {
                for(j=i;j< i+word.length;j++)
                {
                    if(text[j]==word[j-i])
                    {
                        y++;
                    }
                    if (y==word.length){
                        x++;
                    }
                }
                y=0;
            }
        }
        return "'"+word+"' was found "+x+" times.";
    }
    console.log(search_word('The quick brown fox', 'fox'));
    console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
    ```

    Which had the following result **:**

    ```js
    "'fox' was found 1 times."
    "'aa' was found 2 times."
    ```

    </details>

    <hr>
    <br>

30. Write a JavaScript function check if a string ends with specified suffix.

    **Test Data :**

    ```js
    console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
    console.log(string_endsWith('JS PHP PYTHON',''));
    ```

    ```js
    true
    false
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function string_endsWith(str, suffix) {
        return suffix.length > 0  ? str.endsWith(suffix) : false;
    }
    console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
    console.log(string_endsWith('JS PHP PYTHON',''));
    ```

    Which had the following result **:**

    ```js
    true
    false
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-30.php)**:**

    ```js
    function string_endsWith(str, suffix) 
    {
        if (((str===null) || (str==='')) || ((suffix===null) || (suffix==='')))
        {
            return false;
        }
        else
        {     
        str = str.toString();
        suffix = suffix.toString();
        }
        return str.indexOf(suffix, str.length -     suffix.length) !== -1;
    }
    console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
    console.log(string_endsWith('JS PHP PYTHON',''));
    ```

    Which had the following result **:**

    ```js
    true
    false
    ```

    </details>

    <hr>
    <br>

31. Write a JavaScript function to escapes special characters (&, <, >, ', ") for use in HTML.

    **Test Data :**

    ```js
    console.log(escape_html('PHP & MySQL'));
    console.log(escape_html('3 > 2'));
    ```

    ```js
    "PHP &amp; MySQL"
    "3 &gt; 2"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was, done before but sure... **:**

    ```js
    function escape_html(str) {
        return str.replace(/[&<>'"]/g, function(match) {
            switch (match) {
                case '&':
                    return '&amp;';
                case '<':
                    return '&lt;';
                case '>':
                    return '&gt;';
                case '"':
                    return '&quot;';
                case "'":
                    return '&apos;';
                default:
                    console.log("shouldn't be here");
                    break;
            }
        });
    }
    console.log(escape_html('PHP & MySQL'));
    console.log(escape_html('3 > 2'));
    ```

    Or **:**

    ```js
    function escape_html(str) {
        let map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        
        return str.replace(/[&<>"']/g, function(m) { return map[m]; });
    }
    console.log(escape_html('PHP & MySQL'));
    console.log(escape_html('3 > 2'));
    ```

    Which had the following result **:**

    ```js
    "PHP &amp; MySQL"
    "3 &gt; 2"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-31.php)**:**

    ```js
    function escape_html(str) {
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
        
        var map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };

        return str.replace(/[&<>"']/g, function(m) { return map[m]; });
    }
    console.log(escape_html('PHP & MySQL'));
    console.log(escape_html('3 > 2'));
    ```

    Which had the following result **:**

    ```js
    "PHP &amp; MySQL"
    "3 &gt; 2"
    ```

    </details>

    <hr>
    <br>

32. Write a JavaScript function to remove non-printable ASCII chars.

    **Test Data :**

    ```js
    console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
    ```

    ```js
    "PHP-MySQL"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was , time to visit [**unicode-table.com**](https://unicode-table.com/en/) **:**

    ```js
    function remove_non_ascii(str) {
        return str.replace(/[^\x20-\x7E]/g, '');
    }
    console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
    ```

    Which had the following result **:**

    ```js
    "PHP-MySQL"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-32.php)**:**

    ```js
    function remove_non_ascii(str) {
        
        if ((str===null) || (str===''))
            return false;
        else
        str = str.toString();
        
        return str.replace(/[^\x20-\x7E]/g, '');
    }
    console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
    ```

    Which had the following result **:**

    ```js
    "PHP-MySQL"
    ```

    </details>

    <hr>
    <br>

33. Write a JavaScript function to remove non-word characters.

    **Test Data :**

    ```js
    console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
    ```

    ```js
    "PHP - MySQL"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function remove_non_word(str) {
        return str.replace(/[^\w-\s]/g, '');
    }
    console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
    ```

    Which had the following result **:**

    ```js
    "PHP - MySQL"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-33.php)**:**

    ```js
    function remove_non_word (str) {
        if ((str===null) || (str===''))
            return false;
        else
        str = str.toString();
        
        var PATTERN = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;
        
        return str.replace(PATTERN, '');
    }
    console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
    ```

    Which had the following result **:**

    ```js
    "PHP - MySQL"
    ```

    </details>

    <hr>
    <br>

34. Write a JavaScript function to convert a string to title case.

    **Test Data :**

    ```js
    console.log(sentenceCase('PHP exercises. python exercises.'));
    ```

    ```js
    "Php Exercises. Python Exercises."
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function sentenceCase(str) {
        // sec reg => \w\S*
        return str.match(/\w+\.?/g).map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(' ');
    }
    console.log(sentenceCase('PHP exercises. python exercises.'));
    ```

    Which had the following result **:**

    ```js
    "Php Exercises. Python Exercises."
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-34.php)**:**

    ```js
    function sentenceCase (str) {
        if ((str===null) || (str===''))
            return false;
        else
        str = str.toString();

        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
    console.log(sentenceCase('PHP exercises. python exercises.'));
    ```

    Which had the following result **:**

    ```js
    "Php Exercises. Python Exercises."
    ```

    </details>

    <hr>
    <br>

35. Write a JavaScript function to remove HTML/XML tags from string.

    **Test Data :**

    ```js
    console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));
    ```

    ```js
    "PHP Exercises"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function strip_html_tags(str) {
        return str.replace(/(<.+?>)|(<\/.+?>)/g, '');
    }
    console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));
    ```

    Which had the following result **:**

    ```js
    "PHP Exercises"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-35.php)**:**

    ```js
    function strip_html_tags(str)
    {
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
        return str.replace(/<[^>]*>/g, '');
    }
    console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));
    ```

    Which had the following result **:**

    ```js
    "PHP Exercises"
    ```

    </details>

    <hr>
    <br>

36. Write a JavaScript function to create a Zerofilled value with optional +, - sign.

    **Test Data :**

    ```js
    console.log(zeroFill(120, 5, '-'));
    console.log(zeroFill(29, 4));
    ```

    ```js
    "+00120"
    "0029"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was maybe it want me to add a sign at the end (3rd argument was `-` in first example) and maybe it was a mistype `+` **:**

    ```js
    function zeroFill(num, fill, sign='+') {
        return sign + num.toString().padStart(fill, '0');
    }
    console.log(zeroFill(120, 5, '-'));
    console.log(zeroFill(29, 4));
    ```

    Which had the following result **:**

    ```js
    "-00120"
    "+0029"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-36.php)**:**

    ```js
    function zeroFill(number, width, osign) {
        var num = '' + Math.abs(number),
            zerosw = width - num.length,
            sign = number >= 0;
        return (sign ? (osign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosw)).toString().substr(1) + num;
    }
    console.log(zeroFill(120, 5, '-'));
    console.log(zeroFill(29, 4));
    ```

    Which had the following result **:**

    ```js
    "+00120"
    "0029"
    ```

    </details>

    <hr>
    <br>

37. Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison.

    **Test Data :**

    ```js
    console.log(compare_strings('abcd', 'AbcD'));
    console.log(compare_strings('ABCD', 'Abce'));
    ```

    ```js
    true
    false
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function compare_strings(str, comp) {
        return (new RegExp('^' + comp + '$', 'i')).test(str);
    }
    console.log(compare_strings('abcd', 'AbcD'));
    console.log(compare_strings('ABCD', 'Abce'));
    ```

    Which had the following result **:**

    ```js
    true
    false
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-37.php)**:**

    ```js
    function compare_strings(str1, str2)
    {
        var areEqual = str1.toUpperCase() === str2.toUpperCase();
        return areEqual;
    }
    console.log(compare_strings('abcd', 'AbcD'));
    console.log(compare_strings('ABCD', 'Abce'));
    ```

    Which had the following result **:**

    ```js
    true
    false
    ```

    </details>

    <hr>
    <br>

38. Write a JavaScript function to create a case-insensitive search.

    **Test Data :**

    ```js
    console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
    console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
    console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
    ```

    ```js
    "Matched"
    "Matched"
    "Not Matched"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function case_insensitive_search(str, search) {
        return str.match(new RegExp(search, 'i')) !== null ? 'Matched' : 'Not Matched';
    }
    console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
    console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
    console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
    ```

    Which had the following result **:**

    ```js
    "Matched"
    "Matched"
    "Not Matched"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-38.php)**:**

    ```js
    function case_insensitive_search(str, search_str)
    {
        var result= str.search(new RegExp(search_str, "i"));
    
        if (result>0)
            return 'Matched';
        else
            return 'Not Matched';  
    }
    console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
    console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
    console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
    ```

    Which had the following result **:**

    ```js
    "Matched"
    "Matched"
    "Not Matched"
    ```

    </details>

    <hr>
    <br>

39. Write a JavaScript function to Uncapitalize? the first character of a string.

    **Test Data :**

    ```js
    console.log(Uncapitalize('Js string exercises'));
    ```

    ```js
    "js string exercises"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function uncapitalize(str) {
        return str.trim().charAt(0).toLowerCase() + str.slice(1);
    }
    console.log(uncapitalize('Js string exercises'));
    ```

    Which had the following result **:**

    ```js
    "js string exercises"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-39.php)**:**

    ```js
    function Uncapitalize(str1){
        return str1.charAt(0).toLowerCase() + str1.slice(1);
    }
    console.log(Uncapitalize('Js string exercises'));    
    ```

    Which had the following result **:**

    ```js
    "js string exercises"
    ```

    </details>

    <hr>
    <br>

40. Write a JavaScript function to Uncapitalize the first letter of each word of a string.

    **Test Data :**

    ```js
    console.log(unCapitalize_Words('Js String Exercises'));
    ```

    ```js
    "js string exercises"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function unCapitalize_Words(str) {
        return str.replace(/\b([A-Z])\w*\b/g, match => match.toUpperCase());
    }
    console.log(unCapitalize_Words('js string exercises'));
    ```

    Which had the following result **:**

    ```js
    "js string exercises"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-40.php)**:**

    ```js
    function unCapitalize_Words(str)
    { 
        return str.replace(/\w\S*/g, function(txt)
            {
                return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase();
            }
        );
    }
    console.log(unCapitalize_Words('Js String Exercises'));
    ```

    Which had the following result **:**

    ```js
    "js string exercises"
    ```

    </details>

    <hr>
    <br>

41. Write a JavaScript function to capitalize each word in the string.

    **Test Data :**

    ```js
    console.log(capitalizeWords('js string exercises'));
    ```

    ```js
    "JS STRING EXERCISES"
    ```

    <br>

    <details><summary><b>My Answer</b></summary>

    My first thought was **:**

    ```js
    function capitalizeWords(str) {
        return str.toUpperCase();
    }
    console.log(capitalizeWords('js string exercises'));
    ```

    Which had the following result **:**

    ```js
    "JS STRING EXERCISES"
    ```

    </details>

    <br>

    <details><summary><b>Provided Solution</b></summary>

    [**Solution**](https://www.w3resource.com/javascript-exercises/javascript-string-exercise-41.php)**:**

    ```js
    function capitalizeWords(str)
    {
        return str.replace(/\w\S*/g, function(txt){return txt.substr(0).toUpperCase();});
    }
    console.log(capitalizeWords('js string exercises'));
    ```

    Which had the following result **:**

    ```js
    "JS STRING EXERCISES"
    ```

    </details>

    <hr>
    <br>
