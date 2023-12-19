/*What is the purpose of babel, are most important configurations we get from webpack
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