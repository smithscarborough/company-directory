import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Directory</h1>
        <Employee firstName="Smith" lastName="Scarborough" phone="555-555-5551" />
        <Employee firstName="Bob" lastName="Barker" phone="555-555-5552" />
        <Employee firstName="Charlize" lastName="Theron" phone="555-555-5554" />
        <Employee firstName="Charles" lastName="Barkley" phone="555-555-5553" />
      </header>
    </div>
  );
}

export default App;
 