import logo from './logo.svg';

// import Practise from './Practise';
// import { useState } from 'react';



// function App() {
// Javascript
// const number1 =4;
// const number2=4
// const title = "A beautiful girl called Aluel The black Soldier"
// const description = "A beautiful girl called Aluel The black Soldier"
// const [counter,setCounter] =useState(0);
// 
// 
// function IncrementCounter(){
// console.log("clicked")
// setCounter((counter)=> counter+1)
// }
// let count = 0;
  // return (
    // <div  className='App'>
// {/*        */}
      // {/* <h1 style={{color:'red'}}>Hello React </h1> */}
      // {/* <label ></label> */}
      // {/* <button style={{padding:"2%",backgroundColor:"yellow",fontSize:"20px",borderRadius:"10%"}}>Delete</button> */}
      // {/* <p>{number1+7+number2}</p> */}
      // {/* <p>{counter}</p> */}
      // {/* <button onClick={IncrementCounter}>Increment</button> */}
      // {/* <Practise title={title} descript={description} /> */}
    // {/* </div> */}
  // );
// }
// 
// export default App;
// 

import { BrowserRouter as Router,Routes,Route ,Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Error from './pages/Error';

import Practise from './Practise';
function App (){
  return (
    <Router>
      <nav>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path='/home' element ={<Home/>} />
        <Route path='/about' element ={<About/>} />
        <Route path='/Profile' element ={<Profile/>} />
        <Route path='*' element ={<Error/>} />
        

      </Routes>
      <div>Footer</div>
    </Router>
    // < div className="App">
// {/*        */}
// {/* <Practise/> */}
    // </div>
  )
}
export default App;
