## REPOSITORY TO LEARN ABOUT JEST - JAVASCRIPT UNIT TESTING:

1. Resources:

   - Official Docs:

     +, https://jestjs.io/

   - Tutorial Video 1: Websimplified (14 minutes):

     +, https://www.youtube.com/watch?v=FgnxcUQ5vho&ab_channel=WebDevSimplified

   - Tutorial Video 2: Traversy Media (58 minutes)

     +, https://www.youtube.com/watch?v=7r4xVDI2vho&ab_channel=TraversyMedia

2. Fundamentals:

   a. What is JEST ?

   - JEST is a Javascript Testing Framework.
   - It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

   b. Basic of Unit Testing:

   - We only use JEST in dev environment to perform unit testing

   - With unit test, we're testing a small function / small part of the code

3. Commit History

   a. 1st Commit: Getting Started,

   - Run the following commands:

     `$ cd "WebDev Simplified Tutorial"`

     `$ npm init -y`

     `$ npm install --save-dev jest`

   - See package.json:
     `"scripts": {`
     `"test": "jest --coverage"`
     `},`

   b. 2nd Commit: How to run Tests:

   - See any files that has: .test.js

   - Run: `$ npm test`

   - after you run the test, you will see in the terminal console the result of
     the test

   - The command will generate a folder called coverage
     > dive in there, look for index.html to see a full report of the test
