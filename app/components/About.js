import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';

export default function About() {
  return (
    <div style={{ paddingTop: '40px' }} className="container">
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={10}>
              <Header as="h1" style={{ fontSize: '2em' }}>
                My Weather App
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                This is me learning React JS by creating a weather app. This project is based on the same Weather App
                created by{' '}
                <a href="https://github.com/tylermcginnis/react-fundamentals-curriculum">
                  Tyler McGinnis on his react course
                </a>
                {'. '}
                This project is implemented with several concepts such as React Router, async await with axios and es
                lint.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}
