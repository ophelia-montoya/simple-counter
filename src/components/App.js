import '../App.css';
import React, {Component, useState} from 'react';


// function App() {

//   let [counter, setCounter] = useState(0);

//   const increaseCount = () => {
//     counter++;
//     setCounter(counter);
//   }

//   const decrementCount = () => {
//     counter--;
//     setCounter(counter);
//   }

 
//   return (
//     <div className="App">
//       <h2>{counter}</h2>

//       <button onClick={increaseCount}>+1</button>
//       <button onClick={decrementCount}>-1</button>

      
//     </div>
//   );
// }



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increase = () => {
    this.setState({count: this.state.count + 1});
  }

  decrease = () => {
    this.setState({count: this.state.count - 1});
  }



  render() {

    return (
      <div className='App'>
        <h2>{this.state.count}</h2> 
        <button onClick={this.increase}>+1</button>
        <button onClick={this.decrease}>-1</button>
      </div>
    )
  }
}



// export default App;
