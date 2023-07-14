import React, {useState} from 'react'
import Person from './Person';

const App = () => {

  // let array = useState(10)
  // let counter = array[0];
  // let setCounter =  array[1]

  let [counter, setCounter] = useState(10);

  // console.log(array)


  // array [10,function ]
  // console.log(`The first value of variable is ${variable[0]}`)
  // console.log(`The second value of variable is ${variable[1]}`)


  function decrement(){

    setCounter( (counter) => {
      return counter - 1}
      )

    //counter = 10
    // setCounter( counter - 1)
    //counter = 10
    // setCounter( counter - 1)
   

    // counter = counter - 1;
    // counter = counter - 1;
    // console.log(`Hello, I am in the decrement function: ${counter}`)
   
  }

  function increment(){

    setCounter(counter + 1)
    setCounter(counter + 1)
    
    // counter = counter + 1;
    // counter = counter + 1;
    // console.log(`Hello, I am in the increment function: ${counter}`)

  }


  return (
    <>
    
    <h1>Hello, welcome to my cool APP</h1>
    
    <button onClick={decrement}> - </button>
    <span> {counter} </span>
    <button onClick={increment}> + </button>

    <hr/>
    <Person />
    </>
  )
}

export default App