import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Project/Project';
import Work from './components/Work/Work';

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
