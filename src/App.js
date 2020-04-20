import React from 'react';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="images">
          <img src="./imgs/001.jpg" className="identify" alt-text="picture 1"/>
          <img src="./imgs/001.jpg" className="identify" alt-text="test"/>
          <img src="./imgs/001.jpg" className="identify" alt-text="test"/>
        </div>
        <div className="info">
          <p>Which pictures are the same?</p>
        </div>
        <div className="options">
        <form action="http://localhost:8080/api" method="POST">
            <input type="text" id="name" name="name" placeholder="Name"/>
            <select name="match" id="match">
              <option value="0">None</option>
              <option value="1">1,2</option>
              <option value="2">1,3</option>
              <option value="3">2,3</option>
              <option value="4">1,2,3</option>
            </select>
            <button class="submit" type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
