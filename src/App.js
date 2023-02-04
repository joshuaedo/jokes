import "./App.css";
import Joke from "./components/Joke";

function App() {
  return (
    <div className="App container">
      <Joke
        Setup="Why did the tomato turn red?"
        Punchline="Because it saw the salad dressing!"
      />
      <Joke
        Setup="Why did the scarecrow win an award?"
        Punchline="Because he was outstanding in his field."
      />
      <Joke Setup="What do you call a fake noodle?" Punchline="An impasta." />
      <Joke
        Setup="What do you call an alligator in a vest?"
        Punchline="An investigator."
      />
      <Joke
        Setup="Why don’t scientists trust atoms?"
        Punchline="Because they make up everything!"
      />
    </div>
  );
}

export default App;
