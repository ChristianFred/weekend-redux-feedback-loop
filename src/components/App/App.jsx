import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// These are my component pages
import FeelingInput from '../FeelingInput/FeelingInput';
import UnderstandingInput from '../UnderstandingInput/UnderstandingInput';
import SupportInput from '../SupportInput/SupportInput';
import CommentsInput from '../CommentsInput/CommentsInput';
import OrderDetails from '../OrderDetails/OrderDetails';
import CompletedSurvey from '../CompletedSurvey/CompletedSurvey';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () => {
    axios({
      method: 'GET',
      url: '/api/feedback'
    }).then((response) => {
      dispatch({
        type: 'SET_FEEDBACK_LIST',
        payload: response.data
      })
    }).catch(error => {
      console.error('GET /api/feedback failed', error);
    })
  }

  const addFeedbackItem = (newItem) => {
    axios
      .post('/api/feedback', newItem)
      .then((response) => {
        getFeedback();
      })
      .catch((error) => {
        alert(`Couldn't add feedback item`);
        console.error('Error adding to feedback', error);
      });
  };

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4> Don't forget it!</h4>

        </header>
        <Route path="/" exact>
          <FeelingInput/>

        </Route>
        <Route path="/UnderstandingInput" exact>
          <UnderstandingInput />
        </Route>

        <Route path="/SupportInput" exact>
          <SupportInput />
        </Route>

        <Route path="/CommentsInput" exact>
          <CommentsInput />
        </Route>

        <Route path="/OrderDetails" exact>
          <OrderDetails 
          addFeedbackItem={addFeedbackItem}
          />
        </Route>

        <Route path="/CompletedSurvey" exact>
          <CompletedSurvey />
        </Route>

      </Router>

    </div>
  );
}

export default App;
