$(document).ready(function() {
    // Show space map when "Start Game" is clicked
    $('#start-game').click(function() {
        $('#main-menu').addClass('hidden');
        $('#space-map').removeClass('hidden');
    });

    // Show coding challenge when a planet is clicked
    $('.planet').click(function() {
        var planetId = $(this).attr('id');
        startChallenge(planetId);
    });

    function startChallenge(planetId) {
        $('#space-map').addClass('hidden');
        $('#coding-challenge').removeClass('hidden');
        
        // Set challenge title based on the planet
        var challengeTitle;
        switch(planetId) {
            case 'tutorial-planet':
                challengeTitle = 'HTML & CSS Basics';
                break;
            case 'planet-1':
                challengeTitle = 'JavaScript Basics';
                break;
            case 'planet-2':
                challengeTitle = 'Intermediate JavaScript';
                break;
            case 'planet-3':
                challengeTitle = 'Introduction to jQuery';
                break;
            case 'planet-4':
                challengeTitle = 'Advanced JavaScript and jQuery';
                break;
        }
        $('#challenge-title').text(challengeTitle);

        // Load challenge content (for now, we'll use placeholder content)
        $('#editor').text('// Write your code here...');
    }

    // Handle code submission
    $('#submit-code').click(function() {
        var code = $('#editor').text();
        evaluateCode(code);
    });

    function evaluateCode(code) {
        // Simple evaluation logic (to be expanded)
        if (code.includes('<') && code.includes('>')) {
            $('#output').text('Code looks good!');
        } else {
            $('#output').text('Please write some HTML code.');
        }
    }
});

$(document).ready(function() {
    const challenges = {
        'tutorial-planet': [
            {
                title: 'Basic HTML Structure',
                description: 'Create a simple HTML structure with a heading and a paragraph.',
                exampleSolution: `
                    <html>
                        <head>
                            <title>My First Web Page</title>
                        </head>
                        <body>
                            <h1>Welcome to Space Coders!</h1>
                            <p>This is my first web page.</p>
                        </body>
                    </html>
                `,
                evaluate: function(code) {
                    return code.includes('<h1>Welcome to Space Coders!</h1>') &&
                           code.includes('<p>This is my first web page.</p>');
                }
            },
            {
                title: 'Basic CSS Styling',
                description: 'Apply basic CSS styles to the HTML elements.',
                exampleSolution: `
                    <html>
                        <head>
                            <title>Styled Web Page</title>
                            <style>
                                body {
                                    background-color: black;
                                    color: white;
                                    text-align: center;
                                }
                                h1 {
                                    color: yellow;
                                }
                            </style>
                        </head>
                        <body>
                            <h1>Welcome to Space Coders!</h1>
                            <p>This is my first styled web page.</p>
                        </body>
                    </html>
                `,
                evaluate: function(code) {
                    return code.includes('background-color: black;') &&
                           code.includes('color: yellow;');
                }
            }
        ],
        'planet-1': [
            {
                title: 'JavaScript Variables',
                description: 'Declare a variable called "message" and assign it the value "Hello, Planet 1!".',
                exampleSolution: 'var message = "Hello, Planet 1!";',
                evaluate: function(code) {
                    return code.includes('var message = "Hello, Planet 1!";');
                }
            },
            {
                title: 'JavaScript Functions',
                description: 'Write a function called "greet" that takes a name parameter and returns a greeting message.',
                exampleSolution: `
                    function greet(name) {
                        return "Hello, " + name + "!";
                    }
                `,
                evaluate: function(code) {
                    return code.includes('function greet(name)') &&
                           code.includes('return "Hello, " + name + "!";');
                }
            },
            {
                title: 'JavaScript Conditional Statements',
                description: 'Write a function called "isEven" that takes a number parameter and returns true if the number is even, otherwise false.',
                exampleSolution: `
                    function isEven(number) {
                        return number % 2 === 0;
                    }
                `,
                evaluate: function(code) {
                    return code.includes('function isEven(number)') &&
                           code.includes('return number % 2 === 0;');
                }
            },
            {
                title: 'JavaScript Loops',
                description: 'Write a function called "sumUpTo" that takes a number parameter and returns the sum of all numbers up to and including that number.',
                exampleSolution: `
                    function sumUpTo(number) {
                        let sum = 0;
                        for (let i = 1; i <= number; i++) {
                            sum += i;
                        }
                        return sum;
                    }
                `,
                evaluate: function(code) {
                    return code.includes('function sumUpTo(number)') &&
                           code.includes('let sum = 0;') &&
                           code.includes('for (let i = 1; i <= number; i++)') &&
                           code.includes('sum += i;') &&
                           code.includes('return sum;');
                }
            }
        ],
        'planet-2': [
            {
                title: 'JavaScript Arrays',
                description: "Create an array called 'planets' containing the names of the first five planets in the solar system.",
                exampleSolution: "var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];",
                evaluate: function(code) {
                    return code.includes("var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];");
                }
            },
            {
                title: 'JavaScript Array Methods',
                description: "Write a function called 'getFirstAndLast' that takes an array parameter and returns an array containing the first and last elements of the input array.",
                exampleSolution: "function getFirstAndLast(arr) {\n    return [arr[0], arr[arr.length - 1]];\n}",
                evaluate: function(code) {
                    return code.includes('function getFirstAndLast(arr)') &&
                           code.includes('return [arr[0], arr[arr.length - 1]];');
                }
            },
            {
                title: 'JavaScript Objects',
                description: "Create an object called 'person' with properties 'name', 'age', and 'city'.",
                exampleSolution: "var person = {\n    name: 'John Doe',\n    age: 30,\n    city: 'New York'\n};",
                evaluate: function(code) {
                    return code.includes("var person = {") &&
                           code.includes("name: 'John Doe'") &&
                           code.includes("age: 30") &&
                           code.includes("city: 'New York'");
                }
            },
            {
                title: 'JavaScript Object Methods',
                description: "Write a method called 'introduce' for the 'person' object that returns a string introducing the person.",
                exampleSolution: "person.introduce = function() {\n    return 'Hi, my name is ' + this.name + ', I am ' + this.age + ' years old, and I live in ' + this.city + '.';\n};",
                evaluate: function(code) {
                    return code.includes("person.introduce = function() {") &&
                           code.includes("return 'Hi, my name is ' + this.name + ', I am ' + this.age + ' years old, and I live in ' + this.city + '.';");
                }
            },
            {
                title: 'DOM Manipulation',
                description: "Write JavaScript code to change the background color of the document body to blue.",
                exampleSolution: "document.body.style.backgroundColor = 'blue';",
                evaluate: function(code) {
                    return code.includes("document.body.style.backgroundColor = 'blue';");
                }
            }
        ],
        'planet-3': [
            {
                title: 'JavaScript Functions',
                description: "Write a function called 'calculateArea' that takes the radius of a circle as a parameter and returns its area.",
                exampleSolution: "function calculateArea(radius) {\n    return Math.PI * radius * radius;\n}",
                evaluate: function(code) {
                    return code.includes("function calculateArea(radius)") &&
                           code.includes("return Math.PI * radius * radius;");
                }
            },
            {
                title: 'JavaScript Objects and Methods',
                description: "Create an object called 'rectangle' with properties 'length' and 'width'. Add a method named 'calculateArea' to calculate the area of the rectangle.",
                exampleSolution: "var rectangle = {\n    length: 10,\n    width: 5,\n    calculateArea: function() {\n        return this.length * this.width;\n    }\n};",
                evaluate: function(code) {
                    return code.includes("var rectangle = {") &&
                           code.includes("length: 10,") &&
                           code.includes("width: 5,") &&
                           code.includes("calculateArea: function() {") &&
                           code.includes("return this.length * this.width;");
                }
            },
            {
                title: 'Asynchronous JavaScript',
                description: "Write a function called 'fetchData' that simulates fetching data from a server after a delay of 2 seconds. Use a callback function to handle the retrieved data.",
                exampleSolution: "function fetchData(callback) {\n    setTimeout(function() {\n        var data = 'Data from server';\n        callback(data);\n    }, 2000);\n}",
                evaluate: function(code) {
                    return code.includes("function fetchData(callback)") &&
                           code.includes("setTimeout(function() {") &&
                           code.includes("var data = 'Data from server';") &&
                           code.includes("callback(data);");
                }
            },
            {
                title: 'Error Handling',
                description: "Write a function called 'divide' that takes two numbers as parameters and returns the result of dividing the first number by the second number. Handle division by zero using a try-catch block.",
                exampleSolution: "function divide(x, y) {\n    try {\n        if (y === 0) {\n            throw new Error('Division by zero');\n        }\n        return x / y;\n    } catch (error) {\n        return error.message;\n    }\n}",
                evaluate: function(code) {
                    return code.includes("function divide(x, y)") &&
                           code.includes("try {") &&
                           code.includes("throw new Error('Division by zero');") &&
                           code.includes("return error.message;");
                }
            },
            {
                title: 'Event Handling',
                description: "Write JavaScript code to add a click event listener to a button with the id 'myButton'. When clicked, the button should display an alert with the message 'Button clicked'.",
                exampleSolution: "document.getElementById('myButton').addEventListener('click', function() {\n    alert('Button clicked');\n});",
                evaluate: function(code) {
                    return code.includes("document.getElementById('myButton').addEventListener('click', function() {") &&
                           code.includes("alert('Button clicked');") &&
                           code.includes("});");
                }
            }
        ],
        'planet-4': [
            {
                title: 'JavaScript Promises',
                description: "Write a function called 'fetchData' that returns a promise. The promise should resolve with the string 'Data fetched successfully!' after a delay of 2 seconds.",
                exampleSolution: "function fetchData() {\n    return new Promise(function(resolve, reject) {\n        setTimeout(function() {\n            resolve('Data fetched successfully!');\n        }, 2000);\n    });\n}",
                evaluate: function(code) {
                    return code.includes("function fetchData()") &&
                           code.includes("return new Promise(function(resolve, reject) {") &&
                           code.includes("resolve('Data fetched successfully!');");
                }
            },
            {
                title: 'Async/Await',
                description: "Write an async function called 'getData' that uses 'fetchData' to retrieve data and then logs the result to the console.",
                exampleSolution: "async function getData() {\n    try {\n        const data = await fetchData();\n        console.log(data);\n    } catch (error) {\n        console.error(error);\n    }\n}",
                evaluate: function(code) {
                    return code.includes("async function getData()") &&
                           code.includes("const data = await fetchData();") &&
                           code.includes("console.log(data);");
                }
            },
            {
                title: 'JavaScript Modules',
                description: "Create a module named 'mathUtils' that exports functions for addition, subtraction, multiplication, and division.",
                exampleSolution: "// mathUtils.js\nexport function add(a, b) {\n    return a + b;\n}\n\nexport function subtract(a, b) {\n    return a - b;\n}\n\nexport function multiply(a, b) {\n    return a * b;\n}\n\nexport function divide(a, b) {\n    return a / b;\n}",
                evaluate: function(code) {
                    return code.includes("export function add(a, b)") &&
                           code.includes("export function subtract(a, b)") &&
                           code.includes("export function multiply(a, b)") &&
                           code.includes("export function divide(a, b)");
                }
            },
            {
                title: 'JavaScript Classes',
                description: "Create a class named 'Person' with properties 'name' and 'age'. Add a method named 'greet' that returns a greeting message.",
                exampleSolution: "class Person {\n    constructor(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    greet() {\n        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;\n    }\n}",
                evaluate: function(code) {
                    return code.includes("class Person {") &&
                           code.includes("constructor(name, age)") &&
                           code.includes("greet() {");
                }
            },
            {
                title: 'Advanced Error Handling',
                description: "Write a function called 'divide' that takes two numbers as parameters and returns the result of dividing the first number by the second number. Use async/await and handle any errors that occur.",
                exampleSolution: "async function divide(x, y) {\n    try {\n        if (y === 0) {\n            throw new Error('Division by zero');\n        }\n        return x / y;\n    } catch (error) {\n        throw error;\n    }\n}",
                evaluate: function(code) {
                    return code.includes("async function divide(x, y)") &&
                           code.includes("throw new Error('Division by zero');");
                }
            }
        ]
    };

    let currentChallengeIndex = 0;
    let currentPlanetId = '';

    function loadChallenge(planetId) {
        const planetChallenges = challenges[planetId];
        if (planetChallenges && planetChallenges.length > 0) {
            const challenge = planetChallenges[currentChallengeIndex];
            $('#challenge-title').text(challenge.title);
            $('#editor').text('// ' + challenge.description);
            $('#output').text('');
            $('#navigation-buttons').addClass('hidden'); // Hide navigation buttons initially
        }
    }

    function evaluateCurrentChallenge(code) {
        const planetChallenges = challenges[currentPlanetId];
        const challenge = planetChallenges[currentChallengeIndex];
        if (challenge.evaluate(code)) {
            $('#output').text('Great job! Challenge completed.');
            currentChallengeIndex++;
            if (currentChallengeIndex < planetChallenges.length) {
                loadChallenge(currentPlanetId);
            } else {
                $('#output').text('All challenges completed for this planet!');
                $('#navigation-buttons').removeClass('hidden'); // Show navigation buttons
                $('#next-planet-button').removeClass('hidden'); // Show "Next Planet" button
            }
        } else {
            $('#output').text('Keep trying! Something is not quite right.');
        }
    }

    // Show space map when "Start Game" is clicked
    $('#start-game').click(function() {
        $('#main-menu').addClass('hidden');
        $('#space-map').removeClass('hidden');
    });

    // Show coding challenge when a planet is clicked
    $('.planet').click(function() {
        currentPlanetId = $(this).attr('id');
        currentChallengeIndex = 0; // Reset to first challenge
        startChallenge(currentPlanetId);
    });

    function startChallenge(planetId) {
        $('#space-map').addClass('hidden');
        $('#coding-challenge').removeClass('hidden');
        loadChallenge(planetId);
    }

    // Handle code submission
    $('#submit-code').click(function() {
        var code = $('#editor').text();
        evaluateCurrentChallenge(code);
    });

    // Navigation button handlers
    $('#home-button').click(function() {
        $('#coding-challenge').addClass('hidden');
        $('#main-menu').removeClass('hidden');
    });

    $('#back-button').click(function() {
        $('#coding-challenge').addClass('hidden');
        $('#space-map').removeClass('hidden');
    });

    $('#next-planet-button').click(function() {
        const nextPlanetMap = {
            'tutorial-planet': 'planet-1',
            'planet-1': 'planet-2',
            'planet-2': 'planet-3',
            'planet-3': 'planet-4',
            'planet-4': 'main-menu' // or wherever you want the endgame to redirect to
        };

        const nextPlanetId = nextPlanetMap[currentPlanetId];
        if (nextPlanetId) {
            currentPlanetId = nextPlanetId;
            currentChallengeIndex = 0; // Reset to first challenge of the next planet
            if (nextPlanetId === 'main-menu') {
                $('#coding-challenge').addClass('hidden');
                $('#main-menu').removeClass('hidden');
            } else {
                startChallenge(nextPlanetId);
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');

    document.addEventListener('mousemove', function(event) {
        const trail = document.createElement('div');
        trail.classList.add('cursor-trail');
        container.appendChild(trail);

        // Set trail position
        const x = event.clientX;
        const y = event.clientY;
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';

        // Remove trail after a short delay
        setTimeout(function() {
            trail.remove();
        }, 300);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const colors = ['#ff6347', '#ffa500', '#ffd700', '#32cd32', '#4169e1', '#9370db', '#ff69b4'];

    document.addEventListener('mousemove', function(event) {
        const trail = document.createElement('div');
        trail.classList.add('cursor-trail');
        
        // Randomly select a color from the array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        trail.style.backgroundColor = randomColor;

        container.appendChild(trail);

        // Set trail position
        const x = event.clientX;
        const y = event.clientY;
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';

        // Remove trail after a short delay
        setTimeout(function() {
            trail.style.opacity = '0'; // Fade out trail
        }, 100);

        // Remove trail element from DOM after transition
        trail.addEventListener('transitionend', function() {
            trail.remove();
        });

        // Check if cursor interacts with h1 heading
        const h1 = document.querySelector('h1');
        const h1Rect = h1.getBoundingClientRect();
        if (x >= h1Rect.left && x <= h1Rect.right && y >= h1Rect.top && y <= h1Rect.bottom) {
            h1.style.color = randomColor; // Change h1 color to match cursor trail
        } else {
            h1.style.color = '#fff'; // Reset h1 color to normal
        }
    });
});






