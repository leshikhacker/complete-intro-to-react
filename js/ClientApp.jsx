import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function(props) {
  return ce(
    'div',
    null,
    ce(
      'h1',
      {
        style: {
          color: props.colour
        }
      },
      null,
      props.title
    )
  );
};

const MyFirstComponent = function() {
  return ce(
    'div',
    {
      id: 'my-first-component'
    },
    ce(MyTitle, {
      title: 'Lost',
      colour: 'YellowGreen'
    }),
    ce(MyTitle, {
      title: 'Gannibal',
      colour: 'GreenYellow'
    }),
    ce(MyTitle, {
      title: 'Supernatural',
      colour: 'LimeGreen'
    }),
    ce(MyTitle, {
      title: 'Teenwolf',
      colour: 'Peru'
    })
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));
