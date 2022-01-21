import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,  Link} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <div>
      <header>
        <div className="logo">
          LUI
        </div>

      </header>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/dialog">对话框</Link>
            </li>
            <li>
              <Link to="/layout">布局</Link>
            </li>
          </ul>
        </aside>
        <main>
        
        </main>
      </div>
    </div>
  </Router>
  , document.querySelector('#root'));