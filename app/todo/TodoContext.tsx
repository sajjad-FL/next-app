'use client'
import React, { useReducer, createContext } from 'react';

export interface IState {
    id: number | string;
    name: string;
    status: string;
}

const initialState: IState[] = [];

type DeleteTodo = {
    type: 'DELETE_TODO';
    payload: number | string;
}

type AddTodo = {
    type: 'ADD_TODO';
    payload: IState;
}

type UpdateTodo = {
    type: 'UPDATE_TODO';
    payload: IState;
}

type GetTodo = {
    type: 'GET_TODO';
    payload: IState[]
}

type ActionType = GetTodo | UpdateTodo | AddTodo | DeleteTodo;

const reducer = (state: Array<IState>, action: ActionType) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                { id: action.payload.id, name: action.payload.name, status: action.payload.status }
            ]

        case 'DELETE_TODO':
            return state.filter(state => state.id !== action.payload);

        case 'GET_TODO':
            return state;

        case 'UPDATE_TODO':
            const remainItem = state.filter(state => state.id !== action.payload.id);
            return [...remainItem, { id: action.payload.id, name: action.payload.name, status: action.payload.status }];

        default:
            return state;
    }
}

export const ToDoContext = createContext<{ state: Array<IState>; dispatch: React.Dispatch<ActionType> }>({
    state: initialState,
    dispatch: () => { }
})

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return <ToDoContext.Provider value={{ state, dispatch }}>
        {children}
    </ToDoContext.Provider>;
};