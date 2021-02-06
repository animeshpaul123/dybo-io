import { Redirect, Route } from 'react-router-dom';
import './App.css';
import Desert from './pages/desert';
import Forest from './pages/forest';
import Ocean from './pages/ocean';
import { primaryColors } from './colorUtility'
function App() {
  return (
    <div className="App">
      <Route path="/forest/register" render={() => <Forest {...primaryColors} />} />
      <Route path="/ocean/register" render={() => <Ocean {...primaryColors} />} />
      <Route path="/desert/register" render={() => <Desert {...primaryColors} />} />
      <Redirect from="/" to="/forest/register" />
    </div>
  );
}

export default App;
