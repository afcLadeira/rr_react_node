import { Button } from "@chakra-ui/react";
import { useReducer, useState } from "react";

export default function UseReducerExample() {
  return (
    <div>
      <SimpleUseReducer></SimpleUseReducer>
      <hr />
      <SimulateSetState></SimulateSetState>
      <hr />
      <ReducerWithDispatch></ReducerWithDispatch>
    </div>
  );
}

function countReducer(
  state, //count
  step
) {
  return state + step;
}

//const [state, dispatch] = useReducer(reducer, initialArg, init)
function SimpleUseReducer({ step = 3, initialCount = 0 }) {
  //const [count,setCount] = useState(initialCount)
  const [count, setCount] = useReducer(countReducer, initialCount);
  const increment = () => setCount(step);

  return (
    <div style={{margin:'20px 0'}}>
      <h4>useReducer: basic</h4>
      <Button onClick={increment}>counter: {count}</Button>
   
    </div>
  );
}

function stateReducer(state, action) {
  return {
    ...state,
    ...(typeof action === "function" ? action(state) : action),
  };
}

export function SimulateSetState({ step = 5, initialCount = 0 }) {
  const [state, setState] = useReducer(stateReducer, {
    count: initialCount,
    randomColor: 'white',
  });

  let { randomColor, count } = state;

  const increment = () =>
    setState((prevState) => ({ count: prevState.count + step }));

  const changeColor = () => setState({ randomColor: Math.floor(Math.random()*16777215).toString(16) });

  return (
    <div style={{margin:'20px 0'}}>
      <h4>useReducer : simulate class setState</h4>
      <div style={{backgroundColor:`#${randomColor}`}}>

      <Button onClick={increment}>counter: {count}</Button>
      <Button onClick={() => changeColor()}>
        random color: #{randomColor}
      </Button>
      </div>
   
    </div>
  );
}

function countReducer3(state, action) {
  switch (action.type) {
    case "INCREMENT":
return {count : state.count + action.step}
    case "DECREMENT":
      return {count : state.count - action.step}
    default:
     throw new Error(`Wrong action type: ${action.type}`)
  }
}

export function ReducerWithDispatch({ step = 2, initialCount = 0 }) {
  const [state, dispatch] = useReducer(countReducer3, { count: initialCount });

  let { count } = state;

  const increment = () => dispatch({ type: "INCREMENT", step });

  const decrement = () => dispatch({ type: "DECREMENT", step });

  return (
    <div style={{margin:'20px 0'}}>
      <h4>useReducer : dispatch</h4>
      <Button onClick={decrement}>- {step}</Button>
      <span style={{margin:'0 20px'}}>counter: {count}</span>
      <Button onClick={increment}>+ {step}</Button>
     
    </div>
  );
}
