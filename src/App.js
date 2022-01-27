
import './App.css';
import About from './components/About';
import { Header } from './components/Header';
import Projects from './components/Projects';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <About />
      <Projects />
    </div>
  );
}

export default App;
