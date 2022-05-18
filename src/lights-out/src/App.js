import logo from './logo.svg';
import Table from './Table'
import './App.css';

function App() {
  return (
    <div className="App">
      <Table rows = {5} coloms = {5}  win_rate = {0.25} />
    </div>
  );
}

export default App;
