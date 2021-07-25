import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [syllablesPerMeasure, setSyllablesPerMeasure] = useState(7);
  const [totalMeasures, setTotalMeasures] = useState(4);
  const [groupCount, setGroupCount] = useState(2);
  const [winningIndex, setWinningIndex] = useState("");

  return (
    <div>
      <h1>
        How to win at <em>Eenine Meenie Miney Moe!</em>
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setWinningIndex(
            eenieMeenie(syllablesPerMeasure, totalMeasures, groupCount)
          );
        }}
      >
        <label htmlFor="syllablesPerMeasure">
          <strong>How many syllables per meausure are you singing? </strong>
          <br />
          <input
            type="text"
            value={syllablesPerMeasure}
            onChange={(e) => setSyllablesPerMeasure(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="totalMeasures">
          <strong>How many total measures are there? </strong>
          <br />
          <input
            type="text"
            value={totalMeasures}
            onChange={(e) => setTotalMeasures(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="totalMeasures">
          <strong>How many people are playing? </strong>
          <br />
          <input
            type="text"
            value={groupCount}
            onChange={(e) => setGroupCount(e.target.value)}
          />
        </label>
        <br />
        <button>Win big!</button>
      </form>
      <div>
        {!winningIndex ? null : (
          <p>To win, make sure you are #{winningIndex} in the first round</p>
        )}
      </div>
    </div>
  );
};

function eenieMeenie(syllables, measures, groupCount) {
  const portionOfRoundsUsed = (syllables * measures) / groupCount;

  const roundsStarted = Math.ceil(portionOfRoundsUsed);

  const remainingTurns = (roundsStarted - portionOfRoundsUsed) * groupCount;

  const winningPlacement = Math.round(groupCount - remainingTurns);

  return winningPlacement;
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
