import React from 'react';
import './App.css';

import DraggableNote from './components/draggable-note/draggable-note';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Draggable Note</h2>
        <div>
          Made by <a href="https://about.phamvanlam.com/">Lam Pham</a>.
          Visit me at <a href="https://completejavascript.com/">completejavascript.com</a>.
        </div>

        <DraggableNote
          title={`Click here to move the note`}
          width={`400`}
          height={`250`}
          top={`150`}
          left={`350`}
          content={''}
        />
      </div>
    );
  }
}
