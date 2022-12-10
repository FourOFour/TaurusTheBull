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

        return v.replace(regex, function(match, p1) {
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
