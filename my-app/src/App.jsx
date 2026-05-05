// import Child from "./components/Child";
// import Users from "./components/Users";

// function App() {
//   const name = "Farhan";
//   const age = 20;

//   return (
//     <div>
//       <Child name={name} age={age} />
//     </div>
//   );
// }


// function App() {
//   return (
//     <div>
//       <h1>User List</h1>
//       <Users />
//     </div>
//   );
// }

// export default App;
// import Counter from "./components/Counter";

// function App() {
//   return <Counter />;
// }

// export default App;

import { MyContext } from "./context";
import Child from "./components/Child";

function App() {
  return (
    <MyContext.Provider value="Hello from Context">
      <Child />
    </MyContext.Provider>
  );
}

export default App;
