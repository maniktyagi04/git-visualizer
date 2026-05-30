import { useState } from "react";
import RepoSelector from "./components/RepoSelector";
import GitGraph from "./components/GitGraph";


function App () {
  const [data, setData] = useState(null);

  async function loadRepo() {
    const response = await fetch(
      "http://localhost:8000/git"
    );

    const result = await response.json();
    setData(result);

  }

  return (
    <div style={{padding: "20px"}}>
      <h1>Git Working Tree Visulaizer</h1>

      <RepoSelector onLoad={loadRepo} />

      {data && (
        <>
          <h2>Current Branch : {data.currentBranch}</h2>
          <h3>Branches</h3>

          <ul>
            {data.branches.map((branch) => (
              <l1 key={branch}>{branch}</l1>
            ))}
          </ul>

            <GitGraph commits={data.commits} /> 
        </>
      )}
    </div>
  );
}


export default App;