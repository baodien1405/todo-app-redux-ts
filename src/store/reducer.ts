import {Store} from "./types";
import { addTodo, removeTodo, toggleTodo, updateTodo } from "./utils";
import { ActionTypes, ADD_TODO, REMOVE_TODO, SET_NEWTODO, SET_TODOS, TOGGLE_TODO, UPDATE_TODO } from './actions';

const todoReducer = (
  state: Store = {
    todos: [],
    newTodo: ""
  },
  action: ActionTypes
) => {
  switch(action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload
      }
    case ADD_TODO:
      return {
        ...state,
        newTodo: "",
        todos: addTodo(state.todos, state.newTodo)
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: removeTodo(state.todos, action.payload)
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: toggleTodo(state.todos, action.payload)
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: updateTodo(state.todos, action.payload.id, action.payload.text)
      }
    case SET_NEWTODO:
      return {
        ...state,
        newTodo: action.payload
      }
    default:
      return state;
  }
}

export default todoReducer;