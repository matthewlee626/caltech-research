import React from 'react';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      second: "",
      third: ""
    };
  }

  componentDidMount() {
    this.setState({
      first: ("00" + parseInt(Math.random()*30)).slice(-3),
      second: ("00" + parseInt(Math.random()*30)).slice(-3),
      third: ("00" + parseInt(Math.random()*30)).slice(-3)
    })
  }


  render(){
    return (
      <div className="App">
        <div className="images">
          <img src={"./imgs/" + this.state.first +".jpg"} className="identify" alt-text="picture 1"/>
          <img src={"./imgs/" + this.state.second +".jpg"} className="identify" alt-text="test"/>
          <img src={"./imgs/" + this.state.third +".jpg"} className="identify" alt-text="test"/>
        </div>
        <div className="info">
          <p>Which pictures are the same?</p>
        </div>
        <div className="options">
        <form action="https://airtable-api-626.herokuapp.com/api" method="POST">
            <input type="text" id="name" name="name" placeholder="Name"/>
            <input type="hidden" id="pic1" name="pic1" value={parseInt(this.state.first)}/>
            <input type="hidden" id="pic2" name="pic2" value={parseInt(this.state.second)}/>
            <input type="hidden" id="pic3" name="pic3" value={parseInt(this.state.third)}/>
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
