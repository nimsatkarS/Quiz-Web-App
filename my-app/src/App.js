// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
// import { Switch } from 'react-router-dom';



// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('white');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(()=>{
      setAlert(null)
    },3000)
  };

  const tooggleMode = () => {
    if (Mode === 'white') {
      setMode('black');
      document.body.style.backgroundColor = 'gray';
      document.body.style.color = 'white';
      showAlert("Enable 'DARK' Mode", "success");
    } else {
      setMode('white');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      // Include the 'type' argument here as well
      showAlert("Enable 'Light' Mode", "success");
    }
  };

  return (
    <>
{/* <Router> */}
      <Navbar title="TextUtils" mode={Mode} toggleMode={tooggleMode} />
      <Alert alert={alert} />
      <Textarea showAlert={showAlert}/>

      {/* <Switch>
          <Route path="/About">
           <About/>
          </Route>
          <Route path="/">
          <Textarea showAlert={showAlert}/>
          </Route>
        </Switch>
        </Router> */}
    </>
  );
}

export default App;
