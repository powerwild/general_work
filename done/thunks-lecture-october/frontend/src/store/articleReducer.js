

const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'article/addArticle';

export const addArticle = (newArticle) => ({
  type: ADD_ARTICLE,
  newArticle,
});

export const loadArticles = (articles) => {
  return { type: LOAD_ARTICLES, articles };
};

// 4. Create thunk creator for GET request
export const getArticles = () => async (dispatch, getState) => {
  const response = await fetch('/api/articles');

  if (response.ok) {
    const articles = await response.json();
    dispatch(loadArticles(articles));
  }
  return response;
};

export const createArticle = (newArticle) => async (dispatch, getState) => {
  const response = await fetch('/api/articles', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(newArticle)}
    )
    if (response.ok) {
      const newArticle = await response.json();
      dispatch(addArticle(newArticle))
    }
    return response;
}

// 7. Create thunk creator for POST request

const initialState = { entries: {}, isLoading: true, likes: 0 };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      const newState = {...state};
      action.articles.forEach(article => newState.entries[article.id] = article);
      return newState;
    case ADD_ARTICLE:
      const updateState = {...state};
      updateState.entries = { ...state.entries, [action.newArticle.id] : action.newArticle }
      return updateState;
    default:
      return state;
  }
};

export default articleReducer;
