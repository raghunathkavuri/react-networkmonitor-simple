import React from 'react';
import './style.css';

import useOnline from './onlinestatus';

export default function App() {
  const online = useOnline();

  return (
    <div>
      <h3 class="ui center aligned icon header">
        <i class="circular plug icon"></i>
        React network Monitor
      </h3>

      <div class="ui two column centered grid">
        <span>
          {online ? (
            <div className="ui green message">
              {' '}
              <i class="wifi icon"> </i> Congrats you are ONLINE
            </div>
          ) : (
            <div className="ui red message">
              {' '}
              <i class="meh icon"> </i>Sorry you are OFFLINE
            </div>
          )}
        </span>{' '}
      </div>
    </div>
  );
}
