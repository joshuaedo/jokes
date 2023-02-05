import "./App.css";
import Joke from "./components/Joke";
import jokesData from "./components/jokesData";

function App() {
  const jokesCard = jokesData.map((joke) => {
    return <Joke Setup={joke.Setup} Punchline={joke.Punchline} />;
  });

  return <div className="App container">
    {jokesCard}
  </div>;
}

export default App;
