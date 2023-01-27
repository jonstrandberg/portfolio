import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <p>
        <Typed
                    strings={[
                      "Codeclan Graduate",
                      "Aspring Front End Developer",
                      "Back End Developer",
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
        </p>
    </div>
  );
}

export default App;
