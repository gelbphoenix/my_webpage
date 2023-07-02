import Header from './Components/Header';
import About from './Pages/About';
import Career from './Pages/Career';
import Contact from './Pages/Contact';
import Main from './Pages/Main';
import Projects from './Pages/Projects';

const App = () => {
  return (
    <div className="dark:bg-gray-700">
      <Header />
      <Main />
      <Career />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default App;
