/*
1. Create a setup for Express Web Server
Install express and see server.js

2. Configure a route name - Student
Created student route in route folder and added configuration to server.js

3. Create a express app and configure in server.js to delegate routes with - "Student"
See server.js

//4. Create API's in default setup - getStudentDetails - Pass Student 
info like - Name, Age, Address, Session as query string
Modified student.js to add getStudentDetails endpoint

//5. Save this information received in #4  to a file named studentIfo using fs module async way
Imprted the fs module and updated the getStudentDetails 

//6. Create a setup for webpack
Installed webpack using CLI and created and configured webpack.config.js, as well as updated
package.json script

What is the purpose of babel, are most important configurations we get from webpack
Babel is a JavaScript compiler that transforms modern ECMAScript (ES6+) code, including 
JSX for React applications, into backward-compatible versions for broader browser compatibility. 
Webpack is a module bundler that efficiently compiles and organizes JavaScript files and other assets
like images and CSS. Key features of Webpack include defining entry and output points for the 
application, using loaders to process different file types, utilizing plugins for extended functionality,
and setting the build mode whether its development or production for appropriate optimizations. These tools
together allow developers to write modern, efficient JavaScript code that works across various environments.

What is the purpose of -ReactDOM.createRoot?

ReactDOM.createRoot allows React to prepare multiple UI versions 
simultaneously, enhancing application performance and responsiveness. It offers an opt-in approach 
to using concurrent mode, which can interrupt and prioritize rendering tasks, leading to smoother UI 
interactions and a non-blocking user experience. Essentially, ReactDOM.createRoot is a forward-looking 
feature, laying the groundwork for future advancements in React, especially in terms of rendering 
efficiency and concurrency management, as it allows the site to be updated seamlessly without losing any 
performance or availability. */