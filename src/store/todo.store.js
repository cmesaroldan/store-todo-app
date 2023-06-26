import {Todo} from '../todos/models/todo.model';

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Peding: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del poder'),
        new Todo('Piedra del realidad'),

    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log('InitStore');
}


const loadStore = () => {
    throw new Error ('Not implemented');
}

const getTodos = (filter = Filters.All) => {
    switch ( filter ){
        case Filters.All:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter( todo => todo.done ); //Retorna si es tru

        case Filters.Peding:
            return state.todos.filter( todo => !todo.done ); //Niega y retorna los que aun no se han terminado
        default:
            throw new Erorr (`Option ${filter} is not valid`);

    }
}

/**
 * 
 * @param {description} description 
 */
const addTodo = ( description ) =>{
    if ( !description) throw new Error ('Description is required');
    state.todos.push( new Todo ( description));
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) =>{
    
    state.todos = state.todos.map( todo => {
        if ( todo.id == todoId){
            todo.done = !todo.done;
        }
        return todo;
    });

}

/**
 * 
 * @param {String} todoId 
 */
const deletedTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId ); //Retorna aquellos que no sea el especificado
}


const deletedCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done );
}

/**
 * 
 * @param {filter} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) =>{
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}


export default {
    initStore,
    toggleTodo,
    deletedTodo,
    deletedCompleted,
    setFilter,
    getCurrentFilter,
    loadStore,
    getTodos,
    addTodo,
}