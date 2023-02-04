import "./Joke.css";

function Joke({ Setup, Punchline }) {
  return (
    <div className="Joke">
      <h2>{Setup}</h2>
      <p>{Punchline}</p>
    </div>
  );
}

export default Joke;
