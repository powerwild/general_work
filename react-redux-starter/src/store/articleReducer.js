//GOAL:
//import the data from data/data.json
import articles from '../data/data.json';

//build an articleReducer complete with constants, actions and action creators

//create CONSTANTS for action creators
const LOAD_ARTICLES = 'articles/loadArticles';
//show action object
export const loadArticles = () => {
    return {
        type: LOAD_ARTICLES,
        articles
    }
}

//create Action Creators

//create initialState
const initialState = {entries: [], isLoading: true};

//create articleReducer
const articleReducer = (state= initialState, action) => {
    switch(action.type) {
        case LOAD_ARTICLES:
            return {...state, entries: [...action.articles]}
        default:
            return state;
    }
}

export default articleReducer;
