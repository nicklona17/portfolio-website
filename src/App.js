import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import ProjectList from './components/projectList/ProjectList';
import Contact from './components/contact/Contact';
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { useContext } from "react";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="App" style={{
      backgroundColor: darkMode ? "rgb(14, 14, 14)" : "rgb(234, 229, 218)",
      color: darkMode ? "rgb(234, 229, 218)" : "rgb(14, 14, 14)"
    }}>
      <Toggle />
      <Home />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
