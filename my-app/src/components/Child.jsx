// function Child(props) {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h2>Age: {props.age}</h2>
//     </div>
//   );
// }

// export default Child;
import { useContext } from "react";
import { MyContext } from "../context";

function Child() {
  const data = useContext(MyContext);

  return <h2>{data}</h2>;
}

export default Child;