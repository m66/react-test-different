import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.value);

    return (
    <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>{' '}
        {count}{' '}
        <button onClick={() => dispatch(increment())}>Increment</button>{' '}
        <button>Add Num</button>
    </div>
  )
}

export default Counter