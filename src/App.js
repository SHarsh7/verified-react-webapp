 
import './App.css';
import FormComponent from 'webpack2';


function App() {
  const handleSubmit = (formData) => {
    console.log('Submitted Data:', formData);
    // Add your submission logic here
  };
  return ( 
    <div className="App">
 <FormComponent onSubmit={handleSubmit}></FormComponent>
    </div>
  );
}

export default App;
