// import Form from "./components/Form"; // change component here

// function App() {
//   return <Form />; // render one at a time
// }

// export default App;




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

// import { MyContext } from "./context";
// import Child from "./components/Child";

// function App() {
//   return (
//     <MyContext.Provider value="Hello from Context">
//       <Child />
//     </MyContext.Provider>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// BrowserRouter = enables routing
// Routes = container for routes
// Route = defines path
// Link = navigation without reload

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> {/* go to / */}
        <Link to="/about">About</Link> {/* go to /about */}
        <Link to="/contact">Contact</Link> {/* go to /contact */}
      </nav>

      {/* Route mapping */}
      <Routes>
        <Route path="/" element={<Home />} /> 
        {/* if URL = / → show Home */}

        <Route path="/about" element={<About />} />
        {/* if URL = /about → show About */}

        <Route path="/contact" element={<Contact />} />
        {/* if URL = /contact → show Contact */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
