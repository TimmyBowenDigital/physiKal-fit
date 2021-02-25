import React from 'react';
import './App.css';
import {AddExerciseSection} from "./components/add-exercise/add-exercise";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PhysiKal Fit</h1>
          <div>
              <h2>Do you want to plan your workouts easier?</h2>
              <h2>Do you want to spend less time thinking about what to train today?</h2>
          </div>
      </header>
        <AddExerciseSection />
    </div>
  );
}

export default App;
