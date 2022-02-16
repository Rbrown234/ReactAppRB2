//import logo from './logo.svg';
import shoes1 from './pexels-photo.jpg';
import shoes2 from './blackshoe.jpg';
import shoes3 from './pjimage-1-9.webp';
import shoes4 from './boots-3.png';
import './App.css';
import raw from "./ToS.txt"
import { useState } from "react";
//import { Route, IndexRoute } from 'react-router';
import background from './cloud-background.jpg'







//var __html = require('./ToS.html');
//var template = { __html: __html };



function App() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [checked, setChecked] = useState(false);

  const canBeSubmitted = () => {
    return checked ? setIsDisabled(true) : setIsDisabled(false);
  };

  const onCheckboxClick = () => {
    setChecked(!checked);
    return canBeSubmitted();
  };
  return (
    
    <div className="App">
      <header className="App-header">
        
      <div style={{backgroundImage:`url(${background})`}}>
        <h1>
          Welcome to Cob's! 
        </h1>
      </div>

        
        
      </header>
      <div id="pagebody">
        <div id="shoe_pictures">
          
          <img src={shoes1} alt="shoes" class="shoe-image"></img>
          <img src={shoes2} alt="shoes" class="shoe-image"></img>
          <img src={shoes3} alt="shoes" class="shoe-image"></img>
          
        </div>
        
        <div id="termsofservice">
            <input type="checkbox" onClick={onCheckboxClick} />
          I accept Cob's Terms of Service and Privacy Policy 
        <object width="300" height="250" type="text/plain" data={raw} border="0" aria-labelledby="Terms for Cobblers"></object>
            <button type="submit" disabled={isDisabled}>
              Continue
          </button>
        </div>
        
        <div id="email_input">
          <form>
            <label>
              Please input your email to receive newsletters:
              <input type="text" name="email" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>

          
        

        <div id="moreshoes">
          <img src={shoes4} alt="shoes" class="shoe-image"></img>
        </div>

      </div>
      
    </div>
  );
}

export default App;
