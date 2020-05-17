import React from 'react';
import './App.css';

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
    var possible = []
    for(var j = 0; j < 30; j++){
      possible.push(j)
    }

    var numbers = []
    
    for(var i = 0; i < 3; i++){
      var index = Math.floor(Math.random()*possible.length)
      numbers.push(possible.splice(index, 1))
    }

    this.setState({
      first: ("00" + parseInt(Math.random()*56)).slice(-3),
      second: ("00" + parseInt(Math.random()*56)).slice(-3),
      third: ("00" + parseInt(Math.random()*56)).slice(-3)
    })
  }

  render(){
    return (
      <div className="App">
        <div className="info">
          <p>Some pictures are of Persian cats. Some are of Ragdoll cats.</p>
          <p>Which pictures are the same?</p>
        </div>
        <div className="images">
          <img src={"./imgs/" + this.state.first +".jpg"} className="identify" alt="cat 1"/>
          <img src={"./imgs/" + this.state.second +".jpg"} className="identify" alt="cat 2"/>
          <img src={"./imgs/" + this.state.third +".jpg"} className="identify" alt="cat 3"/>
        </div>
        <div className="options">
          <form action="https://airtable-api-626.herokuapp.com/api" method="POST">
              <input type="text" id="name" name="name" placeholder="Name" required/>
              <input type="hidden" id="pic1" name="pic1" value={parseInt(this.state.first)}/>
              <input type="hidden" id="pic2" name="pic2" value={parseInt(this.state.second)}/>
              <input type="hidden" id="pic3" name="pic3" value={parseInt(this.state.third)}/>
              <select name="match" id="match">
                <option disabled value="0">None</option>
                <option value="1">1,2</option>
                <option value="2">1,3</option>
                <option value="3">2,3</option>
                <option value="4">1,2,3</option>
              </select>
              <button class="submit" type="submit">Submit</button>
            </form>
        </div>
        <iframe class="airtable-embed" title="data" src="https://airtable.com/embed/shrTzj6Gg4WlzSGrc?backgroundColor=red&viewControls=on" frameborder="0" onmousewheel="" width="75%" height="500px" style={{margin: "50px", background: "transparent", border: "1px solid #ccc"}}></iframe>
      </div>
    );
  }
}

export default App;
