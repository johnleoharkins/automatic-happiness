import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import WeatherWidget from "./components/weather/WeatherWidget";
import Landing from "./containers/Landing";
import {initializeApp} from "firebase/app"
export const FirebaseApp = initializeApp({
    apiKey: "AIzaSyAvvkUjIRw_VDIByMeHmWKwormdnrvI_eg",
    authDomain: "ethereal-eidenai.firebaseapp.com",
    projectId: "ethereal-eidenai",
    storageBucket: "ethereal-eidenai.appspot.com",
    messagingSenderId: "356180346739",
    appId: "1:356180346739:web:f03afb64ae515527286706",
    measurementId: "G-7CLTCBFGF7"
})

function App() {
  return (
    <div className="App">
        <NavBar />
        <Landing />
    </div>
  );
}

export default App;
