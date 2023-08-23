// THEORY OF REACT.JS

// Part 1 - Basic Knowledge:

// 1. What is React.js?
// 	  -React is an open-source JavaScript library developed by Facebook, used to build UX with re-usable components.
// 2. What are the key features of React.js?
//  	-Components, Virtual DOM, React Hooks, React Router
// 3. What is JSX?
//  	-JavaScript syntax is looks like HTML and can be used in JS files. This way there is no need to type insertAdajacentHTML() all the time, it’s done by React under the hood
// 4. What is a virtual DOM?
//  	-Reacts used the virtual DOM to compare the with the Real DOM, and it will only update the parts of the Real DOM that have change
// 5. What is the difference between props and state?
//  	-Props is used to pass defined data from parents to children components. In the other hand, state is used to manage data within the same component and it can be changed by setState
// 6. What is the role of Redux in a React.js application?
//  	-I haven’t gone as far into React. I can’t answer this question
// 7. What is the purpose of React Router?
//  	-Create a multi-page web app, with the use of links to different paths within in the app

// Part 2 - Code Implementation:

// 8. Create a simple React component that displays "Hello World!" as text.
const Greeting = () => {
  return (
    <>
      <h1>Hello World!</h1>
    </>
  );
};

export default Greeting;
// 9. Create a form component with input fields for name and email.
const Form = () => {
  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" />
        </div>
      </form>
    </>
  );
};

export default Form;
// 10. Implement a React component that displays a list of items.
const ITEMS = [
  {
    id: "i1",
    title: "Banana",
  },
  { id: "i2", title: "Apple" },
  {
    id: "i3",
    title: "lemon",
  },
  {
    id: "i4",
    title: "Orange",
  },
];

const List = () => {
  const itemsList = ITEMS.map((item) => {
    <il>
      <h2>{item.title}</h2>
    </il>;
  });
  return <ul>{itemsList}</ul>;
};
export default List;
// 11. Use React Router to create a multi-page application with a navigation menu.
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import ItemsPage from "./pages/Items";
import ItemsDetailPage from "./pages/ItemDetail";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/Items", element: <ItemsPage /> },
      { path: "/Items/:ItemId", element: <ItemsDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// Part 3 - Advanced Concepts:

// 12. Explain the concept of React hooks.
//  -Stateful logic re-usable functions within other function components
// 13. What are higher-order components in React and how are they useful?
//  -Component functions that use other componenents as params
// 14. Explain the difference between server-side rendering and client-side rendering in React.
//  -SSR the HTML is rendered from server http response and build by the browser before excuting JS
//  -CSR the response is basic HTML index, and React build the page using the browser
// 15. How would you optimize the performance of a React application?
//  -Maintaning a clean code
//  -Being carefull of excessive http requests
//  -Unnecessary components state changes to avoid re-renders of components
//  -React fragments to avoid unnecessary divs
// 16. What is the role of context in React?
//  -To reduce the use of props drilling and to be able to use useState Hook of an unrelated component
//   within compontent tree
