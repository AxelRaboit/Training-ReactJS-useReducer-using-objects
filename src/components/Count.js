import React, { useReducer } from 'react';

const initialState = {
    countOne: 0,
    countTwo: 0
};

const reducer = (state, action) => {

    switch(action.type) {
        case 'increment':
            return {...state, countOne: state.countOne + action.value}
        case 'decrement':
            return {...state, countOne: state.countOne - action.value}
        case 'increment2':
            return {...state, countTwo: state.countTwo + action.value}
        case 'decrement2':
            return {...state, countTwo: state.countTwo - action.value}
        case 'reset':
            return initialState
        
        default:
            return state
    }
}

function Count() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div className='row'>
            <div className='col-6 text-center'>
                <p className='h1'>{count.countOne}</p>

                <button className='btn btn-danger m-3 text-light' onClick={
                    () => dispatch({type: 'decrement', value: 1})
                } >-</button>

                <button className='btn btn-success m-3 text-light' onClick={
                    () => dispatch({type: 'increment', value: 1})
                }>+</button>
            </div>

            <div className='col-6 text-center'>
                <p className='h1'>{count.countTwo}</p>

                <button className='btn btn-danger m-3 text-light' onClick={
                    () => dispatch({type: 'decrement2', value: 10})
                } >-</button>

                <button className='btn btn-success m-3 text-light' onClick={
                    () => dispatch({type: 'increment2', value: 10})
                }>+</button>
            </div>

            <div className='col d-flex justify-content-center'>
                <button className='btn btn-warning m-3 px-5 text-light' onClick={
                    () => dispatch({type: 'reset'})
                }>Reset</button>
            </div>
        </div>
    )
}

export default Count;
