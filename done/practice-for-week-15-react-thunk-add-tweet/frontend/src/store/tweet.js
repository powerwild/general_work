// constant to avoid debugging typos
const GET_ALL_TWEETS = 'tweet/getAllTweets';
const CREATE_TWEET = 'tweet/CREATE_TWEET';

//regular action creator
const loadTweets = (tweets) => {
  return {
    type: GET_ALL_TWEETS,
    tweets
  };
};
// thunk action creator
export const getAllTweets = () => async (dispatch) => {
  const response = await fetch('/api/tweets');

  if (response.ok) {
    const data = await response.json();

    dispatch(loadTweets(data));
    return data;
  }
};

const createTweet = (newTweet) => {
  return {
    type: CREATE_TWEET,
    newTweet
  }
};
export const createTweetThunk = (newTweetData) => async (dispatch) => {
  const fetchRes = await fetch('/api/tweets', {method:"POST", headers: {'content-type': 'application/json'}, body: JSON.stringify(newTweetData)});
  if (fetchRes.ok) {
    const data = await fetchRes.json();
    dispatch(createTweet(data));
    return data;
  }
}

// state object
const initialState = {};

// reducer
const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TWEETS: {
      const newState = {};
      action.tweets.forEach((tweet) => (newState[tweet.id] = tweet));
      return newState;
    }
    case CREATE_TWEET: {
      const addedTweet = {...state};
      addedTweet[action.newTweet.id] = action.newTweet.message;
      return addedTweet;
    }
    default:
      return state;
  }
};

export default tweetsReducer;
