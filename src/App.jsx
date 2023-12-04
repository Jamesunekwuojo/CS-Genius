import "./App.css";
import { characters } from "./MarvelData";

function App() {
  return (
    <div className="mainBody">
      <div className="topHeader">
        <h1 className="header">Computer Scientists that Made Impacts On CS Industry.</h1>
        <input placeholder="Search a Scientist Name" className="topInput" />
      </div>
      <div className="cardBody">
        {characters.map((data, index) => (
          <div key={index} className="card">
            <div className="main">
              <img  className="avatarImage" src={data.img1} alt={data.name} />
              <h2>{data.name}</h2>
              <p className="description">
                {data?.abilities[0]}
                <br />
                {data?.abilities[1]}
                <br />
                {data?.abilities[2]}
              </p>
              {}
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
