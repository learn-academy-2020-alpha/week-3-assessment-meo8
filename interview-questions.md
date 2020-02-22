# ASSESSMENT 3: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What is object destructuring?

  **Your answer:**
   - When you want to use the key/properties of an object without having to keep calling the object first followed by the name of the key using the dot or bracket notation.
     - example) `let myObj = {prop1: "hello", prop2: "hey"}`
     - Without object destructuring you'd have to write `myObj.prop1` to retrieve the value of `prop1` from the `myObj` object.
     - With object destructuring like so:
       - `let { prop1, prop2 } = myObj`
       - You can retrieve the value by writing `prop1` or `prop2`.

  **Researched answer:**
  - The object destructuring syntax is a JavaScript expression that makes it possible to unpack values from an object into distinctive variables.
  - A property can be unpacked from the object and the assigned variable can be named something different from the object property.
    - example) `const person = {age: 42, cool: true};`
    - Declare the variable name followed by the object property name with a colon to separate the two like so:
      - `const {age: number, cool: isCool} = person;`
  - If an object HAS NOT been declared, parenthesis must be used.
  - The parenthesis should be preceded by a semi-colon or it may execute a function that may come before it.
    - `({a, b} = {a: 1, b: 2})`
    - `const {a, b} = {a: 1, b: 2}`
  - The line 22 and 23 are both valid destructuring.
    - `{a, b} = {a: 1, b: 2}`
      - This is not a valid stand-alone syntax; it's missing parenthesis.
      - The left-hand side is considered a block, not an object literal.
  - A variable can be assigned a default value if the unpacked value is `undefined`.
    - example) `const {a = 10, b = 5} = {a: 3};`
    - The property `a` has already been assigned a value of 3, so when `a` is retrieved, it will be 3 and not 10. However, `b` will have a default value of 5.


2. What are the three arguments that .map() can accept?

  **Your answer:**
  - The array's element, index, and the entire array.
  - As the array is looped through by .map(), the element and the index number corresponds to one another, if the third argument is part of the code to be executed, for example, by using console.log(), then the entire array will be logged for each of the element in the array.


  **Researched answer:**
  - .map() calls the provided callback function on each element in the array (in order). Within the function, you can include the array's element, index, and the entire array.

3. What is the difference between a class and an object?

  **Your answer:**

  **Researched answer:**

4. What is the difference between a HTML div and a span?

  **Your answer:**
  The `span` is an inline element mainly used to style something specifically, while the `div` is a block element meaning there is a line break before and after it.

  **Researched answer:**

5. What is React.Fragment and why would you want to use it?

  **Your answer:**
  `React.Fragment` is used to encapsulate all JSX code so that a random `div` is not rendered on the actual HTML page.

  **Researched answer:**

6. What are three options for creating responsive design?

  **Your answer:**
  - Flex-box
  - Bootstrap
  - Media queries

  **Researched answer:**

## Looking Ahead: Terms for Next Week

- Object oriented programming
- irb
- Instance variable
- Ruby hash
- Class relationships
