import './App.css';
import Palette from './components/Palette';
import seedColors from './seedColors';
// import seedColors from './seedColors';


function App() {
  return (
    <div className>
      <Palette palette={seedColors[2]} />
    </div>
  );
}

export default App;
