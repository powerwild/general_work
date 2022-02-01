import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import SingleArticle from '../SingleArticle';
import { loadArticles } from '../../store/articleReducer';
import ArticleDetail from '../ArticleDetail';

//GOALS:
// Load redux with the articles
  // import useDispatch
  // import loadArticles
// Listen for (aka subscribe to) changes in Redux state
// List article entries based on Redux state

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articleState.entries);

  useEffect(() => {
    dispatch(loadArticles());
  }, [])

  return (
    <div>
      <h1>ArticleList</h1>
      <ol>
        {articles.map(({title, id}) => {
          return <ArticleDetail key={id} id={id} title={title} />
        })}
      </ol>

      <Switch>
        <Route path='/article/:id'>
          <SingleArticle articles={articles}/>
        </Route>
      </Switch>
    </div>
  );
};
export default ArticleList;
