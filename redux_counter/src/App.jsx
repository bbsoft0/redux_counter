import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './redux/counter';

import './App.css'

function App() {
  const {count} = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <div className="app">
        <h1>The count is {count}</h1>
        <button onClick={() =>  dispatch(increment())}>  increment </button>
        <button onClick={() =>  dispatch(decrement())}>  decrement </button>
        <button onClick={() =>  dispatch(incrementByAmount(10))}>  incrementByAmount </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

    </>
  )
}

export default App
