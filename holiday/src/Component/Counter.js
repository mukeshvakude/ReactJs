import  {useState} from 'react';

function Counter(){
    
    var [counter, setCounter] = useState(1);
    function onCounter(){
         counter = counter + 1;
         setCounter(counter);   
    }
    return (
       
        <>
        <h1>international Tour packages : {counter}</h1>
        <button onClick = {onCounter}>Click</button>
        </>
    )
}

export default Counter;