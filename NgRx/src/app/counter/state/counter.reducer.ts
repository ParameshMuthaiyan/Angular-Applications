import { initialState } from './counter.state'
import { Action, createReducer, on } from '@ngrx/store';
import { changeName, customIncrement, decrement, increment, reset } from './counter.action';

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1,
        };
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0,
        };
    }),
    on(customIncrement, (state, action)=>{
        return {
            ...state,
            counter: state.counter + action.count,
        };
    }),
    on(changeName, (state)=>{
        return {
            ...state,
            name:'Paramesh Amuyan',
        };
    }),

);

export function counterReducer(state: { counter: number; name : string } | undefined, action: Action) {
    return _counterReducer(state, action);
}