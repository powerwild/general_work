import { useParams } from 'react-router-dom';

import './SingleArticle.css';

//GOALS
// Grab the article id from the parameter
// Find the correct article from within the arrray of all articles
// Programmatically render the actual article

const SingleArticle = ({articles}) => {
  const {id} = useParams();
  const singleArticle = articles.find(article => article.id === id);

  return (
    <div className='singleArticle'>
      <h1>{singleArticle?.title}</h1>
      <img
        src={singleArticle?.imageUrl}
        alt={singleArticle?.title}
      />
      <p>{singleArticle?.body}</p>
    </div>
  );
};
export default SingleArticle;
