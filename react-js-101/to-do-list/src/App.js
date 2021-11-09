import { useState, useEffect } from "react";
function App() {
  const [toDo, setToDo] = useState("");
  const [jobList, setJobList] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }

    setJobList((current) => [toDo, ...current]);
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({jobList.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Submit</button>
      </form>
      <hr />
      <ul>
        {jobList.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
