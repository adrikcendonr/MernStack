//1. what is virtual dom - optional

/*The Virtual DOM is a concept primarily used in React to enhance performance and the developer experience.
It's an in-memory replica of the actual Document Object Model (DOM). When changes in a React application occur,
they are first made to the Virtual DOM. React then employs an algorithm to compare the updated Virtual DOM with
its previous state, identifying the minimum number of changes needed. This process allows for efficient,
batched updates to the actual DOM, significantly reducing direct manipulation and improving performance. 
The Virtual DOM thus offers a more efficient way of updating the user interface in web applications, making it a 
key element in modern web development.
*/

//2. how react renders dom in conservative manner - optional

/*
React handles updating what you see on a website (the DOM) in a smart way to make things faster. 
Every time something changes (like when you click a button), 
React doesn't rebuild the whole tree. Instead, it builds a copy of the tree in its memory (this is the Virtual DOM) 
and only changes the specific spots that need to be updated. Then, it quickly compares this copy with the real tree 
and figures out the fewest changes needed to make the real tree look like the copy. This way, it avoids doing extra 
work, which makes your website run smoother and faster. 
*/

//3. create a class component named - Success and show some quotes on success in it

//Look in Success.js

//4. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success

//Look in Success.js
//Modified the Success Class component above

//5. create SuccessStory as another component, pass this as props in SuccessChild from Success component

//Look in SuccesStory.js
//Modified SuccesChild 
//Modified Success

//6. create UserSignIn component using uncontrolled way, should be class component

//Look in UserSignIn.js

//7. create Product component to accept ProductName and ProductPrice

//Look in Product.js

//8. pass a random value from SuccessStory component back to Success
//9. Create a class component and show all the lifecycle hooks;
//10. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.
//Look in LifeCycle.js