import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import StateForm from './StateForm';
import Forecast from './Forecast';

export default function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div className="home-container" style={{ backgroundImage: "url('app/images/background.jpg')" }}>
                <h1>Enter a City and State</h1>
                <StateForm />
              </div>
            )}
          />
          <Route path="/forecast" component={Forecast} />
        </Switch>
      </div>
    </Router>
  );
}
