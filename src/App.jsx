import { useReducer } from 'react';
import './App.css';

function App() {

  const initialValue = {count:0};

  const reducer = (state,action) => {
   switch(action.type){
     case 'Increment':
      return{count: state.count + 1};
      case 'Decrement':
        return{count: state.count - 1};
      default: 
      return{count: state.count}
   }
  }
  const [state,dispatch] = useReducer(reducer,initialValue)
  
  const countIncrement = () => {
    dispatch({type:'Increment'})
  }
  const countDecrement = () => {
    dispatch({type:'Decrement'})
  }


  return (
    <div className="App">
       <h1>Count: {state.count}</h1>
       <button onClick={countIncrement}>Increment</button>
       <button onClick={countDecrement}>Decrement</button>
    </div>
  );
}

export default App;
