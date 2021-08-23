import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FeelingInput from '../FeelingInput/FeelingInput';
import UnderstandingInput from '../UnderstandingInput/UnderstandingInput';
import SupportInput from '../SupportInput/SupportInput';
import CommentsInput from '../CommentsInput/CommentsInput';
import OrderDetails from '../OrderDetails/OrderDetails';
import CompletedSurvey from '../CompletedSurvey/CompletedSurvey';
import { useSelector } from 'react-redux';

function App() {

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4> Don't forget it!</h4>

        </header>
        <Route path="/FeelingInput" exact>
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
          <OrderDetails />
        </Route>

        <Route path="/CompletedSurvey" exact>
          <CompletedSurvey />
        </Route>

      </Router>

    </div>
  );
}

export default App;
