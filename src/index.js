import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* Challenge:

EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because 
they always take things literally."

If you don't pass in a "question" prop, how might you make it only 
show the punchline?
*/


//render a database of jokes using react as cards on the dom?
// function Jokes() {
//     return (
//         <>
//             {
//                 jokeList.map((joke) => {
//                     return (
//                         <div className="box">
//                             <strong>{joke.setup}</strong>
//                             <br />
//                             <p>{joke.punchline}</p>
//                         </div>
//                     );
//                 })
//             }
//         </>
//     );
// }




