import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import StateForm from './StateForm';
import Forecast from './Forecast';
import Details from './Details';
import About from './About';
// import backgroundImage from '../images/background.jpg';

export default function App() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <div className="container">
            <Navbar />

            <div style={{ height: '100%' }}>
              <TransitionGroup style={{ height: '100%' }}>
                <CSSTransition key={location.key} classNames="fade" timeout={500}>
                  <Switch>
                    <Route
                      exact
                      path="/"
                      render={() => (
                        // <div className="home-container" style={{ backgroundImage }}>
                        <div className="home-container">
                          <h1>Enter a City and State</h1>
                          <StateForm />
                        </div>
                      )}
                    />
                    <Route path="/forecast" component={Forecast} />
                    <Route path="/details/:state" component={Details} />
                    <Route path="/about" component={About} />
                    <Route render={() => <h1 className="text-center">Four oh Four.</h1>} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        )}
      />
    </Router>
  );
}

// App.propTypes = {
//   location: PropTypes.object.isRequired,
// };
