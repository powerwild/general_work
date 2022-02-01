//GOAL:
//import the data from data/data.json
import articles from '../data/data.json';

//build an articleReducer complete with constants, actions and action creators

//create CONSTANTS for action creators
const LOAD_ARTICLES = 'articles/loadArticles';
const ADD_ARTICLE = 'articles/addArticle';

//show action object
export const loadArticles = () => {
    return {
        type: LOAD_ARTICLES,
        articles
    }
}

export const addArticle = (article) => {
    return {
        type: ADD_ARTICLE,
        article
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
        case ADD_ARTICLE:
            return {...state, entries: [...state.entries, action.article]}
        default:
            return state;
    }
}

export default articleReducer;
