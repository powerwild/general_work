import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import SingleArticle from '../SingleArticle';
import { loadArticles } from '../../store/articleReducer';


//GOALS:
// Load redux with the articles
  // import useDispatch
  // import loadArticles
// Listen for (aka subscribe to) changes in Redux state
// List article entries based on Redux state

const ArticleList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadArticles());
  }, [])

  return (
    <div>
      <h1>ArticleList</h1>
      <ol>
        <li>Gilligans Island. Is it true?</li>
        <li>A Baseball Moment</li>
        <li>Poke Moment</li>
        <li>Cool Cats</li>
        <li>Why Am I At Home</li>
      </ol>

      <Switch>
        <Route path='/article/:id'>
          <SingleArticle />
        </Route>
      </Switch>
    </div>
  );
};
export default ArticleList;
