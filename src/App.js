import logo from './logo.svg';
import './App.css';
import { Header, Footer } from './Home';
import Contact from './Contact'
import Welcome from './Welcome'
function App() {
  return (

    <div>
      <Welcome title="Hai How Are man"/>
      <Contact name="teacher" />
      <Contact name="Stutent" />
      <Welcome title="This is Unmesh"/>

    </div>
  );
}

export default App;
