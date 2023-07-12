import Header from './Components/Header';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Main from './Pages/Main';
import Projects from './Pages/Projects';
import TechStack from './Pages/TechStack';

const App = () => {
  return (
    <div id="app" className="dark:bg-gray-900">
      <Header />
      <Main />
      <TechStack />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default App;
