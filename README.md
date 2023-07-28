## Hometask #2 | React, Redux

1. Your task is to rewrite the existing notes app using React.js, Redux (or Redux Toolkit) and TypeScript.
2. All the functionality should be the same - users can add, edit and remove notes, archive and unarchive them.  
3. Store data in the redux store. Prepopulate it with 7 notes and use it by default as an initial state so that they are shown when the page is reloaded.
4. Aim to structure components properly (container, page, component), reuse components, and reflect the apps component hierarchy:
https://dev.to/admantium/structuring-react-components-n6g
5 .Bonus task: Tables for “List of notes” and “Summary” should use the same table component.



The goal of the task is to let you get better acquainted with React.js and Redux. If you don’t know some of the APIs needed for the task, you might use these resources as references:
https://reactjs.org/docs/getting-started.html
https://redux.js.org/api/api-reference


While working on your task you should utilize all of the following:
<div>
  1)React
<ul>
  <li>Functional (a.k.a. stateless) component </li>
<li>React Hooks</li>
</ul>
2.Redux
<ul>
<li>Use Action Creators, write meaningful action names </li>
<li>Keep the immutability and readability of your reducers</li>
<li>Do not transform your store data in the components</li>
<li>Use the Redux DevTools Extension for Debugging</li>
</ul>
</div>

To set up the basic React app structure use Create React App:
https://reactjs.org/docs/create-a-new-react-app.html

Using template “typescript”:
npx create-react-app my-app --template typescript

Or use the following guide:
https://create-react-app.dev/docs/adding-typescript


To connect the Redux library use Redux Core or Redux Toolkit (which is not recommended for beginners):
https://redux.js.org/introduction/getting-started


Or, as a basic boilerplate use the following repo:
https://github.com/yogeshdatir/React-Notes-and-Collections/tree/master/Redux/redux-boiler-plate/src/components
 
Use the following guide for writing the application using the best practices:
https://redux.js.org/style-guide/style-guide

The task should take 1-3 days. If you have any questions, do not hesitate to ask them in the Slack channel #task2.
