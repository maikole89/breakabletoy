import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import EventListContainer from './EventListContainer';
import EventShow from '../components/EventShow';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={EventListContainer}/>
        <Route path="/events" component={EventListContainer}/>
        <Route path="/events/:id" component={EventShow} />
      </Route>
    </Router>
  )
}
export default App;
