import './App.css';
import Employee from './components/Employee';

function App() {
  const employeeInfo = [
    {
      firstName: 'John',
      lastName: 'Smith',
      phone: '555-555-5551',
      ID: '1',
    }, 
    {
      firstName: 'Bob',
      lastName: 'Barker',
      phone: '555-555-5552',
      ID: '2',
    },
    {
      firstName: 'Charlize',
      lastName: 'Theron',
      phone: '555-555-5553',
      ID: '3',
    },
    {
      firstName: 'Charles',
      lastName: 'Barkley',
      phone: '555-555-5554',
      ID: '4',
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Directory</h1>
        {employeeInfo.map((employee) => {
            return <Employee key={employee.ID} {...employee} />;
          })
        }
      </header>
    </div>
  );
}

export default App;
 